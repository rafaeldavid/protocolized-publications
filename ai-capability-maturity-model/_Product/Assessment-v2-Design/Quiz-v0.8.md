---

## title: Assessment quiz · v0.8 forced-choice (red-team integrated)
version: v0.8 (2026-04-25)
status: draft · for review
supersedes: Quiz-v0.7-forced-choice.md
red_team_integrated: Quiz-v0.7-redteam.md
depends_on: Archetypes-v0.5.md, Archetypes-v0.4.md, Framework-v1.md (v1.3)

# Assessment quiz — v0.8

Twenty-five paired statements. Integrates the v0.7 red-team's seven critical/serious findings: presupposition failures fixed via conditional framing; non-exclusive dichotomies converted to dominant-mode picks; three duplicates removed (Q4, Q16, Q21); five new pairs added covering D2 ontological stability, D5 domain expertise, D6 coordination scope, talent strategy, and customer-visibility — plus one attention-check item. Sequence reordered to start with content-neutral counterfactuals before identity-charged Origin probes, mitigating the anchoring effect.

## Design principles (locked)


| Principle                                          | Rule                                                                                       |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Statement length**                               | 10–15 words per side. Max 15.                                                              |
| **Parallel structure**                             | Identical first halves where both sides share a situation.                                 |
| **Pattern C (both legitimate)**                    | Each side describes a real, defensible org shape.                                          |
| **Declarative voice**                              | No hedging. First-person plural (*we / our*).                                              |
| **Side-balanced**                                  | A↑ and B↑ distributed across archetypes; runtime A/B shuffle per session.                  |
| **Evidence over identity**                         | Behavior over self-image.                                                                  |
| **Conditional framing on scenario-specific items** | "When we delay…" / "Our dominant…" prevents non-applicable respondents from being trapped. |
| **Quality control**                                | One attention-check item; flagged responses get human review.                              |


## Reader prompt

> Choose the statement that better describes your team, function, or company.

## Scope frame (asked once, before scoring)

> This assessment is best answered for a specific function, business unit, or small organization rather than an entire enterprise. What scope are you answering for?
>
> - A small organization (< 200 people)
> - A business unit or division of a larger enterprise
> - A specific function (engineering / product / operations / sales / support / etc.)
> - A specific team or workstream

