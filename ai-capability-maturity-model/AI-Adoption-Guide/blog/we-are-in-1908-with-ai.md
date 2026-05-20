![Hero collage — twelve images from the AI Capability Maturity Model deck, mixing medallion-style governed-track images, dense gestural cultivated-track images, and the lighter geometric chapter-intro family.](./we-are-in-1908-with-ai-hero.png)

# We are in 1908 with AI

*Why deployment is not adoption, what the electrification of the factory taught us, and what your AI strategy is missing.*

Most enterprise AI strategies right now are governance theater dressed as adoption. The acceptable-use policy, the approved tool list, the data-boundary memo, the procurement contract with the preferred LLM vendor — together they cover roughly half of what AI adoption actually is. The other half is already happening inside the organization, on a track the policy book has no name for: people inventing how to work with AI before anyone authorized it.

The difference between the two halves is what is going to separate the companies that get thrive with AI from the companies that barely survive, or fail altogether.

## The thirty-year gap

In 1900, the American factory was a steam engine wrapped in a building. A single coal-fired engine sat in a separate engine house and turned a heavy iron **line shaft** running the length of the plant; secondary countershafts branched off perpendicular; leather belts dropped from the countershafts down to drive each individual machine. The architecture of the factory followed the geometry of the shaft. Machines were placed wherever a belt could reach. Sequential operations were not necessarily adjacent. Multi-story buildings were the norm, because vertical shaft runs were shorter than horizontal ones, so floors stacked instead of spreading. Starting any single machine required spinning up the entire engine. Idle machines still consumed power through belt and shaft friction; net mechanical losses ran 25–40% of installed horsepower. Overhead shafts blocked windows, dripped lubricating oil, and threw broken belts onto the workers below. The architecture made every factory the same shape — long, narrow, multi-story, dim — and built around the physical cost of moving rotation through space.

By 1910, most of those factories had been electrified. Westinghouse and General Electric had won the war Edison started. The steam engine was gone. And the productivity numbers did not move.

From 1899 to 1919 the share of installed horsepower in US manufacturing that ran on electricity climbed from 5% to 53%. Output per hour grew at less than 1.5% a year — about what it had averaged in the half-century before electrification. The most consequential general-purpose technology in industrial history had been deployed, almost completely, and the economy showed nothing for it.

The economic historian Warren D. Devine Jr. documented why in his 1983 paper *From Shafts to Wires*. The first wave of factory electrification, which he calls **group drive**, did exactly one thing: it replaced the steam engine with a large electric motor. The motor still drove the line shaft. The shaft still drove the countershafts. The belts still drove the machines. The factory's layout, ceiling height, multi-story form, on/off behavior, and 30% friction losses were all unchanged. The power source was now electric; everything else was still the steam factory. This is what most of the missing twenty years of productivity look like. The technology had been deployed; the architecture had not been redesigned.

The shift that produced the 1920s boom is what Devine calls **unit drive**: a dedicated electric motor at each individual machine, sized to that machine's load, with electrical wiring replacing the iron shaft as the power-distribution medium. The substitution sounds small. The redesigns it required were enormous.

Once power could be delivered anywhere wiring reached, factory layout could finally follow the workflow rather than the geometry of mechanical power transmission. Machines could be placed in the sequence of the work, not in the run of the shaft. Factories went single-story; Ford's River Rouge complex, fully operational by 1928, was a mile and a half long, with materials flowing in a straight line from raw input to finished output. Building costs dropped 30–50% because there was no longer a need for heavy framing to support overhead shafts. Sawtooth roofs and overhead electric fixtures finally filled the floor with light. Conveyors, monorails, and electric cranes — all newly practical because power could now reach them — decoupled material movement from human carrying. Idle machines drew zero power, and energy consumption per unit of output fell by 40–50% against group drive. The minimum efficient scale of a factory collapsed: a two-horsepower motor was as efficient as a two-hundred-horsepower one, so small specialized shops could electrify economically for the first time, and the American industrial landscape fragmented into many smaller, more efficient producers.

