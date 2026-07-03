---
title: "How the Optimizer Shapes Learned Solutions in Equivariant Neural Networks"
date: 2026-05-26
type: academic
cover:
  image: teaser.png
research_direction: generalization
draft: false
authors: "Teodor-Mihai Stupariu, Andrei Manolache"
venue: "ICML 2026 Workshop on Weight-Space Symmetries"
presentation: ""
---

**Links:** [arXiv](https://arxiv.org/abs/2605.27662)

### Abstract

Equivariant neural networks encode geometric symmetries by construction, yet they are often difficult to optimize and can underperform less constrained architectures. A growing body of work addresses this through architectural modifications such as constraint relaxation or approximate equivariance, while the role of the optimizer remains comparatively underexplored. We study this direction by comparing Muon and Adam across several equivariant and geometric architectures under pointcloud and molecular learning settings. On ModelNet40, where the comparison is clearest, Muon consistently improves over Adam across all architectures considered. We then analyze the trained ModelNet40 checkpoints through Hessian estimates, loss surface visualizations, and spectral properties of learned weights and intermediate representations. The checkpoints reached by Muon have larger Hessian curvature summaries but more regular loss surfaces, and their learned weights and representations have higher stable and effective ranks. These observations suggest that the interaction between optimizer design and geometric inductive bias deserves further attention from the community.
