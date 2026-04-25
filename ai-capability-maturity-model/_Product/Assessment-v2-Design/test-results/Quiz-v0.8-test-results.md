---
title: Quiz v0.8 — simulation test results
version: 1.0 (2026-04-25)
status: test report · for review before v0.9
data: Quiz-v0.8-simulation-data.csv (100 rows)
method: 10 archetype agents × 10 simulated respondents each
---

# Quiz v0.8 — simulation test report

100 simulated quiz responses produced by 10 archetype-specific agents (10 each). Each agent embodied one archetype and produced 10 plausible respondent variations (different orgs, sub-flavors, maturity gradients). Picks were scored with the v0.8 scoring matrix; predicted archetype = highest-scoring.

## TL;DR — the quiz fails its primary job

**Overall match rate: 21/100.** Only Architect and Integrator classify reliably. Every other archetype mostly misclassifies — not in random directions, but in a single dominant pattern: **everything gravitates toward Integrator**.

| Agent archetype | Match rate | Dominant misclassification | Margin (top1 vs top2) |
|---|---|---|---|
| Vanguard | 4/10 | Architect (×6) | 18.3% |
| Traveller | 0/10 | Architect (×9), Vanguard (×1) | 22.5% |
| Architect | 8/10 | Integrator (×2) | 9.1% |
| Integrator | 9/10 | Architect (×1) | 34.1% |
| Tinkerer | 0/10 | Vanguard (×8), Integrator (×2) | 16.6% |
| Ratifier | 0/10 | Integrator (×10) | 37.1% |
| Warden | 0/10 | Integrator (×9), Architect (×1) | 10.8% |
| Broker | 0/10 | Integrator (×10) | 40.7% |
| Folkway | 0/10 | Integrator (×7), Vanguard (×2), Warden (×1) | 8.4% |
| Guild | 0/10 | Integrator (×10) | 24.9% |

**100% of Ratifier, Broker, Guild simulations misclassify as Integrator.** This is not a tuning issue. It's a structural scoring failure.

## Root cause: scoring is asymmetric

Integrator and Architect collect points from far more questions than other archetypes do. By design, the scoring rubric was supposed to give "secondary signal" to adjacent archetypes — but in aggregate, the secondary signals for Integrator/Architect outweigh the primary signals for thinner archetypes.

**Maximum possible scores per archetype (sum of all positive weights across all picks):**

| Archetype | Max possible score |
|---|---|
| Integrator | ~28 (appears in 20+ scoring rules) |
| Architect | ~24 (appears in 14+ scoring rules) |
| Vanguard | ~17 |
| Traveller | ~13 |
| Folkway | ~13 |
| Guild | ~13 |
| Warden | ~13 |
| Tinkerer | ~12 |
| Ratifier | ~11 |
| Broker | ~10 |

Integrator and Architect are accumulators; the others are spike-archetypes. When a Ratifier/Broker/Guild respondent answers honestly, their archetype-specific signature (a few +3 spikes) gets out-totaled by Integrator's broad accumulation across "responsible" answer patterns.

## Worked example — why a Ratifier classifies as Integrator

Ratifier iteration 1 picks: `B,B,A,A,A,A,A,B,B,B,A,A,A,A,A,B,A,A,A,B,B,B,B,A,A`

Scores by archetype:

| Archetype | Score | Source |
|---|---|---|
| **Integrator** (predicted) | **23** | +1 from each of Q1B, Q2B, Q3A, Q5A, Q6A, Q7A, Q8B, Q9B, Q11A, Q13A, Q14A, Q15A, Q20B, Q21B, Q22B, Q24A; +2 from Q10B, Q19A; +3 from Q17A |
| Architect | 14 | +1 secondary signals from same picks |
| **Ratifier** (assigned) | **11** | +2 from Q12A; +3 from Q16B; +3 from Q23B; +1 secondary picks |

The Ratifier signature is a clean three-question signal (Q12A + Q16B + Q23B = 8 of 11 points). The Integrator score is a 23-point smear across nearly every "responsible" answer the Ratifier rationally gives. **Integrator wins by being the default destination for any thoughtful B-leaning response pattern.**

This explains all the 0/10 archetypes — the same pattern repeats:

