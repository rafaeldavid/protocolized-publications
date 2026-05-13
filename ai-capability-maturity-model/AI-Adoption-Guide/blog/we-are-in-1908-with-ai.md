# We are in 1908 with AI

*Why deployment is not adoption, what the electrification of the factory taught us, and what your AI strategy is missing.*

Most enterprise AI strategies right now are governance dressed as adoption. The acceptable-use policy, the approved tool list, the data-boundary memo, the procurement contract with the preferred LLM vendor — together they cover roughly half of what AI adoption actually is. The other half is already happening inside the organization, on a track the policy book has no name for: people inventing how to work with AI before anyone authorized it.

This essay argues that the difference between the two halves is what is going to separate the companies that get a productivity payoff from this generation of AI from the companies that do not. And to make the argument, we are going to spend the first part of it in 1908.

## The thirty-year gap

In 1900, the American factory was a steam engine wrapped in a building. A single coal-fired engine in the basement turned a central shaft running the length of the plant; leather belts dropped from the shaft to drive each machine. The architecture of the factory followed the geometry of the shaft. Machines were placed wherever the belts could reach, not where workflow wanted them.

By 1910, most of those factories had been electrified. Westinghouse and General Electric had won the war Edison started. The steam engine was gone. The motors and the wiring were in. And the productivity numbers did not move.

From 1899 to 1919, the share of installed horsepower in US manufacturing that ran on electricity jumped from 5% to 53%. Output per hour grew at less than 1.5% a year — about what it had averaged in the half-century before electrification. The most consequential general-purpose technology in industrial history had been deployed, almost completely, and the economy showed nothing for it.

The reason was that the first wave of factory electrification kept the architecture of the steam factory and merely *substituted* an electric motor for the steam engine. The motor still drove the central shaft. The shaft still drove the belts. The factory's layout still expressed the physics of the technology it had replaced.

The shift came when manufacturers began **unit drive** — a dedicated electric motor at every machine, no central shaft, no belts. Once power was decoupled from a single physical axis, the factory floor could be laid out for the workflow rather than for the geometry of mechanical power transmission. Henry Ford's Highland Park plant in 1913, and his River Rouge complex over the following fifteen years, were the canonical adoptions: assembly lines that were *unbuildable* without unit-drive electrification, and unimaginable to anyone still thinking in steam-shaft architecture.

From 1919 to 1929 American manufacturing productivity grew at almost 5% a year — the highest sustained rate in US economic history to that point. The productivity boom of the 1920s was not the payoff of *electrification*. It was the payoff of *the redesign of work* that electrification finally made conceivable.

The thirty-year gap between deployment and adoption was the cost of needing to rebuild the factory, retrain the workforce, recompose the supply chain, and learn that the new technology was not a better steam engine but a different *unit* of mechanical power. None of that came from buying the equipment.

In 1990, the economist Paul David published a paper called *The Dynamo and the Computer*. He pointed out that the US economy in the 1980s was doing the same thing again with information technology — computers everywhere, productivity nowhere — and predicted that the productivity gains would arrive only when organizations redesigned themselves around the new unit, the way Ford had redesigned the factory around the unit motor. He was off by about a decade. American productivity caught fire from 1995 to 2005, after enterprises had spent ten years reorganizing around ERP, lean manufacturing, supply-chain integration, and just-in-time inventory — all of which were *adoptions*, not deployments, of computing.

Electrification is not the only history that tells this story. The railway timetable did the same work in the 1830s: locomotives had been deployed for a decade with no national integration until Bradshaw's published timetable became the protocol that turned isolated lines into a network. The American managerial revolution did the same work after the Civil War: Alfred Chandler showed in *The Visible Hand* that the late-19th-century productivity wave came not from railways and the telegraph themselves but from the new managerial hierarchies that *adopted* what those technologies made possible. Even Brunelleschi's dome belongs in the file — a master builder solving on-site problems no one could solve from a blueprint, the kind of integrated practice that the Industrial Revolution would later split apart and that AI is now beginning to recombine. The pattern is durable: the deployment of a paradigm technology arrives first, and the adoption of it lags by a generation while organizations learn that the new thing is not a better version of the old thing.

## Today's 1908

We are in 1908 with AI.

The technology has been deployed almost completely. The most capable language models in the world are reachable from a browser tab. The most capable coding agents from an `npm install`. Some 80% of knowledge workers report using AI at work in some form. The vendor contracts have been signed. The acceptable-use policies have been published. The dashboards are lit.

And the productivity bump everyone is forecasting has not arrived.

The reason — same as in 1908 — is that the modal enterprise is running an LLM the way a 1908 factory ran an electric motor: bolted into a workflow built for the prior power source. The central shaft we have not yet replaced is the organizational assumption that work moves *down* through a hierarchy — leadership decides, IT procures, employees use. AI does not behave that way. It bubbles *up* through individual practice before it can be governed. Until the organization is redesigned around that fact, the deployment is just expensive electricity.

