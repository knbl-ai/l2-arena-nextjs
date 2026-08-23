'use client';

import { useEffect, useRef } from 'react';
import type { SectionProps } from '@/lib/props';
import { useMenu } from '@/components/MenuProvider';
import { useFocusTrap } from '@/lib/useFocusTrap';

export default function MobileMenu({ t, v }: SectionProps) {
  const { mobileMenuOpen, toggleMobileMenu } = useMenu();
  const panelRef = useRef<HTMLDivElement>(null);

  useFocusTrap(panelRef, mobileMenuOpen, toggleMobileMenu);

  /*
   * While the overlay is open the page behind it must be neither scrollable nor
   * reachable by a screen reader's virtual cursor. `inert` is set imperatively
   * because <main> is rendered by a server component; the overlay itself lives
   * outside <main> so it stays interactive.
   */
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const main = document.getElementById('main');
    const prevOverflow = document.body.style.overflow;
    main?.setAttribute('inert', '');
    document.body.style.overflow = 'hidden';
    return () => {
      main?.removeAttribute('inert');
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {mobileMenuOpen && (
        <div
          ref={panelRef}
          id="l2-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.ariaMenu}
          style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          width: "100vw",
          height: "100dvh",
          background: "#FFFFFF",
          zIndex: "2147483647",
          isolation: "isolate",
          display: "flex",
          flexDirection: "column",
          padding: "96px 32px 48px",
          boxSizing: "border-box",
          direction: v.dir,
          textAlign: v.textAlign,
          overflowY: "auto",
          animation: "l2MenuIn .25s ease-out",
        }}>
          <button onClick={toggleMobileMenu} aria-label={t.ariaClose} style={{
            position: "absolute",
            top: "24px",
            left: "28px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "52px",
            height: "52px",
          }}>
            <span style={{
              position: "relative",
              width: "28px",
              height: "28px",
            }}>
              <span style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "28px",
                height: "3px",
                background: "#062055",
                transform: "translate(-50%,-50%) rotate(45deg)",
              }}></span>
              <span style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "28px",
                height: "3px",
                background: "#062055",
                transform: "translate(-50%,-50%) rotate(-45deg)",
              }}></span>
            </span>
          </button>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            marginTop: "12px",
          }}>
            <a href="#about" onClick={toggleMobileMenu} style={{
              color: "#062055",
              fontSize: "28px",
              fontWeight: "700",
              textDecoration: "none",
              padding: "20px 4px",
              borderBottom: "1px solid rgba(157,115,49,0.16)",
            }}>{t.navAbout}</a>
            <a href="#opportunity" onClick={toggleMobileMenu} style={{
              color: "#062055",
              fontSize: "28px",
              fontWeight: "700",
              textDecoration: "none",
              padding: "20px 4px",
              borderBottom: "1px solid rgba(157,115,49,0.16)",
            }}>{t.navOpportunity}</a>
            <a href="#timeline" onClick={toggleMobileMenu} style={{
              color: "#062055",
              fontSize: "28px",
              fontWeight: "700",
              textDecoration: "none",
              padding: "20px 4px",
              borderBottom: "1px solid rgba(157,115,49,0.16)",
            }}>{t.navTimeline}</a>
            <a href="#contact-form" onClick={toggleMobileMenu} style={{
              color: "#062055",
              fontSize: "28px",
              fontWeight: "700",
              textDecoration: "none",
              padding: "20px 4px",
              borderBottom: "1px solid rgba(157,115,49,0.16)",
            }}>{t.navContact}</a>
          </div>
          <a href="https://calcalitlod.co.il/auctions/%d7%94%d7%96%d7%9e%d7%a0%d7%94-%d7%9c%d7%94%d7%a9%d7%aa%d7%aa%d7%a3-%d7%91%d7%94%d7%9c%d7%99%d7%9a-%d7%9e%d7%99%d7%95%d7%9f-%d7%9e%d7%95%d7%a7%d7%93%d7%9d-pre-qualification-%d7%91%d7%9e%d7%a1/" target="_blank" rel="noopener noreferrer" className="l2-btn-primary" style={{
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            boxSizing: "border-box",
            marginTop: "auto",
            background: "linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%)",
            color: "#fff",
            fontSize: "19px",
            fontWeight: "700",
            padding: "20px 24px",
            borderRadius: "999px",
            border: "1.5px solid #C6A15B",
            boxShadow: "0 12px 32px rgba(6,32,85,0.2)",
            fontFamily: "inherit",
            cursor: "pointer",
            width: "100%",
          }}>{t.rfpCta} {t.arrow}<span className="l2-visually-hidden">{t.opensInNewWindow}</span></a>
        </div>
      )}
    </>
  );
}
