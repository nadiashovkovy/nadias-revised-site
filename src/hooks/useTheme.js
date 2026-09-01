import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const prefersDark = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const getStored = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

/**
 * Light/dark theme controller. Honors an explicit user choice saved in
 * localStorage; otherwise follows the OS/browser `prefers-color-scheme`
 * setting and keeps following it live until the user picks a side.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = getStored();
    if (stored === 'light' || stored === 'dark') return stored;
    return prefersDark() ? 'dark' : 'light';
  });

  // reflect the current theme onto <html> for CSS to key off
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // follow system changes while the user hasn't made an explicit choice
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      if (getStored()) return;
      setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore write failures (private mode, etc.) */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
