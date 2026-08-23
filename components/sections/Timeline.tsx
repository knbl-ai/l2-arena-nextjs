import type { SectionProps } from '@/lib/props';
import Image from 'next/image';

export default function Timeline({ t, v }: SectionProps) {
  return (
    <>
      <div id="timeline" data-screen-label="Timeline" className="l2-sec" style={{
        padding: "56px 80px",
        boxSizing: "border-box",
        scrollMarginTop: "110px",
      }}>

      <div className="l2-grid-timeline" style={{
        maxWidth: "1920px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: v.timelineGridCols,
        gap: "24px",
        alignItems: "center",
        direction: "ltr",
      }}>
          <div className="l2-timeline-text" style={{
            direction: v.dir,
            textAlign: v.textAlign,
            maxWidth: "56ch",
            marginInlineStart: "auto",
            overflow: "visible",
            order: v.timelineTextOrder,
          }}>
            <div className="l2-reveal-soft" style={{
              color: "#9D7331",
              fontSize: v.fs20,
              fontWeight: "700",
              letterSpacing: "0.04em",
              marginBottom: "16px",
            }}>{t.timelineEyebrow}</div>
            <h2 className="l2-reveal l2-h2 l2-fixed-text" style={{
              margin: "0",
              fontSize: v.timelineTitleFontSize,
              fontWeight: "700",
              letterSpacing: "-0.01em",
              lineHeight: "1.2",
              whiteSpace: "nowrap",
              background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>{t.timelineTitle1}<br />{t.timelineTitle2}</h2>

            <p className="l2-reveal-soft" style={{
              margin: "16px 0 0",
              fontSize: v.fs27,
              lineHeight: "1.5",
              color: "#3C4351",
            }}>{t.timelineP1}<br />{t.timelineP2}</p>
          </div>
          <div className="l2-timeline-img-wrap l2-timeline-img" style={{
            position: "relative",
            marginTop: "-24px",
            order: v.timelineImgOrder,
          }}>
            {v.isHe && (<>
              <Image width={2000} height={900} src="/img/timeline-he-desktop.webp" alt="" className="l2-hide-mobile" style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }} />
              <Image width={900} height={1859} src="/img/timeline-he-mobile.webp" alt="" className="l2-timeline-mobile-img" style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "none",
              }} />
            </>)}
            {v.isEn && (<>
              <Image width={2000} height={900} src="/img/timeline-en-desktop.webp" alt="" className="l2-hide-mobile" style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }} />
              <Image width={900} height={1859} src="/img/timeline-en-mobile.webp" alt="" className="l2-timeline-mobile-img" style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                display: "none",
              }} />
            </>)}
          </div>
        </div></div>
    </>
  );
}
