#!/usr/bin/env node
/**
 * Behavioural accessibility checks that axe cannot make: keyboard operation,
 * dialog focus handling, the preference panel's effects, and reflow.
 *
 *   npm run build && npm run start
 *   node scripts/a11y-behaviour.mjs
 */
import { chromium } from 'playwright';

const BASE = process.argv.includes('--url')
  ? process.argv[process.argv.indexOf('--url') + 1] : 'http://localhost:3000';

const results = [];
const check = (name, pass, detail = '') => {
  results.push({ name, pass, detail });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? `  — ${detail}` : ''}`);
};

const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());

// ---------- keyboard: skip link ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/he`, { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  await page.waitForTimeout(300);   // the skip link slides in over 180ms
  const first = await page.evaluate(() => {
    const el = document.activeElement;
    const r = el.getBoundingClientRect();
    return { cls: el.className, text: el.textContent.trim(), top: Math.round(r.top) };
  });
  check('first Tab reaches the skip link', first.cls.includes('l2-skip'), `focused "${first.text}"`);
  check('skip link is visible when focused', first.top >= 0 && first.top < 100, `top=${first.top}px`);

  await page.keyboard.press('Enter');
  await page.waitForTimeout(400);
  const target = await page.evaluate(() => document.activeElement?.id || document.activeElement?.tagName);
  check('skip link moves focus to the content', target === 'content', `focus now on #${target}`);
  await ctx.close();
}

// ---------- keyboard: every interactive element has a visible focus ring ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/he`, { waitUntil: 'networkidle' });
  let checked = 0, unstyled = [];
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press('Tab');
    const info = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const s = getComputedStyle(el);
      return {
        tag: el.tagName, cls: String(el.className).slice(0, 30),
        outline: s.outlineStyle, width: s.outlineWidth, shadow: s.boxShadow !== 'none',
      };
    });
    if (!info) continue;
    checked += 1;
    const visible = (info.outline !== 'none' && parseFloat(info.width) > 0) || info.shadow;
    if (!visible) unstyled.push(`${info.tag}.${info.cls}`);
  }
  check('focused elements show a focus indicator', unstyled.length === 0,
        `${checked} elements tabbed${unstyled.length ? `; missing on ${unstyled.slice(0,3).join(', ')}` : ''}`);
  await ctx.close();
}

