import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)

    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">

        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => handleNav(e, 'hero')}
        >
          <span className="logo-initial">Z</span>
          <span className="logo-name">Zuhaib Abdi</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={(e) => handleNav(e, l)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={(e) => handleNav(e, l)}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  )
}
