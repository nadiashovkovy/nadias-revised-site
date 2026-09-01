import React from 'react';

const RESUME_URL =
  'https://docs.google.com/document/d/186M1_Q00dXBVX05e31C9_-zDlmeups3Pqb--8ydOx4Y/edit?usp=sharing';

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
            Computer Science student at ASU’s Barrett Honors College and an incoming
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
              Résumé
            </a>
          </div>
          <p className="hero-meta reveal-up" style={{ '--i': 4 }}>
            Tempe, AZ · Python · Java · JavaScript · React · Swift
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
