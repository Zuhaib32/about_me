import { useState } from 'react'
import './Contact.css'

const socials = [
  { label: 'GitHub', handle: '@alexmorgan', href: '#' },
  { label: 'LinkedIn', handle: 'linkedin.com/in/alexmorgan', href: '#' },
  { label: 'Twitter/X', handle: '@alexmorg_dev', href: '#' },
  { label: 'Email', handle: 'alex@example.com', href: 'mailto:alex@example.com' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | done

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('done'), 1800)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg-text" aria-hidden>HELLO</div>

      <div className="container">
        <p className="section-label fade-up">Let's connect</p>
        <h2 className="section-title fade-up delay-1">
          Got an idea? <em>Let's talk.</em>
        </h2>

        <p className="contact-intro fade-up delay-2">
          Whether you have a project in mind, want to collaborate, or just want to say hi —
          my inbox is always open.
        </p>

        <div className="contact-layout">
          {/* Form */}
          <form className="contact-form fade-up delay-3" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Jane Smith" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="jane@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Project inquiry" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Tell me about your project..." required />
            </div>

            <button type="submit" className="form-submit" disabled={status !== 'idle'}>
              {status === 'idle'   && 'Send message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'done'   && '✓ Message sent!'}
            </button>
          </form>

          {/* Socials */}
          <div className="contact-sidebar fade-up delay-4">
            <h3 className="sidebar-title">Find me online</h3>
            <ul className="socials-list">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="social-link" target="_blank" rel="noreferrer">
                    <span className="social-label">{s.label}</span>
                    <span className="social-handle">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="availability">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Available for hire</p>
                <p className="avail-sub">Open to full-time and contract roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
