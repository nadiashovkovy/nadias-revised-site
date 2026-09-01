import React, { useEffect, useState } from 'react';
import useNavState from '../hooks/useNavState';

const LINKS = [
  ['home', 'welcome'],
  ['projects', 'projects'],
  ['experience', 'experience'],
  ['about', 'about'],
  ['contact', 'contact'],
];

export default function Nav() {
  const { activeId, scrolled, progress } = useNavState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <header
        className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
      >
        <nav>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bars" aria-hidden="true" />
          </button>
          <ul id="nav-menu">
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? 'is-active' : ''}
                  aria-current={activeId === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {open ? (
        <div
          className="nav-scrim"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      ) : null}
    </>
  );
}
