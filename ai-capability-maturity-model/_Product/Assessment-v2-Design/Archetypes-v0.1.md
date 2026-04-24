---
title: Assessment archetypes · v0.1 inventory
version: v0.1 (2026-04-24)
status: draft · for review before writing reader-facing descriptors
depends_on: Framework-v1.md (v1.3, with the expanded "AI" concept)
succeeds_approach: v0.3.x binary forced-choice (archetypes are an alternative resolution model)
---

# Assessment archetypes — v0.1 inventory

## The approach shift

Previous drafts (v0.3.x) used 17 binary forced-choice questions aggregated to a single maturity level. That model measures *point-in-time state*. It doesn't capture *which strategy the organization is pursuing* on its path through AI adoption.

Two orgs can sit at the same measured maturity level for very different reasons:
- A large enterprise with a mandated Copilot rollout and patchy governance
- A startup whose product is AI-native but whose internal protocols are still ad hoc

Both score as "L2" on sum-based measurement. They are not the same organization. Different next moves matter.

**Archetypes** capture this. An archetype is a cluster of dimension-states that corresponds to a recognizable strategy. The diagnostic resolves first to an archetype, then the archetype maps to a maturity level — with the archetype itself carrying the diagnostic signal about what kind of path the org is on.

## Archetype format

Each archetype is specified by:
- **Name** — memorable, carries the strategy in a phrase
- **Strategy** — one line on what the org is actually pursuing
- **Dimension signature** — characteristic high / low pattern across D1–D7
- **Maturity placement** — which level the archetype resolves to in the 5-level model
- **AI-flavor emphasis** — which of the 5 AI flavors this archetype's AI work mostly lives in

## The 8 archetypes (v0.1 proposal)

### L1 archetypes

**1. The Cautious Abstainer**
- *Strategy.* Hold back on AI deployment until standards, risk, and regulatory posture stabilize. Protect exposure; let others pioneer.
- *Dimension signature.* Low D4 (little to see because little is deployed); low D7 (product and processes unchanged); D1 policy exists but has little to govern; D3 and D5 untested.
- *AI-flavor emphasis.* Flavors 1 + 2 tightly restricted; 3/4/5 minimal or external.
- *Maturity.* L1.

**2. The Accidental Adopter**
- *Strategy.* No strategy. AI arrives through employee initiative; the org hasn't taken a position. Samsung-before-ban.
- *Dimension signature.* Very low D4 (truly invisible); low D1 (no protocol); D2/D3/D5 untested because nothing is designed; variable D7 (whatever individuals have built quietly).
- *AI-flavor emphasis.* Flavor 1 dominant; occasional flavor 3 via personal accounts wiring into products.
- *Maturity.* L1.

### L2 archetypes

**3. The Mandated Mover**
- *Strategy.* Broad enterprise rollout. Mandate AI, roll out Copilot / enterprise ChatGPT, figure out governance while people use it. Shopify-style.
- *Dimension signature.* High tool-visibility (D4 on the tool axis), low governance specificity (D1), low D3 (review infrastructure lags), low D5 (generic not specialized).
- *AI-flavor emphasis.* Flavor 2 dominant. Flavors 3/4 not yet.
- *Maturity.* L2.

**4. The Over-Reliant** (anti-pattern)
- *Strategy.* Deep embed AI in a core function quickly, often customer-facing, without building the governance layer. Klarna's arc.
- *Dimension signature.* Very high D7, low D1, low D5 (nobody with deep domain expertise validating), low D4 on the quality-signal axis.
- *AI-flavor emphasis.* Flavor 3 aggressive; flavor 2 mandated; flavors 4/5 may exist but uninspected.
- *Maturity.* L2 with reversal risk. This archetype is specifically diagnostic — it looks more mature than L2 on some axes (D7) but catastrophically under-designed on others.

### L2–3 archetypes

**5. The Designed Pocket**
- *Strategy.* Prove deliberate AI governance in one function first, scale later. Uber engineering before the full platform build.
- *Dimension signature.* High D1 + D2 + D3 + D5 in one function (often engineering or data ops); low elsewhere. Bottleneck-scoring puts the org at L2-3 because its weakest high-stakes function is still L2.
- *AI-flavor emphasis.* Flavor 2 + flavor 5 mixed in the designed pocket; flavors 1/3/4 uneven across the rest of the org.
- *Maturity.* L2-3.

