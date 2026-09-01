import React from 'react';

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
          <img src="images/Icon.png" alt="" className="link-icon" aria-hidden="true" />
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { title, image, tags, stack, role, blurb, details, variant } = project;
  const isFeatured = variant === 'featured';

  return (
    <article className={`project-card ${isFeatured ? 'is-featured' : ''} fade-in`}>
      <div className="project-media">
        <img src={image} alt={`${title} preview`} loading="lazy" />
      </div>

      <div className="project-body">
        <div className="project-heading">
          <h3 className="project-title">{title}</h3>
          {role ? <p className="project-role">{role}</p> : null}
        </div>

        <ul className="project-tags">
          {tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        <p className="project-blurb">{blurb}</p>
        {details ? <p className="project-details">{details}</p> : null}

        {stack && stack.length ? (
          <p className="project-stack">
            <span>Built with</span> {stack.join(' · ')}
          </p>
        ) : null}

        {project.links && project.links.length ? (
          <LinkRow links={project.links} />
        ) : null}
      </div>
    </article>
  );
}
