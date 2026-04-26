---

## slug: excel-visicalc

title: Excel & Visicalc — the spreadsheet as universal substrate
class: B
level: L1
era: "1979–present"
function:

- finance
- operations
- all
archetypes:
- Folkway
- Guild
- Tinkerer
class_a_pairing: samsung-chatgpt-leak
status: draft
sources_count: 6

## One-line frame

A tool nobody mandated became the universal substrate of business knowledge work — and stayed there for forty-five years because the protocol was the file format, not the institution.

## The case

Visicalc launched in October 1979 as an Apple II application written by Dan Bricklin and Bob Frankston. It was the first commercial spreadsheet — a 24-row by 63-column grid that recalculated dependent cells when a value changed. Within two years it had sold ~700,000 copies, sold most of those Apple IIs in offices, and been called "the killer app." By 1983 Lotus 1-2-3 had displaced it on the IBM PC; by the mid-1990s Microsoft Excel had displaced Lotus on Windows. The product changed hands; the *thing* — a recalculating grid you could share — never went away.

What spread alongside the product was a set of *conventions nobody wrote down*. One sheet per dataset. Columns for fields, rows for records. Formulas as the calculation layer. Named ranges as the variable layer. Pivot tables as the aggregation layer. None of these were sanctioned by an IT department or a standards body. They emerged from millions of practitioners doing finance, operations, supply-chain, marketing, and management knowledge work — and from the file format being legible enough that conventions could spread by example.

By 2020 conservative estimates put the number of Excel users above one billion. Financial services, manufacturing, healthcare, and government still run their core operational logic in spreadsheets; multiple Microsoft Research papers and senior engineers (most quotably Joel Spolsky) describe Excel as "the world's most widely-used programming environment." Forty-five years after Visicalc, the protocol layer is still the shape of a recalculating grid plus a folk vocabulary of how to use it.

## What the protocol enabled

End-user computing had three properties that did the work:

1. **The file format.** A `.xls` or `.csv` was legible across organizations, software versions, and decades. Conventions could spread by example because the artifact carried the convention with it.
2. **The conventions were pedagogical.** A finance team could open another team's pivot table and learn how that team thought about its data without anyone writing documentation.
3. **No central authority gated adoption.** IT departments did not approve spreadsheets the way they approved ERP systems. The result was a bottom-up, peer-to-peer adoption pattern. Sophistication accumulated as expert practitioners (financial modellers, supply-chain analysts, ops managers) rather than in a central architecture.

