---
title: Assessment quiz · v0.9 hierarchical placement
version: v0.9 (2026-04-25)
status: draft · for review
supersedes: Quiz-v0.8.md
test_results_integrated: test-results/Quiz-v0.8-test-results.md
depends_on: Archetypes-v0.5.md, Archetypes-v0.4.md, Framework-v1.md (v1.3)
---

# Assessment quiz — v0.9

Major redesign. v0.8 simulation testing produced a 21/100 match rate — the additive-evidence scoring caused Integrator and Architect to win by accumulation while Ratifier, Broker, Guild, Warden, and Folkway never classified correctly. v0.9 replaces additive scoring with **hierarchical placement** — the model used by professional typological surveys (MBTI, Keirsey, Holland Codes) — and integrates all wording fixes, redundancy trims, and presupposition guards from the test report.

## What changed from v0.8

| Change | Items affected | Rationale |
|---|---|---|
| **Architectural change.** Replace additive archetype scoring with hierarchical placement (axis aggregation → tree branching → leaf resolution). | Whole scoring model | Eliminates Integrator-by-accumulation problem; matches professional-survey typology methodology |
| **Decouple maturity from archetype.** Maturity score anchored to deployment density, with governance as secondary multiplier. | Maturity model | Stops Ratifier/Warden reading as L3 just because they pick "responsible" answers |
| **Wording fixes (4 critical grammar bugs)** | Q2B, Q5B (was Q6B), Q9A (was Q10A), Q12B (was Q15B) | Subject-verb agreement, stray apostrophe, "adopt" → "adapt" — universally flagged by all 10 simulation agents |
| **Wording polish (4 items)** | Q4 (was Q5), Q7A (was Q8A), Q15 (was Q19), Q19B (was Q23B) | "Competencies" → "skills"; conflated OR clauses; jargon → plain language |
| **Trim — duplicate cluster** | Removed Q3, Q16, Q21 from v0.8 | Q3 duplicated Q4 on Locus; Q16 duplicated Q20 on Architect signal; Q21 duplicated Q24 on Guild signal |
| **Add Broker signatures** | New Q21, Q22 | Broker signal coverage was 2 in v0.8 (max ~10 score); now 4 with two new dedicated questions |
| **Disambiguate Q6 (was Q7)** | Q6 review-locus | A captures both Architect (codified review) and Guild (person review); resolved at hierarchy level instead of question level |
| **Add presupposition guards** | Q9, Q11, Q15, Q19 (was Q10, Q14, Q19, Q23) | "When applicable" / "If we have" / "Our dominant" prefixes prevent trapping non-applicable archetypes |

**Total: 24 items.** 23 substantive + 1 attention check. Was 25 in v0.8.

## Scoring philosophy: hierarchical placement

Professional typological surveys do not score directly to type. They score axes, then derive type from axis combinations.

| System | Axes | Type derivation |
|---|---|---|
| MBTI | E/I, N/S, T/F, J/P (4 axes) | Dominant pole on each axis → 16 types |
| Keirsey | Concrete/Abstract × Cooperative/Utilitarian | 4 temperaments → 16 types within |
| Holland Codes | Realistic/Investigative/Artistic/Social/Enterprising/Conventional | Top 3 themes |
| Big Five | OCEAN traits | Continuous percentile placement (no types) |
| **v0.9 (this)** | **Origin, Stake, Timing, Locus, Driver, Reach, Depth (7 axes)** | **Hierarchical placement: Origin → quadrant → leaf** |

The hierarchy:

```
                        ┌─ Origin ─┐
                        │          │
                  Strategic     Emergent
                        │          │
        ┌── Stake × Timing ──┐     ├── Reach × Depth ──┐
        │                    │     │                   │
   Architecture           Augmentation              ┌──┴──┐
        │                    │                  Folkway  Guild
   ┌────┴────┐         ┌────┴────┐
  Ahead   Behind     Ahead   Behind
   │       │           │       │
   ├──┐    ├──┐    Tinkerer    ├──── Driver / Locus ────┐
Vanguard Traveller │    │       │           │           │
                Architect Ratifier      Constrained?  External?
                                            │ yes        │ yes
                                          Warden       Broker
                                                       (else: Integrator)
```

