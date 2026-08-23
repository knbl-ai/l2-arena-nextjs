#!/usr/bin/env node
/**
 * Run axe-core over every route, width and interactive state.
 *
 *   npm run build && npm run start
 *   node scripts/a11y-audit.mjs [--url http://localhost:3000] [--json out.json]
 *
 * Exits non-zero on any serious or critical violation, so it can gate CI.
 *
 * A clean run is a floor, not a pass: automated tooling catches roughly a third
 * of WCAG issues. Keyboard-only walkthroughs and a screen-reader pass still have
 * to happen by hand — see reference/accessibility.md in the skill.
 */
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import fs from 'node:fs';

const flag = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i === -1 ? d : process.argv[i + 1];
};
const BASE = flag('url', 'http://localhost:3000');
const JSON_OUT = flag('json', null);

// IS 5568 adopts WCAG 2.0/2.1 AA. `best-practice` is included because it catches
// landmark and heading-order problems that the AA tags alone do not.
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'];

/** state name -> what to do to the page before scanning */
const STATES = {
  default: null,
  'menu-open': async (page) => {
    const btn = page.locator('.l2-hamburger');
    if (!(await btn.count()) || !(await btn.isVisible())) return false;
    await btn.click();
    await page.waitForSelector('#l2-mobile-menu', { timeout: 3000 });
    return true;
  },
  'logos-expanded': async (page) => {
    const btn = page.locator('[aria-controls="l2-logos-extra"]');
    if (!(await btn.count())) return false;
    await btn.scrollIntoViewIfNeeded();
    await btn.click();
    await page.waitForSelector('#l2-logos-extra', { timeout: 3000 });
    return true;
  },
  'a11y-panel-open': async (page) => {
    const btn = page.locator('.l2-a11y-fab');
    if (!(await btn.count())) return false;
    await btn.click();
    await page.waitForSelector('#l2-a11y-panel', { timeout: 3000 });
    return true;
  },
};

const ROUTES = ['/he', '/en', '/he/accessibility', '/en/accessibility'];
const WIDTHS = [1440, 375];

const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
const all = [];
let serious = 0;
let scans = 0;

for (const route of ROUTES) {
  for (const width of WIDTHS) {
    for (const [state, setup] of Object.entries(STATES)) {
      // axe-core requires an explicit context, not browser.newPage().
      const context = await browser.newContext({ viewport: { width, height: 900 } });
      const page = await context.newPage();
      await page.goto(BASE + route, { waitUntil: 'networkidle' });

      /*
       * Reveal-on-scroll starts elements at opacity 0 and axe skips hidden
       * nodes, so the classes have to be forced on or most of the page is never
       * scanned. Crucially, kill the transitions FIRST: adding the class and
       * scanning immediately catches the elements mid-fade, and axe then reports
       * the blended colour — which shows up as a page full of phantom contrast
       * failures against colours that appear nowhere in the source.
       */
      await page.evaluate(() => {
        document.documentElement.setAttribute('data-a11y-motion', 'off');
        document.querySelectorAll('.l2-reveal, .l2-reveal-soft')
          .forEach((el) => el.classList.add('l2-reveal-in'));
      });
      await page.waitForTimeout(150);

      if (setup) {
        const ok = await setup(page).catch(() => false);
        if (!ok) { await context.close(); continue; }
      }

      const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
      scans += 1;
      await context.close();

      for (const v of results.violations) {
        all.push({ route, width, state, id: v.id, impact: v.impact, help: v.help,
                   count: v.nodes.length,
                   targets: v.nodes.slice(0, 4).map((n) => n.target.join(' ')) });
        if (v.impact === 'serious' || v.impact === 'critical') serious += 1;
      }
    }
  }
}
await browser.close();

// Collapse: the same rule failing on four widths is one problem, not four.
const byRule = new Map();
for (const v of all) {
  const key = `${v.id}|${v.impact}`;
  if (!byRule.has(key)) byRule.set(key, { ...v, where: [] });
  byRule.get(key).where.push(`${v.route}@${v.width}/${v.state}`);
}

const RANK = { critical: 0, serious: 1, moderate: 2, minor: 3 };
const rules = [...byRule.values()].sort((a, b) => RANK[a.impact] - RANK[b.impact]);

console.log(`\naxe-core — ${scans} scans across ${ROUTES.length} routes x ${WIDTHS.length} widths x ${Object.keys(STATES).length} states\n`);
if (!rules.length) {
  console.log('  No violations.\n');
} else {
  for (const r of rules) {
    console.log(`  [${(r.impact || 'n/a').toUpperCase()}] ${r.id} — ${r.help}`);
    console.log(`      ${r.count} node(s), e.g. ${r.targets[0]}`);
    console.log(`      seen in: ${[...new Set(r.where)].slice(0, 6).join(', ')}`);
    console.log();
  }
}

if (JSON_OUT) fs.writeFileSync(JSON_OUT, JSON.stringify(rules, null, 2));

console.log(serious
  ? `FAIL — ${serious} serious/critical violation instance(s).`
  : 'PASS — no serious or critical violations. (Automated checks only; manual passes still required.)');
process.exit(serious ? 1 : 0);
