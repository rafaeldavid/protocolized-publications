---
title: Red-team of Assessment v0.3.1 · forced-choice design audit
version: v1 (2026-04-24)
status: draft · for review before writing v0.3.2
references: v0.3.1-statements-tangible.md · Framework-v1.md (v1.2)
---

# Red-team of Assessment v0.3.1

Audit of our 17 forced-choice questions against established design principles for paired-statement instruments (Thurstonian forced-choice, Multi-Unidimensional Pairwise Preference / MUPP, classic survey methodology). Written because the current draft, while coherent, has several recurring issues that will bias results.

## 1. Principles a forced-choice questionnaire should follow

These are established in the measurement-theory literature. Each addresses a specific bias.

### 1.1 · Parallel construction
Both statements in a pair should share grammatical structure. Typically: **"When X, we Y"** / **"When X, we Z"** — same subject, same situation, different action.

**Why it matters.** When statements have different structure, respondents pick on form (which sounds more like a real sentence?) rather than content.

### 1.2 · Desirability balance
Both statements should sound roughly equally acceptable socially. Neither should be an obvious "good answer."

**Why it matters.** If one option is the "obviously correct" answer, respondents pick it regardless of whether it describes them. This is social desirability bias — the main reason amateur questionnaires produce flat results.

### 1.3 · Specificity symmetry
Both statements should be at the same level of concreteness. Either both abstract or both specific.

**Why it matters.** Concrete statements feel more real than abstract ones, biasing respondents to pick the concrete one even when the abstract one is more true of them.

### 1.4 · Single claim per statement
Each statement makes one claim. Avoid "X and Y and Z" lists.

**Why it matters.** Respondents may agree with X but not Y, so either answer is partially wrong. Worse, you can't tell which part drove the pick.

### 1.5 · Dimensional purity
Each question loads on exactly one dimension. No cross-loading.

**Why it matters.** If Q3 measures both D1 and D5, the scoring can't attribute the answer cleanly.

### 1.6 · Direction mix within dimension
Within each dimension, at least one question should have A↑ and at least one B↑. Prevents respondents who clock the pattern from gaming.

**Why it matters.** If every D3 question has B↑, a fatigued respondent just picks B for every D3 question.

### 1.7 · Acquiescence / positivity control
Neither side should be the obvious "positive-sounding" answer.

**Why it matters.** People default to positive statements when uncertain. If "we do this well" is always on one side, you get inflated maturity scores.

### 1.8 · No negations or double-negatives
Straightforward positive claims on both sides. "We don't have X" is fine; "We don't not have X" or "We lack the absence of X" is a trap.

### 1.9 · Forced discrimination via redundancy
Each dimension needs multiple items. One item can be gamed; three related items produce a consistency signal.

---

## 2. Audit: where v0.3.1 falls short

Scanning the 17 questions:

### Q1 · Rules before AI output goes out `[A↑]`
- A: "AI-supported text, code, and decisions are mostly high quality."
- B: "We tell people to be careful with AI tools. Their outputs may be wrong."

**Issues.**
- **Not parallel** — A is about output quality; B is about communication practice. Different kinds of claims.
- **Desirability asymmetric** — "high quality" sounds obviously better than "outputs may be wrong."
- **Specificity asymmetric** — A is abstract ("mostly high quality"); B is quasi-dialogue ("we tell people").
- **Cross-loading risk** — A sounds more like a D2 stability claim or D5 expertise claim than a D1 specificity claim.

### Q2 · What the AI rules actually cover `[B↑]`
- A: "We have rules about what AI tooling is allowed."
- B: "We have guidance for the policies, tools, and tests that review AI-enabled outputs."

**Issues.**
- **Double-barreled B** — "policies, tools, and tests" is three things. Respondent might have 2 of 3.
- **Desirability-balanced, but specificity-asymmetric** — B is much longer and more specific than A.

