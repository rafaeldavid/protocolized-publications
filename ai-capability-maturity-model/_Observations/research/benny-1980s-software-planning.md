---
id: research-benny-1980s-software-planning
category: research
date_observed: 2025-11-16
date_added: 2026-04-25
source_quality: primary
status: active
affected_levels: [2, 3, 4]
affected_functions: [engineering, product]
tags: [ontological-drift, waterfall-return, cost-structure-flip, protocol-mechanism]
sources:
  - url: https://summerlightning.substack.com/p/why-does-ai-development-look-like-1980s
    title: "Why Does AI Development Look Like 1980s Software Planning? (Sachin Benny, Summer Lightning, November 16, 2025)"
  - url: ../../Resources/Why Does AI Development Look Like 1980s Software Planning_.txt
    title: Local copy of essay (text)
maintainer: rafa
---

# Benny — Why Does AI Development Look Like 1980s Software Planning? (November 2025)

## Summary
Sachin Benny's essay argues that LLM-era development inverts the cost structure that made Agile dominant. With LLMs, documentation, specifications, diagrams, and written artifacts are essentially free — but *ontological drift* (changes to the meaning of a term, schema, or interface mid-cycle) is extremely expensive, because agents, tools, and auto-generated artifacts depend on stable definitions. The result: organizations are returning to Waterfall-style front-loaded clarity not because they prefer it, but because Waterfall's communication structure (stable meanings, fixed interfaces, slow-changing schemas) now incurs the lowest transaction costs.

## Why it matters for the CMM
Section 2 of the litepaper uses this essay for the *mechanism* by which low-maturity AI governance fails. Three contributions:

1. **Ontological drift as the failure mode at L2/L3.** When organizations sanction AI tools without stabilizing terminology or interface contracts, agent-generated work continually breaks. The expense isn't the model — it's the rework caused by drift.
2. **Cost-structure flip is the protocol-theoretic lens.** Agile assumed cheap iteration and expensive specification; LLMs reverse that. The protocol layer (definitions, schemas, interfaces) becomes the load-bearing investment, not the throwaway scaffolding.
3. **Waterfall return as a CMM signal.** Mature AI deployment looks more like Humphrey-style defined-process maturity than late-2010s Agile — front-loaded clarity is back. This connects directly to the SEI CMM lineage the model inherits.

## Claims citable from this observation
- "In the LLM era, the cost structure flips. LLMs make documentation, specifications, diagrams, and written artifacts essentially free—but they make ontological drift extremely expensive. When agents, tools, and auto-generated artifacts depend on stable definitions, changing the meaning of a term or schema midstream breaks everything." (verbatim, Benny)
- "Organizations compensate by freezing definitions, front-loading clarity, and minimizing mid-cycle reinterpretation. This is a return to Waterfall—not because people suddenly prefer big plans but because the communication structure that Waterfall requires (stable meanings, fixed interfaces, slow-changing schemas) now incurs the lowest transaction costs." (verbatim, Benny)

## Related observations
- [finding-fault-lines](finding-fault-lines.md) — practiced-vs-encoded management is the firm-scale analog of ontological drift
- [rao-protocol-reader](rao-protocol-reader.md) — foundational protocol vocabulary the drift mechanism instantiates
- [vibe-coding-and-maker-movement](vibe-coding-and-maker-movement.md) — adjacent failure mode (evaluative anesthesia) when drift goes unchecked
- humphrey-managing-software-process — SEI CMM lineage the Waterfall return mirrors (Entry 38)
