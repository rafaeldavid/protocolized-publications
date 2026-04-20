# Resource-Category Critique — AI CMM v1
# Prepared for: v2 recomposition
# Date: 2026-03-16

Each section below names a resource category, lists the relevant catalog entries, and states what the current YAML gets wrong or misses from that body of evidence. Recommendations follow each category. A consolidated change list ends the document.

---

## Category A — High-maturity case studies
**Entries:** 1 (Uber talk), 2 (Orosz article)

**What v1 gets right.** Uber is correctly placed as transitional 3→4. The code review bottleneck (FM3-1) is sourced directly from the case.

**What v1 misses.**

*Platform architecture is absent as a Level 3 milestone.* Uber's Level 3 → 4 transition is legible in the case: they moved from adopting agentic tools (Level 3) to building a multi-layer internal platform governing them — Michelangelo context layer, Minion, Shepherd, Code Inbox, U Review. The YAML captures Uber as a case anchor but the progression_requirements for Level 3 don't include platform-building as a milestone. Organizations transitioning to Level 4 must build internal infrastructure, not just internal workflows. This distinction belongs in the Level 3 unlock_condition.

*The 6x AI cost increase has no home in the model.* Uber's AI costs rose 6x in one year. This is a Level 3/4 operational fact — AI at scale is expensive and cost governance becomes first-class. The YAML doesn't track this anywhere. It belongs in Level 3 observable_indicators.

**Recommendations.**
- Add to Level 3 observable_indicators: "AI-related costs are tracked as a first-class operating expense with defined ownership"
- Add to Level 3 progression_requirements (action): Build internal platform or governance layer for AI tools — not just workflow documentation, but tooling that enforces the workflow
- Add to Level 3 unlock_condition: "Industry peers begin to benchmark against this organization's AI practices"

---

## Category B — Iteration methodology (Boom Supersonic)
**Entries:** 7–12

**What v1 gets right.** Boom at late Level 3 is correct. Slacker Index (FM3-1 reference) and ontological drift (FM3-2) are sourced here.

**What v1 misses.**

*The Slacker Index is described but not made diagnostic.* The Slacker Index (total lead time ÷ working time) appears in FM3-1 but only as a conceptual reference. At Level 3, it's the most practical self-assessment tool available. Level 2 organizations don't need it — their problem is governance, not iteration speed. Level 3 organizations need it to identify where temporal divergence is actually bottlenecking them. It belongs in a `diagnostic_tool` field at Level 3.

*Safety culture (Boom Part 3) has no representation.* Boom's near-miss reporting system — transparent, not anonymous, with a defined path from incident to protocol review — is exactly what Level 3's feedback_loop:systematic means in practice. The YAML rating says `feedback_loops: systematic` at Level 3 but never explains what "systematic" requires. Boom's safety culture gives the concrete form: incidents are investigated, not suppressed; the protocol is reviewed, not just the individual error.

*Hiring: aptitude over skills (entry 10) belongs in Level 3 progression.* At Level 3, organizations that hire for current AI tool skills rather than for protocol-design aptitude plateau. This isn't a failure mode — it's a prerequisite for Level 4. It belongs in Level 3 progression_requirements or transition catalysts.

**Recommendations.**
- Add `diagnostic_tool` field to each level definition (see schema change)
- Level 3 diagnostic_tool: Slacker Index — calculate total lead time ÷ working time for one core AI-assisted workflow; bottlenecks above ratio 3:1 require protocol redesign before advancement
- Add to Level 3 feedback_loop description: transparent near-miss reporting with defined path from incident to protocol review (not just correction)

---

## Category C — Org design / FDE model
**Entries:** 4 (Armstrong), 5 (Scianna), 6 (Otter)

**What v1 gets right.** FDE appears in Level 2→3 transition catalysts.

**What v1 misses.**

