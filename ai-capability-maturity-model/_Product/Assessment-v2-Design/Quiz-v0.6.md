---
title: Assessment quiz · v0.6 evidence items + classification logic
version: v0.6 (2026-04-24)
status: draft · for review
depends_on: Archetypes-v0.5.md, Archetypes-v0.4.md, Framework-v1.md (v1.3)
supersedes: v0.3.3-statements-quad-register.md (the 17-question forced-choice model)
---

# Assessment quiz — v0.6 evidence items

The quiz that resolves a respondent to one of the 10 archetypes. Evidence-based rather than identity-based: we ask about concrete organizational behaviors and recent decisions, not "which statement resonates." That resists self-idealization and produces a more honest result.

## Design principles

1. **Evidence over identity.** Ask about past-12-months behaviors (deployments, rollbacks, inventories, pilots), not aspirations.
2. **Each question earns its place.** Either it resolves an axis, sharpens a sub-discrimination, or validates a claimed archetype via behavior.
3. **Dual scoring.** Every question contributes to (a) archetype axis classification and (b) maturity dimension (D1–D7) scoring. A single quiz produces both archetype and maturity level.
4. **Tiebreakers are behavioral.** When axis scoring is ambiguous, the behavioral validators break the tie — they're harder to game.
5. **No pre-screen on role/title.** Organizations with complex postures get routed to "the function you lead" scoping at the start.

## Classification architecture

The quiz resolves in three phases:

```
Phase 1 · Origin + Scope
   ├── Is AI adoption strategic or emergent?
   ├── What function are you answering for?
   │
Phase 2 · Axis Resolution
   ├── Stake   (Architecture vs. Augmentation)
   ├── Timing  (Ahead vs. Behind proof)
   ├── Locus   (Internal vs. External)
   └── Driver  (Chosen vs. Constrained)
   │
Phase 3 · Sub-Discrimination + Behavioral Validators
   ├── Retrofit vs. Greenfield       (Vanguard vs. Traveller)
   ├── Build now vs. Wait deliberately (Architect vs. Ratifier)
   ├── Internal chosen / Vendor / Constrained (Integrator / Broker / Warden)
   ├── Broad-shallow vs. Concentrated-sophisticated (Folkway vs. Guild)
   └── Behavioral validators (5–7 concrete recent-behavior items)

   → Result: archetype + maturity level (L1–L4)
```

**Total item count: 22 questions.** Can be compressed to 12 for a "quick" variant that loses some tiebreaker confidence; the 22-item version is the canonical one.

## Scope frame (asked first, before scoring begins)

**Q0 · Scope.** "This assessment is best answered about a specific function or business unit, not an entire enterprise. Which of these best describes the scope you'll answer for?"
- Entire organization (fewer than 200 employees)
- A specific business unit or division of a larger enterprise
- A specific function (engineering / product / operations / sales / support / etc.)
- A specific team or workstream within a function

The response is carried forward as context but doesn't score. It prevents the bifurcated-F500 problem flagged in v0.4's MECE check.

---

## Phase 1 · Origin + Scope (2 items)

### Q1 · Origin: how did AI adoption begin?

**How did AI adoption start in [scope]?**

| Answer | Origin signal | Dimensions |
|---|---|---|
| A · Leadership made a deliberate decision and communicated a strategy | **Strategic** (+2) | D1 +1, D4 +1 |
| B · A specific project or function triggered adoption, which spread | **Strategic** (+1) | D4 +1 |
| C · External pressure (customer demand, regulation, competitor) triggered it | **Strategic** (+1), **Constrained** (+1) | D1 +1 |
| D · Teams started using AI tools on their own before strategy caught up | **Emergent** (+2) | D4 −1 |

### Q2 · Visibility: does leadership see what's in use?

**Can leadership in [scope] produce a current, accurate inventory of AI tools in use?**

| Answer | Signal | Dimensions |
|---|---|---|
| A · Yes, updated regularly with data flows and ownership | **Strategic** (+2), **Architect / Integrator** (+1) | D4 +2, D1 +1 |
| B · Yes, but it's partial or out of date | **Strategic** (+1) | D4 +1 |
| C · No — we regularly find tools in use we didn't know about | **Emergent** (+2), **Folkway** (+1) | D4 −2 |
| D · The inventory isn't centralized; different teams track differently | Mixed, lean Emergent (+1) | D4 −1 |

