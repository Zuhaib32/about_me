import './Education.css'

const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'University of California, Berkeley',
    period: '2015 – 2019',
    details: 'Graduated with Honors · GPA 3.87 · Dean\'s List',
    highlights: ['Distributed Systems', 'Machine Learning', 'Compilers', 'HCI'],
  },
  {
    degree: 'Full-Stack Web Development',
    school: 'App Academy',
    period: '2019',
    details: 'Intensive 16-week bootcamp · Top 5% cohort',
    highlights: ['Rails', 'React/Redux', 'SQL', 'Algorithms'],
  },
]

const certs = [
  { name: 'AWS Solutions Architect – Associate', year: '2023', issuer: 'Amazon Web Services' },
  { name: 'Professional Scrum Master I (PSM I)', year: '2022', issuer: 'Scrum.org' },
  { name: 'Google Cloud Professional Developer', year: '2021', issuer: 'Google Cloud' },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label fade-up">Background</p>
        <h2 className="section-title fade-up delay-1">
          Education &amp; <em>Certifications</em>
        </h2>

        <div className="edu-layout">
          {/* Education timeline */}
          <div className="edu-timeline">
            {education.map((e, i) => (
              <div key={e.degree} className={`edu-card fade-up delay-${i + 2}`}>
                <div className="edu-period">{e.period}</div>
                <div className="edu-content">
                  <div className="edu-dot" />
                  <h3 className="edu-degree">{e.degree}</h3>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-details">{e.details}</p>
                  <div className="edu-highlights">
                    {e.highlights.map((h) => (
                      <span key={h} className="edu-highlight">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="certs-panel fade-up delay-4">
            <h3 className="certs-title">Certifications</h3>
            <div className="certs-list">
              {certs.map((c) => (
                <div key={c.name} className="cert-item">
                  <div className="cert-check">✓</div>
                  <div className="cert-info">
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-meta">{c.issuer} · {c.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
