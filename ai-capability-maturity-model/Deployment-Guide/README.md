# Deployment Guide — *Durable AI Adoption*

A single slide deck handbook for deploying AI across an organization, informed by the AI Capability Maturity Model. Threads the dual-track thesis (**Governed enables Cultivated**) across 8 chapters with an interactive assessment in the appendix.

**Status:** v0.5 · May 2026 — live at https://ai.protocolized.dev/ (slug `plush-muse-q9bz`).

## Quick links

- **Live deck:** https://ai.protocolized.dev/
- **Plain-text extract for LLMs:** https://ai.protocolized.dev/llms.txt
- **Take the assessment:** https://ai.protocolized.dev/#assessment

## Canonical source

| Path | Purpose |
|------|---------|
| `html/slides.html` | The slide deck (canonical source) — single-page HTML, ~4000 lines |
| `html/assessment.css`, `html/assessment.js` | Ported assessment (archetype + maturity diagnostic), scoped to `.assessment-slide` |
| `html/llms.txt` | Plain-text extract of deck content for LLM consumption |
| `html/_og-cover.html` | 1200×630 standalone cover used to render the OG/Twitter social card |
| `html/images/` | Hero/level/chapter images sourced from the Protocolized archive |
| `drafts/deployment-guide-v0.6.md` | Long-form markdown draft mirroring the deck prose |

## Build / deploy

The deck is deployed to here.now via:

```bash
./scripts/publish.sh html --slug plush-muse-q9bz --client claude-code
```

(Excluding `_archive/` and substituting `slides.html` → `index.html` so the slide deck is the homepage.)

OG card regenerated from `_og-cover.html` via headless Chrome:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --hide-scrollbars --window-size=1200,630 \
  --screenshot=html/images/og-cover.png "file://$(pwd)/html/_og-cover.html"
```

## Deck structure

- **Foreword** (Ch0) — Everywhere you look, AI is already there
- **Ch1** — Introducing the Adoption Guide (governance-enables-cultivation thesis)
- **Ch2** — Adoption Maturity Levels (5 levels, yin-yang framing, 5 level deep-dives)
- **Ch3** — Getting started (readiness check, plan after play, play→protocol)
- **Ch4** — Path to durable adoption (cultivated→governed handoff)
- **Ch5** — How the Protocol Institute adopts AI (SIGBIZ + visual identity case studies)
- **Ch7** — Success patterns & failure modes
- **Ch8** — The new nature of work
- **About & Resources**
- **Appendix · Case Studies** — 10 cases (5 contemporary, 5 historical analogues)
- **Appendix · Assessment** — 24-question diagnostic → archetype + maturity level

## Sibling sub-projects

- `../assessment/` — standalone assessment page (https://protocolized.dev/assessment/)
- `../case-studies/` — standalone case studies page (https://protocolized.dev/case-studies/)
- `../levels/` — standalone levels page (https://protocolized.dev/levels/)
- `../Litepaper/` — companion litepaper

## Background reading

| Source | Why |
|--------|-----|
| [Claude Cowork Deployment Handbook](../Resources/claude-cowork-deployment-handbook.pdf) | Structural model |
| [AI, tractors, and the productivity paradox](../Resources/AI,%20tractors,%20and%20the%20productivity%20paradox%20-%20by%20Sachin.pdf) | Kit framing |
| [Have Your Factory Call My Factory](../Resources/Have%20Your%20Factory%20Call%20My%20Factory.pdf) | Magazine editorial case study (Rao/Dixon) |
| [Introducing the Protocol Institute](../Resources/Introducing%20the%20Protocol%20Institute.pdf) | Institutional context |
