# Backlog

Parsed items from the `Feedback-Inbox/`. Grouped by theme. Status values: `intake | triaged | planned | shipping | shipped | wont-do`.

All items in this batch sourced from [`Feedback-Inbox/2026-04-24-v1-review.md`](Feedback-Inbox/2026-04-24-v1-review.md) unless noted.

---

## Design / aesthetics

### DESIGN-001 — Aesthetic refresh (whole site)
- **Scope:** New palette + typography + visual system. Exit the "Notion notebook × Big Essay" aesthetic. Direction: move past AI-2026 / LinkedIn boilerplate / Gartner-report look. Add flair/sprezzatura. Less austerly platonic.
- **Rationale:** Current look reads as generic corporate-editorial; reviewer specifically flagged palette + fonts as "lacking in freshness/popping."
- **Open questions:** Reference sites Rafa likes? Willingness to commission a designer vs. iterate via Claude's frontend-design skill?
- **Status:** intake

### DESIGN-002 — Anchor graphics throughout
- **Scope:** Add visual anchors to break up long prose blocks across all four pages (homepage, artifact, litepaper, blog).
- **Rationale:** "Big wall of text energy" — readers need visual scaffolding, not just text hierarchy.
- **Dependencies:** Best tackled after DESIGN-001 so new graphics inherit the new visual system.
- **Status:** intake

### DESIGN-003 — Pyramid diagram, 5 level-highlighted variants
- **Scope:** Core 5-level pyramid with 5 rendered states, each highlighting one level. Used inline on individual level pages and as navigation affordance.
- **Rationale:** Anchor graphic for the model itself. Pairs with IA-001 (individual level pages).
- **Status:** intake

### DESIGN-004 — Master interactive diagram
- **Scope:** Single pyramid diagram with hover/tap text boxes explaining each level.
- **Rationale:** Canonical one-glance view of the model for homepage / about / litepaper hero.
- **Dependencies:** DESIGN-003 (same visual source).
- **Status:** intake

---

## Information architecture

### IA-001 — Split levels into individual pages
- **Scope:** Each of the 5 levels gets its own page/URL (e.g. `/levels/shadow`, `/levels/sanctioned`, ...). Currently all five live inside the artifact page's "context" section.
- **Rationale:** Deep-linkable, sharable, shorter reads per page, better for search/SEO.
- **Open questions:** Keep the consolidated overview too, or replace it with a landing page that links to the five?
- **Status:** intake

### IA-002 — About page
- **Scope:** New top-nav page. Introduces the SIG, names members/contributors with photos, explains the relationship between Protocolized, Protocolized mag, and SOP / Protocol Institute.
- **Rationale:** Reviewer: "It's not obvious why the website is called protocolized.dev." The About page answers the "who are these people and why should I trust them" question.
- **Open questions:** Contributor list + photo permissions. Protocol Institute naming/launch timing — do we say "soon to be" or wait?
- **Status:** intake

### IA-003 — Case Studies page (top-level)
- **Scope:** New top-nav page. Reviewer said "3 paras is enough" — doesn't need depth, just existence and discoverability. Start with the five case studies already researched (GTFS, FHIR, UK Open Banking, Green Button, Australia BOM).
- **Rationale:** Case studies currently live inside the artifact's "cases" section; promoting them gives the neutral-commons brand (BRAND-001) something concrete to point to.
- **Status:** intake

### IA-004 — Lexicon page (stretch)
- **Scope:** Glossary of Protocolized-specific terminology: bespokification, kitification, orientation loss, execution paralysis, vibe coding, archival vs carnival, etc. Each term gets an anchor tag for deep-linking from other pages.
- **Rationale:** Reinforces BRAND-002 (distinctive terminology) and CONTENT-002 (literacy). Reviewer flagged this as "stretch" — lower priority, but high brand value. Note: definitions should be "slightly funny."
- **Status:** intake

### IA-005 — Individual pages pattern for level detail + concepts
- **Scope:** Establish a consistent "detail page" template (used by IA-001 level pages and potentially concept entries in IA-004 lexicon if any graduate to full pages).
- **Rationale:** Consistency across the growing page set. Identified as a template need while parsing.
- **Status:** intake

