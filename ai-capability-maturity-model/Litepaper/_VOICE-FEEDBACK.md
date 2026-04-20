# Editorial Feedback — Voice, Tightening, Humor, Doom
**Document:** litepaper-draft-v4.md
**Status:** Pre-revision notes
**Date:** 2026-03-19

---

## How to interpret the feedback

The colleague's note has four parts. They pull in the same direction but are not the same problem.

**"Better voice"** — The current draft is technically well-written and analytically sound. It is also slightly impersonal in a way that costs it readers. The voice is the voice of a consulting report that has been carefully edited and then carefully drained of personality. Every sentence earns its place; none of them surprise you. A stronger voice doesn't mean looser thinking — it means letting the precision of the observation do more work, including occasionally letting the reader notice something is absurd.

**"More tightening"** — Some sections are dense without earning their density. The theory section (§2) front-loads a lot of apparatus the reader doesn't yet know they need. Level 5 is the longest level description in the document and acknowledges upfront it has no case anchors. The ontological drift sub-section repeats its central point three times across four paragraphs. Tightening here means trusting the argument to land once.

**"Sprinkle of irony and humor"** — The reference to Ribbonfarm is the most useful part of this note. Rao's humor is not jokes. It is the deadpan observation that names something accurately enough that the absurdity becomes visible — without announcing that the thing is absurd. It trusts the reader. The humor is layered into the analysis, not added on top. The signal that a Ribbonfarm-style aside has landed is that the reader stops for a second, because the sentence said something true in a way they didn't expect. The target register is: "that's exactly right, and it's kind of awful."

**"Less doomer vibes"** — The current draft treats the governance gap as an approaching storm. Level 5 especially: the TCP/IP section ends on dread ("at a shorter time horizon, in an environment already adversarial"), the Level 5 opening announces itself as "a trajectory and a warning," and the failure mode descriptions are sometimes written like disaster film synopses. The dread is structurally accurate. It doesn't need to be atmospheric. In Ribbonfarm terms: you note the structural inevitability, then you move on. The irony of the situation does the work that explicit doom currently does.

---

## Examples from v4 — what to fix

### Problem 1: Doom language that announces itself

**Current (Level 5 opening):**
> "Level 5 has no confirmed organizational case anchors. It is described here as a trajectory and a warning."

"A warning" does the work of signaling seriousness, but it also signals that what follows should be read in a particular register. Rao would not tell you a section is a warning. He'd write the section and let the content do that.

**Current (Level 5 close):**
> "AI protocols are on the same trajectory, at a shorter time horizon, in an environment already adversarial."

> "Level 5 is not a transition target. It is a warning about the failure mode of success."

Two explicit "warnings" in one level description. The second one restates the first. The doom is named twice rather than demonstrated once.

**Current (Level 5 failure mode):**
> "Failures are hard to attribute (no single organization owns the protocol), hard to isolate (failure propagates before any actor can intervene), and hard to fix (the governance mechanisms are as invisible as the infrastructure itself)."

Three-part doom list that reads like checklist of apocalypse. The information is real; the register is heavy.

---

### Problem 2: Stiff constructions that could breathe

**Current (§1 Level 1 empirical setup):**
> "The empirical picture establishes that Level 1 is universal."

Legal brief phrasing. The content is correct; the framing is unnecessarily formal. "Level 1 is universal" is the sentence. The "empirical picture establishes that" is throat-clearing in analytical clothing.

**Current (§2 governance mechanisms intro):**
> "Three governance mechanisms are frequently conflated in AI governance discussions: policy, compliance, and protocol."

Textbook opening. The distinction that follows is genuinely clarifying — the entry doesn't match the quality of what it's introducing. This is the setup for one of the paper's sharpest analytical moves (the policy/compliance/protocol split) and it reads like a PowerPoint agenda slide.

**Current (§2 ontological drift close):**
> "The governing protocol is the organizational mechanism through which ontology is stabilized. An organization without designed governing protocols — which outputs mean what, who is accountable for which verification, what an acceptable output looks like — will encounter ontological drift at scale. That drift is the mechanism of the Level 2 failure mode."

This closes the ontological drift section by restating the section's opening claim in slightly different words. The section already made this argument twice. The third landing doesn't add information; it adds weight.

---

### Problem 3: Missed irony — moments where the absurdity is real but isn't landed

**Samsung:**
> "In April 2023, three semiconductor engineers independently submitted proprietary materials to personal ChatGPT accounts within one month."

The word "independently" is doing a lot of work and the text doesn't pause on it. Three people at the same company made the same decision, separately, within 30 days. That's not a rogue employee problem — it's a coordination structure problem that showed up simultaneously across unconnected individuals. The protocol insight is right there in the word "independently" and the draft moves past it.

**Waterfall return:**
> "Organizations compensate by freezing definitions, front-loading clarity, and minimizing mid-cycle reinterpretation. This is a return to Waterfall — not because people suddenly prefer big plans but because the communication structure that Waterfall requires now incurs the lowest transaction costs."

