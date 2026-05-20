import './Skills.css'

const categories = [
  {
    title: 'Frontend',
    icon: '⬡',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS / Tailwind', level: 92 },
      { name: 'Vue / Nuxt', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: '◈',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / FastAPI', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '◎',
    skills: [
      { name: 'Docker / K8s', level: 80 },
      { name: 'AWS / GCP', level: 76 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Git / GitHub', level: 95 },
    ],
  },
]

const tags = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL',
  'Redis', 'Docker', 'AWS', 'Figma', 'GraphQL', 'REST APIs',
  'Tailwind CSS', 'Prisma', 'Supabase', 'Vercel',
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label fade-up">What I work with</p>
        <h2 className="section-title fade-up delay-1">
          Skills &amp; <em>Expertise</em>
        </h2>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <div key={cat.title} className={`skill-card fade-up delay-${ci + 2}`}>
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
                        style={{ '--target': `${s.level}%`, '--delay': `${0.1 * si}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="skills-tags fade-up delay-5">
          {tags.map((t) => (
            <span key={t} className="skill-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
