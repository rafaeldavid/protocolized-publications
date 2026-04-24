---
id: event-uber-agentic-shift
category: event
date_observed: 2026-03
date_added: 2026-04-24
source_quality: primary
status: active
affected_levels: [3, 4]
affected_functions: [engineering]
tags: [agentic-coding, platform-architecture, code-review-bottleneck, canonical-case]
sources:
  - url: https://www.youtube.com/watch?v=i1tZN41VKcE
    title: "Uber: Leading Engineering through an Agentic Shift (Chada and Smith, Pragmatic Summit, March 2026)"
  - url: ../../Resources/uber-agentic-shift-transcript.txt
    title: Uber agentic shift transcript (local)
  - url: ../../Resources/How Uber uses AI for development_ inside look.txt
    title: "How Uber Uses AI for Development: Inside Look (Orosz, The Pragmatic Engineer, March 2026)"
maintainer: rafa
---

# Uber — agentic shift in engineering (March 2026)

## Summary
Two paired sources (a Pragmatic Summit talk by Anshu Chada and Ty Smith, and a companion Pragmatic Engineer writeup by Gergely Orosz) document Uber's engineering transition into agentic coding by March 2026. Uber built a purpose-built internal platform and retooled its engineering workflow around agent-generated code. Reported adoption and volume figures are high; AI-related costs are up 6x since 2024; code review has emerged as the primary operational bottleneck as agent-authored PR volume grew.

## Why it matters for the CMM
Canonical Level 3 / Level 4 exemplar. Uber is not absorbing AI bottom-up through individual use — it has designed workflows, invested in platform infrastructure, and treats agentic coding as a first-class engineering practice. Two features make it paradigmatic:
1. The four-layer platform architecture (Michelangelo AI platform, internal context layer, industry agents, specialized agents) is what Level 4 infrastructure actually looks like inside one firm.
2. The emergence of code review as the new bottleneck is the governance trade Level 3/4 organizations face: when generation gets cheap, validation becomes the constraint.

The 6x AI cost increase since 2024 is a concrete anchor for the investment profile of Level 4.

## Claims citable from this observation
- "AI is enabling people to become superhumans in terms of their productivity and the impact that we can realize for our end users." (verbatim, Uber transcript)
- 84% of Uber developers are active agentic coding users (March 2026)
- 65–72% of code is AI-generated inside IDE tools at Uber
- Claude Code adoption at Uber grew from 32% of developers (December 2025) to 63% (February 2026)
- Code review became the primary operational bottleneck as agentic PR volume grew
- 11% of PRs at Uber were opened by agents (March 2026)
- Uber's AI-related costs are up 6x since 2024
- Internal agentic tooling includes Minion, Shepherd, Autocover, Code Inbox, and U Review
- Uber's agentic systems are split across four layers: (1) an internal AI platform built on Michelangelo; (2) internal Uber context (source code, docs, Slack, JIRA); (3) industry agents (Claude Code, Copilot, Codex, Cursor); (4) specialized agents (Minion background agent, Autocover test generation, uReview code review) (verbatim label)

## Related observations
- [armstrong-fde](armstrong-fde.md) — FDE as the L2→3 transition enabler; Uber shows what "after" looks like
- [openai-state-of-enterprise-ai](openai-state-of-enterprise-ai.md) — frontier organizations send 6x more messages than median; Uber is a concrete instance
- [accenture-art-of-ai-maturity](accenture-art-of-ai-maturity.md) — Achiever archetype (industrialized tooling, CEO sponsorship)
