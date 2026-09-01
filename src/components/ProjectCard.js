import React, { useState } from 'react';

/* One drawn icon set for the link row — matched by a keyword in the label so a
   repo, a live site, a video and a PDF no longer look identical. */
function LinkIcon({ label }) {
  const l = label.toLowerCase();
  const common = {
    width: 13,
    height: 13,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'link-icon',
    'aria-hidden': true,
  };

  if (l.includes('code')) {
    return (
      <svg {...common}>
        <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    );
  }
  if (l.includes('video')) {
    return (
      <svg {...common}>
        <path d="M10 8.5v7l6-3.5-6-3.5Z" />
        <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      </svg>
    );
  }
  if (l.includes('poster') || l.includes('pitch')) {
    return (
      <svg {...common}>
        <path d="M6 2.5h8l4 4V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" />
        <path d="M13.5 2.5V7h4.5M8.5 13h7M8.5 17h7" />
      </svg>
    );
  }
  // default: external link (live site / overview / demo)
  return (
    <svg {...common}>
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function LinkRow({ links }) {
  return (
    <div className="project-links">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          <LinkIcon label={link.label} />
          {link.label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}

/* Deterministic accent so image-less covers still read as a set, not blanks. */
const COVER_ACCENTS = ['peach', 'mint', 'blue'];

/* The cover is a screenshot under a peach scrim. Image-less projects fall back
   to a peach panel carrying the project name (the only place it appears for them). */
function Cover({ project, accentIndex }) {
  const { image, title } = project;
  const accent = COVER_ACCENTS[accentIndex % COVER_ACCENTS.length];
  const kind = image ? 'project-cover--photo' : 'project-cover--type';
  return (
    <div className={`project-cover ${kind} accent-${accent}`} aria-hidden="true">
      {image ? (
        <img src={image} alt="" loading="lazy" />
      ) : (
        <span className="project-cover-word">{title}</span>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index = 0 }) {
  const { title, tags, stack, role, outcome, blurb, details, links, variant } = project;
  const isFeatured = variant === 'featured';
  const isWip = variant === 'wip';
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(details && details.trim());

  if (isWip) {
    return (
      <article className="project-card project-card--wip fade-in" style={{ '--i': index }}>
        <h4 className="project-wip-title">{title}</h4>
        <p className="project-blurb">{blurb}</p>
        <div className="project-wip-foot">
          <span className="project-wip-status">In progress</span>
          {links && links.length ? (
            <a
              href={links[0].href}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <LinkIcon label={links[0].label} />
              {links[0].label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <article
      className={`project-card ${isFeatured ? 'project-card--featured' : 'project-card--grid'} fade-in`}
      style={{ '--i': index }}
    >
      <Cover project={project} accentIndex={index} />

      <div className="project-body">
        <div className="project-heading">
          <h3 className="project-title">{title}</h3>
          {role ? <p className="project-role">{role}</p> : null}
        </div>

        {outcome ? <p className="project-outcome">{outcome}</p> : null}

        <p className={`project-blurb${open ? ' is-open' : ''}`}>{blurb}</p>

        {hasDetails && open ? (
          <p className="project-details">{details}</p>
        ) : null}

        {hasDetails ? (
          <button
            type="button"
            className="project-expand"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Show less' : 'Read more'}
          </button>
        ) : null}

        {tags && tags.length ? (
          <ul className="project-tags" aria-label="Tags">
            {tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="project-foot">
          {stack && stack.length ? (
            <p className="project-stack">{stack.join(' · ')}</p>
          ) : null}
          {links && links.length ? <LinkRow links={links} /> : null}
        </div>
      </div>
    </article>
  );
}
