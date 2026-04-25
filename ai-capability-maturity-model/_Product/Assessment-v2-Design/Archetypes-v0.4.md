---

## title: Assessment archetypes · v0.4 finalized taxonomy + protocol-role names
version: v0.4 (2026-04-24)
status: draft · for review
supersedes: Archetypes-v0.3.md (plus v0.3-redteam.md integrated)
depends_on: Framework-v1.md (v1.3)

# Assessment archetypes — v0.4

v0.3 had positive reframes. The red-team surfaced seven structural issues. This version integrates the fixes, finalizes the archetype set, tests MECE, distills the key drivers into three 2×2s, and locks in protocol-role names.

## Canonical archetype table

The ten archetypes with their axis values and final names.


| #   | Name              | Origin    | Stake                        | Timing              | Locus       | Driver      |
| --- | ----------------- | --------- | ---------------------------- | ------------------- | ----------- | ----------- |
| 1   | **The Vanguard**  | Strategic | Architecture (retrofit)      | Ahead               | Internal    | Chosen      |
| 2   | **The Traveller** | Strategic | Architecture (greenfield)    | Ahead               | Internal    | Chosen      |
| 3   | **The Architect** | Strategic | Architecture                 | Behind              | Internal    | Chosen      |
| 4   | **The Integrator**   | Strategic | Augmentation                 | Behind              | Internal    | Chosen      |
| 5   | **The Tinkerer**  | Strategic | Augmentation                 | Ahead               | Internal    | Chosen      |
| 6   | **The Ratifier**  | Strategic | Architecture                 | Behind (deliberate) | Internal    | Chosen      |
| 7   | **The Warden**    | Strategic | Augmentation                 | Behind              | Variable    | Constrained |
| 8   | **The Broker**    | Strategic | Augmentation                 | Behind              | External    | Chosen      |
| 9   | **The Folkway**   | Emergent  | Augmentation (shallow)       | —                   | Individuals | —           |
| 10  | **The Guild**     | Emergent  | Augmentation (sophisticated) | —                   | Individuals | —           |


**Axis definitions.** Origin = designed vs. emergent. Stake = architecture (AI is what the business is or runs on) vs. augmentation (AI helps existing work). Timing = ahead of proof (deploy under uncertainty) vs. behind proof (deploy after validation). Locus = internal (org holds capability) vs. external (vendor holds it). Driver = strategic choice vs. external constraint.

**Prior names** for reference: Vanguard was Pioneer; Traveller was AI-Native Builder; Architect was Platform Builder; Integrator was Pragmatist; Tinkerer was Rapid Iterator; Ratifier was Master / Deliberate Adopter; Warden was Compliant-First; Folkway was Understory / Organic Adopter; Guild was Invisible Experts.

## What changed from v0.3 (red-team integration)


| Red-team finding                           | Fix in v0.4                                                                                                                                     |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Invisible Experts can't self-select        | Renamed **The Guild**; moved to the *emergent* branch where it belongs. Not a Screen 1 pick — detected via the emergent-branch questions.       |
| Organic Adopter under-selects              | Renamed **The Folkway** (anthropological term for unwritten practice; doubles as visibility signal). Emergent branch.                           |
| Outsourcer shape missing                   | Added **The Broker** — delegation as chosen posture.                                                                                            |
| Rapid Iterator diagnostically thin         | Kept as **The Tinkerer**, but placed explicitly as a *transient* state between Folkway and Integrator. Descriptor copy will own the passage-state. |
| Pragmatist ↔ Rapid Iterator blur           | Integrator vs. Tinkerer. Discriminator is *information strategy*: Integrator waits for market evidence; Tinkerer generates its own.                   |
| Implicit hierarchy toward Platform Builder | Addressed by the 2×2 framing below — Architect (formerly Platform Builder) is one bet, not the apex of a ladder.                                |
| Deliberate Adopter name weak               | Renamed **The Ratifier** — formalizes the mature version rather than the first draft.                                                           |


