'use client';

import type { SectionProps } from '@/lib/props';
import StatStrip from './StatStrip';
import Image from 'next/image';

export default function Hero({ t, v }: SectionProps) {
  /** The original scrolled without pushing a hash onto the URL. */
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
        <div data-screen-label="Hero" className="l2-sec" style={{
          position: "relative",
          padding: "80px 80px 0",
          marginTop: "80px",
          boxSizing: "border-box",
        }}>
          <div style={{
            position: "absolute",
            top: "-120px",
            left: v.heroDecorLeft,
            right: v.heroDecorRight,
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(6,32,85,0.06),transparent 70%)",
            pointerEvents: "none",
          }}></div>
          <div className="l2-grid-hero" style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "72px",
            alignItems: "center",
            position: "relative",
            zIndex: "2",
          }}>



            {/* image with metallic gold ring */}
            <div className="l2-hide-mobile" style={{
              position: "absolute",
              top: "-53px",
              left: v.heroRingLeft,
              right: v.heroRingRight,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(300px, 44%, 680px)",
              aspectRatio: "1",
              zIndex: "1",
            }}>
              <Image priority width={822} height={770} src="/img/hero-render.webp" alt="" style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }} />
            </div>
          <div className="l2-hero-text" style={{
            textAlign: v.textAlign,
            maxWidth: "640px",
            marginTop: "-40px",
          }}>

              <div className="l2-reveal-soft" style={{
                color: "#9D7331",
                fontSize: "30px",
                fontWeight: "700",
                letterSpacing: "0.04em",
                marginBottom: "18px",
              }}>{t.heroEyebrow}</div><h1 className="l2-reveal l2-hero-h1" style={{
                margin: "0",
                fontSize: "88px",
                fontWeight: "700",
                letterSpacing: "-0.01em",
                lineHeight: "1.1",
                background: "linear-gradient(135deg,#0A3A8C 0%,#062055 45%,#1450A8 75%,#062055 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>{t.heroTitle1}<br />{t.heroTitle2}</h1>
              <p className="l2-reveal-soft" style={{
                margin: "32px 0 0",
                maxWidth: "60ch",
                color: "#3C4351",
                fontSize: v.fs27,
                fontWeight: "400",
                lineHeight: "1.5",
              }}>{t.heroLead}</p>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginTop: "44px",
              }}>
                <button className="l2-btn-primary" onClick={scrollToAbout} style={{
                  background: "linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%)",
                  color: "#fff",
                  fontSize: v.fs24,
                  fontWeight: "700",
                  padding: "22px 48px",
                  borderRadius: "999px",
                  border: "1.5px solid #C6A15B",
                  boxShadow: "0 10px 24px rgba(6,32,85,0.25)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}>{t.heroCta} {t.arrow}</button>

              </div>
            </div><Image priority width={822} height={770} src="/img/hero-render.webp" alt="" className="l2-hero-mobile-img" style={{
              position: "absolute",
              width: "144%",
              maxWidth: "1840px",
              aspectRatio: "1840/737",
              objectFit: "contain",
              zIndex: "4",
              pointerEvents: "none",
              left: v.heroStatueLeft,
              right: v.heroStatueRight,
              top: "-11%",
              display: "none",
            }} /></div>

          {/* stat card row */}
      <StatStrip t={t} v={v} />
        </div>
    </>
  );
}