### Q3 · Why, not just what `[A↑]`
- A: "Most people can explain how AI supports our business offering."
- B: "When a new hire asks about AI usage, most people can't explain easily."

**Issues.**
- **Cross-loading** — "supports our business offering" drifts into D7 (value integration), not D1 practitioner legibility.
- **Different POV** — A is a generic capability claim; B is a specific scenario.

### Q4 · Field names and categories `[B↑]`
- A: "We've had to constantly adjust AI tool settings because they consistently drift or cause confusion."
- B: "Once we integrate AI tools and software, perfomance [sic] is reliable for months at a time."

**Issues.**
- **Desirability strongly asymmetric** — "reliable for months" sounds obviously better than "constantly adjusting because they drift."
- **Typo** ("perfomance" — minor but worth flagging for the eventual implementation pass).

### Q5 · Craft without the AI `[A↑]`
- A: "We still have people on the team who work without AI assistance or software."
- B: "Our team performance notably increases when they integrate AI into their workflows."

**Issues.**
- **B reads as a positive / high-maturity claim, not a low-maturity state.** If B is the "lower" side, the scoring penalizes respondents who describe a genuinely positive outcome (team performance increasing with AI). This inverts the intended signal.
- **Different dimensions entirely** — A is about D2 (craft preservation), B is about D7 (AI-driven performance gain). Question isn't dimensionally pure.

### Q6 · Review queues `[B↑]`
- A: "AI-generated outputs are piling up faster than we can process them."
- B: "Our business feels in sync with our AI-supported product development."

**Issues.**
- **Different levels of abstraction** — A is concrete (queue building up); B is vibes ("feels in sync").
- **Desirability asymmetric** — "feels in sync" sounds much better than "piling up."

### Q7 · Estimates that hold up `[A↑]`
- A: "We can plan well regardless of AI usage and product capabilities."
- B: "It's becoming more difficult to estimate progress, especially when teams adopt new AI tools."

**Issues.**
- **A is implausibly optimistic** — "regardless of AI usage" is strong; may feel aspirational and hard to honestly claim.
- **B is specifically tied to "new AI tools"** which narrows it — what about teams using established AI tools?

### Q8 · Sync vs. batch teams `[B↑]`
- A: "One team wants constant AI help; another wants a weekly batch review. We're still arguing about it."
- B: "Team members that use AI continuously work together well with teams that [cut off]."

**Issues.**
- **B is literally incomplete** — sentence cuts off, likely in-progress edit.
- **Underlying concept is subtle** — sync/async Benny concept is abstract; doesn't land as observable behavior.
- **Already flagged in prior session for possible replacement.**

### Q9 · Tool-use inventory `[A↑]`
- A: "We can list the AI tools each team uses and roughly what data flows through them."
- B: "We're often surprised by what AI tools are used, and how they are used."

**Issues.**
- **Probably the most balanced question** in the set. Concrete on both sides, parallel-ish, similar specificity. Minor: "often surprised" is softer than the opposite of "we can list."

### Q10 · Catching unsanctioned use `[B↑]`
- A: "We wouldn't know if an employee paid for their own AI tool and used it for work."
- B: "It's unlikely an employee would use unsafe AI tools."

**Issues.**
- **Desirability asymmetric** — A describes a blind spot, B describes confidence. Confidence sounds better.
- **B is epistemically weak** — "it's unlikely" invites "how would you know?" As written, B doesn't claim detection capability; it claims a prior. That's a different thing.
- **Not parallel** — A is conditional ("if X, we wouldn't know"); B is probabilistic ("unlikely that X").

### Q11 · Does it run itself `[A↑]`
- A: "Our quality control processes run week after week without needing intervention."
- B: "We're constantly fixing issues related to AI usage."

