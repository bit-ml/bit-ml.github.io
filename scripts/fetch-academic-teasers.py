#!/usr/bin/env python3
"""
For each academic news article: extract arxiv ID from index.md, download PDF,
render a teaser PNG (prefer first figure; fall back to first page), save in article folder.

By default skips folders that already have teaser.png. Pass --force to refresh all,
or pass folder slug(s) to process only those entries.
"""
from __future__ import annotations

import argparse
import re
import sys
import urllib.request
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    raise SystemExit("Install PyMuPDF: pip install pymupdf")

# Capture full id including optional version (e.g. 2410.18970 or 2410.18970v3)
ARXIV_ABS_RE = re.compile(r"https://arxiv\.org/abs/([0-9]+\.[0-9]+(?:v[0-9]+)?)")
FIG1_RE = re.compile(r"^(?:Figure|Fig\.?)\s*1\b", re.IGNORECASE | re.MULTILINE)
# Default render scale; figure clips may go higher so the teaser is not tiny
PAGE_MATRIX = fitz.Matrix(2, 2)
MIN_FIGURE_OUTPUT_SIDE = 1000  # aim for at least this many pixels on the short side
TEASER_NAME = "teaser.png"
# Skip logos / icons when scanning embedded images
MIN_IMAGE_SIDE = 120
MIN_IMAGE_AREA = 40_000


def get_arxiv_id_from_md(md_path: Path) -> str | None:
    """Read index.md and return the arxiv id as in the link (including version if present)."""
    text = md_path.read_text(encoding="utf-8")
    m = ARXIV_ABS_RE.search(text)
    return m.group(1) if m else None


def download_pdf(arxiv_id: str, out_path: Path) -> bool:
    """Download PDF from arxiv; arxiv_id may include version (e.g. 2410.18970v3)."""
    url = f"https://arxiv.org/pdf/{arxiv_id}.pdf"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; TeaserBot/1.0)"})
        with urllib.request.urlopen(req, timeout=60) as resp:
            out_path.write_bytes(resp.read())
        return True
    except Exception as e:
        print(f"  download failed: {e}")
        return False


def _matrix_for_clip(clip: fitz.Rect, min_side: int = MIN_FIGURE_OUTPUT_SIDE) -> fitz.Matrix:
    short = max(1.0, min(clip.width, clip.height))
    scale = max(4.0, min_side / short)
    # Cap to avoid huge outputs from tiny clips
    scale = min(scale, 8.0)
    return fitz.Matrix(scale, scale)


def _save_clip(page: fitz.Page, clip: fitz.Rect, png_path: Path, *, highres: bool = False) -> bool:
    clip = clip & page.rect
    if clip.is_empty or clip.width < 40 or clip.height < 40:
        return False
    matrix = _matrix_for_clip(clip) if highres else PAGE_MATRIX
    pix = page.get_pixmap(matrix=matrix, clip=clip, alpha=False)
    pix.save(str(png_path))
    return True


def _figure_clip_from_caption(page: fitz.Page, caption: fitz.Rect) -> fitz.Rect | None:
    """Build a clip for the figure body only (no caption) above a 'Figure 1' label."""
    page_rect = page.rect
    pad = 6
    # Keep content roughly in the caption's column (two-column papers)
    col_x0 = max(page_rect.x0, caption.x0 - 24)
    col_x1 = min(page_rect.x1, caption.x1 + 24)

    def in_column(r: fitz.Rect) -> bool:
        mid = (r.x0 + r.x1) / 2
        return col_x0 - 20 <= mid <= col_x1 + 20

    # Prefer raster image rects sitting above the caption
    image_rects: list[fitz.Rect] = []
    for img in page.get_images(full=True):
        xref = img[0]
        try:
            for r in page.get_image_rects(xref):
                if r.y1 <= caption.y0 + 2 and r.width * r.height >= MIN_IMAGE_AREA and in_column(r):
                    image_rects.append(r)
        except Exception:
            continue

    content_rects = list(image_rects)

    # Vector figures (histograms, plots): union drawing paths above the caption
    if not content_rects:
        draw_rects: list[fitz.Rect] = []
        for d in page.get_drawings():
            r = d.get("rect")
            if not r:
                continue
            if r.width < 8 or r.height < 8:
                continue
            if r.y1 > caption.y0 + 2:
                continue
            if not in_column(r):
                continue
            # ignore full-page rules / thin lines spanning the column
            if r.height < 4 and r.width > 0.6 * (col_x1 - col_x0):
                continue
            draw_rects.append(fitz.Rect(r))
        if draw_rects:
            content_rects = draw_rects

    if content_rects:
        union = content_rects[0]
        for r in content_rects[1:]:
            union |= r
        # Stop above the caption / subplot titles so only the figure body is kept
        return fitz.Rect(
            max(page_rect.x0, union.x0 - pad),
            max(page_rect.y0, union.y0 - pad),
            min(page_rect.x1, union.x1 + pad),
            min(page_rect.y1, union.y1 + pad),
        )

    # Last resort: narrow band above the caption in the same column only
    height = min(280, caption.y0 - page_rect.y0 - 10)
    if height < 80:
        return None
    return fitz.Rect(col_x0, caption.y0 - height, col_x1, caption.y0 - 2)


