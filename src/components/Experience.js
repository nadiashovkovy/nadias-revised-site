import React from 'react';
import experience from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-head fade-in">
        <p className="section-kicker">Where I’ve worked</p>
        <h2 className="section-title">Experience</h2>
      </div>

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
    </section>
  );
}
