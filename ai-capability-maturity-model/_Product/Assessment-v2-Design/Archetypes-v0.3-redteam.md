---
title: Assessment archetypes · v0.3 red-team + naming framework exploration
version: v0.3-redteam (2026-04-24)
status: draft · for review
targets: Archetypes-v0.3.md
---

# Red-team + naming framework

Two passes on the v0.3 set: first, structural red-team (does the taxonomy hold?); second, a naming-framework exploration (do the current labels earn their place, or is there a better scheme?).

## Part 1 · Red-team

### Test 1. Coverage — what shapes don't fit?

Real org patterns that don't map cleanly to any current archetype:

| Missing shape | Example | Verdict |
|---|---|---|
| **The Outsourcer** — AI capability entirely delegated to a vendor or consultancy, no internal build. | Mid-market ops orgs running on Palantir/Accenture AI-as-a-service. | Real. Currently collapses to "Compliant-First" or "Deliberate Adopter," but the shape is distinct: they've chosen to not hold the capability. Worth naming. |
| **The Acquirer** — buys AI-native companies to absorb capability instead of building. | Salesforce (Slack/Own), Thomson Reuters (Casetext). | Real but rare among our target readers. Defer. |
| **The Bifurcated Org** — one archetype in consumer product, a different one in enterprise / back-office. | Most Fortune 500. | Pervasive — but this is a **scoping problem**, not a missing archetype. Fix with Screen 1 phrasing ("for the function you lead"). |
| **Research-only orgs** — capability R&D with no deployment. | Academic labs, some internal research groups. | Out of target audience. Skip. |

**Action:** add "The Outsourcer" as a 10th archetype or fold into Compliant-First/Deliberate with explicit note. Leaning toward separate archetype — delegation is a distinct strategy.

### Test 2. Discriminability — where do archetypes blur?

Pairs that a respondent could reasonably pick either side of:

| Pair | Where the line blurs | Fix |
|---|---|---|
| **Pragmatist ↔ Rapid Iterator** | Both are selective, experiment-driven, non-dogmatic. | Pragmatist *redesigns workflows* around proven use. Rapid Iterator *runs many pilots* without yet codifying. Screen 2 needs to ask: "Which of your AI pilots has become standard practice?" (Pragmatist = some; Iterator = few) |
| **Organic Adopter ↔ Invisible Experts** | Both are bottom-up, org-strategy-absent. | Organic = *widespread, shallow* individual adoption. Invisible Experts = *concentrated, sophisticated* pockets. Screen 2: "What kind of AI work is happening that leadership can't see?" |
| **Deliberate Adopter ↔ Compliant-First** | Both delay deployment. | Deliberate = *strategic timing* (polish, market readiness). Compliant = *regulatory gating*. Orthogonal motivation. Usually clear in Screen 1 if copy emphasizes "why you're waiting." |
| **Pioneer ↔ AI-Native Builder** | Both deploy aggressively in core. | Pioneer = *retrofit* (AI pushed into existing org). AI-Native = *greenfield* (org architected around AI from inception). Respondents self-sort cleanly if prompted about origin. |
| **Platform Builder ↔ AI-Native Builder** | Both can claim deep infra. | Platform = infra for *internal* teams. AI-Native = infra for *external* product. Clearer after Screen 2. |

**Biggest discriminability risks:** Pragmatist ↔ Rapid Iterator, Organic ↔ Invisible Experts. Both need Screen 2 to separate.

### Test 3. Self-selection — who wouldn't pick their true archetype?

For each archetype, the question: "Would a respondent who actually fits this pick it?"

| Archetype | Self-selects? | Risk |
|---|---|---|
| Pragmatist | Yes. Flattering. | Over-selection. Many will pick this aspirationally. |
| Pioneer | Yes, *if* the descriptor owns reversal risk as strength. | Descriptor copy critical. |
| Platform Builder | Yes. Prestige archetype. | Over-selection by respondents who have *one* shared tool and call it a platform. |
| AI-Native Builder | Yes, if org actually is. | Mostly self-correct; but some retrofit orgs will claim it. |
| Deliberate Adopter | Depends. Reads as "we're slow" without strong framing. | Likely under-selection — respondents who are actually in this camp may hide as Pragmatist. |
| Organic Adopter | No. Reads as "we have no strategy." | **Underselection risk. Real orgs in this state will pick Rapid Iterator or Pragmatist instead.** |
| Rapid Iterator | Yes. Active-sounding. | Over-selection as cover for Organic Adopter. |
| Invisible Experts | No — respondents don't know they're it. | **Self-selection broken by definition.** Must infer from Screen 2, not Screen 1. |
| Compliant-First | Yes in regulated verticals; "defensive" elsewhere. | Reads as narrow — fine since target population is already narrow. |

