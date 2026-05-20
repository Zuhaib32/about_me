import './Projects.css'

const projects = [
  {
    num: '01',
    title: 'eSports Database Project',
    subtitle: 'SQL Database Design',
    desc: 'Designed and implemented a relational SQL database system for an eSports management project. Created tables, relationships, business rules, and SQL queries to organize teams, players, matches, tournaments, and related data.',
    tags: ['SQL', 'Database Design', 'Queries', 'ERD'],
    link: '#',
    featured: true,
  },
  {
    num: '02',
    title: 'About Me Website',
    subtitle: 'React / Vite Portfolio',
    desc: 'Built and deployed a responsive single page portfolio website using React, Vite, GitHub, and Vercel.',
    tags: ['React', 'Vite', 'GitHub', 'Vercel'],
    link: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <p className="section-label fade-up">School projects</p>
        <h2 className="section-title fade-up delay-1">
          Academic <em>Projects</em>
        </h2>

        <div className="projects-list">
          {projects.map((p, i) => (
            <a
              key={p.num}
              href={p.link}
              className={`project-row fade-up delay-${i + 2} ${p.featured ? 'featured' : ''}`}
            >
              <span className="proj-num">{p.num}</span>

              <div className="proj-info">
                <div className="proj-titles">
                  <h3 className="proj-title">{p.title}</h3>
                  <span className="proj-subtitle">{p.subtitle}</span>
                </div>

                <p className="proj-desc">{p.desc}</p>

                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="proj-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
