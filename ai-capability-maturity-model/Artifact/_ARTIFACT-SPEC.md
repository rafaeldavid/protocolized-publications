# AI CMM Interactive Artifact — Product Specification

**Version:** 1.0
**Date:** 2026-03-16
**Status:** Ready for build
**Source of truth for content:** `../Model-Development/ai-cmm-v2.yaml`
**Design reference:** `../Resources/1771868260061.jpeg` (Protocolized visual style)
**Build target:** Single HTML file — `drafts/v1.html`

---

## 1. Product summary

A standalone diagnostic tool for senior operations and deployment executives. The user arrives cold, with no prior knowledge of the model. They leave with three things: a level placement, a named failure mode specific to that level, and a concrete first action — formatted for print or email.

**Primary user:** Senior VP of Operations, Deployment, or equivalent. Educated in AI and protocol concepts. Not here to learn about AI; here to understand their organization's position relative to it.

**Session length:** 8–10 minutes on the fast path. 15–18 minutes with full drill-down. Both paths produce the same three outputs; the drill-down produces more supporting context.

**No backend. No state persistence between sessions. All logic is client-side JavaScript.**

---

## 2. Visual design system

**Reference:** `../Resources/1771868260061.jpeg` — Protocolized Substack aesthetic.

### Color palette
Source: Protocolized substack (https://protocolized.summerofprotocols.com/)
```
Background:       #FAFAFA (off-white — substack background)
Surface:          #F0F0F2 (light gray cards)
Border:           #E5E5E7 (subtle card borders)
Text primary:     #1A1A2E (near-black, deep navy)
Text secondary:   #6B6B7B (gray for labels and secondary copy)
Accent:           #A888BF (lavender-purple — substack primary accent)
Accent light:     #F3EEF7 (accent background for highlighted elements)
Accent dark:      #7D5A96 (hover states, strong emphasis)
Danger/warning:   #C0392B (failure mode indicators)
Success:          #27AE60 (progression indicators)
```

### Typography
Source: Protocolized substack uses Roboto Mono for headings
```
Heading font:  "Roboto Mono", monospace — 700 weight
               Load from Google Fonts
Body font:     "Inter", system-ui, -apple-system, sans-serif
               Load from Google Fonts (400, 500, 600)

Heading XL:  Roboto Mono 700, 2.5rem, line-height 1.2  — Hero headline
Heading L:   Roboto Mono 700, 1.75rem, line-height 1.3 — Section titles
Heading M:   Roboto Mono 600, 1.25rem, line-height 1.4 — Card titles, level names
Body:        Inter 400, 1rem, line-height 1.65          — Body copy
Small:       Inter 400, 0.875rem, line-height 1.5       — Labels, metadata
Label:       Inter 600, 0.75rem, uppercase, 0.08em LS   — Category labels
```

### Wordmark
```
Text:     "Protocolized"
Tagline:  "The Magazine of Strange Rules"
Font:     Roboto Mono 700
Color:    #1A1A2E on light backgrounds
Treatment: typographic only — no separate icon or logomark
```

### Component conventions
- Cards: `border-radius: 12px`, `border: 1px solid #E5E5E7`, `padding: 24px`
- Buttons primary: accent fill, white text, `border-radius: 8px`, `padding: 12px 24px`
- Buttons secondary: white fill, accent text and border
- Level pills: accent background (#EEF0FF), accent text, `border-radius: 999px`, `padding: 4px 12px`
- Max content width: `860px`, centered
- Section vertical spacing: `80px` between major sections

---

## 3. Page architecture

The page has six sections rendered in sequence. All sections are visible on scroll (no routing, no multi-page). An optional sticky navigation bar allows jump-to for return visitors.

```
┌─────────────────────────────────────┐
│  NAV (sticky, minimal)              │
├─────────────────────────────────────┤
│  1. ENTRY                           │  — Hook + CTA
├─────────────────────────────────────┤
│  2. CONTEXT                         │  — Model framing + 5-level arc
├─────────────────────────────────────┤
│  3. CASE STUDIES                    │  — Three mirrors (L1, L2, L3)
├─────────────────────────────────────┤
│  4. ASSESSMENT                      │  — Recognition → Scenario
├─────────────────────────────────────┤
│  5. OUTPUT                          │  — Level result + failure mode + actions
├─────────────────────────────────────┤
│  6. EXIT                            │  — Subscribe + Contact placeholder
└─────────────────────────────────────┘
```

---

## 4. Section specifications

---

### Section 1 — Entry

**Purpose:** Earn the VP's attention in under 30 seconds. Make them feel recognized before they've read a paragraph.

**Layout:** Full-width hero. Text centered. Vertical padding `120px` top, `80px` bottom.

**Content:**

```
[LABEL] PROTOCOLS FOR BUSINESS — AI CAPABILITY MATURITY MODEL

[HEADLINE — XL]
Most organizations are already at Level 1.
They just don't know it yet.

[SUBHEAD — body, max-width 580px, centered]
71% of enterprise employees use unauthorized AI tools.
The average organization discovers this 400 days after it starts.
This tool takes 10 minutes. It places your organization on the
five-level maturity model and tells you what to do next.

[BUTTON — primary]
Find out where you are →

[SECONDARY TEXT — small, secondary color]
No signup required. Used by deployment managers and operations executives.
```

**Interaction:** "Find out where you are" button smooth-scrolls to Section 4 (Assessment). The VP can also scroll naturally through Sections 2 and 3 first.

**Visual note:** No images in this section. The numbers (71%, 400 days) carry the weight. They are sourced from catalog entry 34 and appear in the YAML `empirical_anchors` block.

---

### Section 2 — Context

**Purpose:** Establish what this model is and why it's different from general AI maturity frameworks. Short — the VP should be able to read this in 90 seconds.

**Layout:** Two-column on desktop. Left: text block. Right: five-level arc visual.

**Left column content:**

```
[LABEL] WHY THIS MODEL EXISTS

[HEADING M]
AI adoption fails as a protocol problem, not a tool problem.

[BODY — max 4 short paragraphs]
Most organizations apply enterprise-software governance logic
to AI — policies, compliance controls, tooling checklists.
That logic was designed for deterministic processes. AI
systems are probabilistic. The mismatch produces the
characteristic failures: shadow adoption, quality floor
collapse, liability exposure.

The unit of maturity in this model is not process compliance.
It is the organization's ability to govern uncertainty
productively — to define which AI outputs require human
verification, to enforce that oversight, and to learn from
failures.

Levels 1–3 describe organizational states. Levels 4–5
describe what happens when AI governance shifts from
organizational to industry to civilizational scale.
Most organizations are at Level 1 or 2.

[LINK — secondary style]
Based on desk research across 35 sources including Klarna,
Samsung, Uber, Boom Supersonic, and Venkatesh Rao's
protocol theory. ↗
```

**Right column content — Five-Level Arc Visual:**

A vertical stack of five numbered cards, small and compact. Each card shows:
```
[LEVEL NUMBER — accent color]  [LEVEL NAME — heading M]
[TAGLINE — small body, one line]
```

Level 5 cards are visually dimmed (opacity 0.5) with a label "Projected — no confirmed cases as of 2026."

The five levels:
```
1  Shadow         — AI is in use. The org doesn't know how, by whom, or with what data.
2  Sanctioned     — Access granted. No governing protocol designed.
3  Designed       — Workflows built around AI. Business model depends on them.
4  Infrastructural — AI is sector infrastructure. (Projected)
5  Planetary      — AI governs civilizational coordination. (Projected)
```

**Drill-down toggle (optional):** A small "Read more about this model" link expands an inline block with the central argument from the YAML. Hidden by default. Does not affect the fast path.

---

### Section 3 — Case Studies

**Purpose:** Make the problem concrete. Three cases, three levels. Each card is a mirror — the VP should recognize a situation they've encountered or fear encountering.

**Layout:** Three cards side by side (desktop) or stacked (mobile). Each card is self-contained.

**Card structure:**
```
[LEVEL PILL — e.g., "Level 1"]
[ORG NAME — heading M]
[SECTOR LABEL — small, secondary]

[WHAT HAPPENED — body, 60–80 words]
  Factual summary only. No analysis.

[THE PATTERN — body, italic, 20–30 words]
  One sentence naming the mechanism.

[THE DIAGNOSTIC QUESTION — body, accent color]
  A direct question to the reader.
  Phrased in second person.

[DRILL-DOWN TOGGLE]
  "See what happened next ↓"
  Expands to ~120 additional words covering
  consequences and the level-specific failure mode.
```

**Card 1 — Samsung, Level 1:**
```
LEVEL 1                     Samsung Electronics
TECHNOLOGY / SEMICONDUCTOR

Three engineers submitted proprietary source code and
meeting transcripts to personal ChatGPT accounts within
one month. No policy existed. Samsung had no visibility
into what data had left the organization until after
the fact. The data could not be recalled.

The mechanism: when governance is absent, exposure is
invisible until it isn't.

Do you know which AI tools your employees are using today
— and which organizational data they've submitted to those tools?

[DRILL-DOWN]
Samsung banned all external AI tools, built an internal
LLM (Samsung Gauss), then selectively re-admitted external
tools under a governed protocol over the following two years.
The arc — incident → ban → internal alternative → governed
re-admission — is the most documented Level 1 exit path
available. Most organizations skip directly to re-admission
without building the governing protocol in the middle.
```

**Card 2 — Klarna, Level 2:**
```
LEVEL 2                     Klarna
FINANCIAL TECHNOLOGY

90% daily AI adoption in the first month. Two-thirds of
customer service handled by AI. $40M in claimed profit
improvement. Twelve months later, the CEO reversed course
and began rehiring human agents, citing quality failures
the absent governance layer could not address.

The mechanism: the mandate produced adoption; adoption
revealed quality failures; quality failures required
protocol; designing protocol required slowing adoption;
leadership didn't want to slow adoption.

When your AI produces a wrong answer in a customer-facing
workflow, does a defined process exist for catching it —
or does someone fix it when they notice?

[DRILL-DOWN]
The Klarna case illustrates the Level 2 financial indicator
paradox: strong results accumulate at the same time as
governance failures, making the gap invisible until it
becomes external-facing. Klarna's IPO completed September
2025 at $17–19B. The quality reversal and the financial
success happened simultaneously — which is precisely the
condition the maturity model is designed to diagnose
before the reversal, not after.
```

**Card 3 — Boom Supersonic, Level 3:**
```
LEVEL 3                     Boom Supersonic
AEROSPACE / MANUFACTURING

mkBoom automates full aircraft structural analysis from a
parametric configuration file. The design methodology
depends on it. Removing AI from Boom's core workflows
would require rebuilding them. A discovery (Boomless Cruise)
that would have taken months of analysis was found through
cheap iteration. Zero safety incidents across the XB-1
program.

The mechanism: when AI is embedded in the competitive
position, the governance question shifts from controlling
use to designing protocols that handle failure, versioning,
and external dependencies without losing the speed advantage.

If your primary AI-assisted workflow stopped working
tomorrow — would you pause it, or rebuild it?

[DRILL-DOWN]
Boom is a late Level 3 case, not Level 4 or 5. Their
business model depends on AI; the aerospace industry does
not depend on Boom's approach. This distinction matters:
Level 3 is organizational competitive reliance. Level 4
is when the industry itself cannot function at standard
productivity without AI. Boom is the clearest documented
example of a company that designed its governance protocol
alongside its AI capability — not after a failure forced it.
```

---

### Section 4 — Assessment

**Purpose:** Place the user's organization at a level. Produce a placement accurate enough to be actionable.

**Layout:** Centered single column, max-width 680px. Each step occupies the full width. Step indicator at top (Step 1 of 2 / Step 1 of 3 on the fast path).

**Assessment flow:**

#### Step 1 — Recognition

**Instruction text:**
```
Read the three descriptions below. Select the one that most
closely describes your organization right now — not where
you'd like to be, or where you were six months ago.
```

Three option cards, mutually exclusive. Each card shows a set of observable indicators:

**Option A — Level 1–2 range:**
```
AI tools are in active use, but the organization has limited
visibility into which tools, by which teams, on which account
types. No formal data boundary policy governs what can be
submitted to external AI services. When AI produces a wrong
answer, the response is case-by-case — whoever notices it
fixes it. There is no defined process.
```

**Option B — Level 2–3 range:**
```
Enterprise AI licenses have been rolled out broadly.
AI use is encouraged or mandated. At least one team has
started designing workflows around AI outputs. But
governance is uneven: some workflows have review criteria,
others don't. Quality failures in AI-assisted work are
handled inconsistently across teams.
```

**Option C — Level 3+ range:**
```
At least one core workflow has been deliberately designed
around AI — with a named owner, a quality metric, and a
defined escalation path when it fails. Removing AI from
that workflow would require rebuilding it. The organization
can describe its verification protocol for that workflow
without consulting a policy document.
```

**Selection behavior:** On selection, the card highlights (accent border, accent light background). A "Continue →" button appears below.

**Provisional placement logic:**
- Option A selected → provisional Level 1 or 2
- Option B selected → provisional Level 2 or 3
- Option C selected → provisional Level 3

---

#### Step 2 — Scenario (precision confirmation)

**Content varies by Step 1 selection.**

**Instruction text:**
```
One scenario to confirm your placement.
```

---

**If Option A was selected:**

```
Your team lead mentions that an AI tool produced an incorrect
summary that went into a client report. The error was caught
by the client, not internally.

What happens next in your organization?

  ○  There is no defined process — it gets handled
     ad hoc and people move on

  ○  It gets escalated, but who handles it and
     how they handle it depends on who's in the room

  ○  A defined review protocol exists for that workflow;
     the failure triggers a specific response and a
     record is created
```

Mapping:
- First option → **Level 1**
- Second option → **Level 2**
- Third option → escalate to Option B territory; re-run Step 2 with Option B scenario

---

**If Option B was selected:**

```
Your organization mandated AI adoption six months ago.
Leadership wants to know: what's the governance status?

Which of these is closest to the honest answer?

  ○  We have a policy document. Enforcement
     is inconsistent — it depends on the team.

  ○  One or two teams have designed their
     workflow around AI with real accountability.
     Most teams haven't.

  ○  Multiple core workflows are designed,
     owned, and tracked. We have quality
     metrics for at least two of them.
```

Mapping:
- First option → **Level 2**
- Second option → **Level 2–3 boundary**
- Third option → **Level 3**

---

**If Option C was selected:**

```
The AI tool your primary workflow depends on releases
a model update. Output characteristics shift subtly —
the failure modes are different from the previous version.

What happens in your organization?

  ○  The review protocol stays the same.
     Someone might notice the change over time.

  ○  The team that owns the workflow evaluates
     the update before deploying. The protocol
     is reviewed and adjusted if needed.

  ○  Governance protocols are versioned with
     tooling changes. Multiple workflows are
     evaluated and updated on a defined schedule.
```

Mapping:
- First option → **Level 2–3 boundary** (designed workflow, ungoverned updates — typical late Level 2)
- Second option → **Level 3**
- Third option → **Level 3–4 boundary**

---

**Step 2 completion:** Selection triggers the placement. A brief transition (not a loading spinner — just a 600ms pause with "Analyzing your placement...") then smooth-scrolls to Section 5.

**Fast path:** Steps 1 and 2 are the complete fast-path experience. Total time: 3–4 minutes. Full output rendered below.

---

### Section 5 — Output

**Purpose:** Deliver the three outputs: placement, failure mode, action. Everything above this section was in service of this.

**Layout:** Centered, max-width 680px. Structured as a printable card. The output section is the only part of the page that renders in print mode.

**Output card structure:**

```
─────────────────────────────────────────────

  LEVEL [N]
  [LEVEL NAME — large, accent color]
  [TAGLINE — body, italic]

─────────────────────────────────────────────

  WHERE YOU ARE
  [2-paragraph description written in second person.
   Pulls from level description in YAML, condensed to
   120–150 words. "Your organization has..." not
   "Organizations at Level 2..."]

─────────────────────────────────────────────

  THE RISK YOU'RE MOST EXPOSED TO
  [FAILURE MODE NAME — heading M, danger color]
  [Failure mode description — 80–100 words.
   Level-specific. Concrete enough to recognize.
   Sourced from primary failure mode for that level.]

─────────────────────────────────────────────

  THE FIRST ACTION
  [ACTION — heading M]
  [Specifics — 60–80 words]
  [DONE WHEN: — label + one sentence]

─────────────────────────────────────────────

  YOUR POSITION
  [Five-level arc, horizontal. User's level
   highlighted in accent color. Others in
   surface gray. Level names labeled below each.]

─────────────────────────────────────────────

  [BUTTON — primary]  Print this result

  [BUTTON — secondary]  Email this to myself

  [LINK — secondary]  Retake the assessment

─────────────────────────────────────────────
```

**Content mapping — output by level:**

**Level 1 output:**
```
WHERE YOU ARE
Your organization is at the default starting position — not
a failure, but a baseline every organization passes through.
AI tools are in active use, but without a governing protocol:
no inventory of which tools, no reviewed data handling terms,
no boundary on which data can be submitted externally.
The 400-day average discovery lag means you may already have
exposure you haven't found yet.

RISK: Data leakage to third-party AI services
Employees with access to confidential data and personal AI
accounts have the means to create permanent IP exposure right
now. The data submitted to consumer AI services cannot be
recalled. The typical organization discovers this 400+ days
after it starts — long after the data has been processed.
Samsung, April 2023: three engineers, three incidents, one month.

FIRST ACTION: Conduct an AI tool inventory
Ask five employees in different functions what AI tools they
use for work and which are personal accounts. If IT cannot
independently answer this question, that gap is your
immediate priority.
DONE WHEN: IT can name all AI tools in active use and the
account type for each.
```

**Level 2 output:**
```
WHERE YOU ARE
Your organization has done the right thing: granted broad AI
access and signaled strategic commitment. The failure mode
at this level is not the mandate — it is executing a mandate
without designing the governing protocol. Which workflows
use AI, with what review process, what quality standard, and
what happens when AI fails. Financial metrics at Level 2 are
a lagging indicator: governance failures accumulate faster
than they show up in output volume numbers.

RISK: Quality floor collapse
AI replaces a human step that was simultaneously a production
step and a quality check. Production volume increases; the
quality check disappears. The gap is invisible in output
volume metrics and visible in product quality or customer
satisfaction — but only once it surfaces externally, not
before. Klarna's reversal happened after the financial
results were already strong.

FIRST ACTION: Design one AI-native workflow end-to-end
Select a function where AI is already in use. Document the
full workflow: what AI does, what the human reviews, what
constitutes acceptable output, and what the escalation path
is for failures.
DONE WHEN: One workflow is documented, has a named owner,
and reviewers can state what they're checking and why.
```

**Level 3 output:**
```
WHERE YOU ARE
Your organization has crossed the line from AI adoption to
AI dependency — your competitive position relies on designed
workflows, not ad hoc use. The governance question has
shifted: you are no longer trying to control AI use, you
are designing protocols that handle failure, versioning, and
external dependencies without losing the speed advantage AI
provides. The limiting constraint is no longer AI capability.
It is domain expertise — the knowledge required to specify
what good output looks like in your specific context.

RISK: Temporal divergence breakdown
AI accelerates internal production faster than external
dependencies can absorb. Review queues fill faster than
reviewers can process them. The bottleneck has moved from
production to coordination. Slacker Index: measure total
lead time divided by actual AI working time. A ratio above
5:1 means the bottleneck is downstream coordination, not
the AI workflow.

FIRST ACTION: Measure and address temporal divergence
Calculate the Slacker Index for your primary AI workflow.
Where the ratio exceeds 5:1, identify the downstream
bottleneck — review queue, approval chain, handoff delay —
and redesign the coordination protocol, not the AI step.
DONE WHEN: Slacker Index below 5:1 for primary workflow;
bottleneck owner named.
```

**Level 2–3 boundary output:**
```
[Same structure as Level 2 output, but WHERE YOU ARE
 paragraph acknowledges the boundary position:
 "You're at the transition between Level 2 and Level 3.
 At least one workflow is designed — you have the
 foundations. What's missing is consistency across
 workflows and a quality measurement system that
 makes the governance protocol durable, not just present
 in one team."]

[RISK and FIRST ACTION: same as Level 2]
```

**Level 3–4 boundary output:**
```
[Same structure as Level 3 output, with WHERE YOU ARE
 noting the boundary. FIRST ACTION shifts to platform
 abstraction: "Build a platform feedback loop — evaluate
 each new AI implementation for reusability before it
 becomes a custom silo."]
```

---

**Print behavior:**
- `@media print`: hide all sections except Section 5 output card
- Remove buttons, retake link
- Add Protocolized URL and date at the bottom of the print card
- Ensure level arc visual renders in black-and-white (use borders instead of color fill as fallback)

**Email behavior:**
- mailto: link with pre-populated subject and body
- Subject: `AI Maturity Assessment — [Level Name]`
- Body: plain-text version of the output card content
- All three outputs (placement, failure mode, action) included in the email body
- Protocolized subscribe URL included at the bottom of the email body

**Drill-down from output (progressive disclosure):**
Below the output card, a collapsed section titled "More on Level [N]" expands to show:
- Full characteristic tension (both poles + context from YAML)
- All failure modes for that level (not just the primary one)
- Full progression requirements list
- Historical parallel (period technology + containerization throughline for that level)
- Case anchors for that level

This is the 15–18 minute path. Content pulled directly from YAML. No new claims introduced.

---

### Section 6 — Exit

**Purpose:** Two CTAs. Low friction. Not a hard sell.

**Layout:** Two-column card. Left: Subscribe. Right: Contact placeholder.

**Left card:**
```
[HEADING M] Go deeper on protocol thinking

The Protocolized newsletter covers AI adoption, organizational
governance, and protocol design for practitioners.

[BUTTON — primary]
Subscribe to Protocolized ↗
[links to: https://protocolized.summerofprotocols.com/]
```

**Right card:**
```
[HEADING M] Working through this with your team?

If you're navigating Level 2 or 3 and want a structured
conversation about what to do next, we're available.

[BUTTON — secondary — PLACEHOLDER]
Get in touch
[mailto: placeholder — to be replaced with form/Formspree integration]

[SMALL TEXT — secondary color]
⚠ Contact form integration pending. Currently opens email client.
[Note visible in dev/staging only — hide in production or keep as honest
 disclosure per user preference]
```

---

## 5. Navigation bar (sticky)

**Visible once user scrolls past the Entry section.**

```
[LOGO/WORDMARK — "Protocolized"]     [NAV LINKS — right-aligned, small]
                                      Context · Cases · Assessment · Subscribe
```

Navigation links smooth-scroll to their respective sections. Assessment link always visible. On mobile, collapse to hamburger or drop the nav links entirely (just keep logo).

---

## 6. Assessment logic — complete decision tree

```
START
  │
  ├─ Step 1: Recognition
  │    │
  │    ├─ Option A (L1–2 range)
  │    │    └─ Step 2A: Scenario
  │    │         ├─ "No process" → PLACE: Level 1
  │    │         ├─ "Ad hoc escalation" → PLACE: Level 2
  │    │         └─ "Defined protocol" → Re-run Step 2B
  │    │
  │    ├─ Option B (L2–3 range)
  │    │    └─ Step 2B: Scenario
  │    │         ├─ "Policy, inconsistent" → PLACE: Level 2
  │    │         ├─ "One or two teams designed" → PLACE: L2–3 boundary
  │    │         └─ "Multiple workflows tracked" → PLACE: Level 3
  │    │
  │    └─ Option C (L3+ range)
  │         └─ Step 2C: Scenario
  │              ├─ "Protocol stays same" → PLACE: L2–3 boundary
  │              ├─ "Team evaluates update" → PLACE: Level 3
  │              └─ "Versioned governance" → PLACE: L3–4 boundary
  │
OUTPUTS: Level 1 / Level 2 / L2–3 boundary / Level 3 / L3–4 boundary
```

**Note on Levels 4 and 5:** These levels appear in the five-level arc visual (Section 2) and in the output card's position indicator (Section 5), but are not assessment outcomes. No VP self-assesses at Level 4 or 5 — the model correctly notes these are emerging or projected states. If a user is genuinely at Level 3–4 boundary, the output acknowledges the transition and points toward Level 4 indicators without claiming placement there.

---

## 7. Content source mapping

All content in the artifact is drawn from `ai-cmm-v2.yaml`. No new claims are introduced. Mapping:

| Artifact section | YAML source |
|------------------|-------------|
| Entry stats | `model.empirical_anchors` |
| Context framing | `model.central_argument`, `model.protocol_lens` |
| Five-level arc | `levels[*].name`, `levels[*].tagline` |
| Case study cards | `levels[1–3].case_anchors` |
| Assessment options | `levels[*].observable_indicators` (condensed) |
| Output — Where you are | `levels[*].description` (condensed, second person) |
| Output — Risk | `levels[*].failure_modes[0]` (primary failure mode) |
| Output — Action | `levels[*].progression_requirements[0]` |
| Drill-down content | Full level definition blocks |
| Historical parallels | `levels[*].historical_parallels` |

---

## 8. Technical requirements

**File:** Single `.html` file. All CSS and JavaScript inline or in `<style>` and `<script>` tags. No external dependencies except:
- Google Fonts (Inter) — single `<link>` tag, single weight load
- No frameworks (no React, Vue, jQuery)
- No external CSS libraries

**JavaScript scope:**
- Assessment step logic (show/hide, option selection, placement calculation)
- Smooth scroll behavior
- Drill-down toggle (expand/collapse)
- Email mailto: generation (pre-populate subject and body from placement result)
- Print trigger

**Print stylesheet:** `@media print` block that hides all sections except Section 5. Output card renders in black and white with border fallbacks for color elements.

**Responsive breakpoints:**
- Desktop: ≥ 900px — two-column layouts (Context section, Exit section)
- Tablet: 600–899px — single column, card layout preserved
- Mobile: < 600px — single column, reduced padding, nav links hidden

**Claude artifact compatibility:**
- No `localStorage` or `sessionStorage` (not needed — no state persistence between sessions)
- No `fetch` or external API calls
- No iframes
- Self-contained: entire experience works within the artifact sandbox

---

## 9. Future improvements (placeholder items)

The following are out of scope for v1 but should be documented in the code as `<!-- TODO: -->` comments:

| Item | Notes |
|------|-------|
| Contact form backend | Replace mailto: with Formspree endpoint or Netlify Forms; optionally write to a GitHub-hosted CSV via GitHub Actions workflow dispatch |
| State URL encoding | Encode assessment result in URL hash so a specific result can be shared/bookmarked |
| Sector personalization | Add sector selection at start of assessment; surface sector-specific case anchor alongside generic set |
| Return visit detection | localStorage flag to show "Welcome back — your last result was Level 2" |
| Analytics | Plausible or Fathom event tracking (privacy-preserving) for completion rate, level distribution, drop-off points |
| Litepaper link | Once litepaper is published, add download CTA to output card and exit section |

---

## 10. Open decisions — resolved 2026-03-16

| # | Decision | Resolution |
|---|----------|------------|
| 1 | Contact button | Links to Protocolized subscribe URL (same as subscribe CTA): https://protocolized.summerofprotocols.com/ |
| 2 | Five-level arc | Purely visual — no hover interaction |
| 3 | Failure modes on output card | Show all applicable failure modes per level (L1: 2, L2: 4, L3: 4) — up to 5 max |
| 4 | Wordmark | "Protocolized" in Roboto Mono 700, text-only — extracted from substack |

---

*Last updated: 2026-03-16*
