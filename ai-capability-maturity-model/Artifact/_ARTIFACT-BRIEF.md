# AI CMM Interactive Artifact — Design Brief

**Purpose:** Define the product before building it. This document governs every design and content decision in the artifact.
**Audience for this doc:** Anyone building or reviewing the artifact
**Artifact target audience:** Senior operations or deployment VP

---

## 1. Who this is for

**The user is a senior VP of operations, deployment, or a functional equivalent.** This means:

- They have budget authority and organizational influence, but not always technical depth
- They are already experiencing the problem — AI tools are in use, something is going wrong or about to go wrong, and they don't have a precise vocabulary for it
- They read quickly and scan before committing. If the first screen doesn't earn their attention, they leave
- They do not want to be sold to. They want to be diagnosed
- They are not here to learn about AI. They are here to understand their organization's position relative to it
- They will share this with peers, their CEO, or their CTO if it gives them language for a problem they've been unable to name. **The artifact must be forwardable**
- They have 10–15 minutes. That is the time budget for the full experience

**What they bring to this page:**
A vague, nagging sense that "we're doing AI wrong" or "we're behind" or "we spent money on this and I'm not sure what we got." They may have a specific incident in mind (a quality failure, a leaked data story they read about, a mandate that produced compliance theater rather than genuine adoption). They are looking for a mirror that shows them what they're dealing with.

**What they should leave with:**
A precise name for where their organization is, a specific failure mode to watch for, and one concrete first action — stated specifically enough that they could put it in a meeting agenda.

---

## 2. Design philosophy

### 2.1 Recognition, not education

The artifact does not teach a framework. It holds up a mirror. The user should read a level description and think "that's us" — not "I learned something new." The model's value is in naming a condition the user has already observed but couldn't articulate.

This means: observable indicators are more important than theoretical framing. Lead with the concrete. The theory comes second.

### 2.2 Diagnosis, not a score

The prior version of this model produced a score (a number on a 15–45 scale). A score is not a diagnosis. A diagnosis does three things: places the organization, identifies the specific stuck point, and points to the intervention. The artifact must do all three.

Do not gamify. No progress bars, no scores, no "you're 73% of the way to Level 3." This is a clinical tool. It should feel like a rigorous professional assessment, not a quiz.

### 2.3 The failure mode is the hook

The most useful thing this model offers is naming what goes wrong at each level before it happens. The characteristic failure modes — quality floor collapse, mandate without criteria, temporal divergence breakdown — are the artifact's most distinctive content. They should be surfaced early and prominently. An ops VP who recognizes their current failure mode as a level-specific, diagnosable pattern is already sold.

### 2.4 Earned progression

The user should not be able to skip to "I'm at Level 4" without passing through the observable indicators for Levels 1–3. Organizations systematically overestimate their maturity. The assessment flow should make it structurally difficult to place yourself higher than the evidence supports — not by being adversarial, but by making the observable indicators specific enough that the comparison is honest.

### 2.5 Minimum viable content

Every section should be shorter than the user expects it to be. If a section can be removed without loss of function, remove it. The temptation to include all the model's richness must be resisted. The artifact is an entry point, not the litepaper. Its job is to place the user and give them a reason to go deeper.

---

## 3. UX architecture

The artifact has five sections. They are ordered for a first-time visitor reading top to bottom. All sections are navigable directly for return visits.

### Section 1: Entry — The Problem

**Purpose:** Earn attention. Make the VP feel recognized in the first 30 seconds.
**Content:**
- One claim, stated as a fact: "Most organizations are at Level 1 or 2. This is the default — not a failure. The failure is not knowing it."
- The central diagnostic question: "When your AI produces a wrong answer, what happens?" (The answer to this question determines the level. The VP probably doesn't know the answer. That's the hook.)
- One-line model description: what this is and what it does
- A single CTA: "Find out where you are" — links to the assessment

**Design note:** No introduction to the framework. No "in today's rapidly evolving AI landscape." The opening sentence names the problem. Everything else is scaffolding.

---

### Section 2: Context — Why This Model Exists

**Purpose:** Build credibility without losing momentum. Short.
**Content:**
- The protocol failure framing in 3–4 sentences: AI adoption fails not because organizations chose the wrong tools but because they applied enterprise-software governance logic to a probabilistic, non-deterministic stack
- The five-level arc as a single visual: five named boxes, each with a one-line description. No detail at this point. The VP gets the shape of the model
- One line below the visual: "Most organizations are at Level 1 or 2. A small number have reached Level 3. Level 4 is emerging. Level 5 is the horizon."
- Source note: "Based on desk research from 34 sources including Klarna, Samsung, Uber, Boom Supersonic, Menlo Ventures, McKinsey, and Venkatesh Rao's protocol theory work."