**Issues.**
- **Desirability asymmetric and obviously so** — A is aspirational; B is self-flagellating.
- **Scope mismatch** — A is about QC processes; B is about fixing issues. Different objects.
- **Invisibility paradox edge case still present** (already flagged in v0.3.1): an L1 org with no QC processes could answer A because there's nothing to intervene with.

### Q12 · Who signs off `[A↑]`
- A: "In critical workflows, a senior specialist who knows the domain cold reviews AI output."
- B: "In critical workflows, a compliance reviewer or checklist signs off without deep domain judgment."

**Issues.**
- **Best-constructed question in the set.** Parallel ("In critical workflows, X reviews/signs-off Y"). Both sides describe real patterns. Desirability reasonably balanced — compliance reviewers aren't evil, just different. Keep.

### Q13 · Floor or ceiling `[B↑]`
- A: "AI mostly helps junior staff produce acceptable work in areas where they'd otherwise struggle."
- B: "Experienced team members use AI to do harder, more creative work at scale that was out of reach before."

**Issues.**
- **Desirability strongly asymmetric** — B has "harder, more creative work at scale" which sounds clearly better.
- **Not mutually exclusive** — both can be true in the same org. Forcing a pick is artificial.

### Q14 · Reach beyond our walls `[A↑]`
- A: "Vendors and clients are working with us to develop new AI-usage standards."
- B: "Our AI guidance only apply inside our company; nothing extends to partners or vendors."

**Issues.**
- **A is very specific** (joint development of standards); B is general (internal only). Specificity mismatch.
- **A sets a high bar** — L4-ish. Many L3 orgs have partner coordination without joint standards-setting.

### Q15 · Reusable vs. bespoke `[B↑]`
- A: "New team members often build something custom from scratch."
- B: "Teams commonly use templates and configuration guides for AI tools."

**Issues.**
- **Reasonably balanced.** Parallel-ish, specificity-balanced. Minor: "new team members" in A vs. "Teams" in B — slightly different subjects.

### Q16 · AI absence test `[B↑]`
- A: "AI service outages mostly impact our productivity, and at most some product features."
- B: "If AI services are impacted, major parts of our product would stop working."

**Issues.**
- **Reasonably balanced.** Both are operational scenarios. Minor specificity difference.

### Q17 · AI in the product shape `[A↑]`
- A: "Our product line includes offerings that didn't exist before AI made them possible."
- B: "AI has improved our products, or has the potential to improve our products."

**Issues.**
- **B is epistemically weak** — "or has the potential to" is escape-hatch language that almost any org can truthfully claim. Collapses the distinction.
- **Desirability slight** — A sounds more impressive than B.

---

## 3. Systematic issues across the set

Counting the audit above:

| Issue | Affected questions |
|---|---|
| Desirability asymmetry (one side obviously "better") | Q1, Q4, Q6, Q10, Q11, Q13, Q14 — **7 of 17** |
| Specificity asymmetry (one side much more concrete) | Q1, Q2, Q6, Q10, Q14 — **5 of 17** |
| Not parallel grammatically | Q1, Q3, Q5, Q10 — **4 of 17** |
| Double-barreled / multi-claim | Q2 — **1 of 17** |
| Dimensional cross-loading | Q1, Q3, Q5, Q11 — **4 of 17** |
| Statement incomplete or typo | Q4 (typo), Q8 (truncated) — **2 of 17** |
| Epistemic escape hatch | Q10 ("unlikely"), Q17 ("has the potential to") — **2 of 17** |

**Bottom line.** About 60% of questions have at least one issue that will bias the results. The questions *directionally* capture the right dimensions, but the execution will systematically over-report maturity because respondents will pick desirability-signaled statements.

**Direction mix check.** Let me verify the A↑/B↑ spread per dimension:

