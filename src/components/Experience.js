import React, { useEffect, useRef } from 'react';
import experience from '../data/experience';

export default function Experience() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // marker tracks a line ~42% down the viewport as the section scrolls past
      const anchor = window.innerHeight * 0.42;
      const raw = (anchor - rect.top) / rect.height;
      const progress = Math.min(1, Math.max(0, raw));
      el.style.setProperty('--timeline-progress', progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="section-head fade-in">
        <p className="section-kicker">Where I’ve worked</p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline-wrap" ref={wrapRef}>
        <span className="timeline-runner" aria-hidden="true" />
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.id} className="timeline-item fade-in">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-top">
                  <h3 className="timeline-role">{job.role}</h3>
                  <span className="timeline-dates">{job.dates}</span>
                </div>
                <p className="timeline-org">
                  {job.href ? (
                    <a href={job.href} target="_blank" rel="noreferrer">
                      {job.org}
                    </a>
                  ) : (
                    job.org
                  )}
                  <span className="timeline-loc"> · {job.location}</span>
                  {job.upcoming ? <span className="timeline-badge">Incoming</span> : null}
                </p>
                <ul className="timeline-bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
