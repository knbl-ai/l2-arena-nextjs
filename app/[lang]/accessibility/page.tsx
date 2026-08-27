import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LANGS, getDictionary, isLang } from '@/lib/i18n';
import { getStatement } from '@/lib/i18n/accessibility';
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
      </main>

      <A11yPanel t={t} lang={lang} />
    </>
  );
}