Ford's moving assembly line at Highland Park in 1913 — Devine's canonical case — was *unbuildable* under group drive. Each station needed independent power, independent start and stop, and a placement chosen by the product rather than the shaft. All three required unit drive.

From 1919 to 1929 American manufacturing productivity grew at almost 5% a year — the highest sustained rate in US economic history to that point. The productivity boom of the 1920s was not the payoff of *electrification*. It was the payoff of *the architectural redesign that electrification made conceivable*.

Devine is explicit about why the gap was a generation. Existing buildings could not be cheaply retrofit; the shaft was load-bearing in more than one sense. Machine tools had to be redesigned by their manufacturers to accept unit motors. Industrial engineering as a discipline did not yet exist — Penn State opened the first US program in 1909, MIT in 1919 — so the knowledge of *how to design a factory around unit drive* had to be invented and then taught. The workforce had to be retrained from millwrights and belt-fitters to industrial electricians and specialized machine operators. And the First World War was the inflection: wartime production forced rapid factory builds; new builds went unit-drive natively; the postwar 1920s rebuilds locked the architecture in.

In 1990 the economist Paul David published a follow-on paper, *The Dynamo and the Computer*, that drew Devine's pattern forward into the computer age. He pointed out that the US economy in the 1980s was doing the same thing again with information technology — computers everywhere, productivity nowhere — and predicted that the gains would arrive only when organizations redesigned themselves around the new unit, the way Ford had redesigned the factory around the unit motor. He was off by about a decade. American productivity caught fire from 1995 to 2005, after enterprises had spent ten years reorganizing around ERP, lean manufacturing, supply-chain integration, and just-in-time inventory — all of which were *adoptions*, not deployments, of computing.

Electrification is not the only history that tells this story. The railway timetable did the same work in the 1830s: locomotives had been deployed for a decade with no national integration until Bradshaw's published timetable became the protocol that turned isolated lines into a network. The American managerial revolution did the same work after the Civil War: Alfred Chandler showed in *The Visible Hand* that the late-19th-century productivity wave came not from railways and the telegraph themselves but from the new managerial hierarchies that *adopted* what those technologies made possible. Even Brunelleschi's dome belongs in the file — a master builder solving on-site problems no one could solve from a blueprint, the kind of integrated practice that the Industrial Revolution would later split apart and that AI is now beginning to recombine. The pattern is durable: the deployment of a paradigm technology arrives first, and the adoption of it lags by a generation while organizations learn that the new thing is not a better version of the old thing.

## Today's 1908

We are in 1908 with AI. The technology has been deployed almost completely. The most capable language models in the world are reachable from a browser tab. The most capable coding agents from a single terminal command like `npm install`. Some 80% of knowledge workers report using AI at work in some form. The vendor contracts have been signed. The acceptable-use policies have been published. The dashboards are humming with token-usage data.

And the productivity bump everyone is forecasting has not arrived.

The diagnosis is the same as 1908: most enterprises are running an LLM in **group drive**. They have replaced one tool with a more capable one — the way the steam engine was replaced by a large electric motor — while leaving the line shaft of the organization untouched. The line shaft we have not yet replaced is the organizational assumption that work moves *down* through a hierarchy: leadership decides, IT procures, vendors integrate, employees use. AI does not behave that way. It bubbles *up* through individual practice before it can be governed. Adoption that captures real value will come from **unit drive** — the model present at the point of work, not bolted onto a workflow built for a previous power source; teams arranged around what the model is good at, not around the procurement contract; specialist roles re-thought against the new unit cost of skilled output; protocols installed at every handoff so the practice scales. Until that redesign happens, the deployment is just expensive electricity.

## The dual nature of AI adoption

AI is not a software upgrade. Its outputs are probabilistic. Its failure distribution shifts with every model update and every change in the harness around it. Its capabilities reshape what work *is* — not merely how work is done. This is the structural fact the rest of the argument falls out of.

