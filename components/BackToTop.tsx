'use client';

import { useEffect, useState } from 'react';
import type { SectionProps } from '@/lib/props';

/** Always mounted; CSS opacity/visibility reveal it past 480px of scroll. */
export default function BackToTop({ t }: Pick<SectionProps, 't'>) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <button onClick={scrollToTop} aria-label={t.ariaBackToTop} className="l2-fab" style={{
        position: "fixed",
        insetInlineEnd: "40px",
        bottom: "40px",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%)",
        border: "1px solid rgba(198,161,91,0.4)",
        boxShadow: "0 12px 32px rgba(6,32,85,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: "50",
        opacity: showBackToTop ? 1 : 0,
        visibility: showBackToTop ? 'visible' : 'hidden',
        transition: "opacity 300ms cubic-bezier(0.22,1,0.36,1),transform 300ms cubic-bezier(0.22,1,0.36,1)",
      }}>
        <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5" /><path d="M5 12l7-7 7 7" /></svg>
      </button>
    </>
  );
}
