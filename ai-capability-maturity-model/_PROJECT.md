# AI Capability Maturity Model — Project Brief

**Read this file first.** Master context for this project. Any collaborator or LLM picking up this work should start here, then read `_MILESTONES.md` for current status.

---

## What This Project Is

A desk-research project producing three outputs:

1. **Blog post** — published on Protocolized, accessible framing of the maturity model for a practitioner audience
2. **Litepaper** — 8–12 page downloadable document with the full capability maturity model for AI adoption, targeted at deployment managers and executives
3. **Interactive HTML artifact** — publicly accessible Claude artifact providing a diagnostic tool: readers can explore the five levels, place their organization, and get a summary of failure modes and progression requirements. Product spec and UX planning to follow.

All outputs are grounded in fresh desk research. This is a writing and synthesis project — no interviews, no fieldwork, no client engagement.

---

## The Central Argument (Working Hypothesis)

Most organizations are not failing at AI adoption because they chose the wrong tools. They are failing because they are applying enterprise-software governance logic to a probabilistic, non-deterministic stack. A capability maturity model for AI adoption is different from previous CMMs because **the unit of maturity is not process compliance — it is the organization's ability to govern uncertainty productively**.

The protocol lens: AI tools are coordination mechanisms between humans and probabilistic systems. The friction patterns (shadow adoption, quality risk, trust collapse, over-reliance) are protocol failures — breakdowns in the rules governing how humans and AI systems interact. A maturity model framed this way generates different and more actionable recommendations than one framed around security controls or tooling adoption rates.

---

## Prior Work

**v4 reference doc:** `../AI Adoption Capability Model Project/AI_Capability_Maturity_Model_v4.docx`
- 5-level maturity framework
- Audience: deployment managers
- Focus: shadow AI security risks, AI-generated code quality, level-by-level tensions and interventions
- Published: January 2026, Protocols for Business Group

This project is net new — not a v5. The prior model is a reference point and source of tested framing, not the starting structure. Expect the new model to diverge.

---

## Audiences

**Blog post audience:** Practitioners and managers who are encountering AI adoption friction in their organizations but don't have a framework for diagnosing where they are or what to do next. They read Substack and follow conversations about AI at work. They are not academics or AI researchers.

**Litepaper audience:** Deployment managers and operations/IT executives who need a structured framework they can use in organizational conversations — to benchmark, to plan, to make the case for investment. They will download and share the litepaper. It needs to be specific enough to be useful and credible enough to cite.

---

## Key Research Questions

1. What do the best existing AI maturity models get right, and where do they fall short for organizations deploying generative AI specifically (vs. general enterprise AI)?
2. What are the characteristic failure modes at each level of maturity — and what do organizations protecting themselves from those failures actually do?
3. What does "protocol thinking" add to this framing that existing CMMs miss? Is there a distinctive Protocolized contribution here, or are we synthesizing existing work?
4. What does current empirical evidence (adoption surveys, breach reports, case studies) say about where most organizations are today, and what's blocking them from advancing?

---

## Output Specifications

### Blog post
- Length: ~1,500 words
- Tone: Accessible, opinionated, first-person plural ("we've observed," "the pattern suggests")
- Angle: The protocol framing — what existing AI CMMs miss
- Hook: The shadow adoption paradox (organizations are already at Level 1 whether they planned to be or not)
- Ends with: pointer to litepaper for readers who want the full model

### Litepaper
- Length: 8–12 pages
- Format: Markdown → PDF-ready
- Structure: Problem → Model (5 levels) → Level-by-level guide → How to use this → References
- Each level: name, what it looks like, the characteristic tension, what to do
- Tone: Authoritative, specific, practitioner-ready. No academic hedging.

### Interactive HTML artifact (Claude artifact)
- Format: Single-page HTML, publicly accessible as a Claude artifact
- Function: Diagnostic tool — user steps through the five levels and places their organization; receives a level-specific diagnosis with failure mode and next action
- Source: Content drawn from ai-cmm-v2.yaml; YAML is the source of truth
- Status: **v1.0 deployed** (2026-03-17) — `Artifact/drafts/v1.html`
- UX spec: `Artifact/_ARTIFACT-BRIEF.md`; QC: `Artifact/_ARTIFACT-QC.md`; Layout tests: `Artifact/drafts/layout-test.py`
- Versioning: incremental changes → v1.1, v1.2 (new files); major redesigns → v2.0
- **v1.html is locked** — never edit it; all future work copies it first

---

## Scope Boundaries

**In scope:**
- Desk research on AI adoption patterns, maturity models, organizational behavior
- Synthesis of empirical evidence (surveys, breach data, case studies)
- Original framing using the protocol lens

**Out of scope:**
- Primary research (interviews, surveys)
- Technology stack recommendations
- Vendor comparisons
- Implementation consulting

---

## File Map

```
AI Capability Maturity Model/
├── README.md                      ← Entry point
├── _PROJECT.md                    ← You are here
├── _MILESTONES.md                 ← Current status, decisions
├── _WORKPLAN.md                   ← Task list
├── _REPORT-STYLE.md               ← Writing style guide for all outputs
│
├── Artifact/
│   ├── _ARTIFACT-BRIEF.md         ← Product spec and UX design brief
│   ├── _ARTIFACT-QC.md            ← 22-criterion evaluation framework
│   └── drafts/
│       └── v1.html                ← Interactive diagnostic artifact (v1, ~1,900 lines)
│
├── Research/
│   ├── source-catalog.md          ← Annotated sources
│   └── literature-notes.md        ← Running research notes
│
├── Blog-Post/
│   ├── README.md                  ← Brief and plan for blog post
│   └── drafts/
│
├── Litepaper/
│   ├── README.md                  ← Brief and plan for litepaper
│   └── drafts/
│
└── Resources/                     ← Source PDFs and reference docs
```

---

## How to Continue Work on This Project

1. Read this file for project identity and goals.
2. Read `_MILESTONES.md` for current state.
3. If starting research: read `Research/source-catalog.md` for what's already been gathered.
4. If writing: read the relevant output brief (Blog-Post/README.md or Litepaper/README.md) before drafting.
5. Do not assume work has advanced beyond what `_MILESTONES.md` records.

---

*Last updated: 2026-03-17*
