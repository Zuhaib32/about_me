import './Projects.css'

const projects = [
  {
    num: '01',
    title: 'Luminary',
    subtitle: 'AI-Powered Design System',
    desc: 'A comprehensive design token system with AI-assisted component generation. Used by 3 product teams to ship consistent UIs at 2× the speed.',
    tags: ['React', 'TypeScript', 'Figma API', 'OpenAI'],
    link: '#',
    featured: true,
  },
  {
    num: '02',
    title: 'Helios',
    subtitle: 'Real-Time Analytics Dashboard',
    desc: 'Live data visualization platform processing 1M+ events/day with sub-100ms query times via custom WebSocket architecture.',
    tags: ['Next.js', 'Postgres', 'Redis', 'D3.js'],
    link: '#',
    featured: false,
  },
  {
    num: '03',
    title: 'Arcana',
    subtitle: 'E-Commerce Platform',
    desc: 'Full-stack marketplace with ML-powered recommendations, Stripe payments, and a custom headless CMS. 40% lift in conversion.',
    tags: ['Vue 3', 'FastAPI', 'Stripe', 'Algolia'],
    link: '#',
    featured: false,
  },
  {
    num: '04',
    title: 'Pulse',
    subtitle: 'Team Collaboration App',
    desc: 'Async-first project management tool built for remote teams. Real-time presence, rich text editing, and Notion-like blocks.',
    tags: ['React', 'Socket.io', 'Prisma', 'AWS'],
    link: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <p className="section-label fade-up">Selected work</p>
        <h2 className="section-title fade-up delay-1">
          Recent <em>Projects</em>
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
                    <span key={t} className="proj-tag">{t}</span>
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
