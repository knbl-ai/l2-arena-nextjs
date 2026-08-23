# L2 ARENA — Next.js

Bilingual (Hebrew / English) landing page for **L2 Arena**, the national arena
project in Lod North, presented by the City of Lod and Kalkalit Lod.

This supersedes [`knbl-ai/l2-arena`](https://github.com/knbl-ai/l2-arena), which
holds the site as a single 23 MB self-unpacking `index.html` exported from a
design canvas. That repo is untouched and still serves the live site; this one is
a normal Next.js codebase rendering the same page.

## What changed

| | Original bundle | This repo |
|---|---|---|
| Delivery | one 23 MB `index.html`, unpacked by JS at runtime | statically prerendered `/he` and `/en` |
| React | fetched from unpkg at runtime | bundled, React 19 |
| Images | 78 PNG/JPEG inlined as base64, **16 MB** | 76 WebP in `public/img`, **2.6 MB** |
| Fonts | 3 hand-subset woff2 blobs | `next/font/google` (Assistant, hebrew + latin) |
| Language | client-side toggle, no URL change | `/he` and `/en` routes, `<html lang dir>` per route |
| SEO | none | per-locale metadata, hreflang, sitemap, robots |
| Accessibility | none | WCAG 2.1 AA / IS 5568, plus a preference panel and a published statement |
| Editing | only through the canvas tool | ordinary components |

The rendered output was verified against the live site by pixel diff at 1440px
and 375px in both languages. At 1440px every section still matches the original
in position, height and scroll width exactly. The accessibility work introduced
three deliberate visual changes, all of them colour or contrast fixes: the quote
body copy and credit line, the About card labels, and two footer text colours —
each of which failed the AA contrast threshold in the original. The credit line
also moved from 11px to 13px, which makes the page 6px taller at 375px.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 -> redirects to /he
npm run build    # all four routes prerender statically
npm run lint

# accessibility checks — need a production server running (npm run build && npm run start)
npm run a11y             # axe-core over every route x width x interactive state
npm run a11y:behaviour   # keyboard, dialog focus handling, panel effects, reflow
```

## Accessibility

Built to **IS 5568** (WCAG 2.1 AA), which binds any organisation serving the
Israeli public. The canvas export had none of it.

Compliance rests on the markup — landmarks, skip link, focus indicators,
`aria-expanded`, a real modal dialog for the mobile menu, reduced-motion support
and AA contrast. `components/A11yPanel.tsx` is a **user-preference panel, not an
accessibility overlay**: it sets `data-a11y-*` attributes on `<html>` and touches
nothing in the accessibility tree.

```bash
npm run a11y             # axe-core, 22 scans — clean
npm run a11y:behaviour   # keyboard, dialogs, panel, reflow — 28/28
```

**Before launch:** fill in the accessibility coordinator's name, email and phone in
`lib/i18n/accessibility.ts`. They are `{{ }}` placeholders and the statement page
shows a warning until they are replaced.

See [`docs/accessibility.md`](docs/accessibility.md) for the measured contrast
fixes, implementation notes and open items, and [`docs/skill.md`](docs/skill.md)
for the reusable skill this project produced.

## Layout

```
app/[lang]/          root layout (owns <html lang dir>) + page composition
app/[lang]/accessibility/  the accessibility statement (הצהרת נגישות)
components/          Nav, MobileMenu, BackToTop, RevealObserver, BgArcs, A11yPanel
components/sections/ one component per section of the page
lib/i18n/            he.ts / en.ts dictionaries, types, getRenderVals()
lib/assets.ts        generated image manifest (name -> src + intrinsic size)
lib/useFocusTrap.ts  modal focus handling, shared by the menu and the panel
scripts/             asset pipeline + the two accessibility audits
```

Copy lives in `lib/i18n/he.ts` and `lib/i18n/en.ts`. Both are typed against
`Dictionary`, so a key added to one language fails the build until it exists in
the other.

`lib/i18n/renderVals.ts` holds the layout values that differ between the two
languages — type sizes, pinned widths, flex directions. The Hebrew design was
laid out first and English is a set of nudges on top of it.

Styling is deliberately inline, as in the original, with shared classes and the
mobile overrides (`max-width: 860px`) in `app/globals.css`.

## Regenerating images

Assets are committed, so this is only needed if the upstream artifact changes:

```bash
node scripts/prepare-assets.mjs ../l2-arena/index.html
```

It decodes the bundle manifest, re-encodes every image to WebP, writes
`public/img/*.webp`, `app/icon.png` and `lib/assets.ts`, and drops the original
template into `.bundle-src/` (git-ignored) for reference. Names come from
`scripts/asset-map.mjs`.

## Notes carried over from the original

- The brand typeface *Narkiss Hadash* was never supplied; the font stack names it
  first and falls back to Assistant.
- The About heading reuses `heroTitle1` / `heroTitle2` rather than its own key.
  Preserved as-is — it may be a copy-paste bug worth fixing.
- Partner logos have no company names available, so they use empty `alt` and are
  exposed as decorative. This is listed as a known exception in the accessibility
  statement; supplying the real names is the only honest fix.
- `Opportunity` renders inside `Quotes`, matching the original DOM nesting.
