import './Skills.css'

const categories = [
  {
    title: 'Programming Languages',
    icon: '⬡',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 70 },
      { name: 'HTML / CSS', level: 78 },
    ],
  },
  {
    title: 'Software & Technical Skills',
    icon: '◈',
    skills: [
      { name: 'Object-Oriented Programming', level: 82 },
      { name: 'Database Design / SQL', level: 80 },
      { name: 'React / Vite', level: 72 },
      { name: 'Git / GitHub', level: 85 },
    ],
  },
  {
    title: 'Professional Skills',
    icon: '◎',
    skills: [
      { name: 'Team Collaboration', level: 90 },
      { name: 'Communication', level: 88 },
      { name: 'Problem Solving', level: 87 },
      { name: 'Adaptability', level: 90 },
    ],
  },
]

const tags = [
  'Java',
  'Python',
  'C',
  'HTML',
  'CSS',
  'React',
  'SQL',
  'GitHub',
  'Vercel',
  'Database Design',
  'Cybersecurity Basics',
  'Object-Oriented Programming',
  'Team Collaboration',
  'Problem Solving',
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">

        <p className="section-label fade-up">
          Technical Skills
        </p>

        <h2 className="section-title fade-up delay-1">
          Skills &amp; <em>Experience</em>
        </h2>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`skill-card fade-up delay-${ci + 2}`}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-cat">{cat.title}</h3>
              </div>

              <div className="skill-bars">
                {cat.skills.map((s, si) => (
                  <div key={s.name} className="skill-bar-item">

                    <div className="skill-bar-meta">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>

                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          '--target': `${s.level}%`,
                          '--delay': `${0.1 * si}s`
                        }}
                      />
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill tags */}
        <div className="skills-tags fade-up delay-5">
          {tags.map((t) => (
            <span key={t} className="skill-tag">
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