**Two structural problems:**
1. **Invisible Experts can't be self-picked.** The archetype is defined by the organization *not knowing* its experts are doing sophisticated AI work. This archetype cannot live on Screen 1. It's a Screen 2–detected pattern only.
2. **Organic Adopter will be underselected.** Readers who fit will mask as Pragmatist/Rapid Iterator. Needs Screen 2 catch: "How did AI first enter your organization? — via leadership mandate / via individual experiments / we're still figuring it out."

### Test 4. Implicit hierarchy — does the set suggest a "best" archetype?

The anchors sit at L2, L2, and L3–4. Platform Builder sits highest on the maturity ladder. Readers will feel a gravitational pull toward identifying as Platform Builder.

**Risk:** the quiz becomes an "are you high-maturity?" test in disguise. That defeats the diagnostic purpose — we want honest self-location, not aspirational picks.

**Mitigations:**
- Descriptor copy for every archetype must foreground *what's strong about being this*, not just the trade-off.
- The result page must frame maturity levels as "where this archetype typically sits" not "how good you are."
- Deliberate Adopter needs the strongest frame — right now it's the most at-risk of reading as "you're behind" despite being a legitimate strategy.

### Test 5. Temporal stability — which are stable vs. passage states?

| Archetype | Stable | Passage |
|---|---|---|
| Pragmatist | ✓ |  |
| Pioneer |  | ✓ (resolves to Pragmatist via retrofit, or to Platform Builder if bet scales, or to crisis) |
| Platform Builder | ✓ |  |
| AI-Native Builder | ✓ |  |
| Deliberate Adopter | ✓ (by choice) |  |
| Organic Adopter |  | ✓ (most orgs pass through in months, not years) |
| Rapid Iterator |  | ✓ (graduates to Pragmatist or Pioneer) |
| Invisible Experts | ✓ at individual level; unstable at org level |  |
| Compliant-First | ✓ (tied to regulatory cycle) |  |

**Implication:** the result page for passage-state archetypes should explicitly say "this is a moving state — here's what you're likely to become." That's useful diagnostic output. Stable-state archetypes get different copy ("here's how to be excellent at this").

### Test 6. Diagnostic value — does each archetype yield a different "next move"?

The test: if we told a respondent "you are The X," would that tell them something different from "you are The Y"?

| Archetype | Distinct next move? |
|---|---|
| Pragmatist | Yes — "here's how to deepen workflow redesign in your highest-ROI domain" |
| Pioneer | Yes — "here's how to retrofit governance to your deployed bets before a reversal" |
| Platform Builder | Yes — "here's how to capture upstream signal and widen your moat" |
| AI-Native Builder | Yes — "here's how to defend your operating-model advantage as incumbents adapt" |
| Deliberate Adopter | Yes — "here's how to time entry so you catch the second wave with polish" |
| Organic Adopter | Yes — "here's how to make visible what your teams are already doing, before it becomes Samsung" |
| Rapid Iterator | **Weaker.** Very close to Pragmatist's next move. |
| Invisible Experts | Yes — "here's how to codify the F2F pattern before the experts leave" |
| Compliant-First | Yes — "here's how to turn your compliance posture into a competitive moat" |

**Only Rapid Iterator is diagnostically thin.** It either collapses into Pragmatist (if the iteration produces codification) or into Pioneer (if it scales a bet). Consider: is Rapid Iterator a real archetype or a pre-archetype state that should surface in Screen 2 as "you're between Pragmatist and Pioneer"?

**Recommendation:** keep Rapid Iterator for now but make it explicit in the result page that this is a transient posture.

### Test 7. Cultural / sector generality

The framing is US-tech-centric: Pioneer / Pragmatist / Platform Builder are the archetypes US enterprise consulting celebrates. European respondents may be over-represented in Compliant-First; Japanese orgs may read as Deliberate Adopter more often than the population warrants.

**Not fatal.** Our initial audience is US/EU enterprise deployment managers. Note the bias; watch for it in pilot data.

### Red-team summary

Issues ranked by severity:

