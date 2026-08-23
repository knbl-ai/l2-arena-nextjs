# Accessibility

## Obligation

**IS 5568** (תקן ישראלי 5568), in force since October 2017 under תקנות שוויון זכויות
לאנשים עם מוגבלות (התאמות נגישות לשירות), **סעיף 35**. Adopts **WCAG 2.1 Level AA**.
Binds public bodies and any private organisation serving the public. Enforced by
נציבות שוויון זכויות לאנשים עם מוגבלות; up to ~₪50,000 per claim without proof of
damages. A published accessibility statement naming a contact is a separate
requirement.

## Approach: panel, not overlay

`components/A11yPanel.tsx` is a **user-preference panel**. Each control sets one
`data-a11y-*` attribute on `<html>`; one rule in `app/globals.css` responds. It
injects nothing into the accessibility tree and repairs nothing at runtime.

Overlay products (accessiBe, UserWay, EqualWeb, נגיש בקליק) claim to *produce*
conformance. They do not — the FTC settled with accessiBe for $1M over that claim
in January 2025, and 22.6% of H1-2025 US accessibility filings targeted sites that
already had a widget installed. Compliance rests on the markup below.

Rejected as dependencies: `accessibility` (ranbuch) injects its own DOM/CSS and
would fight ~430 inline styles; `@glitchlab/accessify` first published June 2026;
`yortem/yAccessibility` effectively unmaintained.

## What was added

| Criterion | Change |
|---|---|
| 1.3.1 Info and Relationships | `<header role="banner">`, `<nav aria-label>`, `<main>`, `<section aria-labelledby>`, `<footer role="contentinfo">`; `role="list"` on the team grids |
| 2.4.1 Bypass Blocks | skip link to `#content` |
| 2.4.7 Focus Visible | `:focus-visible` ring — the export had none at all |
| 2.4.11 Focus Not Obscured | `scroll-margin-top` so anchors clear the fixed nav |
| 4.1.2 Name, Role, Value | `aria-expanded` + `aria-controls` on the hamburger and the logo toggle |
| 2.1.2 / 2.4.3 | mobile menu as a real dialog: focus trap, Escape, focus restore, `inert` background, scroll lock |
| 1.4.3 Contrast | five colour fixes, below |
| 2.3.3 | `prefers-reduced-motion` honoured by the CSS, the reveal observer and the counters |
| 1.1.1 | decorative SVG hidden; informative images labelled |
| 3.1.2 | `hrefLang` / `lang` on the language toggle |
| — | "opens in a new window" announced on external links |

Plus `/he/accessibility` and `/en/accessibility` — the statement page.

## Contrast fixes

All measured, not estimated. The original failed five checks:

| Where | Was | Ratio | Now | Ratio |
|---|---|---|---|---|
| Quote body text, 20px regular | `#8A8FA3` | 3.05 | `#5B6472` | 5.98 |
| Quote credit line, 11px → 13px | `#B0AFB6` | 2.07 | `#6B7280` | 4.83 |
| About card labels, 14.4px regular | `#B08A45` | 3.19 | `#8D6E37` | 4.74 |
| Footer copyright, 15.6px | `rgba(255,255,255,.4)` | 3.58 | `rgba(255,255,255,.55)` | 5.71 |
| Footer disclaimer, 11px | `rgba(255,255,255,.35)` | 3.05 | `rgba(255,255,255,.55)` | 5.71 |

The last two were missed by a first pass that scanned hex colours only — `rgba()`
on a dark panel looks white and is not. Let axe compute contrast; it resolves
alpha against the real backdrop.

Not changed: gold eyebrows `#9D7331` at 4.05 pass, because 20px **bold** clears
the 3:1 large-text threshold (≥18.66px bold).

## Verification

Needs a production server (`npm run build && npm run start`):

```bash
npm run a11y             # axe-core, 22 scans (4 routes x 2 widths x 4 states) — clean
npm run a11y:behaviour   # keyboard, dialogs, panel, reflow — 28/28
npm run lint             # 31 jsx-a11y rules (eslint-config-next enables ~7)
```

Visual regression against the live original: at 1440px every section still matches
in top, height and scroll width. Remaining differences are the colour changes
above, +3–6px from the 11→13px credit line, and +22px at 375px from the new footer
link.

**A clean axe run is a floor, not a pass** — automated tooling catches roughly a
third of WCAG issues. A screen-reader pass is still owed.

## Implementation notes

- `zoom` and `filter` go on `<html>`, never `<body>`. A filter on `<body>` makes it
  the containing block for fixed descendants and detaches the nav — measured at
  `top: -2920px` on scroll.
- Text scaling uses `zoom` because every font size is an inline px literal; a
  rem-based scale cannot reach any of them.
- "Readable font" is Arial, **not** OpenDyslexic, which has no Hebrew glyphs.
- Landmarks were added by retagging existing elements. `display: contents` and
  `nth-child` rules in the ported CSS forbid new wrappers.
- The audit script disables transitions before forcing reveal classes; scanning
  mid-fade makes axe report blended colours as phantom contrast failures.
- `devIndicators: false` — Next's dev-tools overlay is injected by `next start`
  too, and shows up as a phantom keyboard failure and a false screenshot diff.

## Not required

**Text-to-speech / "read aloud" is not required** by IS 5568 or WCAG 2.1 AA at any
level. The closest thing is technique G79, advisory under AAA 3.1.5. What is
required is compatibility with the user's *own* screen reader. Israeli widget
vendors market הקראה as a headline feature, which is where the impression comes
from. Site-provided TTS can also talk over a running screen reader.

Captions (1.2.2, Level A) and audio description (1.2.3/1.2.5, AA) *are* required —
but only for video, of which this site has none. That changes the day one is added.

## Open items

1. **Accessibility coordinator details** — `lib/i18n/accessibility.ts` holds
   `{{ }}` placeholders for name, email and phone. The statement page renders a
   visible warning until they are filled. **Required before launch.**
2. **Partner logo alt text** — the 60 logos are marked decorative (`alt=""`)
   because the company names are not available. Listed as a known exception in the
   statement; supplying the names is the only honest fix.
