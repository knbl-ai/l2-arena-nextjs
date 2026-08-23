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
| Editing | only through the canvas tool | ordinary components |

The rendered output was verified against the live site by pixel diff at 1440px
and 375px in both languages: every section matches in position and height, and
under 0.25% of pixels differ (WebP re-encoding and sub-pixel text rendering).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 -> redirects to /he
npm run build    # both routes prerender statically
npm run lint
```

## Layout

```
app/[lang]/          root layout (owns <html lang dir>) + page composition
components/          Nav, MobileMenu, BackToTop, RevealObserver, BgArcs
components/sections/ one component per section of the page
lib/i18n/            he.ts / en.ts dictionaries, types, getRenderVals()
lib/assets.ts        generated image manifest (name -> src + intrinsic size)
scripts/             one-off pipeline that decodes the original bundle
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
- Partner logos have no company names available, so they use empty `alt`.
- `Opportunity` renders inside `Quotes`, matching the original DOM nesting.
