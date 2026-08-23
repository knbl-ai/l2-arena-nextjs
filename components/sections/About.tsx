import type { SectionProps } from '@/lib/props';

export default function About({ t, v }: SectionProps) {
  return (
    <>
      <div id="about" data-screen-label="About the Arena" className="l2-sec" style={{
        position: "relative",
        padding: "56px 80px",
        boxSizing: "border-box",
        background: "#FAF8F4",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: "-180px",
          right: "-220px",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(201,161,90,0.14),transparent 70%)",
          pointerEvents: "none",
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "-160px",
          left: "-180px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(19,43,99,0.06),transparent 70%)",
          pointerEvents: "none",
        }}></div>
        <div className="l2-grid-about" style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "80px",
          alignItems: "start",
          position: "relative",
          zIndex: "2",
        }}>
          <div>
            <div className="l2-reveal-soft" style={{
              color: "#9D7331",
              fontSize: v.fs20,
              fontWeight: "700",
              letterSpacing: "0.04em",
              marginBottom: "16px",
            }}>{t.aboutEyebrow}</div>
            <h2 className="l2-reveal" style={{
              margin: "0 0 20px",
              fontSize: v.aboutTitleFontSize,
              fontWeight: "700",
              letterSpacing: "-0.01em",
              lineHeight: "1.15",
              background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}><span style={{
              fontSize: v.aboutTitleFontSize,
            }}>{t.heroTitle1}<br />{t.heroTitle2}</span></h2>
            <p className="l2-reveal-soft" style={{
              fontSize: v.fs27,
              lineHeight: "1.5",
              color: "#3C4351",
              margin: "0 0 12px",
              maxWidth: "58ch",
            }}>{t.aboutP1}</p>
            <p className="l2-reveal-soft" style={{
              fontSize: v.fs27,
              lineHeight: "1.5",
              color: "#3C4351",
              margin: "0 0 12px",
              maxWidth: "58ch",
            }}>{t.aboutP2}</p>
            <p className="l2-reveal-soft" style={{
              fontSize: v.fs27,
              lineHeight: "1.5",
              color: "#3C4351",
              margin: "0",
              maxWidth: "58ch",
            }}>{t.aboutP3}</p>

          </div>
          <div style={{
            position: "relative",
            marginTop: "72px",
          }}>
            <div className="l2-grid-cards2" style={{
              position: "relative",
              zIndex: "2",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "36px",
            }}>
              <div className="l2-card l2-reveal" style={{
                transitionDelay: "0s",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "60 fill",
                borderImageWidth: "20px",
                borderImageRepeat: "stretch",
                borderStyle: "solid",
                borderWidth: "20px",
                background: "#fff",
                borderRadius: "16px",
                padding: "44px",
              }}>
                <div style={{
                  color: "#B08A45",
                  fontSize: v.fs144,
                  fontWeight: "600",
                  letterSpacing: "0.02em",
                  marginBottom: "16px",
                }}>{t.card1Label}</div>
                <div style={{
                  fontSize: v.fs32,
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#062055",
                }}>{t.card1Value}</div>
                <div style={{
                  color: "#4A5568",
                  fontSize: v.fs165,
                  marginTop: "14px",
                  lineHeight: "1.6",
                }}>{t.card1Desc}</div>
              </div>
              <div className="l2-card l2-reveal" style={{
                transitionDelay: "0s",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "60 fill",
                borderImageWidth: "20px",
                borderImageRepeat: "stretch",
                borderStyle: "solid",
                borderWidth: "20px",
                background: "#fff",
                borderRadius: "16px",
                padding: "44px",
              }}>
                <div style={{
                  color: "#B08A45",
                  fontSize: v.fs144,
                  fontWeight: "600",
                  letterSpacing: "0.02em",
                  marginBottom: "16px",
                }}>{t.card2Label}</div>
                <div style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#062055",
                }}>{t.card2Value}</div>
                <div style={{
                  color: "#4A5568",
                  fontSize: v.fs165,
                  marginTop: "14px",
                  lineHeight: "1.6",
                }}>{t.card2Desc}</div>
              </div>
              <div className="l2-card l2-reveal" style={{
                transitionDelay: "0.2s",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "60 fill",
                borderImageWidth: "20px",
                borderImageRepeat: "stretch",
                borderStyle: "solid",
                borderWidth: "20px",
                background: "#fff",
                borderRadius: "16px",
                padding: "44px",
              }}>
                <div style={{
                  color: "#B08A45",
                  fontSize: v.fs144,
                  fontWeight: "600",
                  letterSpacing: "0.02em",
                  marginBottom: "16px",
                }}>{t.card3Label}</div>
                <div style={{
                  fontSize: v.fs32,
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#062055",
                }}>{t.card3Value}<br /></div>
                <div style={{
                  color: "#4A5568",
                  fontSize: v.fs165,
                  marginTop: "14px",
                  lineHeight: "1.6",
                }}>{t.card3Desc}</div>
              </div>
              <div className="l2-card l2-reveal" style={{
                transitionDelay: "0.2s",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "60 fill",
                borderImageWidth: "20px",
                borderImageRepeat: "stretch",
                borderStyle: "solid",
                borderWidth: "20px",
                background: "#fff",
                borderRadius: "16px",
                padding: "44px",
              }}>
                <div style={{
                  color: "#B08A45",
                  fontSize: v.fs144,
                  fontWeight: "600",
                  letterSpacing: "0.02em",
                  marginBottom: "16px",
                }}>{t.card4Label}</div>
                <div style={{
                  fontSize: v.fs32,
                  fontWeight: "800",
                  letterSpacing: "-0.01em",
                  color: "#062055",
                }}>{t.card4Value}</div>
                <div style={{
                  color: "#4A5568",
                  fontSize: v.fs165,
                  marginTop: "14px",
                  lineHeight: "1.6",
                }}>{t.card4Desc}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="l2-grid-about" style={{
          maxWidth: "1280px",
          margin: "56px auto 0",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "80px",
          position: "relative",
          zIndex: "2",
        }}>

          <div style={{
            marginLeft: "0",
          }}>
          <div className="l2-fixed-box" style={{
            background: "#FDFCFA",
            border: "1px solid rgba(157,115,49,0.18)",
            borderRadius: "20px",
            padding: "36px 40px",
            boxShadow: "0 8px 24px rgba(6,32,85,0.05)",
            maxWidth: "100%",
            boxSizing: "border-box",
            width: "1257px",
            height: v.recordBoxHeight,
          }}>
            <div style={{
              fontSize: v.fs30,
              fontWeight: "700",
              color: "#062055",
              marginBottom: "16px",
            }}>{t.recordTitle}</div>
            <div style={{
              fontSize: v.fs27,
              lineHeight: "1.5",
              color: "#3C4351",
            }}>{t.recordP1} <strong>{t.recordStrong}</strong> {t.recordP2}</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
