# Level 2 — Kit (re-spec for the Deployment Guide)

**Scope:** This re-spec applies to the AI Deployment Guide only. The canonical model (`Model-Development/ai-cmm-v3.yaml`) remains "Sanctioned" until and unless this framing is adopted in a future v4.

**Lineage:** Replaces the *Sanctioned* framing with *Kit* on the basis of:
- Sachin Benny, *AI, tractors, and the productivity paradox* (Substack, 2026)
- Ronald Kline and Trevor Pinch on interpretive flexibility, in the Social Construction of Technology (SCOT) tradition
- Anthropic's *Claude Cowork Deployment Handbook* — whose own Level 2 ("turn it into a skill") is itself a kit-encoding practice

---

## Tagline

> AI tools are in production. Users are tinkering toward the workflows worth keeping.

## Description

Leadership has decided AI adoption is strategically necessary and granted broad access. Enterprise licenses are in place. An access policy exists. Adoption rates are climbing.

Underneath that policy layer, a different activity is producing the actual gains: users are encoding their workflows as **kits** — markdown skills, prompt templates, scheduled jobs, shared notebooks, small scripts, custom GPTs. A kit is a reusable component the user has built to make AI behave the same way the same time on the same task. Each kit is the user's interpretation of what the tool is for in their context, made portable.

The policy layer is necessary but inert. The kit layer is where productivity accumulates — and where the protocols worth formalizing are being discovered.

This is the kit phase of a technology in Sachin Benny's sense: a stage of rapid, low-documentation tinkering in which users repurpose a generalist tool for their specific contexts. Kits are components meant to be tinkered with, with no single correct method of usage. The kit phase produces tacit human capital — local expertise, reusable components, working patterns — that is invisible to economic stats and adoption dashboards but is the raw material of every later stage of integration.

The historical pattern is documented in Kline and Pinch's work on the early American automobile. From roughly 1903 to 1950, rural users employed cars in ways manufacturers never intended: jacking up rear wheels to run corn shellers, washing machines, and water pumps; yoking automobiles to plows; converting Cadillacs into sheep-shearing rigs. This *interpretive flexibility* — what Kline and Pinch identify as the second kind of creativity, distinct from inventor-tinkering — is what eventually drove Ford to release its first one-tonne truck in 1916 and the industry to produce dedicated tractors. "The users, so easily overlooked in writing the story of technology, had made their mark." Closure followed: by the 1950s the kit phase had ended, manufacturers had absorbed the user-discovered functions into specialized products, and the interpretive flexibility disappeared.

The same arc is underway with AI. The kit phase is where most enterprise AI value is currently accumulating, and where most enterprise governance frameworks are not pointed.

## Blind spot

Level 2 governance instruments — access policies, license utilization dashboards, training-completion rates — measure the policy layer. They cannot see the kit layer.

The kits exist in personal Obsidian vaults, in private repos, in pinned Slack messages, in shared markdown files inside team Drives, in unwritten muscle memory. Users are doing the protocol-discovery work the organization should be paying attention to, but the organization's instruments are not pointed at it. Two organizations with identical license utilization can have radically different kit layers underneath. The one with a richer kit layer will be at the door of Level 3; the one without will plateau.

The governance response calibrated to the policy layer (more training, tighter access controls, a longer use policy) cannot move the organization forward, because the bottleneck is on the kit side.

## Failure modes

### FM-K1: Mandate without kit infrastructure

Leadership issues an organization-wide AI mandate ("AI use is non-optional") without a mechanism for surfacing or sharing the kits users build. Adoption metrics are high; durable productivity gain is not, because every user starts from scratch on every task. The kit layer is rich but private. The first user to leave the company takes the kits with them.

*Documented instance:* Shopify's April 2025 memo making AI non-optional, with no published competency definition for non-technical roles and no organizational kit registry. Revenue grew 30% YoY for FY2025; the financial result validates the mandate while the durability of the gain remains untested. Catalog entry 32.