---

## Phase 2 · Axis Resolution (8 items)

### Stake — Architecture vs. Augmentation (Q3–Q4)

**Q3. If AI tools stopped working in [scope] tomorrow, what would the immediate impact be?**

| Answer | Stake signal | Dimensions |
|---|---|---|
| A · Our product would stop functioning for customers | **Architecture** (+2), **Traveller** (+1) | D7 +2 |
| B · Our revenue engine would be impacted within days | **Architecture** (+2), **Vanguard / Traveller** (+1) | D7 +2 |
| C · Our operations would slow noticeably but customer-facing work continues | **Augmentation** (+2) | D7 +1 |
| D · Minimal impact — we don't rely on AI for anything critical | **Low stake** (Ratifier / Folkway / pre-strategic) | D7 −1 |

**Q4. Which best describes AI's role in [scope]?**

| Answer | Stake signal | Dimensions |
|---|---|---|
| A · AI is the foundation — the business is built around it | **Architecture** (+2), **Traveller** (+2) | D7 +2 |
| B · AI is product-integrated — customers experience it directly | **Architecture** (+1), **Vanguard or Traveller** (+1) | D7 +1 |
| C · AI is a capability layer — it makes existing work faster / better | **Augmentation** (+2) | D7 +1 |
| D · AI is a set of tools we're still evaluating | Pre-strategic or **Ratifier** (+1) | D7 −1, D1 −1 |

### Timing — Ahead vs. Behind proof (Q5–Q6)

**Q5. When a new AI use case relevant to your industry emerges, [scope] typically...**

| Answer | Timing signal | Dimensions |
|---|---|---|
| A · Moves first, accepting some deployments may need rollback | **Ahead** (+2), **Vanguard / Tinkerer** (+1) | D1 −1 (governance lags), D7 +1 |
| B · Waits until 2–3 peers have publicly deployed similar AI | **Behind** (+2), **Integrator** (+1) | D1 +1, D3 +1 |
| C · Waits until the technology feels fully mature and prioritizes polish | **Behind / deliberate** (+2), **Ratifier** (+2) | D1 +1 |
| D · Waits for regulatory clarity before deploying at scale | **Behind / constrained** (+2), **Warden** (+2) | D1 +2 |

**Q6. In the last 12 months, has [scope] publicly rolled back or walked back a visible AI deployment?**

| Answer | Timing signal | Dimensions |
|---|---|---|
| A · Yes, at least once, publicly | **Vanguard** (+3), **Ahead** (+2) | D3 −1 (temporal alignment lag), D1 −1 |
| B · No, but we've adjusted deployments internally without public visibility | **Integrator** (+1) or **Tinkerer** (+1) | D3 +1 |
| C · No — we haven't deployed anything visible enough to roll back | **Ratifier** (+2) or **Warden** (+1) | D7 −1 |
| D · No — we haven't deployed much at all | **Folkway** (+1), **Ratifier** (+1), **Warden** (+1) | D7 −2 |

### Locus — Internal vs. External (Q7–Q8)

**Q7. Where does your AI capability primarily live?**

| Answer | Locus signal | Dimensions |
|---|---|---|
| A · We build and run AI systems internally with internal talent | **Internal** (+2), **Architect / Integrator** (+1) | D5 +1 |
| B · A vendor runs the AI; we integrate vendor outputs into our work | **External** (+2), **Broker** (+2) | D5 −1 |
| C · A consultancy or services firm holds the capability for us | **External** (+2), **Broker** (+2) | D5 −1 |
| D · Mixed — significant internal capability alongside vendor services | **Variable** (+1), **Integrator** (+1) | D5 +1 |

**Q8. If your primary AI vendor changed pricing dramatically tomorrow, would your AI deployments slow down?**

| Answer | Locus signal | Dimensions |
|---|---|---|
| A · Yes, significantly — we're dependent on them | **External** (+2), **Broker** (+2) or **Warden** (+1) | D5 −2 |
| B · Some friction, but we'd adapt within weeks | **Variable** (+1), **Integrator** (+1) | D5 +1 |
| C · No — we build and own the core capability | **Internal** (+2), **Architect** (+1) | D5 +2 |
| D · We don't have deployments significant enough to be affected | **Folkway** (+1), **Ratifier** (+1) | D5 −1 |

