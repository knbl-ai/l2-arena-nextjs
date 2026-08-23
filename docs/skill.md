# The `design-canvas-to-nextjs` skill

Lives at `~/.claude/skills/design-canvas-to-nextjs/` (not in this repo — it is a
user-level Claude Code skill). This site is what it was built from and validated
against.

## What it covers

Rebuilding a Claude design-canvas export as a Next.js app: unpacking the bundle,
mapping section structure, converting the template dialect to JSX, the image and
font pipeline, verifying the rebuild renders identically, and the accessibility
pass (step 8).

```
SKILL.md                          the workflow and non-negotiables
reference/bundle-format.md        bundle anatomy and template dialect
reference/traps.md                every trap that cost a debug cycle
reference/accessibility.md        IS 5568, the overlay evidence, a11y traps
scripts/    unpack, sections, extract-translations, html-to-jsx,
            optimize-assets, to-next-image, compare, a11y-audit, a11y-behaviour
assets/     A11yPanel.tsx, a11y.css, useFocusTrap.ts, reducedMotion.ts,
            accessibility-statement.ts
```

## Scope and limits

**It triggers on Claude design-canvas exports**, detected by
`__bundler/manifest`, `<x-dc>`, `sc-if` / `sc-for` / `sc-camel-*`, or
`class Component extends DCLogic`.

It is **not** a general HTML→Next.js converter today:

- `unpack.mjs` decodes a base64 bundle manifest — an ordinary site has none
- `sections.py` looks for `data-screen-label` markers (overridable via `--marker`)
- `html-to-jsx.py` handles the canvas dialect, though its core HTML→JSX conversion
  is generic
- `a11y-behaviour.mjs`, `a11y.css` and `A11yPanel.tsx` carry this site's `l2-`
  class prefix, brand colours and Hebrew labels — they need re-homing per project

It is also **not push-button**. It is a method plus tools: four decisions up front,
roughly ten hand conversions the converter deliberately refuses to guess at, and a
verification loop whose output has to be read. On this project that loop is what
caught the `filter`-on-`body` bug, the phantom axe violations and the missed
`rgba()` contrast failures.

Validated against exactly **one** bundle. Expect the first differently-shaped
export to surface something.

## To generalise it

Three contained changes would make it "static site → accessible Next.js":

1. a plain-HTML path — skip unpack, derive sections from headings/landmarks
2. selectors and expected labels in `a11y-behaviour.mjs` moved to a config file
3. a neutral class prefix and CSS custom properties for brand colours in the panel
