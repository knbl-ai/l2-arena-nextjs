import type { Dictionary } from './i18n/types';
import type { RenderVals } from './i18n/renderVals';

/** Every section renders from the language dictionary plus its layout values. */
export type SectionProps = {
  t: Dictionary;
  v: RenderVals;
};
