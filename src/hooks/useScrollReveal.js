import { useEffect } from 'react';

/**
 * Adds the `visible` class to every `.fade-in` element once it scrolls into
 * view, driving the CSS reveal animation in styles.css. A MutationObserver
 * picks up `.fade-in` nodes mounted later (e.g. project cards that remount
 * when a filter changes) so they are revealed too.
 * Honors `prefers-reduced-motion` by revealing everything immediately.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const reduceMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || typeof IntersectionObserver !== 'function') {
      document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      // Fire as soon as any part of the element approaches the viewport
      // (root grown 12% past the bottom edge) so quick scrolls never land on
      // a not-yet-revealed gap.
      { threshold: 0, rootMargin: '0px 0px 12% 0px' }
    );

    const observe = (el) => {
      if (!el.classList.contains('visible')) io.observe(el);
    };

    document.querySelectorAll('.fade-in').forEach(observe);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.matches('.fade-in')) observe(node);
          node.querySelectorAll('.fade-in').forEach(observe);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
