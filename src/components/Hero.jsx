import './Hero.css'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">
      {/* Ambient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Grid lines */}
      <div className="hero-grid" />

      <div className="hero-content container">
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          <span>Computer Science Student</span>
        </div>

        <h1 className="hero-name">
          <span className="hero-name-line hero-anim-1">Zuhaib</span>
          <span className="hero-name-line hero-italic hero-anim-2">Abdi</span>
        </h1>

        <p className="hero-title hero-anim-3">
          Software Engineering &amp; <em>Cybersecurity Enthusiast</em>
        </p>

        <p className="hero-bio hero-anim-4">
          I am a Computer Science student at Metropolitan State University
          with experience in software development, databases, web technologies,
          and cybersecurity concepts. I enjoy building projects, solving
          technical problems, and continuously learning modern technologies.
        </p>

        <div className="hero-cta hero-anim-5">
          <button
            className="btn-primary"
            onClick={() => scrollTo('projects')}
          >
            View Projects
          </button>

          <button
            className="btn-ghost"
            onClick={() => scrollTo('contact')}
          >
            Contact Me
          </button>
        </div>

        <div className="hero-scroll hero-anim-6">
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Floating badge */}
      <div className="hero-badge hero-anim-7">
        <span className="badge-num">2026</span>
        <span className="badge-label">
          Expected<br />Graduation
        </span>
      </div>
    </section>
  )
}
