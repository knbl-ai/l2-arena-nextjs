/**
 * True when the visitor has asked for less motion — either through the OS/browser
 * setting (WCAG 2.3.3) or through the site's own accessibility panel, which
 * stamps `data-a11y-motion="off"` on <html>.
 *
 * Client-only: callers are ref callbacks and effects, never render.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    || document.documentElement.dataset.a11yMotion === 'off';
}
