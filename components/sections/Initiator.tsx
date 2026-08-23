import type { SectionProps } from '@/lib/props';

export default function Initiator({ t, v }: SectionProps) {
  return (
    <>
        <div id="initiator" data-screen-label="Initiator" className="l2-sec" style={{
          position: "relative",
          padding: "56px 80px",
          boxSizing: "border-box",
          scrollMarginTop: "120px",
        }}>
          <div className="l2-grid-initiator" style={{
            maxWidth: "1280px",
            margin: "0 auto",
            direction: v.dir,
            textAlign: v.textAlign,
            display: "grid",
            gridTemplateColumns: "0.78fr 1.22fr",
            gap: "32px",
            alignItems: "stretch",
          }}>
            <div className="l2-grid-initiator-cards" style={{
              display: "flex",
              flexDirection: "column",
              gap: "23px",
            }}>
              <div className="l2-card l2-reveal l2-fixed-card" style={{
                transitionDelay: "0s",
                minWidth: "0",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "60 fill",
                borderImageWidth: "20px",
                borderImageRepeat: "stretch",
                borderStyle: "solid",
                borderWidth: "20px",
                background: "#fff",
                borderRadius: "18px",
                padding: v.initCardPad,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "324px",
                height: v.initCard1Height,
              }}>
                <div style={{
                  fontSize: v.fs32,
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#062055",
                }}>{t.init1Value}</div>
                <div style={{
                  color: "#5B6472",
                  fontSize: v.fs178,
                  marginTop: "11px",
                  lineHeight: "1.5",
                }}>{t.init1Desc}</div>
              </div>
              <div className="l2-card l2-reveal l2-fixed-card" style={{
                transitionDelay: "0.15s",
                minWidth: "0",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "60 fill",
                borderImageWidth: "20px",
                borderImageRepeat: "stretch",
                borderStyle: "solid",
                borderWidth: "20px",
                background: "#fff",
                borderRadius: "18px",
                padding: v.initCardPad,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "324px",
                height: v.initCard2Height,
              }}>
                <div style={{
                  fontSize: v.fs32,
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#062055",
                }}>{t.init2Value}</div>
                <div style={{
                  color: "#5B6472",
                  fontSize: v.fs178,
                  marginTop: "11px",
                  lineHeight: "1.5",
                }}>{t.init2Desc}</div>
              </div>
              <div className="l2-card l2-reveal l2-fixed-card" style={{
                transitionDelay: "0.3s",
                minWidth: "0",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "60 fill",
                borderImageWidth: "20px",
                borderImageRepeat: "stretch",
                borderStyle: "solid",
                borderWidth: "20px",
                background: "#fff",
                borderRadius: "18px",
                padding: v.initCardPad,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "317px",
                height: v.initCard3Height,
              }}>
                <div style={{
                  fontSize: v.fs32,
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#062055",
                }}>{t.init3Value}</div>
                <div style={{
                  color: "#5B6472",
                  fontSize: v.fs178,
                  marginTop: "11px",
                  lineHeight: "1.5",
                }}>{t.init3Desc}</div>
              </div>
              <div className="l2-card l2-reveal l2-fixed-card" style={{
                transitionDelay: "0.45s",
                minWidth: "0",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "60 fill",
                borderImageWidth: "20px",
                borderImageRepeat: "stretch",
                borderStyle: "solid",
                borderWidth: "20px",
                background: "#fff",
                borderRadius: "18px",
                padding: v.initCardPad,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "322px",
                height: v.initCard4Height,
              }}>
                <div style={{
                  fontSize: v.fs32,
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#062055",
                }}>{t.init4Value}</div>
                <div style={{
                  color: "#5B6472",
                  fontSize: v.fs178,
                  marginTop: "11px",
                  lineHeight: "1.5",
                }}>{t.init4Desc}</div>
              </div>
            </div>
            <div className="l2-grid-initiator-text" style={{
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
              <div className="l2-reveal-soft" style={{
                color: "#9D7331",
                fontSize: v.fs20,
                fontWeight: "700",
                letterSpacing: "0.04em",
                marginBottom: "16px",
              }}>{t.initEyebrow}</div>
              <h2 className="l2-reveal" style={{
                margin: "0 0 20px",
                fontSize: v.initTitleFontSize,
                fontWeight: "700",
                letterSpacing: "-0.01em",
                lineHeight: "1.2",
                background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>{t.initTitle}</h2>
              <p className="l2-reveal-soft" style={{
                fontSize: v.fs27,
                fontWeight: "400",
                lineHeight: "1.5",
                color: "#3C4351",
                margin: "0 0 10px",
                maxWidth: "46ch",
              }}>{t.initP}</p>
              <div style={{
                marginTop: "auto",
                paddingTop: v.initLinkGap,
              }}>
      <a href="https://calcalitlod.co.il" target="_blank" rel="noopener noreferrer" style={{
        display: "inline-block",
        background: "linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%)",
        color: "#fff",
        fontSize: v.fs192,
        fontWeight: "700",
        padding: "16px 34px",
        borderRadius: "999px",
        border: "1.5px solid #C6A15B",
        boxShadow: "0 10px 24px rgba(6,32,85,0.25)",
        textDecoration: "none",
        fontFamily: "inherit",
      }}>{t.initLink} {t.arrow}</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
