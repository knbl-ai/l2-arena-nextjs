import type { Lang } from './types';

/**
 * Layout values that vary by language, ported from the original bundle's
 * `renderVals()`. Every value here is a pure function of `lang` — the Hebrew
 * design was laid out first and the English one is a set of nudges on top of it
 * (slightly larger type, mirrored directions, `auto` where Hebrew pins a pixel
 * width). Keys the markup never referenced were dropped.
 */
export type RenderVals = ReturnType<typeof getRenderVals>;

export function getRenderVals(lang: Lang) {
  const isHe = lang === 'he';
  return {
    isHe,
    isEn: !isHe,
    dir: isHe ? ('rtl' as const) : ('ltr' as const),
    textAlign: isHe ? ('right' as const) : ('left' as const),
    langToggleLabel: isHe ? 'EN' : 'עב',
    lodMunicipalityUrl: isHe ? 'https://www.lod.muni.il/he/' : 'https://www.lod.muni.il/en/',

    /*
     * Direction mirroring.
     *
     * These are the original values. They are authored against an LTR box, because
     * every section that uses them sits outside the dir="rtl" wrapper — see the
     * `direction: 'ltr'` on those section roots, which makes that inherited context
     * explicit now that <html> carries dir.
     */
    contactRowDirection: isHe ? ('row-reverse' as const) : ('row' as const),
    rfpBtnFlexDirection: isHe ? ('row' as const) : ('row-reverse' as const),
    footerRowDirection: isHe ? ('row' as const) : ('row-reverse' as const),
    footerLogoDirection: isHe ? ('row' as const) : ('row-reverse' as const),
    benefitArrowFlip: isHe ? 'none' : 'rotate(180deg)',
    quoteMarkFlip: isHe ? 'none' : 'scaleX(-1)',
    bgArcsTransform: isHe ? 'none' : 'scaleX(-1) translateY(-24px)',
    /** The original interpolated a whole declaration (`right:3px` / `left:3px`). */
    quoteMarkTopSide: isHe ? { right: '3px' } : { left: '3px' },

    // Nav
    navCtaFontSize: isHe ? '13px' : '13.5px',
    navCtaPadding: isHe ? '10px 16px' : '10px 14px',
    navLinksGap: isHe ? '44px' : '22px',
    navLinkFontSize: isHe ? '21px' : '19px',

    // Hero decor
    heroDecorLeft: isHe ? '-160px' : 'auto',
    heroDecorRight: isHe ? 'auto' : '-160px',
    heroRingLeft: isHe ? 'clamp(-100px, -6%, -20px)' : 'auto',
    heroRingRight: isHe ? 'auto' : 'clamp(-100px, -6%, -20px)',
    heroStatueLeft: 'auto',
    heroStatueRight: 'auto',

    // Section-specific boxes
    recordBoxHeight: isHe ? '241px' : 'auto',
    initCard1Height: isHe ? '144px' : 'auto',
    initCard2Height: isHe ? '158px' : 'auto',
    initCard3Height: isHe ? '154px' : 'auto',
    initCard4Height: isHe ? '160px' : 'auto',
    initCardPad: isHe ? '32px 46px 32px 32px' : '32px 32px 32px 46px',
    initLinkGap: isHe ? '0px' : '24px',
    quoteCard1Height: isHe ? '219px' : 'auto',
    quoteCard2Height: isHe ? '200px' : 'auto',
    quoteTextMarginTop: isHe ? '44px' : '12px',
    oppTitleWidth: isHe ? '610px' : 'auto',
    oppTitleHeight: isHe ? '71px' : 'auto',
    transitTitleWidth: isHe ? '835px' : 'auto',
    transitTitleHeight: isHe ? '68px' : 'auto',
    titleWrapMode: isHe ? ('nowrap' as const) : ('normal' as const),
    coopTitleWrap: 'normal' as const,
    deadlineDateSize: isHe ? '44px' : '34px',

    // Timeline ordering
    timelineTextOrder: isHe ? 0 : 2,
    timelineImgOrder: 1,
    timelineGridCols: isHe ? '0.42fr 1.58fr' : '1.58fr 0.42fr',

    // Heading sizes
    aboutTitleFontSize: '57.6px',
    initTitleFontSize: '57.6px',
    quotesTitleFontSize: 'clamp(40px,9vw,57.6px)',
    timelineTitleFontSize: '58px',
    benefitsTitleFontSize: '58px',
    logosTitleFontSize: '57.6px',
    coopTitleFontSize: isHe ? '57.6px' : 'clamp(28px,4.6vw,57.6px)',
    oppTitleFontSize: isHe ? '58px' : 'clamp(28px,4.6vw,57.6px)',
    transitTitleFontSize: isHe ? '58px' : 'clamp(28px,4.6vw,57.6px)',

    // Body type scale — Hebrew set first, English one step larger
    fs144: isHe ? '14.4px' : '16px',
    fs156: isHe ? '15.6px' : '17px',
    fs165: isHe ? '16.5px' : '18px',
    fs168: isHe ? '16.8px' : '18.5px',
    fs175: isHe ? '17.5px' : '19px',
    fs178: isHe ? '17.8px' : '19.5px',
    fs18: isHe ? '18px' : '20px',
    fs192: isHe ? '19.2px' : '21px',
    fs20: isHe ? '20px' : '22px',
    fs21: isHe ? '21px' : '23px',
    fs22: isHe ? '22px' : '24px',
    fs24: isHe ? '24px' : '26px',
    fs27: isHe ? '27px' : '30px',
    fs288: isHe ? '28.8px' : '31px',
    fs30: isHe ? '30px' : '33px',
    fs32: isHe ? '32px' : '35px',
  };
}