(Carries forward as context; doesn't score.)

## Scoring

Each pick adds weighted evidence to:

1. **Archetype vector** (over 10 archetypes)
2. **Dimension vector** (over D1–D7)

Final result: highest-weighted archetype + maturity level mapped from dimension total.

---

## The 25 paired statements

### Phase A · Stake (neutral counterfactuals — start here to avoid anchoring)

**Q1.**

- **A:** If AI technology stopped working tomorrow, our product would stop working too.
- **B:** If AI technology stopped working tomorrow, our work would slow but continue.

*Probes: Stake (Architecture vs. Augmentation). Sharpest counterfactual; opens the quiz.*
A: Architecture +2 · Traveller +2 · Vanguard +1 · D7 +2
B: Augmentation +2 · Integrator/Tinkerer/Warden/Broker +1 · D7 +1

**Q2.**

- **A:** People outside our team interact with the AI capabilities we deploy.
- **B:** The AI capabilities we deploy is invisible to anyone outside our team.

*Probes: Customer-facing AI vs. operational-only AI (sharpens Stake; new in v0.8).*
A: Vanguard +2 · Traveller +2 · D7 +1
B: Integrator +1 · Tinkerer +1 · Warden +1 · Folkway +1

### Phase B · Locus

**Q3.**

- **A:** Our AI capabilities are built and run by our own people.
- **B:** Our AI capabilities are delivered by vendors or consultancies.

*Probes: Locus (Internal vs. External).*
A: Internal +2 · Architect/Integrator +1 · D5 +1
B: External +2 · Broker +2 · D5 −1

**Q4.**

- **A:** If our main AI capability vendor changed pricing, it would have no impact on our offering.
- **B:** If our main AI capability vendor changed pricing, we would change our offering.

*Probes: Locus (vendor dependency, behavioral).*
A: Internal +2 · Architect +1 · D5 +2
B: Broker +2 · External +1 · D5 −2

**Q5.**

- **A:** We've invested in dedicated AI talent (hired or developed) for our function.
- **B:** We expect existing staff to learn AI competencies as part of their regular work.

*Probes: Talent strategy (new in v0.8).*
A: Architect +1 · Traveller +1 · Integrator +1 · Guild +1 · D5 +1
B: Folkway +1 · Tinkerer +1 · Broker +1 · D5 −1

### Phase C · Maturity dimensions (D2, D5, D6 — new in v0.8)

**Q6.**

- **A:** Our AI tools keep producing useful outputs as our data and work evolve.
- **B:** We regularly update AI tools' to align to our business.

*Probes: D2 ontological stability.*
A: Architect +2 · Integrator +1 · D2 +2
B: Tinkerer +1 · Folkway +1 · Vanguard +1 · D2 −2

**Q7.**

- **A:** A senior specialist with domain knowledge reviews critical AI outputs.
- **B:** AI outputs are reviewed by generalists or pass through automated checks.

*Probes: D5 domain expertise.*
A: Architect +1 · Integrator +1 · Traveller +1 · Guild +1 · D5 +2
B: Tinkerer +1 · Folkway +1 · Warden +1 · Broker +1 · D5 −1

**Q8.**

- **A:** Our AI handoffs are based on industry standards, or in coordination with external partners.
- **B:** Our AI rules apply inside our company; we don't need to coordinate externally.

*Probes: D6 coordination scope.*
A: Architect +2 · Traveller +1 · D6 +2
B: most strategic archetypes +1 · D6 −1

### Phase D · Timing

**Q9.**

- **A:** We deploy new AI use cases before most peers in our industry.
- **B:** We deploy proven AI use cases that work.

*Probes: Timing (Ahead vs. Behind). [v0.8 fix: B reverted from "with proven success" to original.]*
A: Ahead +2 · Vanguard/Traveller/Tinkerer +1 · D1 −1
B: Behind +2 · Integrator/Ratifier/Warden +1 · D1 +1, D3 +1

**Q10.**

- **A:** We adopt to AI changes, including reversing AI tool deployments if needed.
- **B:** We've deployed AI visibly without needing to walk anything back.

*Probes: Deployment behavioral validator. [v0.8 fix: B rewritten to capture successful deployers.]*
A: Vanguard +3 · Ahead +1 · D3 −1
B: Integrator +2 · Architect +2 · Traveller +1 · Vanguard-success +1

### Phase E · Driver

**Q11.**

- **A:** Our own investment priorities set the pace of AI adoption.
- **B:** Regulation or compliance review sets the pace of AI adoption.

*Probes: Driver (Chosen vs. Constrained).*
A: Chosen +2 · Integrator/Architect/Vanguard +1 · D1 +1
B: Constrained +2 · Warden +2 · D1 +2

**Q12.**

- **A:** When we delay AI deployment, it's because we're choosing to wait for proven maturity.
- **B:** When we delay AI deployment, it's because external rules require it.

*Probes: Deferral motivation. [v0.8 fix: conditional framing so non-delayers aren't trapped.]*
A: Ratifier +2 · Chosen +1
B: Warden +2 · Constrained +2 · D1 +1

### Phase F · Origin (delayed to mid-survey to reduce anchoring)

**Q13.**

- **A:** Our AI approach came from leadership first.
- **B:** Our AI approach came from teams first.

*Probes: Origin (Strategic vs. Emergent). [v0.8 polish: nouns normalized; "catching up" shame-coding removed.]*
A: Strategic +2 · Architect/Integrator/Warden +1 · D1 +1
B: Emergent +2 · Folkway/Guild +1 · D4 −1

**Q14.**

- **A:** We have a current inventory of the AI tools each team uses.
- **B:** We periodically learn about new AI tools other colleagues have adopted.

*Probes: Visibility (D4) / Origin. [v0.8 polish: A simplified; B softened from "regularly discovers."]*
A: Strategic +1 · Architect/Integrator +1 · D4 +2
B: Emergent +2 · Folkway +2 · D4 −2

### Phase G · Sub-discriminators

**Q15.**

- **A:** Our business existed before AI.
- **B:** AI affordances is why our business exists.

*Probes: Vanguard (retrofit) vs. Traveller (greenfield).*
A: Vanguard +2 · Integrator +1 (if Behind)
B: Traveller +3 · D7 +2, D1 +1

**Q16.**

- **A:** Our dominant AI posture is building internal infrastructure multiple teams depend on.
- **B:** Our dominant AI posture is waiting until AI tools mature before committing at scale.

*Probes: Architect (build now) vs. Ratifier (wait deliberately). [v0.8 fix: dominant-mode framing.]*
A: Architect +3 · D1 +1, D2 +2
B: Ratifier +3 · D7 −1

**Q17.**

- **A:** We pick AI use cases from proven examples before we deploy them.
- **B:** We run many AI pilots to figure out what works for us.

*Probes: Integrator (follow external evidence) vs. Tinkerer (generate own).*
A: Integrator +3 · D1 +1, D3 +1
B: Tinkerer +3 · D3 −1

**Q18.**

- **A:** Most of our informal AI use is many people doing everyday tasks.
- **B:** Most of our informal AI use is a few people doing sophisticated work.

*Probes: Folkway (broad+shallow) vs. Guild (concentrated+sophisticated). [v0.8 fix: dominant-pattern framing for non-exclusivity.]*
A: Folkway +3 · D4 −1, D5 −1
B: Guild +3 · D5 +2 at individual, D4 −1 at org

**Q19.**

- **A:** Our primary AI deployment gate is whether the value case is proven.
- **B:** Our primary AI deployment gate is whether compliance review clears the use.

*Probes: Integrator (value-driven) vs. Warden (compliance-driven). [v0.8 fix: primary-gate framing.]*
A: Integrator +2 · Chosen +1
B: Warden +3 · Constrained +2 · D1 +2

### Phase H · Behavioral validators

**Q20.**

- **A:** Multiple teams across our org run on the same internal AI platform.
- **B:** Each team picks its own AI tools; there's no shared platform.

*Probes: Architect signal.*
A: Architect +3 · D1 +1, D2 +2, D5 +1
B: Integrator/Tinkerer/Folkway +1 each

**Q21.**

- **A:** At least one AI workflow would break if a specific person left.
- **B:** Our AI workflows would survive any specific person leaving.

*Probes: Guild signal (person-dependency).*
A: Guild +3 · D5 +2 at individual, D4 −1 at org
B: Integrator/Architect/Warden +1 each · D4 +1

**Q22.**

- **A:** AI quality issues are necessary to learn.
- **B:** AI quality control is necessary to avoid adoption risks.

*Probes: Vanguard signal (public failure tolerance).*
A: Vanguard +3 · D3 −1
B: Ratifier +1 · Warden +1 · Integrator +1 · Folkway +1

**Q23.**

- **A:** We're deploying AI with the tools that exist today.
- **B:** We're holding deployment for a future generation of AI tools.

*Probes: Deployment commitment (Ratifier vs. non-Ratifier). [v0.8 fix: removed "at scale" so small-scale deployers can pick A.]*
A: Vanguard/Integrator/Architect/Traveller/Tinkerer +1 each · D7 +1
B: Ratifier +3 · D7 −1

**Q24.**

- **A:** Our AI documentation is current enough for handoff to a new team member.
- **B:** We rely on apprenticeship models for AI competencies.

*Probes: Tacit expertise (Guild vs. codified). [v0.8 polish: A reduced from "documented and could be handed off" to reduce virtue-signaling.]*
A: Architect +2 · Integrator +1 · D1 +1, D5 +1
B: Guild +3 · D4 −1, D1 −1

### Phase I · Quality control

**Q25.** *Attention check.*

- **A:** Our team uses AI tools as part of how we do our work.
- **B:** Our team has never used or heard of AI tools.

*If respondent picks B, flag the entire response as suspect for human review. (Anyone genuinely answering B has self-disqualified — they wouldn't be taking an AI assessment.)*

---

## What changed from v0.7


| Change                                                                        | Items affected | Issue resolved                                                       |
| ----------------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------- |
| **Critical fix:** Q5B reverted to "after peers have proven them"              | now Q9         | Removed ambiguity introduced by edit                                 |
| **Critical fix:** Q6B rewritten to "deployed AI visibly without walking back" | now Q10        | Closed double-exclusion trap                                         |
| **Critical fix:** Q10 prepended "When we delay…" conditional                  | now Q12        | Stops trapping active deployers                                      |
| **Critical fix:** Q14 reframed to "Most of our informal AI use is…"           | now Q18        | Forces dominant pattern; allows for non-exclusive coexistence        |
| **Serious fix:** Q12 prepended "Our dominant AI posture is…"                  | now Q16        | Allows mixed-mode orgs to pick                                       |
| **Serious fix:** Q15 reframed to "Our primary AI deployment gate is…"         | now Q19        | Forces a primary, allows complementary gates                         |
| **Polish:** Q1 nouns normalized; B softened                                   | now Q13        | Reduced shame-coding                                                 |
| **Polish:** Q2 simplified; B softened                                         | now Q14        | Removed double-barrel; reduced negative coding                       |
| **Polish:** Q20A "at scale" removed                                           | now Q23        | Captures small-scale deployers                                       |
| **Polish:** Q22A reduced virtue-signaling                                     | now Q24        | Reduced social desirability bias                                     |
| **Deletion:** Q4 (duplicate Stake with Q3)                                    | —              | Removed redundancy                                                   |
| **Deletion:** Q16 (duplicate Locus with Q7)                                   | —              | Removed redundancy                                                   |
| **Deletion:** Q21 (duplicate Tinkerer probe with Q13)                         | —              | Removed redundancy                                                   |
| **Addition:** Customer-visibility pair                                        | Q2             | Disambiguates external-facing from operational AI                    |
| **Addition:** Talent strategy pair                                            | Q5             | New: probes capability investment vs. learn-on-job                   |
| **Addition:** D2 ontological stability pair                                   | Q6             | New: maturity dimension coverage                                     |
| **Addition:** D5 domain expertise review pair                                 | Q7             | New: maturity dimension coverage                                     |
| **Addition:** D6 coordination scope pair                                      | Q8             | New: maturity dimension coverage                                     |
| **Addition:** Attention-check pair                                            | Q25            | Quality-control item                                                 |
| **Reorder:** Stake counterfactual moved to Q1                                 | sequence       | Anchors on neutral counterfactual instead of identity-charged Origin |


## Sequence rationale

The new order follows a deliberate flow from **content-neutral → identity-charged → behavioral validators**:


| Phase                     | Items      | Purpose                                                                                                     |
| ------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| A · Stake                 | Q1, Q2     | Open with neutral counterfactuals — set the cognitive frame around AI's role rather than the org's identity |
| B · Locus                 | Q3, Q4, Q5 | Concrete capability questions before subjective ones                                                        |
| C · Maturity dimensions   | Q6, Q7, Q8 | Framework-derived; behavioral; provides D-vector signal                                                     |
| D · Timing                | Q9, Q10    | Begin to expose deployment posture                                                                          |
| E · Driver                | Q11, Q12   | What's gating the org?                                                                                      |
| F · Origin                | Q13, Q14   | Identity-charged — placed mid-survey, after concrete answers have committed the respondent to specifics     |
| G · Sub-discriminators    | Q15–Q19    | Resolve the close pairs                                                                                     |
| H · Behavioral validators | Q20–Q24    | Behavioral evidence; tiebreakers and honesty-tests                                                          |
| I · Quality control       | Q25        | Attention check                                                                                             |


## Coverage check (every archetype)


| Archetype  | Signal pairs                      | Count              |
| ---------- | --------------------------------- | ------------------ |
| Vanguard   | Q2A, Q9A, Q10A, Q15A, Q22A        | 5                  |
| Traveller  | Q1A, Q2A, Q5A, Q15B, Q23A         | 5                  |
| Architect  | Q5A, Q6A, Q8A, Q16A, Q20A, Q24A   | 6                  |
| Integrator | Q9B, Q10B, Q17A, Q19A, Q23A, Q24A | 6                  |
| Tinkerer   | Q9A, Q17B, Q23A                   | 3                  |
| Ratifier   | Q12A, Q16B, Q23B                  | 3                  |
| Warden     | Q11B, Q12B, Q19B                  | 3                  |
| Broker     | Q3B, Q4B                          | 2 ← **flag: thin** |
| Folkway    | Q13B, Q14B, Q18A                  | 3                  |
| Guild      | Q5A, Q7A, Q18B, Q21A, Q24B        | 5                  |


**Coverage gap:** Broker drops to 2 signals after Q16's deletion. Mitigated by Q3 + Q4 being the strongest external-locus signals (which is what defines Broker), but worth watching in pilot data. If under-detection appears, add a Broker-specific pair: "Most of our AI capability is held by external partners we contract with" / "Most of our AI capability is held by our own people."

## Dimension coverage (Framework v1.3)


| Dim                            | Pairs probing it                                | Coverage                                                  |
| ------------------------------ | ----------------------------------------------- | --------------------------------------------------------- |
| D1 (Protocol specificity)      | Q9, Q11, Q12, Q14, Q15, Q16, Q17, Q19, Q20, Q24 | Strong                                                    |
| D2 (Ontological stability)     | Q6, Q16, Q20                                    | Adequate (gained ground in v0.8)                          |
| D3 (Temporal alignment)        | Q9, Q10, Q17, Q22                               | Adequate                                                  |
| D4 (Organizational visibility) | Q13, Q14, Q18, Q21, Q24                         | Strong                                                    |
| D5 (Domain expertise)          | Q3, Q4, Q5, Q7, Q18, Q20, Q21, Q24              | Strong                                                    |
| D6 (Coordination scope)        | Q8                                              | **Single-pair coverage** — minimum signal; flag for pilot |
| D7 (Value integration)         | Q1, Q2, Q15, Q16, Q23                           | Strong                                                    |


D6 has only one pair. Defensible — coordination scope is the rarest dimension at L3 maturity and below, and most respondents will sit at "internal only." If we want stronger D6 signal, add a second D6 pair probing standards adoption: "We follow industry data-format standards in our AI work" / "We use formats that work for our team."

## Tiebreaker map


| Close pair              | Primary tiebreaker | Fallback |
| ----------------------- | ------------------ | -------- |
| Vanguard vs. Traveller  | Q15                | Q1, Q2   |
| Architect vs. Ratifier  | Q16                | Q23      |
| Integrator vs. Tinkerer | Q17                | Q9, Q10  |
| Integrator vs. Warden   | Q19                | Q11, Q12 |
| Integrator vs. Broker   | Q3 + Q4            | Q5       |
| Folkway vs. Guild       | Q18                | Q21, Q24 |
| Ratifier vs. Warden     | Q12                | Q11      |


## Attention-check handling

If Q25-B is picked, flag the response. Three handling options:

1. **Soft flag** — record the result but mark "attention questionable" in analytics
2. **Re-prompt** — show one more validation item before showing the result
3. **Block** — refuse to return a result, redirect to Framework overview

Recommended: **soft flag** for the public quiz; re-prompt for pilot/research use.

## Maturity scoring

Sum D1–D7 dimension vector. Map to level:


| Total | Level                            |
| ----- | -------------------------------- |
| ≤ 0   | L1 Shadow                        |
| 1–5   | L2 Sanctioned                    |
| 6–9   | L2–3 Transitional                |
| 10–14 | L3 Designed                      |
| 15+   | L3–4 Approaching Infrastructural |


Thresholds provisional; recalibrate against pilot data.

## Direction balance

Distribution of "primary archetype" picks across the 24 scoring items (Q25 excluded):


| Side | Archetypes that win                                                                                                                                                               |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A    | Traveller, Architect, Integrator (×3), Vanguard (×3), Architect (×2), Folkway, Vanguard, Architect, Integrator, Architect, Vanguard (Vanguard +Architect leaning)                 |
| B    | Augmentation cluster, Folkway, Broker, External, Tinkerer/Folkway/Vanguard, Warden, Warden, Tinkerer, Ratifier, Guild, Warden, Tinkerer/Folkway/Architect, Guild, Ratifier, Guild |


Roughly even; runtime A/B side-shuffle handles residual position bias.

## Open questions

1. **Broker thin coverage.** Add explicit Broker-detection pair to bring it to 3 signals?
2. **D6 single-pair coverage.** Acceptable for v0.8 or add second D6 pair pre-pilot?
3. **Attention-check handling — soft flag or re-prompt?** My lean: soft flag for the public version, surface in analytics only.
4. **24 vs. 25 final pair count.** I included the attention check making 25; if you want a leaner 24-question quiz, drop Q25 and rely on response-time analytics for inattention detection instead.
5. **Should Phase F (Origin) move even later — to the very end?** Some research suggests asking identity questions last produces more honest answers. My current placement is mid-survey; further-back is defensible.

## What's next

1. Rafa reviews Quiz-v0.8 against the v0.7-redteam findings and confirms each fix landed correctly.
2. **Calibration pilot** — run with 5–10 pre-classified organizations; check that classifications match priors.
3. **Implementation spec** — auto-advance on click, brief highlight confirmation, back-button preserves picks, session-level shuffle of pair order + A/B side.
4. **Result page** renders from `Archetypes-v0.5.md` profile content, including the new Protocol orientation sections (added in parallel update).