*The three FDE articles distinguish three different things the YAML conflates.* Armstrong describes why FDEs exist (AI is a platform shift requiring organizational redesign, not just tooling). Scianna describes what makes FDEs work (Auftragstaktik autonomy, gravel road methodology, platform feedback loop). Otter describes what makes FDEs fail (custom implementations accumulate, standardization becomes politically impossible). All three are relevant to Level 2→3, but v1's transition block only mentions FDEs generically.

*Otter's services-vs-product failure mode is absent.* If an organization's internal AI implementation function never abstracts custom work into platform features, it accumulates technical debt at Level 3 speeds. The organization looks Level 3 (custom tooling, designed workflows) while actually stuck: its AI implementations are one-offs that can't generalize. This is a distinct Level 3 failure mode not currently in the YAML.

*The gravel road concept belongs in Level 2 progression_requirements.* Scianna's gravel road — build the minimum viable path to a working outcome in ≤10 days with real data — is the most actionable Level 2 → 3 entry point. It deserves a named slot.

**Recommendations.**
- Add FM3-4: "Custom implementation accumulation" — internal AI tooling builds custom solutions that never abstract into reusable platform features; Level 3 costs with Level 2 leverage
- Add to Level 2 progression_requirements (action): Run one gravel-road prototype — select a high-value AI use case, build a working implementation with live data in ≤10 days, evaluate whether it can be generalized
- Expand Level 2→3 transition to distinguish three FDE-model paths: embedded partner (FDE), internal champion, and operational formalization

---

## Category D — Governance / methodology theory
**Entries:** 3 (Sachin Benny), 19 (Vibe Coding / Sachin)

**What v1 gets right.** Ontological drift (FM3-2) is sourced from Benny. Vibe Coding is in the catalog.

**What v1 misses.**

*Time to Mediocrity (TTM) belongs in Level 2.* Vibe Coding's TTM concept — AI brings any practitioner to functional mediocrity in a domain without requiring depth — explains Level 2's quality dynamic precisely. Level 2 organizations report high productivity because TTM is real: AI does produce functional outputs quickly. The quality floor collapse (FM2-1) happens when organizations mistake functional mediocrity for expertise. TTM should appear in the Level 2 description as the mechanism behind both the reported gains and the subsequent failure.

*Slopsunami belongs in FM2-1.* Quality floor collapse is described as a failure mode but the mechanism isn't named. Slopsunami (content cheaper to produce than to search → document and output quality degrades across the board) is the mechanism. Adding it sharpens FM2-1 from "quality degrades" to "when production volume exceeds review capacity, the quality signal is overwhelmed by volume."

*The waterfall return argument belongs in Level 3 progression.* Benny's argument: LLMs make ontological drift expensive, pushing AI development toward waterfall-style upfront specification. This means Level 3 progression requires a specific skill that Level 2 organizations lack — the ability to freeze definitions before deployment, not during. This is a concrete requirement that belongs in Level 3 progression_requirements.

**Recommendations.**
- Add TTM definition to Level 2 description: "AI produces functional output quickly in most domains (Time to Mediocrity effect). This creates genuine early productivity gains. It also conceals the absence of expertise, making quality failures invisible until they are external-facing."
- Strengthen FM2-1 to include Slopsunami as the mechanism
- Add to Level 3 progression_requirements: Define and freeze the domain ontology before deployment — name the concepts, categories, and definitions that AI systems will depend on, and establish a change process for them

---

## Category E — AI CMM comparators
**Entries:** 13 (BCG), 14 (Microsoft), 15 (Accenture)

**What v1 gets right.** All three are in the catalog with accurate assessments. Microsoft's 24-dimension model is the most important comparator and the YAML correctly identifies it.

**What v1 misses.**

*BCG's exposure/readiness framing is referenced in the catalog but not in the YAML.* An organization at Level 1 in a high-exposure sector (healthcare, finance, legal) faces materially different urgency than a Level 1 organization in a low-exposure sector. The current YAML treats all Level 1 organizations the same. Exposure level belongs in the model header as a modifier that affects urgency without changing level placement.