| Dimension | Questions | Direction |
|---|---|---|
| D1 | Q1, Q2, Q3 | A↑, B↑, A↑ ✓ mixed |
| D2 | Q4, Q5 | B↑, A↑ ✓ mixed |
| D3 | Q6, Q7, Q8 | B↑, A↑, B↑ ✓ mixed |
| D4 | Q9, Q10, Q11 | A↑, B↑, A↑ ✓ mixed |
| D5 | Q12, Q13 | A↑, B↑ ✓ mixed |
| D6 | Q14, Q15 | A↑, B↑ ✓ mixed |
| D7 | Q16, Q17 | B↑, A↑ ✓ mixed |

Direction mix is fine.

---

## 4. Proposed remediation for v0.3.2

Three concrete rewriting patterns that fix most issues:

### Pattern A · "When X, we Y / we Z"
Parallel-construct the pair around a shared situation. Different responses to it.

Example rewrite for Q1:
- A: "When AI produces a customer-facing output, a human reviews it against a checklist before it goes out."
- B: "When AI produces a customer-facing output, we mostly trust it and send it along."

Same situation, different organizational response. Desirability is more balanced because "mostly trust it" isn't obviously wrong — it's what high-trust teams actually do.

### Pattern B · "We X / We also X, plus Y"
Both sides affirm a positive, one just goes further. Eliminates desirability asymmetry.

Example rewrite for Q2:
- A: "We've documented which AI tools and uses are allowed."
- B: "We've documented which AI tools and uses are allowed, and the specific review points inside each allowed use."

B is strictly more; A isn't "bad," just less complete. Respondents can honestly pick either.

### Pattern C · "State X / state Y" (equal-desirability descriptions)
For dimensions where both states are legitimate organizational choices, frame as choices not as good/bad.

Example rewrite for Q13:
- A: "AI mostly helps people at the start of their expertise curve produce solid work faster."
- B: "AI mostly helps people deep in their expertise take on harder work that used to be out of reach."

Both are defensible strategies. Neither sounds "better." The question becomes: which is *your* shape of AI use?

### Other fixes
- **Drop or replace Q8.** The sync/batch concept is too subtle. Replace with an intensification / review-bottleneck question that's more observable.
- **Rewrite Q11** to avoid the invisibility paradox edge case OR explicitly acknowledge it in a second paired question.
- **Tighten Q10** — reframe as "we would / wouldn't spot it" on both sides, not mixing "wouldn't know" with "unlikely."
- **Strip escape-hatch language** from Q17 ("or has the potential to" → remove).

---

## 5. Recommendation: pilot before implementation

Two options:

### Option A · Rewrite + ship + observe
Apply the principles above in v0.3.2, ship to the site, observe real responses. Accept some noise in early data.

### Option B · Rewrite + pilot on 5–10 readers before shipping
Apply the principles above, then walk 5–10 people through the draft (SIG members, a handful of operational leaders you trust) before going live. Flag items where multiple readers can't pick a side or pick the "same" side together despite operationally different orgs.

Pilot-before-ship is standard in psychometrics. The cost is ~1 week of back-and-forth. The benefit is catching bias items before they're frozen in the live site.

**My recommendation is B, with a tight 5-reader pilot.** Operational leaders' feedback on "does this question make sense in your context?" catches context-sensitivity issues (org-size, industry) that even a careful author misses.

---

## 6. What to decide before v0.3.2

1. **Proceed with the 7 remediation rewrites above, or retire some questions entirely?** My vote: rewrite 13 questions, retire Q8 (replace with intensification), keep Q9/Q12/Q15/Q16 roughly as-is (best-constructed of the current set).
2. **Pilot-before-ship or ship-and-observe?** My vote: pilot. Five readers from the SIG or a tight enterprise circle.
3. **Question count.** Keep 17? Drop to 15 for tighter scan time? I'd drop Q8 + Q13 (both have issues + not load-bearing) for 15. Alternatively, rewrite and keep 17.
4. **Scoring model.** Stay with simple sum → placement in v0.3.2 (already planned). Defer dimension-level / bottleneck logic to v0.4 when we have real response data to validate weighting.
