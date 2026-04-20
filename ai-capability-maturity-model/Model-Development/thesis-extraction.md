# Thesis Extraction — AI Capability Maturity Model

**Purpose:** Distill the model's core claims. What must be true for this model to be correct?

---

## The central thesis (one sentence)

Organizations fail at AI adoption not because they chose the wrong tools but because they lack protocols governing how humans and AI systems interact — and capability maturity is a measure of how well an organization governs that uncertainty.

---

## The logic chain

The model rests on five sequentially dependent claims. If any is false, the model breaks at that point.

**Claim 1: Shadow adoption is universal and pre-governs everything.**
Employees adopt AI tools before organizations have policies for them. This is not an exception — it is the baseline condition. Every organization is at Level 1 whether it planned to be or not. The question is not whether shadow adoption has happened but whether it has been acknowledged.

*Evidence:* Reco.ai (2025): 71% of enterprise employees using unauthorized AI tools; 400+ day average discovery lag. Gartner (2025): 69% of organizations have confirmed or suspected prohibited AI use. Menlo Ventures (2025): build-vs-buy ratio reversed from 47/53 to 24/76 in one year — organizations are buying their way into Level 2 at scale.

**Claim 2: Governance is the bottleneck, not capability.**
AI tools have outrun organizational ability to govern their use. The gap is not technical — it is coordinative. Organizations that struggle are not failing because models are inadequate; they are failing because the rules governing when, how, and by whom AI outputs are accepted are absent or inconsistent.

*Evidence:* IBM CEO Survey (2024): 61% of CEOs pushing adoption faster than employees are comfortable with; only 39% reporting adequate governance. Klarna: 90% daily adoption, $40M claimed savings, followed by reversal citing quality failure — the tools worked, the governance didn't. Air Canada: chatbot hallucinated policy; the tool worked as designed; the governance protocol was absent.

**Claim 3: Protocol failures produce characteristic failure modes at each stage.**
The failure modes are not random. Shadow adoption produces data leakage and IP exposure (Level 1). Naive saturation produces quality floor collapse (Level 2). Reflexive use without workflow redesign produces temporal divergence and coordination breakdown (Level 3). Each level has a predictable failure signature.

*Evidence:* Samsung (IP leakage, Level 1 failure). Duolingo (quality floor collapse, Level 2 failure). Legal profession hallucinations (quality failure under expert-level deployment). Mechanical Currents: "friction and failures from AI adoption are signs of protocol integrity under load, not poor product quality."

**Claim 4: Maturity progresses through increasing precision of the governing protocol, not increasing capability of the AI tools.**
Moving from Level 1 to Level 2 is not about getting better AI. It is about making the coordination protocol explicit — who can use which tools, for what purposes, with what review process. Each subsequent level requires more precise protocol design, until at Level 5 the protocol is invisible infrastructure.

*Evidence:* Theorizing Protocolization I: progress through invisibility — protocols succeed by becoming infrastructure. Constructing the Evil Twin: protocols create "striated" behavior spaces from "smooth" optionality. Finding Fault Lines: "software-encoded protocols enforce compliance uniformly and instantly, while management practice traditionally allowed contextual flexibility."

**Claim 5: The unit of analysis scales from individual to civilization across levels.**
Levels 1–3 concern organizations. Level 4 concerns industries and markets. Level 5 concerns civilization-level infrastructure. The same protocol-maturity logic applies at each scale, but the actors, failure modes, and governance mechanisms are different. No existing AI CMM reaches beyond the organizational boundary.

*Evidence:* Have Your Factory Call My Factory: factory-to-factory coordination (industry-level protocol); Venkatesh Rao and Jenna Dixon as two autonomous agents operating at small scale. Theorizing Protocolization I: planetary protocolization as the endpoint — "AI adoption is the latest iteration of a centuries-long process." No direct empirical case exists at Level 5 yet; this is a forward-looking claim.

---

## Structural assumptions the model depends on

**Assumption A: Levels are broadly sequential.**
Most organizations move through Level 1 before Level 2, Level 2 before Level 3. This is a tendency, not a law — organizations can skip levels or occupy different levels in different departments simultaneously. The model should be clear about this.

**Assumption B: Level placement is diagnosable from observable behavior.**
An outside observer (or an honest insider) should be able to place an organization on the model without requiring inside access to financial data or internal surveys. The observable indicators must be specific enough for this.

**Assumption C: Staying at a level is the failure condition, not entering it.**
Being at Level 1 is not a failure. Every organization passes through Level 1. Staying at Level 1 while AI exposure grows is the failure condition. The model diagnoses stuckness, not position.

**Assumption D: Progression requires deliberate protocol design, not just time or technology.**
Organizations do not automatically mature. The transition from Level N to Level N+1 requires a specific, intentional change to the governing protocol. Time and tool upgrades do not substitute for this.

---

## Where the logic is weakest

**The Level 3 → 4 transition is underspecified.**
What distinguishes a mature Level 3 organization (AI embedded in business model) from an early Level 4 (industry depends on AI as infrastructure)? The v4 model conflates these. The new framing (Level 4 = industry reliance) makes the distinction cleaner but the transition mechanism is not yet articulated. What causes an industry to cross the threshold from "most organizations use AI" to "the industry cannot function without it"?

**Level 5 has no confirmed case anchors.**
The planetary embedding claim is theoretically grounded (Protocolization I, Constructing the Evil Twin) but empirically thin. Power grid optimization, financial market microstructure, and environmental monitoring systems are candidate examples but none have been studied in sufficient detail to serve as anchors. The model should be explicit that Level 5 is a forward projection, not a diagnosed state.

**The unit-of-analysis shift is implicit, not argued.**
The shift from organizational (Level 3) to industry (Level 4) to planetary (Level 5) is the model's most distinctive structural feature, but in v4 this shift is never explicitly made. The new version must argue for it — why does a maturity model need to extend beyond the organizational boundary? What does the protocol framing add that justifies this extension?

**"Governing uncertainty" needs to be defined.**
The central claim — that the unit of maturity is "governance of uncertainty" — risks being circular if not precisely defined. What does "governing" mean in this context? What kinds of uncertainty? How is governing uncertainty different from managing risk? The distinction is important: risk management tries to reduce uncertainty; governance of uncertainty designs protocols that produce acceptable outcomes despite irreducible uncertainty.

---

## The model's distinctive contribution vs. existing CMMs

| What existing models measure | What this model adds |
|------------------------------|---------------------|
| Adoption rate (tooling coverage) | Protocol coherence between humans and AI |
| Security controls | Governance of outputs, not just inputs |
| Responsible AI dimensions (bias, fairness) | Governance of the coordination layer |
| Organizational readiness | Market and industry readiness (Levels 4–5) |
| Binary: governed / not governed | Staged: how precisely is the protocol specified? |

The most important differentiator: existing models treat AI as a technology to be governed. This model treats AI as a coordination mechanism that requires a governing protocol. These produce different diagnostics and different recommendations.

---

*Last updated: 2026-03-15*
