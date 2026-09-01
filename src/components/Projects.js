import React, { useMemo, useState } from 'react';
import projects, { FILTERS } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const shown = useMemo(() => {
    const live = projects.filter((p) => p.variant !== 'wip');
    if (filter === 'All') return live;
    return live.filter((p) => p.tags.includes(filter));
  }, [filter]);

  const featured = shown.filter((p) => p.variant === 'featured');
  const standard = shown.filter((p) => p.variant !== 'featured');
  const wips = projects.filter((p) => p.variant === 'wip');

  return (
    <section id="projects" className="projects">
      <div className="section-head fade-in">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-lead">
          Hackathon wins, research, and shipped apps — the through-line is building
          things people can actually use.
        </p>
      </div>

      <div className="filter-row fade-in" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f, i) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={`filter-chip ${filter === f ? 'is-active' : ''}`}
            style={{ '--i': i }}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="projects-empty fade-in">Nothing tagged “{filter}” yet.</p>
      ) : null}

      {featured.length > 0 && (
        <div className="project-featured-list">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      )}

      {standard.length > 0 && (
        <div className="project-grid">
          {standard.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      )}

      <div className="wip-block fade-in">
        <h3 className="wip-heading">Works in progress</h3>
        <div className="project-grid">
          {wips.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
