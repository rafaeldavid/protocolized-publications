---
id: research-scholl-vertical-integration
category: research
date_observed: 2025-09-14
date_added: 2026-04-25
source_quality: primary
status: active
affected_levels: [3, 4]
affected_functions: [engineering, operations, supply-chain]
tags: [slacker-index, vertical-integration, iteration-cycle, l3-to-l4-transition]
sources:
  - url: https://blog.boomsupersonic.com/move-fast-and-dont-break-safety-critical-things-part-2-vertical-integration
    title: "Move Fast and Don't Break (Safety Critical) Things Part 2: Vertical Integration (Blake Scholl, Boom Supersonic, September 14, 2025)"
  - url: ../../Resources/Move Fast and Don't Break (safety critical) Things Part 2_ Vertical Integration.txt
    title: Local copy of essay (text)
maintainer: rafa
---

# Scholl — Vertical Integration, Part 2 (September 2025)

## Summary
Second essay in Scholl's series. Introduces the **Slacker Index** as a diagnostic ratio: total lead time divided by actual working time. The number measures how much of a part's lifecycle is spent waiting versus being worked on. Canonical example: a turbine blade priced at $1M per engine with a 6-month lead time. Boom replaced that supply chain by buying a $2M 3D printer, collapsing lead time to 24 hours and enabling daily iteration. Argument: vertical integration is not about cost — it is about iteration speed.

## Why it matters for the CMM
Provides the structural diagnostic for the Level 3 → Level 4 transition. Three contributions:

1. **Slacker Index as governance bottleneck diagnostic.** In AI deployment, the equivalent ratio is review-and-approval lead time vs. generation time. When agentic generation is minutes and review cycles are weeks, the Slacker Index reveals where governance has not yet caught up to capability.
2. **L3→L4 transition is collapsing the ratio.** Organizations move from Level 3 (designed but slow-cycle workflows) to Level 4 (infrastructural, daily-iteration workflows) by attacking the slack — not by buying more AI tooling.
3. **Iteration speed changes problem class.** "Problems that would be existential with a year-long lead time become solvable with a 24-hour iteration cycle." This is the mechanism by which L4 organizations dissolve problems that lower-maturity organizations treat as constraints.

## Claims citable from this observation
- Slacker Index = total lead time ÷ actual working time
- Turbine blade case: $1M per engine, 6-month lead time, replaced by a $2M 3D printer enabling 24-hour production and daily iteration
- "It doesn't just shave months off a schedule. It changes the physics of what's possible. Problems that would be existential with a year-long lead time become solvable with a 24-hour iteration cycle." (verbatim, Scholl)

## Related observations
- [scholl-move-fast-pt1](scholl-move-fast-pt1.md) — Part 1 of the same series; Jevons's Law of engineering
- [uber-agentic-shift](uber-agentic-shift.md) — software-domain instance of collapsed iteration as the L3→L4 trajectory
- [armstrong-fde](armstrong-fde.md) — the bridging role that surfaces where governance lead time exceeds generation speed
