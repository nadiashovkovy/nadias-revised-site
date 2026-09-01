import React from 'react';

const RESUME_URL =
  'https://drive.google.com/file/d/1asU6QslqWdDk1wAYH65C-MN26xJnkp4k/view?usp=sharing';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow reveal-up" style={{ '--i': 0 }}>
            Nadia Shovkovy
          </p>
          <h1 className="hero-title reveal-up" style={{ '--i': 1 }}>
            I build full-stack, <em>user-centric</em> products.
          </h1>
          <p className="hero-lead reveal-up" style={{ '--i': 2 }}>
            Computer Science student at ASU’s Barrett Honors College and an previous
            Software Engineer Intern at ServiceNow. I like turning messy real-world
            problems into interfaces people actually want to use — from AI
            storytelling to platforms for social good.
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