Paradigm shifts move on two tracks simultaneously, and the tracks are not interchangeable. The first is the **Governed** track: what an organization approves in advance — policy, procurement, rollout, the things you can put in a deck. The second is the **Cultivated** track: what people invent on their own through use — exploration, play, vernacular practice, fluency. Tools change an organization by being procured and configured. Paradigms change an organization *and* the people inside it, and they require both tracks to move.

Most enterprises right now are running only the Governed track. It is the familiar handle for enterprise software, and it is the handle most AI-enablement vendors are selling against. Publish the acceptable-use policy. Approve the tool list. Set the data boundaries. Ship the vendor stack. Run the training module. Light up the dashboard. Renew the contract on its three-to-six-month expiry. Call it an AI strategy.

The structural problem with this approach is that it confuses *governance of access* with *governance of outcomes*. Sanctioning which tools may be used does not, by itself, govern whether the output is good, whether the failure is contained, or whether the practice is improving. The Cultivated track persists regardless. It just persists invisibly. The organization accumulates value it cannot see — the pipeline a senior engineer built in their notebook — alongside exposure it cannot quantify — the proprietary source code an intern pasted into ChatGPT last week. By the time either surfaces, the gap between them and the organizational handle has widened far enough that the response is usually a reflex: more policy, more prohibition, a new dashboard. The Cultivated track routes around the response, and the spiral continues.

The right mental model is not a choice between tracks. It is the *duality* — the recognition that durable adoption is what couples them. Cultivation discovers; Governance validates and scales. Cultivation is where novel uses surface, because the practitioner in the domain finds them first — not because a CEO sent a memo. Governance is where proven uses become organizational capability at scale, because validation at scale requires protocols, owners, and quality gates. Neither alone reaches durability.

Maturity, in this frame, is not how much AI an organization has deployed. It is the precision with which the handoff between Cultivation and Governance works. The AI Capability Maturity Model splits that precision into five levels — **Shadow → Sanctioned → Engine → Infrastructure → Planetary**, paired with **Play → Kit → Practice → Vernacular → Fluency** — and the levels measure the precision of the handoff, not the size of either side's investment.

## The medium is the protocol

A protocol is the traffic light at the intersection, not the blockade across the road. The first enables flow; the second routes around itself. Most AI strategies today are blockades — prohibitions on what employees may *not* do — and the routing around is already in progress. A protocol, by contrast, is a coordination instrument that runs at the moment of handoff: when something practiced needs to become something dependable, when a kit needs to become a workflow, when an experiment needs to be ratified into shared practice.

Protocols are, in the Protocol Institute's framing, *infrastructural technologies for producing non-events*. Their value lies in the failures that do not happen: the data leak that did not occur because the prompt-filter middleware caught it; the chatbot judgment that did not bind the company because the escalation pathway intercepted it; the AI-generated brief that did not get filed without verification because the review protocol named who reviews and against what standard.

This is why measuring AI adoption success is genuinely hard. You cannot count the non-events directly. The deeper measure of adoption is not productivity alone. It is what one might call *software-abundance safety*: the precision with which a workforce can deploy enormous AI capability (cognition, intelligence, processing) without imposing enormous unmanaged risk on its customers, its regulators, its markets, and itself.

## What the case file shows

The pattern repeats.

Samsung in April 2023: three engineers, three incidents, one month — proprietary source code pasted into ChatGPT through personal accounts, because no governed pathway existed and the Cultivated track had nowhere else to go. The exit took two years and a deliberate containment-then-re-admission sequence.

Klarna in 2024–25: 90% daily AI adoption, two-thirds of customer-service chats automated, $40M in claimed gains — and a CEO reversal twelve months later, describing the outputs as "generic, repetitive, insufficiently nuanced." Access had been governed; outputs had not.

Amazon in 2026: an 80%-of-developers-must-use-AI mandate, token-consumption leaderboards, an in-house agent tool called MeshClaw, and — as the *Financial Times* reported — employees automating non-essential work specifically to inflate their token counts. Goodhart's Law applied to AI adoption.

In each of these cases, the deployment ran ahead of the adoption. The organizations that struggled treated AI as a procurement event when it was a paradigm event. The organization that succeeded treated the protocol as part of the capability:

