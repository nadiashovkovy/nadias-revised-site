import React from 'react';

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nadia-shovkovy/',
    icon: 'images/linkedin.png',
  },
  { label: 'GitHub', href: 'https://github.com/nadiashovkovy', icon: 'images/gh.png' },
  { label: 'Medium', href: 'https://medium.com/@nadiashovkovy', icon: 'images/medium.png' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-links">
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            <img src={s.icon} alt="" className="foot-link-icon" aria-hidden="true" />
            {s.label}
          </a>
        ))}
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Nadia Shovkovy</p>
    </footer>
  );
}