def extract_first_figure(pdf_path: Path, png_path: Path) -> bool:
    """
    Try to extract Figure 1 (caption-guided clip, else first large embedded image).
    Returns False if nothing suitable is found.
    """
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"  open failed: {e}")
        return False

    try:
        # 1) Caption-guided: first "Figure 1" / "Fig. 1"
        for page in doc:
            for block in page.get_text("blocks"):
                x0, y0, x1, y1, text, *_ = block
                if not isinstance(text, str):
                    continue
                if not FIG1_RE.search(text.strip()):
                    continue
                caption = fitz.Rect(x0, y0, x1, y1)
                clip = _figure_clip_from_caption(page, caption)
                if clip and _save_clip(page, clip, png_path, highres=True):
                    return True

        # 2) First sufficiently large embedded image in reading order
        for page_index, page in enumerate(doc):
            placed: list[tuple[float, fitz.Rect, int]] = []
            for img in page.get_images(full=True):
                xref = img[0]
                try:
                    rects = page.get_image_rects(xref)
                except Exception:
                    rects = []
                for r in rects:
                    if min(r.width, r.height) < MIN_IMAGE_SIDE:
                        continue
                    if r.width * r.height < MIN_IMAGE_AREA:
                        continue
                    placed.append((r.y0, r, xref))
            if not placed:
                continue
            placed.sort(key=lambda t: (t[0], t[1].x0))
            _, rect, _xref = placed[0]
            # Re-render the placed image region at high resolution
            if _save_clip(page, rect, png_path, highres=True):
                return True

        return False
    except Exception as e:
        print(f"  figure extract failed: {e}")
        return False
    finally:
        doc.close()


def pdf_first_page_to_png(pdf_path: Path, png_path: Path) -> bool:
    try:
        doc = fitz.open(pdf_path)
        if len(doc) == 0:
            doc.close()
            return False
        page = doc[0]
        pix = page.get_pixmap(matrix=PAGE_MATRIX, alpha=False)
        pix.save(str(png_path))
        doc.close()
        return True
    except Exception as e:
        print(f"  render failed: {e}")
        return False


def pdf_to_teaser(pdf_path: Path, png_path: Path) -> str | None:
    """Create teaser.png; returns source used ('figure' or 'first-page'), or None on failure."""
    if extract_first_figure(pdf_path, png_path):
        return "figure"
    if pdf_first_page_to_png(pdf_path, png_path):
        return "first-page"
    return None


def process_article(item: Path, force: bool) -> bool:
    index_md = item / "index.md"
    if not index_md.is_file():
        return False

    text = index_md.read_text(encoding="utf-8")
    if "type: academic" not in text:
        return False

    img_match = re.search(r"!\[.*\]\(([^)]+\.(?:png|jpg|jpeg|webp))\)", text)
    if img_match and img_match.group(1).strip().lower() != TEASER_NAME:
        print(f"Skip (custom image): {item.name}")
        return False

    arxiv_id = get_arxiv_id_from_md(index_md)
    if not arxiv_id:
        print(f"No arxiv link: {item.name}")
        return False

    teaser_path = item / TEASER_NAME
    if teaser_path.is_file() and not force:
        print(f"Skip (teaser exists): {item.name}")
        return False

    pdf_path = item / "_arxiv.pdf"
    print(f"{item.name} arxiv={arxiv_id} ...", end=" ")

    if not download_pdf(arxiv_id, pdf_path):
        return False
    source = pdf_to_teaser(pdf_path, teaser_path)
    pdf_path.unlink(missing_ok=True)
    if not source:
        return False
    print(f" -> {TEASER_NAME} ({source})")
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "folders",
        nargs="*",
        help="News folder slug(s), e.g. 2026-04-23-temporal-taskification-streaming-cl",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-download and overwrite existing teaser.png files",
    )
    args = parser.parse_args()

    base = Path(__file__).resolve().parent.parent
    news_dir = base / "content" / "news"
    if not news_dir.is_dir():
        print("content/news not found", file=sys.stderr)
        return 1

    if args.folders:
        items = []
        for slug in args.folders:
            path = news_dir / slug
            if not path.is_dir():
                print(f"Not found: {slug}", file=sys.stderr)
                return 1
            items.append(path)
    else:
        items = sorted(p for p in news_dir.iterdir() if p.is_dir())

    for item in items:
        process_article(item, force=args.force)

    print("Done.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
