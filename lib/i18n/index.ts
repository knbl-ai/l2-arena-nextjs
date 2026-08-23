import { he } from './he';
import { en } from './en';
import type { Dictionary, Lang } from './types';

export { LANGS } from './types';
export type { Dictionary, Lang, TeamMember } from './types';
export { getRenderVals } from './renderVals';
export type { RenderVals } from './renderVals';

const dictionaries: Record<Lang, Dictionary> = { he, en };

export const getDictionary = (lang: Lang): Dictionary => dictionaries[lang];

export const isLang = (value: string): value is Lang => value === 'he' || value === 'en';

export const otherLang = (lang: Lang): Lang => (lang === 'he' ? 'en' : 'he');
