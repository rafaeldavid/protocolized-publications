---
id: research-armstrong-fde
category: research
date_observed: 2025-08-05
date_added: 2026-04-24
source_quality: primary
status: active
affected_levels: [2, 3, 4]
affected_functions: [engineering, product, sales]
tags: [forward-deployed-engineer, l2-to-l3-transition, platform-shift, services-economics, platform-feedback-loop]
sources:
  - url: https://theleverage.beehiiv.com/p/the-hottest-job-in-tech
    title: "The Hottest Job in Tech (Evan Armstrong, The Leverage, August 5, 2025)"
  - url: ../../Resources/The Hottest Job in Tech - by Evan Armstrong - The Leverage.txt
    title: Local copy of essay (text)
maintainer: rafa
---

# Armstrong — The Hottest Job in Tech (August 2025)

## Summary
Evan Armstrong's essay frames the **Forward Deployed Engineer (FDE)** as the role emerging to bridge vendor capability and customer operational reality in the AI era. Draws on OpenAI's own FDE deployment (customers spending $10M+/year), the unit economics of the role (FDE compensation $200–300K; services capped at the rule-of-thumb ~25% of Year-1 contract value, implying a ~$1M contract floor), and Workday's 2012 IPO — at which 35% of revenue came from on-site professional services — as historical precedent. Central argument: AI is a platform shift whose binding constraints are operational, not technical, and the FDE is the role that absorbs that operational work until the platform itself can encode the patterns the FDE discovers.

## Why it matters for the CMM
Anchors both the Level 2 → Level 3 transition and a key dynamic at Level 4. Four contributions:

1. **L2 → L3 transition role.** Level 2 ("sanctioned but ungoverned") fails when broad tool access collides with undesigned workflow. The FDE is the empirical shape of the bridge: somebody who embeds with the customer, builds the first governed workflow end-to-end, then hands it to the platform.
2. **L4 platform feedback loop.** The healthy FDE pattern is *FDE-discovers-pattern → platform-absorbs-it → next-FDE-engagement-starts-higher*. This is the structural mechanism by which Level 4 organizations move from project-specific capability to integrated infrastructure.
3. **Contract-value floor explains who can afford the L2→L3 transition.** Armstrong's $1M floor implies this role has historically been reserved for the largest customers. The mid-market gap — how to cross L2→L3 without an FDE — is an open structural question the model surfaces.
4. **Operational, not technological.** Armstrong's framing that the changes are "not even technological, they are operational" is one of the litepaper's load-bearing sentences for distinguishing the AI CMM from technology-adoption maturity models.

## Claims citable from this observation
- OpenAI deploys FDEs to customers spending $10M+/year
- FDE cost structure: $200–300K salary; services rule of thumb ≤25% of Year-1 contract value → effective $1M+ contract-value floor
- At Workday's 2012 IPO, 35% of revenue came from on-site professional services
- "The largest reason that the FDE has happened today is because AI will end up being a bigger and more important platform shift than the cloud was. The biggest changes are not even technological, they are operational." (verbatim, Armstrong)

## Related observations
- [uber-agentic-shift](uber-agentic-shift.md) — what the L3/L4 end-state looks like once the transition is complete
- [openai-state-of-enterprise-ai](openai-state-of-enterprise-ai.md) — frontier-vs-median gap this role is built to close
- [hbr-ai-intensifies-work](hbr-ai-intensifies-work.md) — failure mode (intensification) when the FDE-equivalent protocol layer is missing
- [scholl-vertical-integration](scholl-vertical-integration.md) — Slacker Index lens on what the FDE is collapsing