### Driver — Chosen vs. Constrained (Q9–Q10)

**Q9. What's setting the pace of your AI adoption right now?**

| Answer | Driver signal | Dimensions |
|---|---|---|
| A · Our own investment priorities and strategic judgment | **Chosen** (+2) | D1 +1 |
| B · Regulatory approval cycles | **Constrained (regulatory)** (+2), **Warden** (+2) | D1 +2, D7 −1 |
| C · Budget constraints | **Constrained (resource)** (+1) | D7 −1 |
| D · Our vendor's roadmap and release schedule | **Broker** (+2), **External** (+1) | D5 −1 |
| E · Our internal technical and talent capacity | **Chosen** (+1), **Internal** (+1) | D5 +1 |
| F · Nothing is gating us — we deploy as fast as feasible | **Ahead** (+1), **Vanguard / Tinkerer** (+1) | D7 +1 |

**Q10. Is there a specific regulation you're waiting on before deploying AI more broadly?**

| Answer | Driver signal | Dimensions |
|---|---|---|
| A · Yes, a named regulation directly gates our deployment | **Warden** (+3), **Constrained** (+2) | D1 +2 |
| B · Not specifically, but the regulatory landscape feels unsettled | **Warden** (+1) or **Ratifier** (+1) | D1 +1 |
| C · No — regulation isn't the binding constraint for us | **Chosen** (+1) | — |

---

## Phase 3 · Sub-Discriminators + Behavioral Validators (12 items)

### Sub-discriminators (Q11–Q14)

**Q11 · Vanguard vs. Traveller (resolves Architecture + Ahead).**
**If you removed AI from [scope] today, what would happen to your existing products and services?**

| Answer | Signal | Dimensions |
|---|---|---|
| A · Existing products would still function but feel outdated | **Vanguard** (+2, retrofit pattern) | D7 +1 |
| B · Core product wouldn't exist — it was architected around AI | **Traveller** (+3, greenfield pattern) | D7 +2, D1 +1 |
| C · Nothing significant would change in the near term | **Ratifier / Warden / Folkway** (+1) | D7 −1 |

**Q12 · Architect vs. Ratifier (resolves Architecture + Behind).**
**Which best describes your current AI posture?**

| Answer | Signal | Dimensions |
|---|---|---|
| A · Actively building internal AI infrastructure that multiple teams will depend on | **Architect** (+3) | D1 +1, D2 +2, D5 +1 |
| B · Waiting for the next generation of AI tools before committing at scale | **Ratifier** (+3) | D7 −1 |
| C · We use vendor AI services rather than building infrastructure | **Broker** (+2) | D5 −1 |
| D · We're deploying specific use cases, not building infrastructure yet | **Integrator** (+1), **Tinkerer** (+1) | D1 +1 |

**Q13 · Integrator vs. Tinkerer (resolves Augmentation + timing question).**
**How many AI pilots or experiments are currently active in [scope]?**

| Answer | Signal | Dimensions |
|---|---|---|
| A · Many (5+) without clear retirement criteria | **Tinkerer** (+3) | D3 −1 |
| B · A handful, with defined success criteria and retirement paths | **Integrator** (+2) | D3 +1, D1 +1 |
| C · Few — we've codified most of what's running into standard practice | **Integrator** (+2) or **Architect** (+1) | D1 +2, D3 +1 |
| D · We don't systematically track pilots | **Folkway** (+2) | D4 −2 |

**Q14 · Folkway vs. Guild (resolves Emergent shape, only if Origin = Emergent).**
**When AI use happens informally in [scope], the dominant pattern is...**

| Answer | Signal | Dimensions |
|---|---|---|
| A · Many people using consumer tools (ChatGPT, Claude) for everyday tasks | **Folkway** (+3) | D4 −1, D5 −1 |
| B · A small group of experts building sophisticated custom pipelines or tools | **Guild** (+3) | D5 +2 at individual level, D4 −1 at org level |
| C · Both, in parallel | Score both; break tie via Q18 | D4 −1 |
| D · Neither — most informal AI use has tapered off | Pre-Folkway or moving to Strategic | — |

### Behavioral validators (Q15–Q22)

These are the highest-signal tiebreakers. Each maps to one or two archetypes strongly.

