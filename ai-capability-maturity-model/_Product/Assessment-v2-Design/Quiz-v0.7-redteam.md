---
title: Quiz v0.7 · hardcore red-team
version: v0.7-redteam (2026-04-24)
status: audit · for review before v0.8
targets: Quiz-v0.7-forced-choice.md
references: best-practice forced-choice design (Thurstonian forced-choice, MUPP), quadrantology reference set
---

# Quiz v0.7 — hardcore red-team

Pass-through audit on the 22 paired statements for design-integrity failures. Organized by severity: critical (breaks classification), serious (degrades signal quality), and polish (improves reader experience). This is a **hostile read** — I'm looking for what can go wrong, not what's working.

## TL;DR · what's most wrong

| # | Issue | Severity | Pairs affected |
|---|---|---|---|
| 1 | **Presupposition failures** — several pairs presuppose scenarios that don't apply to every respondent, forcing dishonest picks | Critical | Q8, Q10, Q12, Q14, Q15, Q18, Q21 |
| 2 | **Q6B double-exclusion** — conflates "no deployment" with "no walkback," trapping successful deployers | Critical | Q6 |
| 3 | **Q5B ambiguity from edit** — "with proven success" no longer discriminates Integrator from Tinkerer | Critical | Q5 |
| 4 | **Non-exclusive dichotomies** — both sides can be simultaneously true (Folkway+Guild, value+compliance gates, build+wait) | Serious | Q12, Q14, Q15 |
| 5 | **Q7 and Q16 duplicate Locus** probing the same construct with minor rewording | Serious | Q7, Q16 |
| 6 | **Q3 and Q4 overlap on Stake** — both probe Architecture-vs-Augmentation with similar signal | Serious | Q3, Q4 |
| 7 | **Q13 and Q21 overlap on experimentation discipline** — both probe Integrator vs. Tinkerer | Serious | Q13, Q21 |
| 8 | **Social-desirability asymmetry** — B options systematically read as less appealing, biasing toward A | Serious | Q1, Q2, Q14, Q21, Q22 |
| 9 | **Missing best-in-class elements** — no attention check, no reverse-coded pair, no bogus item | Serious | global |
| 10 | **Q9 misses Broker driver** — vendor roadmap as pacing constraint has no home | Minor | Q9 |
| 11 | **Anchoring** — Phase 1 primes strategic/emergent framing before evidence is gathered | Minor | global |
| 12 | **22 items above fatigue threshold** — forced-choice research suggests 16–18 is the comfortable ceiling | Minor | global |

---

## Part 1 · Pair-by-pair audit

### Phase 1 · Origin + visibility

**Q1.** *Our AI strategy came from leadership; our teams are executing it. / Our AI adoption came from teams; leadership is catching up.*

| Check | Verdict |
|---|---|
| Parallelism | Weak. A says "strategy," B says "adoption" — different nouns for the same thing. |
| Pattern C (both legitimate) | ⚠️ "Catching up" implies B-orgs are behind; slight shame-coding |
| Mutually exclusive | ⚠️ A large org can have both — formal strategy AND teams ahead of it |
| Declarative | ✓ |
| Fix | Normalize noun + remove shame coding: "Our AI approach came from leadership first" / "Our AI approach came from teams first" |

**Q2.** *Leadership can name the AI tools each team uses and why. / Leadership regularly discovers AI tools teams adopted on their own.*

| Check | Verdict |
|---|---|
| Double-barrel in A | ⚠️ "tools each team uses AND why" — two claims. An Architect may know tools but not every why. |
| Leading language | ⚠️ "Regularly discovers" is negative-coded for B |
| Fix | Simplify A: "Leadership has a current inventory of the AI tools each team uses." |

### Phase 2 · Stake

**Q3.** *If AI stopped working tomorrow, our product would stop working too. / If AI stopped working tomorrow, our work would slow but continue.*

| Check | Verdict |
|---|---|
| Parallelism | ✓ excellent |
| Pattern C | ✓ |
| Fix | None. Best pair in the set. |

**Q4.** *AI is foundational to what our business does for customers. / AI is a capability layer that improves our business.*

| Check | Verdict |
|---|---|
| **Duplication with Q3** | ⚠️ **Same construct probed by Q3.** Both pairs ask whether AI is load-bearing. A counterfactual (Q3) + a descriptive (Q4) are worth keeping ONLY if the second adds orthogonal signal. Does it? |
| Orthogonality | Marginal. Q4 may catch orgs that won't picture the counterfactual in Q3. |
| User edit | "improves our business" (was "improves how we already work") lost specificity — second version is less sharp |
| Fix | Either delete Q4 (redundant with Q3) OR sharpen B to probe a different stake dimension: "AI speeds existing work but doesn't change what we sell." |