// ---------- mobile menu behaves as a dialog ----------
{
  const ctx = await browser.newContext({ viewport: { width: 375, height: 780 } });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/he`, { waitUntil: 'networkidle' });
  await page.locator('.l2-hamburger').click();
  await page.waitForSelector('#l2-mobile-menu');

  const state = await page.evaluate(() => ({
    inside: document.querySelector('#l2-mobile-menu').contains(document.activeElement),
    inert: document.getElementById('main').hasAttribute('inert'),
    locked: document.body.style.overflow === 'hidden',
    expanded: document.querySelector('.l2-hamburger').getAttribute('aria-expanded'),
    role: document.querySelector('#l2-mobile-menu').getAttribute('role'),
    modal: document.querySelector('#l2-mobile-menu').getAttribute('aria-modal'),
  }));
  check('menu opens with focus inside it', state.inside);
  check('menu exposes role=dialog aria-modal=true', state.role === 'dialog' && state.modal === 'true');
  check('page behind the menu is inert', state.inert);
  check('background scroll is locked', state.locked);
  check('hamburger reports aria-expanded=true', state.expanded === 'true');

  // Tab should never escape the dialog
  let escaped = false;
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press('Tab');
    if (!await page.evaluate(() => document.querySelector('#l2-mobile-menu')?.contains(document.activeElement))) {
      escaped = true; break;
    }
  }
  check('focus stays trapped inside the menu', !escaped);

  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  const after = await page.evaluate(() => ({
    gone: !document.querySelector('#l2-mobile-menu'),
    onHamburger: document.activeElement?.classList.contains('l2-hamburger'),
    inert: document.getElementById('main').hasAttribute('inert'),
  }));
  check('Escape closes the menu', after.gone);
  check('focus returns to the hamburger', after.onHamburger);
  check('inert is removed on close', !after.inert);
  await ctx.close();
}

// ---------- preference panel ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/he`, { waitUntil: 'networkidle' });
  await page.locator('.l2-a11y-fab').click();
  await page.waitForSelector('#l2-a11y-panel');

  const baseH = await page.evaluate(() => document.body.scrollHeight);
  await page.locator('#l2-a11y-panel button[aria-label$="+"]').click();
  await page.waitForTimeout(400);
  const zoomed = await page.evaluate(() => ({
    attr: document.documentElement.getAttribute('data-a11y-zoom'),
    h: document.body.scrollHeight,
    navFixed: Math.round(document.querySelector('.l2-nav-outer').getBoundingClientRect().top),
  }));
  check('text size control enlarges the page', zoomed.attr === '110' && zoomed.h > baseH,
        `height ${baseH} -> ${zoomed.h}`);

  await page.evaluate(() => scrollTo(0, 2500));
  await page.waitForTimeout(250);
  const navTop = await page.evaluate(() => Math.round(document.querySelector('.l2-nav-outer').getBoundingClientRect().top));
  check('nav stays fixed while zoomed', Math.abs(navTop) < 2, `nav top=${navTop}`);
  await page.evaluate(() => scrollTo(0, 0));

  for (const [label, attr, value] of [
    ['high contrast', 'data-a11y-contrast', 'invert'],
    ['grayscale', 'data-a11y-grayscale', 'on'],
    ['highlight links', 'data-a11y-links', 'on'],
    ['stop animations', 'data-a11y-motion', 'off'],
    ['readable font', 'data-a11y-font', 'readable'],
    ['large cursor', 'data-a11y-cursor', 'big'],
  ]) {
    await page.locator(`#l2-a11y-panel button[role="switch"]:has-text("${
      { 'high contrast': 'ניגודיות', grayscale: 'אפור', 'highlight links': 'קישורים',
        'stop animations': 'אנימציות', 'readable font': 'גופן', 'large cursor': 'סמן' }[label]
    }")`).click();
    await page.waitForTimeout(150);
    const got = await page.getAttribute('html', attr);
    check(`panel: ${label}`, got === value, `${attr}="${got}"`);
  }

  // nav must still be fixed with the invert filter applied
  await page.evaluate(() => scrollTo(0, 2500));
  await page.waitForTimeout(250);
  const navUnderFilter = await page.evaluate(() => Math.round(document.querySelector('.l2-nav-outer').getBoundingClientRect().top));
  check('nav stays fixed under the contrast filter', Math.abs(navUnderFilter) < 2, `nav top=${navUnderFilter}`);

  // persistence
  await page.reload({ waitUntil: 'networkidle' });
  const persisted = await page.evaluate(() => ({
    zoom: document.documentElement.getAttribute('data-a11y-zoom'),
    contrast: document.documentElement.getAttribute('data-a11y-contrast'),
  }));
  check('preferences survive a reload', persisted.zoom === '110' && persisted.contrast === 'invert',
        `zoom=${persisted.zoom} contrast=${persisted.contrast}`);

  await page.locator('.l2-a11y-fab').click();
  await page.waitForSelector('#l2-a11y-panel');
  await page.locator('#l2-a11y-panel button:has-text("איפוס")').click();
  await page.waitForTimeout(200);
  const reset = await page.evaluate(() =>
    [...document.documentElement.attributes].filter((a) => a.name.startsWith('data-a11y-')).map((a) => a.name));
  check('reset clears every preference', reset.length === 0, `${reset.length} attributes left`);
  await ctx.close();
}

// ---------- reduced motion ----------
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/he`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  const r = await page.evaluate(() => {
    const hidden = [...document.querySelectorAll('.l2-reveal, .l2-reveal-soft')]
      .filter((el) => parseFloat(getComputedStyle(el).opacity) < 0.9).length;
    const stat = [...document.querySelectorAll('.l2-grid-stats5 div')]
      .map((d) => d.textContent).find((t) => t && t.includes(','));
    return { hidden, stat };
  });
  check('reduced motion reveals all content immediately', r.hidden === 0, `${r.hidden} still faded`);
  check('reduced motion shows final counter values', !!r.stat && !r.stat.startsWith('0'), `first counter: "${r.stat}"`);
  await ctx.close();
}

// ---------- reflow (WCAG 1.4.10) ----------
{
  for (const width of [320, 375]) {
    const ctx = await browser.newContext({ viewport: { width, height: 800 } });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/he`, { waitUntil: 'networkidle' });
    const r = await page.evaluate(() => ({
      docSW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
    }));
    check(`no horizontal scrolling at ${width}px`, r.docSW <= r.clientW + 1,
          `document scrollWidth ${r.docSW} vs viewport ${r.clientW}`);
    await ctx.close();
  }
}

await browser.close();
const failed = results.filter((r) => !r.pass);
console.log(`\n${results.length - failed.length}/${results.length} checks passed.`);
process.exit(failed.length ? 1 : 0);
