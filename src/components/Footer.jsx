import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <span className="footer-name">
          Zuhaib Abdi
        </span>

        <span className="footer-copy">
          © {new Date().getFullYear()} · Computer Science Portfolio
        </span>

        <span className="footer-back">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()

              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
          >
            Back to top ↑
          </a>
        </span>

      </div>
    </footer>
  )
}
