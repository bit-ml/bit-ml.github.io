---
title: "Protein Fold Classification at Scale: Benchmarking and Pretraining"
date: 2026-05-18
type: academic
cover:
  image: teaser.png
research_direction: nlp
draft: false
authors: "Dexiong Chen, Andrei Manolache, Mathias Niepert, Karsten Borgwardt"
venue: "ICML 2026"
presentation: "Oral"
---

**Links:** [arXiv](https://arxiv.org/abs/2605.18552) [GitHub](https://github.com/BorgwardtLab/TEDBench)

### Abstract

Classifying protein topology is essential for deciphering biological function, but progress is held back by the lack of large-scale benchmarks that avoid duplicates and by models that do not scale well. We introduce TEDBench, a large-scale, non-redundant benchmark for protein fold classification constructed from the Encyclopedia of Domains (TED) and Foldseek-clustered AlphaFold structures. We show that on TEDBench, current protein representation learning methods either require very large models or fail to deliver strong performance. To address this challenge, we propose Masked Invariant Autoencoders (MiAE), a self-supervised framework for protein structure representation learning. MiAE uses an extremely high masking ratio of up to 90% with an SE(3)-invariant encoder and a lightweight decoder that reconstructs backbone coordinates from the latent representation and mask tokens. MiAE scales well and outperforms supervised counterparts and state-of-the-art baselines on TEDBench, establishing a strong recipe for protein fold classification. To test transfer beyond AlphaFold structures, we further benchmark on a curated dataset from experimental structures of CATH v4.4.