### NAV-001 — Top-nav expansion
- **Scope:** Expand primary nav to include About (IA-002), Case Studies (IA-003), and Lexicon (IA-004 if shipped). Decide where Litepaper / Blog / Assessment sit in the new hierarchy.
- **Rationale:** Current nav is a flat link list; several reviewer items require new top-level entries.
- **Dependencies:** IA-002, IA-003, IA-004 (what exists to link to).
- **Status:** intake

---

## Assessment

### ASSESS-001 — Shorten response option text
- **Scope:** Rewrite option cards in the assessment as short phrases (headline). Move explanatory detail into smaller secondary text below the headline.
- **Rationale:** "People shouldn't have to read entire paragraphs for 3 options." Scan cost too high.
- **Status:** intake

### ASSESS-002 — Expand to 10+ behavior-focused questions
- **Scope:** Redesign the question set around observable behaviors and symptoms (who does what, how often, with what process), not subjective vibes. Minimum 10 questions.
- **Rationale:** Current 2-step (recognition + scenario) relies on respondent self-categorization. Finer-grained behavior probing yields a more defensible placement.
- **Open questions:** Target ~10, or more? Does the result still map to 5 levels, or do we add sub-levels? Branching or linear flow?
- **Status:** intake

### ASSESS-003 — Per-function assessment (or share-with-leads note)
- **Scope:** Two options from reviewer: (a) repeat the question set in the context of major functions (engineering, marketing, sales); (b) add a note suggesting all major functional leads take the test and compare, with an offer to discuss on a call.
- **Rationale:** Maturity is uneven across functions — current assessment treats the org as monolithic.
- **Open questions:** (a) is a large build; (b) is a 3-line note. Start with (b), ship (a) later?
- **Status:** intake

### ASSESS-004 — Results-page CTAs
- **Scope:** After submitting, add CTAs: (1) share results with an org peer (email/link), (2) schedule a call to discuss (Calendly or email).
- **Rationale:** Converts the completed assessment into a relationship, supports the consulting practice. "See all levels" button is already shipped; these go alongside it.
- **Open questions:** Calendly vs. email-based scheduling? Whose calendar?
- **Status:** intake

---

## New features

### FEATURE-001 — Tooling evaluator
- **Scope:** A secondary assessment (or sidecar to the main one) that slots specific AI tools into maturity levels. Reviewer's examples: Claude Code = Designed, Copilot + Cursor = Sanctioned, retail ChatGPT = Shadow.
- **Rationale:** "People will be starting with tools." This is the on-ramp for readers who don't yet think in org-level maturity terms. Likely the highest-traffic entry point.
- **Open questions:** Static tool-→-level mapping, or does user input affect placement? How do we update as the tool landscape shifts?
- **Status:** intake

### FEATURE-002 — Embedded visual slide deck
- **Scope:** HTML-based slide deck embedded in the site. Primarily visual. "No text longer than a fortune cookie."
- **Rationale:** Different reader mode — skimmable, presentation-ready, shareable as a single artifact. Complements the long-form litepaper.
- **Open questions:** Where does it live — own page, or section on homepage? Reveal.js / swipe-nav / scroll-driven?
- **Status:** intake

---

## Content

### CONTENT-001 — Kitification as a named concept
- **Scope:** New conceptual addition: kits as the intermediate state between off-the-shelf AI tooling and bespoke internal software. "Earlier you build sophisticated internal software, now you develop software kits (combination of design choices, harnesses) that can be used to build bespoke tools."
- **Rationale:** Reviewer flagged as "a good one." Fills a conceptual gap in the maturity model and gives a handle for the 2026 reality of Claude Code / Cursor / MCP-driven workflows.
- **Open questions:** Does kitification map to a specific maturity level (probably Designed → Infrastructural transition)? Or is it a cross-cutting concept? Needs thinking before insertion.
- **Dependencies:** May affect ASSESS-002 (new behaviors to probe) and IA-001 (level definitions may shift).
- **Status:** intake

