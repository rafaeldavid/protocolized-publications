---
title: Assessment v2 framework · 6 orthogonal dimensions
date: 2026-04-24
status: draft v1 · for review before writing quiz statements
source_pass_by: Explore agent (1 pass over litepaper v7, bibliography, 13 research observations, blog post)
precedes: quiz-statement drafting (v0.3+, once this framework is approved)
---

# Assessment v2 framework — 6 orthogonal dimensions

The 5 levels (Shadow → Sanctioned → Designed → Infrastructural → Planetary) stay as the **output** of the assessment. This framework provides the **measurement axes** — the orthogonal dimensions on which organizations vary within and across levels.

Each dimension is grounded in specific passages of the litepaper + bibliography. Quiz statements (later) will be plain-language operationalizations of these dimensions. Not implemented yet; reviewing the framework before writing the language.

## The six dimensions

### 1. Protocol specificity · smooth → striated

**Definition.** The degree to which the organization has codified coordination rules at AI handoff points.

**Why orthogonal.** Independent of maturity level. An L1 org can have crisp escalation rules for a single accidentally-AI function; an L4 org can have vague L3-style workflows. Measures governance design clarity, not adoption scope.

**Sources.**
- Rao, *Constructing the Evil Twin of AI* — smooth-to-striated framing as protocol design mechanism
- Rao, *Introduction to the Protocol Reader* — protocol as codified behavior at adjacent loci
- Litepaper §2 — protocol framing as distinct from policy / process

**Observable signals.**
- Can the org articulate in advance which AI outputs require human verification before consequential use?
- Are handoff points between AI and human judgment documented with specific escalation triggers?
- Does the protocol exist as a designed object (even provisional) or only as discovered practice?

---

### 2. Ontological stability · drift → fixed

**Definition.** The degree to which core definitional and schema boundaries stay stable enough that AI-generated artifacts can depend on them without mid-cycle renegotiation.

**Why orthogonal.** Organizations at any level can front-load clarity or drift. The "Waterfall inversion" (Benny) is a cost-of-coordination signal, not a level indicator. L2 orgs can have freezing definitions; L4 orgs can inherit schema fragility from earlier layers.

**Sources.**
- Benny, *Why Does AI Development Look Like 1980s Software Planning?* — ontological drift is expensive; cost-structure flip in the LLM era
- Litepaper §2.2 — schema stability as prerequisite for agent-output reliability
- Litepaper L3 — definitions must freeze before production at L3/4 boundary

**Observable signals.**
- How often do key term meanings shift mid-project?
- Is there change-control for definitions / schemas that feed AI systems?
- How much rework happens when upstream definitions change?

---

### 3. Temporal alignment · divergent → synchronized

**Definition.** The degree to which AI-accelerated workflows operate at the same pace as dependent review, audit, and external-coordination functions.

**Why orthogonal.** Independent of how well individual workflows are designed. An L3 team can suffer severe temporal divergence if review infrastructure hasn't scaled. A less-mature function can accidentally be temporally aligned because its human review pace happens to match output generation.

**Sources.**
- Scholl, *Vertical Integration (Slacker Index)* — iteration cycle speed as the binding constraint
- Scholl, *XB-1 and Jevons's Law* — cheaper iteration opens new design spaces
- Litepaper L3 failure mode — temporal divergence between AI acceleration and review infrastructure
- Uber case — AI PR volume outpaced code review; review became first-class bottleneck

**Observable signals.**
- Ratio of AI output generation speed to human review / validation speed in the bottleneck function
- Are downstream functions (customers, regulators, cross-team reviewers) experiencing arrival rates faster than they can process?
- Do teams feel caught up, or perpetually backlogged on review work?

---

### 4. Organizational visibility · invisible → legible

**Definition.** The degree to which the organization can detect, observe, and audit AI use and the domains it has entered.

**Why orthogonal.** L1 shadow use and L3 F2F bricolage look identical from the enterprise's vantage point — both invisible. L4 infrastructure can hide governance gaps if monitoring lags implementation. Visibility is a design property, not a level property.

