---
title: Assessment archetypes · v0.2 inventory (research-grounded)
version: v0.2 (2026-04-24)
status: draft · for review
supersedes: Archetypes-v0.1.md
depends_on: Framework-v1.md (v1.3)
research_pass: Explore agent audit of 2024–2026 AI-adoption discourse vs. v0.1 top-down archetypes
---

# Assessment archetypes — v0.2 (research-grounded)

v0.1 proposed 8 top-down archetypes. A research agent then audited those against what practitioners, analysts, and commentators are actually describing in the 2024–2026 discourse. This revision consolidates to **3 anchor archetypes + 6 extensions**, following the user's guidance that "sometimes all we need is three anchor archetypes that we can extend."

## What changed from v0.1

### Retired or merged

- **Mandated Mover** (v0.1 #3) — research call: this isn't a stable archetype. Successful mandates look like Pragmatism at scale; failed mandates land as Over-Reliance. It's a transition state, not an endpoint. Drop.
- **Cautious Abstainer** (v0.1 #1) — renamed **The Deferrer** to better capture "waiting for clarity" (regulatory, vendor consolidation, or standards stability) rather than pure reluctance.
- **Designed Pocket** (v0.1 #5) — renamed **The Controlled Pilot** to align with how the discourse names this shape.
- **Bricoleur Network** (v0.1 #6) — renamed **The Invisible Experts** to sharpen the diagnostic intent: sophisticated AI work happening below organizational visibility.

### Added (from research)

- **The Pragmatist** — the largest coherent pattern in the discourse (Accenture Achievers, McKinsey high performers, Mollick's framing). Not in v0.1; now an anchor.
- **The Compliant-First** — EU AI Act-driven. Surfaced in the research; distinct enough to keep.
- **The FAFO Experimenter** — iterative, scrappy, learn-by-doing, distinct from Accidental Adopter because it's deliberate. Maps to discourse's "experimentation phase" / Mollick's "hidden adoption."

## The three anchor archetypes

Each anchor has strong discourse grounding, a canonical real-world example, and clear diagnostic discriminability from the other two.

### Anchor 1 · **The Pragmatist** (L2–L3)

**Strategy.** Adopts AI selectively, where value is demonstrable. Redesigns workflows around AI rather than layering AI onto existing processes. Measured, evidence-driven.

**Defining behavior.** Picks specific use cases with clear ROI. Runs pilots with quality metrics. Is willing to walk away from an AI use case that doesn't prove out.

**Real-world example.** Accenture's "AI Achievers" (12% of enterprises); McKinsey's high performers who are 3× more likely to fundamentally redesign workflows.

**Dimension signature.** Mid-to-high D1 (protocols exist and are followed), high D2 (schema discipline), mid D3 (review and generation paced), high D5 (domain expertise validates), mid D7 (AI in some products, not all), mid D6 (mostly internal).

**AI-flavor emphasis.** Flavors 2 + 3 (enterprise workforce tools + selective product integration).

**Maturity placement.** L2–3. The success path for most mature enterprises.

---

### Anchor 2 · **The Over-Reliant** (L2, anti-pattern)

**Strategy.** Broad AI mandate without the governing protocol. Assumes access = value. Skips workflow redesign and quality validation. Often customer-facing.

**Defining behavior.** Rolls out AI aggressively (often in customer service, content, or core delivery); discovers quality issues via customers or external events; is forced into a reversal.

**Real-world example.** Klarna (2024–2025 arc: 700 agents replaced, quality collapse, rehired humans, CEO public reversal). Duolingo (AI-first content, user DAU drop). Shopify-adjacent (Lütke "non-optional" memo; revenues strong, reversal risk not yet materialized).

**Dimension signature.** Very high D7 (AI embedded deep), low D1 (no protocol), low D5 (no domain expert validating), low D4 on the quality-signal axis (issues surface externally).

**AI-flavor emphasis.** Flavor 3 aggressive (product-integrated); flavor 2 mandated across workforce.

**Maturity placement.** L2 with reversal risk. This archetype is the canonical cautionary pattern — the diagnostic needs it specifically because it looks more mature than L2 on some axes but is structurally under-designed.

---

### Anchor 3 · **The Platform Builder** (L3–L4)

**Strategy.** Build internal AI platform infrastructure that multiple teams depend on. Retool workflows around agent-generated output. Treat validation and governance as engineered constraints, not afterthoughts.

**Defining behavior.** Invests in multi-layer AI platform (foundation + context + agents + specialized agents). Runs agentic workflows autonomously. Treats code / output review as a first-class bottleneck to be solved, not a nuisance.

**Real-world example.** Uber (84% developer agentic adoption, 65–72% AI-generated code, four-layer platform architecture, code review scaled alongside generation). BBVA (4000+ custom GPTs). Frontier orgs in OpenAI's State of Enterprise AI (6× messages vs. median).

**Dimension signature.** High D1 + D2 + D3 (platform enforces governance and scales review) + high D5 (platform team holds specialized expertise) + mid-high D6 (mostly intra-org, occasional partner work) + mid-to-high D7.

**AI-flavor emphasis.** Flavors 4 + 5 central (infrastructure AI, custom / developed AI); platform provides flavors 2 + 3 to other teams.

**Maturity placement.** L3, moving toward L4.

## The six extensions (for later iterations or richer assessments)

### Ext 1 · **The AI-Native Builder** (L3)

Product depends on AI from inception; governance designed alongside capability. Structural subtype of high maturity — distinct from Platform Builder (which is legacy orgs crossing into L3 via infrastructure investment). Boom Supersonic, Cursor, AI-native startups capturing 44% of 2025 VC investment. **Worth adding when the diagnostic needs to distinguish legacy enterprises from AI-native startups.**

### Ext 2 · **The Compliant-First** (L2)

Delays or gates AI deployment until regulatory / standards alignment is confirmed. EU AI Act–driven. Enforceable August 2026 deadlines; compliance is functioning as a 1.5–2× valuation multiplier for regulated-vertical assets. **Worth adding if the target audience includes heavily-regulated verticals (finance, healthcare, EU enterprises).**

### Ext 3 · **The FAFO Experimenter** (L1–L2)

Deliberate iterative trials without formal rules; scales lessons into hardened processes; tolerates localized failures as data. More disciplined than Accidental Adopter (they're choosing this path), more reckless than Pragmatist (no ROI gate), less mandated than Over-Reliant. **Worth adding if early-stage or scrappy orgs are a significant audience.**

### Ext 4 · **The Deferrer** (L1)

Waits for standards, vendor consolidation, or regulatory clarity before moving. Not Shadow (they're not adopting secretly). Not Pragmatist (they're not adopting at all). Increasingly common as risk-averse leaders navigate governance confusion. **Worth adding as the L1 "holding pattern" distinct from Accidental.**

### Ext 5 · **The Invisible Experts** (L2–3)

Individual domain experts doing sophisticated AI work below organizational visibility. F2F pattern from Rao's *Have Your Factory Call My Factory*. Valuable if codified; risky if truly invisible (Samsung pathway). **Worth adding when the diagnostic needs to catch the "advanced practitioners in an immature org" pattern.**

### Ext 6 · **The Accidental Adopter** (L1)

No strategy. AI arrives through employee initiative, often with personal accounts. Canonical shadow-AI failure mode (Samsung). **Worth adding when the diagnostic needs to distinguish "nothing happening deliberately" from "everything happening invisibly."**

## Recommended quiz format with 3 anchors

### Model B′ — Strategy pick + behavioral validator (recommended)

Two screens:

**Screen 1 — Strategy.** One question, 3 archetype descriptor options (the three anchors). User picks the one that best describes their org's current AI adoption strategy.

**Screen 2 — Behavioral validator.** One question, 4–5 options capturing concrete recent behavior. Used to:
- Validate the Screen 1 pick (e.g., if you picked "Pragmatist" but your most recent AI-related quality issue was caught by a customer, you're closer to Over-Reliant).
- Upgrade / downgrade the placement within the archetype.

This preserves the simplicity the user wants (clean archetype pick) while catching the biggest risk (aspirational self-selection) with one concrete check. It also lets the extensions enter the diagnostic gradually: if we want to add "Compliant-First" later, we add one descriptor option and the Screen 2 validator handles the distinction.

### Falsifiability — why 3 anchors hold up

| Pair | What distinguishes them |
|---|---|
| Pragmatist vs. Over-Reliant | Whether quality issues surface internally (before customer) or externally (through customer complaints) |
| Pragmatist vs. Platform Builder | Whether AI governance lives in workflow-level protocols (Pragmatist) or in shared infrastructure (Platform Builder) |
| Over-Reliant vs. Platform Builder | Whether validation is treated as an afterthought (Over-Reliant) or as an engineered constraint (Platform Builder) |

These three pairwise distinctions are operationally testable via the Screen 2 behavioral question. That's the key property that makes 3 anchors a viable primary framework.

## Maturity mapping

Because the discourse doesn't cleanly separate L1 patterns into a single dominant archetype (it's mostly shadow, holding, or accidental — which are different patterns, not one), the 3-anchor scheme primarily serves respondents in the **L2–L4 band**. L1-leaning respondents would be routed to a simplified L1 result via the Screen 2 behavioral validator ("We haven't meaningfully deployed AI yet" option).

When we add extensions later:
- Ext 4 (Deferrer) + Ext 6 (Accidental) split the L1 picture cleanly.
- Ext 1 (AI-Native Builder) splits L3 into "legacy-crossed-over" vs. "native-from-start."
- Ext 2 (Compliant-First) + Ext 3 (FAFO) enrich L2.

## Contested framings (flagged in the research pass)

1. **Pragmatist vs. high-maturity experimenter.** The discourse is still settling on whether "measured adoption" and "rapid experimentation with codification" are distinct archetypes or two names for the same path. We're treating them as the same for now (the Pragmatist anchor).

2. **Over-Reliant as reversible.** Klarna reversed and is rebuilding; Shopify hasn't reversed yet. Whether Over-Reliance is a temporary state or a stable anti-pattern isn't settled. We're treating it as a stable anti-pattern that *can* transition back toward Pragmatism via retrofit. The diagnostic should flag the pattern without predicting the outcome.

3. **Platform Builder maturity level.** Uber shows L3/L4 behavior; smaller-scale platform efforts can show up at L2. The archetype covers the shape; the maturity level it resolves to depends on Screen 2 behavioral signals.

4. **AI-Native vs. Legacy.** The structural advantage AI-natives have is accelerating 2026 differentiation. By 2027 this may deserve its own anchor. For now, it's Ext 1.

## What's next

1. **Approval on the 3 anchors.** Pragmatist / Over-Reliant / Platform Builder — right set, or swap one?
2. **Approval on the extension list.** 6 is probably too many to hold active; realistically 2–3 get used in the next assessment version. Which 2–3 should come off the bench first?
3. **Quiz format decision.** Model B′ (Screen 1 anchor pick + Screen 2 behavioral validator) or something else?
4. **Archetype names.** "The Over-Reliant" reads as judgmental. Alternatives: "The Eager Deployer", "The Ambitious Integrator". "The FAFO Experimenter" preserves user's reference but may be too colloquial; alternative: "The Open Experimenter" or just "The Experimenter". Worth picking names now so v0.4 descriptor drafts don't have to be re-voiced.
5. **Once the above are settled:** draft v0.4 descriptors (reader-facing copy for the 3 anchors + 2 behavioral-validator questions).
