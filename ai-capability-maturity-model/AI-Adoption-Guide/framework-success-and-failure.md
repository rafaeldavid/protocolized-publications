# A Framework for AI Adoption: The Logic Behind Success Patterns and Failure Modes

*Synthesis across* Protocolized *(the AI Capability Maturity Model and adjacent essays),* Contraptions *(Venkatesh Rao),* Summer Lightning *(Sachin Benny),* Blundercheck *(Timber Stinson-Schroff), and* NPC Inc. *(rafa, "NPC Memo"). Companion to the AI Adoption Guide v0.4. Working draft, May 2026.*

---

## The question this document answers

The Adoption Guide ends with six success patterns and six failure modes. Why those? Are they distilled from cases — a list of best practices that happened to repeat — or are they consequences of something more structural? If the latter, the framework that produces them is the load-bearing artifact. The list is just its visible shadow.

This document articulates the framework. The argument is that the patterns are not a list of best practices; they are consequences of three things AI *is* to the organization, two things adoption *does*, and one thing management has to *become*. Each success pattern is what happens when a principle is honored. Each failure mode is what happens when one is violated. The framework also predicts patterns the v0.4 list has not yet named.

---

## The framework: three layers, six principles

### Layer A — What AI *is* to the organization

#### Principle 1. AI is new nature, not a new tool.

The deepest move in the cluster of writers building this framework is to stop treating AI as a tool the organization installs and start treating it as a *condition* the organization inhabits. Venkatesh Rao names the broader phenomenon *new nature* — "regimes of reality governed by technologically mediated laws that are nearly as inviolable, immutable, and persistent as those of nature itself." Sachin Benny supplies the mechanism: general-purpose technologies act as *annealing agents* on culture, "temporarily softening cultural material so that new dislocations can be introduced and retained." The organization that procures AI like it procures a CRM is making a category error. The organization that recognizes it is undergoing a phase change, and that the work environment afterward will be permanently different, is asking the right questions.

*Consequence for the framework:* control-era management vocabulary — SOPs, compliance regimes, approval workflows, zero-incident safety policies — is not wrong, but is no longer load-bearing. Adoption strategies that lean on it produce theatre rather than maturity.

### Layer B — How adoption *produces* value

#### Principle 2. Protocols emerge from kit, not from policy.

Sachin Benny's contribution to the framework is the argument that a general-purpose technology's economic value comes not from the technology itself but from the *kit phase* it enables — the period in which users repurpose the tool for contexts the makers did not anticipate. Kline and Pinch's documentation of rural users converting Model T Fords into corn shellers and water pumps is the canonical case; the contemporary version is the sales rep building a `/call-prep` skill the vendor did not ship. Rao's *Revenge of the Dilettantes* names the same phenomenon at the individual level: AI lets generalists assemble bespoke n=1 contraptions that previously required full-stack genius-god teams. Timber Stinson-Schroff's argument runs alongside: real safety and competence come from upgrading agents' *capabilities* — skills, kits, literacy — not from bolting on barriers. Rafa's NPC Memo formalizes the consequence: the firm's leverage shifts from designing the workflow to *managing the conditions under which protocols emerge and harden*.

The single sharp implication: the protocols worth formalizing are the ones domain experts have already proved through daily use. Central design without prior discovery cannot tell a high-value kit from a brittle one because the people doing the central design lack the domain knowledge that distinguishes them.

#### Principle 3. Stability lives in trade-off negotiation, not elimination.

Protocols are not solutions; they are stabilized trade-offs. Timber's *No Solutions* makes this argument from Hollnagel's safety-resilience tradition — the *ETTO* (Efficiency-Thoroughness Trade-Off) is asymmetric and unavoidable. A zero-incident strategy under Safety-I is "a total policy failure in terms of Safety-II" because it eliminates the trade-off space rather than navigating it. Protocols are "unreasonably sufficient tools for ETTOing well — that is, reproducing near-optimal trade-off choices." The NPC Memo argument is the firm-internal version: persistent operational frictions are "negotiated truces between speed/safety/legitimacy, not bugs to fix"; they are "morally troubling, technically fragile, and still stable for long periods." The mature organization recognizes its protocols as engineered arguments — Tim Beiko's term, picked up by the AI CMM — not as compliance regimes.

The framework consequence: any move that tries to eliminate a trade-off rather than stabilize it is a failure mode in waiting. *Premature optimization*, *premature consolidation*, *premature procurement* — all three are the same family of errors.

#### Principle 4. Adoption maturity is protocol precision at growing scope.

