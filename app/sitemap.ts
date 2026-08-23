import type { MetadataRoute } from 'next';
import { LANGS } from '@/lib/i18n';

const SITE = 'https://l2-arena.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGS.map((lang) => ({
    url: `${SITE}/${lang}`,
    changeFrequency: 'monthly' as const,
    priority: lang === 'he' ? 1 : 0.8,
    alternates: { languages: { he: `${SITE}/he`, en: `${SITE}/en` } },
  }));
}
