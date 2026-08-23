'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import type { Dictionary, Lang } from '@/lib/i18n';

/**
 * User-preference panel.
 *
 * This is deliberately NOT an accessibility "overlay". It injects nothing into
 * the accessibility tree, rewrites no ARIA, and repairs nothing at runtime —
 * every control simply sets one `data-a11y-*` attribute on <html>, and one rule
 * in globals.css responds to it. The compliance work is in the markup itself;
 * this exists because visitors reasonably expect the control, and because the
 * preferences it offers (bigger text, no motion, underlined links) are genuinely
 * useful to people whose needs the OS settings do not cover.
 *
 * See reference: overlays that claim to *produce* conformance do not, and sites
 * carrying them are sued at a higher rate than sites without them.
 */

type Prefs = {
  zoom: 100 | 110 | 125 | 150;
  contrast: 'off' | 'invert';
  grayscale: boolean;
  links: boolean;
  motion: boolean;          // true = animations stopped
  readableFont: boolean;
  bigCursor: boolean;
};

const DEFAULTS: Prefs = {
  zoom: 100,
  contrast: 'off',
  grayscale: false,
  links: false,
  motion: false,
  readableFont: false,
  bigCursor: false,
};

export const A11Y_STORAGE_KEY = 'l2-a11y';
const ZOOMS: Prefs['zoom'][] = [100, 110, 125, 150];

/*
 * Preferences live in a tiny external store rather than component state.
 *
 * They are read from localStorage, which does not exist during server render,
 * so the component subscribes with useSyncExternalStore: React renders the
 * defaults for hydration and then re-renders with the stored values. Reading
 * storage in an effect instead would either flash or trip the cascading-render
 * rule; a lazy useState initialiser would break hydration outright.
 */
let store: Prefs | null = null;
const listeners = new Set<() => void>();

function readStore(): Prefs {
  if (store) return store;
  try {
    const raw = window.localStorage.getItem(A11Y_STORAGE_KEY);
    store = raw ? { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Prefs>) } : DEFAULTS;
  } catch {
    store = DEFAULTS;   // private mode, blocked storage
  }
  return store;
}

function writeStore(next: Prefs) {
  store = next;
  applyPrefs(next);
  try {
    if (next === DEFAULTS) window.localStorage.removeItem(A11Y_STORAGE_KEY);
    else window.localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(next));
  } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => { listeners.add(l); return () => { listeners.delete(l); }; };

/** Single source of truth for the attribute mapping — also used by the no-flash
 *  script in the layout, which is why it is written as plain data. */
export function applyPrefs(p: Prefs) {
  const el = document.documentElement;
  const set = (name: string, value: string | null) => {
    if (value === null) el.removeAttribute(`data-a11y-${name}`);
    else el.setAttribute(`data-a11y-${name}`, value);
  };
  set('zoom', p.zoom === 100 ? null : String(p.zoom));
  set('contrast', p.contrast === 'invert' ? 'invert' : null);
  set('grayscale', p.grayscale ? 'on' : null);
  set('links', p.links ? 'on' : null);
  set('motion', p.motion ? 'off' : null);
  set('font', p.readableFont ? 'readable' : null);
  set('cursor', p.bigCursor ? 'big' : null);
}

const NAVY = '#062055';
const GOLD = 'rgba(198,161,91,0.4)';

