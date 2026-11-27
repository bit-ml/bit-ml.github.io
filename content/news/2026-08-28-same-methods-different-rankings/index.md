---
title: "Same Methods, Different Rankings: Trainable Depth as an Evaluation Variable in Continual Learning"
date: 2026-08-28
type: academic
cover:
  image: teaser.png
research_direction: generalization
draft: false
authors: "Paul-Tiberiu Iordache, Elena Burceanu, Mihai Dascalu"
venue: "IEEE Access 2026"
presentation: ""
---

**Links:** [IEEE Access](https://ieeexplore.ieee.org/document/11670451) · [arXiv](https://arxiv.org/abs/2604.21927)

### Abstract

Continual learning (CL) examines how models learn a sequence of tasks while retaining previously learned knowledge. Despite substantial progress in benchmarking CL methods, comparative evaluations typically keep the fine-tuning regime fixed. In this paper, we argue that the fine-tuning regime, defined by the trainable parameter subspace, is itself a key evaluation variable. We formalize adaptation regimes as projected optimization over fixed trainable subspaces, showing that changing the trainable depth alters the effective update signal through which both current task fitting and knowledge preservation operate. This analysis motivates the hypothesis that method comparisons need not be invariant across regimes. We test this hypothesis in task incremental CL while considering 5 trainable depth regimes and 5 standard methods: online EWC, LwF, SI, GEM, and DER. We find that the relative ranking of methods is not consistently preserved across regimes when evaluating across 5 benchmark datasets, namely MNIST, Fashion MNIST, KMNIST, QMNIST, and CIFAR-100, and across 11 task orders per dataset. We further show that deeper adaptation regimes are associated with larger update magnitudes, higher forgetting, and a stronger relationship between the two. These results show that comparative conclusions in CL can depend strongly on the chosen fine-tuning regime, motivating regime-aware evaluation protocols that treat trainable depth as an explicit experimental factor.