### Phase 3 · Timing

**Q5.** *We deploy new AI use cases before most peers in our industry. / We deploy new AI use cases with proven success.*

| Check | Verdict |
|---|---|
| **B ambiguity** | 🔴 **CRITICAL.** "With proven success" — proven by whom? An Integrator reads: proven by peers. A Tinkerer reads: proven by our own pilots. The edit broke the discriminator. |
| Fix | Revert to: "We deploy new AI use cases after peers have proven them." |

**Q6.** *We've publicly walked back an AI deployment in the last year. / We haven't deployed anything visible enough to walk back.*

| Check | Verdict |
|---|---|
| **Logical exhaustiveness** | 🔴 **CRITICAL.** The two options are not complementary. A successful deployer (deployed visibly, no walkback) cannot honestly pick either. |
| Universe of responses | A: deployed + walked back. B: not deployed visibly. Missing: deployed + no walkback. Missing: not deployed, unrelated to visibility. |
| Fix | Add explicit "no-walkback-with-deployment" option or reframe as three-way pair (violates forced-choice) or reframe B: "We've deployed AI visibly without needing to walk anything back." (This gives B to Integrator/Architect/Vanguard-success instead of Ratifier/Warden/Folkway, so scoring also needs to update.) |

### Phase 4 · Locus

**Q7.** *Our AI systems are built and run by our own people. / Our AI systems are delivered by vendors or consultancies.*

| Check | Verdict |
|---|---|
| ✓ | Clean contrast |
| Fix | None. |

**Q8.** *If our main AI vendor changed pricing, our deployments would barely shift. / If our main AI vendor changed pricing, our deployments would slow.*

| Check | Verdict |
|---|---|
| **Presupposition** | ⚠️ Assumes a "main AI vendor" exists. Internal-heavy orgs may have no such vendor. |
| Defensibility | An Architect answering A ("barely shift") is consistent with "because we have no main vendor." Works via secondary interpretation. |
| Fix | Accept the presupposition; it's defensible. |

### Phase 5 · Driver

**Q9.** *Our own investment priorities set the pace of AI adoption. / Regulation or compliance review sets the pace of AI adoption.*

| Check | Verdict |
|---|---|
| **Coverage gap** | ⚠️ Binary misses Broker (vendor roadmap), resource-constrained orgs (budget/talent). For ~25% of respondents, neither applies cleanly. |
| Fix | Either add a second Driver pair (vendor-pace vs. talent-pace) OR accept that Q9 probes only the regulatory axis and other axes are handled in Q8+Q10. |

**Q10.** *We're waiting to deploy because we're choosing to wait for maturity. / We're waiting to deploy because external rules require it.*

| Check | Verdict |
|---|---|
| **Presupposition** | 🔴 **CRITICAL.** Both sides assume "we're waiting to deploy." Orgs actively deploying can't pick either truthfully. |
| Fix | Reframe to applicable-to-all form: "When we delay AI deployment, it's because we're choosing to wait for maturity." / "When we delay AI deployment, it's because external rules require it." Adds "when we delay" conditional so non-delayers aren't forced to misrepresent. |

### Phase 6 · Sub-discriminators

**Q11.** *AI was added to our business; the business existed before AI. / AI is why our business exists; there's no non-AI version of it.*

| Check | Verdict |
|---|---|
| ✓ | Clean contrast, good for Vanguard vs. Traveller |
| Fix | None. |

**Q12.** *We're building internal AI infrastructure multiple teams depend on. / We're waiting until AI tools mature before committing at scale.*

| Check | Verdict |
|---|---|
| **Non-exclusive** | ⚠️ Architect (A-true) and Ratifier-ish waiting at broader scale (B-true) can coexist. Also, Integrator is excluded — they neither build platform nor wait; they deploy selectively. |
| Coverage | Misses Integrator, Tinkerer, Vanguard, Broker — they have no comfortable pick. |
| Fix | Add a third option (breaks forced-choice) or reframe to dominant-mode: "Our dominant AI posture is: A = building shared infrastructure / B = waiting for tools to mature." Same content, normalizes to dominant mode. |

**Q13.** *We pick AI use cases from proven examples before we deploy them. / We run many AI pilots to figure out what works for us.*

