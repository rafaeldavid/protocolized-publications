---
id: event-healthcare-shadow-ai
category: event
date_observed: 2025
date_added: 2026-04-25
source_quality: secondary
status: active
affected_levels: [1]
affected_functions: [healthcare, clinical-operations, it]
tags: [shadow-ai, healthcare, breach-cost, symplr, ibm, vertical-evidence]
sources:
  - url: https://www.symplr.com/2025-enterprise-healthcare-it-survey
    title: "symplr 2025 Enterprise Healthcare IT Survey"
  - url: https://www.ibm.com/security/data-breach
    title: "IBM Cost of a Data Breach Report 2025"
maintainer: rafa
---

# Healthcare shadow AI (2025)

## Summary
Two paired industry sources document healthcare's particularly acute Level-1 exposure. The symplr 2025 Enterprise Healthcare IT Survey reports that **86% of healthcare organizations had shadow AI incidents** in the surveyed period. IBM's 2025 Cost of a Data Breach Report puts the **average healthcare breach cost at $7.42 million** with a 279-day mean time to resolution. Across all sectors, shadow AI incidents add roughly $670K above baseline breach cost, averaging $4.63M per incident.

## Why it matters for the CMM
Vertical-specific anchor for the litepaper's claim that Level 1 is not just modal but materially expensive. Three contributions:

1. **Sector concentration.** 86% in healthcare specifically validates the "regulated vertical = larger gap" thesis: high-stakes data and high-stakes use without commensurate governance.
2. **Cost as forcing function.** $7.42M average breach cost translates Level-1 risk from abstract to budgetable — a useful anchor for the CISO/CIO audience the assessment targets.
3. **Time-to-resolution dimension.** 279 days is itself a Slacker Index signal — the longer detection-to-resolution stretches, the more total damage accrues.

## Claims citable from this observation
- 86% of healthcare organizations had shadow AI incidents (symplr 2025 Enterprise Healthcare IT Survey)
- Average healthcare breach cost: $7.42 million; 279 days to resolve (IBM 2025 Cost of a Data Breach Report)
- Shadow AI incidents cost $4.63M on average across all sectors — approximately $670K above baseline

## Related observations
- [samsung-chatgpt-leak](samsung-chatgpt-leak.md) — canonical individual L1 case
- shadow-ai-prevalence — cross-industry aggregated signal (Entry 34)
- legal-hallucination-sanctions — adjacent vertical-specific Level-1 evidence (Entry 29)
