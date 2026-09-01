import React from 'react';

const RESUME_URL =
  'https://drive.google.com/file/d/1asU6QslqWdDk1wAYH65C-MN26xJnkp4k/view?usp=sharing';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow reveal-up" style={{ '--i': 0 }}>
            Hi! I'm Nadia Shovkovy.
          </p>
          <h1 id="hero-title" className="hero-title reveal-up" style={{ '--i': 1 }}>
            I build full-stack, <em>user-centric</em> products.
          </h1>
          <p className="hero-lead reveal-up" style={{ '--i': 2 }}>
            Computer Science student at ASU’s Barrett Honors College and a previous
            Software Engineer Intern at ServiceNow. I like turning messy real-world
            problems into software solutions people actually want to use.
          </p>
          <div className="hero-actions reveal-up" style={{ '--i': 3 }}>
            <a className="btn btn-primary" href="#projects">
              View projects
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              className="btn btn-ghost"
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <svg
                className="btn-external"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
              </svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="hero-meta reveal-up" style={{ '--i': 4 }}>
            <span className="hero-meta-loc">Tempe, AZ</span>
            <span className="hero-meta-stack">
              Python · Java · JavaScript · React · Swift
            </span>
          </p>
        </div>

        <div className="hero-visual reveal-in">
          <img
            src="images/hero.png"
            alt='A retro computer monitor displaying "Hello, World" over and over'
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