### FM-K2: Quality floor collapse via kit-stripping

AI replaces a human role that was simultaneously a production step and a quality-check step. Production volume increases; the quality kit that the human embodied (an experienced contractor's pattern recognition, a long-tenured agent's empathy script) is destroyed before it has been encoded. The Level 2 organization built the AI workflow but did not build a kit to capture what the displaced human was doing.

*Documented instances:* Klarna's customer service AI deployment (CEO publicly reversed the AI-only position in May 2025, citing outputs "generic, repetitive, insufficiently nuanced"; began rehiring human agents). Duolingo's replacement of native-speaker contractors (cultural accuracy concerns from language educators; no formal quality measurement before or after). Catalog entries 31, 33.

### FM-K3: Premature standardization

The organization tries to centrally design the "official" AI workflow before users have iterated through enough kit forms to know what works. The official workflow is rejected in practice; users keep their personal kits in the shadows. The org has a published standard and zero adoption of it.

*Pattern, not a single case:* This is the failure mode the FDE role exists to prevent. OpenAI's $200–300K FDE staffing on $1M+ contracts is the market price of buying the kit-discovery work back after a centrally-designed protocol failed to land.

### FM-K4: Chatbot liability gap

A user-built kit (a customer-facing chatbot, an automated reply skill) is deployed to external parties without a verification protocol between the kit's output and organizational accountability. The kit functions as the user's interpretation of policy; courts treat it as the organization's policy.

*Documented instance:* Air Canada (BC Civil Resolution Tribunal, 2024). The chatbot stated bereavement fares could be claimed retroactively; the actual policy did not permit this; the tribunal rejected Air Canada's argument that the chatbot was "a separate legal entity." Damages: $812.02. Catalog entry 29.

### FM-K5: Kit lock-in

A single user's kit becomes load-bearing for a workflow without anyone else able to operate it. The user becomes a single point of failure. Kit knowledge is bilateral and tacit; the organization has no protocol for making it portable. The kit reaches a sophistication ceiling at which only its author can extend it; when that author moves teams or leaves, the kit calcifies.

*Pattern across multiple cases:* This is the F2F invisibility failure mode (FM2-5 in v3.yaml) viewed from inside Level 2 rather than from the enterprise perspective. The Rao/Dixon pipeline shows what a *successfully transitioned* version of this looks like at Level 3; many Level 2 orgs have the F2F kit pattern without the protocol layer that makes it inheritable.

## Progression requirements (Level 2 → Level 3)

### 1. Inventory the kit layer

Identify which functions are kit-rich. Ask each function lead: "what AI workflows do you and your team rerun? What templates, skills, prompt files, or scheduled jobs do you keep around?" The answer should be specific — "we have a `/variance-analysis` skill, a Salesforce update macro, and a regulatory monitoring runner." If the answer is "we use ChatGPT for various things," the function is at Level 2 policy without a kit layer.

*Done when:* A list exists, by function, of the kits that are in active use and who owns each.

### 2. Promote one kit from personal to organizational

