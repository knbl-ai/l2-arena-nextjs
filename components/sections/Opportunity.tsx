import type { SectionProps } from '@/lib/props';
import Image from 'next/image';

export default function Opportunity({ t, v }: SectionProps) {
  return (
    <>
      <section id="opportunity" data-screen-label="Investment opportunity" aria-labelledby="sec-opportunity" className="l2-sec" style={{
        padding: "56px 80px 32px",
        boxSizing: "border-box",
        overflow: "visible",
        position: "relative",
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          overflow: "visible",
          position: "relative",
        }}>
          <div className="l2-grid-opp-top" style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px,760px) minmax(0,1fr)",
            gap: "48px",
            alignItems: "center",
            margin: "0 0 24px",
            position: "relative",
          }}>
            <Image width={1254} height={1254} src="/img/opp-ring.webp" alt="" className="l2-opp-ring" style={{
              width: "100%",
              maxWidth: "760px",
              height: "auto",
              flex: "none",
              marginRight: "-120px",
              position: "relative",
              zIndex: "2",
            }} />
            <div style={{
              direction: v.dir,
              textAlign: v.textAlign,
              maxWidth: "60ch",
              justifySelf: "end",
              overflow: "visible",
            }}>
              <div className="l2-reveal-soft" style={{
                color: "#9D7331",
                fontSize: v.fs192,
                fontWeight: "700",
                letterSpacing: "0.04em",
                marginBottom: "16px",
              }}>{t.oppEyebrow}</div>
              <h2 id="sec-opportunity" className="l2-reveal l2-h2 l2-fixed-text" style={{
                margin: "0",
                fontSize: v.oppTitleFontSize,
                fontWeight: "700",
                letterSpacing: "-0.01em",
                lineHeight: "1.2",
                whiteSpace: v.titleWrapMode,
                background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                width: v.oppTitleWidth,
                height: v.oppTitleHeight,
              }}>{t.oppTitle}</h2>

              <p className="l2-reveal-soft" style={{
                margin: "16px 0 0",
                fontSize: v.fs27,
                lineHeight: "1.5",
                color: "#3C4351",
                maxWidth: "542px",
              }}>{t.oppLead}</p>
              <div className="l2-opp-pill" style={{
                marginTop: "24px",
                boxSizing: "border-box",
                borderImageSource: "url(\"/img/frame-gold.webp\")",
                borderImageSlice: "110 fill",
                borderImageWidth: "26px",
                borderImageRepeat: "stretch",
                borderRadius: "20px",
                padding: "14px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                direction: v.dir,
                maxWidth: "100%",
                width: "100%",
              }}>
                <div className="l2-fixed-text" style={{
                  color: "#062055",
                  fontSize: "clamp(13px,1.1vw,17px)",
                  fontWeight: "700",
                  lineHeight: "1.5",
                  whiteSpace: "normal",
                  textAlign: "center",
                }}>{t.oppPill}</div>
              </div>
            </div>
          </div>

          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}>
          <div className="l2-stats-grid-wrap" style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            minWidth: "0",
            margin: "16px 0 0",
            gap: "48px",
          }}>
            <div className="l2-grid-stats4" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,minmax(0,1fr))",
              gap: "8px",
            }}>
            <div className="l2-reveal-soft" style={{
              transitionDelay: "0s",
              padding: "0 16px",
              borderInlineEnd: "1px solid rgba(157,115,49,0.28)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              direction: v.dir,
              minWidth: "0",
            }}>
              <div style={{
                fontSize: "clamp(20px,2.2vw,36px)",
                fontWeight: "800",
                color: "#062055",
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}>{t.oppStat1Num}</div>
              <div style={{
                fontSize: v.fs21,
                color: "#5B6472",
                lineHeight: "1.55",
                maxWidth: "260px",
              }}>{t.oppStat1Desc}</div>
            </div>
            <div className="l2-reveal-soft" style={{
              transitionDelay: "0.08s",
              padding: "0 16px",
              borderInlineEnd: "1px solid rgba(157,115,49,0.28)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              direction: v.dir,
              minWidth: "0",
            }}>
              <div style={{
                fontSize: "clamp(20px,2.2vw,36px)",
                fontWeight: "800",
                color: "#062055",
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}>{t.oppStat2Num}</div>
              <div style={{
                fontSize: v.fs21,
                color: "#5B6472",
                lineHeight: "1.55",
                maxWidth: "260px",
              }}>{t.oppStat2Desc}</div>
            </div>
            <div className="l2-reveal-soft" style={{
              transitionDelay: "0.16s",
              padding: "0 16px",
              borderInlineEnd: "1px solid rgba(157,115,49,0.28)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              direction: v.dir,
              minWidth: "0",
            }}>
              <div style={{
                fontSize: "clamp(20px,2.2vw,36px)",
                fontWeight: "800",
                color: "#062055",
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}>{t.oppStat3Num}</div>
              <div style={{
                fontSize: v.fs21,
                color: "#5B6472",
                lineHeight: "1.55",
                maxWidth: "260px",
              }}>{t.oppStat3Desc}</div>
            </div>
            <div className="l2-reveal-soft" style={{
              transitionDelay: "0.24s",
              padding: "0 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              direction: v.dir,
              minWidth: "0",
            }}>
              <div style={{
                fontSize: "clamp(20px,2.2vw,36px)",
                fontWeight: "800",
                color: "#062055",
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}>{t.oppStat4Num}</div>
              <div style={{
                fontSize: v.fs21,
                color: "#5B6472",
                lineHeight: "1.55",
                maxWidth: "260px",
              }}>{t.oppStat4Desc}</div>
            </div>
            </div>
            <div className="l2-grid-stats4" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,minmax(0,1fr))",
              gap: "8px",
              paddingTop: "48px",
              borderTop: "1px solid rgba(157,115,49,0.16)",
            }}>
            <div className="l2-reveal-soft" style={{
              transitionDelay: "0.32s",
              padding: "0 16px",
              borderInlineEnd: "1px solid rgba(157,115,49,0.28)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              direction: v.dir,
              minWidth: "0",
            }}>
              <div style={{
                fontSize: "clamp(20px,2.2vw,36px)",
                fontWeight: "800",
                color: "#062055",
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}>{t.oppStat5Num}</div>
              <div style={{
                fontSize: v.fs21,
                color: "#5B6472",
                lineHeight: "1.55",
                maxWidth: "260px",
              }}>{t.oppStat5Desc}</div>
            </div>
            <div className="l2-reveal-soft" style={{
              transitionDelay: "0.4s",
              padding: "0 16px",
              borderInlineEnd: "1px solid rgba(157,115,49,0.28)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              direction: v.dir,
              minWidth: "0",
            }}>
              <div style={{
                fontSize: "clamp(20px,2.2vw,36px)",
                fontWeight: "800",
                color: "#062055",
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}>{t.oppStat6Num}</div>
              <div style={{
                fontSize: v.fs21,
                color: "#5B6472",
                lineHeight: "1.55",
                maxWidth: "260px",
              }}>{t.oppStat6Desc}</div>
            </div>
            <div className="l2-reveal-soft" style={{
              transitionDelay: "0.48s",
              padding: "0 16px",
              borderInlineEnd: "1px solid rgba(157,115,49,0.28)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              direction: v.dir,
              minWidth: "0",
            }}>
              <div style={{
                fontSize: "clamp(20px,2.2vw,36px)",
                fontWeight: "800",
                color: "#062055",
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}>{t.oppStat7Num}</div>
              <div style={{
                fontSize: v.fs21,
                color: "#5B6472",
                lineHeight: "1.55",
                maxWidth: "260px",
              }}>{t.oppStat7Desc}</div>
            </div>
            <div className="l2-reveal-soft" style={{
              transitionDelay: "0.56s",
              padding: "0 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "10px",
              direction: v.dir,
              minWidth: "0",
            }}>
              <div style={{
                fontSize: "clamp(20px,2.2vw,36px)",
                fontWeight: "800",
                color: "#062055",
                whiteSpace: "nowrap",
                wordBreak: "keep-all",
                overflowWrap: "normal",
                hyphens: "none",
              }}>{t.oppStat8Num}</div>
              <div style={{
                fontSize: v.fs21,
                color: "#5B6472",
                lineHeight: "1.55",
                maxWidth: "260px",
              }}>{t.oppStat8Desc}</div>
            </div>
            </div>
          </div><div className="l2-grid-cards4" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            flex: "none",
            width: "100%",
            order: "-1",
          }}>
            <div className="l2-card l2-reveal" style={{
              transitionDelay: "0s",
              borderRadius: "24px",
              borderImageSource: "url(\"/img/frame-gold.webp\")",
              borderImageSlice: "110 fill",
              borderImageWidth: "26px",
              borderImageRepeat: "stretch",
              background: "#fff",
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingInlineStart: "28px",
              paddingInlineEnd: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: "196px",
              boxSizing: "border-box",
            }}>

              <div style={{
                fontSize: v.fs22,
                fontWeight: "700",
                margin: "0 0 14px",
                color: "#062055",
                textAlign: "center",
              }}>{t.oppCard1Title}</div>
              <div style={{
                fontSize: v.fs175,
                lineHeight: "1.55",
                color: "#5B6472",
                textAlign: "center",
              }}>{t.oppCard1Desc}</div>
            </div>
            <div className="l2-card l2-reveal" style={{
              transitionDelay: "0.15s",
              borderRadius: "24px",
              borderImageSource: "url(\"/img/frame-gold.webp\")",
              borderImageSlice: "110 fill",
              borderImageWidth: "26px",
              borderImageRepeat: "stretch",
              background: "#fff",
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingInlineStart: "28px",
              paddingInlineEnd: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: "196px",
              boxSizing: "border-box",
            }}>

              <div style={{
                fontSize: v.fs22,
                fontWeight: "700",
                margin: "0 0 14px",
                color: "#062055",
                textAlign: "center",
              }}>{t.oppCard2Title}</div>
              <div style={{
                fontSize: v.fs175,
                lineHeight: "1.55",
                color: "#5B6472",
                textAlign: "center",
              }}>{t.oppCard2Desc1}<br />{t.oppCard2Desc2}</div>
            </div>
            <div className="l2-card l2-reveal" style={{
              transitionDelay: "0.3s",
              borderRadius: "24px",
              borderImageSource: "url(\"/img/frame-gold.webp\")",
              borderImageSlice: "110 fill",
              borderImageWidth: "26px",
              borderImageRepeat: "stretch",
              background: "#fff",
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingInlineStart: "28px",
              paddingInlineEnd: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: "196px",
              boxSizing: "border-box",
            }}>

              <div style={{
                fontSize: v.fs22,
                fontWeight: "700",
                margin: "0 0 14px",
                color: "#062055",
                textAlign: "center",
              }}>{t.oppCard3Title}</div>
              <div style={{
                fontSize: v.fs175,
                lineHeight: "1.55",
                color: "#5B6472",
                textAlign: "center",
              }}>{t.oppCard3Desc}</div>
            </div>
            <div className="l2-card l2-reveal" style={{
              transitionDelay: "0.45s",
              borderRadius: "24px",
              borderImageSource: "url(\"/img/frame-gold.webp\")",
              borderImageSlice: "110 fill",
              borderImageWidth: "26px",
              borderImageRepeat: "stretch",
              background: "#fff",
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingInlineStart: "28px",
              paddingInlineEnd: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              minHeight: "196px",
              boxSizing: "border-box",
            }}>

              <div style={{
                fontSize: v.fs22,
                fontWeight: "700",
                margin: "0 0 14px",
                color: "#062055",
                textAlign: "center",
              }}>{t.oppCard4Title}</div>
              <div style={{
                fontSize: v.fs175,
                lineHeight: "1.55",
                color: "#5B6472",
                textAlign: "center",
              }}>{t.oppCard4Desc}</div>
            </div>
          </div>
          </div>

        </section>
    </>
  );
}
