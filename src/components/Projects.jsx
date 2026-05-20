import './Projects.css'

const projects = [
  {
    num: '01',
    title: 'eSports Database Project',
    subtitle: 'SQL Database Design',
    desc: 'Designed and implemented a relational SQL database system for an eSports management project. Created tables, relationships, business rules, and SQL queries to manage teams, players, tournaments, matches, and statistics.',
    tags: ['SQL', 'Database Design', 'ERD', 'Queries'],
    link: '#',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <p className="section-label fade-up">School Project</p>

        <h2 className="section-title fade-up delay-1">
          eSports <em>Database</em>
        </h2>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div
              key={p.num}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
