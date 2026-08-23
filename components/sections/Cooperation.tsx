import type { SectionProps } from '@/lib/props';

export default function Cooperation({ t, v }: SectionProps) {
  return (
    <>
      <div id="cooperation" data-screen-label="Cooperation" className="l2-sec" style={{
        padding: "16px 80px 144px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}>



      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        position: "relative",
        zIndex: "2",
      }}>
          <div style={{
            direction: v.dir,
            textAlign: v.textAlign,
            maxWidth: "60ch",
            margin: "0 0 24px",
          }}>
            <div className="l2-reveal-soft" style={{
              color: "#9D7331",
              fontSize: v.fs20,
              fontWeight: "700",
              letterSpacing: "0.04em",
              marginBottom: "16px",
            }}>{t.coopEyebrow}</div>
            <h2 className="l2-reveal l2-h2 l2-fixed-text" style={{
              margin: "0",
              fontSize: v.coopTitleFontSize,
              fontWeight: "700",
              letterSpacing: "-0.01em",
              lineHeight: "1.2",
              whiteSpace: v.coopTitleWrap,
              background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              width: "1326px",
              height: "72px",
            }}>{t.coopTitle}</h2>

            <p className="l2-reveal-soft l2-fixed-text" style={{
              margin: "16px 0 0",
              fontSize: v.fs27,
              lineHeight: "1.5",
              color: "#3C4351",
              maxWidth: "60ch",
              width: "1011px",
              height: "63px",
            }}>{t.coopLead}</p>
          </div><div className="l2-grid-cards3" style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}>
            <div className="l2-reveal-soft l2-card" style={{
              transitionDelay: "0s",
              borderRadius: "24px",
              borderImageSource: "url(\"/img/frame-gold.webp\")",
              borderImageSlice: "110 fill",
              borderImageWidth: "26px",
              borderImageRepeat: "stretch",
              background: "#fff",
              padding: "40px 64px 40px 64px",
              direction: v.dir,
              minHeight: "220px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}>
              <div style={{
                fontSize: v.fs24,
                fontWeight: "700",
                color: "#062055",
                marginBottom: "8px",
                whiteSpace: "nowrap",
              }}>{t.coopCard1Title}</div>
              <div style={{
                fontSize: v.fs18,
                lineHeight: "1.6",
                color: "#5B6472",
              }}>{t.coopCard1Desc}</div>
            </div>
            <div className="l2-reveal-soft l2-card" style={{
              transitionDelay: "0.1s",
              borderRadius: "24px",
              borderImageSource: "url(\"/img/frame-gold.webp\")",
              borderImageSlice: "110 fill",
              borderImageWidth: "26px",
              borderImageRepeat: "stretch",
              background: "#fff",
              padding: "40px 64px 40px 64px",
              direction: v.dir,
              minHeight: "220px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}>
              <div style={{
                fontSize: v.fs24,
                fontWeight: "700",
                color: "#062055",
                marginBottom: "8px",
                whiteSpace: "nowrap",
              }}>{t.coopCard2Title}</div>
              <div style={{
                fontSize: v.fs18,
                lineHeight: "1.6",
                color: "#5B6472",
              }}>{t.coopCard2Desc1} <strong style={{
                fontWeight: "700",
                color: "rgb(91, 100, 114)",
              }}>{t.coopCard2Strong}</strong>{t.coopCard2Desc2}</div>
            </div>
            <div className="l2-reveal-soft l2-card" style={{
              transitionDelay: "0.2s",
              borderRadius: "24px",
              borderImageSource: "url(\"/img/frame-gold.webp\")",
              borderImageSlice: "110 fill",
              borderImageWidth: "26px",
              borderImageRepeat: "stretch",
              background: "#fff",
              padding: "40px 64px 40px 64px",
              direction: v.dir,
              minHeight: "220px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}>
              <div style={{
                fontSize: v.fs24,
                fontWeight: "700",
                color: "#062055",
                marginBottom: "8px",
                whiteSpace: "nowrap",
              }}>{t.coopCard3Title}</div>
              <div style={{
                fontSize: v.fs18,
                lineHeight: "1.6",
                color: "#5B6472",
              }}>{t.coopCard3Desc}</div>
            </div>
          </div>
          </div>

        </div>
    </>
  );
}