The AI Capability Maturity Model contributes the ladder. Five levels — Shadow, Kit, Designed, Infrastructural, Planetary — describe the scope at which protocols govern AI behavior. Movement up the ladder is not adoption-rate growth; it is governance becoming precise at progressively wider organizational scope. Benny's *deployment > installation* argument from his Eisenstein essay is the same claim under a different name: durable wealth aggregates "where coordination becomes structurally unavoidable during deployment, not where speculation peaks during installation." The internet's value is not in 1995's hype; it is in 2010's standardized payments rails and shipping protocols. Rafa's NPC Memo names the same: hardening rate, reversibility, and invisibility are the actual governance levers in protocolized environments.

This is the principle that turns adoption from a rate-of-change conversation ("what percent of our employees use AI weekly?") into a precision conversation ("at what scope do our protocols govern AI behavior, and where are they imprecise?"). The bottleneck function is the fault line — the place where pressure has accumulated and the existing protocol no longer absorbs it.

### Layer C — What management *becomes*

#### Principle 5. Commitment speed must not exceed comprehension speed.

This is the principle that produces the loudest failure modes. AI accelerates the production of consequential commitments — code merged, contracts drafted, customer messages sent, infrastructure changes applied — to a tempo that exceeds the organization's ability to comprehend what it is committing to. The NPC Memo names this directly: "Commitments accumulate faster than learning can constrain them. Exposure grows invisibly until reversal becomes costly or impossible." Benny's *ontological drift* essay supplies a related mechanism: when LLM-era development makes documentation cheap but meaning-changes expensive, organizations either stabilize their definitions or watch agent-generated work continually break. The Replit-Lemkin July 2025 incident is the canonical operational instance: an agent operating during a code freeze ignored explicit instructions, deleted a production database in nine seconds, and then misled the user about recoverability — exposure that became irreversible faster than any human could perceive, interpret, decide, and act.

The principle generates the antidotes: bounded blast radius, planning-only modes, sandboxed environments, human-in-the-loop checkpoints at high-stakes operations, "constitutional infrastructure" that compiles authority into technical interlocks because human reaction time is too slow.

#### Principle 6. Management is forestry, not engineering.

Once principles 1–5 are in place, what management *does* changes. Timber names it directly: "Next-generation leaders will look more like foresters than engineers." Rafa's *Managing the Water, Not the Ship* argues the same in operations-management terms: traditional command frameworks (the *Turn the Ship Around* model) work inside a singular owned protocol; protocolized environments require "regulating the conditions under which coordination becomes durable, reversible, or brittle." Rao's contribution is the human counterpart: as work moves toward F2F factory-to-factory pipelines, the boundary of what counts as a "team," "employee," or "manager" dissolves. The deployment lead's job inside that environment is closer to landscape management than to org-chart enforcement.

The implication is concrete: the management posture that produces durable adoption is *foraging, harvesting, and pruning* — making the landscape navigable for the people who actually do the work — not *specifying, approving, and enforcing*.

---

## How the framework produces the success patterns

| Success pattern (v0.4 Ch7) | Principles it embodies | Primary sources |
| --- | --- | --- |
| Champion-led pilots over top-down mandates | P2 (kit emergence), P6 (forestry) | AI CMM; Benny; Rao |
| Kit harvesting over central design | P2 | Benny (kit phase); Rao (revenge of the dilettantes); Rafa (deployment > installation) |
| Visibility rituals (the show-and-tell pattern) | P2, P5 (preserves comprehension speed) | NPC Memo (managing the water); SIGBIZ case study |
| Named workflow owners | P3 (trade-off stewardship), P4 (precision growth) | AI CMM; Timber (ETTO); Rafa (lifecycle management) |
| Output-scope governance, not access-scope | P5 (commitment limits), P3 | Rafa (constitutional infrastructure); Timber (Safety-II) |
| Domain-embedded protocol designers (FDE pattern) | P2, P6 | Armstrong (FDE literature); Rao; Timber |

Each row above is the framework predicting the pattern. *Champion-led pilots* is what P2 + P6 look like in operational life: protocols emerge from kit (so the people running pilots must already be kit-builders), and management's job is to surface and steward that emergence (not to assign use cases). *Kit harvesting* is P2 standing alone. *Visibility rituals* — the biweekly show-and-tell from Case Study 1 — operationalize P2 and P5 simultaneously: they make kit work visible (P2's precondition for harvest) and they keep team comprehension paced with team commitment (P5).

## How the framework produces the failure modes