- **Broker:** picks B on Locus questions (the Broker signature) but A on most other "responsible" questions, which all add to Integrator
- **Warden:** signature is just three Driver questions; Integrator beats them on volume of secondary signal
- **Guild:** signature is Q21A + Q24B + Q18B — the rest of the answer pattern accumulates Integrator points
- **Tinkerer:** signature Q17B (+3) gets crushed by Q10A/Q22A which give Vanguard +3 each (Tinkerers also pick these because they're risk-tolerant)
- **Folkway:** signature scattered across B-side picks; Integrator's +1 accumulators beat Folkway's +1s on volume

## Match-rate analysis

```
Vanguard:    4/10 ████░░░░░░ (Architect wins via secondary-signal accumulation)
Traveller:   0/10 ░░░░░░░░░░ (Architect wins; Traveller's only +3 spike is Q15B)
Architect:   8/10 ████████░░ (cleanly classifies — accumulator + Q16A/Q20A spikes)
Integrator:  9/10 █████████░ (cleanly classifies — accumulator + Q17A/Q19A spikes)
Tinkerer:    0/10 ░░░░░░░░░░ (Vanguard beats Tinkerer because Q10A/Q22A also fire for risk-tolerant Tinkerers)
Ratifier:    0/10 ░░░░░░░░░░ (Integrator wins by 2× margin every time)
Warden:      0/10 ░░░░░░░░░░ (Integrator wins narrowly; Warden's Q11B+Q12B+Q19B spikes don't accumulate enough)
Broker:      0/10 ░░░░░░░░░░ (Integrator wins by ~3× margin; Broker max ~10 vs. Integrator ~17-22)
Folkway:     0/10 ░░░░░░░░░░ (Integrator wins by 1-2 points; thin)
Guild:       0/10 ░░░░░░░░░░ (Integrator wins by ~5 points consistently)
```

## Maturity scoring also misclassifies

The dimension-vector scoring (D1–D7) was supposed to produce orthogonal maturity signal. It doesn't.

| Agent archetype | Avg dimension total | Predicted level | Expected level | Match? |
|---|---|---|---|---|
| Vanguard | 14.2 | L3 Designed | L2 (reversal risk) | ✗ inflated |
| Traveller | 26.3 | L3-4 | L3 | ≈ slight inflation |
| Architect | 28.0 | L3-4 | L3-4 | ✓ |
| Integrator | 16.5 | L3 | L2-3 | ≈ slight inflation |
| Tinkerer | -1.8 | L1 | L1-2 | ≈ |
| Ratifier | 14.4 | L3 | L1-2 | ✗ wildly inflated |
| Warden | 17.4 | L3-4 | L2 | ✗ wildly inflated |
| Broker | 4.3 | L2 | L2 | ✓ |
| Folkway | -6.3 | L1 | L1 | ✓ |
| Guild | 6.9 | L2-3 | L2-3 (org) / L3 (indiv) | ✓ |

**Same root cause.** Ratifiers and Wardens pick "responsible" answers (Q11A inventory, Q14A inventory, Q24A documentation) which give D1/D4/D5 +2 each. Their actual maturity is low because deployment is gated, but the rubric reads protocol density as maturity.

## Wording bugs — universally flagged by agents

Every agent independently flagged the same set of grammar/typo issues:

| Q | Issue | Severity |
|---|---|---|
| Q2B | "The AI capabilities we deploy **is** invisible" — subject-verb disagreement | Critical (visible to every reader) |
| Q6B | "We regularly update AI tools**'** to align to our business" — stray apostrophe; also "align to" → "align with" | Critical |
| Q10A | "We **adopt** to AI changes" — should be "adapt" | Critical (typo) |
| Q15B | "AI affordances **is** why our business exists" — subject-verb disagreement | Critical |
| Q8A | "industry standards, **or** in coordination with external partners" — conflates two different things via OR | Serious |
| Q5 | "AI **competencies**" — HR-speak; "skills" reads cleaner | Polish |
| Q23B | "holding deployment for a future generation" — unidiomatic; "waiting for the next generation" reads more naturally | Polish |
| Q19 | "primary AI deployment gate" — jargon; "main thing that has to clear before we deploy" lands better | Polish |

Five of these are critical (every reader will see grammar errors). Recommend a copyediting pass before any version of v0.9 ships.

## Repetitive clusters — flagged by 6+ of 10 agents

| Cluster | Questions | What they probe in common |
|---|---|---|
| Locus / sourcing | Q3, Q4, Q5 | Internal vs. external capability — three consecutive questions on essentially the same axis |
| Driver / gate | Q11, Q12, Q19 | What gates / paces deployment — three angles, same answer for most archetypes |
| Timing / commitment | Q9, Q10, Q23 | Ahead vs. behind / deployment posture — three near-synonyms |
| Origin / visibility | Q13, Q14 | Strategic vs. emergent — single axis asked twice |
| Architect signal | Q16, Q20 | Internal platform existence — duplicate Architect anchors |
| Guild signal | Q21, Q24 | Person-dependency / tacit expertise — two angles on same blind spot |
| Stake | Q1, Q2 | Architecture vs. Augmentation; counterfactual + customer-facing variant |

Net redundancy: roughly 8–10 of the 25 questions add little signal beyond their cluster-mate. Trimming could bring the canonical version to ~17–18 items without losing diagnostic resolution.

## Presupposition failures — flagged by Ratifier, Warden, Broker, Folkway agents

Several questions presuppose a scenario that doesn't apply to less-deployed archetypes:

| Q | Presupposition | Affected archetypes |
|---|---|---|
| Q4 | "Our main AI vendor" exists | Folkway (no procurement), Ratifier (thin deployment) |
| Q6 | We have AI tools whose stability we can assess | Ratifier, Folkway |
| Q8 | We have AI handoffs that follow rules | Folkway |
| Q10 | We have deployments to walk back or claim success on | Ratifier, Folkway |
| Q14 | We have either an inventory or know about adoptions | Folkway |
| Q16 | Either building infra OR waiting | Tinkerer, Folkway, Broker |
| Q17 | Either picking from proven OR running pilots | Folkway, Broker, Ratifier |
| Q18 | Informal AI use exists | Strategic archetypes (Vanguard, Architect) |
| Q19 | Deployment is happening | Ratifier, Folkway |
| Q20 | Either platform exists OR teams pick own | Tinkerer, Folkway |
| Q21 | AI workflows exist | Folkway, Ratifier |
| Q24 | Documentation OR apprenticeship transmission exists | Folkway, Tinkerer |

Forced-choice with these presuppositions degrades signal — respondents pick the lesser-bad option, which often happens to be Integrator-flavored.

## Social desirability bias — flagged across multiple agents

| Q | A reads as | B reads as |
|---|---|---|
| Q7 | "responsible — specialist reviews" | "lax — generalists or automated" |
| Q14 | "organized — current inventory" | "chaotic — periodic discovery" |
| Q22 | "reckless — issues necessary to learn" | "responsible — quality control" |
| Q24 | "professional — current documentation" | "underdeveloped — apprenticeship" |
| Q10 | "agile — adapt and reverse" | "competent — no walkbacks" |
| Q5 | "serious — dedicated talent" | "casual — existing staff learn" |

Multiple agents noted that respondents will systematically pick the virtuous-sounding answer regardless of reality. This compounds the Integrator-bias because most "virtuous" answers add Integrator points.

## Critical archetype-specific findings

### Ratifier — 0/10 (worst case)

Ratifier signature is just three questions: Q12A + Q16B + Q23B. The remaining 22 questions accumulate Integrator points because Ratifiers pick "we have inventory" / "specialist reviews" / "current documentation" as responsible-sounding answers. Their actual L1-2 maturity gets read as L3 because the rubric reads protocol density as deployment density.

**Diagnostic:** Ratifier scoring needs significantly more weight on its three signature questions, and/or the Integrator/Architect secondary signals from Q11A/Q13A/Q14A/Q24A need to be removed when the org is also signaling Q23B or Q16B.

### Tinkerer — 0/10

Tinkerers pick Q9A, Q10A, Q22A (risk-tolerance signals) which all award Vanguard +3 each. Tinkerer's Q17B spike (+3) doesn't match Vanguard's +9 from those three picks. Tinkerers and Vanguards share risk-tolerance posture but differ on Stake (Augmentation vs. Architecture).

**Diagnostic:** Q10 and Q22 need to give meaningful Tinkerer weight, OR Tinkerer needs a clearer differentiator from Vanguard that doesn't depend on Stake (which Q1/Q15 already handle).

### Broker — 0/10

Broker signature is Q3B + Q4B + Q5B (External locus). Total Broker max = ~10. Even at maximum signal, Integrator can score 17-22 from a Broker simulation because Brokers still pick A on Q11/Q14/Q15/Q19/Q24 (all secondary Integrator).

**Diagnostic:** The thinness flagged in v0.8's open-questions section is real. Broker needs at least 2 more signature questions OR existing Broker weights need to be multiplied (e.g., Q3B Broker +3, Q4B Broker +3, Q5B Broker +2).

### Guild — 0/10

Guild signature is Q21A + Q24B + Q18B. Guild max = ~13. Integrator wins by ~5 points consistently. Guild members rationally pick A on questions about specialist review (Q7), which adds Integrator points instead of Guild points.

**Diagnostic:** Q7A specifically should split into "specialist review built into platform" (Architect/Integrator) vs. "specialist review embodied in a person" (Guild). Currently Q7A awards both equally, hiding the Guild signal.

### Warden — 0/10

Warden signature is Q11B + Q12B + Q19B (Constrained driver). Warden max = ~13. Loses to Integrator by ~3 points because Wardens still pick A on Q14 (inventory) which gives Integrator +1 but Warden 0.

**Diagnostic:** Wardens should also score on Q14A (compliance orgs DO maintain inventories) and Q7A (compliance orgs DO have specialist review). Currently those rules give zero Warden weight.

### Vanguard / Traveller — partial classification

Vanguard at 4/10: loses to Architect when Vanguards pick "responsible" answers (Q11A, Q13A, Q14A, Q23A). Traveller at 0/10: only one strong signal (Q15B +3) vs. Architect's many accumulators.

**Diagnostic:** Both Vanguard and Traveller need their Stake/Timing signature spikes weighted more heavily, OR the Architect secondary-signal weights need pruning.

## Recommendations for Quiz v0.9

Ranked by severity:

1. **Recalibrate scoring entirely.** The current rubric is an additive-evidence model where Integrator and Architect win by accumulation. Switch to one of:
   - **Differential weighting** — archetype-specific signature questions get +5 or +6 (not +3); secondary signals get +0.5 (not +1)
   - **Subtractive scoring** — picks that contradict an archetype's archetype subtract from its score (e.g., if you pick Q23B you can't be a Vanguard)
   - **Tiered scoring** — first pass identifies archetype family (4 buckets), second pass discriminates within family
   