1. **Invisible Experts cannot self-select** — must detect via Screen 2, not list on Screen 1.
2. **Organic Adopter will be underselected** — catch via Screen 2 question about how AI entered the org.
3. **Outsourcer shape missing** — add as 10th archetype.
4. **Rapid Iterator is diagnostically thin** — keep but frame as transient.
5. **Pragmatist ↔ Rapid Iterator blur, Organic ↔ Invisible Experts blur** — resolve via Screen 2.
6. **Implicit hierarchy pulls toward Platform Builder** — descriptor copy must foreground strengths per archetype.
7. **Deliberate Adopter still reads as "we're slow"** — needs strongest positive framing; name may still be too weak (see Part 2).

---

## Part 2 · Naming framework exploration

Current names are **functional descriptors** ("The Pragmatist," "The Pioneer," "The Platform Builder"). That's one family of naming schemes. Personality diagnostics use several others — worth asking if there's a better fit.

### Naming-scheme reference set

| System | Scheme | Example |
|---|---|---|
| MBTI | Functional descriptors ("The Commander", "The Advocate") layered on 4-letter codes | ENTJ → "The Commander" |
| Enneagram | Single-word archetypal role | "The Reformer", "The Challenger", "The Peacemaker" |
| Keirsey | 4 temperaments, each a mythic noun | "Guardian", "Artisan", "Rational", "Idealist" |
| StrengthsFinder | Abstract quality noun | "Achiever", "Strategic", "Learner" |
| Spiral Dynamics | Color codes + archetype | "Red/Impulsive", "Blue/Order" |
| Quadrantology | Full descriptive phrases | "The Discoverer of Dreams", "The Architect of Systems" |
| Cattell 16PF | Bipolar traits | "Reserved ↔ Outgoing" |
| Jungian brand archetypes | Mythic nouns with narrative | "The Explorer", "The Sage", "The Magician" |

Patterns that work for enterprise-facing diagnostics:
- **Single evocative noun, "The [X]"** (Enneagram, Jungian) — memorable, identity-attachable
- **Functional role** (MBTI expansions) — legible, no translation needed
- **Short mythic noun** (Keirsey) — fewest moving parts, high recall

Patterns that don't work here:
- Bipolar trait pairs (too technical)
- Color codes (require a legend)
- Full descriptive phrases (too long for a card UI)

### Four candidate frameworks

Each framework applied across all nine archetypes (+ The Outsourcer):

#### Framework A · Keep functional descriptors (v0.3 status quo)

Pragmatist / Pioneer / Platform Builder / AI-Native Builder / Deliberate Adopter / Organic Adopter / Rapid Iterator / Invisible Experts / Compliant-First / (+ Outsourcer / Delegator)