### CONTENT-002 — Teach the language / CMM literacy
- **Scope:** Explicit onboarding content that teaches the reader how to read the model — vocabulary, mental models, how levels differ. Could be a dedicated page, a sidebar, or baked into the homepage.
- **Rationale:** Reviewer: "Teach the language and CMM literacy." Current site assumes readers can ingest the whole frame from the litepaper; most won't.
- **Dependencies:** IA-004 (lexicon) covers terminology; this is broader — about the model itself.
- **Status:** intake

---

## Brand / messaging

### COPY-001 — Tagline: "Protocols for AI adoption"
- **Scope:** Add tagline on homepage hero (and possibly across site chrome). Makes the `protocolized.dev` name self-explanatory.
- **Rationale:** Reviewer quoted exact copy. Low-effort, high-clarity.
- **Status:** intake

### BRAND-001 — Lean into neutral-commons positioning
- **Scope:** Across voice, About page (IA-002), and visual design (DESIGN-001), position the SIG as a W3C-style working group / open knowledge commons — explicitly not vendors, not Big 3 consulting, not Gartner. Cross-cuts multiple surfaces.
- **Rationale:** Reviewer: "The SIG brand is high-value neutrality... Avoid looking like Gartner."
- **Dependencies:** Informs DESIGN-001, IA-002, copy across all pages.
- **Status:** intake

### BRAND-002 — Amplify distinctive terminology
- **Scope:** Use Protocolized's original mental models and terms more visibly in headlines, pull quotes, and section labels (archival vs. carnival; bespokification; kitification; orientation loss; etc.). Tied to IA-004 (lexicon) and CONTENT-001 (kitification).
- **Rationale:** Reviewer flagged this as a core brand strength currently underused: "A big strength in how you guys are thinking about this is creative and original mental models and terminology. Use it."
- **Status:** intake

---

## Observations / monitoring infrastructure

### OBS-001 — Seed `_Observations/research/` from litepaper bibliography
- **Scope:** Ingest the remaining ~35 bibliography entries in `Litepaper/litepaper-bibliography.md` as research observations matching the `research/_TEMPLATE.md` shape. Three are already seeded (Samsung, Klarna, Menlo).
- **Rationale:** Establishes the primary-source corpus the weekly brief can cite into. Without it, each weekly scan starts from zero context.
- **Open questions:** Batch all at once, or ingest priority-first (canonical cases cited by the artifact + litepaper hero sections)? Recommend priority-first: ~10 more to hit the items referenced on the live pages.
- **Dependencies:** None — can proceed any time.
- **Status:** intake

### OBS-002 — Weekly scan automation (mechanism decision + wire-up)
- **Scope:** Build the recurring agent that scans the past week's AI workforce/adoption news, writes a brief to `_Observations/weekly-briefs/YYYY-WW-scan.md`, proposes a lede update, and commits to the repo. Also manually triggerable by Rafa.
- **Rationale:** Core MVP described in the 2026-04-24 planning session. Template (`_TEMPLATE.md`) and lede history are in place; agent itself still needs a runtime.
- **Open questions (blockers):**
  - Which repo? (`protocolized-publications` vs existing `protocols-AI-capability-maturity-model`)
  - Which runtime? Options: (a) Claude Code scheduled routine via `schedule` skill, (b) GitHub Actions cron calling Anthropic API, (c) local launchd + script. Recommend (a) for speed to MVP; migrate to (b) when stable.
  - Credentials: scheduled agent needs write access to the repo. SSH key, fine-grained GitHub PAT, or GitHub App?
- **Dependencies:** Repo migration decision.
- **Status:** intake

### OBS-003 — Lede accept-and-deploy runbook
- **Scope:** Small script (or documented steps) to take an accepted lede from a weekly brief → update the artifact `index.html` → republish `thorny-basin-5xkf` → append to `lede-history.md` in one command.
- **Rationale:** Keeps the deploy step explicit and auditable while removing the manual find-and-replace. Prevents the lede-history log from drifting out of sync with what's deployed.
- **Dependencies:** None strictly, but most useful once OBS-002 ships.
- **Status:** intake
