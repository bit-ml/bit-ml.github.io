---
title: "Revisiting Adam for Streaming Reinforcement Learning"
date: 2026-05-07
type: academic
cover:
  image: teaser.png
research_direction: rl
draft: false
authors: "Florin Gogianu, Adrian Catalin Lutu, Razvan Pascanu"
venue: "Reinforcement Learning Conference (RLC) 2026"
presentation: ""
---

**Links:** [arXiv](https://arxiv.org/abs/2605.06764)

### Abstract

Learning from a sequence of interactions, as soon as observations are perceived and acted upon, without explicitly storing them, holds the promise of simpler, more efficient and adaptive algorithms. For over a decade, however, deep reinforcement learning walked the contrary path, augmenting agents with replay buffers or parallel sampling routines, in an effort to tame learning instability. Recently, this topic has been revisited by Elsayed et al. (2024), focusing on update computation through eligibility traces and modifications to the optimisation routine, resulting in the StreamQ algorithm. In this work we take a step back, investigating the efficacy of established updates, such as those implemented by DQN and C51 within this online setting. Not only do we find that they perform well, but through analysing how the optimisation algorithm generally, and Adam in particular, interacts with these updates, we contend that two properties are essential for robust performance: i) the derivative of the objective is to be bounded and ii) weight updates are variance-adjusted. Rigorous and exhaustive experimentation demonstrates that C51, which exhibits both characteristics, is competitive with StreamQ across a subset of 55 Atari games. Using these insights, we derive a variance-adjusted algorithm based on eligibility traces, termed Adaptive Q(λ), which approaches double the human baseline on the same subset, surpassing existing methods by all performance metrics.
