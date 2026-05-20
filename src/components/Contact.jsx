import './Contact.css'

const socials = [
  {
    label: 'GitHub',
    handle: '@Zuhaib32',
    href: 'https://github.com/Zuhaib32',
  },
  {
    label: 'Email',
    handle: 'zuhaibabdi20@gmail.com',
    href: 'mailto:zuhaibabdi20@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-bg-text" aria-hidden>
        CONTACT
      </div>

      <div className="container">

        <p className="section-label fade-up">
          Contact
        </p>

        <h2 className="section-title fade-up delay-1">
          Find Me <em>Online</em>
        </h2>

        <p className="contact-intro fade-up delay-2">
          Feel free to reach out through GitHub or email.
        </p>

        <div className="contact-layout">

          <div className="contact-sidebar fade-up delay-3">
            <ul className="socials-list">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-label">
                      {s.label}
                    </span>

                    <span className="social-handle">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="availability">
              <div className="avail-dot" />

              <div>
                <p className="avail-title">
                  Open to Opportunities
                </p>

                <p className="avail-sub">
                  Computer Science Student
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
