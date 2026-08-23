import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LANGS, getDictionary, isLang } from '@/lib/i18n';
import { getStatement, statementHasPlaceholders } from '@/lib/i18n/accessibility';
import A11yPanel from '@/components/A11yPanel';

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const s = getStatement(lang);
  return {
    title: `${s.title} — L2 ARENA`,
    description: s.intro[0],
    alternates: {
      canonical: `/${lang}/accessibility`,
      languages: {
        he: '/he/accessibility',
        en: '/en/accessibility',
        'x-default': '/he/accessibility',
      },
    },
  };
}

/*
 * A plain, readable document rather than a port of the canvas design. The
 * statement exists to be read — by visitors, and by anyone checking compliance —
 * so it uses real headings, real lists and generous type, and inherits nothing
 * from the inline-style layout of the marketing page.
 */
export default async function AccessibilityPage({
  params,
}: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const t = getDictionary(lang);
  const s = getStatement(lang);
  const pending = statementHasPlaceholders(s);

  const section = (title: string, children: React.ReactNode) => (
    <section style={{ marginTop: '40px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 12px', color: '#062055' }}>
        {title}
      </h2>
      {children}
    </section>
  );

  const list = (items: string[]) => (
    <ul style={{ margin: 0, paddingInlineStart: '22px', display: 'grid', gap: '10px' }}>
      {items.map((item) => <li key={item} style={{ lineHeight: 1.7 }}>{item}</li>)}
    </ul>
  );

  return (
    <>
      <a href="#statement" className="l2-skip">{t.skipToContent}</a>

      <main
        id="statement"
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '64px 24px 96px',
          color: '#3C4351',
          fontSize: '17px',
          lineHeight: 1.7,
          fontFamily: "'Narkiss Hadash',var(--font-assistant),sans-serif",
        }}
      >
        <Link
          href={`/${lang}`}
          style={{ fontSize: '15px', fontWeight: 600, color: '#1450A8' }}
        >
          {lang === 'he' ? '→' : '←'} {s.backHome}
        </Link>

        <h1 style={{
          fontSize: '40px', fontWeight: 800, color: '#062055',
          margin: '24px 0 8px', letterSpacing: '-0.01em',
        }}>{s.title}</h1>
        <p style={{ margin: '0 0 32px', fontSize: '15px', color: '#5B6472' }}>
          {s.updatedLabel}: {s.updated}
        </p>

        {s.intro.map((p) => <p key={p} style={{ margin: '0 0 16px' }}>{p}</p>)}

        {section(s.conformanceTitle, list(s.conformance))}
        {section(s.doneTitle, list(s.done))}
        {section(s.exceptionsTitle, (
          <>
            <p style={{ margin: '0 0 12px' }}>{s.exceptionsIntro}</p>
            {list(s.exceptions)}
          </>
        ))}

        {section(s.contactTitle, (
          <>
            <p style={{ margin: '0 0 20px' }}>{s.contactIntro}</p>

            {/*
              Rendered as a definition list so the label/value pairing is
              conveyed structurally, not just visually.
            */}
            <dl style={{
              margin: 0, padding: '20px 24px',
              background: '#FFFFFF',
              border: '1px solid rgba(157,115,49,0.25)',
              borderRadius: '16px',
              display: 'grid', gridTemplateColumns: 'max-content 1fr', gap: '10px 18px',
            }}>
              <dt style={{ fontWeight: 700, color: '#062055' }}>{s.coordinatorLabel}</dt>
              <dd style={{ margin: 0 }}>{s.coordinatorName}</dd>
              <dt style={{ fontWeight: 700, color: '#062055' }}>{s.emailLabel}</dt>
              <dd style={{ margin: 0 }}>{s.email}</dd>
              <dt style={{ fontWeight: 700, color: '#062055' }}>{s.phoneLabel}</dt>
              <dd style={{ margin: 0 }}>{s.phone}</dd>
            </dl>

            {pending && (
              /*
               * Visible on purpose. This page is legally required to name a
               * reachable person; publishing it with placeholders silently
               * would be worse than publishing it with an obvious gap.
               */
              <p style={{
                marginTop: '16px', padding: '12px 16px',
                background: '#FFF6E5', border: '1px solid #9D7331',
                borderRadius: '10px', fontSize: '15px', color: '#5A4416',
              }}>
                {lang === 'he'
                  ? 'לתשומת לב מנהלי האתר: יש להשלים את פרטי רכז/ת הנגישות לפני העלאת האתר לאוויר.'
                  : 'Site owners: the accessibility coordinator’s details must be filled in before this site goes live.'}
              </p>
            )}
          </>
        ))}
      </main>

      <A11yPanel t={t} lang={lang} />
    </>
  );
}
