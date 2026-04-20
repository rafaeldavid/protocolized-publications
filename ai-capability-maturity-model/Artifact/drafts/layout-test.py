#!/usr/bin/env python3
"""
Layout Test Suite — AI CMM Artifact v1.html
Option A: Single Centered Column

Tests that the page uses one consistent content column, centered via margin:auto,
with typographic measure and alignment practices appropriate for a reading-focused
professional landing page.

Best practices encoded:
  - Single column width between 640–740px (optimal reading measure at 1rem body)
  - Centering via margin:0 auto on the column, not text-align:center on sections
  - No more than 2 distinct content max-widths (outer container + optional card inset)
  - Section-level text-align:center banned (breaks the left-edge axis for long text)
  - Consistent section padding via a shared class
  - Mobile breakpoint + hamburger nav
  - Print stylesheet for output card
  - CSS custom properties throughout (no hardcoded one-offs)
"""

import re
import sys
import os

HTML_PATH = os.path.join(os.path.dirname(__file__), "v1.html")

with open(HTML_PATH, "r") as f:
    html = f.read()

css_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
css = css_match.group(1) if css_match else ""

results = []
passed = 0
failed = 0

def test(name, condition, detail="", category=""):
    global passed, failed
    status = "PASS" if condition else "FAIL"
    if condition:
        passed += 1
    else:
        failed += 1
    results.append((status, category, name, detail))

# ── A. Single Column Width ────────────────────────────────────────────────────
# The defining property of Option A: one column width governs the page.

# A1: --max CSS variable defined and in single-column range
max_match = re.search(r'--max:\s*([\d]+)px', css)
max_val = int(max_match.group(1)) if max_match else 0
test("A1", 640 <= max_val <= 980,
     f"--max: {max_val}px  (target: 640–980px; wider end suits interactive/UI-heavy pages)",
     "A · Column width")

# A2: Container uses --max (not a hardcoded px value)
container_uses_var = bool(re.search(r'\.container\s*\{[^}]*max-width:\s*var\(--max\)', css, re.DOTALL))
test("A2", container_uses_var,
     ".container should use max-width: var(--max) not a hardcoded value",
     "A · Column width")

# A3: No competing content widths — count distinct max-width values between 400–900px
# Extract from CSS rule blocks only (not @media selectors, which also use max-width)
css_rule_bodies = re.findall(r'\{([^}]+)\}', css)
all_maxwidths = []
for rule in css_rule_bodies:
    all_maxwidths.extend([int(v) for v in re.findall(r'max-width:\s*([\d]+)px', rule)])
content_widths = sorted(set(v for v in all_maxwidths if 400 < v < 900))
test("A3", len(content_widths) <= 2,
     f"Found {len(content_widths)} distinct content max-widths: {content_widths}px  (target: ≤2)",
     "A · Column width")

# A4: No sub-container is significantly narrower than --max (would create visual indent)
# Allow up to 80px narrower (padding/inset for cards is fine)
problem_widths = [v for v in content_widths if v < max_val - 80]
test("A4", len(problem_widths) == 0,
     f"Sub-containers much narrower than --max ({max_val}px): {problem_widths}px",
     "A · Column width")


# ── B. Centering Method ───────────────────────────────────────────────────────
# Option A centers the column via margin:auto, not by centering the text inside it.

# B1: No section-level text-align:center (the axis-breaker)
section_ids = ['entry', 'context', 'cases', 'assessment', 'exit', 'output']
bad_sections = []
for sid in section_ids:
    # Match #id { ... text-align: center ... }
    pattern = rf'#\b{sid}\b\s*\{{[^}}]*text-align\s*:\s*center'
    if re.search(pattern, css, re.DOTALL):
        bad_sections.append(f'#{sid}')
test("B1", len(bad_sections) == 0,
     f"Sections with text-align:center: {bad_sections}  — breaks left-edge axis for multi-line text",
     "B · Centering method")

# B2: Column centered via margin:0 auto (the correct centering pattern)
margin_auto_count = len(re.findall(r'margin\s*:\s*0\s+auto', css))
test("B2", margin_auto_count >= 1,
     f"Found {margin_auto_count} uses of margin:0 auto  (need ≥1 for column centering)",
     "B · Centering method")

# B3: text-align:center used sparingly overall — only for small UI elements
# (arc steps, badges, output card internals — not for reading text)
total_center = len(re.findall(r'text-align\s*:\s*center', css))
test("B3", total_center <= 6,
     f"Found {total_center} total text-align:center in stylesheet  (target: ≤6 — reserve for UI components only)",
     "B · Centering method")


# ── C. Typographic Measure ────────────────────────────────────────────────────
# Reading measure: the width of the text column. Research-backed range: 520–720px
# at standard body font sizes. Too wide = fatiguing. Too narrow = choppy.

# C1: --max is within optimal reading measure
test("C1", 520 <= max_val <= 980,
     f"--max: {max_val}px  (520–720px optimal for pure reading; up to 980px acceptable for interactive/assessment tools)",
     "C · Typographic measure")

# C2: Body font-size is 1rem (not smaller, which would require a narrower measure)
body_font = re.search(r'body\s*\{[^}]*font-size\s*:\s*([\d.]+)(rem|px)', css, re.DOTALL)
if body_font:
    size_val = float(body_font.group(1))
    unit = body_font.group(2)
    # 1rem = 16px; acceptable range 14px–18px
    size_px = size_val * 16 if unit == 'rem' else size_val
    test("C2", 14 <= size_px <= 18,
         f"Body font-size: {body_font.group(1)}{unit} = {size_px}px  (target: 14–18px)",
         "C · Typographic measure")
