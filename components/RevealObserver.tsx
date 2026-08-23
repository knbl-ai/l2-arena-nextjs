'use client';

import { useEffect } from 'react';

/**
 * Adds `.l2-reveal-in` the first time a `.l2-reveal` / `.l2-reveal-soft` element
 * scrolls into view. The original ran this twice (immediately and again after
 * 300ms) because template-gated content mounted late; here a mount effect plus a
 * MutationObserver covers content revealed by the logo toggle and mobile menu.
 */
export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('l2-reveal-in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    const observeAll = () =>
      document
        .querySelectorAll('.l2-reveal:not(.l2-reveal-in), .l2-reveal-soft:not(.l2-reveal-in)')
        .forEach((el) => observer.observe(el));

    observeAll();
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
