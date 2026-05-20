import './About.css'

const stats = [
  { value: '3+', label: 'Programming Languages' },
  { value: '10+', label: 'Completed Projects' },
  { value: '2026', label: 'Expected Graduation' },
  { value: '∞', label: 'Learning Mindset' },
]
export default function About(){
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: initials */}
          <div className="about-visual fade-up">
            <div className="about-img-wrap">
              <div className="about-img-bg" />
              <div className="about-img-frame">
                <div className="about-initials">ZA</div>
              </div>
              <div className="about-img-deco" />
            </div>
          </div>

          {/* Right: text */}
          <div className="about-text">
            <p className="section-label fade-up">
              About Me
            </p>

            <h2 className="section-title fade-up delay-1">
              Building practical<br />
              <em> software solutions</em>
            </h2>

            <p className="about-para fade-up delay-2">
              Hey — I’m Zuhaib, a Computer Science student at
              Metropolitan State University with interests in software
              engineering, databases, web development, and cybersecurity.
            </p>

            <p className="about-para fade-up delay-3">
              I enjoy building hands-on projects that strengthen my
              technical skills and problem-solving abilities. My experience
              includes Java programming, SQL database systems, React web
              applications, and object-oriented software design.
            </p>

            <p className="about-para fade-up delay-4">
              Outside of coding, I enjoy fitness, technology, gaming,
              and learning modern tools used in the software industry.
            </p>

            {/* Stats */}
            <div className="about-stats fade-up delay-5">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