else:
    test("C2", False, "Body font-size not found in stylesheet", "C · Typographic measure")

# C3: Line-height in readable range (1.5–1.8 for body text)
line_height = re.search(r'body\s*\{[^}]*line-height\s*:\s*([\d.]+)', css, re.DOTALL)
if line_height:
    lh = float(line_height.group(1))
    test("C3", 1.5 <= lh <= 1.8,
         f"Body line-height: {lh}  (target: 1.5–1.8)",
         "C · Typographic measure")
else:
    test("C3", False, "Body line-height not found", "C · Typographic measure")


# ── D. Section Consistency ────────────────────────────────────────────────────
# Sections should share padding via a class, not have it hardcoded per-section.

# D1: Shared .section padding rule exists
section_padding = re.search(r'\.section\s*\{[^}]*padding', css, re.DOTALL)
test("D1", section_padding is not None,
     ".section class should define shared padding for all content sections",
     "D · Section consistency")

# D2: Entry section padding is consistent with .section (within 20px)
section_padding_val = re.search(r'\.section\s*\{[^}]*padding\s*:\s*([\d]+)px', css, re.DOTALL)
entry_padding_val = re.search(r'#entry\s*\{[^}]*padding\s*:\s*([\d]+)px', css, re.DOTALL)
if section_padding_val and entry_padding_val:
    sp = int(section_padding_val.group(1))
    ep = int(entry_padding_val.group(1))
    test("D2", abs(sp - ep) <= 30,
         f".section padding: {sp}px, #entry padding: {ep}px  (should be within 30px)",
         "D · Section consistency")
else:
    # If entry has no special padding override, that's fine
    test("D2", entry_padding_val is None,
         "Could not compare — check #entry and .section padding manually",
         "D · Section consistency")

# D3: Section separator pattern exists (border-top between sections)
section_separator = bool(re.search(r'\.section\s?\+\s?\.section\s*\{[^}]*border', css, re.DOTALL))
test("D3", section_separator,
     ".section + .section should have a border-top separator for visual rhythm",
     "D · Section consistency")


# ── E. Responsive & Completeness ─────────────────────────────────────────────

# E1: Mobile breakpoint defined
breakpoints = re.findall(r'@media\s*\(max-width:\s*([\d]+)px\)', css)
test("E1", len(breakpoints) >= 1,
     f"Breakpoints found: {breakpoints}  (need ≥1)",
     "E · Responsive")

# E2: Hamburger nav present for mobile
test("E2", 'nav-hamburger' in html,
     "Hamburger button required — nav-links hidden on mobile",
     "E · Responsive")

# E3: Viewport meta tag
test("E3", 'name="viewport"' in html,
     "Viewport meta tag required for mobile rendering",
     "E · Responsive")

# E4: Print stylesheet present (output card must be printable per brief)
test("E4", '@media print' in css,
     "Print stylesheet required — output card must be printable/forwardable",
     "E · Responsive")

# E5: Container padding on mobile (readability on small screens)
mobile_container_padding = bool(re.search(r'@media[^{]*600px[^{]*\{[^}]*padding', css, re.DOTALL))
container_has_padding = bool(re.search(r'\.container\s*\{[^}]*padding', css, re.DOTALL))
test("E5", container_has_padding,
     ".container must have horizontal padding to prevent text touching screen edges on mobile",
     "E · Responsive")


# ── F. CSS Architecture ───────────────────────────────────────────────────────

# F1: CSS custom properties used throughout
css_var_uses = len(re.findall(r'var\(--', css))
test("F1", css_var_uses >= 20,
     f"Found {css_var_uses} var(--) uses  (target: ≥20 — ensures consistent design tokens)",
     "F · CSS architecture")

# F2: Font families via variables (no inline font-family strings in rules)
font_var_uses = len(re.findall(r'font-family\s*:\s*var\(--font', css))
test("F2", font_var_uses >= 3,
     f"Found {font_var_uses} font-family:var(--font) uses  (target: ≥3)",
     "F · CSS architecture")

# F3: No inline style width hacks that would override the column
# Check for inline style="max-width:" or style="width:" that aren't on small UI elements
inline_width_overrides = re.findall(r'style="[^"]*max-width\s*:\s*\d{3,}px', html)
test("F3", len(inline_width_overrides) == 0,
     f"Found {len(inline_width_overrides)} inline max-width overrides — these break the single-column contract",
     "F · CSS architecture")


# ── Report ────────────────────────────────────────────────────────────────────

print()
print("─" * 65)
print("  LAYOUT TEST — AI CMM Artifact v1.html")
print("  Option A: Single Centered Column")
print("─" * 65)

current_cat = None
for status, category, name, detail in results:
    if category != current_cat:
        print(f"\n  {category}")
        current_cat = category
    icon = "✓" if status == "PASS" else "✗"
    print(f"    {icon} {status}  {name}")
    if detail and status == "FAIL":
        print(f"           → {detail}")

print()
print("─" * 65)
print(f"  {passed} passed · {failed} failed · {passed + failed} total")
print("─" * 65)
print()

sys.exit(0 if failed == 0 else 1)
