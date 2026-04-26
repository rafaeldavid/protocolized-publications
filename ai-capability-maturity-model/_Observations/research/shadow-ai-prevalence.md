---
id: signal-shadow-ai-prevalence
category: signal
date_observed: 2024-2025
date_added: 2026-04-25
source_quality: secondary
status: active
affected_levels: [1]
affected_functions: [all, it, security]
tags: [shadow-ai, prevalence, gartner, cyberhaven, ibm, recoai, aggregated-signal]
sources:
  - url: https://www.gartner.com/en/information-technology
    title: "Gartner — shadow IT / shadow AI prevalence (cited in secondary sources; primary subscription-gated)"
  - url: https://www.cyberhaven.com/research
    title: "Cyberhaven research on enterprise ChatGPT data exposure"
  - url: https://www.ibm.com/security/data-breach
    title: "IBM Cost of a Data Breach Report 2025"
  - url: https://reco.ai/research
    title: "Reco.ai shadow AI research"
maintainer: rafa
---

# Shadow AI prevalence roundup (2024–2025)

## Summary
Aggregated industry-research signal across four sources documenting the prevalence and cost of shadow AI in enterprise environments. Cyberhaven estimates that **3.1% of enterprise ChatGPT users have submitted confidential company data**. IBM's 2025 Cost of a Data Breach Report finds that **97% of organizations experiencing AI-related security incidents lacked proper AI access controls**, with shadow AI incidents costing **$4.63M on average**. **44% of organizations experiencing a shadow AI incident suffered confirmed data compromise.** Gartner data — cited at 41% of employees acquiring, modifying, or creating technology outside IT visibility — currently flows through secondary citation; the primary Gartner figure is subscription-gated and should be attributed accordingly.

## Why it matters for the CMM
Empirical baseline for Section 1 and Section 5 of the litepaper. Three contributions:

1. **Modal-state evidence.** Aggregated across vendors and methodologies, the picture is consistent: shadow AI is widespread, weakly controlled, and materially expensive. This grounds the model's premise that Level 1 is the population mean, not the tail.
2. **Cost anchors at multiple scales.** $4.63M average per incident; 97% lacking access controls; 44% confirmed data compromise. Three different framings of the same underlying governance gap.
3. **Aggregator role.** Single-source figures are easy to dismiss; the aggregation across Gartner / Cyberhaven / IBM / Reco.ai is what makes this citable as signal rather than as anecdote.

## Claims citable from this observation
- Cyberhaven: 3.1% of enterprise ChatGPT users have submitted confidential company data
- IBM 2025: 97% of organizations experiencing AI-related security incidents lacked proper AI access controls
- 44% of organizations experiencing a shadow AI incident suffered confirmed data compromise
- Shadow AI incidents cost $4.63M on average across all sectors
- Gartner: 41% of employees acquire, modify, or create technology outside IT visibility (cite as "Gartner, as cited in [secondary source]" — primary figure subscription-gated)

## Related observations
- [samsung-chatgpt-leak](samsung-chatgpt-leak.md) — canonical individual L1 case the aggregate prevalence describes
- healthcare-shadow-ai — vertical-specific instance (Entry 30)
- legal-hallucination-sanctions — vertical-specific instance (Entry 29)
