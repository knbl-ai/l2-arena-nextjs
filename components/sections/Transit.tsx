import type { SectionProps } from '@/lib/props';

/**
 * Carries `id="transit"` so the mobile padding rule can target it. The original
 * selector was `.l2-sec[data-dc-tpl="220"]`, a node index the old runtime
 * injected at render time.
 */
export default function Transit({ t, v }: SectionProps) {
  return (
    <>
      <div id="transit" data-screen-label="Transit accessibility" className="l2-sec" style={{
        padding: "56px 80px",
        boxSizing: "border-box",
      }}>

        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          direction: v.dir,
          textAlign: v.textAlign,
        }}>
            <div style={{
              maxWidth: "90ch",
            }}>
              <div className="l2-reveal-soft" style={{
                color: "#9D7331",
                fontSize: v.fs20,
                fontWeight: "700",
                letterSpacing: "0.04em",
                marginBottom: "16px",
              }}>{t.transitEyebrow}</div>
              <h2 className="l2-reveal l2-h2 l2-fixed-text" style={{
                margin: "0",
                fontSize: v.transitTitleFontSize,
                fontWeight: "700",
                letterSpacing: "-0.01em",
                lineHeight: "1.2",
                whiteSpace: v.titleWrapMode,
                background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: v.transitTitleWidth,
                height: v.transitTitleHeight,
              }}>{t.transitTitle}</h2>

              <p className="l2-reveal-soft" style={{
                margin: "16px 0 0",
                fontSize: v.fs27,
                lineHeight: "1.5",
                color: "#3C4351",
              }}>{t.transitP}</p>
            </div>
          </div></div>
    </>
  );
}