This eliminates the accumulation problem: each archetype is resolved against its quadrant peers, not against all 10 archetypes. Integrator no longer wins ties globally; it wins only against Warden and Broker, where Driver and Locus cleanly differentiate.

## Reader prompt + scope frame

Reader prompt:
> Choose the statement that better describes your team, function, or company.

Scope frame (asked once, before scoring):
> This assessment is best answered for a specific function, business unit, or small organization rather than an entire enterprise. What scope are you answering for?
> - A small organization (< 200 people)
> - A business unit or division of a larger enterprise
> - A specific function (engineering / product / operations / sales / support / etc.)
> - A specific team or workstream

(Carries forward as context; doesn't score.)

---

## The 24 paired statements

### Phase A · Stake (Q1–Q2)

**Q1.**
- **A:** If AI technology stopped working tomorrow, our product would stop working too.
- **B:** If AI technology stopped working tomorrow, our work would slow but continue.

*Probes: Stake (Architecture vs. Augmentation).*
A: Stake +2 · D7 +2
B: Stake −2 · D7 +1

**Q2.**
- **A:** People outside our team interact with the AI capabilities we deploy.
- **B:** The AI capabilities we deploy are invisible to anyone outside our team.

*Probes: Stake (customer-facing vs. operational-only). [v0.9 fix: subject-verb agreement.]*
A: Stake +1 · D7 +1
B: Stake −1

### Phase B · Locus (Q3–Q4)

**Q3.**
- **A:** If our main AI capability vendor changed pricing, it would have no impact on our offering.
- **B:** If our main AI capability vendor changed pricing, we would change our offering.

*Probes: Locus (Internal vs. External). [v0.8 Q3 trimmed; this was Q4 — only Locus question now.]*
A: Locus +2 · D5 +2
B: Locus −2 · D5 −2

**Q4.**
- **A:** We've invested in dedicated AI talent (hired or developed) for our function.
- **B:** We expect existing staff to learn AI skills as part of their regular work.

*Probes: Talent strategy. [v0.9 polish: "competencies" → "skills".]*
A: Locus +1 · D5 +1
B: Locus −1 · D5 −1

### Phase C · Maturity dimensions (Q5–Q7)

**Q5.**
- **A:** Our AI tools keep producing useful outputs as our data and work evolve.
- **B:** We regularly update our AI tools to stay aligned with our business.

*Probes: D2 ontological stability. [v0.9 fix: removed stray apostrophe; "align to" → "stay aligned with".]*
A: D2 +2
B: D2 −1 (frequent updating implies less stable)

**Q6.**
- **A:** A senior specialist with domain knowledge reviews critical AI outputs.
- **B:** AI outputs are reviewed by generalists or pass through automated checks.

*Probes: D5 domain expertise. [v0.9: archetype disambiguation handled at hierarchy level, not question level.]*
A: D5 +2
B: D5 −1

**Q7.**
- **A:** Our AI handoffs follow industry standards.
- **B:** Our AI rules apply only inside our company.

*Probes: D6 coordination scope. [v0.9 fix: removed conflated OR clause that mixed standards with external coordination.]*
A: D6 +2
B: D6 −1

### Phase D · Timing (Q8–Q9)

**Q8.**
- **A:** We deploy new AI use cases before most peers in our industry.
- **B:** We deploy new AI use cases after peers have proven them.

*Probes: Timing (Ahead vs. Behind). [v0.9 fix: B reverted to original — "after peers have proven them".]*
A: Timing +2 · D1 −1
B: Timing −2 · D1 +1, D3 +1

**Q9.**
- **A:** When AI changes require it, we adapt — including reversing AI deployments.
- **B:** When we deploy AI visibly, we don't usually need to walk it back.

*Probes: Behavioral rollback signal. [v0.9 fix: "adopt" → "adapt"; both options now apply to deployers.]*
A: Timing +1 (signals tolerance for reversal under change) · D3 −1
B: Timing −1 (signals stable deployment) · D3 +1

### Phase E · Driver (Q10–Q11)

**Q10.**
- **A:** Our own investment priorities set the pace of AI adoption.
- **B:** Regulation or compliance review sets the pace of AI adoption.

*Probes: Driver (Chosen vs. Constrained).*
A: Driver +2
B: Driver −2 · D1 +2

**Q11.**
- **A:** When we delay AI deployment, it's because we're choosing to wait for proven maturity.
- **B:** When we delay AI deployment, it's because external rules require it.

*Probes: Deferral motivation. [v0.8 fix: conditional framing.]*
A: Driver +1 · Timing −1 (deliberate Behind)
B: Driver −1 · D1 +1

### Phase F · Origin (Q12–Q13)

**Q12.**
- **A:** Our AI approach came from leadership first.
- **B:** Our AI approach came from teams first.

*Probes: Origin (Strategic vs. Emergent).*
A: Origin +2
B: Origin −2

**Q13.**
- **A:** We have a current inventory of the AI tools each team uses.
- **B:** We periodically learn about new AI tools other colleagues have adopted.

*Probes: D4 visibility / Origin. [v0.8 polish maintained.]*
A: Origin +1 · D4 +2
B: Origin −1 · D4 −2

### Phase G · Sub-discriminators (Q14–Q17)

**Q14.**
- **A:** Our business existed before AI; we added AI to it.
- **B:** AI is why our business exists; there's no non-AI version of it.

*Probes: Vanguard (retrofit) vs. Traveller (greenfield). [v0.9 fix: subject-verb agreement.]*
A: Origin-greenfield −1 (retrofit signal)
B: Origin-greenfield +3 (used in V × T resolution at leaf)

**Q15.**
- **A:** Our dominant AI posture is building internal infrastructure multiple teams depend on.
- **B:** Our dominant AI posture is selectively deploying AI use cases that are already proven.

*Probes: Architect (build platform) vs. Integrator (selective deployment). [v0.9 reframe: Q16-style "build vs. wait" replaced with "build platform vs. selective deploy" since Ratifier is already discriminated by Q19.]*
A: D2 +2, D1 +1 (platform-build signal)
B: D3 +1, D1 +1 (selective-deploy signal)

**Q16.**
- **A:** Our AI experimentation runs many concurrent pilots to figure out what works.
- **B:** Our AI experimentation picks specific use cases proven by peers before deploying.

*Probes: Tinkerer (volume experimentation) vs. Integrator (selective adoption).*
A: Timing +1 · D3 −1 (Tinkerer signal)
B: Timing −1 · D3 +1 (Integrator signal)

**Q17.**
- **A:** Most of our informal AI use is many people doing everyday tasks.
- **B:** Most of our informal AI use is a few people doing sophisticated work.

*Probes: Reach × Depth (for Emergent branch — Folkway vs. Guild).*
A: Reach +2, Depth −1 (Folkway signal)
B: Reach −2, Depth +2 (Guild signal)

### Phase H · Behavioral validators (Q18–Q21)

**Q18.**
- **A:** Multiple teams across our org run on the same internal AI platform.
- **B:** Each team picks its own AI tools; there's no shared platform.

*Probes: Architect signal (platform existence).*
A: D1 +2, D2 +2, D5 +1 (Architect signature)
B: D1 −1

**Q19.**
- **A:** Our main AI deployment criterion is whether the value case is proven.
- **B:** Our main AI deployment criterion is whether compliance review clears the use.

*Probes: Integrator (value-driven) vs. Warden (compliance-driven). [v0.9 polish: "primary AI deployment gate" → "main AI deployment criterion".]*
A: Driver +1
B: Driver −2 · D1 +2 (Warden signature)

**Q20.**
- **A:** We're deploying AI with the tools that exist today.
- **B:** We're waiting for the next generation of AI tools before we deploy.

*Probes: Ratifier signal (deployment commitment). [v0.9 polish: "holding deployment for a future generation" → "waiting for the next generation".]*
A: D7 +1
B: D7 −2, Timing −2 (Ratifier signature)

**Q21.**
- **A:** Our AI documentation is current enough to hand off to a new team member.
- **B:** Our AI work is carried by a few people's practical knowledge.

*Probes: Architect (codified) vs. Guild (tacit/apprenticeship).*
A: D1 +1, D5 +1 (codified expertise)
B: D4 −1, D1 −1 (tacit, Guild-style)

### Phase I · Broker signatures (Q22–Q23) [new in v0.9]

**Q22.**
- **A:** Our AI capability is held mostly by our internal team.
- **B:** Our AI capability is held mostly by external partners we contract with.

*Probes: Broker primary signature (capability locus). [New in v0.9 to address thin coverage.]*
A: Locus +2
B: Locus −2 (Broker signature)

**Q23.**
- **A:** Our AI roadmap follows our own internal priorities and timeline.
- **B:** Our AI roadmap follows what our vendor or partner ships.

*Probes: Broker secondary signature (roadmap source). [New in v0.9.]*
A: Driver +1
B: Driver −1, Locus −1 (Broker secondary signal)

### Phase J · Quality control (Q24)

**Q24.** *Attention check.*
- **A:** Our team uses AI tools as part of how we do our work.
- **B:** Our team has never used or heard of AI tools.

If respondent picks B → flag entire response as suspect.

---

## Hierarchical scoring algorithm

### Step 1: Compute axis scores

Each pick contributes to one or more of seven axes. Sum across all 23 substantive picks (Q24 excluded):

| Axis | Direction | Probed by |
|---|---|---|
| **Origin** | + Strategic / − Emergent | Q12 (heavy), Q13 |
| **Stake** | + Architecture / − Augmentation | Q1 (heavy), Q2 |
| **Timing** | + Ahead / − Behind | Q8 (heavy), Q9, Q11, Q16, Q20 |
| **Locus** | + Internal / − External | Q3 (heavy), Q4, Q22 (heavy), Q23 |
| **Driver** | + Chosen / − Constrained | Q10 (heavy), Q11, Q19 (heavy), Q23 |
| **Reach** (emergent) | + Broad / − Concentrated | Q17 |
| **Depth** (emergent) | + Sophisticated / − Shallow | Q17 |

### Step 2: Top-level branch on Origin

```
if Origin >= 0:
    branch = "Strategic"
else:
    branch = "Emergent"
```

### Step 3: Within Strategic — Stake × Timing quadrant

```
if Stake > 0 and Timing > 0:
    quadrant = "Architecture × Ahead"
    # Resolve via Q14 (retrofit vs. greenfield)
    if Q14_pick == "A":
        return "Vanguard"
    else:
        return "Traveller"

if Stake > 0 and Timing <= 0:
    quadrant = "Architecture × Behind"
    # Resolve via Q20 (deploying today vs. waiting)
    if Q20_pick == "A":
        return "Architect"
    else:
        return "Ratifier"

if Stake <= 0 and Timing > 0:
    quadrant = "Augmentation × Ahead"
    return "Tinkerer"

if Stake <= 0 and Timing <= 0:
    quadrant = "Augmentation × Behind"
    # Resolve via Driver (Constrained?) and Locus (External?)
    if Driver < -1:
        return "Warden"
    elif Locus < -1:
        return "Broker"
    else:
        return "Integrator"
```

### Step 4: Within Emergent — Reach × Depth

```
if Q17_pick == "B" or Depth > 0:
    return "Guild"
else:
    return "Folkway"
```

### Step 5: Tiebreakers

If any axis sum is exactly 0 or within ±1, route to the resolver question for that axis:

| Axis tied | Tiebreaker |
|---|---|
| Origin | Q12 (forced; Q12A → Strategic, Q12B → Emergent) |
| Stake | Q1 (Q1A → Architecture, Q1B → Augmentation) |
| Timing | Q8 (Q8A → Ahead, Q8B → Behind) |
| Locus | Q22 (Q22A → Internal, Q22B → External) |
| Driver | Q19 (Q19A → Chosen, Q19B → Constrained) |

If a leaf-resolver question (Q14, Q20) is needed but the upstream axes were close to zero, surface a "borderline classification" flag in the result alongside the predicted archetype.

---

## Maturity scoring (decoupled from archetype)

The v0.8 maturity scoring inflated Ratifier/Warden because protocol-density picks (Q11A, Q13A, Q24A) read as L3 maturity even when no deployment exists. v0.9 anchors maturity to deployment density first, with governance density as a multiplier.

### Compute deployment density

```
deployment = D7 axis + D4 axis
```

D7 sources: Q1, Q2, Q14, Q20 (≈ Stake + Ratifier deployment posture)
D4 sources: Q13, Q21 (visibility / codification)

### Compute governance density

```
governance = D1 + D2 + D3 + D5 + D6
```

### Map to level via 2D matrix

| Deployment ↓ / Governance → | Low (≤ 2) | Mid (3–6) | High (7+) |
|---|---|---|---|
| **Low (≤ 1)** | L1 Shadow | L1–L2 (governance without deployment) | L2 Sanctioned (governance-heavy, possibly Warden) |
| **Mid (2–4)** | L2 Sanctioned | L2–3 Transitional | L3 Designed |
| **High (5–7)** | L2 (Vanguard reversal risk) | L3 Designed | L3–4 Approaching Infrastructural |
| **Very high (8+)** | L3 (high-risk Vanguard) | L3 Designed | L3–4 / L4 |

This matrix encodes the framework's architecture: governance without deployment is policy, not maturity; deployment without governance is reversal-risk, not maturity; both = real maturity.

### Result

The respondent gets:
1. **Archetype** — from hierarchical classification
2. **Maturity level** — from 2D deployment × governance matrix
3. **Axis tag** — the five-axis position (Origin, Stake, Timing, Locus, Driver) for diagnostic detail
4. **Borderline flag** — if any axis was within ±1 of zero
5. **Attention flag** — if Q24-B was picked

---

## Coverage check

Every archetype has at least one signature question that solely or primarily identifies it within its quadrant:

| Archetype | Quadrant | Resolver | Signature |
|---|---|---|---|
| Vanguard | Architecture × Ahead | Q14 (retrofit) | Q14A |
| Traveller | Architecture × Ahead | Q14 (greenfield) | Q14B |
| Architect | Architecture × Behind | Q20 (deploying today) | Q18A + Q20A + Q15A |
| Ratifier | Architecture × Behind | Q20 (waiting) | Q11A + Q20B |
| Tinkerer | Augmentation × Ahead | (sole occupant) | Q8A + Q16A |
| Integrator | Augmentation × Behind | Driver + Locus internal/chosen | Q15B + Q16B + Q19A |
| Warden | Augmentation × Behind | Driver constrained | Q10B + Q11B + Q19B |
| Broker | Augmentation × Behind | Locus external | Q22B + Q23B + Q3B |
| Folkway | Emergent | Reach broad | Q17A + Q12B + Q13B |
| Guild | Emergent | Depth sophisticated | Q17B + Q21B |

**No archetype is left to win-by-accumulation.** Each is identified by quadrant peers only, with at least one dedicated signature.

## Direction balance (verification)

Distribution of axis signals across the 23 scoring items (Q24 excluded):

| Axis | A leans | B leans |
|---|---|---|
| Origin | Q12A, Q13A | Q12B, Q13B |
| Stake | Q1A, Q2A | Q1B, Q2B |
| Timing | Q8A, Q9A, Q16A | Q8B, Q9B, Q11A, Q16B, Q20B |
| Locus | Q3A, Q4A, Q22A, Q23A | Q3B, Q4B, Q22B, Q23B |
| Driver | Q10A, Q11A, Q19A | Q10B, Q11B, Q19B, Q23B |

Each axis has at least 2 questions probing it from each side. Adequate redundancy for tie-resolution.

## Validation plan

1. **Re-run 100-simulation harness** (10 archetype agents × 10 sims each) using the existing `score_simulations.py` updated for v0.9 hierarchical scoring.
2. **Target match rate ≥ 85%** before declaring v0.9 production-ready.
3. **Per-archetype match rate ≥ 7/10** for all 10 archetypes (no archetype below this floor).
4. **Borderline flag rate < 15%** of total responses (most should classify cleanly).
5. **Maturity-level match rate ≥ 70%** against expected level for each archetype's profile.

If validation fails, identify which axis or resolver is mis-firing and tune.

## Open questions

1. **Borderline strategy.** When axes are near zero, do we (a) route to dedicated resolver questions deterministically, (b) return "ambiguous — between [X] and [Y]" as the result, or (c) ask 1–2 additional clarifying questions inline? My lean: (a) for v0.9, (c) for v1.0 if calibration data supports.

2. **Tinkerer as sole occupant.** The Augmentation × Ahead quadrant has only Tinkerer. Is this right, or is there a hidden archetype here we haven't named (e.g., a "Sprinter" — risk-tolerant Augmentation with no codification discipline)? My lean: keep sole-occupant for v0.9; revisit if calibration data shows orgs landing here that don't fit Tinkerer.

3. **Maturity matrix calibration.** The 2D matrix thresholds (Low/Mid/High/Very-high) are provisional. Pilot data should tune them.

4. **Should the result page show the 2D matrix position visually?** "You are at deployment=4, governance=6, which places you in L2-3 Transitional, leaning Architect." The visualization would help readers understand *why* they got their result. My lean: yes, it's a strong design opportunity for the result page.

5. **24 questions still feels long.** The trim opportunity post-pilot would be: if Origin reliably classifies in 1 question (Q12), drop Q13. If Stake reliably classifies in 1 question (Q1), drop Q2. Could potentially reach 20 items. But not before pilot data.

## What's next

1. Rafa reviews v0.9 + scoring logic.
2. Update `score_simulations.py` with hierarchical placement algorithm.
3. Re-run 100-simulation test against v0.9.
4. If match rate ≥ 85%, freeze for pilot; if < 85%, identify failure modes and tune.
5. Implementation spec — auto-advance, A/B side shuffle, back-button preserves picks.
6. Result page renders archetype + maturity + axis tag + (optional) 2D position visualization.

## Reference: questions removed from v0.8

For the record, these v0.8 questions are not in v0.9:

- v0.8 Q3 (Locus duplicate of Q4) — trimmed
- v0.8 Q11 (Driver duplicate of Q12/Q19) — *kept in v0.9 as Q10*; only the Q11 *renumber* changed
- v0.8 Q13 (Origin duplicate of Q14) — *kept in v0.9 as Q12*; only the renumber changed
- v0.8 Q16 (Architect duplicate of Q20) — replaced with new Q15 (Architect vs. Integrator: build platform vs. selective deploy)
- v0.8 Q21 (Guild duplicate of Q24) — trimmed; Q24 (now Q21) carries Guild signal solo
- v0.8 Q17 reconceptualized as Q16 (Tinkerer vs. Integrator experimentation)

Net effect: 2 trims (Q3, Q21), 1 replacement (Q16 → new Q15), 1 reconceptualization (Q17 → Q16), 2 additions (Q22, Q23 Broker) = 24 items vs. v0.8's 25.