| Check | Verdict |
|---|---|
| ✓ | Clean Integrator vs. Tinkerer discriminator |
| Fix | None. |

**Q14.** *Lots of our people use AI informally for everyday tasks. / A few of our people run sophisticated AI work most don't see.*

| Check | Verdict |
|---|---|
| **Non-exclusive** | 🔴 **CRITICAL.** An org can have BOTH Folkway AND Guild simultaneously. This is the dominant emergent-detection pair and it's compromised. |
| Also | Presupposes informal AI use exists — strategic orgs may have little/none |
| Fix | Reframe to dominant pattern: "Most of our informal AI use is: A = many people using it for everyday tasks / B = a few people doing sophisticated work." Add pre-filter: "If little informal AI use, pick A or B based on what little does happen." Or: push Folkway/Guild detection primarily to Q18 and Q22 (behavioral). |

**Q15.** *We deploy AI when the value case is proven for our work. / We deploy AI when compliance review clears the specific use.*

| Check | Verdict |
|---|---|
| **Non-exclusive** | ⚠️ Both gates can apply simultaneously — most real orgs use both value and compliance filters |
| Presupposition | Assumes "we deploy AI" — pre-deployment orgs can't answer |
| Fix | Reframe to primary-gate: "Our primary AI-deployment gate is: A = value-case proven for our work / B = compliance review cleared." |

**Q16.** *Our AI capability mostly lives with our own people and systems. / Our AI capability mostly lives with vendors and consultants.*

| Check | Verdict |
|---|---|
| **Duplication with Q7** | 🔴 **Nearly identical probe.** Q7: "built and run by our own people" / "delivered by vendors." Q16: "lives with our people and systems" / "lives with vendors and consultants." Delta is small. |
| Fix | **Delete Q16** (primary overlap) OR repurpose to probe capability *directionality*: "We build AI capability internally and buy only to bootstrap" / "We buy AI capability and build only where vendors can't deliver." Detects Broker-internalizing vs. Broker-pure. |

### Phase 7 · Behavioral validators

**Q17.** *Multiple teams across our org run on the same internal AI platform. / Each team picks its own AI tools; there's no shared platform.*

| Check | Verdict |
|---|---|
| **Presupposition** | ⚠️ Implies platform exists as binary. Nascent-platform orgs caught between. |
| Defensibility | Accept — "no shared platform" covers nascent case adequately. |
| Fix | Accept as-is. |

**Q18.** *At least one AI workflow would break if a specific person left. / Our AI workflows would survive any specific person leaving.*

| Check | Verdict |
|---|---|
| Presupposition | ⚠️ Assumes AI workflows exist; strategic-pre-deployment orgs can't answer |
| Otherwise | Clean contrast, good Guild signal |
| Fix | Accept; Q18 is largely a Guild-detection tool and Guilds by definition have workflows. |

**Q19.** *An AI incident from our org reached customers or press in the last year. / We've had no visible AI incidents reach customers or press.*

| Check | Verdict |
|---|---|
| ✓ | Clean |
| Fix | None. |

**Q20.** *We're actively deploying AI at scale with the tools that exist today. / We're holding deployment for a future generation of AI tools.*

| Check | Verdict |
|---|---|
| **Not exhaustive** | ⚠️ Small-scale deployment has no home. An Integrator deploying 3 proven use cases feels neither applies. |
| Fix | Reframe A: "We're deploying AI with the tools that exist today." (drop "at scale"). That captures Integrator + Architect + Vanguard + Traveller + Tinkerer. |

**Q21.** *Our AI pilots end with a clear decision to scale or retire them. / Our AI pilots tend to keep running without clear endings.*

| Check | Verdict |
|---|---|
| **Partial duplication** | ⚠️ with Q13 — both probe Integrator-vs-Tinkerer on experimentation discipline |
| Presupposition | Assumes "we have pilots" — pre-strategic and platform-post-pilot orgs can't answer |
| Fix | Either **delete Q21** (Q13 covers it) OR sharpen to a different axis: "We retire AI pilots on schedule" / "We let AI pilots keep running indefinitely." Shift focus from "end clearly" to "retire on schedule" as the discipline signal. |

**Q22.** *Our key AI capabilities are documented and could be handed off. / Our key AI capabilities live in a few people's heads and habits.*

| Check | Verdict |
|---|---|
| ✓ | Clean Guild signal |
| **Social desirability** | ⚠️ A sounds better ("documented," "could be handed off"). B-truth respondents may underselect. |
| Fix | Consider: "Our AI documentation is current enough for handoff" / "Our AI work is carried by a few people's practical knowledge." Reduces A's virtue-signaling. |

