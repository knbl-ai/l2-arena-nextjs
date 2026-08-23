import type { SectionProps } from '@/lib/props';

export default function Benefits({ t, v }: SectionProps) {
  return (
    <>
      <section data-screen-label="Cooperation banner" aria-labelledby="sec-benefits" className="l2-sec" style={{
        // Outside the dir="rtl" wrapper in the original document, so this box
        // laid out LTR and its contents were authored against that.
        direction: "ltr",
        padding: "56px 80px 0",
        boxSizing: "border-box",
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
              marginBottom: "32px",
            }}>
              <h2 id="sec-benefits" className="l2-reveal l2-h2 l2-fixed-text" style={{
                margin: "0",
                fontSize: v.benefitsTitleFontSize,
                fontWeight: "700",
                letterSpacing: "-0.01em",
                lineHeight: "1.2",
                whiteSpace: "nowrap",
                background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>{t.benefitsTitle}</h2>
              <p className="l2-reveal-soft" style={{
                margin: "16px 0 0",
                fontSize: v.fs27,
                lineHeight: "1.5",
                color: "#3C4351",
              }}>{t.benefitsLead}</p>
            </div>
            <div style={{
              direction: "ltr",
            }}>
              {/* benefits two-column list */}
              <div>
                <div className="l2-reveal-soft" style={{
                  color: "#9D7331",
                  fontSize: v.fs32,
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                  marginBottom: "20px",
                  direction: v.dir,
                  textAlign: v.textAlign,
                }}>{t.benefitsWhy}</div>
                <div className="l2-grid-benefits" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  columnGap: "32px",
                  rowGap: "4px",
                  direction: v.dir,
                }}>
                  <div className="l2-reveal-soft l2-benefit-1" style={{
                    transitionDelay: "0.2s",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    direction: v.dir,
                    padding: "18px 4px",
                    borderBottom: "1px solid rgba(157,115,49,0.14)",
                  }}>
                    <svg aria-hidden="true" focusable="false" width="20" height="16" viewBox="0 0 18 14" fill="none" style={{
                      flex: "none",
                      marginTop: "6px",
                      transform: v.benefitArrowFlip,
                    }}><path d="M16 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div className="l2-fixed-text" style={{
                      fontSize: v.fs22,
                      fontWeight: "700",
                      color: "#062055",
                      whiteSpace: "nowrap",
                    }}>{t.benefit1}</div>
                  </div>
                  <div className="l2-reveal-soft l2-benefit-2" style={{
                    transitionDelay: "0.25s",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    direction: v.dir,
                    padding: "18px 4px",
                    borderBottom: "1px solid rgba(157,115,49,0.14)",
                  }}>
                    <svg aria-hidden="true" focusable="false" width="20" height="16" viewBox="0 0 18 14" fill="none" style={{
                      flex: "none",
                      marginTop: "6px",
                      transform: v.benefitArrowFlip,
                    }}><path d="M16 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div style={{
                      fontSize: v.fs22,
                      fontWeight: "700",
                      color: "#062055",
                    }}>{t.benefit2}</div>
                  </div>
                  <div className="l2-reveal-soft l2-benefit-3" style={{
                    transitionDelay: "0.3s",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    direction: v.dir,
                    padding: "18px 4px",
                    borderBottom: "1px solid rgba(157,115,49,0.14)",
                  }}>
                    <svg aria-hidden="true" focusable="false" width="20" height="16" viewBox="0 0 18 14" fill="none" style={{
                      flex: "none",
                      marginTop: "6px",
                      transform: v.benefitArrowFlip,
                    }}><path d="M16 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div style={{
                      fontSize: v.fs22,
                      fontWeight: "700",
                      color: "#062055",
                    }}>{t.benefit3}</div>
                  </div>
                  <div className="l2-reveal-soft l2-benefit-4" style={{
                    transitionDelay: "0.35s",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    direction: v.dir,
                    padding: "18px 4px",
                    borderBottom: "1px solid rgba(157,115,49,0.14)",
                  }}>
                    <svg aria-hidden="true" focusable="false" width="20" height="16" viewBox="0 0 18 14" fill="none" style={{
                      flex: "none",
                      marginTop: "6px",
                      transform: v.benefitArrowFlip,
                    }}><path d="M16 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div style={{
                      fontSize: v.fs22,
                      fontWeight: "700",
                      color: "#062055",
                    }}>{t.benefit4}</div>
                  </div>
                  <div className="l2-reveal-soft l2-benefit-5" style={{
                    transitionDelay: "0.4s",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    direction: v.dir,
                    padding: "18px 4px",
                    borderBottom: "1px solid rgba(157,115,49,0.14)",
                  }}>
                    <svg aria-hidden="true" focusable="false" width="20" height="16" viewBox="0 0 18 14" fill="none" style={{
                      flex: "none",
                      marginTop: "6px",
                      transform: v.benefitArrowFlip,
                    }}><path d="M16 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div style={{
                      fontSize: v.fs22,
                      fontWeight: "700",
                      color: "#062055",
                    }}>{t.benefit5}</div>
                  </div>
                  <div className="l2-reveal-soft l2-benefit-6" style={{
                    transitionDelay: "0.45s",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    direction: v.dir,
                    padding: "18px 4px",
                    borderBottom: "1px solid rgba(157,115,49,0.14)",
                  }}>
                    <svg aria-hidden="true" focusable="false" width="20" height="16" viewBox="0 0 18 14" fill="none" style={{
                      flex: "none",
                      marginTop: "6px",
                      transform: v.benefitArrowFlip,
                    }}><path d="M16 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div style={{
                      fontSize: v.fs22,
                      fontWeight: "700",
                      color: "#062055",
                    }}>{t.benefit6}</div>
                  </div>
                  <div className="l2-benefit-7" style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    direction: v.dir,
                    padding: "18px 4px",
                  }}>
                    <svg aria-hidden="true" focusable="false" width="20" height="16" viewBox="0 0 18 14" fill="none" style={{
                      flex: "none",
                      marginTop: "6px",
                      transform: v.benefitArrowFlip,
                    }}><path d="M16 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 2l-5 5 5 5" stroke="#C6A15B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div style={{
                      fontSize: v.fs22,
                      fontWeight: "700",
                      color: "#062055",
                    }}>{t.benefit7}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