- **Pro.** Legible. No translation layer. Enterprise-appropriate. Each label self-explains.
- **Con.** Dull. Visually indistinguishable from any other consulting deck. Weak identity attachment ("The Rapid Iterator" isn't something a person claims with pride).
- **Fit for audience.** High legibility; low memorability.

#### Framework B · Craft / Maker roles

Connects to the vibe-coding / maker-movement thesis we already use in descriptor copy.

| Archetype | Craft name |
|---|---|
| Pragmatist | **The Journeyman** — skill-verified, measured, works only where the craft pays |
| Pioneer | **The Prospector** — first into the seam, accepts the shaft may collapse |
| Platform Builder | **The Millwright** — builds the mill others mill in; the infrastructure layer |
| AI-Native Builder | **The Founder** — breaks ground on virgin plot |
| Deliberate Adopter | **The Master** — waits until the tool is trued, then cuts clean |
| Organic Adopter | **The Forager** — gathers what's available in the undergrowth |
| Rapid Iterator | **The Tinkerer** — many attempts, few finished |
| Invisible Experts | **The Guild** — quiet competence in a shadow network |
| Compliant-First | **The Licensed Trade** — operates under sanction |
| Outsourcer | **The Broker** — arranges the work, doesn't hold the tools |

- **Pro.** Resonates with Protocolized's "protocols as infrastructure" thesis. Direct line to the vibe-coding / maker-movement article's argument. Each name carries narrative.
- **Con.** Some fit perfectly (Prospector, Millwright, Master); some stretch (The Guild reads plural; "Journeyman" implies not-yet-master which misfits Pragmatist). Needs trimming.
- **Fit.** Best narrative coherence of the four. Slightly romantic for C-suite.

#### Framework C · Functional name + totem symbol (hybrid)

Keep the descriptive noun; add a visual/symbolic totem per archetype. Site cards and result pages carry the symbol.

| Archetype | Totem |
|---|---|
| Pragmatist | Compass |
| Pioneer | Flag planted in open ground |
| Platform Builder | Foundation stone |
| AI-Native Builder | Sapling in new soil |
| Deliberate Adopter | Hourglass |
| Organic Adopter | Mycelium network |
| Rapid Iterator | Bellows / anvil |
| Invisible Experts | Lantern |
| Compliant-First | Shield / seal |
| Outsourcer | Commissioned contract / handshake |

- **Pro.** Keeps legibility of functional name. Adds memorability via symbol. Gives the site visual hooks (archetype cards with distinct iconography). Symbols can evolve without renaming.
- **Con.** Slightly over-designed. Risk of the symbol becoming cuter than the archetype it represents.
- **Fit.** Best for the web product surface; keeps the text serious.

#### Framework D · Four-temperament consolidation (Keirsey-style)

Collapse nine archetypes into four families, each with a mythic noun. Sub-archetypes live inside families.

| Family | Noun | Contains |
|---|---|---|
| **Guardians** | Cautious, rule-and-compliance first | Compliant-First, Deliberate Adopter, Outsourcer |
| **Artisans** | Hands-on, experimental, bottom-up | Rapid Iterator, Invisible Experts, Organic Adopter |
| **Architects** | Systems-minded, planner | Pragmatist, Platform Builder |
| **Founders** | Greenfield, first-mover | Pioneer, AI-Native Builder |

- **Pro.** Dramatically simplifies (4 cards on Screen 1, not 9). Memorable. Diagnostic still possible with Screen 2 resolving sub-archetype.
- **Con.** Loses fidelity at Screen 1. "Artisan" grouping bundles very different orgs. The framework becomes "Keirsey for AI adoption," which is either strong borrowing or derivative — depends on execution.
- **Fit.** Strongest candidate *if* we want to simplify Screen 1 to 4 options; weakest if we want to preserve 9 distinct profiles.

### Recommendation

**Framework C (functional + totem), with targeted name upgrades from Framework B where the craft metaphor sharpens the archetype.**

Specifically:
- Keep: **The Pragmatist, The Pioneer, The Platform Builder, The AI-Native Builder, The Compliant-First, The Rapid Iterator**
- Replace: **The Deliberate Adopter → The Master** (or **The Finisher**). "Master" carries the "waits until the tool is trued, then cuts clean" image; directly addresses the weakness identified in red-team test 3.
- Replace: **The Organic Adopter → The Wildwork** or **The Understory**. Both foreground emergence as legitimate. "Understory" (the forest layer below the canopy) doubles as a visibility metaphor — work happening below where leadership looks. Picks up the diagnostic signal of Test 3.
- Replace: **The Invisible Experts → The Guild**. Keeps the network sense; sounds like something to belong to rather than something accidentally diagnostic.
- Add: **The Broker** (Outsourcer). Delegation as a chosen posture.

Each archetype also gets a totem symbol per Framework C for site visuals.

This hybrid keeps enterprise legibility while fixing the three weakest names (Deliberate Adopter, Organic Adopter, Invisible Experts) — each of which had red-team issues for reasons traceable to the name itself.

### What this would look like on Screen 1

Five cards, each with **totem icon + archetype name + one-line self-claim**:

1. 🧭 **The Pragmatist** — "We adopt where it pays. We redesign when it matters."
2. 🚩 **The Pioneer** — "Someone has to go first. We'd rather learn hard than wait safe."
3. 🏛 **The Platform Builder** — "We're not chasing the latest model. We're building the platform our teams run on for years."
4. ⧗ **The Master** — "We don't surf the first wave. We ship the one that lasts."
5. 🌱 **The Understory** — "AI is already in use across our teams. We're figuring out what to do with what they've discovered."

(Plus: "None of these quite fit" → routes to an expanded 10-option view including Guild, Broker, Compliant-First, Rapid Iterator, AI-Native Builder.)

## Open decisions for you

1. **Add The Outsourcer / The Broker as a 10th archetype?** (Red-team test 1 said yes.)
2. **Which naming framework?** A (status quo) / B (Craft) / C (Functional+Totem) / D (Keirsey-style). My vote: C with selective B borrows.
3. **Name changes to lock in?** My picks: Deliberate → Master, Organic → Understory, Invisible Experts → Guild.
4. **Screen 1 count?** Still 5 (anchors + 2 extensions) vs. 4 (Keirsey consolidation) vs. 10 (full set).
5. **Should Invisible Experts / Guild appear on Screen 1 at all?** Red-team test 3 said it can't be self-picked. Options: remove from Screen 1, detect only via Screen 2, or leave visible but describe as "your experts do X without you knowing — does that ring true?"

## Next

Once you pick a framework, v0.4 writes 40–80-word descriptors per final archetype + Screen 2 behavioral validators designed to catch the specific discriminability failures identified in red-team test 2.
