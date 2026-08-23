'use client';

import { useEffect, type RefObject } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Modal behaviour for the mobile menu and the accessibility panel.
 *
 * Both are full-screen overlays that the original shipped as plain divs: no
 * dialog role, no focus containment, no Escape, and focus left sitting on the
 * page behind them. This covers WCAG 2.1.2 (No Keyboard Trap — the inverse
 * problem, focus escaping a modal), 2.4.3 (Focus Order) and 2.1.1.
 *
 * Focus is restored to whatever opened the overlay, which is the part users
 * actually notice: without it, closing the menu drops focus back to <body> and
 * the next Tab starts from the top of the document.
 */
export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  active: boolean,
  onClose: () => void,
) {
  useEffect(() => {
    if (!active) return;
    const node = ref.current;
    if (!node) return;

    const opener = document.activeElement as HTMLElement | null;
    const list = () => Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE))
      .filter((el) => el.offsetParent !== null || el === document.activeElement);

    // Focus the first control rather than the container: screen readers then
    // announce the dialog name and the control together.
    (list()[0] ?? node).focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = list();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      opener?.focus?.();
    };
  }, [ref, active, onClose]);
}