**Sources.**
- *The Missing Protocol Layer* (blog post) — "the organization lacks not just policies but perception"
- Rao, *Protocol Reader* — protocol invisibility as a persistence property ("relative invisibility is a second major tell")
- Litepaper L2 blind spot — "cannot see whether what AI produces is reliable"
- Rafa, *Finding Fault Lines* — protocols become invisible when working well; surface through strain

**Observable signals.**
- Can the organization list which functions AI has entered, by role / team?
- Are there systematic mechanisms to detect shadow AI (personal account use, unapproved tools)?
- Can the org distinguish high-value F2F protocol innovation from governance-violating shadow work?

---

### 5. Domain expertise leverage · generic → specialized

**Definition.** The degree to which the organization uses deep domain knowledge as a governing mechanism versus relying on generic tool governance and policies.

**Why orthogonal.** An L1 org can use AI at high expertise levels (domain experts bricolaging). An L4 org can build generic, non-specialized governance. Measures *who validates outputs*, not maturity scope.

**Sources.**
- Litepaper L3 — domain expertise as binding constraint; "higher-level perception"
- Litepaper L3 F2F factory pattern — each factory brings domain expertise at its end of the handoff
- Rao, *Have Your Factory Call My Factory* — neither party writes code; both bring domain knowledge
- Armstrong, *The Hottest Job in Tech* — FDE as embedded domain expert doing L2→L3 transition work

**Observable signals.**
- In the bottleneck function, who validates AI output? (Domain expert, checklist-trained operator, external tool)
- Are governance decisions made by people with deep contextual knowledge, or by centralized compliance?
- What does expertise look like in the org's quality bar?

---

### 6. Coordination scope · individual → sectoral

**Definition.** The reach of protocols governing AI handoffs — bilateral/individual, intra-organizational, inter-organizational, or sectoral standard.

**Why orthogonal.** Organizations at any level can design for only individual workflows (narrow scope) or for sector-spanning coordination (wide scope). L1 bricoleurs can have tight bilateral F2F protocols; L4 infrastructure can support only internal handoffs. Measures *governance's reach*, not maturity level.

**Sources.**
- *The Missing Protocol Layer* (blog post) — F2F pattern as bilateral, high-trust coordination between factories; individual-level
- Litepaper L4 — sector-scope protocols; agent handoff contracts; EDI historical parallel
- Litepaper L3/4 boundary — from individual bricolage to sector standards
- Rao, *Have Your Factory Call My Factory* — informal bilateral protocols as precursor to formalized handoff contracts

**Observable signals.**
- Are AI protocols designed for this org alone, or for multi-party coordination?
- Does the org participate in defining standards (industry consortia, RFI responses, regulatory comment periods)?
- Can the org's AI infrastructure be ported to work with external partners' systems?

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

### D2 · Ontological stability

| Concept | Source | How it ties |
|---|---|---|
| **Ontological drift** | Benny, *Why Does AI Development Look Like 1980s Software Planning?* | Named failure mode this dimension measures against. Direct 1:1 mapping. |
| **Cost-structure flip** | Benny (same essay) | LLMs make documents cheap but drift expensive — shifts the economics that make stability matter. |
| **Waterfall inversion** | Benny (same) + Litepaper §2.2 | Practical response to drift: front-load definitional clarity. Stability is the design move. |
| **Definition freezing at L3/4 boundary** | Litepaper L3 | Specific point where the dimension becomes load-bearing; organizations can't cross L3/4 without it. |

### D3 · Temporal alignment

| Concept | Source | How it ties |
|---|---|---|
| **Slacker Index** | Scholl, *Vertical Integration* | Lead time ÷ working time — direct measure of temporal divergence. |
| **Jevons's Law of engineering** | Scholl, *XB-1 and Jevons's Law* | When iteration is cheap, the quantity of designs evaluated changes what's possible. AI makes iteration cheap; alignment becomes the constraint. |
| **AI-speed vs. review-speed mismatch** | Litepaper L3 failure mode | The canonical L3 failure: AI accelerates production without review infrastructure scaling. |
| **Code review as first-class bottleneck** | Uber case | Empirical demonstration — AI PR volume outgrew review capacity; temporal mismatch became the limiting factor. |
| **Intensification without absorption** | Ranganathan/Ye HBR (cited via blog post) | Individual workflow acceleration outrunning organizational standardization — temporal divergence at the work/org layer. |