*Accenture's Foundation vs. Differentiation diagnostic explains why organizations are stuck.* The YAML places organizations on a level but doesn't explain why they're stuck there. Accenture's split (12% Achievers, 63% Experimenters) maps to two distinct stuck-at-Level-2 profiles: weak Foundation (inadequate data infrastructure, governance tooling) vs. weak Differentiation (no strategy, no culture). These require different interventions. This diagnostic dimension belongs in the model — not as a separate dimension, but as a `stuck_pattern` classification in Level 2.

*Microsoft's interdependency warning is ignored in the schema.* Microsoft explicitly warns against averaging dimension scores: maturity is interdependent, not additive. The YAML schema should include this warning prominently, since the protocol_dimensions ratings invite averaging.

**Recommendations.**
- Add `ai_exposure` enumeration to schema: [low, moderate, high, extreme] — with the note that exposure level affects urgency, not placement
- Add `stuck_pattern` field to Level 2 (and optionally other levels) with values: [foundation_gap, differentiation_gap] — allows organizations to identify what type of investment unblocks them
- Add schema-level warning: "Protocol dimension ratings are diagnostic, not additive. An organization does not advance by improving one dimension while leaving others unchanged. Dimensions are interdependent."

---

## Category F — Empirical adoption data
**Entries:** 16 (OpenAI), 17 (Menlo Ventures), 18 (McKinsey)

**What v1 gets right.** The 16% true-agent deployment (Menlo) is the primary Level 2/3 boundary empirical anchor and it's in the model header.

**What v1 misses.**

*OpenAI's 36% non-engineering coding increase belongs in Level 2.* When AI enables non-technical workers to do technical tasks, it creates a governance problem specific to Level 2: the role-function mapping the organization was built on no longer holds. Legal teams write code. Marketing teams run data analyses. The existing governance protocols — which assumed defined role boundaries — break down. This is a Level 2 observable indicator.

*The frontier/laggard gap (6x message volume) belongs in the Level 3/4 description.* The frontier organization → laggard gap widening is a Level 4 characteristic: once AI becomes industry infrastructure, the gap between protocol-mature and protocol-immature organizations stops being closable through incremental adoption. This should appear in the Level 4 description, not just in the model header.

*McKinsey's workflow redesign finding is not used.* McKinsey's central finding: high performers redesign workflows, retrain workers, and govern errors systematically — as opposed to simply providing access. This is the Level 2 → 3 transition described empirically. It belongs in the Level 2→3 transition block as documented evidence.

**Recommendations.**
- Add to Level 2 observable_indicators: "Non-technical employees are using AI to perform tasks previously requiring specialist skills (data analysis, code writing, document automation) without a corresponding governance protocol for those outputs"
- Add to Level 4 description: reference to frontier/laggard gap widening as a structural feature of the level, not just an empirical observation
- Add to Level 2→3 transition documented_evidence: McKinsey (2025) — organizations that advance from Level 2 redesign workflows, retrain workers, and govern errors systematically; those that don't, plateau

---

## Category G — Protocol theory foundational
**Entries:** 20 (Protocol Reader), 21 (Protocolization I), 22 (Protocolization II), 23 (FPT), 24 (Evil Twin)

**What v1 gets right.** The smooth-vs-striated vocabulary appears in the critique doc. Protocolization I's over-protocolization is referenced in Level 5. Evil Twin's anti-intelligence framing is conceptually present in the model.

**What v1 misses.**

*"Default quietness" (Protocolization I) explains Level 1 precisely.* The seventh dimension of protocol invisibility is "default quietness" — protocols are visible only when they fail. Level 1 organizations don't know their AI governance protocol is absent because the absence is invisible until an incident. This should appear in the Level 1 description: the absence of a protocol is itself invisible — which is why Level 1 organizations don't feel like they're at Level 1.

*Evil Twin's striated/smooth vocabulary should be in the schema, not just the critique.* The schema currently has `governance` values ranging from `absent` to `infrastructure`. The underlying logic — that protocols convert smooth behavior space (anything is possible) into striated space (specific paths are defined) — is the theoretical basis for why those values are ordered the way they are. Adding a `theoretical_basis` note to the schema would make the dimension values interpretable without external documentation.