2. **Trim Integrator's secondary signal weights.** Integrator should win when Q17A + Q19A fire, not when 12+ small +1s accumulate. Remove Integrator from Q3A, Q11A, Q13A, Q14A, Q23A, Q24A — keep it only on the questions that actually differentiate Integrator from adjacent archetypes.

3. **Fix the four critical wording bugs** (Q2B, Q6B, Q10A, Q15B grammar). Ship with these is unprofessional.

4. **Trim duplicate clusters** — pick one of each: {Q9, Q10, Q23} → keep Q10; {Q11, Q12, Q19} → keep Q12 and Q19; {Q13, Q14} → keep Q14; {Q16, Q20} → keep Q20; {Q3, Q4, Q5} → keep Q4 and Q5. Drops 5 questions, brings total to 20.

5. **Add presupposition guards** to questions that trap thin-deployment archetypes. Use "When this applies…" or "If we have…" prefixes.

6. **Add 2 Broker-specific signature questions** to bring Broker max above 10. Examples:
   - "We have a contract that defines our AI capability" / "We hire and manage AI talent in-house"
   - "Our AI roadmap is set by our vendor" / "Our AI roadmap is set by our team"

7. **Disambiguate Q7** so specialist-review Guild (person-embodied) and specialist-review Architect/Integrator (platform-embodied) aren't conflated.

