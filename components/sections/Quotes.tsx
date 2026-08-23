import type { ReactNode } from 'react';
import type { SectionProps } from '@/lib/props';
import Image from 'next/image';

/**
 * In the original template the Opportunity section is nested *inside* the Quotes
 * section rather than following it as a sibling. That nesting is reproduced here
 * via `children` so the layout matches the live site exactly.
 */
export default function Quotes({ t, v, children }: SectionProps & { children: ReactNode }) {
  return (
    <>
        <section id="quotes" data-screen-label="Management quotes" aria-labelledby="sec-quotes" className="l2-sec" style={{
          padding: "56px 80px",
          boxSizing: "border-box",
          position: "relative",
        }}>
          <div style={{
            maxWidth: "1280px",
            margin: "0 auto",
            position: "relative",
          }}>
            <div style={{
              direction: v.dir,
              textAlign: v.textAlign,
              maxWidth: "none",
              margin: "0 0 28px",
              paddingRight: "8px",
            }}>
              <div className="l2-reveal-soft" style={{
                color: "#9D7331",
                fontSize: v.fs20,
                fontWeight: "700",
                letterSpacing: "0.04em",
                marginBottom: "16px",
              }}>{t.quotesEyebrow}</div>
              <h2 id="sec-quotes" className="l2-reveal" style={{
                margin: "0",
                fontSize: v.quotesTitleFontSize,
                fontWeight: "700",
                letterSpacing: "-0.01em",
                lineHeight: "1.2",
                background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>{t.quotesTitle}</h2>
              <p className="l2-reveal-soft l2-fixed-text" style={{
                fontSize: v.fs27,
                fontWeight: "400",
                lineHeight: "1.5",
                color: "#3C4351",
                margin: "20px 0 0",
                whiteSpace: "nowrap",
                width: "1402px",
                height: "55px",
              }}>{t.quotesSub}</p>
            </div><div style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}>

            <div className="l2-card l2-quote-card" style={{
              minWidth: "340px",
              position: "relative",
              background: "#FFFFFF",
              border: "1px solid rgba(157,115,49,0.12)",
              boxShadow: "0 12px 40px rgba(6,32,85,0.07)",
              borderRadius: "24px",
              padding: "36px",
              display: "grid",
              gridTemplateColumns: "minmax(220px,1fr) auto",
              gap: "28px",
              alignItems: "start",
              overflow: "visible",
              width: "1212px",
              height: v.quoteCard1Height,
            }}>
                <Image width={142} height={142} src="/img/quote-mark.webp" alt="" className="l2-quote-mark" style={{
                  position: "absolute",
                  top: "-13px",
                  ...v.quoteMarkTopSide,
                  width: "130px",
                  height: "auto",
                  opacity: "0.18",
                  zIndex: "1",
                  transform: v.quoteMarkFlip,
                  pointerEvents: "none",
                }} />
                <div style={{
                  minWidth: "0",
                  minHeight: "224px",
                  position: "relative",
                  zIndex: "2",
                }}>

                <div style={{
                  fontSize: v.fs20,
                  lineHeight: "1.5",
                  color: "#5B6472",
                  marginTop: v.quoteTextMarginTop,
                }}>{t.quote1Text}<Image width={142} height={142} src="/img/quote-mark.webp" alt="" className="l2-quote-mark l2-quote-mark-bottom" style={{
                  position: "absolute",
                  width: "157px",
                  height: "157px",
                  opacity: "0.18",
                  zIndex: "1",
                  pointerEvents: "none",
                  transform: "rotate(180deg)",
                  top: "118px",
                  left: "533px",
                }} /></div></div>
                <div className="l2-quote-photo" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: "190px",
                  flex: "none",
                  marginTop: "-40px",
                }}>
                  <div style={{
                    position: "relative",
                    width: "190px",
                    height: "190px",
                  }}>
                    <Image width={1600} height={1600} src="/img/quote-mayor.webp" alt={t.quote1Name} style={{
                      position: "absolute",
                      inset: "32px",
                      width: "126px",
                      height: "126px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      boxShadow: "0 8px 20px rgba(6,32,85,0.18)",
                    }} />
                    <Image width={1600} height={1600} src="/img/quote-ring.webp" alt="" style={{
                      position: "absolute",
                      inset: "0",
                      width: "190px",
                      height: "190px",
                      objectFit: "contain",
                      pointerEvents: "none",
                    }} />
                  </div><div style={{
                    fontWeight: "700",
                    fontSize: v.fs22,
                    color: "#062055",
                    marginTop: "-10px",
                  }}>{t.quote1Name}</div>
                  <div style={{
                    fontSize: "15px",
                    color: "#5B6472",
                    marginTop: "2px",
                  }}>{t.quote1Title}</div>
                  <div style={{
                    fontSize: "13px",
                    color: "#6B7280",
                    marginTop: "36px",
                  }}>{t.quote1Credit}</div>
                </div>
              </div>
            <div className="l2-card l2-quote-card" style={{
              minWidth: "340px",
              position: "relative",
              background: "#FFFFFF",
              border: "1px solid rgba(157,115,49,0.12)",
              boxShadow: "0 12px 40px rgba(6,32,85,0.07)",
              borderRadius: "24px",
              padding: "36px",
              display: "grid",
              gridTemplateColumns: "minmax(220px,1fr) auto",
              gap: "28px",
              alignItems: "start",
              overflow: "visible",
              width: "1215px",
              height: v.quoteCard2Height,
            }}>
                <Image width={142} height={142} src="/img/quote-mark.webp" alt="" className="l2-quote-mark" style={{
                  position: "absolute",
                  top: "-13px",
                  ...v.quoteMarkTopSide,
                  width: "130px",
                  height: "auto",
                  opacity: "0.18",
                  zIndex: "1",
                  transform: v.quoteMarkFlip,
                  pointerEvents: "none",
                }} />
                <div style={{
                  minWidth: "0",
                  minHeight: "224px",
                  position: "relative",
                  zIndex: "2",
                }}>
                  <div style={{
                    fontSize: v.fs20,
                    lineHeight: "1.5",
                    color: "#5B6472",
                    marginTop: v.quoteTextMarginTop,
                  }}>{t.quote2Text}</div>
                </div>
                <div className="l2-quote-photo" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: "190px",
                  flex: "none",
                  marginTop: "-40px",
                }}>
                  <div style={{
                    position: "relative",
                    width: "190px",
                    height: "190px",
                  }}>
                    <div style={{
                      position: "absolute",
                      inset: "32px",
                      width: "126px",
                      height: "126px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      boxShadow: "0 8px 20px rgba(6,32,85,0.18)",
                    }}><Image width={1600} height={1600} src="/img/quote-ceo.webp" alt={t.quote2Name} style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "50% 25%",
                      transform: "scale(1.15)",
                    }} /></div>
                    <Image width={1600} height={1600} src="/img/quote-ring.webp" alt="" style={{
                      position: "absolute",
                      inset: "0",
                      width: "190px",
                      height: "190px",
                      objectFit: "contain",
                      pointerEvents: "none",
                    }} />
                  </div><div style={{
                    fontWeight: "700",
                    fontSize: v.fs22,
                    color: "#062055",
                    marginTop: "-10px",
                  }}>{t.quote2Name}</div>
                  <div style={{
                    fontSize: "15px",
                    color: "#5B6472",
                    marginTop: "2px",
                  }}>{t.quote2Title}</div>
                  <div style={{
                    fontSize: "13px",
                    color: "#6B7280",
                    marginTop: "20px",
                  }}>{t.quote2Credit}</div>

                </div>
              <Image width={142} height={142} src="/img/quote-mark.webp" alt="" className="l2-quote-mark l2-quote-mark-bottom" style={{
                position: "absolute",
                width: "130px",
                height: "auto",
                opacity: "0.18",
                zIndex: "1",
                pointerEvents: "none",
                transform: "rotate(180deg)",
                left: "762px",
                top: "168px",
              }} /></div>


          </div>
        </div>

        {/* ================= OPPORTUNITY (bright) ================= */}
      {children}
        </section>
    </>
  );
}