## The final set: 10 archetypes (with descriptors)

Split at the top by a single binary: **is AI adoption strategic or emergent?**

### Strategic (designed) — 8

1. **The Vanguard** — deploys aggressively in core work before governance is ready. Retrofit pattern. Klarna, Duolingo, Shopify arc.
2. **The Traveller** — product architecturally depends on AI from inception. Greenfield. Market-creating (Boom, Cursor) or service-rebuilding (AI-native fintech, logistics).
3. **The Architect** — internal AI infrastructure that multiple teams depend on. Institutional evolution. Uber four-layer; BBVA 4000+ GPTs.
4. **The Integrator** — selective deployment where value is demonstrable; redesigns workflows around proven use. Accenture "AI Achievers."
5. **The Tinkerer** — generates own evidence via many small experiments; few yet codified. Scaleup-typical. Transient state en route to Integrator or Vanguard.
6. **The Ratifier** — defers deployment by strategic choice; ships late with high polish. Apple pattern.
7. **The Warden** — defers by regulatory gating. EU AI Act, financial services, healthcare. Compliance posture as moat.
8. **The Broker** — delegates AI capability externally; arranges the work without holding the tools. Mid-market ops on vendor-delivered AI services.

### Emergent (undesigned) — 2

1. **The Folkway** — broad, shallow individual adoption below organizational visibility; no central design. Strength: bottom-up sensing. Risk: Samsung scenario.
2. **The Guild** — concentrated, sophisticated individual or team work below organizational visibility. Strength: proprietary "tasteful discrimination" accumulating at the expert layer. Risk: expertise leaves with the person.

## MECE check

**Mutually exclusive** — where do archetypes blur, and how is the line drawn?


| Potential overlap     | Line                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Integrator ↔ Tinkerer    | Integrator adopts from external evidence; Tinkerer generates its own.                              |
| Integrator ↔ Warden      | Integrator chooses what to deploy; Warden is gated by regulation.                                  |
| Integrator ↔ Broker      | Integrator builds internal capability; Broker contracts it out.                                    |
| Ratifier ↔ Warden     | Ratifier defers by strategic choice; Warden defers by constraint.                               |
| Vanguard ↔ Traveller  | Vanguard retrofits AI into existing org; Traveller architects around AI from inception.         |
| Architect ↔ Traveller | Architect = infrastructure for internal teams; Traveller = infrastructure for external product. |
| Folkway ↔ Guild       | Folkway is broad + shallow; Guild is concentrated + sophisticated.                              |


No irreducible overlaps. Some pairs require Screen 2 to separate at reader level, but the conceptual lines are clean.

**Collectively exhaustive** — what real org shapes land where?


| Real shape                                                                                     | Archetype                                                      |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Large enterprise with mandated Copilot rollout, weak governance                                | Vanguard                                                       |
| Enterprise with careful pilots, published results, workflow redesign                           | Integrator                                                        |
| Enterprise with internal AI platform team serving other divisions                              | Architect                                                      |
| AI-first startup                                                                               | Traveller                                                      |
| Scaleup running many AI experiments, not yet codified                                          | Tinkerer                                                       |
| Enterprise deliberately waiting for second-generation tools                                    | Ratifier                                                       |
| EU bank, healthcare org waiting for regulatory alignment                                       | Warden                                                         |
| Mid-market ops running on vendor-delivered AI services                                         | Broker                                                         |
| Small org where everyone uses ChatGPT on the side                                              | Folkway                                                        |
| Enterprise where a few experts have built sophisticated custom pipelines unknown to leadership | Guild                                                          |
| Bifurcated F500 (different archetypes in different divisions)                                  | Scoping problem — assessment scopes to "the function you lead" |


Collectively exhaustive at the *scoped* level. Bifurcated orgs fall out of the framework if you try to classify the whole company at once — handled by Screen 1 phrasing.

