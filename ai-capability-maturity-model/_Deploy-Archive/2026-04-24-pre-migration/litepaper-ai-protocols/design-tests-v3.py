"""
design-tests-v3.py
Screenshot-driven design regression tests for litepaper index.html.
Based on 7 screenshots submitted 2026-03-18 showing visual alignment issues.
Run: python3 design-tests-v3.py
"""

import re, sys

HTML_FILE = "index.html"

try:
    with open(HTML_FILE, encoding="utf-8") as f:
        html = f.read()
except FileNotFoundError:
    print(f"ERROR: {HTML_FILE} not found. Run from the html/ directory.")
    sys.exit(1)

results = []
def check(name, passed, detail=""):
    results.append((name, passed, detail))
    status = "PASS" if passed else "FAIL"
    line = f"  [{status}] {name}"
    if not passed and detail:
        line += f"\n         → {detail}"
    print(line)

print("\n── Screenshot-driven regression tests (v3) ─────────────────────────────")

# ─── Category I: Hero meta block removed (user request) ──────────────────────
print("\n[I] Hero meta block")

check(
    "I-1: .hero-meta div not present in HTML",
    'class="hero-meta"' not in html,
    'Remove the <div class="hero-meta"> block containing word/page/footnote counts'
)
check(
    "I-2: .hero-meta CSS rules not present",
    ".hero-meta" not in re.sub(r':root\s*\{[^}]+\}', '', html),
    "Clean up orphaned .hero-meta, .hero-meta-item, .hero-meta-sep CSS rules"
)

# ─── Category II: Summary bullets — no direct flex-child inline elements ─────
# Issue: <li> uses display:flex. Any element inside (sup, strong, etc.) becomes
# a separate flex item, splitting text into multiple side-by-side columns.
# Fix: wrap text content after .summary-bullet-marker in a <span>.
print("\n[II] Summary bullets — flex child integrity (Screenshot 20.55.26)")

bullet_lis = re.findall(
    r'<li>\s*<span class="summary-bullet-marker">[^<]+</span>(.*?)</li>',
    html, re.DOTALL
)

check(
    "II-1: Summary bullet li items found",
    len(bullet_lis) >= 4,
    f"Expected ≥4 summary bullet <li> items, found {len(bullet_lis)}"
)

if bullet_lis:
    # Each li should have text content wrapped in a <span> after the marker,
    # so that <sup>, <strong> etc. are NOT direct flex children of the <li>.
    unwrapped = []
    for i, content in enumerate(bullet_lis):
        content = content.strip()
        # Direct flex child = text node or block-level element at top level of li content
        # Safe: content is wrapped in a single <span> or <div>
        # Unsafe: naked text, or first child is <sup>, <strong>, etc.
        # Check: after the marker span, content should start with <span or <div
        if not re.match(r'^<(?:span|div)\b', content):
            unwrapped.append(i + 1)
    check(
        "II-2: Text after summary-bullet-marker is wrapped in <span>",
        len(unwrapped) == 0,
        f"Bullet(s) {unwrapped}: text content is a naked text node or starts with inline element. "
        "Wrap all text content after the marker in <span> to prevent flex fragmentation."
    )

    # Specifically: no <sup> as direct flex child of summary bullet li
    sup_direct = []
    for i, content in enumerate(bullet_lis):
        # If the first non-whitespace character after the marker is a <sup> or contains
        # a top-level <sup> (not nested in a span/div), it's a direct flex child
        stripped = content.strip()
        if re.match(r'^<sup\b', stripped):
            sup_direct.append(i + 1)
    check(
        "II-3: No <sup> as direct flex child of summary-bullets li",
        len(sup_direct) == 0,
        f"Bullet(s) {sup_direct}: <sup> is first element after marker, making it a flex item. "
        "Wrap in <span>."
    )

    # No <strong> as direct flex child of summary bullet li
    strong_direct = []
    for i, content in enumerate(bullet_lis):
        stripped = content.strip()
        if re.match(r'^<strong\b', stripped):
            strong_direct.append(i + 1)
    check(
        "II-4: No <strong> as direct flex child of summary-bullets li",
        len(strong_direct) == 0,
        f"Bullet(s) {strong_direct}: <strong> is first element after marker, making it a flex item."
    )

# ─── Category III: Not-list items — no direct flex-child inline elements ──────
# Issue: .not-list li uses display:flex with ::before as first flex item.
# Any <strong> inside the li becomes a SECOND flex item (column), and the text
# node after it becomes a THIRD flex item. Fix: wrap <strong>+text in <span>.
print("\n[III] Not-list items — flex child integrity (Screenshots 20.56.27)")

not_list_lis = re.findall(
    r'<ul class="not-list[^"]*">\s*(.*?)</ul>',
    html, re.DOTALL
)

all_not_list_items = []
for ul_content in not_list_lis:
    items = re.findall(r'<li>(.*?)</li>', ul_content, re.DOTALL)
    all_not_list_items.extend(items)

check(
    "III-1: Not-list li items found",
    len(all_not_list_items) >= 4,
    f"Expected ≥4 not-list items, found {len(all_not_list_items)}"
)

