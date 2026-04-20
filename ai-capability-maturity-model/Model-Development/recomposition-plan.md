# Model Recomposition — Task Plan

**Objective:** Recompose the AI Capability Maturity Model into a YAML DSL specification.
**Status:** In progress
**Sequence:** Plan → Thesis extraction → Critique → Evaluation criteria → YAML DSL

---

## 1. What this task is and isn't

**Is:** A formal restatement of the maturity model as a machine-readable, internally consistent domain specification. The YAML is a design document, not a configuration file — it should be readable by humans and parseable by machines.

**Is not:** A v5 of the docx. This is a parallel artifact: a precise, structured encoding of the model's claims, intended to surface ambiguities, force consistency, and serve as the authoritative source for subsequent writing (blog post, litepaper).

---

## 2. Resources to review before writing

All of the following have been reviewed in the current research session. Key takeaways noted.

| Resource | Location | Key contribution |
|----------|----------|-----------------|
| AI CMM v4.docx | `../AI Adoption Capability Model Project/` | Existing level names, 12 dimensions, case studies, diagnostic tool |
| `_PROJECT.md` | `../` | Central argument: governance of uncertainty as unit of maturity |
| `Litepaper/README.md` | `../Litepaper/` | Working level names, structure, tone |
| `Research/source-catalog.md` | `../Research/` | 34 annotated sources — empirical anchors for each level |
| `Research/case-studies-overview.md` | `../Research/` | Confirmed case study facts across all 6 levels of the model |
| Menlo Ventures 2025 | `../Resources/` | 16% true-agent deployment; Level 3/4 boundary empirical anchor |
| Microsoft RAI Maturity Model | `../Resources/` | Best existing comparator; 24 dimensions, 5 levels |
| Accenture Art of AI Maturity | `../Resources/` | 63% Experimenters / 12% Achievers split |
| Theorizing Protocolization I + II | `../Resources/` | Planetary protocol framing; APQ methodology |
| Constructing the Evil Twin of AI | `../Resources/` | Anti-intelligence design; smooth vs. striated behavior space |
| Finding Fault Lines within the Firm | `../Resources/` | Fault lines; software-encoded vs. practiced management |
| Mechanical Currents | `../Resources/` | Temporal divergence; protocol integrity under load |
| Have Your Factory Call My Factory | `../Resources/` | Factory-to-factory coordination; Level 5 instantiation |
| Uber case studies (entries 1–2) | `../Resources/` | Level 4 high-maturity anchor |
| Boom Supersonic series (entries 7–11) | `../Resources/` | Level 3 anchor (late stage); mkBoom, Slacker Index, Jevons's Law |

---

## 3. Key design decisions (pre-confirmed)

These are settled before writing begins:

**Level 3 anchor: Boom Supersonic (late stage 3)**
Boom's business model depends on AI — mkBoom is not a productivity tool, it is the design methodology. Boom cannot operate their development program without it. However, Boom is not yet at the point where an industry depends on their approach being standard. They are at late Level 3: AI is embedded in the firm's core capability, not just a workflow tool.

**Level 4 = Industry reliance**
The whole industry or market has adopted AI as infrastructure. AI capability is no longer a competitive differentiator — it is table stakes. Competition shifts to *how* AI is deployed, not *whether*. No confirmed examples at this level yet; Amazon AWS (infrastructure), Bloomberg Terminal, certain fintech clearing systems are candidate leading indicators.

**Level 5 = Planetary embedding**
AI is embedded in systems that govern coordination at civilizational scale: power grids, financial markets, healthcare infrastructure, logistics, environmental monitoring. These are not organizational deployments — they are protocol-layer integrations into systems that operate whether or not any individual organization "adopts" them. The Protocolization I framing (New Nature; protocols as invisible planetary infrastructure) is the theoretical home for Level 5.

**Unit of analysis shifts across levels:**

| Level | Unit of analysis |
|-------|-----------------|
| 1 | Individual (employee) |
| 2 | Organization |
| 3 | Business model / competitive position |
| 4 | Industry / market |
| 5 | Civilization / planetary systems |

This shift is the model's most important structural feature and distinguishes it from every existing AI CMM.

---

## 4. Sequenced deliverables

### Step 1: Thesis and logic flow extraction
File: `thesis-extraction.md`
Purpose: Distill the model's argument into its load-bearing claims. What must be true for the model to be correct? What evidence supports each claim? Where is the argument weakest?

### Step 2: Full critique
File: `model-critique.md`
Purpose: Identify structural weaknesses, scope gaps, definitional problems, and places where v4 is internally inconsistent or insufficiently argued. Critique both the prior model and the working hypothesis for the new one.

### Step 3: Test and evaluation document
File: `evaluation-criteria.md`
Purpose: Define what best-in-class output looks like before writing it. Criteria for YAML quality, level definition quality, internal consistency, empirical grounding, and practitioner usability.

### Step 4: YAML DSL
File: `ai-cmm-v1.yaml`
Purpose: The primary deliverable. A formal, machine-readable specification of the model with schema definition, five level definitions, transition conditions, case anchors, and protocol dimension vocabulary.

---

## 5. YAML DSL design principles

**Precision over completeness.** Every claim in the YAML must be defensible. If a field can't be filled with something specific and accurate, it stays blank rather than being padded with plausible-sounding content.

**Consistent vocabulary.** All fields use a closed vocabulary. Protocol dimension values are enumerations, not prose. Observable indicators are observable (not interpretations).

**Separation of concern.** Each level definition contains: what it looks like (observable), what it feels like (characteristic tension), what goes wrong (failure modes), and what changes (progression). These are separate fields, not mixed prose.

**Empirical anchoring.** Case anchors cite specific entries in the source catalog. Claims about "most organizations" reference specific survey data.

**Machine-parseable.** The YAML should validate against a schema. Fields that accept lists use consistent format. Nested structures are consistent across levels.

---

## 6. What makes the YAML DSL novel

No existing AI maturity model has been expressed as a DSL. The Microsoft model is a PDF; the Accenture model is a consultant deck; McKinsey is behind a registration wall. A YAML specification:

- Forces internal consistency (same fields across all levels)
- Enables diffing (v1 → v2 is a git diff, not a document comparison)
- Supports downstream generation (blog sections, litepaper tables, diagnostic tools can all be generated from the same source)
- Is checkable (criteria in the evaluation doc can be evaluated against the YAML mechanically)

---

*Last updated: 2026-03-15*