**Q15 · Architect signal.** Is there an internal AI capability (platform, shared tooling, or service) that multiple teams in [scope] depend on?
- Yes, recognized and actively used → **Architect** (+3), D1 +1, D2 +2
- In development → **Integrator** moving toward Architect (+1)
- No → no signal

**Q16 · Guild signal.** Is there at least one AI pipeline or workflow in [scope] that only one or two people fully understand?
- Yes → **Guild** (+3), D5 at individual +2, D4 org −1
- No → no signal

**Q17 · Traveller signal.** Did AI appear in your product architecture from day one?
- Yes, AI was foundational from inception → **Traveller** (+3), D7 +2
- No, we added AI capabilities over time → **Vanguard** if Ahead, **Integrator** if Behind
- AI isn't in our product (only operations) → rules out Traveller, no other signal

**Q18 · Folkway-vs-Guild tiebreaker.** If informal AI use in [scope] were made invisible to leadership, what would leadership lose?
- Visibility into a broad behavior change (many people would still be using AI) → **Folkway** (+2)
- A specific, high-value capability that a few people hold → **Guild** (+2)
- Nothing meaningful → pre-strategic / Ratifier signal

**Q19 · Ratifier signal.** Has leadership set a clear "we'll deploy AI when X condition is met" trigger?
- Yes, and X relates to technology or market maturity → **Ratifier** (+3)
- Yes, and X relates to regulation → **Warden** (+2)
- No, but we are deploying actively → rules out Ratifier
- No, and we're not deploying much → **Folkway** or passive **Ratifier** — score +1 each

**Q20 · Vanguard signal.** In the last 12 months, has a customer-facing AI incident in [scope] resulted in public discussion (press, social media, customer complaints at scale)?
- Yes → **Vanguard** (+3), D3 −1
- No, but internal incidents occurred → **Integrator** or **Tinkerer** (+1 each)
- No visible incidents and no significant deployments → **Ratifier / Warden / Folkway** signal

**Q21 · Broker signal.** What fraction of AI work in [scope] is delivered by external vendors or consultancies?
- Most or all → **Broker** (+3), D5 −1
- Significant portion alongside internal work → **Broker** (+1), **Integrator** (+1)
- Minor or none → rules out Broker

**Q22 · Leadership articulation.** When leadership in [scope] talks about AI, it's typically...
- A headline strategic priority with public commitments → **Vanguard** (+2) or **Traveller** (+1)
- A specific set of projects with defined success criteria → **Integrator** (+2) or **Architect** (+1)
- A compliance or policy posture → **Warden** (+2)
- A technology evaluation in progress → **Ratifier** (+2)
- Not really something leadership talks about in depth → **Folkway** (+2)

---

## Scoring model

**Two parallel scores accumulate through the quiz:**

1. **Archetype score** — a vector over 10 archetypes. Each answer adds weighted evidence.
2. **Maturity dimension score** — a vector over D1–D7. Each answer contributes to relevant dimensions.

**Archetype resolution.**

After Q22, normalize the archetype vector and take the highest-scoring archetype. If the top two are within 20% of each other, run the associated tiebreaker:

| Tie | Tiebreaker question |
|---|---|
| Vanguard vs. Traveller | Q11 + Q17 |
| Architect vs. Ratifier | Q12 + Q19 |
| Integrator vs. Warden | Q10 + Q22 |
| Integrator vs. Broker | Q7 + Q21 |
| Folkway vs. Guild | Q14 + Q16 + Q18 |
| Tinkerer vs. Integrator | Q13 + Q19 |

**Maturity level resolution.**

Sum D1–D7 dimension scores and map to level:

| Total | Level | Label |
|---|---|---|
| ≤ 0 | L1 | Shadow |
| 1–5 | L2 | Sanctioned |
| 6–9 | L2–3 | Transitional |
| 10–14 | L3 | Designed |
| 15+ | L3–4 | Approaching Infrastructural |

(Thresholds will calibrate against pilot data; treat as provisional.)

**Result page.** Returns archetype (with profile copy from Archetypes-v0.5.md), maturity level, and the axis tag. Example output:

> You are **The Integrator.**
> *Maturity level: L2–3 (Transitional).*
> *Axes: Strategic · Augmentation · Behind proof · Internal · Chosen.*
> You're the central basin of AI-adoption strategy: measured, evidence-driven, deploying selectively and redesigning workflows around proven use. [Full profile follows.]