---

## Part 2 · Systemic design issues

### Social desirability mismatch

Best-in-class forced-choice design pairs items of *similar* social desirability, so respondents can't win by picking the virtuous option. Several pairs here violate this:

| Pair | A reads as | B reads as |
|---|---|---|
| Q1 | "mature, strategy-led" | "behind, catching up" |
| Q2 | "knows what's happening" | "surprised by what teams do" |
| Q21 | "disciplined" | "drifting" |
| Q22 | "documented, professional" | "chaotic, person-dependent" |

Respondents systematically pick A, inflating strategic/designed archetypes and deflating emergent/early ones. **Fix:** balance desirability in each pair — either both sides sound good for different reasons, or neither side sounds especially virtuous.

Example for Q21: "Our AI pilots end with a clear decision to scale or retire." / "Our AI pilots run until we know what works in practice." Second version frames Tinkerer as "practice-driven" rather than "drifting."

### Presupposition failures (aggregate)

Seven pairs assume a scenario that doesn't apply to every respondent:

| Q | Presupposes |
|---|---|
| Q8 | A "main AI vendor" exists |
| Q10 | "We're waiting to deploy" |
| Q12 | Binary between build and wait |
| Q14 | Informal AI use exists |
| Q15 | Deployment is currently happening |
| Q18 | AI workflows exist |
| Q21 | Pilots are currently active |

Fix: every pair should include a "dominant-mode" or "when this applies" framing so respondents with neither-fits state can still pick the better-fitting side.

### Non-exclusive dichotomies

Three pairs offer "dichotomies" that are actually complementary:

- Q12 — build infrastructure AND wait at scale (both can be true)
- Q14 — Folkway AND Guild (both can coexist)
- Q15 — value-gate AND compliance-gate (most real deployments use both)

Fix: reframe to "dominant" or "primary" to force a dominant-mode pick.

### Duplication / wasted slots

Three pair-sets probe the same construct with minor rewording:

| Overlap | Pairs | Recommendation |
|---|---|---|
| Stake | Q3 + Q4 | Keep Q3 (counterfactual, sharpest); delete Q4 OR repurpose to probe product-vs-operations Stake split |
| Locus | Q7 + Q16 | Delete Q16 OR repurpose to probe directionality (insourcing vs. outsourcing trajectory) |
| Experimentation discipline | Q13 + Q21 | Delete Q21 OR repurpose to probe retirement-cadence specifically (schedule-driven vs. continue-until-stopped) |

Trimming three pairs brings the total from 22 to 19, closer to the optimal 16–18 range.

### Missing best-in-class elements

Forced-choice surveys at the quality bar we're aiming for typically include:

1. **Attention check** — one pair where one side is obviously nonsensical ("We use AI to process requests" / "We use AI to slow down requests"). Flags inattentive respondents for review.
2. **Reverse-coded pair** — one pair where the typical signal direction is inverted, to catch response-set bias.
3. **Bogus item** — one item so obvious that a wrong answer flags random clicking.
4. **Social desirability index** — one or two pairs where both sides are equally desirable or equally undesirable; if respondents always pick the "better-sounding" one, their full result gets flagged.
5. **Position-effect mitigation** — runtime A/B side shuffle per session (currently noted but not implemented in spec).

**Fix:** add one attention check + one reverse-coded pair. That's +2 pairs. With the three deletions above, net count drops to 21 with better integrity.

### Anchoring effect from Phase 1

Phase 1 asks Origin (strategic vs. emergent) first. This primes respondents to self-categorize early, which biases subsequent answers toward the already-committed identity.

Better practice: start with content-neutral warm-up items (the Stake counterfactual Q3 is ideal) and leave Origin detection for mid-survey. Or: scramble all 22 pairs in a different order each session.

Fix: change sequence to {Q3, Q7, Q11, Q5, Q6, Q8, Q13, Q1, Q2, ...} — start with concrete counterfactuals, delay the identity-charged Origin questions.

### Ipsative scoring problem

Classical forced-choice produces *ipsative* scores — a respondent's scores across archetypes are correlated (picking A for one dominance means not-B elsewhere). This makes cross-respondent comparisons misleading without Thurstonian IRT modeling, which requires calibration data.

**For our use case**, this is probably acceptable — we're classifying (winner takes all), not measuring continuous trait levels across a population. But flag for later if we want statistical analytics on respondent distributions.

### Response fatigue

