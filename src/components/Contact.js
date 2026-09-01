import React, { useState } from 'react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/nadia-shovkovy/';
const GITHUB_URL = 'https://github.com/nadiashovkovy';

const EMPTY_ERRORS = { name: '', email: '', message: '' };

function validate(data) {
  const errors = { ...EMPTY_ERRORS };
  if (!data.name.trim()) errors.name = 'Add your name so I know who I’m replying to.';
  if (!data.email.trim()) {
    errors.email = 'Add an email so I can reach you.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'That email address looks off — check the format.';
  }
  if (!data.message.trim()) errors.message = 'Tell me a little about what you have in mind.';
  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState(EMPTY_ERRORS);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (status === 'sent' || status === 'failed') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = validate(formData);
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setErrors(nextErrors);
      return;
    }
    setErrors(EMPTY_ERRORS);
    setStatus('sending');

    // Submit to the Google Sheet via Apps Script web app.
    // Uses no-cors + text/plain to skip a CORS preflight (Apps Script can't
    // answer one), so the response body can't be read: a resolved fetch only
    // means the request left the browser, not that the row was written. The UI
    // says as much, and the LinkedIn fallback stays visible either way.
    fetch(process.env.REACT_APP_SHEET_WEBAPP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Sheet submission error:', error);
        setStatus('failed');
      });
  };

  const fieldProps = (name) => ({
    name,
    value: formData[name],
    onChange: handleInputChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-inner fade-in">
        <div className="contact-copy">
          <h2 className="section-title" id="contact-title">
            Let’s build something
          </h2>
          <p>
            Internships, collaborations, or anything you think I’d find
            interesting — I read every message.
          </p>

          <p className="contact-alt">
            Or find me on{' '}
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>{' '}
            and{' '}
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
            .
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" noValidate aria-label="Contact form">
          <div className="field">
            <label htmlFor="cf-name">Name</label>
            <input id="cf-name" type="text" placeholder="Your name" {...fieldProps('name')} />
            {errors.name && (
              <p className="field-error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              type="email"
              placeholder="you@example.com"
              {...fieldProps('email')}
            />
            {errors.email && (
              <p className="field-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              placeholder="What’s on your mind?"
              rows="6"
              {...fieldProps('message')}
            />
            {errors.message && (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          <div className="form-status" aria-live="polite">
            {status === 'sent' && (
              <p className="form-message success">
                Thanks — your message is on its way. I’ll be in touch soon.
              </p>
            )}
            {status === 'failed' && (
              <p className="form-message error">
                That didn’t go through. Try again in a moment, or reach me on{' '}
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
