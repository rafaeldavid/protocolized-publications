# AI Capability Maturity Model — Project Portal

**Project:** Desk research, blog post, litepaper, interactive diagnostic, archetype assessment, case-studies library, and an AI-adoption-guide slide deck on a capability maturity model for organizational AI adoption
**Practice:** Protocolized — Protocols for Business Practice
**Status:** AI Adoption Guide slide deck — *Durable AI Adoption* — live at https://ai.protocolized.dev/ (slug `plush-muse-q9bz`). Artifact (v1.12) + Blog post (v1.2) + Litepaper (v5 HTML) + Assessment (v0.9) + Case Studies Library remain at their existing `protocolized.dev/*` sub-paths. The legacy homepage at `protocolized.dev/` now redirects to `ai.protocolized.dev`.

---

## Start here

1. [Project brief](_PROJECT.md) — what we're building, for whom, and why
2. [Workplan](_WORKPLAN.md) — full task list with owners and sequence

---

## Outputs

| Output | Format | Audience | Status |
|--------|--------|----------|--------|
| [AI Adoption Guide](AI-Adoption-Guide/README.md) | Interactive slide deck — *Durable AI Adoption* — 8 chapters, 10-case study appendix, embedded assessment | Deployment managers, ops VPs, AI champions | **v0.5 live** — [ai.protocolized.dev](https://ai.protocolized.dev/) |
| [Blog post](Blog-Post/README.md) | ~1,500 words, Protocolized publication | Practitioners, managers | **v1.2 live** — [protocolized.dev/blog-the-missing-layer](https://protocolized.dev/blog-the-missing-layer/) |
| [Litepaper](Litepaper/README.md) | 8–12 pages, downloadable | Deployment managers, executives | **v5 HTML live** — [protocolized.dev/litepaper-ai-protocols](https://protocolized.dev/litepaper-ai-protocols/). Drafts up to v7; irony/humor pass pending. |
| [Interactive HTML artifact](Artifact/publish/index.html) | Public web artifact | All audiences | **v1.12 live** — [protocolized.dev/ai-maturity-model](https://protocolized.dev/ai-maturity-model/) |
| [Assessment](assessment/index.html) | 24-question typological quiz, 10 archetypes × maturity level | All audiences | **v0.9 live** — [protocolized.dev/assessment](https://protocolized.dev/assessment/) — also embedded in the AI Adoption Guide |
| [Case Studies Library](case-studies/index.html) | 10-card library (Today's Stories / Lessons from the Past) | All audiences | **Live** — [protocolized.dev/case-studies](https://protocolized.dev/case-studies/) — also embedded in the AI Adoption Guide appendix |
| [Homepage (redirect)](homepage/index.html) | Minimal redirect page | — | `protocolized.dev/` now bounces to `ai.protocolized.dev/`. Source archived in `_Deploy-Archive/2026-05-12-homepage/` |

---

## Blog Post (v1.2 live — 2026-03-20)

**Live URL:** https://protocolized.dev/blog-the-missing-layer/

| Document | Purpose |
|----------|---------|
| [the-missing-protocol-layer-v1.1.md](Blog-Post/SIG-update/the-missing-protocol-layer-v1.1.md) | Working draft (v1.1) — v1.2 content revision applied directly to `publish/index.html` |
| [the-missing-protocol-layer-v1.0.md](Blog-Post/SIG-update/the-missing-protocol-layer-v1.0.md) | Locked v1.0 — do not edit |
| [publish/index.html](Blog-Post/SIG-update/publish/index.html) | Canonical deploy source — v1.2 prose, published to protocolized.dev. here.now slug: `witty-garnet-6k4f` |

---

## HTML Artifact (v1.12 live — 2026-03-18)

**Live URL:** https://protocolized.dev/ai-maturity-model/

| Document | Purpose |
|----------|---------|
| [v1.12.html](Artifact/drafts/v1.12.html) | Interactive diagnostic artifact — current version (deployed). |
| [publish/index.html](Artifact/publish/index.html) | Canonical deploy source — copy of current draft, published to protocolized.dev. |
| [layout-test.py](Artifact/drafts/layout-test.py) | 21-criterion layout test suite — run after any structural change |
| [_ARTIFACT-BRIEF.md](Artifact/_ARTIFACT-BRIEF.md) | Product spec and UX design brief |
| [_ARTIFACT-QC.md](Artifact/_ARTIFACT-QC.md) | 22-criterion content/style evaluation framework |

## Model Development (complete)

| Document | Purpose |
|----------|---------|
| [ai-cmm-v2.yaml](Model-Development/ai-cmm-v2.yaml) | YAML DSL — current model definition (v2.2) |
| [ai-cmm-v1.yaml](Model-Development/ai-cmm-v1.yaml) | YAML DSL — prior version for diff reference |
| [evaluation-criteria.md](Model-Development/evaluation-criteria.md) | Pass/fail criteria for YAML DSL quality |
| [model-critique.md](Model-Development/model-critique.md) | Full critique of v4 and working hypothesis |
| [resource-critique-v2.md](Model-Development/resource-critique-v2.md) | Category-by-category critique of v1 against all 34 sources |
| [thesis-extraction.md](Model-Development/thesis-extraction.md) | Load-bearing claims, structural assumptions, weaknesses |
| [recomposition-plan.md](Model-Development/recomposition-plan.md) | Task plan and resource map for YAML recomposition |

## Litepaper (v5 HTML live — 2026-03-19)

**Live URL:** https://protocolized.dev/litepaper-ai-protocols/ (here.now slug: `arctic-ribbon-7nvb`)

| Document | Purpose |
|----------|---------|
| [html/index.html](Litepaper/html/index.html) | Canonical deploy source — v5 prose live on protocolized.dev |
| [litepaper-draft-v7.md](Litepaper/litepaper-draft-v7.md) | Current working markdown draft — v6 and v7 blog-alignment edits not yet synced to HTML |
| [_VOICE-FEEDBACK.md](Litepaper/_VOICE-FEEDBACK.md) | Editorial voice notes — irony/humor pass pending |
| [litepaper-outline-v0.1.yaml](Litepaper/litepaper-outline-v0.1.yaml) | YAML DSL outline — argument structure, 5 levels, case anchors, emerging protocols, section map |
| [litepaper-bibliography.md](Litepaper/litepaper-bibliography.md) | Bibliography v0.2 — 40 sources, Chicago citations, citable claims, gap analysis |

---

## Assessment (v0.9 live — 2026-04-25)

**Live URL:** https://protocolized.dev/assessment/ (here.now slug: `humble-gorge-n5j4`)

24-question forced-choice paired-statement quiz. Classifies respondents into one of 10 archetypes (Vanguard / Traveller / Architect / Integrator / Tinkerer / Ratifier / Warden / Broker / Folkway / Guild) plus a maturity level (L1–L3-4). Hierarchical placement scoring (88% match rate across 100-simulation harness).

| Document | Purpose |
|----------|---------|
| [assessment/index.html](assessment/index.html) | Live quiz markup, scoring JS, archetype + maturity data, two-card result rendering |
| `_Product/Assessment-v2-Design/Quiz-v0.9.md` | Canonical question text + scoring spec |
| `_Product/Assessment-v2-Design/Archetypes-v0.5.md` | Archetype profiles with protocol-orientation sections |
| `_Product/Assessment-v2-Design/test-results/` | Simulation harness, scoring scripts, validation reports |

---

## Case Studies Library (live — 2026-04-26)

**Live URL:** https://protocolized.dev/case-studies/ (here.now slug: `plush-nutmeg-h2rj`)

10-card library across two named sections:
- *Today's AI Adoption Stories* (Class A, L1–L3): Samsung · Klarna · Shopify · Air Canada · Boom
- *Lessons from the Past* (Class B, L1–L5): Visicalc/Excel · Internet Tidal Wave (Gates 1995) · Git/CI-CD · Walmart EDI 1988 · Containerization (McLean 1956)

Cards are collapsed-by-default with 2-level disclosure. Design lineage and prototypes live in `_Product/Case-Studies-Library-Design/`.

---

## AI Adoption Guide (v0.5 live — 2026-05-12)

**Live URL:** https://ai.protocolized.dev/ (here.now slug: `plush-muse-q9bz`, custom subdomain)

Interactive slide deck — *Durable AI Adoption* — threading the dual-track thesis (**Governed enables Cultivated**) across 8 chapters with sidebar navigation, snap-scrolled viewport-scaled slides, a 10-case-study appendix, and an embedded 24-question assessment. Mobile-responsive (sidebar collapses to header bar ≤ 768px). LLM-friendly plain-text extract at `ai.protocolized.dev/llms.txt`.

| Document | Purpose |
|----------|---------|
| [html/slides.html](AI-Adoption-Guide/html/slides.html) | **Canonical source** — the slide deck (~4,000 lines, single-page HTML) |
| [html/assessment.css](AI-Adoption-Guide/html/assessment.css), [html/assessment.js](AI-Adoption-Guide/html/assessment.js) | Ported assessment scoped under `.assessment-slide` (IIFE-wrapped, exposes `window.Assessment`) |
| [html/llms.txt](AI-Adoption-Guide/html/llms.txt) | Plain-text extract of deck content for LLM consumption |
| [html/_og-cover.html](AI-Adoption-Guide/html/_og-cover.html) | 1200×630 standalone cover used to render the OG/Twitter social card |
| [AI-Adoption-Guide/README.md](AI-Adoption-Guide/README.md) | Sub-project README with build/deploy commands and deck structure |
| [drafts/deployment-guide-v0.6.md](AI-Adoption-Guide/drafts/deployment-guide-v0.6.md) | Long-form markdown draft mirroring the deck prose |
| [_DEPLOYMENT-GUIDE-BRIEF.md](AI-Adoption-Guide/_DEPLOYMENT-GUIDE-BRIEF.md) | Project brief, hero, thesis, *Kit* respec rationale |

---

## Research (complete)

| Document | Purpose |
|----------|---------|
| [Source catalog](Research/source-catalog.md) | Annotated bibliography — 40 entries across 9 categories |
| [Case studies overview](Research/case-studies-overview.md) | Confirmed-facts-only summary of 9+ case studies |
| [Literature notes](Research/literature-notes.md) | Running research notes |

---

## Project management

| Document | Purpose |
|----------|---------|
| [Milestone log](_MILESTONES.md) | Completed work, key decisions, current status |
| [Workplan](_WORKPLAN.md) | Task list with owners and dependencies |

---

## Prior work

The Protocols for Business Group published a v4 maturity model in January 2026 (`AI Adoption Capability Model Project/AI_Capability_Maturity_Model_v4.docx`). This project revisits and evolves that work with fresh desk research, a Protocolized publication angle, and a litepaper format for broader distribution.
