import type { MetadataRoute } from 'next';
import { LANGS } from '@/lib/i18n';

const SITE = 'https://l2-arena.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const home = LANGS.map((lang) => ({
    url: `${SITE}/${lang}`,
    changeFrequency: 'monthly' as const,
    priority: lang === 'he' ? 1 : 0.8,
    alternates: { languages: { he: `${SITE}/he`, en: `${SITE}/en` } },
  }));

  const statement = LANGS.map((lang) => ({
    url: `${SITE}/${lang}/accessibility`,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
    alternates: {
      languages: { he: `${SITE}/he/accessibility`, en: `${SITE}/en/accessibility` },
    },
  }));

  return [...home, ...statement];
}