### D4 · Organizational visibility

| Concept | Source | How it ties |
|---|---|---|
| **"Not just policies but perception"** | *The Missing Protocol Layer* (blog post) | Most direct statement of the dimension. Perception precedes governance. |
| **Protocol invisibility as persistence property** | Rao, *Protocol Reader* | Successful protocols disappear — an inherent tension this dimension surfaces. |
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

### D6 · Coordination scope

| Concept | Source | How it ties |
|---|---|---|
| **F2F bilateral coordination** | Rao, *Have Your Factory Call My Factory* | Narrow-scope case: two parties, tight bilateral protocol. Anchor for the "individual" end of the dimension. |
| **Agent handoff contracts** | Litepaper L4 | Scope widens from bilateral to multi-party; protocols become first-class contracts. |
| **EDI historical parallel** | Litepaper L4 | Sector-scope precedent for what L4/L5 coordination looks like when it matures. |
| **Disruptive standards-making** | David Lang's Bristlemouth project (cited via Protocol Institute intro) | Contemporary example of sectoral protocol design; shows the shift from individual to sectoral scope. |
| **Kitification** | Rafa (new concept, 2026-04-24) | Intermediate scope: kits coordinate across bespoke instances without requiring full standardization. |

### Cross-cutting concepts (not dimensions — scoring logic)

Some concepts operate across all dimensions rather than mapping to one:

| Concept | Source | Role |
|---|---|---|
| **Bottleneck thinking** | Rafa, *Finding Fault Lines*; Microsoft RAI MM (interdependence warning) | Scoring rule: the organization's effective level is the weakest high-stakes dimension. This is *how dimensions combine*, not a dimension itself. |
| **Non-events as output** | Weick via Stinson-Schroff | What well-functioning protocols *produce*. The diagnostic looks for their absence. |
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

## Open tensions in the source material

**1. Waterfall-as-regression vs. Waterfall-as-optimal** (Benny / Litepaper).
Benny observes AI drives orgs back to Waterfall-like front-loaded specification. The litepaper agrees this is correct given the cost structure, not a regression. Tension: is freezing definitions progressive maturity or a design compromise? Resolution in current work: both true; it's optimal given a constraint specific to LLM-era coordination, not timeless best practice.

**2. Visibility as desirable vs. visibility as risk** (Rao / Stinson-Schroff).
Litepaper emphasizes visibility for L1→L2 transition. Stinson-Schroff's *Mechanical Currents* warns that infrastructure success comes with invisibility that can hide fragility. Tension: is legibility always desirable, or does it come with a governance tax? Not fully resolved in sources.

**3. F2F as emergent bricolage vs. F2F as designed coordination** (Rao / Ranganathan-Ye).
Rao celebrates F2F as organic high-trust bilateral coordination. HBR (Ranganathan/Ye) frames the same phenomenon as intensification without organizational absorption — a pathology. Tension: is factory-to-factory coordination a model or a symptom? Probably both: high-value bilaterally but pathological when it proliferates invisibly without standardization.

## What's next

1. **This doc reviewed and approved (or redlined)** by Rafa.
2. **Dimension renaming (optional) for plain-language UX** — e.g., "Protocol Specificity" might surface in the quiz as "Rule clarity", "Ontological Stability" as "Definition discipline", etc. Framework names stay as internal vocabulary.
3. **Statement drafting (v0.3)** — for each dimension, 2–3 binary-choice questions. 15 questions total across 6 dimensions means some dimensions get 3 questions, some get 2. We'll decide weighting when drafting.
4. **Scoring model** — total score → single placement, or dimension-level scores with minimum-wins bottleneck logic. Per the litepaper's own bottleneck thesis (Rafa, *Finding Fault Lines*), bottleneck logic is the theoretically correct approach. To be decided during v0.3.
5. **Implementation** — replace the current 2-step quiz with the forced-choice flow; auto-advance with Back button; randomized question order and A/B position per session.
