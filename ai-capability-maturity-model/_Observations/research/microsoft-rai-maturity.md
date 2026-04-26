---
id: research-microsoft-rai-maturity
category: research
date_observed: 2023-05
date_added: 2026-04-25
source_quality: primary
status: active
affected_levels: [1, 2, 3, 4]
affected_functions: [all, governance, ux]
tags: [maturity-baseline, responsible-ai, dimensions, sociotechnical, gap-source]
sources:
  - url: https://www.microsoft.com/en-us/research/uploads/prod/2023/05/RAI_Maturity_Model_Aether_Microsoft_WhitePaper.pdf
    title: "Microsoft Responsible AI Maturity Model (AETHER Committee — Vorvoreanu, Heger, Passi et al., May 2023)"
maintainer: rafa
---

# Microsoft — Responsible AI Maturity Model (May 2023)

## Summary
Microsoft Research's Responsible AI Maturity Model, produced by the AETHER Committee. Built on 80+ hours of interviews and focus groups with 90+ participants. Defines 24 empirically derived dimensions organized across three categories. The document warns explicitly against averaging scores across dimensions: a Level 5 in tooling does not have the same impact as a Level 5 in culture and leadership, because the dimensions are interdependent rather than additive. Cross-discipline collaboration (UX, anthropology, sociology, linguistics) appears as a Level 3 capability.

## Why it matters for the CMM
Section 1 of the litepaper uses Microsoft RAI as "what the best existing model measures, and the gap it leaves." Three contributions:

1. **Closest organizational counterpart in scope.** Microsoft RAI is the most rigorous organizational AI maturity model in public circulation; it sets the bar the CMM has to clear or differentiate against.
2. **Different gap addressed.** RAI models *responsible AI* (fairness, accountability, transparency, harm minimization). The CMM models *uncertainty governance* across deployment levels. Naming the difference makes the CMM's distinct contribution legible.
3. **Warning against averaging is directly inherited.** Section 4 of the litepaper and the assessment's bottleneck-scoring approach both descend from this warning — averaging across dimensions hides the weakest-governed function, which is where failure actually originates.

## Claims citable from this observation
- Built on 80+ hours of interviews and focus groups with 90+ participants
- 24 empirically derived dimensions organized across three categories
- "a level 5 in tooling does not have the same impact as level 5 in culture and leadership. Therefore, a particular high level is not meaningful when abstracted away from the context of its dimension and interdependency with other dimensions." (verbatim, Microsoft)
- "Disciplines with sociotechnical expertise such as UX, anthropology, sociology, linguistics, etc. are engaged to address RAI issues." (verbatim, Microsoft — Level 3, cross-discipline collaboration dimension)

## Related observations
- humphrey-managing-software-process — original SEI CMM 5-level architecture this RAI model adapts (Entry 38)
- [accenture-art-of-ai-maturity](accenture-art-of-ai-maturity.md) — industry-facing maturity counterpart
- bcg-ai-maturity-matrix — national-level counterpart (Entry 13)
- [finding-fault-lines](finding-fault-lines.md) — bottleneck-thinking applied to firm scale; same warning against averaging