**6. The Bricoleur Network**
- *Strategy.* Empower domain experts individually. High-sophistication AI work happens at the individual level (F2F pattern); the formal org hasn't absorbed it.
- *Dimension signature.* High D5 at the individual level (bricoleurs), low D4 org-wide (the org can't see most of what its experts do), low D1 formally, high D6 at bilateral scope only (not sectoral).
- *AI-flavor emphasis.* Flavor 1 + flavor 5 (custom pipelines) driven by individual experts; flavors 2/3/4 lag behind.
- *Maturity.* L2-3 at the org level; individual bricoleurs operate at L3. This is the archetype *Mechanical Currents* and the blog post most directly identify.

### L3 archetypes

**7. The Platform Builder**
- *Strategy.* Build internal AI platforms that multiple teams depend on. Standardize governance, specialist validation, and monitoring into the platform itself. Uber's four-layer architecture.
- *Dimension signature.* High D1, high D2 (schemas held stable by platform), high D3 (review scaled with platform), high D5 (platform team holds specialized expertise), mid D6 (mostly intra-org), moderate D7.
- *AI-flavor emphasis.* Flavor 4 + flavor 5 central; platform provides flavors 2 and 3 to other teams.
- *Maturity.* L3.

**8. The AI-Native Builder**
- *Strategy.* Product depends on AI from the start. Governance and specialist validation designed alongside AI capability, not after a failure forces it. Boom Supersonic's mkBoom.
- *Dimension signature.* Very high D7, high D1 in AI-product workflows, high D5 (domain experts validating at every step), mid-high D6 (may coordinate with one or two external partners).
- *AI-flavor emphasis.* Flavor 3 + flavor 5 central to the product; flavor 2 supports internal work.
- *Maturity.* L3.

## Archetypes considered and deferred

| Archetype | Reason deferred |
|---|---|
| **The Compliance-First** (policies before capability) | Close to The Mandated Mover but tilted toward restriction. Probably a variant of #3 rather than a distinct archetype. Revisit if the quiz fails to separate these. |
| **The Sector Coordinator** (shaping industry standards) | Real L3-4 archetype but rare in our target audience. Add in a later iteration if data suggests it's worth it. |
| **The Infrastructure Incumbent** (L4 — AI as baseline sector expectation) | Only ~5% of enterprises are actually L4. Diagnostic asymmetry — few respondents will fit. Deferred to later iterations. |
| **The Kitification Focused** (internal kits as intermediate) | Your addition, potentially valuable. Currently overlaps with The Platform Builder. May deserve its own slot after live use reveals the spread. |

## Proposed quiz format (three models)

### Model A · Single archetype pick
One question: "Which of these best describes your organization's current AI strategy?" with 8 descriptor options (one per archetype). Reader picks one → archetype → maturity level.

- **Pros.** Simplest possible. Fastest scan. Matches quadrantology's spirit (pick the thing that resonates).
- **Cons.** Self-serving bias — respondents pick aspirationally. Hard to distinguish adjacent archetypes (Mandated Mover vs. Over-Reliant look similar to a respondent who doesn't see the failure modes).

### Model B · Two-step: strategy + symptom
Two questions. Q1 asks strategy (8 archetype options). Q2 asks about a specific recent behavior or outcome (to triangulate and catch self-serving bias — e.g., "In the last 6 months, AI-related quality issues reached customers…"). Combination resolves archetype.

- **Pros.** Harder to game. Captures strategy + state together.
- **Cons.** Longer. Requires careful Q2 design.

### Model C · Short pair of triangulating questions
Three questions, each presenting 4 archetype-shaped statement options (not 8 at once). Each question sharpens one axis. Pattern of picks resolves archetype.

- **Pros.** Cognitive load per screen is lower than 8 options. Still short overall.
- **Cons.** Needs careful design so Q1/Q2/Q3 decompose cleanly without cross-loading.

**My pick:** Model B, in one form or another. One question picks the strategy (archetype), a second question uses a concrete behavioral test to validate or downgrade (e.g., if you picked "Platform Builder" but your most recent AI-related quality issue was caught by a customer, you're actually closer to "Over-Reliant"). This is the forced-choice literature's standard "self-report + validated behavior" pairing in miniature.

## What's next

1. **Rafa reviews this inventory** and redlines archetype names, strategies, or dimension signatures.
2. **Decide quiz format** (A / B / C) — this affects how many reader-facing descriptors we need to write.
3. **Write reader-facing descriptors** (v0.4) for each archetype — plain-language, concrete, ≈40–80 words per descriptor.
4. **Design the Q2 behavioral test** (if Model B).
5. **Implementation** — replace the current 2-step quiz with the new archetype resolution flow.

## Open questions

- **Do we keep any of the v0.3.3 forced-choice questions?** They could serve as the Q2 behavioral test in Model B — a subset of ~5 concrete behavior questions used to validate the archetype pick. Worth discussing.
- **How do archetypes map to the existing 5 result cards?** Current cards are keyed to `'1'`, `'2'`, `'2-3'`, `'3'`, `'3-4'`. With 8 archetypes at 4 distinct levels, either we expand the result cards (archetype-specific) or we map 8→5. Archetype-specific cards are a better user experience but more work.
- **Is "Over-Reliant" too judgmental?** It's an anti-pattern, but the name signals that. Respondents may not self-identify as Over-Reliant. Alternative names: "The Eager Deployer", "The Ambitious Integrator". Name should be accurate without making the respondent defensive.
