import { useEffect, useState } from 'react';

const SECTION_IDS = ['home', 'projects', 'experience', 'about', 'contact'];

/**
 * Drives the floating nav: which section is in view (`activeId`), whether the
 * page has scrolled past the top (`scrolled`, for the condensed pill), and a
 * 0–1 `progress` value for the top reading-progress bar.
 */
export default function useNavState() {
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0);
      setScrolled(doc.scrollTop > 24);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver !== 'function') return;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // a thin band across the vertical middle of the viewport
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { activeId, scrolled, progress };
}
