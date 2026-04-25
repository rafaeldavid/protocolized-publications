---

## title: Assessment quiz · v0.7 forced-choice paired statements
version: v0.7 (2026-04-24)
status: draft · for review
depends_on: Archetypes-v0.5.md, Archetypes-v0.4.md, Framework-v1.md (v1.3)
companion: Quiz-v0.6.md (the multi-choice evidence version — kept for reference, not superseded)
inspired_by: Example Statements from quad.md (quadrantology reference set)

# Assessment quiz — v0.7 forced-choice pairs

Same classification goal as v0.6 — resolve a respondent to one of the 10 archetypes — but built as **paired statements** in the quadrantology register. Each question presents two short declarative claims; the reader picks the one that better describes their team, function, or company.

This format was tested earlier (v0.3.3) as a dimension-by-dimension forced-choice; v0.7 rebuilds it to classify archetypes instead of dimensions.

## Design principles (carried forward from v0.3.3 red-team)


| Principle                  | Rule                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Statement length**       | Target 10–15 words per side. Max 15.                                                                                   |
| **Parallel structure**     | When both sides share a situation, use word-for-word identical first halves ("If AI tools stopped working tomorrow…"). |
| **Both sides legitimate**  | Pattern C — both options describe real organizational shapes. Never one-side-is-the-right-answer.                      |
| **Declarative**            | No hedging ("often," "usually," "mostly"). Direct claims.                                                              |
| **Organizational voice**   | First-person plural (*we / our*), not first-person personal. We're measuring organizational state, not personality.    |
| **Side-balanced**          | A↑ and B↑ picks distributed roughly evenly; runtime should also shuffle A/B position per session.                      |
| **Evidence over identity** | Favor statements about what the org *does* over what it *thinks about itself*.                                         |


## Prompt + scoring

**Reader prompt** (displayed above each pair):

> Choose the statement that better describes your team, function, or company.

**Scoring approach.** Every pick contributes weighted evidence to:

1. **Archetype vector** (+N for one or more of the 10 archetypes)
2. **Dimension vector** (+N or −N for D1–D7 on the framework)

Final archetype = highest-weighted archetype. Maturity level = sum of dimension scores mapped to L1–L4 buckets.

**Scope frame** (asked once, before the pairs):

> This assessment is best answered about a specific function, business unit, or a small organization rather than an entire enterprise. What scope are you answering for?
>
> - A small organization (< 200 people)
> - A business unit or division of a larger enterprise
> - A specific function (engineering / product / operations / sales / support / etc.)
> - A specific team or workstream