**Design note:** The five-level visual is decorative here — it establishes that there is a model without requiring the VP to read it. They'll see it again in detail during the assessment.

---

### Section 3: Case Studies — Three Mirrors

**Purpose:** Make the problem concrete. Three cases, three levels. The VP should recognize at least one of them as their situation.

**Three cases, each in a card format:**

**Card 1: Samsung — Level 1**
The problem: Three engineers submitted proprietary source code to personal ChatGPT accounts in one month. No policy existed. No one knew it was happening. Samsung discovered it after the fact.
The pattern: The data had already left before the organization knew it was at risk.
The diagnostic: "Do you know which AI tools your employees are using today, and which data they've submitted to those tools?"

**Card 2: Klarna — Level 2**
The problem: 90% daily AI adoption, two-thirds of customer service handled by AI. Strong financial results. Then: quality failures surfaced that the absent governance layer couldn't address. CEO reversed course and began rehiring human agents.
The pattern: The mandate produced adoption. Adoption revealed quality failures. Quality failures required protocol. Designing protocol required slowing adoption. Leadership didn't want to slow adoption.
The diagnostic: "When your AI produces a wrong answer in a customer-facing workflow, does a defined process exist for catching and correcting it — or does someone just fix it when they notice?"

**Card 3: Boom Supersonic — Level 3**
The problem: Not a failure mode — a model of what Level 3 looks like. mkBoom automates full aircraft analysis. The business model depends on it. Removing AI from Boom's core workflows would require rebuilding them, not substituting humans.
The pattern: AI is embedded in the competitive position, not just support functions. The governance question has shifted from "how do we control AI use" to "how do we design AI-native protocols that handle failure, versioning, and external dependencies."
The diagnostic: "If your primary AI tool went down tomorrow, which workflows would you need to rebuild rather than simply pausing?"

**Design note:** Cards are scannable — 80 words maximum per card. VP reads the bolded summary and decides whether to read the rest. The diagnostic question at the bottom of each card is the hook into the assessment.

---

### Section 4: Self-Assessment — Where Are You?

**Purpose:** Place the organization. This is the core of the artifact.

**Design principle: Recognition, not answering questions**
Do not present a quiz. Present descriptions. For each assessment step, the VP is shown a set of observable indicators and asked: "Does this describe your organization?"

**Assessment flow: Funnel model**
The assessment works by progressive confirmation. Each question establishes a floor. The first question where the VP says "not fully" is the placement.

**Step 1: Protocol visibility**
Show three paired descriptions:

*Option A — Level 1 territory:*
"AI tools are in use, but IT cannot name all the tools or account types employees are using. No formal data boundary policy exists. Sensitive data may have been submitted to external AI services."

*Option B — Level 2 territory:*
"Enterprise AI licenses exist and have been broadly rolled out. AI use is encouraged or mandated. But there is no consistent process for what to do when AI produces an incorrect output — failures are handled case-by-case."

*Option C — Level 3 territory:*
"At least one core workflow has been deliberately designed around AI. A named person owns it. A quality metric tracks it. If that workflow fails, a defined escalation path exists."

The VP selects the option that best describes their organization. Their selection sets a provisional level and narrows the remaining questions.

**Step 2: Failure response**
Core diagnostic question: "What happens when AI produces a wrong answer in your most important AI-assisted workflow?"

Four answer options:
- "We don't have a defined answer to that question" → Level 1
- "Someone notices and fixes it, but there's no defined process" → Level 2
- "We have a review process for that workflow specifically" → Level 3
- "We have metrics for error rate and defined escalation paths across multiple workflows" → Level 3–4 boundary

**Step 3: Governance design**
"How was AI governance at your organization designed?"

Four options:
- "It wasn't designed — it emerged from incidents or mandates" → Level 1–2
- "We issued a policy, but enforcement is inconsistent" → Level 2
- "At least one workflow has a designed governance protocol — specific review criteria, a named reviewer, a failure escalation path" → Level 3
- "Governance protocols exist across multiple critical workflows and are versioned with our tooling" → Level 3–4

**Step 4: Competitive dependency (optional — displayed only for users who reach Level 3 territory)**
"If your primary AI deployment stopped working tomorrow, which of these best describes the impact?"

- "We'd substitute a human temporarily" → Level 2
- "We'd need to redesign the workflow — we couldn't simply substitute a human" → Level 3
- "Multiple core functions would be disrupted; our competitive output would fall noticeably" → Level 3–4

