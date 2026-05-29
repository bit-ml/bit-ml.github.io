#!/usr/bin/env python3
"""
For each academic news article: extract arxiv ID from index.md, download PDF,
render first page to PNG (teaser), save in article folder.

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
MATRIX = fitz.Matrix(2, 2)  # 2x for readable resolution
TEASER_NAME = "teaser.png"


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
        with urllib.request.urlopen(req, timeout=30) as resp:
            out_path.write_bytes(resp.read())
        return True
    except Exception as e:
        print(f"  download failed: {e}")
        return False


def pdf_first_page_to_png(pdf_path: Path, png_path: Path) -> bool:
    try:
        doc = fitz.open(pdf_path)
        if len(doc) == 0:
            doc.close()
            return False
        page = doc[0]
        pix = page.get_pixmap(matrix=MATRIX, alpha=False)
        pix.save(str(png_path))
        doc.close()
        return True
    except Exception as e:
        print(f"  render failed: {e}")
        return False


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
    if not pdf_first_page_to_png(pdf_path, teaser_path):
        pdf_path.unlink(missing_ok=True)
        return False
    pdf_path.unlink(missing_ok=True)
    print(f" -> {TEASER_NAME}")
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
