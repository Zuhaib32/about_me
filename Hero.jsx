import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero-name">
          <span className="hero-name-line hero-anim-1">Alex</span>
          <span className="hero-name-line hero-italic hero-anim-2">Morgan</span>
        </h1>

        <p className="hero-title hero-anim-3">
          Full-Stack Developer &amp; <em>Creative Technologist</em>
        </p>

        <p className="hero-bio hero-anim-4">
          I craft digital experiences that live at the intersection of clean engineering
          and thoughtful design — turning complex ideas into elegant, performant products.
        </p>

        <div className="hero-cta hero-anim-5">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View my work
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>
            Get in touch
          </button>
        </div>

        <div className="hero-scroll hero-anim-6">
          <div className="scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Floating badge */}
      <div className="hero-badge hero-anim-7">
        <span className="badge-num">5+</span>
        <span className="badge-label">Years of<br/>Experience</span>
      </div>
    </section>
  )
}
