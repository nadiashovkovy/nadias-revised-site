import React from 'react';

const SKILLS = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'C / C++', 'Swift / SwiftUI', 'HTML / CSS'],
  },
  {
    label: 'Tools & Frameworks',
    items: ['React', 'PyTorch', 'AWS', 'Supabase', 'Firebase', 'Figma', 'Claude Code'],
  },
  {
    label: 'Focus areas',
    items: [
      'Full-stack web',
      'iOS development',
      'AI & machine learning',
      'UI / UX',
      'Relational databases',
    ],
  },
];

const ACHIEVEMENTS = [
  'GPA 4.0',
  'Leadership Scholarship Program — 1 of 25 selected',
  'Grand Challenges Scholars Program',
  'Undergraduate Teaching Assistant',
];

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-grid">
        <div className="about-bio fade-in">
          <h2 className="section-title" id="about-title">
            A little about me
          </h2>
          <p>
            I’m a Computer Science student at Arizona State University’s Barrett
            Honors College. I started out mentoring kids in code and running a
            nonprofit for STEM education, and that “make it click for someone
            else” instinct still drives how I build software.
          </p>
          <p>
            My experience spans backend refactors, security research, and
            full-stack product work — and I’m most excited when I get to own
            something end to end.
          </p>

          <div className="edu-card">
            <h3>Arizona State University · Barrett, The Honors College</h3>
            <p className="edu-line">B.S. Computer Science · Aug 2024 – May 2028 · Tempe, AZ</p>
            <ul className="edu-list">
              {ACHIEVEMENTS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-skills fade-in">
          {SKILLS.map((group) => (
            <div key={group.label} className="skill-group">
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item, i) => (
                  <li key={item} className="tag" style={{ '--i': i }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