## The dual nature of AI adoption

AI is not a software upgrade. Its outputs are probabilistic. Its failure distribution shifts with every model update and every change in the harness around it. Its capabilities reshape what work *is* — not merely how work is done. This is the structural fact the rest of the argument falls out of.

Paradigm shifts move on two tracks simultaneously, and the tracks are not interchangeable. The first is the **Governed** track: what an organization approves in advance — policy, procurement, rollout, the things you can put in a deck. The second is the **Cultivated** track: what people invent on their own through use — exploration, play, vernacular practice, fluency. Tools change an organization by being procured and configured. Paradigms change an organization *and* the people inside it, and they require both tracks to move.

Most enterprises right now are running only the Governed track. It is the familiar handle for enterprise software, and it is the handle most AI-enablement vendors are selling against. Publish the acceptable-use policy. Approve the tool list. Set the data boundaries. Ship the vendor stack. Run the training module. Light up the dashboard. Renew the contract on its three-to-six-month expiry. Call it an AI strategy.

The structural problem with this approach is that it confuses *governance of access* with *governance of outcomes*. Sanctioning which tools may be used does not, by itself, govern whether the output is good, whether the failure is contained, or whether the practice is improving. The Cultivated track persists regardless. It just persists invisibly. The organization accumulates value it cannot see — the pipeline a senior engineer built in their notebook — alongside exposure it cannot quantify — the proprietary source code an intern pasted into ChatGPT last week. By the time either surfaces, the gap between them and the organizational handle has widened far enough that the response is usually a reflex: more policy, more prohibition, a new dashboard. The Cultivated track routes around the response, and the spiral continues.

The right mental model is not a choice between tracks. It is the *duality* — the recognition that durable adoption is what couples them. Cultivation discovers; Governance validates and scales. Cultivation is where novel uses surface, because the practitioner in the domain finds them first — not because a CEO sent a memo. Governance is where proven uses become organizational capability at scale, because validation at scale requires protocols, owners, and quality gates. Neither alone reaches durability.

Maturity, in this frame, is not how much AI an organization has deployed. It is the precision with which the handoff between Cultivation and Governance works. The AI Capability Maturity Model splits that precision into five levels — **Shadow → Sanctioned → Engine → Infrastructure → Planetary**, paired with **Play → Kit → Practice → Vernacular → Fluency** — and the levels measure the precision of the handoff, not the size of either side's investment.

## The medium of the handoff

The medium of the handoff is the protocol.

A protocol is the traffic light at the intersection, not the blockade across the road. The first enables flow; the second routes around itself. Most AI strategies today are blockades — prohibitions on what employees may *not* do — and the routing around is already in progress. A protocol, by contrast, is a coordination instrument that runs at the moment of handoff: when something practiced needs to become something dependable, when a kit needs to become a workflow, when an experiment needs to be ratified into shared practice.

Protocols are, in the Protocol Institute's framing, *infrastructural technologies for producing non-events*. Their value lies in the failures that do not happen: the data leak that did not occur because the prompt-filter middleware caught it; the chatbot judgment that did not bind the company because the escalation pathway intercepted it; the AI-generated brief that did not get filed without verification because the review protocol named who reviews and against what standard.

This is why measuring AI adoption success is genuinely hard. You cannot count the non-events directly. The deeper measure of adoption is not productivity alone. It is what one might call *software-abundance safety*: the precision with which a workforce can deploy enormous AI capability without imposing enormous unmanaged risk on its customers, its regulators, its markets, and itself.

## What the case file shows

The pattern repeats.

Samsung in April 2023: three engineers, three incidents, one month — proprietary source code pasted into ChatGPT through personal accounts, because no governed pathway existed and the Cultivated track had nowhere else to go. The exit took two years and a deliberate containment-then-re-admission sequence.

Klarna in 2024–25: 90% daily AI adoption, two-thirds of customer-service chats automated, $40M in claimed gains — and a CEO reversal twelve months later, describing the outputs as "generic, repetitive, insufficiently nuanced." Access had been governed; outputs had not.

Amazon in 2026: an 80%-of-developers-must-use-AI mandate, token-consumption leaderboards, an in-house agent tool called MeshClaw, and — as the *Financial Times* reported — employees automating non-essential work specifically to inflate their token counts. Goodhart's Law applied to AI adoption.

Boom Supersonic, by contrast, paired the AI capability with the protocol from the start: mkBoom wrapped AI-assisted structural analysis around the existing verification stack, with governance protocols designed alongside the capability rather than after a near-miss. XB-1 reached supersonic flight in January 2025 with zero safety incidents across the program.

In each of these cases, the deployment ran ahead of the adoption. The organizations that struggled treated AI as a procurement event when it was a paradigm event. The organization that succeeded treated the protocol as part of the capability.