The trade-offs are well-documented — uncontrolled spreadsheet sprawl, "Excel hell" risk concentration, the *London Whale* (JPMorgan's $6B+ trading loss traced to a copy-paste error in a VaR spreadsheet), the UK government's 2020 PHE COVID-19 case-loss caused by hitting Excel's row limit. These failures were a reslut of the same property that made the technology useful: nobody could be stopped from using it.

## For AI today

The shape is repeating. AI tooling spreads at the periphery of organisations the same way Visicalc did at the periphery of accounting departments in the early 1980s: individuals adopt the tool for personal productivity (Claude, Cursor, ChatGPT, Cline), and conventions form at the edge — eval scripts, prompt scaffolds, hand-rolled context recipes — without any IT department in the loop.

The substrate-emergence question for any organisation watching this happen is the one a 1981 CIO faced when accountants began running their own models in Visicalc: which conventions are already forming, and which deserve to be promoted into shared practice the rest of the organisation can adopt by example? The forty-five years of spreadsheet history say the answer is rarely "ban the tool" — it is much more often "watch the artifact, learn what the practitioners encoded, and standardise what the file format already carries."

## Era markers

- **October 1979** — Visicalc launches on Apple II.
- **January 1983** — Lotus 1-2-3 launches on IBM PC; sells 60,000 copies in first month.
- **November 1985** — Excel 1.0 launches on Macintosh (Windows version 1987).
- **1995** — Excel 95 ships with Visual Basic for Applications; spreadsheets become a programming environment.
- **2010** — Microsoft estimates Excel has ~750M users; spreadsheet conventions are the de facto data-exchange format for business operations globally.
- **2020** — UK Public Health England loses ~16,000 COVID-19 case records due to Excel's 65,536-row limit; canonical "spreadsheet at scale" failure event.
- **2026** — billion-plus active users; Excel still the largest non-trivial coding environment in the world by user count.

## Where else this case appears in the repo

- `assessment/index.html` — Excel/Visicalc as the L1 historical-parallel in the RESULTS object's `periodTech` block.
- `levels/index.html` — Excel as L1 historical parallel.
- Litepaper drafts — referenced obliquely in §1 (end-user computing as the precedent for individual AI use); not a featured case.

## Website card (HTML)

Below is the rendered card as it would appear on `/case-studies/`, matching the existing card markup (Samsung, Klarna, Shopify, Air Canada, Boom). The `case-org` link opens the canonical external anchor in a new tab — for this card, Steven Levy's 1984 *Harper's* essay (the closest contemporary account of how the spreadsheet substrate took shape).

```html
<!-- Excel / Visicalc — L1 success-mode -->
<div class="case-card" id="excel-visicalc">
  <div class="level-pill">Level 1 — Shadow</div>
  <h3 class="case-org"><a href="https://medium.com/backchannel/a-spreadsheet-way-of-knowledge-8de60af7146e" target="_blank" rel="noopener" >Visicalc and Excel ↗</a></h3>
  <div class="case-sector">Knowledge work</div>
  <div class="case-body">
    Visicalc launched in 1979 on the Apple II as the first recalculating-grid spreadsheet — an individual tool that finance and operations practitioners adopted for personal productivity. The product changed hands three times — Visicalc → Lotus 1-2-3 → Excel — but the file format and its conventions stayed in place. By 2026, more than a billion users run business operations through spreadsheet logic that nobody designed and no central authority approved.
  </div>
  <div class="case-mechanism">
    Conventions nobody mandated became universal standards because the artifact carried its standards with it.
  </div>
  <div class="case-question">
    Which AI conventions are already emerging in your organization within individual use. Should any be scaled?
  </div>
  <button class="expand-toggle drill-toggle" onclick="toggleContent(this)" data-closed="Why is this an example of L1 success mode? ↓" data-open="Why is this an example of L1 success mode? ↑">Why is this an example of L1 success mode? ↓</button>
  <div class="drill-content">
    Three structural properties let Excel's conventions spread by example: the file format was the standard; the artifact was pedagogical (open another team's pivot table and you learned how they thought); and no central authority gated adoption. Steven Levy's 1984 <em>Harper's</em> essay <em>A Spreadsheet Way of Knowledge</em> — linked above — was written while Visicalc was still the dominant package, before any convention had been institutionalised. It is the closest contemporary account of how an L1 substrate emerges.
  </div>
</div>
```

### Render notes

- **Anchor `id`:** `excel-visicalc` — matches the slug in the frontmatter and the `prototypes/` filename.
- **Level pill:** `Level 1 — Shadow` — same wording the live page already uses.
- **Sector line:** `End-user computing / Knowledge work` — function-shaped (matching the Boom "Aerospace / Manufacturing" pattern), not org-shaped (since the case has no single org).
- **External link target:** the Levy 1984 *Harper's* essay (Medium republication). Could swap to Packy McCormick's *Excel Never Dies* if the editorial voice prefers a contemporary anchor over a historical one — both are listed in the Sources block below.
- **Drilldown CTA copy:** matches the live page's voice ("Why Level 3 and not higher", "What happened next", etc.). Class B cards default to "Why this is the L success/failure mode" — opens with the case's level position.

## Sources

1. Packy McCormick, "Excel Never Dies," *Not Boring*, March 16, 2021. [https://www.notboring.co/p/excel-never-dies](https://www.notboring.co/p/excel-never-dies) — primary anchor for the value-emergence argument; tracks Excel's longevity and the failed-to-replace cycle.
2. Steven Levy, "A Spreadsheet Way of Knowledge," *Harper's Magazine*, November 1984. [https://medium.com/backchannel/a-spreadsheet-way-of-knowledge-8de60af7146e](https://medium.com/backchannel/a-spreadsheet-way-of-knowledge-8de60af7146e) — primary historical: the cultural-anthropology piece on Visicalc's office impact, written while the impact was unfolding.
3. Dan Bricklin, "The Idea (history of Visicalc)," personal site. [http://www.bricklin.com/history/saiidea.htm](http://www.bricklin.com/history/saiidea.htm) — primary source from Visicalc's co-creator; the origin story.
4. Microsoft Research / Joel Spolsky, "Excel as the world's most widely-used programming environment." Multiple talks; canonical written reference: Joel on Software, "What is the work of Dan Bricklin?" (2002). [https://www.joelonsoftware.com/2002/04/06/what-is-the-work-of-dan-bricklin/](https://www.joelonsoftware.com/2002/04/06/what-is-the-work-of-dan-bricklin/)
5. UK Public Health England COVID-19 reporting incident (Excel row limit). The Guardian coverage, October 2020. [https://www.theguardian.com/world/2020/oct/05/how-excel-may-have-caused-loss-of-16000-covid-tests-in-england](https://www.theguardian.com/world/2020/oct/05/how-excel-may-have-caused-loss-of-16000-covid-tests-in-england) — canonical "Excel-at-scale-fails" reference event.
6. JPMorgan Chase London Whale trading loss — VaR spreadsheet copy-paste error, 2012. JPMorgan internal task force report (public): "Report of JPMorgan Chase & Co. Management Task Force Regarding 2012 CIO Losses," January 2013. [https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/task-force-report.pdf](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/task-force-report.pdf) — canonical "spreadsheet error at financial scale" reference.