This is the best Ribbonfarm-adjacent sentence in the document. It is also slightly buried in a block quote from Benny, then followed by a flat analytical restatement. The observation that the AI revolution's institutional contribution is a revival of 1970s software methodology should land harder. Right now it lands, the text explains it, then moves on.

**Air Canada chatbot — "separate legal entity":**
> "Air Canada argued before the BC Civil Resolution Tribunal that the chatbot was a 'separate legal entity' bearing no relationship to the airline's obligations."

The text then immediately explains why this argument failed. The sentence that deserves more space is the argument itself. Air Canada's lawyers stood before a tribunal and argued that the airline was not responsible for what the airline's customer-service chatbot said to the airline's customers, because the chatbot was technically a separate entity. That argument was made, in writing, by someone who presumably passed the bar. The text cites it accurately and moves on. A Ribbonfarm aside would pause just long enough for the reader to absorb what that argument actually was.

**Klarna reversal:**
> "The company claimed that its AI customer service agent, deployed to the equivalent of 700 agents, produced a $40M profit improvement in its first year. These numbers were real. What followed was also real: CEO Sebastian Siemiatkowski publicly reversed the AI-only customer service position."

"These numbers were real. What followed was also real" — this is close. It is doing the Ribbonfarm thing of letting two true statements sit next to each other and generate friction. But it then immediately explains the friction ("output governance protocol was absent") rather than letting the gap breathe for one more sentence. The press release and the reversal deserve a little more space between them.

**FDE pricing:**
> "OpenAI now deploys FDEs exclusively to customers spending $10M+ per year, at $200–300K salary, with an effective floor of $1M+ contract value. This is the market price for doing the Level 2-to-3 design reactively through professional services rather than building the organizational capability directly."

The last sentence is good — it reframes the $1M contract as a price for a governance choice. But it is stated as analysis rather than landed as observation. The irony: the "AI efficiency gains" that justified the access mandate (Level 2) now cost more than $1M/year in professional services to actually extract (Level 3). That irony is in the text but not in the voice.

---

### Problem 4: Level 5 is too long for what it has

Level 5 has no case anchors and says so upfront. It is nonetheless the second-longest level description in the document. The containerization and TCP/IP parallels are both well-chosen — but they are doing similar work and the section doesn't need both at full length. The TCP/IP close especially ("BGP hijacking attacks, DNS poisoning campaigns, and systematic routing manipulation now occur routinely") is a doom list that doesn't resolve into anything actionable. Level 5 is a genuine intellectual contribution — the idea that the failure mode of success is invisibility, that protocols become governance liabilities when they work — and that idea would be sharper in 60% of the current word count.

---

## What the fix looks like — Ribbonfarm register

Ribbonfarm irony has specific properties:
- It does not signal itself. No "ironically," no "(unsurprisingly)," no rhetorical question setup.
- The humor is in precision, not in exaggeration. The observation is funnier because it is exactly right, not because it is inflated.
- It is almost always contained in one sentence, then the analysis continues in normal register.
- The target is usually the gap between how something presents itself and what it actually is.

Examples of the pattern applied to this paper's material:

> *Current:* "The empirical picture establishes that Level 1 is universal."
> *Ribbonfarm version:* "Every organization with employees is at Level 1 in at least one function. The data makes this difficult to dispute and easy to ignore."

> *Current:* "This is a return to Waterfall — not because people suddenly prefer big plans..."
> *Ribbonfarm version:* "Benny calls this a return to Waterfall — not from nostalgia but from arithmetic. Probabilistic outputs penalize mid-cycle ontological change in ways deterministic code did not. The AI revolution's most unexpected institutional contribution, so far, is a structural argument for big upfront design."

> *Current:* "It is described here as a trajectory and a warning."
> *Ribbonfarm version:* Delete this sentence. The description that follows is the trajectory. The reader will notice.

> *Current:* "AI protocols are on the same trajectory, at a shorter time horizon, in an environment already adversarial."
> *Ribbonfarm version:* "The AI governance problem runs on TCP/IP's timeline compressed into a third of the years and launched into an environment that was already adversarial when it started."

---

## Priority order for revision

1. **Level 5** — cut 30–40%, remove explicit doom announcements, let the containerization analogy do the structural work alone (or TCP/IP alone, not both at full length)
2. **Samsung aside** — pause on "independently" for one sentence
3. **Air Canada** — give the "separate legal entity" argument one sentence to exist before explaining why it failed
4. **Klarna** — let the gap between the press release and the reversal breathe slightly longer
5. **Waterfall sentence** — elevate it out of the block quote structure, let it land in the body voice
6. **§2 ontological drift close** — cut the third restatement
7. **§1 "empirical picture establishes"** — cut the framing, start with the finding
8. **§2 "Three governance mechanisms are frequently conflated"** — find an entry that matches the quality of the analysis that follows

---

*Use this document as a working checklist when drafting v5. The goal is not to make the paper funnier — it is to make the analysis land harder by letting the absurdity of the cases do the work the doom language currently does.*
