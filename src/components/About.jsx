import './About.css'

const stats = [
  { value: '50+', label: 'Projects shipped' },
  { value: '12+', label: 'Happy clients' },
  { value: '5+', label: 'Years building' },
  { value: '∞', label: 'Cups of coffee' },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: photo placeholder */}
          <div className="about-visual fade-up">
            <div className="about-img-wrap">
              <div className="about-img-bg" />
              <div className="about-img-frame">
                <div className="about-initials">AM</div>
              </div>
              <div className="about-img-deco" />
            </div>
          </div>

          {/* Right: text */}
          <div className="about-text">
            <p className="section-label fade-up">Who I am</p>
            <h2 className="section-title fade-up delay-1">
              Turning ideas into<br /><em>living software</em>
            </h2>

            <p className="about-para fade-up delay-2">
              Hey — I'm Alex, a full-stack developer based in San Francisco. I've spent the
              last five years building products that people actually enjoy using, from
              early-stage startups to enterprise platforms.
            </p>

            <p className="about-para fade-up delay-3">
              My approach blends rigorous engineering with a genuine love for design. I
              believe the best digital products aren't just functional — they're
              <em> delightful</em>. I obsess over the small details that make interactions
              feel smooth and intentional.
            </p>

            <p className="about-para fade-up delay-4">
              Outside of code: hiking trails, analog photography, and strong espresso.
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