(Carries forward as context; doesn't score.)

---

## The 22 paired statements

### Phase 1 · Origin + visibility (Q1–Q2)

**Q1.**

- **A:** Our AI strategy came from leadership; our teams are executing it.
- **B:** Our AI adoption came from teams; leadership is catching up.

*Probes: Origin (Strategic vs. Emergent).*
A: Strategic +2 · Architect/Integrator/Warden +1 · D1 +1, D4 +1
B: Emergent +2 · Folkway/Guild +1 · D4 −1

**Q2.**

- **A:** Leadership can name the AI tools each team uses and why.
- **B:** Leadership regularly discovers AI tools teams adopted on their own.

*Probes: Visibility (D4) / Origin.*
A: Strategic +1 · Architect/Integrator +1 · D4 +2
B: Emergent +2 · Folkway +2 · D4 −2

### Phase 2 · Stake (Q3–Q4)

**Q3.**

- **A:** If AI stopped working tomorrow, our product would stop working too.
- **B:** If AI stopped working tomorrow, our work would slow but continue.

*Probes: Stake (Architecture vs. Augmentation).*
A: Architecture +2 · Traveller +2 · Vanguard +1 · D7 +2
B: Augmentation +2 · Integrator/Tinkerer/Warden/Broker +1 · D7 +1

**Q4.**

- **A:** AI is foundational to what our business does for customers.
- **B:** AI is a capability layer that improves our business.

*Probes: Stake (Architecture vs. Augmentation, customer-facing lens).*
A: Architecture +2 · Traveller +1 · Vanguard +1 · D7 +1
B: Augmentation +2 · Integrator/Warden/Broker/Tinkerer +1

### Phase 3 · Timing (Q5–Q6)

**Q5.**

- **A:** We deploy new AI use cases before most peers in our industry.
- **B:** We deploy new AI use cases with proven success.

*Probes: Timing (Ahead vs. Behind).*
A: Ahead +2 · Vanguard/Traveller/Tinkerer +1 · D1 −1
B: Behind +2 · Integrator/Ratifier/Warden +1 · D1 +1, D3 +1

**Q6.**

- **A:** We've publicly walked back an AI deployment in the last year.
- **B:** We haven't deployed anything visible enough to walk back.

*Probes: Deployment velocity (behavioral validator).*
A: Vanguard +3 · Ahead +1 · D3 −1
B: Ratifier +1 · Warden +1 · Folkway +1 · D7 −1

### Phase 4 · Locus (Q7–Q8)

**Q7.**

- **A:** Our AI systems are built and run by our own people.
- **B:** Our AI systems are delivered by vendors or consultancies.

*Probes: Locus (Internal vs. External).*
A: Internal +2 · Architect/Integrator +1 · D5 +1
B: External +2 · Broker +2 · D5 −1

**Q8.**

- **A:** If our main AI vendor changed pricing, our deployments would barely shift.
- **B:** If our main AI vendor changed pricing, our deployments would slow.

*Probes: Locus (vendor dependency, behavioral).*
A: Internal +2 · Architect +1 · D5 +2
B: Broker +2 · External +1 · D5 −2

### Phase 5 · Driver (Q9–Q10)

**Q9.**

- **A:** Our own investment priorities set the pace of AI adoption.
- **B:** Regulation or compliance review sets the pace of AI adoption.

*Probes: Driver (Chosen vs. Constrained).*
A: Chosen +2 · Integrator/Architect/Vanguard +1 · D1 +1
B: Constrained +2 · Warden +2 · D1 +2

**Q10.**

- **A:** We're waiting to deploy because we're choosing to wait for maturity.
- **B:** We're waiting to deploy because external rules require it.

*Probes: Deferral motivation (Ratifier vs. Warden).*
A: Ratifier +2 · Chosen +1
B: Warden +2 · Constrained +2 · D1 +1

### Phase 6 · Sub-discriminators (Q11–Q16)

**Q11.**

- **A:** AI was added to our business; the business existed before AI.
- **B:** AI is why our business exists; there's no non-AI version of it.

*Probes: Vanguard (retrofit) vs. Traveller (greenfield).*
A: Vanguard +2 · Integrator +1 (if Behind)
B: Traveller +3 · D7 +2, D1 +1

**Q12.**

- **A:** We're building internal AI infrastructure multiple teams depend on.
- **B:** We're waiting until AI tools mature before committing at scale.

*Probes: Architect (build now) vs. Ratifier (wait deliberately).*
A: Architect +3 · D1 +1, D2 +2
B: Ratifier +3 · D7 −1

**Q13.**

- **A:** We pick AI use cases from proven examples before we deploy them.
- **B:** We run many AI pilots to figure out what works for us.

*Probes: Integrator (follow external evidence) vs. Tinkerer (generate own).*
A: Integrator +3 · D1 +1, D3 +1
B: Tinkerer +3 · D3 −1

**Q14.**

- **A:** Lots of our people use AI informally for everyday tasks.
- **B:** A few of our people run sophisticated AI work most don't see.

*Probes: Folkway (broad+shallow) vs. Guild (concentrated+sophisticated).*
A: Folkway +3 · D4 −1, D5 −1
B: Guild +3 · D5 +2 at individual, D4 −1 at org

**Q15.**

- **A:** We deploy AI when the value case is proven for our work.
- **B:** We deploy AI when compliance review clears the specific use.

*Probes: Integrator (value-driven) vs. Warden (compliance-driven).*
A: Integrator +2 · Chosen +1
B: Warden +3 · Constrained +2 · D1 +2

**Q16.**

- **A:** Our AI capability mostly lives with our own people and systems.
- **B:** Our AI capability mostly lives with vendors and consultants.

*Probes: Internal (Integrator / Architect) vs. External (Broker).*
A: Internal +2 · Integrator/Architect +1 · D5 +1
B: Broker +3 · External +2 · D5 −1

### Phase 7 · Behavioral validators (Q17–Q22)

**Q17.**

- **A:** Multiple teams across our org run on the same internal AI platform.
- **B:** Each team picks its own AI tools; there's no shared platform.

*Probes: Architect signal.*
A: Architect +3 · D1 +1, D2 +2, D5 +1
B: Integrator/Tinkerer/Folkway +1 each

**Q18.**

- **A:** At least one AI workflow would break if a specific person left.
- **B:** Our AI workflows would survive any specific person leaving.

*Probes: Guild signal (person-dependency).*
A: Guild +3 · D5 +2 at individual, D4 −1 at org
B: Integrator/Architect/Warden +1 each · D4 +1

**Q19.**

- **A:** An AI incident from our org reached customers or press in the last year.
- **B:** We've had no visible AI incidents reach customers or press.

*Probes: Vanguard signal (public failure tolerance).*
A: Vanguard +3 · D3 −1
B: Ratifier +1 · Warden +1 · Integrator +1 · Folkway +1

**Q20.**

- **A:** We're actively deploying AI at scale with the tools that exist today.
- **B:** We're holding deployment for a future generation of AI tools.

*Probes: Deployment commitment (Ratifier vs. non-Ratifier).*
A: Vanguard/Integrator/Architect/Traveller/Tinkerer +1 each · D7 +1
B: Ratifier +3 · D7 −1

**Q21.**

- **A:** Our AI pilots end with a clear decision to scale or retire them.
- **B:** Our AI pilots tend to keep running without clear endings.

*Probes: Experimentation discipline (Integrator/Architect vs. Tinkerer).*
A: Integrator +2 · Architect +1 · D1 +1, D3 +1
B: Tinkerer +3 · D3 −1

**Q22.**

- **A:** Our key AI capabilities are documented and could be handed off.
- **B:** Our key AI capabilities live in a few people's heads and habits.

*Probes: Tacit expertise (Guild vs. codified).*
A: Architect +2 · Integrator +1 · D1 +1, D5 +1
B: Guild +3 · D4 −1, D1 −1

---

## Direction mix (verification)

Distribution of side-weighted picks across the 22 pairs. Aiming for rough balance so respondents can't pattern-match to "pick all A" or "pick all B."


| Pair | A leans                | B leans                     |
| ---- | ---------------------- | --------------------------- |
| Q1   | Strategic              | Emergent                    |
| Q2   | Architect/Integrator   | Folkway                     |
| Q3   | Traveller/Architecture | Augmentation cluster        |
| Q4   | Architecture cluster   | Augmentation cluster        |
| Q5   | Ahead cluster          | Behind cluster              |
| Q6   | Vanguard               | Ratifier/Warden/Folkway     |
| Q7   | Internal               | Broker                      |
| Q8   | Architect              | Broker                      |
| Q9   | Chosen cluster         | Warden                      |
| Q10  | Ratifier               | Warden                      |
| Q11  | Vanguard               | Traveller                   |
| Q12  | Architect              | Ratifier                    |
| Q13  | Integrator             | Tinkerer                    |
| Q14  | Folkway                | Guild                       |
| Q15  | Integrator             | Warden                      |
| Q16  | Internal               | Broker                      |
| Q17  | Architect              | Integrator/Tinkerer/Folkway |
| Q18  | Guild                  | Integrator/Architect/Warden |
| Q19  | Vanguard               | non-Vanguard cluster        |
| Q20  | deploying cluster      | Ratifier                    |
| Q21  | Integrator/Architect   | Tinkerer                    |
| Q22  | Architect/Integrator   | Guild                       |


No single archetype dominates either side. A/B side-shuffle at runtime further insulates against positional bias.

## Archetype coverage check


| Archetype  | Signal pairs                            | Count |
| ---------- | --------------------------------------- | ----- |
| Vanguard   | Q5A, Q6A, Q11A, Q19A                    | 4     |
| Traveller  | Q3A, Q4A, Q11B                          | 3     |
| Architect  | Q12A, Q17A, Q20A (shared), Q22A         | 4     |
| Integrator | Q5B, Q13A, Q15A, Q16A, Q21A             | 5     |
| Tinkerer   | Q5A (shared), Q13B, Q17B (shared), Q21B | 3     |
| Ratifier   | Q6B (shared), Q10A, Q12B, Q20B          | 4     |
| Warden     | Q9B, Q10B, Q15B                         | 3     |
| Broker     | Q7B, Q8B, Q16B                          | 3     |
| Folkway    | Q1B, Q2B, Q14A                          | 3     |
| Guild      | Q14B, Q18A, Q22B                        | 3     |


Every archetype gets at least 3 distinct signal pairs — minimum diagnostic resolution. Integrator gets 5 because it's the central basin and needs the most sub-discrimination; Guild stays at 3 because the archetype is self-definitionally hard to self-detect.

## Scoring model

**Archetype resolution.**

Sum the archetype vector across all 22 picks. Highest sum = archetype.

If top two archetypes are within ~20% of each other, route to a tiebreaker pair:


| Close pair              | Tiebreaker                     |
| ----------------------- | ------------------------------ |
| Vanguard vs. Traveller  | Q11 dominant; fall back to Q3  |
| Architect vs. Ratifier  | Q12 dominant; fall back to Q20 |
| Integrator vs. Tinkerer | Q13 dominant; fall back to Q21 |
| Integrator vs. Warden   | Q15 dominant; fall back to Q9  |
| Integrator vs. Broker   | Q16 dominant; fall back to Q8  |
| Folkway vs. Guild       | Q14 dominant; fall back to Q18 |
| Ratifier vs. Warden     | Q10 dominant; fall back to Q9  |


**Maturity resolution.**

Sum the D1–D7 dimension vector. Map total to level:


| Total | Level                            |
| ----- | -------------------------------- |
| ≤ 0   | L1 Shadow                        |
| 1–5   | L2 Sanctioned                    |
| 6–9   | L2–3 Transitional                |
| 10–14 | L3 Designed                      |
| 15+   | L3–4 Approaching Infrastructural |


(Thresholds provisional; recalibrate against pilot data.)

**Result page** returns archetype + maturity + axis tag, rendering the v0.5 profile as the result content.

## Edge cases

1. **Low-confidence results.** If no archetype scores above ~40% of maximum possible, flag as "your AI adoption may be too nascent for this framework" and route to the Framework v1.3 overview.
2. **Guild-inside-Integrator.** A common pattern. If Integrator wins but Q18A was picked, include in the result: "Q18 suggests your org may have a Guild pocket — read that profile too."
3. **Transitioning orgs.** Vanguard-in-crisis, Tinkerer-mid-codification. The quiz captures current state; result page links to transition destinations.
4. **Respondent in denial.** Forced-choice resists self-idealization more than multi-choice, but not completely. Q6, Q18, Q19 are the strongest honesty-tests — picking the "harder" side increases confidence in the overall classification.

## Compared to v0.6 (the multi-choice evidence version)


| Dimension       | v0.6 (multi-choice evidence)                 | v0.7 (forced-choice pairs)                     |
| --------------- | -------------------------------------------- | ---------------------------------------------- |
| Item count      | 22 questions, 4+ options each                | 22 pairs, 2 options each                       |
| Format          | Multiple-choice with option-specific weights | Forced binary; parallel statement construction |
| Cognitive load  | Higher per item (read 4 options)             | Lower per item (read 2, pick)                  |
| Game-resistance | Medium (multiple plausible picks)            | Higher (forced binary compresses gaming)       |
| Register        | Behavioral-question style                    | Quadrantology identity-claim style             |
| Advancement     | Click to answer, scroll to next              | Auto-advance on click (recommended)            |
| Total time      | ~7–10 minutes                                | ~4–6 minutes                                   |


**Trade-off.** v0.7 is faster and more resistant to self-idealization; v0.6 captures nuance better when the reader has multi-valued situations (e.g., Q9 where several drivers apply simultaneously). My lean is v0.7 for the public-facing quiz, keep v0.6 as reference for sophisticated users who want a more granular self-assessment.

## Open questions

1. **Voice consistency.** A few pairs have "we / our" vs. "our org." Should normalize to either "our team / our function / our company" (echoing the scope frame) or the simpler "we / our." My pick: "we / our" for brevity; let scope frame carry the unit context.
2. **Should Q0 scope frame be two questions?** (Scope + industry/vertical for later segmentation analysis.) My lean: scope only; vertical can be captured as optional metadata at the end.
3. **Runtime behavior.** Auto-advance on click with brief highlight confirmation? Back button preserves picks? Session-level randomization of pair order + A/B position? All recommended; flagging for implementation spec.
4. **"Not sure" option?** Quadrantology doesn't have one — forces the discrimination. My lean: don't add. If respondents genuinely don't know, they shouldn't be in the quiz yet.

## What's next

1. Rafa reads the 22 pairs and redlines any that feel off-register or don't discriminate.
2. Pilot with 5–10 pre-classified organizations; calibrate weights.
3. Implementation — replace the current 2-step quiz with the paired-statement flow; auto-advance on pick; session-level shuffling of order and A/B position.
4. Result page renders from Archetypes-v0.5.md profiles; archetype first, maturity level below, axis tag and warning sign in a sidebar.

