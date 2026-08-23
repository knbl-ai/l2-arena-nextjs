import type { SectionProps } from '@/lib/props';
import Image from 'next/image';

export default function Footer({ t, v }: SectionProps) {
  return (
    <>
      <div data-screen-label="Footer" className="l2-sec" style={{
        background: "#062055",
        padding: "64px 80px",
        boxSizing: "border-box",
        color: "#fff",
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}>
          <div className="l2-footer-row" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            flexDirection: v.footerRowDirection,
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flex: "none",
            }}>
              <a href="https://calcalitlod.co.il/" target="_blank" rel="noopener noreferrer" style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: v.fs156,
                textDecoration: "none",
              }}>{t.footerCompany}</a>
              <span style={{
                color: "rgba(255,255,255,0.25)",
              }}>|</span>
              <a href={v.lodMunicipalityUrl} target="_blank" rel="noopener noreferrer" style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: v.fs156,
                textDecoration: "none",
              }}>{t.footerCity}</a>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flex: "none",
              flexDirection: v.footerLogoDirection,
            }}>
              <div style={{
                textAlign: v.textAlign,
              }}>
                <div style={{
                  fontSize: "20.4px",
                  fontWeight: "700",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}>L2 ARENA</div>
                <div style={{
                  fontSize: v.fs156,
                  color: "rgba(255,255,255,0.55)",
                  marginTop: "2px",
                }}>{t.footerTagline}</div>
              </div>
              <Image width={801} height={800} src="/img/logo-l2.webp" alt="L2 Arena" style={{
                width: "36px",
                height: "36px",
                objectFit: "contain",
              }} />
            </div>
          </div>
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            marginTop: "32px",
            paddingTop: "24px",
            fontSize: v.fs156,
            color: "rgba(255,255,255,0.4)",
            textAlign: "center",
          }}>{t.footerCopy}</div>
          <div style={{
            marginTop: "16px",
            fontSize: "11px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.35)",
            textAlign: "center",
            direction: v.dir,
          }}>{t.footerDisclaimer}</div>
        </div>
      </div>
    </>
  );
}
