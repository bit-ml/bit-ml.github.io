---
title: "Foundation Models are Implicit Deepfake Detectors"
date: 2026-08-10
type: academic
cover:
  image: teaser.png
research_direction: deepfake
draft: false
authors: "Stefan Smeu, Dragos-Alexandru Boldisor, Elisabeta Oneata, Dan Oneata"
venue: "Under review"
presentation: ""
---

**Links:** [arXiv](https://arxiv.org/abs/2608.09427) [GitHub](https://github.com/bit-ml/NormFake)

### Abstract

Pretrained self-supervised representations have emerged as a core component of current deepfake detection methods, yet it remains unclear which of their properties make real and fake media distinguishable. In this work, we uncover a surprisingly consistent phenomenon: across multiple pretrained models, datasets, and both image and video domains, fake samples systematically produce lower-magnitude representations than their real counterparts. Motivated by this finding, we formulate deepfake detection as an anomaly detection problem and show that simple statistics of feature magnitude achieve competitive performance with far more sophisticated deepfake detection methods. We further investigate the origin of this effect and demonstrate that reduced feature magnitude is primarily associated with semantic shifts introduced by fake content, while low-level generative fingerprints play a comparatively smaller role. Finally, we show that this discriminative signal strengthens as the size of the underlying foundation model grows, suggesting that advances in representation learning naturally translate into stronger zero-shot deepfake detectors.
