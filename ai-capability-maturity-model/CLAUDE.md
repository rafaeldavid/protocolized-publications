# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A desk-research and publishing project for the **AI Capability Maturity Model** — a set of web deliverables (slide deck, blog post, litepaper, interactive diagnostic artifact, archetype assessment, case-studies library) about organizational AI adoption. This is a writing/synthesis project, not an application: there is no backend, no framework, no test runner. Each deliverable is one or more **self-contained single-page HTML files** deployed as a static site.

The working directory `ai-capability-maturity-model/` is one sub-project inside the git repo rooted at `protocolized-publications/` (the parent). **Git operations act on the parent repo** — `git status`/commits cover all sibling sites, not just this directory.

`_PROJECT.md` is the project brief; `_MILESTONES.md` tracks current status and decisions; `README.md` is the index of every deliverable with its live URL and status. Read `_MILESTONES.md` before assuming work has advanced.

## The active deliverable: AI Adoption Guide

`AI-Adoption-Guide/` is the current focus — an interactive slide deck (*Durable AI Adoption*) live at https://ai.protocolized.dev/.

**Source of truth:** `AI-Adoption-Guide/html/slides.html` (~260KB single-page HTML). Everything else in `html/` is derived or supporting:

- `sitemap.xml`, `llms.txt`, `llms-full.txt`, `guide.md` are **generated** from `slides.html` by `scripts/generate.mjs` (uses cheerio + a VM sandbox to read `assessment.js`). They carry a "do not edit" header — edit `slides.html`, then regenerate.
- `durable-ai-adoption.pdf` is rendered from `slides.html` via headless Chrome during publish.
- `assessment.css` / `assessment.js` are the ported diagnostic, IIFE-wrapped and scoped under `.assessment-slide` (exposes `window.Assessment`).
- `_og-cover.html` and other `_`-prefixed / `_archive/` files are previews/work-in-progress; the publish step excludes them.

## Build / deploy

The single deploy command regenerates artifacts, renders the PDF, stages `html/` (mapping `slides.html` → `index.html` so the deck is the homepage), and publishes to here.now:

```bash
cd AI-Adoption-Guide/scripts
npm install        # first time only (installs cheerio)
npm run publish    # = bash publish.sh ; deploys to slug plush-muse-q9bz
npm run generate   # regenerate llms.txt/guide.md/sitemap only, no deploy
```

Override the target with `HERENOW_SLUG=<slug> bash publish.sh`. Publishing uses the here.now skill at `~/.claude/skills/here-now/scripts/publish.sh` and credentials at `~/.herenow/credentials`.

Other sub-projects publish directly with the here.now skill (no generate step), e.g. from the parent repo:

```bash
/Users/rafa/.claude/skills/here-now/scripts/publish.sh <dir> --slug <slug> --client claude-code
```

**here.now slugs** (pin the subdomain across publishes):

| Slug | Hosts |
|------|-------|
| `plush-muse-q9bz` | AI Adoption Guide slide deck → ai.protocolized.dev |
| `gleaming-sketch-5q8b` | Web version of the guide → protocolized.dev/aiadoptionguide/ |
| `soulful-cherry-8xr9` | Legacy redirect to the custom domain |

The slides deck and the web index can both embed shared assets (CSS/JS/images); an edit to those should redeploy both `plush-muse-q9bz` and `gleaming-sketch-5q8b`.

## Auto-push convention

For **copy/content edits** to the AI Adoption Guide (slide titles, blog copy, bullet rewording, hero/cover text — anything the audience should see immediately): after editing locally, also commit + push to `main` and redeploy the relevant here.now slug **without asking**. Identify the right slug by content (curl candidates if unsure) before publishing. Does *not* apply to in-progress drafts, exploratory reference docs not yet linked publicly, or structural changes — those warrant explicit confirmation. Commit messages: short imperative present tense (e.g. `Slide 04: rename to "two parallel tracks" framing`).

## Writing style

`_REPORT-STYLE.md` is the binding style guide for all publication prose. Load-bearing rules:

- **Finding first, reasoning second.** Active voice, third person for analysis; "we" only for Protocolized's own choices, never "I".
- **Avoid the AI-writing tics it enumerates:** negative parallelism ("not X — it's Y"), em-dash overuse (≤2–3/page), assertion adverbs (precisely/fundamentally/notably), one-point dilution, fractal summaries, "serves as"/"functions as", bold-first bullets, self-answering rhetorical questions.
- **Publication register** (deck, blog, artifact) must avoid internal vocabulary (YAML DSL, bottleneck heterogeneity, stuck pattern guidance) — write for a deployment manager, not a protocol theorist. Internal docs (model notes, critiques, YAML) may use sharper theory language.
- Sentence-case headers; no underlining, color text, or exclamation points in analytical docs.

## Conventions worth knowing

- Files prefixed `_` are internal/meta (briefs, QC frameworks, milestones, previews). Underscore HTML files in `html/` are excluded from publish.
- `Resources/` PDFs and images are gitignored (tracked by reference in `Research/source-catalog.md`), as are `.herenow/` state files. Don't expect them in commits.
- Some deliverables embed their canonical markdown source in a `<script id="markdown-source" type="text/x-markdown">` block — keep that in sync with the rendered HTML when editing such pages.
- Model definitions live in `Model-Development/ai-cmm-v2.yaml` (the YAML DSL is the model's source of truth); `Artifact/drafts/v1.html` is locked — copy before editing.
