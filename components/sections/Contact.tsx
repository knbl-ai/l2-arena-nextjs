import type { SectionProps } from '@/lib/props';

export default function Contact({ t, v }: SectionProps) {
  return (
    <>
        <section id="contact" data-screen-label="Contact and RFP" aria-label={t.navContact} className="l2-sec" style={{
          // Outside the dir="rtl" wrapper in the original document, so this box
          // laid out LTR and its contents were authored against that.
          direction: "ltr",
          position: "relative",
          padding: "24px 80px 56px",
          boxSizing: "border-box",
          overflow: "hidden",
          scrollMarginTop: "110px",
        }}>
        <svg aria-hidden="true" focusable="false" width="500" height="500" viewBox="0 0 500 500" style={{
          position: "absolute",
          bottom: "-140px",
          left: "-140px",
          zIndex: "0",
          pointerEvents: "none",
        }}>
          <defs>
            <linearGradient id="goldArcContact" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9D7331" />
              <stop offset="50%" stopColor="#C6A15B" />
              <stop offset="100%" stopColor="#F4E2B5" />
            </linearGradient>
          </defs>
          <path d="M 40 40 A 210 210 0 0 0 460 460" fill="none" stroke="url(#goldArcContact)" strokeWidth="5" strokeLinecap="round" opacity="0.3" />
        </svg>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: "2",
        }}>


          {/* main contact + form */}
          <div style={{
            display: "flex",
            gap: "56px",
            alignItems: "flex-start",
            flexWrap: "wrap",
            flexDirection: v.contactRowDirection,
            marginTop: "32px",
          }}>
            <div style={{
              flex: "1 1 400px",
              minWidth: "340px",
            }}>
              <div id="contact-form" className="l2-reveal-soft" style={{
                color: "#9D7331",
                fontSize: v.fs20,
                fontWeight: "700",
                letterSpacing: "0.04em",
                marginBottom: "12px",
                direction: v.dir,
                textAlign: v.textAlign,
                scrollMarginTop: "130px",
              }}>{t.navContact}</div>
              <div style={{
                background: "linear-gradient(135deg,#123B7C 0%,#0B2A5C 55%,#062055 100%)",
                border: "1.5px solid #C6A15B",
                borderRadius: "24px",
                boxShadow: "0 12px 40px rgba(6,32,85,0.15),0 0 30px rgba(198,161,91,0.15)",
                direction: v.dir,
              }}>
                <div style={{
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: v.textAlign,
                }}>
                  <div>
                    <div style={{
                      fontSize: v.fs168,
                      fontWeight: "700",
                      color: "#E5C982",
                      marginBottom: "16px",
                    }}>{t.contactLabel}</div>
                    <div style={{
                      fontSize: v.fs288,
                      fontWeight: "700",
                      letterSpacing: "-0.01em",
                      marginBottom: "6px",
                      color: "#fff",
                    }}>{t.contactName}</div>
                    <div style={{
                      fontSize: v.fs18,
                      color: "rgba(255,255,255,0.72)",
                      marginBottom: "24px",
                    }}>{t.contactRole}</div>
                    <a href="mailto:nitzan@calcalitlod.co.il" style={{
                      color: "#E5C982",
                      fontSize: v.fs192,
                      fontWeight: "700",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(229,201,130,0.5)",
                      paddingBottom: "2px",
                    }}>nitzan@calcalitlod.co.il</a>
                  </div>

                </div>
              </div>
            </div>

            <div style={{
              flex: "1 1 320px",
              minWidth: "280px",
              paddingTop: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <div style={{
                textAlign: "center",
                margin: "0 0 24px",
                width: "100%",
                maxWidth: "420px",
              }}>
                <a href="https://calcalitlod.co.il/auctions/%d7%94%d7%96%d7%9e%d7%a0%d7%94-%d7%9c%d7%94%d7%a9%d7%aa%d7%aa%d7%a3-%d7%91%d7%94%d7%9c%d7%99%d7%9a-%d7%9e%d7%99%d7%95%d7%9f-%d7%9e%d7%95%d7%a7%d7%93%d7%9d-pre-qualification-%d7%91%d7%9e%d7%a1/" target="_blank" rel="noopener noreferrer" className="l2-btn-primary" style={{
                  background: "linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%)",
                  color: "#fff",
                  textDecoration: "none",
                  boxSizing: "border-box",
                  fontSize: v.fs22,
                  fontWeight: "700",
                  padding: "20px 40px",
                  borderRadius: "999px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  flexDirection: v.rfpBtnFlexDirection,
                }}><span>{t.arrow}</span><span>{t.rfpCta}</span><span className="l2-visually-hidden">{t.opensInNewWindow}</span></a>

              </div>
              <div style={{
                width: "100%",
                maxWidth: "420px",
                position: "relative",
                marginTop: "8px",
              }} className="l2-float">
                <div style={{
                  boxSizing: "border-box",
                }}><div className="l2-deadline-bubble" style={{
                  aspectRatio: "1000/520",
                  background: "url(\"/img/deadline-bubble.webp\") center/100% 100% no-repeat",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0px",
                  padding: "0 32px",
                  boxSizing: "border-box",
                  direction: v.dir,
                  width: "100%",
                  transform: "translateY(-20%)",
                  height: "236px",
                  fontSize: "60px",
                  fontWeight: "700",
                  margin: "0 auto",
                }}>
                  <span style={{
                    color: "#062055",
                    fontSize: v.fs24,
                    fontWeight: "700",
                  }}>{t.deadlineLabel}</span><span style={{
                    fontSize: v.deadlineDateSize,
                    whiteSpace: "nowrap",
                  }}>{t.deadlineDate}</span>

              </div></div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}