**Placement logic:**
- All answers at Level 1 territory → Level 1
- Mixed L1/L2 answers → Level 1 (bottleneck rule: the weakest link determines the effective level)
- Majority L2, some L1 → Level 2
- L2 with one clear L3 designed workflow → Level 2-3 boundary
- Consistent L3 answers → Level 3
- L3+ on step 4 → Level 3 late / Level 3–4 boundary

---

### Section 5: Your Output — What This Means

**Purpose:** Give the VP something specific and actionable. This is what they take away and potentially share.

**Output card structure for each level:**

```
LEVEL [N] — [Name]
[Tagline]

WHERE YOU ARE
[2-sentence description of what this level looks like, written in second person:
"Your organization has granted AI access broadly..." not "Organizations at Level 2..."]

THE RISK YOU'RE MOST EXPOSED TO
[Level-specific failure mode, named and described in 3 sentences.
Concrete enough to recognize. Not generic.]

THE ONE THING TO DO NEXT
[Single progression requirement, written as a specific action.
Done-when condition stated. Not a principle — a task.]

---
THE FULL FIVE LEVELS
[Mini arc showing all 5 levels with the user's level highlighted]
```

**Shareable:** The output card should be printable and forwardable. A VP should be able to paste it into an email to their CTO.

---

## 4. What this artifact is not

- Not a comprehensive model reference — that is the litepaper
- Not a replacement for organizational diagnosis by a practitioner
- Not a vendor recommendation tool — no tooling advice
- Not a quiz with a score — the output is a placement with specific evidence, not a number

---

## 5. Technical constraints

- **Format:** Single HTML file
- **Deployment:** Claude artifact (public URL)
- **Backend:** None — all logic in client-side JavaScript
- **State:** No persistence — each session starts fresh
- **Content source:** All claims drawn from `ai-cmm-v2.yaml`; no new claims introduced in the artifact
- **Size:** Keep below 500KB total including any inline styles/scripts
- **Compatibility:** Must render cleanly in a Claude artifact iframe; no external font dependencies (use system fonts or inline a single lightweight font stack)

---

## 6. Visual language

**The VP should feel like they are reading a rigorous professional assessment, not using a product.**

- Typography-led: the content is the design
- No AI imagery (no robots, no brains, no circuits, no gradients suggesting "the future")
- Color palette: maximum 3 colors — one neutral background, one text color, one accent for the user's level placement
- The five levels should be visually distinct but not playful — consider numbered segments on a horizontal rail, not circles or gamified steps
- Mobile-legible but desktop-first: this VP is reading at a desk or on a laptop, not a phone
- The output card should look like it could be printed and handed to a colleague

---

## 7. Success criteria

The artifact succeeds if a senior ops VP can:

1. **Recognize their organization** — read the observable indicators for their level and say "yes, that's us"
2. **Name the risk** — leave knowing the specific failure mode they are most exposed to, stated precisely enough to put it in a risk register
3. **Name the first action** — leave knowing one specific thing to do next, stated specifically enough to put it in a meeting agenda
4. **Forward it** — send it to their CEO, CTO, or peer with confidence that the person will understand it without additional context

The artifact fails if:
- The VP places themselves at a higher level than the observable indicators support (overestimation bias not corrected)
- The output is a score, not a diagnosis
- The VP cannot extract a specific action from the output
- The VP leaves feeling like they read a sales pitch

---

## 8. Version control

**v1.html is locked. Do not edit it.**

`Artifact/drafts/v1.html` is the deployed baseline (v1.0, deployed 2026-03-17). It is the reference for all future versions and must not be modified.

**To start a new version:**
1. Copy `v1.html` → `v1.1.html` (or `v2.html` for major redesigns)
2. Work from the copy — all changes go there
3. When the new version is ready to deploy, update the public artifact URL in README.md and planning docs
4. The old file stays; it is never overwritten

**Versioning convention:**
- Incremental changes (copy, layout, UX polish): `v1.1.html`, `v1.2.html`, etc.
- Major redesigns or model updates (new YAML, restructured flow): `v2.html`
- Each new version gets its own QC pass against `_ARTIFACT-QC.md`

**This brief governs all versions.** Update it before building if requirements change — not after.

---

## 9. Build sequence

1. Read this document fully
2. Read `../Model-Development/ai-cmm-v2.yaml` for all content (Levels 1–3 are the primary output; 4–5 appear in the arc visual only)
3. Build the assessment flow first — it is the core function
4. Build the output cards second — this is what the VP takes away
5. Build the entry and context sections last — they exist to earn attention, not to carry content
6. Test by asking: can a VP who knows nothing about this model place themselves accurately in 10 minutes?

---

*Last updated: 2026-03-17*
