---
title: "Weakly-supervised deepfake localization in diffusion-generated images"
date: 2024-01-04
type: academic
cover:
  image: teaser.png
research_direction: deepfake
draft: false
authors: "Dragos-Constantin Tantaru, Elisabeta Oneata, Dan Oneata"
venue: "Winter Conference on Applications of Computer Vision (WACV) 2024"
presentation: ""
---

**Links:** [arXiv](https://arxiv.org/abs/2311.04584) [Proceedings](https://openaccess.thecvf.com/content/WACV2024/papers/Tantaru_Weakly-Supervised_Deepfake_Localization_in_Diffusion-Generated_Images_WACV_2024_paper.pdf) [GitHub](https://github.com/bit-ml/dolos)

### Abstract

The remarkable generative capabilities of denoising diffusion models have raised new concerns regarding the authenticity of the images we see every day on the Internet. However, the vast majority of existing deepfake detection models are tested against previous generative approaches (e.g. GAN) and usually provide only a "fake" or "real" label per image. We believe a more informative output would be to augment the per-image label with a localization map indicating which regions of the input have been manipulated. To this end, we frame this task as a weakly-supervised localization problem and identify three main categories of methods (based on either explanations, local scores or attention), which we compare on an equal footing by using the Xception network as the common backbone architecture. We provide a careful analysis of all the main factors that parameterize the design space: choice of method, type of supervision, dataset and generator used in the creation of manipulated images; our study is enabled by constructing datasets in which only one of the components is varied. Our results show that weakly-supervised localization is attainable, with the best performing detection method (based on local scores) being less sensitive to the looser supervision than to the mismatch in terms of dataset or generator.
