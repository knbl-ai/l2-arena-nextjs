'use client';

import Link from 'next/link';
import type { SectionProps } from '@/lib/props';
import { useMenu } from '@/components/MenuProvider';
import { otherLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import Image from 'next/image';

export default function Nav({ t, v, lang }: SectionProps & { lang: Lang }) {
  const { mobileMenuOpen, toggleMobileMenu } = useMenu();
  const hamburgerLine1Transform = mobileMenuOpen ? 'translateY(8.5px) rotate(45deg)' : 'none';
  const hamburgerLine2Opacity = mobileMenuOpen ? 0 : 1;
  const hamburgerLine3Transform = mobileMenuOpen ? 'translateY(-8.5px) rotate(-45deg)' : 'none';

  return (
    <>
      {/* ================= NAV ================= */}
      <div className="l2-nav-outer" style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        width: "100%",
        zIndex: "9999",
        isolation: "isolate",
        padding: "20px 24px",
        boxSizing: "border-box",
      }}>
        <div className="l2-nav-inner" style={{
          maxWidth: "1280px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(157,115,49,0.12)",
          boxShadow: "0 12px 40px rgba(6,32,85,0.07)",
          borderRadius: "999px",
          padding: "10px 14px 10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}>
          <a href="https://calcalitlod.co.il/auctions/%d7%94%d7%96%d7%9e%d7%a0%d7%94-%d7%9c%d7%94%d7%a9%d7%aa%d7%aa%d7%a3-%d7%91%d7%94%d7%9c%d7%99%d7%9a-%d7%9e%d7%99%d7%95%d7%9f-%d7%9e%d7%95%d7%a7%d7%93%d7%9d-pre-qualification-%d7%91%d7%9e%d7%a1/" target="_blank" rel="noopener noreferrer" className="l2-btn-primary l2-nav-cta" style={{
            textDecoration: "none",
            background: "linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%) padding-box,linear-gradient(135deg,#E8C97A 0%,#9D7331 40%,#C6A15B 70%,#E8C97A 100%) border-box",
            color: "#fff",
            fontSize: v.navCtaFontSize,
            fontWeight: "700",
            padding: v.navCtaPadding,
            borderRadius: "999px",
            border: "4px solid transparent",
            boxShadow: "0 10px 24px rgba(6,32,85,0.25)",
            fontFamily: "inherit",
            cursor: "pointer",
            whiteSpace: "nowrap",
            flex: "none",
          }}>{t.rfpCta} {t.arrow}</a>
          <div className="l2-nav-links" style={{
            display: "flex",
            alignItems: "center",
            gap: v.navLinksGap,
            flexWrap: "nowrap",
            flexShrink: "0",
          }}>
            <a className="l2-navlink" href="#about" style={{
              whiteSpace: "nowrap",
              color: "#3C4351",
              fontSize: v.navLinkFontSize,
              fontWeight: "500",
              textDecoration: "none",
            }}>{t.navAbout}</a>
            <a className="l2-navlink" href="#opportunity" style={{
              whiteSpace: "nowrap",
              color: "#3C4351",
              fontSize: v.navLinkFontSize,
              fontWeight: "500",
              textDecoration: "none",
            }}>{t.navOpportunity}</a>
            <a className="l2-navlink" href="#timeline" style={{
              whiteSpace: "nowrap",
              color: "#3C4351",
              fontSize: v.navLinkFontSize,
              fontWeight: "500",
              textDecoration: "none",
            }}>{t.navTimeline}</a><a className="l2-navlink" href="#contact-form" style={{
              whiteSpace: "nowrap",
              color: "#3C4351",
              fontSize: v.navLinkFontSize,
              fontWeight: "500",
              textDecoration: "none",
            }}>{t.navContact}</a>

          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flex: "none",
          }}>
            <div className="l2-partner-logos" style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              paddingInlineEnd: "10px",
              borderInlineEnd: "1px solid rgba(157,115,49,0.25)",
            }}>
              <Image priority width={420} height={500} src="/img/logo-lod-municipality.webp" alt="Lod Municipality" style={{
                height: "38px",
                width: "auto",
                objectFit: "contain",
              }} />
              <Image priority width={2000} height={710} src="/img/logo-calcalit-lod.webp" alt="Calcalit Lod" style={{
                height: "28px",
                width: "auto",
                objectFit: "contain",
              }} />
            </div>
            <Link href={`/${otherLang(lang)}`} className="l2-btn-primary" scroll={false} style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              background: "linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%)",
              border: "1.5px solid #C6A15B",
              borderRadius: "999px",
              padding: "8.5px 17.5px",
              cursor: "pointer",
              fontFamily: "inherit",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
              boxShadow: "0 8px 20px rgba(6,32,85,0.28)",
            }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>
              {v.langToggleLabel}
            </Link>
            <a href="https://calcalitlod.co.il/auctions/%d7%94%d7%96%d7%9e%d7%a0%d7%94-%d7%9c%d7%94%d7%a9%d7%aa%d7%aa%d7%a3-%d7%91%d7%94%d7%9c%d7%99%d7%9a-%d7%9e%d7%99%d7%95%d7%9f-%d7%9e%d7%95%d7%a7%d7%93%d7%9d-pre-qualification-%d7%91%d7%9e%d7%a1/" target="_blank" rel="noopener noreferrer" className="l2-mobile-rfp" style={{
              display: "none",
              textDecoration: "none",
              alignItems: "center",
              background: "linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%) padding-box,linear-gradient(135deg,#E8C97A 0%,#9D7331 40%,#C6A15B 70%,#E8C97A 100%) border-box",
              color: "#fff",
              fontSize: "11px",
              fontWeight: "700",
              padding: "7px 11px",
              borderRadius: "999px",
              border: "4px solid transparent",
              whiteSpace: "nowrap",
              cursor: "pointer",
              fontFamily: "inherit",
            }}>{t.rfpCta}</a>
            <button className="l2-hamburger" onClick={toggleMobileMenu} aria-label={t.ariaMenu} style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              flex: "none",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              width: "44px",
              height: "44px",
              zIndex: "10000",
            }}>
              <span style={{
                display: "block",
                width: "26px",
                height: "2.5px",
                background: "#062055",
                transition: "transform .25s",
                transform: hamburgerLine1Transform,
              }}></span>
              <span style={{
                display: "block",
                width: "26px",
                height: "2.5px",
                background: "#062055",
                transition: "opacity .2s",
                opacity: hamburgerLine2Opacity,
              }}></span>
              <span style={{
                display: "block",
                width: "26px",
                height: "2.5px",
                background: "#062055",
                transition: "transform .25s",
                transform: hamburgerLine3Transform,
              }}></span>
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