## Coverage check — does every archetype get enough evidence?

| Archetype | Primary-signal questions | Behavioral validators | Total signals |
|---|---|---|---|
| Vanguard | Q5, Q6, Q11 | Q20, Q22 | 5 |
| Traveller | Q3, Q4, Q11 | Q17, Q22 | 5 |
| Architect | Q7, Q12 | Q15, Q22 | 4 |
| Integrator | Q2, Q5, Q7, Q13 | Q15, Q22 | 6 |
| Tinkerer | Q5, Q13 | Q20, Q22 | 4 |
| Ratifier | Q4, Q5, Q12 | Q19, Q22 | 5 |
| Warden | Q5, Q9, Q10 | Q19, Q22 | 5 |
| Broker | Q7, Q8, Q9, Q12 | Q21 | 5 |
| Folkway | Q1, Q2, Q14 | Q18, Q22 | 5 |
| Guild | Q14 | Q16, Q18 | 3 |

**Coverage gap to flag: Guild gets only 3 signals.** This is inherent — the Guild archetype is defined by *the organization not seeing itself*, so direct questions about it don't work. We rely on Q16 (one-person dependency), Q18 (what leadership would lose), and Q14 (concentrated sophisticated use) as the triangulation. If pilots show Guild is under-detected, add a specific question like "Is there someone in [scope] whose departure would materially degrade your AI capability?"

## Edge cases

1. **Bifurcated respondents.** Q0 scope frame should catch most. A respondent trying to answer for a whole F500 will produce inconsistent answers that score no clear archetype; the result page can recommend they re-take scoped to a specific function.
2. **Pre-strategic orgs** (no meaningful AI adoption at all). Will score as **Folkway** or **Ratifier** depending on whether any informal use exists. Both are legitimate L1 results — no special handling needed.
3. **Hybrid Warden-in-regulated-sector + Broker-via-vendor.** Many regulated orgs both delegate and are constrained. Q22 "how leadership talks about AI" usually decides: compliance posture → Warden; vendor relationship → Broker. Tiebreak via Q10 (named regulation gating).
4. **Guild inside an Integrator.** Common in large orgs: a mature Integrator with a Guild pocket. The quiz scores the dominant posture; results page should note "Guild pockets often coexist with other archetypes — Q16 suggests one may be present."
5. **Transitioning orgs.** Vanguard mid-crisis, Tinkerer mid-codification. Scoring catches the current state; the result page links to the "next archetype" based on transition map (e.g., "Vanguards in crisis often transition toward Ratifier or Integrator — read the profiles for both").

## Quick-variant question subset (12 items)

For teams that want a shorter quiz:

**Core twelve:** Q1, Q2, Q3, Q5, Q6, Q7, Q9, Q12, Q13, Q14, Q15, Q22.

Loses fine-grained Warden/Broker/Ratifier discrimination and Guild tiebreaking. Recommended only as a teaser or when the user has low patience — canonical result should always use the 22-item version.

## What's next

1. Rafa reviews the evidence items and scoring logic; flags anything that feels wrong or missed.
2. **Calibration pilot** — run the 22-item quiz with 5–10 organizations whose archetype you can confidently pre-classify. Adjust weights where the quiz result doesn't match the prior classification.
3. **Implementation** — replace the current 2-step Option A/B/C flow with this 22-item quiz; result page renders from Archetypes-v0.5.md profiles.
4. **Future iterations** — if Guild under-detection shows up in pilot data, add explicit person-dependency question.

## Open questions

1. **22 vs. 12 items.** My strong preference is the full 22-item version — archetype quality depends on evidence depth, not speed. Quick-variant should only exist as a teaser/preview, never the authoritative result. Agree?
2. **Multi-select on some items?** Q9 and Q22 have multiple legitimate answers for many orgs. Consider allowing multi-select with softer weights. Leaning yes.
3. **Display the maturity level alongside archetype, or separately?** The two answer different questions — archetype is "what shape are you" and maturity is "how mature are you at being that shape." I think both belong in the result, but ordering matters: archetype first, maturity as context.
4. **What to do with low-score respondents?** If no archetype scores above a minimum threshold, return "We don't have enough signal to classify you — you may be pre-strategic or your AI adoption may be too nascent for this framework. Here's the Framework v1.3 overview instead." Worth confirming this is the right fallback.