## The new nature of work

In his recent essay *Inventing New Nature*, Venkat Rao names what this paradigm actually is. "New Nature," he writes, is "regimes of reality governed by technologically mediated laws that are nearly as inviolable, immutable, and persistent as those of nature." AI is not a tool layered on top of existing work. It is a new operating environment — terrain rather than blueprint. You discover New Nature, Rao says, by inventing it, by being it.

The job of the AI adoption lead under those conditions is not to finish a rollout. It is to keep the function navigable as the terrain keeps shifting. The work environment is increasingly something that cannot be engineered. It is the world the team inhabits.

The field has already lived through three phases of the new terrain and is entering the fourth. **Chat** (2022–23) was individual prompting under blanket policies, with cultivated practice running through personal accounts and governance responding mostly with bans. **Tools** (2023–24) was custom GPTs, prompt kits, team-authored workflows on the cultivated side, with sanctioned tool lists and verification checkpoints on the governed side. **Agents** (2024–26) was agentic IDEs, individual agent experiments, the Forward Deployed Engineer pattern, agent governance protocols, model-risk frameworks. **Factories** (2026–28) is the phase we are entering now — the moment when the unit of work shifts from "agents doing tasks" to "production lines producing outcomes continuously." The governance instruments change with it: compute and token budgets as the throughput lever, fleet-level observability, output-quality contracts, agent identity protocols.

This is the moment when the software factory and the knowledge factory themselves get reinvented. Not because the tools changed, but because the *unit* did. In 1908 the unit changed from "horsepower-at-the-shaft" to "horsepower-at-the-machine," and the factory floor had to be redrawn around the new unit. In 2026 the unit is changing from "person-hour of skilled output" to "continuously-running fleet of skilled output," and the organization will have to be redrawn around the new unit.

The redrawing will not arrive through deployment. It will arrive through adoption — Cultivated practice surfacing what works, Governed protocols making what works dependable, and the handoff between them tightening into a discipline.

## What to do

Durable AI adoption is what happens when Governance enables Cultivation. Governance that crowds out Cultivation produces compliance theater and shadow practice. Cultivation without Governance produces invisible exposure and unscalable wins. Governance through protocols, applied at the handoff, is what couples them.

The teams that get this right will not be the teams with the strictest policies, the biggest LLM contracts, or the most internal training hours. They will be the teams whose Governance enables Cultivation rather than displacing it; whose protocols feel like traffic lights, not blockades; whose successes are measured in the failures that did not happen.

Adoption is not a project to finish. When the paradigm itself keeps shifting, *done* is a category error. The work is keeping the Cultivated track productive and the Governed track legible — again and again, as the terrain keeps moving. That is the new operating condition of the firm.

We are in 1908 with AI. The deployment is mostly done. The adoption is mostly ahead of us. Whether your organization gets the 1920s productivity boom depends on whether you are still wiring electric motors to a steam-era shaft, or whether you are willing to redraw the factory.

---

*This essay accompanies the AI Adoption Guide — the slide deck **Durable AI Adoption** — available at [ai.protocolized.dev](https://ai.protocolized.dev/) and including five maturity levels, ten case studies, and an embedded interactive assessment.*

## Sources & further reading

- Paul A. David, "The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox," *American Economic Review* 80(2), May 1990. The canonical academic anchor for the deployment-vs-adoption productivity-paradox argument.
- Erik Brynjolfsson & Lorin Hitt, "Beyond Computation: Information Technology, Organizational Transformation and Business Performance," *Journal of Economic Perspectives*, 2000. Extends David's argument to the 1990s IT productivity boom.
- Alfred D. Chandler Jr., *The Visible Hand: The Managerial Revolution in American Business* (Harvard, 1977).
- Wolfgang Schivelbusch, *The Railway Journey: The Industrialization of Time and Space in the 19th Century* (1977) — context on Bradshaw's timetable as adoption protocol.
- Sachin Benny, "AI, tractors, and the productivity paradox," *Technically* (2026). The Kit-development analogue for the contemporary AI moment.
- Venkatesh Rao, "[Inventing New Nature](https://protocolized.summerofprotocols.com/p/inventing-new-nature)," *Protocolized*, May 2026. The "New Nature" frame this essay draws on.
- Venkatesh Rao, "Have Your Factory Call My Factory," *Protocolized*, March 2026.
- Protocols for Business SIG, "Finding Fault Lines within the Firm," *Protocolized*, January 2026.
- Timber Stinson-Schroff, "Introducing the Protocol Institute," *Protocolized*, April 2026.
- *Financial Times* (Rafe Rosner-Uddin), "Amazon staff use AI tool for unnecessary tasks to inflate usage scores," May 2026.

— *Protocols for Business · The Protocol Institute · May 2026*
