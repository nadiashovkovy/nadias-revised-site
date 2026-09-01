import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields');
      return;
    }

    setFormStatus('sending');

    // Submit to the Google Sheet via Apps Script web app.
    // Uses no-cors + text/plain to avoid a CORS preflight (Apps Script doesn't
    // handle preflight requests), so the response body can't be read. A fetch
    // that resolves (rather than throws) means the request reached Google, so
    // we treat that as success; only a network-level failure is an error.
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
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      })
      .catch((error) => {
        console.error('Sheet submission error:', error);
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner fade-in">
        <div className="contact-copy">
          <p className="section-kicker">Get in touch</p>
          <h2 className="section-title">Let’s build something</h2>
          <p>
            Reach out about internships, project collaborations, or anything you
            think I’d find interesting. I read every message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="cf-name">Name*</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="cf-email">Email*</label>
          <input
            id="cf-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="cf-message">Message*</label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="What’s on your mind?"
            rows="6"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {formStatus === 'success' && (
            <p className="form-message success">Message sent successfully!</p>
          )}
          {formStatus === 'error' && (
            <p className="form-message error">Failed to send. Please try again.</p>
          )}
          {formStatus &&
            formStatus !== 'sending' &&
            formStatus !== 'success' &&
            formStatus !== 'error' && (
              <p className="form-message error">{formStatus}</p>
            )}
        </form>
      </div>
    </section>
  );
}