| Failure mode (v0.4 Ch7) | Principles it violates | Primary sources |
| --- | --- | --- |
| Mandate without criteria | P2, P6 | Shopify case; Timber (Safety-I as policy failure) |
| Premature optimization (incl. consolidation, procurement) | P2, P3 | Benny (kit phase closure); Timber (ETTO) |
| Disorientation and intensification | P5 | NPC Memo; HBR May 2026 (psychological debt); Foreword research |
| Capability erosion | P1 (treats AI as tool replacing role), P4 (skill destroyed before encoded) | Klarna, Duolingo cases; UK lawyer survey 2026; Benny (immutable skills) |
| Tempo misalignment | P5, P3 | AI CMM (temporal divergence); Uber engineering; Benny (carnival outpacing governance) |
| Extended blast radius | P5 | Replit-Lemkin Jul 2025; Air Canada; NPC Memo (constitutional infrastructure) |

The same pattern reads inversely. *Mandate without criteria* is the failure of P2 (legislating without discovery) and P6 (engineering instead of foresting). *Disorientation and intensification* is what P5 looks like when violated at the individual scale: workers' commitment-load outpaces their comprehension-load, and the organization's adoption metrics climb while its underlying capability gap widens silently. *Extended blast radius* is P5 violated at the technical scale: agent permissions outpace agent judgment, and the failure is consequential before any human can intervene.

---

## What the framework predicts that v0.4 has not yet named

A framework's value is partly in what it surfaces beyond the visible list. Four candidate additions deserve attention.

**Ontological drift / specification rot.** Benny's argument is that LLM-era development makes documentation cheap but meaning-changes expensive. When an organization sanctions AI tools without stabilizing terminology, schema, and interface contracts, agent-generated work continually breaks. This is a P5 violation distinct from blast radius: the failure is not that an agent does too much, but that the meanings the agent depended on shifted underneath it. *Worth adding to Ch7 as its own failure mode.*

**Annealing without re-cooling.** Benny's broader thesis is that GPTs heat culture, and that heating must be followed by *pinning* — protocols, standards, hardened institutional forms — for the rearrangement to retain. An organization that runs continuous adoption pilots without ever consolidating what it learned is heating without cooling; the kits never harden into protocols. This is adjacent to *premature optimization* but inverse: that one consolidates too soon, this one never consolidates. *Worth distinguishing.*

**Atomization in gooey-self environments.** Rao's *Getting Gooier* argument is that AI mediation makes humans interiorly softer (more reflective, AI-companioned) and interpersonally pricklier (less available to colleagues, more transactional in handoffs). The team-protocol cost is real and not yet named in Ch7: as AI becomes the primary collaborator, human-to-human collaboration thins out, and the function loses the tacit coordination that made informal kits travel. *Worth adding as a P6 failure mode.*

**Cozyweb capture.** Benny's note on the cozyweb — that it "must be continuously reenacted to hold together" because it lacks external pinning — has a firm-internal analog: SIGs, channels, and informal shadow-F2F pipelines that produce real value but never harden into organizational protocol. This is a richer formulation of what the v0.3 *Shadow F2F invisible* failure mode was reaching for. The failure is not invisibility; it is the *absence of pinning*, which leaves the value bound to specific people rather than transferred into the organization. *Worth recasting and re-including.*

The framework also predicts at least one success pattern not currently in the v0.4 list:

**Pinning rituals — periodic protocol consolidation.** If kits emerge from interpretive flexibility (P2) and stability comes from honoring trade-offs in shared protocol form (P3), the organization needs a recurring move that *closes* the kit phase for a chosen workflow — names the protocol, locks the schema, retires the personal versions. The biweekly show-and-tell makes kits visible; the periodic pinning ritual hardens the visible into protocol. The Protocol Designer / FDE role is the person who runs the pinning. *Worth adding as a sixth success pattern at the cost of dropping or reframing one of the current six.*

---

## Where each thinker sits in the framework

| Thinker / source | Primary contribution | Secondary contributions |
| --- | --- | --- |
| **Protocolized (Rao + collaborators)** — the foundational vocabulary: dynamic non-events, fault lines, F2F factory-to-factory, the Forward Deployed Engineer pattern, the AI Capability Maturity Model itself. | P1 (new nature), P4 (the level ladder) | P2 (FDE pattern), P6 (gooey selves) |
| **Contraptions (Rao)** — the macro-historical and posthuman frame: New Nature, New Ferality, Massed Muddler Intelligence, Revenge of the Dilettantes, Bespokeness, Be Slightly Monstrous, Getting Gooier. | P1, P6 | P2 (muddler markets, dilettante economies), P5 (gooey-self speed mismatch) |
| **Summer Lightning (Benny)** — the thermodynamic-temporal lens: kit phase, interpretive flexibility, annealing/pinning, ontological drift / Waterfall return, deployment > installation, immutable skills. | P1 (annealing), P2 (kit phase), P4 (deployment-driven hardening) | P5 (ontological drift) |
| **Blundercheck (Timber)** — the safety-and-blunder layer: Safety-II, ETTOs, blunderchecks as minimum viable protocols, capability over barriers, foresters not engineers, protocols as voluntary constraints. | P3 (ETTO/Safety-II), P6 (foresters) | P2 (capability over barriers) |
| **NPC Inc. / NPC Memo (rafa)** — the operations-management voice: managing the water not the ship, coordination equilibria, deployment-phase hardness (Eisenstein), constitutional infrastructure, commitment-vs-comprehension, agent stewardship. | P5 (commitment vs comprehension), P6 (water management) | P3 (coordination equilibria), P4 (hardness during deployment) |
| **AI Capability Maturity Model** — the ladder, the bottleneck-as-fault-line move, output-scope governance, the FDE pattern instantiated. | P4 (the level ladder) | P2 (FDE), P3 (engineered-arguments view of protocol) |