Forced-choice research (Brown & Maydeu-Olivares, 2011) suggests 16–18 items is the comfortable maximum for attention-intact completion. 22 items is above this threshold. Dropout risk rises after item 15–16.

Fix: get to ≤18 items through the duplication cuts above, or accept attrition. Opt for cuts.

---

## Part 3 · Pair-by-pair status summary

| Q | Current status | Action for v0.8 |
|---|---|---|
| Q1 | ⚠️ wording polish | Normalize nouns; remove "catching up" shame-coding |
| Q2 | ⚠️ wording polish | Simplify A; soften B's "regularly discovers" |
| Q3 | ✓ keep | None |
| Q4 | ⚠️ duplicate with Q3 | Delete OR repurpose |
| Q5 | 🔴 critical (B ambiguous) | Revert B to "after peers have proven them" |
| Q6 | 🔴 critical (double-exclusion) | Rewrite B for successful deployers |
| Q7 | ✓ keep | None |
| Q8 | ⚠️ presupposition | Accept; defensible |
| Q9 | ⚠️ coverage gap | Accept as regulatory-axis probe only |
| Q10 | 🔴 critical (presupposition) | Add conditional framing |
| Q11 | ✓ keep | None |
| Q12 | ⚠️ non-exclusive | Reframe to dominant-mode |
| Q13 | ✓ keep | None |
| Q14 | 🔴 critical (non-exclusive + presupposition) | Reframe to dominant pattern |
| Q15 | ⚠️ non-exclusive + presupposition | Reframe to primary-gate |
| Q16 | 🔴 duplicate with Q7 | Delete OR repurpose |
| Q17 | ⚠️ presupposition | Accept |
| Q18 | ✓ keep | None |
| Q19 | ✓ keep | None |
| Q20 | ⚠️ not exhaustive | Drop "at scale" from A |
| Q21 | ⚠️ duplicate with Q13 | Delete OR repurpose to retirement-cadence |
| Q22 | ⚠️ social desirability | Soften A's virtue-signaling |

**7 critical / serious issues; 9 polish-level; 6 clean.**

---

## Part 4 · Proposed v0.8 structure

Recommended changes, consolidated:

### Rewrites (7)

- **Q5B.** Revert to "We deploy new AI use cases after peers have proven them."
- **Q6B.** "We've deployed AI visibly without needing to walk anything back." (Re-score: B → Integrator/Architect/Vanguard-success +1 each; A stays Vanguard +3.)
- **Q10.** Prepend "When we delay AI deployment…" to both sides.
- **Q12.** Add "Our dominant AI posture is…" prefix.
- **Q14.** Reframe to dominant pattern of informal use.
- **Q15.** Reframe to primary-gate.
- **Q20A.** Drop "at scale"; re-score.

### Deletions (3) — brings to 19 pairs

- **Q4** — duplicate with Q3 on Stake
- **Q16** — duplicate with Q7 on Locus
- **Q21** — duplicate with Q13 on experimentation

### Additions (2) — brings to 21 pairs

- **Attention check pair** — one obvious-answer pair to flag inattentive respondents
- **Reverse-coded pair** — one pair with inverted signal direction

### Polish (5)

- Q1 wording (normalize nouns, soften B)
- Q2 wording (simplify A, soften B)
- Q22 wording (reduce A's virtue-signaling)
- Sequence: start with Q3-style counterfactuals, delay Q1-style identity probes
- Explicit note about A/B runtime shuffle + order shuffle in implementation spec

### Result

**21 pairs, cleaner discrimination, better honesty-testing, within the 16–20 ideal range with 1 attention-check buffer.** Reading time drops from ~6 minutes to ~5.

---

## Open calls for you

1. **Accept the three deletions (Q4, Q16, Q21)?** My strong lean: yes. Duplication adds fatigue without signal.
2. **Add attention check + reverse-coded pair?** My lean: yes for professional-grade quiz. No for a lighter public one.
3. **Reorder to de-anchor Phase 1?** Lean: yes — start with Q3 counterfactual. Small change, real benefit.
4. **Rescore Q6 and Q20 per the reframes above?** Lean: yes, the scoring table updates alongside the statement rewrite.
5. **Keep Q4 in some form?** Could repurpose as product-vs-operations stake probe (a genuinely orthogonal signal to Q3) rather than deleting outright. Your call.

## Next

Once you approve the severity rankings and proposed changes, I draft **Quiz-v0.8.md** with the 21 finalized pairs, updated scoring, reordered sequence, and attention-check integration. Keep v0.7 and v0.6 as reference versions.
