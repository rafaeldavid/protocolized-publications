---
title: Assessment v2 framework · 7 orthogonal dimensions
version: v1.3 (2026-04-24)
status: draft · in use by archetype inventory (Archetypes-v0.1.md)
source_passes:
  - v1.0 — Explore agent pass over litepaper v7, bibliography, 13 research observations, blog post
  - v1.1 — 7 additional Protocolized / Summer Lightning articles added
  - v1.2 — added D7 Value integration after Rafa flagged the missing "product/business that couldn't exist without AI" dimension
  - v1.3 — expanded the "AI" concept beyond tool use; introduced the archetype layer as the assessment's resolution target
---

# Assessment v2 framework — 7 orthogonal dimensions

## What "AI" means in this framework (v1.3 amendment)

Earlier drafts implicitly used "AI" to mean "AI tools employees use" — retail ChatGPT, enterprise Copilot, Cursor. That framing is too narrow for an organizational diagnostic. For v1.3 onward, "AI" refers to the full range of capability integrations an enterprise can have, across five flavors:

| # | Flavor | Examples |
|---|---|---|
| 1 | **Consumer AI** | Retail ChatGPT / Claude / Gemini used by individuals, often with personal accounts |
| 2 | **Enterprise AI** | Sanctioned workforce tools — GitHub Copilot, Cursor, enterprise ChatGPT, Microsoft 365 Copilot |
| 3 | **Product-integrated AI** | Inference running inside the org's own products: chat in the UI, recommendations, summarization features, AI-generated content paths |
| 4 | **Infrastructure AI** | Automated decisioning in backend systems: fraud detection, dynamic pricing, forecasting, ML in data pipelines, operational observability |
| 5 | **Custom / developed AI** | Models the org builds, fine-tunes, or trains in-house; proprietary inference endpoints |

**Why this matters for the diagnostic.** An org with zero employee tool adoption but deep product-integrated AI is still an AI-using enterprise, and the dimensions apply to it. An enterprise with Copilot universally rolled out but no product integration is in a genuinely different shape than one with the inverse. Previous drafts of the quiz leaned heavily on flavors 1 and 2; v0.4+ statements and archetypes reflect all five.

**Dimension notes under the broader scope.**

- **D1 Protocol specificity** — rules at handoffs cover all five flavors. Inference endpoints have handoffs too: who owns drift, who reviews model updates, who gates deployment.
- **D2 Ontological stability** — schemas feed into all five. A fine-tuned model is as brittle to data-definition drift as a Copilot prompt.
- **D3 Temporal alignment** — applies to inference speed, not just employee review speed. Production inference can run 1000x faster than the governance reviewing it.
- **D4 Organizational visibility** — most enterprises know their employee tool adoption better than they know their production inference endpoints. Visibility asymmetry across flavors is itself a diagnostic.
- **D5 Domain expertise leverage** — applies to validation of all five, including custom models (who validates a fine-tuned model? domain experts, or ML engineers with no context?).
- **D6 Coordination scope** — scope operates across all flavors. Inter-org AI protocols increasingly matter for product-integrated and custom flavors (agent handoff contracts, API standards, model cards).
- **D7 Value integration** — this dimension is specifically about the expanded concept. A product that requires flavor 3 or 4 to exist is the "core" end of the axis.

## The seven dimensions

The 5 levels (Shadow → Sanctioned → Designed → Infrastructural → Planetary) stay as the **output** of the assessment. This framework provides the **measurement axes** — the orthogonal dimensions on which organizations vary within and across levels.

Each dimension is grounded in specific passages of the litepaper, bibliography, and related Protocolized essays. Quiz statements (later) will be plain-language operationalizations of these dimensions. Not implemented yet; reviewing the framework before writing the language.

## The seven dimensions

### 1. Protocol specificity · smooth → striated

**Definition.** The degree to which the organization has codified coordination rules at AI handoff points.

**Why orthogonal.** Independent of maturity level. An L1 org can have crisp escalation rules for a single accidentally-AI function; an L4 org can have vague L3-style workflows. Measures governance design clarity, not adoption scope.

