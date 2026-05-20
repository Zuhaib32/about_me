import './Hero.css'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero">
      <div className="hero-content container">

        <h1 className="hero-name">
          Zuhaib Abdi
        </h1>

        <p className="hero-title">
          Computer Science Student | Metropolitan State University
        </p>

        <p className="hero-bio">
          I am a Computer Science student focused on software engineering,
          databases, web development, and cybersecurity concepts. I enjoy
          building projects, learning modern technologies, and improving my
          programming skills through hands-on experience.
        </p>

        <div className="hero-cta">
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

      </div>
    </section>
  )
}
