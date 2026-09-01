import { useEffect } from 'react';

/**
 * Adds the `visible` class to every `.fade-in` element while it is in view,
 * driving the CSS reveal animation in styles.css. Re-scans on each render so
 * elements mounted later (e.g. filtered project cards) are still observed.
 * Honors `prefers-reduced-motion` by revealing everything immediately.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');

    const reduceMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || typeof IntersectionObserver !== 'function') {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      // Fire as soon as any part of the element approaches the viewport
      // (root grown 12% past the bottom edge) so quick scrolls never land on
      // a not-yet-revealed gap.
      { threshold: 0, rootMargin: '0px 0px 12% 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}