**Sources.**
- Rao, *Constructing the Evil Twin of AI* — smooth-to-striated framing as protocol design mechanism
- Rao, *Introduction to the Protocol Reader* — protocol as codified behavior at adjacent loci
- Rao & Nast, *Theorizing Protocolization II: Atomic* — explicit protocol evaluation criteria (learnability, evolvability, tensions, coordination costs, stewardability, ludicity); human-protocol alignment in the bus-bunching example
- Litepaper §2 — protocol framing as distinct from policy / process

**Observable signals.**
- Can the org articulate in advance which AI outputs require human verification before consequential use?
- Are handoff points between AI and human judgment documented with specific escalation triggers?
- Does the protocol exist as a designed object (even provisional) or only as discovered practice?
- Do the people executing the protocol understand why it works, or just follow it mechanically? (legibility to practitioners)

---

### 2. Ontological stability · drift → fixed

**Definition.** The degree to which core definitional and schema boundaries stay stable enough that AI-generated artifacts can depend on them without mid-cycle renegotiation.

**Why orthogonal.** Organizations at any level can front-load clarity or drift. The "Waterfall inversion" (Benny) is a cost-of-coordination signal, not a level indicator. L2 orgs can have freezing definitions; L4 orgs can inherit schema fragility from earlier layers.

**Sources.**
- Benny, *Why Does AI Development Look Like 1980s Software Planning?* — ontological drift is expensive; cost-structure flip in the LLM era
- Benny, *Immutable Skills* — "layers of fixity"; Roman-concrete risk of foundational knowledge atrophying when no one practices the lower layer
- Rao & Nast, *The Fabric and the Brain* — personality coherence / Haunting Experience (HX) as a kind of behavioral stability AI systems must exhibit to be coordinated with
- Litepaper §2.2 — schema stability as prerequisite for agent-output reliability
- Litepaper L3 — definitions must freeze before production at L3/4 boundary

**Observable signals.**
- How often do key term meanings shift mid-project?
- Is there change-control for definitions / schemas that feed AI systems?
- How much rework happens when upstream definitions change?
- Does the org deliberately preserve lower-layer competencies (e.g., classical coding, core craft) so higher-layer AI work has a stable substrate?

---

### 3. Temporal alignment · divergent → synchronized

**Definition.** The degree to which AI-accelerated workflows operate at the same pace as dependent review, audit, and external-coordination functions.

**Why orthogonal.** Independent of how well individual workflows are designed. An L3 team can suffer severe temporal divergence if review infrastructure hasn't scaled. A less-mature function can accidentally be temporally aligned because its human review pace happens to match output generation.

**Sources.**
- Scholl, *Vertical Integration (Slacker Index)* — iteration cycle speed as the binding constraint
- Scholl, *XB-1 and Jevons's Law* — cheaper iteration opens new design spaces
- Benny, *The Two Memories* — sync vs. async stakeholder mismatch; some humans need constant attunement, others prefer batch, and that preference runs through the org
- Stinson-Schroff, *Mechanical Currents* — Time to Mediocrity as rate concept; Task Estimation Crisis when AI trivializes some tasks and leaves others unchanged
- Litepaper L3 failure mode — temporal divergence between AI acceleration and review infrastructure
- Uber case — AI PR volume outpaced code review; review became first-class bottleneck

**Observable signals.**
- Ratio of AI output generation speed to human review / validation speed in the bottleneck function
- Are downstream functions (customers, regulators, cross-team reviewers) experiencing arrival rates faster than they can process?
- Do teams feel caught up, or perpetually backlogged on review work?
- Can the org still do capacity planning given that AI transforms some tasks and not others? (Task Estimation Crisis)

---

### 4. Organizational visibility · invisible → legible

**Definition.** The degree to which the organization can detect, observe, and audit AI use and the domains it has entered.

**Why orthogonal.** L1 shadow use and L3 F2F bricolage look identical from the enterprise's vantage point — both invisible. L4 infrastructure can hide governance gaps if monitoring lags implementation. Visibility is a design property, not a level property.

