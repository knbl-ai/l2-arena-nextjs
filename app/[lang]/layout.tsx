import type { Metadata } from 'next';
import { Assistant } from 'next/font/google';
import { notFound } from 'next/navigation';
import { LANGS, getDictionary, isLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import '../globals.css';

/**
 * The bundle shipped Assistant as three hand-subset woff2 files. next/font
 * self-hosts the same family and only the subsets we ask for.
 */
const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-assistant',
  display: 'swap',
});

const SITE = 'https://l2-arena.vercel.app';

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDictionary(lang);

  return {
    metadataBase: new URL(SITE),
    title: `L2 ARENA — ${t.heroTitle1} ${t.heroTitle2}`,
    description: t.heroLead,
    alternates: {
      canonical: `/${lang}`,
      languages: { he: '/he', en: '/en', 'x-default': '/he' },
    },
    openGraph: {
      type: 'website',
      url: `/${lang}`,
      siteName: 'L2 ARENA',
      title: `L2 ARENA — ${t.heroTitle1} ${t.heroTitle2}`,
      description: t.heroLead,
      locale: lang === 'he' ? 'he_IL' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `L2 ARENA — ${t.heroTitle1} ${t.heroTitle2}`,
      description: t.heroLead,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dir: 'rtl' | 'ltr' = lang === 'he' ? 'rtl' : 'ltr';

  return (
    <html lang={lang as Lang} dir={dir} className={assistant.variable}>
      <body>{children}</body>
    </html>
  );
}
