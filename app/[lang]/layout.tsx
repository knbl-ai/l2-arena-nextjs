import type { Metadata } from 'next';
import { Assistant } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
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

/*
 * Applies saved accessibility preferences before first paint. Without this the
 * page renders at default size/contrast and then visibly snaps to the visitor's
 * saved settings, which is exactly the population least able to tolerate it.
 * Kept in sync by hand with `applyPrefs` in components/A11yPanel.tsx.
 */
const A11Y_BOOTSTRAP = `(function(){try{
var p=JSON.parse(localStorage.getItem('l2-a11y')||'{}'),e=document.documentElement;
function s(n,v){if(v)e.setAttribute('data-a11y-'+n,v)}
if(p.zoom&&p.zoom!==100)s('zoom',String(p.zoom));
if(p.contrast==='invert')s('contrast','invert');
if(p.grayscale)s('grayscale','on');
if(p.links)s('links','on');
if(p.motion)s('motion','off');
if(p.readableFont)s('font','readable');
if(p.bigCursor)s('cursor','big');
}catch(_){}})();`;


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
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4STN2HC"
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W4STN2HC');`}
        </Script>
        <script dangerouslySetInnerHTML={{ __html: A11Y_BOOTSTRAP }} />
        {children}
      </body>
    </html>
  );
}