## The key drivers — three 2×2s

The taxonomy distills into three matrices. The first sorts all archetypes by the two most load-bearing axes; the second and third handle sub-discrimination.

### 2×2 #1 · The Strategic Adoption Matrix

**Primary axes.** The two drivers that discriminate most archetypes.

- **X · Timing posture** — Ahead of proof (deploy under uncertainty) / Behind proof (deploy once validated)
- **Y · Stake depth** — Architecture (AI is what the business is or runs on) / Augmentation (AI makes existing work better)


|                                     | **Ahead of proof**                                                                                             | **Behind proof**                                                                                                      |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Architecture (foundation)**       | **Vanguard** — retrofit at scale, accept reversal risk; **Traveller** — greenfield build architected around AI | **Architect** — build infrastructure before competitors need it; **Ratifier** — wait for maturity, deploy with polish |
| **Augmentation (capability-layer)** | **Tinkerer** — generate own evidence via volume                                                                | **Integrator** — follow proven use cases; **Warden**, **Broker** — follow but with different motivations                 |


**What's it telling you.** Almost every strategic archetype lives on one of four stances. The two *reasons* an org can be "Behind proof + Augmentation" (Warden, Broker) share a cell with Integrator — differentiated by 2×2 #2.

**What it hides.** Emergent archetypes (Folkway, Guild). They're not bets; they're states. They need their own frame (2×2 #3). And **Traveller** shares Vanguard's cell but is diagnostically distinct — it's greenfield (org architected around AI from inception) vs. Vanguard's retrofit. Separate via Screen 2.

### 2×2 #2 · The Deferral Motivation Matrix

**For orgs that sit in "Behind proof + Augmentation."** Three archetypes crowd this cell; this 2×2 separates them.

- **X · Capability locus** — Internal (we hold the capability) / External (we source it)
- **Y · Deferral driver** — Strategic (we chose to wait) / Constrained (external forces make us wait)


|                          | **Internal capability**                                                                               | **External capability**                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Strategic deferral**   | **Integrator** — chose selective adoption; kept control                                                  | **Broker** — chose delegation; capability lives at the vendor |
| **Constrained deferral** | (rare — internal builders under regulatory hold usually either push into Architect or wait as Warden) | **Warden** — can't deploy faster than the regulator permits   |


**What's it telling you.** Why you're following matters as much as the fact you're following. An Integrator and a Warden may look similar on the surface (both measured, both cautious) but their next moves are different: Integrator can accelerate when value becomes clear; Warden can't until regulation does.

### 2×2 #3 · The Emergence Matrix

**For orgs where AI is happening without central design.** Covers the two emergent archetypes plus their transitional states.

- **X · Reach** — Broad (many users touching AI) / Concentrated (few users doing deep work)
- **Y · Depth** — Shallow (surface / tool-level use) / Sophisticated (custom pipelines, expert judgment)


|                         | **Broad reach**                                                                                 | **Concentrated reach**                                                  |
| ----------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Sophisticated depth** | → transitioning to Integrator or Architect (broad sophisticated use = has already been formalized) | **The Guild** — experts holding the sophistication below org visibility |
| **Shallow depth**       | **The Folkway** — everyone uses it a little, no one redesigns anything                          | (ordinary shadow IT — precursor to Folkway; not its own archetype)      |


**What's it telling you.** Emergent AI adoption has two stable shapes: broad+shallow (Folkway) and concentrated+sophisticated (Guild). The other diagonals are transitions: broad+sophisticated is already being formalized; concentrated+shallow is just ordinary shadow IT in the early phase.

The diagnostic value: if you're emergent, knowing *which* emergent matters more than knowing you're emergent. Folkway calls for visibility infrastructure; Guild calls for codification / retention.

## The relationship map (how archetypes transition)

Archetypes aren't frozen. Orgs move between them as conditions change. The transitions:

```
  Folkway ──(formalization)──> Tinkerer ──(codification)──> Integrator
     │                                                           │
     │                                                           │
     │                                                     (platform investment)
     │                                                           ▼
     │                                                       Architect
     │
     └──(concentration + expertise)──> Guild ──(codification)──> Architect (in that domain)

  Vanguard ──(retrofit succeeds)──> Integrator
           ──(retrofit fails, crisis)──> Ratifier (defensive posture)

  Ratifier ──(market matures, they move)──> Integrator or Architect

  Warden ──(regulation clarifies, org deploys)──> Integrator

  Broker ──(strategic choice to internalize)──> Integrator or Architect

  Traveller (stable — doesn't transition; scales within its form)
```

Three observations from the map:

1. **Integrator is a central basin.** Many paths converge on it. That makes sense — it's the middle-maturity, middle-posture archetype; the "average destination" of most healthy paths.
2. **Architect is the late-stage scaling form** for several starting points. Not the "best" archetype; the one that emerges when scale makes infrastructure economics dominate.
3. **Traveller is topologically isolated.** Orgs don't *become* a Traveller — they're architected that way from the start. An enterprise running a successful AI retrofit becomes an Integrator or Architect, not a Traveller.

## Distilled: the three key drivers

Strip the 2×2s down and three questions do most of the diagnostic work:

### Driver 1 · Is AI adoption strategic or emergent?

The top-level split. Strategic orgs have a *bet* we can name (the 8 strategic archetypes). Emergent orgs have a *state* we can name (Folkway, Guild). The prescriptions differ fundamentally — strategic orgs need to refine their bet; emergent orgs need to decide whether to formalize.

### Driver 2 · If strategic: what's the stake, and what's the timing?

- **Stake** — Architecture (AI is the business) or Augmentation (AI helps the business)
- **Timing** — Ahead of proof (accept reversal risk) or Behind proof (accept opportunity cost)

The combination yields the four strategic postures. Everything else (internal vs. external, strategic vs. constrained, retrofit vs. greenfield) is sub-resolution.

### Driver 3 · If emergent: what's the shape?

- **Broad + shallow** = Folkway
- **Concentrated + sophisticated** = Guild

The other diagonals are transitional, not stable.

These three drivers produce the full 10-archetype taxonomy with ~3 questions of diagnostic resolution. The assessment can be structured around them.

## Open questions for you

1. **Does the 2×2 #1 framing (Stake × Timing) feel right as the primary frame?** Alternatives: Stake × Origin (Strategic/Emergent), or Locus × Pace (Internal/External × Lead/Follow). My pick is Stake × Timing because it captures the two most common strategic-planning conversations about AI adoption.
2. **Is Traveller fine as sharing the Vanguard quadrant, or does it deserve its own matrix cell?** Currently they share "Architecture + Ahead of proof" and separate via Screen 2 (retrofit vs. greenfield). Option A: keep merged. Option B: add a third axis (retrofit/greenfield) that splits the quadrant.
3. **Should Tinkerer graduate out of the main set?** Arguments for: it's a passage state, already named as transitional in the relationship map. Arguments against: many real orgs live there for years, and the diagnostic advice is distinct (codify before scaling). My current lean: keep, frame as transient in the result copy.
4. **Is the emergent/strategic binary strong enough to be the root question?** Or is it more useful to collapse emergent into the strategic framing somehow? My lean: keep the binary — emergent really is a different *kind* of situation, and the diagnostic advice differs fundamentally.

## What's next

1. Rafa approves the final 10 + 2×2 structure (or redlines).
2. v0.5 drafts reader-facing descriptors (~40–80 words per archetype) + behavioral-validator questions calibrated to the Screen 2 cuts identified in the MECE table.
3. Implementation: the quiz flow collects Driver 1 → Driver 2 or Driver 3 → returns archetype.

