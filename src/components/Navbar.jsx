'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#funnel', label: 'Ad Funnel' },
  { href: '#products', label: 'Products' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <div className={`navbar-wrapper desktop-only ${scrolled ? 'scrolled' : ''}`}>
        <motion.nav
          className={`navbar ${scrolled ? 'scrolled' : ''}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="nav-container">
            <a href="#" className="nav-logo">
              <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" />
                <path d="M12 28L20 12L28 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="15" y1="23" x2="25" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="logo-text">Ad<span className="accent">Vantage</span></span>
            </a>

            <ul className="nav-menu">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <a
                href="#contact"
                className="nav-cta"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Top Header (Logo + CTA) */}
      <div className="mobile-top-header mobile-only">
        <a href="#" className="nav-logo">
          <svg className="logo-icon" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="var(--primary)" strokeWidth="2.5" />
            <path d="M12 28L20 12L28 28" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="15" y1="23" x2="25" y2="23" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="logo-text">Ad<span className="accent">Vantage</span></span>
        </a>
        <a href="#contact" className="nav-cta-sm" onClick={(e) => handleNavClick(e, '#contact')}>
          Contact
        </a>
      </div>

      {/* Mobile Bottom Dock Menu */}
      <div className="mobile-dock-wrapper mobile-only">
        <nav className="mobile-dock">
          <ul className="mobile-dock-menu">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-dock-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