*Atomic Protocol Questions (APQ) methodology belongs in the evaluation criteria, not the model.* The APQ framing is correctly placed in the evaluation_criteria.md. The bus bunching case (individual optimal behavior → system-level coordination failure) is a useful analogy for Level 2, where individual AI use optimization → organizational coordination failure. Consider adding it as an explanatory note.

**Recommendations.**
- Add to Level 1 description: the absence of a protocol is itself invisible until it fails; organizations discover they're at Level 1 through incidents, not inspection
- Add `theoretical_basis` comment to schema protocol_dimensions block, citing smooth-vs-striated framing
- Level 5 FM5-2 (literacy collapse): add the vaccination / nuclear non-proliferation analogy from Protocolization I explicitly

---

## Category H — Protocol theory applied
**Entries:** 25 (Mechanical Currents), 26 (Fault Lines), 27 (Factory-to-Factory)

**What v1 gets right.** Temporal divergence (FM3-1) sources from Mechanical Currents. Fault Lines provides the theoretical basis for Level 2 FM2-3 (chatbot liability). Factory-to-Factory is correctly placed at Level 3.

**What v1 misses.**

*Mechanical Currents' three organizational responses aren't mapped to transition mechanisms.* The paper identifies three responses to protocol disturbance: vertical integration (Boom), translation work (FDEs), operational formalization (governance docs, ontologies). These are the three distinct paths from Level 2 to Level 3. The v1 transition block mentions FDEs but doesn't name the other two paths.

*Fault Lines' software-encoded vs. practiced management distinction belongs in Level 2.* The paper's central observation: software-encoded protocols enforce compliance uniformly and instantly, while practiced management allowed contextual flexibility. Level 2 organizations discover this when AI systems enforce the formal policy (the thing that was written down) and bypass the practiced policy (the thing people actually did). This is a distinct failure mode worth naming.

*Have Your Factory Call My Factory: domain knowledge > coding knowledge should be in Level 3 progression.* The F2F pipeline demonstrates that at Level 3, the limiting constraint is domain expertise — knowing what should be automated and with what quality criteria — not technical skill. Level 3 progression requires crystallizing domain knowledge into explicit protocol specifications that AI systems can operate within. Currently absent from the YAML.

**Recommendations.**
- Add FM2-4: "Policy/practice gap" — AI enforces the formal policy while bypassing the contextual exceptions practitioners relied on; the gap between written policy and actual practice becomes visible and consequential
- Expand Level 2→3 transition_mechanisms to three named paths: (1) vertical integration — build internal AI capability to reduce external dependency; (2) translation work — embed an implementation partner (internal FDE or external consultant) to design the workflow protocol; (3) operational formalization — governance documentation and ontology crystallization
- Add to Level 3 progression_requirements: Crystallize domain knowledge into explicit specifications — document what good output looks like, what constitutes an acceptable AI error, and who has the domain expertise to judge

---

## Category I — Level 1 case studies
**Entries:** 28 (Samsung), 29 (Legal), 30 (Healthcare)

**What v1 gets right.** All three are well-placed and well-described. The legal profession's follow-on (80% AmLaw 100 governance boards) is captured.

**What v1 misses.**

*The legal profession arc is the best documented Level 1→2 transition available and isn't used as a transition example.* The cascade from individual sanctions → ABA Formal Opinion 512 → 80% governance board adoption is a sector-level Level 1→2 transition driven by regulatory forcing function. It belongs in the Level 1→2 transition block as a documented_example.

*Samsung's post-incident arc (ban → internal LLM → selective re-admission) is a complete Level 1→2 exit path.* Samsung's response documents exactly what the Level 1→2 transition looks like: the incident creates urgency, the ban stops the bleeding, internal tool development creates a governed alternative, selective re-admission under protocol completes the transition. The YAML has Samsung as a Level 1 case anchor but doesn't use its subsequent arc.

