import './Education.css'

const education = [
  {
    school: 'Metropolitan State University',
    degree: 'Bachelor of Science in Computer Science',
    date: 'Expected Graduation: Fall 2026',
    desc: 'Focused on software engineering, databases, programming languages, web development, and cybersecurity concepts through hands-on coursework and technical projects.',
  },
  {
    school: 'Anoka-Ramsey Community College',
    degree: 'Computer Science Transfer Pathway',
    date: 'Transferred Post Spring 2024',
    desc: 'Completed foundational coursework in computer science and mathematics before transferring to Metropolitan State University.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">

        <p className="section-label fade-up">
          Education
        </p>

        <h2 className="section-title fade-up delay-1">
          Academic <em>Background</em>
        </h2>

        <div className="education-list">
          {education.map((e, i) => (
            <div
              key={e.school}
              className={`education-card fade-up delay-${i + 2}`}
            >
              <h3 className="education-school">
                {e.school}
              </h3>

              <p className="education-degree">
                {e.degree}
              </p>

              <span className="education-date">
                {e.date}
              </span>

              <p className="education-desc">
                {e.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