Pick one kit-rich workflow and design the protocol around the kit. Specify what gets standardized (the schema of the input, the format of the output, the verification checkpoint) and what stays user-shaped (the user's particular phrasing, the user's specific source set). Move the kit from a personal artifact (Obsidian, private repo) to an organizational one (admin-provisioned skill, scheduled job in shared infrastructure, shared markdown file in the org's source of truth).

*Done when:* At least one kit has a named owner for its evolution, lives in shared infrastructure, and a second user has successfully run it.

### 3. Build the verification checkpoint

For the promoted kit, specify what gets reviewed before its output reaches an external party or governs a consequential decision. This is not a generic AI literacy course. It is a workflow-specific specification of who reviews, what they check, and what an unacceptable output looks like.

*Done when:* The kit has an explicit review step, and a documented response when review fails.

### 4. Embed protocol designers inside the function

Following Sachin's argument: the firm's job at the closure of the kit phase is to harvest what the kit-builders have already proved works and integrate it into the next layer. This requires embedding protocol designers (the FDE pattern) in the function — not to dictate the workflow but to identify which kits are worth formalizing and feed the organization's integration machinery. Centrally-assigned governance staff cannot do this work; they lack the domain knowledge that lets them tell a high-value kit from a brittle one.

*Done when:* At least one domain expert has been engaged as a protocol source, not as a compliance subject. Their kits are being read for what they say about the workflow, not audited for whether they comply with policy.

## Unlock condition (exit to Level 3)

The function has at least one kit that has been promoted from a personal artifact to an organization-shared one, with a named owner, a verification checkpoint, and a second user who has successfully operated it. The "official workflow" for that function now refers to the promoted kit, not to a policy document.

The function still operates in kit mode for the things that haven't been promoted yet — that is normal and continues into Level 3. What changes is that the organization can now name at least one workflow whose AI-output handoff is governed in advance rather than negotiated case-by-case.

## Protocol dimension scores

| Dimension | Level 2 (Kit) value |
|-----------|---------------------|
| governance | reactive *(policy exists; output not governed)* |
| tooling | sanctioned + kits *(licenses + user-encoded skills)* |
| uncertainty_handling | absorbed *(kit author judgment, not protocol)* |
| coordination | mandated + bilateral *(policy + ad-hoc kit sharing)* |
| feedback_loops | reactive *(kit improves when it breaks)* |
| verification | informal *(by the kit's author)* |

## Case anchors

### SIGBIZ AI Enablement Advisory *(this AI CMM project — kit-rich Level 2)*

The Protocols for Business SIG of the Protocol Institute used a kit approach to produce the AI Capability Maturity Model publication suite — desk research across 40 sources, blog post, litepaper, and interactive HTML artifact. The kits in active use:

- **YAML DSL as model kit:** `ai-cmm-v3.yaml` is the source of truth from which the blog, litepaper, and artifact are all generated. It is editable as a markdown file and read by both humans and AI.
- **Source catalog kit:** `Research/source-catalog.md` is a structured, citable bibliography that every prose output cites against. Adding a new source updates one place; every output inherits the citation.
- **Layout-test kit:** `Artifact/drafts/layout-test.py` runs a 21-criterion design test on the artifact after any structural change.
- **Style-guide kit:** `_REPORT-STYLE.md` is a checklist applied against every draft before review.

The kits are organization-shared inside the SIG. Each has a named owner. The verification checkpoint is the SIG review pass before any document is published.

This is the lived example of what late Level 2 looks like when it is on the path to Level 3: a kit-rich function with a small but disciplined kit registry. The kits are not yet automated marketplaces (Level 4); they are not yet running as autonomous subagents (Level 3 with bundling). They are mid-promotion: personal artifacts becoming organizational ones.

*Status:* documented (this repository).

### Anthropic Legal team *(positive Level 2 → Level 3 transition)*

The Anthropic legal team built its first Cowork plugin in an afternoon by pointing Claude at the team's actual work product — memos, risk frameworks, policy documents — rather than coding from scratch. The plugin is a kit. The "Legal Constitution" is the harvested protocol. The team subsequently shipped the plugin org-wide.

*Source:* Cowork Deployment Handbook, "How teams at Anthropic use Claude Cowork" (Pike, Anthropic Legal). Status: documented.

### Klarna *(kit-stripping failure)*

Klarna's customer service AI deployment is the clearest published case of Level 2 failure: 90% daily AI adoption, two-thirds of customer service chats handled by AI in the first month, a $40M claimed profit improvement — followed by a public CEO reversal in May 2025 and the rehiring of human agents. The AI was deployed as a turnkey replacement for the contractor role; the kit that the displaced human represented (empathy, nuance, escalation judgment) was destroyed before it had been encoded. Catalog entry 31. Status: documented.

---

*Locked: 2026-05-09. Source for prose draft.*
