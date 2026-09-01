import React from 'react';
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

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <nav>
          <ul>
            {LINKS.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? 'is-active' : ''}
                  aria-current={activeId === id ? 'true' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