export default function A11yPanel({ t, lang }: { t: Dictionary; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // The inline script in the layout has already applied these to <html>; this
  // only gives React its own view of the same values.
  const prefs = useSyncExternalStore(subscribe, readStore, () => DEFAULTS);

  const update = useCallback((patch: Partial<Prefs>) => {
    writeStore({ ...readStore(), ...patch });
  }, []);

  const reset = useCallback(() => writeStore(DEFAULTS), []);

  const close = useCallback(() => setOpen(false), []);

  // Escape and focus containment, shared with the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); setOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Clicking outside dismisses, but only via pointerdown so that a click which
  // starts inside the panel and ends outside does not close it mid-drag.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  const toggles: { key: keyof Prefs; label: string; on: boolean }[] = [
    { key: 'contrast', label: t.a11yContrast, on: prefs.contrast === 'invert' },
    { key: 'grayscale', label: t.a11yGrayscale, on: prefs.grayscale },
    { key: 'links', label: t.a11yHighlightLinks, on: prefs.links },
    { key: 'motion', label: t.a11yStopAnimations, on: prefs.motion },
    { key: 'readableFont', label: t.a11yReadableFont, on: prefs.readableFont },
    { key: 'bigCursor', label: t.a11yBigCursor, on: prefs.bigCursor },
  ];

  const zoomIndex = ZOOMS.indexOf(prefs.zoom);

  return (
    <>
      {open && (
        <div
          ref={panelRef}
          id="l2-a11y-panel"
          className="l2-a11y-fx"
          role="dialog"
          aria-modal="false"
          aria-label={t.a11yTitle}
          style={{
            position: 'fixed',
            insetInlineStart: '40px',
            bottom: '108px',
            width: 'min(300px, calc(100vw - 32px))',
            maxHeight: 'min(72vh, 560px)',
            overflowY: 'auto',
            background: '#FFFFFF',
            border: `1px solid ${GOLD}`,
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(6,32,85,0.22)',
            padding: '18px',
            zIndex: 60,
            fontFamily: 'inherit',
            color: NAVY,
            textAlign: 'start',
          }}
        >
          <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '14px' }}>
            {t.a11yTitle}
          </div>

          {/* --- text size --- */}
          <div
            role="group"
            aria-label={t.a11yTextSize}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '8px', marginBottom: '14px',
            }}
          >
            <span style={{ fontSize: '15px', fontWeight: 600 }}>{t.a11yTextSize}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                type="button"
                onClick={() => update({ zoom: ZOOMS[Math.max(0, zoomIndex - 1)] })}
                disabled={zoomIndex <= 0}
                aria-label={`${t.a11yTextSize} −`}
                style={stepBtn(zoomIndex <= 0)}
              >−</button>
              <span aria-live="polite" style={{
                fontSize: '13px', fontWeight: 700, minWidth: '44px', textAlign: 'center',
              }}>{prefs.zoom}%</span>
              <button
                type="button"
                onClick={() => update({ zoom: ZOOMS[Math.min(ZOOMS.length - 1, zoomIndex + 1)] })}
                disabled={zoomIndex >= ZOOMS.length - 1}
                aria-label={`${t.a11yTextSize} +`}
                style={stepBtn(zoomIndex >= ZOOMS.length - 1)}
              >+</button>
            </span>
          </div>

          {/* --- switches --- */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '4px' }}>
            {toggles.map(({ key, label, on }) => (
              <li key={key}>
                <button
                  type="button"
                  role="switch"
                  aria-checked={on}
                  onClick={() => update(
                    key === 'contrast'
                      ? { contrast: on ? 'off' : 'invert' }
                      : ({ [key]: !on } as Partial<Prefs>),
                  )}
                  style={{
                    width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '10px',
                    background: on ? 'rgba(20,80,168,0.08)' : 'transparent',
                    border: '1px solid transparent',
                    borderRadius: '10px',
                    padding: '9px 10px',
                    font: 'inherit',
                    fontSize: '15px',
                    color: NAVY,
                    cursor: 'pointer',
                    textAlign: 'start',
                  }}
                >
                  <span>{label}</span>
                  <span aria-hidden="true" style={{
                    flex: 'none',
                    width: '36px', height: '20px', borderRadius: '999px',
                    background: on ? '#1450A8' : '#C9CDD6',
                    position: 'relative',
                    transition: 'background .2s',
                  }}>
                    <span style={{
                      position: 'absolute', top: '2px',
                      insetInlineStart: on ? '18px' : '2px',
                      width: '16px', height: '16px', borderRadius: '50%',
                      background: '#FFFFFF',
                      transition: 'inset-inline-start .2s',
                    }} />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '10px', marginTop: '14px', paddingTop: '12px',
            borderTop: '1px solid rgba(157,115,49,0.2)',
          }}>
            <button
              type="button"
              onClick={reset}
              style={{
                background: 'transparent', border: `1px solid ${GOLD}`, borderRadius: '999px',
                padding: '8px 14px', font: 'inherit', fontSize: '14px', fontWeight: 600,
                color: NAVY, cursor: 'pointer',
              }}
            >{t.a11yReset}</button>
            <Link
              href={`/${lang}/accessibility`}
              onClick={close}
              style={{ fontSize: '14px', fontWeight: 600, color: '#1450A8' }}
            >{t.a11yStatementLink}</Link>
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        className="l2-a11y-fab l2-a11y-fx"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="l2-a11y-panel"
        aria-label={t.a11yOpenPanel}
        style={{
          position: 'fixed',
          insetInlineStart: '40px',
          bottom: '40px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(180deg,#123B7C 0%,#0B2A5C 55%,#062055 100%)',
          border: `1px solid ${GOLD}`,
          boxShadow: '0 12px 32px rgba(6,32,85,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 60,
        }}
      >
        {/* The internationally recognised accessibility mark. */}
        <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF">
          <circle cx="12" cy="4" r="2" />
          <path d="M20.5 7.4a1.1 1.1 0 0 0-1.3-.8L15 7.5a3 3 0 0 1-.6.1H9.6a3 3 0 0 1-.6-.1L4.8 6.6a1.1 1.1 0 1 0-.45 2.15l4 .85V13l-1.7 6.6a1.15 1.15 0 0 0 2.22.57L10.4 15h3.2l1.53 5.17a1.15 1.15 0 0 0 2.22-.57L15.65 13V9.6l4-.85a1.1 1.1 0 0 0 .85-1.35z" />
        </svg>
      </button>
    </>
  );
}

function stepBtn(disabled: boolean): React.CSSProperties {
  return {
    width: '32px', height: '32px', borderRadius: '50%',
    border: `1px solid ${GOLD}`,
    background: disabled ? 'transparent' : '#FFFFFF',
    color: disabled ? '#9AA0AC' : NAVY,
    fontSize: '18px', fontWeight: 700, lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'inherit',
  };
}