**Invisibility paradox (important for scoring).** At L1/L2, visibility is the goal — the org can't govern what it can't see. At L4/L5, *successful* invisibility is the goal — protocols work best when they fade into the background (Rao's "progress through invisibility", Whitehead advance). Quiz statements under this dimension must acknowledge both directions: lower-level orgs are asked whether they can *see* AI use; higher-level orgs are asked whether their protocols have *faded into reliable background*. The scoring treats both as movement away from the L1/L2 illegible-shadow state.

**Sources.**
- *The Missing Protocol Layer* (blog post) — "the organization lacks not just policies but perception"
- Rao, *Protocol Reader* — protocol invisibility as a persistence property ("relative invisibility is a second major tell")
- Rao & Nast, *Theorizing Protocolization I: New Nature* — progress through invisibility, Whitehead advance, civilization advances by operations performed without thinking
- Rafa, *Finding Fault Lines* — protocols become visible when they fail; surface through strain
- Litepaper L2 blind spot — "cannot see whether what AI produces is reliable"

**Observable signals.**
- Can the organization list which functions AI has entered, by role / team?
- Are there systematic mechanisms to detect shadow AI (personal account use, unapproved tools)?
- Can the org distinguish high-value F2F protocol innovation from governance-violating shadow work?
- For mature protocols, do they operate reliably without consuming management attention? (The "successful invisibility" signal at higher levels.)

---

### 5. Domain expertise leverage · generic → specialized

**Definition.** The degree to which the organization uses deep domain knowledge as a governing mechanism versus relying on generic tool governance and policies.

**Why orthogonal.** An L1 org can use AI at high expertise levels (domain experts bricolaging). An L4 org can build generic, non-specialized governance. Measures *who validates outputs*, not maturity scope.

**Sources.**
- Litepaper L3 — domain expertise as binding constraint; "higher-level perception"
- Litepaper L3 F2F factory pattern — each factory brings domain expertise at its end of the handoff
- Rao, *Have Your Factory Call My Factory* — neither party writes code; both bring domain knowledge
- Armstrong, *The Hottest Job in Tech* — FDE as embedded domain expert doing L2→L3 transition work
- Stinson-Schroff, *Mechanical Currents* — Time to Mediocrity: AI raises the floor for cross-functional collaboration but doesn't replace deep expertise at the bottleneck

**Observable signals.**
- In the bottleneck function, who validates AI output? (Domain expert, checklist-trained operator, external tool)
- Are governance decisions made by people with deep contextual knowledge, or by centralized compliance?
- What does expertise look like in the org's quality bar?
- Is AI being used to lower the floor (more people can do passable work across domains) vs. raise the ceiling (domain experts go further)?

---

### 6. Coordination scope · individual → sectoral

**Definition.** The reach of protocols governing AI handoffs — bilateral/individual, intra-organizational, inter-organizational, or sectoral standard.

**Why orthogonal.** Organizations at any level can design for only individual workflows (narrow scope) or for sector-spanning coordination (wide scope). L1 bricoleurs can have tight bilateral F2F protocols; L4 infrastructure can support only internal handoffs. Measures *governance's reach*, not maturity level.

**Sources.**
- *The Missing Protocol Layer* (blog post) — F2F pattern as bilateral, high-trust coordination between factories; individual-level
- Litepaper L4 — sector-scope protocols; agent handoff contracts; EDI historical parallel
- Litepaper L3/4 boundary — from individual bricolage to sector standards
- Rao, *Have Your Factory Call My Factory* — informal bilateral protocols as precursor to formalized handoff contracts
- Rao & Nast, *A Primordial Computing Soup* — Brain vs. Fabric distinction (agents vs. the coordination mechanisms that weave them); "squishy interfaces" that bridge non-interoperable ecosystems
- David Lang / Bristlemouth (cited in Protocol Institute intro) — disruptive standards-making as contemporary sectoral-scope example

**Observable signals.**
- Are AI protocols designed for this org alone, or for multi-party coordination?
- Does the org participate in defining standards (industry consortia, RFI responses, regulatory comment periods)?
- Can the org's AI infrastructure be ported to work with external partners' systems?
- Are AI capabilities wrapped as reusable internal kits that could scale to partners, or bespoke one-offs? (Kitification)

---

### 7. Value integration · adjacent → core

**Definition.** The degree to which AI is integrated into the organization's value delivery — from AI as a productivity tool applied to existing work (adjacent) to AI as the substrate that makes the product or service possible (core).

**Why orthogonal.** Separate from governance quality (D1) and expertise (D5). A startup whose product is AI-native can still have messy governance (low D1). A mature enterprise with excellent AI governance can still be using AI purely as a productivity layer on existing offerings (low D7). It's about *where AI sits in the value chain*, not how well it's managed.

**Important caveat.** High D7 is NOT automatically higher maturity. Being deeply AI-embedded without governance (high D7, low D1) is the Klarna failure mode — over-reliance without the coordination layer. D7 supplies context to bottleneck-scoring; it doesn't stand alone as a progression axis.

**Sources.**
- Litepaper L3 — the level definition itself: "removing AI from that workflow would require rebuilding it"
- Boom Supersonic / mkBoom case — AI-native structural analysis core to the product; business model depends on it
- Litepaper L4 — AI capability as baseline sector expectation
- Armstrong, *The Hottest Job in Tech* — "AI will end up being a bigger and more important platform shift than the cloud was"
- Scholl, *XB-1 and Jevons's Law* — cheap iteration opens new design spaces; the output changes because AI enables new things
- Rao, *Constructing the Evil Twin of AI* — AI as optionality-to-structure converter; new behavior spaces emerge and then get protocol-wrapped

**Observable signals.**
- If AI tools disappeared tomorrow, would the product still exist in more or less the same shape?
- Do customers see AI in what you deliver, or is AI making existing delivery faster but invisible from the outside?
- Did the most recent major product or offering require AI to exist, or would it have existed anyway?
- Is AI in the customer-facing pitch, or is it internal infrastructure only?

---

## Concepts per dimension

Each dimension is built from a specific cluster of concepts in the source material. These are the conceptual anchors the quiz statements will operationalize.

### D1 · Protocol specificity

| Concept | Source | How it ties |
|---|---|---|
| **Smooth-to-striated** | Rao, *Constructing the Evil Twin of AI* | Core mechanism: protocols convert open behavior spaces into structured ones. Striation IS protocol specificity made operational. |
| **Protocol as codified behavior at adjacent loci** | Rao, *Introduction to the Protocol Reader* (Danny Ryan, cited) | Canonical definition; grounds the dimension in the foundational vocabulary. |
| **Protocol trade pattern** | Rao, *Table: Learning to See Business Protocols* | Each protocol trades one class of problem for another. Specificity of the trade is the measure. |
| **Protocol vs. policy distinction** | Litepaper §2 | Specificity lives at the handoff, not in policy documents. Separates this dimension from generic compliance. |
| **Agent handoff contracts** | Litepaper L4 | L4-specific instance of high-specificity protocols between autonomous agents. |
| **Protocol evaluation criteria** (learnability, evolvability, tensions, coordination costs, stewardability, ludicity) | Rao & Nast, *Theorizing Protocolization II: Atomic* | Adds sub-dimensions of specificity — not just "is there a protocol" but "is it learnable, evolvable, stewardable". Useful for distinguishing L3 from L4 protocols. |
| **Human-protocol alignment** (bus bunching example) | Rao & Nast, *Theorizing Protocolization II: Atomic* | Specificity also means legibility to practitioners inside the protocol, not just to its designers. |

### D2 · Ontological stability

| Concept | Source | How it ties |
|---|---|---|
| **Ontological drift** | Benny, *Why Does AI Development Look Like 1980s Software Planning?* | Named failure mode this dimension measures against. Direct 1:1 mapping. |
| **Cost-structure flip** | Benny (same essay) | LLMs make documents cheap but drift expensive — shifts the economics that make stability matter. |
| **Waterfall inversion** | Benny (same) + Litepaper §2.2 | Practical response to drift: front-load definitional clarity. Stability is the design move. |
| **Layers of fixity / Roman-concrete risk** | Benny, *Immutable Skills* | Stability isn't just about current definitions; it's about deliberately preserving lower-layer competencies so higher-layer work has substrate. |
| **Personality coherence / Haunting Experience (HX)** | Rao & Nast, *The Fabric and the Brain* | A different flavor of stability: AI systems need stable, narratable behavior to be coordinated with. Extends the dimension from org-schemas to AI-behavior. |
| **Definition freezing at L3/4 boundary** | Litepaper L3 | Specific point where the dimension becomes load-bearing; organizations can't cross L3/4 without it. |

### D3 · Temporal alignment

| Concept | Source | How it ties |
|---|---|---|
| **Slacker Index** | Scholl, *Vertical Integration* | Lead time ÷ working time — direct measure of temporal divergence. |
| **Jevons's Law of engineering** | Scholl, *XB-1 and Jevons's Law* | When iteration is cheap, the quantity of designs evaluated changes what's possible. AI makes iteration cheap; alignment becomes the constraint. |
| **AI-speed vs. review-speed mismatch** | Litepaper L3 failure mode | The canonical L3 failure: AI accelerates production without review infrastructure scaling. |
| **Code review as first-class bottleneck** | Uber case | Empirical demonstration — AI PR volume outgrew review capacity; temporal mismatch became the limiting factor. |
| **Intensification without absorption** | Ranganathan/Ye HBR (cited via blog post) | Individual workflow acceleration outrunning organizational standardization — temporal divergence at the work/org layer. |
| **Sync vs. async stakeholders** | Benny, *The Two Memories* | Temporal mismatch isn't just org-level; different stakeholders inside the same org want different AI rhythms. Alignment includes *across stakeholder types*. |
| **Time to Mediocrity (TTM) · Task Estimation Crisis** | Stinson-Schroff, *Mechanical Currents* | TTM is a rate (how fast literacy spreads); TEC is the downstream failure — capacity planning breaks when AI transforms tasks unevenly. |

### D4 · Organizational visibility

| Concept | Source | How it ties |
|---|---|---|
| **"Not just policies but perception"** | *The Missing Protocol Layer* (blog post) | Most direct statement of the dimension. Perception precedes governance. |
| **Protocol invisibility as persistence property** | Rao, *Protocol Reader* | Successful protocols disappear — an inherent tension this dimension surfaces. |
| **Progress through invisibility / Whitehead advance** | Rao & Nast, *Theorizing Protocolization I: New Nature* | Crystallizes the paradox: at low levels visibility is the goal; at high levels invisibility is the goal. Both are movement away from the L1 illegible-shadow state. |
| **Fault lines as stress-revealed protocols** | Rafa, *Finding Fault Lines* | Protocols become visible when they fail. Visibility dimension measures whether orgs find them before the failure. |
| **Non-events / dynamic non-events** | Weick (cited via Stinson-Schroff, *Mechanical Currents*) | Non-events become invisible — same mechanism that makes mature infrastructure hard to govern. |
| **Shadow AI detection** | Litepaper L1 + Samsung case | Canonical low-visibility failure. Visibility is what Samsung lacked. |

### D5 · Domain expertise leverage

| Concept | Source | How it ties |
|---|---|---|
| **Domain expertise as higher-level perception** | Litepaper L3 | Explicit framing: expertise IS the validation mechanism in designed workflows. |
| **F2F factory-to-factory pattern** | Rao, *Have Your Factory Call My Factory* | Both factories bring domain knowledge; the shared Dropbox + metadata server works because of it. |
| **Bricoleur framing** | *The Missing Protocol Layer* (blog post) | Domain experts as protocol entrepreneurs inside enterprises. The unit of work is the expert-plus-AI dyad. |
| **FDE pattern** | Armstrong, *The Hottest Job in Tech* + Scianna, *How to Build Your FDE Team* | Forward-deployed engineer as embedded domain expert; drives L2→L3 transition through specialized knowledge, not generic tooling. |
| **Gravel road / Auftragstaktik** | Scianna (same) | HQ sets objective, field executes with domain autonomy — delegation to domain expertise as governance. |
| **Time to Mediocrity (TTM)** | Stinson-Schroff, *Mechanical Currents* | Counterweight: AI raises the floor for cross-functional work. Sharpens the dimension by asking whether AI is raising the floor (generic help) or raising the ceiling (experts going further). |

### D6 · Coordination scope

| Concept | Source | How it ties |
|---|---|---|
| **F2F bilateral coordination** | Rao, *Have Your Factory Call My Factory* | Narrow-scope case: two parties, tight bilateral protocol. Anchor for the "individual" end of the dimension. |
| **Agent handoff contracts** | Litepaper L4 | Scope widens from bilateral to multi-party; protocols become first-class contracts. |
| **EDI historical parallel** | Litepaper L4 | Sector-scope precedent for what L4/L5 coordination looks like when it matures. |
| **Disruptive standards-making** | David Lang's Bristlemouth project (cited via Protocol Institute intro) | Contemporary example of sectoral protocol design; shows the shift from individual to sectoral scope. |
| **Brain vs. Fabric** | Rao & Nast, *A Primordial Computing Soup* | Splits scope into two sub-axes: AI agents (brain) versus coordination mechanisms that weave them together (fabric). Coordination scope is fundamentally a fabric property. |
| **Squishy interfaces** | Rao & Nast, *A Primordial Computing Soup* | Ad-hoc cross-ecosystem bridges. Intermediate scope between bilateral and full sectoral — relevant to the L3/L4 transition zone. |
| **Kitification** | Rafa (new concept, 2026-04-24) | Intermediate scope: kits coordinate across bespoke instances without requiring full standardization. |

### D7 · Value integration

| Concept | Source | How it ties |
|---|---|---|
| **"Removing AI would require rebuilding it"** | Litepaper L3 definition | Direct framing. The L3 level definition is essentially a D7 statement in prose form. |
| **Boom Supersonic / mkBoom** | Uber + Boom case studies, Litepaper L3 | Canonical high-D7 case: AI-native structural analysis core to the aircraft program. |
| **AI as platform shift** | Armstrong, *The Hottest Job in Tech* | Frames the business-model stakes. Compares AI's scope to the cloud platform shift. |
| **Jevons's Law of engineering** | Scholl, *XB-1 and Jevons's Law* | Cheap iteration opens new design spaces. Output changes because AI enables new things, not just faster things. |
| **Smooth-to-striated applied to value chain** | Rao, *Evil Twin of AI* | Used at D1 as a governance mechanism; reused here as a value-creation mechanism — AI opens behavior spaces, protocols then wrap them, and the product itself shifts. |
| **Klarna reversal (caveat case)** | Observation file (Klarna) + Litepaper L2 | Cautionary: high D7 without matching D1 produces brittle over-reliance. Distinguishes "AI-embedded and governed" from "AI-embedded and winging it". |

### Cross-cutting concepts (not dimensions — scoring logic or framing)

Some concepts operate across all dimensions rather than mapping to one:

| Concept | Source | Role |
|---|---|---|
| **Bottleneck thinking** | Rafa, *Finding Fault Lines*; Microsoft RAI MM (interdependence warning) | Scoring rule: the organization's effective level is the weakest high-stakes dimension. This is *how dimensions combine*, not a dimension itself. |
| **Non-events as output** | Weick via Stinson-Schroff | What well-functioning protocols *produce*. The diagnostic looks for their absence. |
| **Invisibility paradox** | Rao & Nast, *Theorizing Protocolization I* | Direction of "good" reverses with level. Affects how D4 (and potentially D1) statements are written. |
| **Carnival vs. archival** | Rao | Cultural framing that can apply to any dimension. Probably a voice/tone consideration for quiz copy rather than a structural axis. |
| **Protocol entrepreneurship** | Bristlemouth / blog post framing | Agency framing: who designs the protocol. Relevant to all dimensions but not separable as one. |

## Dimensions considered and excluded

| Dimension | Reason excluded |
|---|---|
| Tool maturity | Conflates with adoption rate; orthogonal framework should separate tool choice from governance design. |
| Adoption rate (% of workforce) | Already implicit in the 5-level model (L1: undetected, L5: ubiquitous). Redundant. |
| Responsible AI coverage (privacy, fairness, interpretability) | Covered orthogonally by Microsoft RAI MM; not distinctive to this model's protocol-centric framing. |
| Regulatory compliance readiness | A consequence of protocol design, not an independent dimension. Covered by Protocol Specificity. |
| Technical interoperability | Relevant to L4/5; too narrow for org-diagnostic. Subsumed by Coordination Scope. |
| Leadership sponsorship / CEO buy-in | Enables transitions but isn't an operational axis of variation. |
| Investment level / budget | Secondary effect; outcome of maturity choice, not independent dimension. |
| Decision-making speed | Close to Temporal Alignment but less precise operationally; absorbed. |
| **Practitioner legibility** (candidate from *Theorizing Protocolization II*) | Considered as its own dimension. Folded into D1 (protocol specificity includes legibility to the humans inside) and D4 (practitioner visibility is a form of organizational visibility). Worth surfacing in quiz statements under both dimensions. |
| **Planning / estimation capacity** (candidate from *Mechanical Currents* — Task Estimation Crisis) | Considered as its own dimension. Folded into D3 (it's a downstream symptom of temporal misalignment) and D4 (inability to plan = inability to see what AI has changed). Real phenomenon, derivative axis. |

## Open tensions in the source material

**1. Waterfall-as-regression vs. Waterfall-as-optimal** (Benny / Litepaper).
Benny observes AI drives orgs back to Waterfall-like front-loaded specification. The litepaper agrees this is correct given the cost structure, not a regression. Tension: is freezing definitions progressive maturity or a design compromise? Resolution in current work: both true; it's optimal given a constraint specific to LLM-era coordination, not timeless best practice.

**2. Visibility as desirable vs. visibility as risk** (Rao & Nast / Stinson-Schroff — partially resolved in v1.1).
Litepaper emphasizes visibility for L1→L2 transition. *Theorizing Protocolization I* + Stinson-Schroff's *Mechanical Currents* jointly argue that infrastructure success comes with invisibility. Now explicitly resolved in D4 via the **Invisibility paradox** note: at L1/L2 visibility is the goal; at L4/L5 successful invisibility is the goal. Both are movement away from L1's illegible-shadow state.

**3. F2F as emergent bricolage vs. F2F as designed coordination** (Rao / Ranganathan-Ye).
Rao celebrates F2F as organic high-trust bilateral coordination. HBR (Ranganathan/Ye) frames the same phenomenon as intensification without organizational absorption — a pathology. Tension: is factory-to-factory coordination a model or a symptom? Probably both: high-value bilaterally but pathological when it proliferates invisibly without standardization.

## Additional sources added in v1.1

From this pass:

- Benny, *The Two Memories* — sync/async stakeholders → D3
- Benny, *Immutable Skills* — layers of fixity, Roman-concrete risk → D2
- Stinson-Schroff, *Mechanical Currents* — TTM, Task Estimation Crisis, lumpy integration → D3, D5
- Rao & Nast, *A Primordial Computing Soup* — Brain vs. Fabric, squishy interfaces → D6
- Rao & Nast, *The Fabric and the Brain* — HX / personality coherence → D2
- Rao & Nast, *Theorizing Protocolization I: New Nature* — invisibility paradox → D4
- Rao & Nast, *Theorizing Protocolization II: Atomic* — protocol evaluation criteria, human-protocol alignment → D1

Two candidates considered and deferred (noted in the excluded-dimensions table): practitioner legibility, planning / estimation capacity.

## What's next

1. **This doc reviewed and approved (or redlined)** by Rafa.
2. **Dimension renaming (optional) for plain-language UX** — e.g., "Protocol specificity" might surface in the quiz as "Rule clarity", "Ontological stability" as "Definition discipline", etc. Framework names stay as internal vocabulary.
3. **Statement drafting (v0.3)** — for each dimension, 2–3 binary-choice questions. 15 questions total across 6 dimensions means some dimensions get 3 questions, some get 2. We'll decide weighting when drafting. D4 gets special treatment (invisibility paradox — statements must work at both ends).
4. **Scoring model** — total score → single placement, or dimension-level scores with minimum-wins bottleneck logic. Per the litepaper's own bottleneck thesis (Rafa, *Finding Fault Lines*), bottleneck logic is the theoretically correct approach. To be decided during v0.3.
5. **Implementation** — replace the current 2-step quiz with the forced-choice flow; auto-advance with Back button; randomized question order and A/B position per session.