Boom Supersonic paired the AI capability with the protocol from the start: mkBoom wrapped AI-assisted structural analysis around the existing verification stack, with governance protocols designed alongside the capability rather than after a near-miss. XB-1 reached supersonic flight in January 2025 with zero safety incidents across the program.

## The new nature of work

In his recent essay *Inventing New Nature*, Venkat Rao names what this paradigm actually is. "New Nature," he writes, is "regimes of reality governed by technologically mediated laws that are nearly as inviolable, immutable, and persistent as those of nature." AI is not a tool layered on top of existing work. It is a new operating environment — terrain rather than blueprint. You discover New Nature, Rao says, by inventing it, by being it.

The job of the AI adoption lead under those conditions is not to finish a rollout. It is to keep the function navigable as the production refactors around the new capabilities. The work environment is increasingly something that cannot be engineered. It is the world the team inhabits.

The field has already lived through three phases of the new terrain and is entering the fourth. 

- **Chat** (2022–23) was individual prompting under blanket policies, with cultivated practice running through personal accounts and governance responding mostly with bans. 
- **Tools** (2023–24) was custom GPTs, prompt kits, team-authored workflows on the cultivated side, with sanctioned tool lists and verification checkpoints on the governed side. 
- **Agents** (2024–26) was agentic IDEs, individual agent experiments, the Forward Deployed Engineer pattern, agent governance protocols, model-risk frameworks. 
- **Factories** (2026–28) is the phase we are entering now. Now is when the unit of work shifts from "agents doing tasks" to "continuous runtime production lines." The governance instruments change with it: compute and token budgets as the throughput lever, fleet-level observability, output-quality contracts, agent identity protocols.

This is the moment when the software factory and the knowledge factory themselves get reinvented. In 1908 the *unit* changed from "horsepower-at-the-shaft" to "horsepower-at-the-machine," and the factory floor had to be redrawn around the new unit. In 2026 the unit is changing from "person-hour of skilled output" to "continuously-running fleet of skilled output," and the organization will have to be redrawn around the new unit.

The redrawing will not arrive through tool deployment. It will arrive through adoption — Cultivated practice surfacing what works, Governed protocols making what works dependable, and the handoff between them tightening into a discipline.

## What to do

Durable AI adoption is what happens when Governance enables Cultivation. Governance that crowds out Cultivation produces compliance theater and shadow practice. Cultivation without Governance produces invisible exposure and unscalable wins. Governance through protocols, applied at the handoff, is what couples them.

The teams that get this right will not be the teams with the strictest policies, the biggest LLM contracts, or the most internal training hours. They will be the teams whose Governance enables Cultivation rather than displacing it; whose protocols feel like traffic lights, not blockades; whose successes are measured in the failures that did not happen.

Adoption is not a project to finish. When the paradigm itself keeps shifting, *done* is a category error. The work is keeping the Cultivated track productive and the Governed track legible — again and again, as the terrain keeps moving. That is the new operating condition of the firm.

We are in 1908 with AI. The deployment is mostly done. The adoption is mostly ahead of us. Whether your organization gets the 1920s productivity boom depends on whether you are still wiring electric motors to a steam-era shaft, or whether you are willing to redraw the factory.

---

*This essay accompanies the AI Adoption Guide — the slide deck **Durable AI Adoption** — available at [ai.protocolized.dev](https://ai.protocolized.dev/) and including five maturity levels, ten case studies, and an embedded interactive assessment.*

## Sources & further reading

- **Warren D. Devine Jr., "From Shafts to Wires: Historical Perspective on Electrification,"** *Journal of Economic History* 43(2), June 1983, pp. 347–372. The substantive engineering history of factory redesign during electrification; see especially pp. 357–365 on the group-drive → unit-drive transition and its architectural consequences.
- Paul A. David, "The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox," *American Economic Review* 80(2), May 1990, pp. 355–361. The famous follow-on that draws Devine's pattern forward into the IT productivity paradox.
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