if all_not_list_items:
    # Items with <strong> should have it wrapped in a parent span
    # i.e. the li content should be <span><strong>...</strong> text</span>
    # NOT <strong>...</strong> text (where strong is a direct flex child)
    strong_as_flex = []
    for i, item in enumerate(all_not_list_items):
        stripped = item.strip()
        # Bad: starts with <strong (direct flex child alongside text node)
        if re.match(r'^<strong\b', stripped):
            strong_as_flex.append(i + 1)
    check(
        "III-2: No <strong> as direct flex child of not-list li",
        len(strong_as_flex) == 0,
        f"Item(s) {strong_as_flex}: <strong> is a direct flex child of not-list li. "
        "Wrap <strong>+text in <span> so they form one flex item."
    )

# ─── Category IV: Section 4 table inside .prose ──────────────────────────────
# Issue: .table-wrap in #emerging is a direct child of .container (920px wide),
# while the introductory text above it is inside .prose (680px). The width
# mismatch creates visual misalignment.
print("\n[IV] Section 4 table alignment (Screenshot 20.56.09)")

# Find the #emerging section content
emerging_match = re.search(
    r'id="emerging".*?(?=<section\b|<footer\b|$)',
    html, re.DOTALL
)

if emerging_match:
    emerging_html = emerging_match.group()
    # Find .table-wrap blocks
    table_wraps = list(re.finditer(r'<div class="table-wrap[^"]*">', emerging_html))
    # For each table-wrap, check it's inside a .prose div
    # Strategy: find table-wrap positions and check if there's an unclosed .prose div above
    tables_outside_prose = 0
    for tw in table_wraps:
        # Look at content before this table-wrap
        before = emerging_html[:tw.start()]
        # Count prose opens and closes
        prose_opens = len(re.findall(r'<div class="prose[^"]*">', before))
        prose_closes_after_last_open = 0
        # Find last prose open
        last_prose = list(re.finditer(r'<div class="prose[^"]*">', before))
        if last_prose:
            last_prose_pos = last_prose[-1].start()
            after_last_prose = before[last_prose_pos:]
            # Count div opens and closes after last .prose open to see if it's still open
            div_opens = len(re.findall(r'<div\b', after_last_prose))
            div_closes = len(re.findall(r'</div>', after_last_prose))
            if div_closes >= div_opens:
                # More closes than opens — the last .prose div has been closed
                tables_outside_prose += 1
        else:
            tables_outside_prose += 1

    check(
        "IV-1: Section 4 .table-wrap is inside .prose",
        tables_outside_prose == 0,
        f"{tables_outside_prose} table-wrap(s) in #emerging are outside .prose. "
        "Wrap in <div class=\"prose\"> to match the introductory text width."
    )
else:
    check("IV-1: #emerging section found", False, "Could not locate #emerging section in HTML")

# ─── Category V: Step items — flex integrity ─────────────────────────────────
# Issue: .step-item uses display:flex. Content inside .step-body should not
# have flex fragmentation issues. The diagnostic table should be inside .prose.
print("\n[V] Step items — layout integrity (Screenshots 20.56.23, 20.56.27)")

# The .step-list should be inside .prose (in section #how-to-use)
how_to_use_match = re.search(
    r'id="how-to-use".*?(?=<section\b|<footer\b|$)',
    html, re.DOTALL
)

if how_to_use_match:
    s6_html = how_to_use_match.group()
    # Find step-list
    step_list_match = re.search(r'<div class="step-list">(.*?)</div>\s*\n\s*\n', s6_html, re.DOTALL)
    # Find if step-list is inside .prose
    step_list_pos = s6_html.find('class="step-list"')
    before_step_list = s6_html[:step_list_pos] if step_list_pos != -1 else ""

    # Check: does the last unclosed .prose precede the step-list?
    last_prose = list(re.finditer(r'<div class="prose[^"]*">', before_step_list))
    step_in_prose = False
    if last_prose:
        last_prose_pos = last_prose[-1].start()
        after_last_prose = before_step_list[last_prose_pos:]
        div_opens = len(re.findall(r'<div\b', after_last_prose))
        div_closes = len(re.findall(r'</div>', after_last_prose))
        step_in_prose = div_closes < div_opens  # prose is still open

    check(
        "V-1: .step-list is inside .prose in #how-to-use",
        step_in_prose,
        ".step-list found outside .prose. Steps should be inside the reading column."
    )

    # Not-list items inside step-body should not have strong as direct flex child
    step_not_lists = re.findall(
        r'<ul class="not-list[^"]*">(.*?)</ul>',
        s6_html, re.DOTALL
    )
    step_not_items = []
    for ul in step_not_lists:
        items = re.findall(r'<li>(.*?)</li>', ul, re.DOTALL)
        step_not_items.extend(items)

    strong_flex_in_steps = [
        i+1 for i, item in enumerate(step_not_items)
        if re.match(r'^\s*<strong\b', item.strip())
    ]
    check(
        "V-2: No <strong> as direct flex child in step not-list items",
        len(strong_flex_in_steps) == 0,
        f"Step not-list item(s) {strong_flex_in_steps}: <strong> is a direct flex child. "
        "Wrap in <span>."
    )
else:
    check("V-1: #how-to-use section found", False, "Could not locate #how-to-use section")
    check("V-2: No <strong> as direct flex child in step not-list items", False, "Section not found")

# ─── Results ─────────────────────────────────────────────────────────────────
passes = sum(1 for _, p, _ in results if p)
fails  = sum(1 for _, p, _ in results if not p)
total  = len(results)
print(f"\n{'─'*60}")
print(f"  {passes}/{total} passed   {fails} failed")
if fails:
    print("  FAIL — fix issues above then re-run")
else:
    print("  PASS — all screenshot-driven checks clean")
print()
sys.exit(0 if fails == 0 else 1)