No single source supplies the whole framework. The synthesis is load-bearing because each contributor compensates for a blind spot in the others: Rao's macro-frame would float without Benny's mechanism; Benny's mechanism would not be operational without Timber's trade-off vocabulary and Rafa's commitment-comprehension surface; the AI CMM's ladder would be a typology without all three.

---

## How to use this document

For the deployment lead reading the v0.4 guide: when a candidate move (a proposed pilot, a vendor pitch, a process change) is presented, walk it through the six principles. If it can only be defended by appealing to a control-era principle the framework has retired (zero-incident safety, central process design, full SOP enforcement) and has no support in P1–P6, the move is a failure mode in waiting regardless of how plausible it sounds.

For the framework's continued development: the four predicted-but-unnamed patterns above (ontological drift, annealing-without-cooling, atomization, cozyweb capture, plus pinning rituals as a success pattern) are the next-version candidates for Ch7. Each needs a documented anchor case before promotion. The framework is itself in its kit phase.

---

## Source files cited inline (saved to `Resources/`)

- *Timber Stinson-Schroff — No Solutions* (Blundercheck, Jul 2024) — Safety-II and ETTOs
- *Sachin Benny — General-Purpose Technologies as Annealing Agents* (Summer Lightning, Jan 2026) — heating/pinning, archival vs carnival time
- *Sachin Benny — Why Does AI Development Look Like 1980s Software Planning?* (Summer Lightning, Nov 2025) — ontological drift, Waterfall return
- *Venkatesh Rao — Revenge of the Dilettantes* (Contraptions, Dec 2025) — bespokeness, n=1 contraptions, dilettante economies
- *Venkatesh Rao — Have Your Factory Call My Factory* (Protocolized, Mar 2026) — F2F artisanal capitalism
- *AI Capability Maturity Model v3* — `Model-Development/ai-cmm-v3.yaml` and the published litepaper

## Source URLs cited but not saved locally

- Timber: [Year in Preview](https://blundercheck.timberschroff.com/p/year-in-preview) · [Safety at the End of History](https://blundercheck.timberschroff.com/p/safety-at-the-end-of-history) · [The Tupperware Analogy](https://blundercheck.timberschroff.com/p/the-tupperware-analogy)
- Rafa (NPC Memo): [Managing the Water, Not the Ship](https://npcmemo.substack.com/p/managing-the-water-not-the-ship) · [Protocol-First Operations Management](https://npcmemo.substack.com/p/internal-draft-protocol-first-operations) · [Eisenstein's Spine and Technology Stabilization](https://npcmemo.substack.com/p/eisensteins-spine-and-technology) · [Lost in between Speed and Scale](https://npcmemo.substack.com/p/lost-in-between-speed-and-scale) · [Infrastructure of Firm Control](https://npcmemo.substack.com/p/infrastructure-of-firm-control)
- Sachin: [Knowledge Chronotopes](https://summerlightning.substack.com/p/knowledge-chronotopes) · [Immutable Skills](https://summerlightning.substack.com/p/immutable-skills) · [Carnival Time, Hardness](https://summerlightning.substack.com/p/carnival-time-hardness-and-the-machines) · [Everyone Is On Something](https://summerlightning.substack.com/p/everyone-is-on-something)
- Rao: [Massed Muddler Intelligence](https://contraptions.venkateshrao.com/p/massed-muddler-intelligence) · [Intentions Have a Surprising Amount of Detail](https://contraptions.venkateshrao.com/p/intentions-have-a-surprising-amount) · [Getting Gooier](https://contraptions.venkateshrao.com/p/getting-gooier) · [Be Slightly Monstrous](https://contraptions.venkateshrao.com/p/be-slightly-monstrous) · [New Nature](https://contraptions.venkateshrao.com/p/new-nature) · [New Ferality](https://contraptions.venkateshrao.com/p/new-ferality)

---

*Working draft, May 2026. Send corrections and additions to the SIGBIZ Discord or comment on the Adoption Guide PR.*