**Recommendations.**
- Add to Level 1→2 transition documented_examples: Samsung (ban → internal LLM → selective re-admission under protocol, 2023–2025) and legal profession (individual sanctions → ABA guidance → sector governance boards, 2023–2025)

---

## Category J — Level 2 case studies
**Entries:** 31 (Klarna), 32 (Shopify), 33 (Duolingo), 34 (Shadow AI data)

**What v1 gets right.** All four are well-placed with accurate data.

**What v1 misses.**

*The financial indicator paradox is not named.* Across all three Level 2 organizations, financial metrics were strong at the same time as governance failures were accumulating: Klarna ($40M claimed savings, then reversal); Shopify (30% revenue growth, governance protocol absent); Duolingo (39% revenue growth, 50% stock decline). The pattern — positive financial metrics that conceal governance failure until it becomes external-facing — is a Level 2 characteristic that belongs in the tension description or as a diagnostic note.

*Shadow AI data (entry 34) supports a Level 1 observable indicator not currently in the YAML.* The 400-day average discovery lag means organizations are at Level 1 for more than a year before they discover it. This should be in the Level 1 description: the typical organization is at Level 1 for 12–18 months without knowing it.

**Recommendations.**
- Add to Level 2 characteristic_tension context: strong financial metrics are a lagging indicator; governance failures accumulate faster than financial metrics deteriorate, making Level 2 feel more stable than it is
- Add to Level 1 description: discovery lag is typically 400+ days; the typical organization is at Level 1 for over a year before a shadow AI incident surfaces

---

## Consolidated change list for v2

**Schema changes:**
- Add `diagnostic_tool` field to level definition schema
- Add `stuck_pattern` field to Level 2 schema
- Add `ai_exposure` enumeration to model header
- Add `theoretical_basis` comment to protocol_dimensions block
- Add schema-level non-averaging warning
- Add `transition_mechanisms` field to transition blocks (distinct from common_catalysts)

**Level name changes:**
- Level 3: rename from "Governed" to "Designed" — "Governed" is confusing because governance is a dimension tracked across all levels; "Designed" captures the key transition: AI workflows are designed, not improvised
- Level 4: rename from "Industry Reliance" to "Infrastructural" — shorter, parallel in form to other names

**Level 1 changes:**
- Add: protocol absence is invisible until failure
- Add: 400-day typical discovery lag
- Add to case_anchors: use Samsung and legal profession arcs as documented Level 1→2 exits

**Level 2 changes:**
- Add: TTM (Time to Mediocrity) as the mechanism behind both reported gains and quality failures
- Add: Slopsunami as the mechanism behind FM2-1
- Add: FM2-4 Policy/practice gap (Fault Lines)
- Add: non-engineering coding as an observable indicator
- Add to tension: financial metrics as lagging indicators

**Level 3 changes:**
- Rename to "Designed"
- Add: domain knowledge > coding knowledge as limiting constraint
- Add: ontology crystallization to progression_requirements
- Add: cost governance as observable indicator
- Add: FM3-4 custom implementation accumulation (Otter)
- Add: platform-building to unlock_condition
- Add: diagnostic_tool: Slacker Index

**Level 4 changes:**
- Rename to "Infrastructural"
- Add: frontier/laggard gap widening as structural feature
- Add legal profession transition signals to case_anchors

**Level 5 changes:**
- Strengthen FM5-2 with vaccination / nuclear non-proliferation analogies

**Transition changes:**
- Level 1→2: add documented_examples (Samsung arc, legal profession arc)
- Level 1→2: add McKinsey workflow redesign finding
- Level 2→3: replace generic FDE mention with three named paths (vertical integration, translation work, operational formalization)
- All transitions: add `transition_mechanisms` field

**Style changes (per _REPORT-STYLE.md):**
- Remove negative parallelism constructions from descriptions (max one per document)
- Replace em-dashes in prose with periods or commas where possible
- Cut throat-clearing from level descriptions (state the finding; the setup is noise)
- Remove "precisely," "fundamentally," and similar assertion adverbs
- Unlock_conditions must not restate progression_requirements

---

*Last updated: 2026-03-16*
