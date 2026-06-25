# Quality control — definition of done

Static checks (`contrast-check.mjs`, `preflight.mjs`) catch the cheap stuff. The
issues that actually shipped in earlier builds — low contrast on dark sections,
images not filling cards, kickers glued to titles, multi-column lists on mobile,
"is this a different font?" — were only caught by **rendering and measuring**.

So: a brand artifact is not done until it has been through a Playwright pass.
Every check below maps to a real bug this kit has already paid for.

## Run order
1. `node scripts/contrast-check.mjs` → 0 failures.
2. `node scripts/preflight.mjs <built.html>` → 0 fails.
3. The Playwright pass below, at **1280×720** (or 1280×900 for pages) **and 390×844** (mobile).

## The Playwright checklist

**Render & eyeball every view.** Screenshot each page section / every slide. Look for: text overlapping fixed chrome, content overflowing the frame, empty "scrunched-left" columns, cropped images.

**Contrast — measure, don't guess.** For any text whose background you're unsure of (especially nav/links/wordmark over dark hero/CTA bands), compute the ratio in-page:
```js
// returns WCAG contrast ratio of an element's text vs a known bg
el => { const c=getComputedStyle(el).color.match(/[\d.]+/g).map(Number);
  const f=x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)};
  const L=v=>.2126*f(v[0])+.7152*f(v[1])+.0722*f(v[2]); /* compare L(c) vs L(bg) */ }
```
Require **≥4.5** for text, **≥3.0** for large/UI. Scroll the dark sections under any fixed chrome and re-check (this is where the gutter failed at 1.23:1).

**Spacing — measure the gaps.** For each "label → title" and "title → body", assert the pixel gap is **≥8px** (kickers were colliding at 1px / 0px):
```js
(a,b) => Math.round(b.getBoundingClientRect().top - a.getBoundingClientRect().bottom)
```

**Images fit their boxes.** For media/preview cards, assert the image width ≈ the card width (a global `img{max-width:100%}` once capped them ~48px short):
```js
card => { const i=card.querySelector('img'); return card.getBoundingClientRect().width - i.getBoundingClientRect().width; } // expect ≈ border width, not tens of px
```

**Fonts actually loaded** (not a system fallback):
```js
() => ({ serif:document.fonts.check('16px "Instrument Serif"'), body:document.fonts.check('16px "Lora"'), ui:document.fonts.check('16px "Outfit"') })
```

**No horizontal overflow** (mobile especially): `document.documentElement.scrollWidth <= window.innerWidth`.

**Mobile menu works.** At 390px: the gutter is hidden, the `.pi-hamburger` is visible, clicking it opens `.pi-mobile-menu`, and the multi-column lists (`.pi-cols-2`) collapse to one column.

**Headings / line breaks.** No single-word orphan lines in titles or paragraphs; any forced one-line headings hold on desktop and wrap cleanly on mobile.

## Tips
- File-protocol is often blocked; serve with `python3 -m http.server` and point Playwright at `http://localhost:PORT`.
- Reveal-style decks scale a fixed canvas — screenshot at the deck's native size (e.g. 1280×720), and remember fixed chrome (wordmark/footer) is positioned to the viewport, so test at native size.
- Clean up screenshots and any `.playwright-mcp/` temp dirs before committing.
