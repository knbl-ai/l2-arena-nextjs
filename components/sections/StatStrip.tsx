'use client';

import { useCallback, useRef, useState } from 'react';
import type { SectionProps } from '@/lib/props';

const TARGETS = { seats: 20000, rights: 195000, land: 35, transit: 5 };
const DURATION = 1400;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counters animate once, the first time the strip is 40% visible. Isolated from
 * the rest of the page so the ~84 animation frames re-render five numbers rather
 * than the whole document, which is what the original did.
 */
export default function StatStrip({ t, v }: SectionProps) {
  const [counts, setCounts] = useState({ seats: 0, rights: 0, land: 0, transit: 0 });
  const started = useRef(false);

  const statStripRef = useCallback((el: HTMLDivElement | null) => {
    if (!el || started.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || started.current) return;
      started.current = true;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / DURATION, 1);
        const eased = easeOutCubic(progress);
        setCounts({
          seats: Math.round(TARGETS.seats * eased),
          rights: Math.round(TARGETS.rights * eased),
          land: Math.round(TARGETS.land * eased),
          transit: Math.round(TARGETS.transit * eased),
        });
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(el);
  }, []);

  const formatNum = (n: number) => n.toLocaleString('en-US');
  const seatsDisplay = v.isHe ? formatNum(counts.seats) : `Up to ${formatNum(counts.seats)}`;
  const rightsDisplay = `${formatNum(counts.rights)} ${t.unitSqm}`;
  const landDisplay = `${formatNum(counts.land)} ${t.unitDunam}`;
  const transitDisplay = `${counts.transit} ${t.unitMin}`;

  return (
    <>
      <div className="l2-stat-margin" style={{
        margin: "96px -80px 0",
        position: "relative",
        zIndex: "2",
      }}>
        <div style={{
          height: "2px",
          background: "linear-gradient(90deg,transparent,#1450A8 20%,#4F8FE0 50%,#1450A8 80%,transparent)",
        }}></div>
        <div className="l2-grid-stats5" style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          background: "#FFFFFF",
          borderTop: "none",
          borderBottom: "2px solid rgba(157,115,49,0.12)",
          boxShadow: "0 12px 40px rgba(6,32,85,0.07)",
        }} ref={statStripRef}>
          <div className="l2-stats-top" style={{
            display: "contents",
          }}>
          <div style={{
            padding: "36px 24px",
            textAlign: "center",
            borderLeft: "1px solid rgba(157,115,49,0.25)",
          }}>

            <div style={{
              color: "#062055",
              fontSize: "38.4px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
            }}>{seatsDisplay}</div><div style={{
              color: "#5B6472",
              fontSize: v.fs18,
              marginTop: "8px",
            }}>{t.statSeats}</div>
          </div>
          <div style={{
            padding: "36px 24px",
            textAlign: "center",
            borderLeft: "1px solid rgba(157,115,49,0.25)",
          }}>
            <div style={{
              color: "#062055",
              fontSize: "38.4px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
            }}>{landDisplay}</div>
            <div style={{
              color: "#5B6472",
              fontSize: v.fs18,
              marginTop: "8px",
            }}>{t.statLand}</div>
          </div>
          <div style={{
            padding: "36px 24px",
            textAlign: "center",
            borderLeft: "1px solid rgba(157,115,49,0.25)",
          }}>
            <div style={{
              color: "#062055",
              fontSize: "38.4px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
            }}>{rightsDisplay}</div>
            <div style={{
              color: "#5B6472",
              fontSize: v.fs18,
              marginTop: "8px",
            }}>{t.statRights}</div>
          </div>
          </div>
          <div className="l2-stats-bottom" style={{
            display: "contents",
          }}>
          <div style={{
            padding: "36px 24px",
            textAlign: "center",
            borderLeft: "1px solid rgba(157,115,49,0.25)",
          }}>
            <div style={{
              color: "#062055",
              fontSize: "38.4px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
            }}>{transitDisplay}</div>
            <div style={{
              color: "#5B6472",
              fontSize: v.fs18,
              marginTop: "8px",
            }}>{t.statAirport}</div>
          </div>
          <div style={{
            padding: "36px 24px",
            textAlign: "center",
          }}>
            <div style={{
              color: "#062055",
              fontSize: "38.4px",
              fontWeight: "700",
              letterSpacing: "-0.01em",
            }}>{t.statDeadlineDate}</div>
            <div style={{
              color: "#5B6472",
              fontSize: v.fs18,
              marginTop: "8px",
            }}>{t.statDeadline}</div>
          </div>
          </div>
        </div>
        <div style={{
          height: "2px",
          background: "linear-gradient(90deg,transparent,#1450A8 20%,#4F8FE0 50%,#1450A8 80%,transparent)",
        }}></div>
      </div>
    </>
  );
}