8. **Add Q22 alternative** for Warden — "AI quality control protects against regulatory risk" — instead of the current Vanguard/non-Vanguard binary.

9. **Pilot calibration** — once recalibrated, re-run this 10×10 simulation and target ≥80% match rate before considering the quiz ready for production.

## Files

- **`Quiz-v0.8-simulation-data.csv`** — full data (100 rows × 33 columns: archetype, iteration, Q1–Q25 picks, predicted, match, scores, dimensions, level, attention flag)
- **`score_simulations.py`** — scoring script with all rule weights extracted from Quiz-v0.8.md (re-runnable; modify to tune for v0.9)

## Open questions for you

1. **Scoring model overhaul — which approach?** Differential weighting (cleanest), subtractive scoring (most aggressive), or tiered family-then-archetype (most diagnostic but most complex).
2. **Trim to ~17–20 questions or expand to ~28 with stronger archetype anchors?** I lean trim-and-strengthen rather than expand.
3. **Should Integrator's "central basin" property be encoded explicitly?** E.g., Integrator wins ties; Integrator is the default-result for inconclusive scoring rather than a competitive archetype. This would resolve the central-basin problem rather than fight it.
4. **Re-run simulation after v0.9 fixes?** I recommend yes — the 100-simulation harness is now reusable.
