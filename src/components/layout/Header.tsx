'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu } from 'lucide-react'
import MobileNav from './MobileNav'
import LeadForm from '@/components/forms/LeadForm'

const DROPDOWN_IMGS: Record<string, string> = {
  Katalog: 'https://upload-bxp-mfm.marya.ru/iblock/ca8/ca80aa9bc342ab81aa618e0f4ad5f052/d009b242f5fc35f0b1bfdd0e46e35a24.jpg',
  Portfolio: 'https://upload-bxp-mfm.marya.ru/iblock/382/382f0bc27e76518bc8daff12eb013262/11b387847acbc5fa7a3fa61ef00847d2.jpg',
  Services: 'https://upload-bxp-mfm.marya.ru/iblock/34e/34ef497c6d3aa9fe291e5bbec85ed0c9/cec6735ae5726b0d0e9aeb796617d53c.jpg',
  Unternehmen: 'https://upload-bxp-mfm.marya.ru/iblock/390/39003cbd6af4e962fbfa22acf3f24038/350d1971c126dfdf2e314bac647f572d.jpg',
}

const NAV_ITEMS = [
  {
    label: 'Katalog',
    href: '/katalog',
    dropdown: {
      col1: [
        { label: 'Küchen', href: '/katalog/kuechen' },
        { label: 'Schränke', href: '/katalog/schraenke' },
        { label: 'Bäder', href: '/katalog/baeder' },
        { label: 'Sofas & Betten', href: '/katalog/sofas-betten' },
      ],
      col2: [
        { label: 'Technik & Sanitär', href: '#' },
        { label: 'Arbeitsplatten', href: '#' },
        { label: 'Wandpaneele', href: '#' },
        { label: 'Fronten-Katalog', href: '#' },
        { label: 'Moderne Küchen', href: '#' },
        { label: 'Klassische Küchen', href: '#' },
        { label: 'Neoklassische Küchen', href: '#' },
      ],
    },
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    dropdown: {
      col1: [
        { label: 'Projekte', href: '/portfolio' },
        { label: 'Bewertungen', href: '#' },
        { label: 'Einrichtungstipps', href: '#' },
      ],
      col2: [
        { label: 'Eckküchen', href: '#' },
        { label: 'Küchen-Wohnzimmer', href: '#' },
        { label: 'Gerade Küchen', href: '#' },
      ],
    },
  },
  {
    label: 'Services',
    href: '/dienstleistungen',
    dropdown: {
      col1: [
        { label: 'Bestellprozess', href: '/dienstleistungen' },
        { label: 'Garantie', href: '#' },
        { label: 'Online-Bezahlung', href: '#' },
        { label: 'Ratenkauf', href: '#' },
      ],
      col2: [
        { label: 'Kostenlose Planung', href: '#' },
        { label: 'Kostenlose Ausmessung', href: '#' },
        { label: 'Lieferung & Montage', href: '#' },
        { label: 'Kundendienst', href: '#' },
      ],
    },
  },
  {
    label: 'Aktionen',
    href: '#',
  },
  {
    label: 'Unternehmen',
    href: '/unternehmen',
    dropdown: {
      col1: [
        { label: 'Fabrik', href: '#' },
        { label: 'News', href: '#' },
        { label: 'Auszeichnungen', href: '#' },
        { label: 'Kontakte', href: '/kontakt' },
      ],
      col2: [
        { label: 'Zertifikate', href: '#' },
        { label: 'Karriere', href: '#' },
      ],
    },
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const pathname = usePathname()
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenDropdown(null)
  }, [pathname])

  const handleEnter = (label: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setOpenDropdown(label), 150)
  }

  const handleLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setOpenDropdown(null), 200)
  }

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="uk-container-xlarge" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 15px' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="#">Franchise</Link>
            <Link href="#">Bauträger</Link>
            <Link href="#">Designer</Link>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="#">Online-Bezahlung</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link href="#">Standorte</Link>
            <Link href="#">Online-Services</Link>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Phone size={12} />
            <a href="tel:+41772837510" style={{ color: 'rgba(255,255,255,0.8)' }}>+41 77 283 75 10</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="uk-container-xlarge" style={{ display: 'flex', alignItems: 'center', height: 60, padding: '0 15px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginRight: '2rem' }}>
            <svg width="140" height="30" viewBox="0 0 140 30" fill="#E31E24">
              <text x="0" y="24" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="22" fontWeight="600">milaro.ch</text>
            </svg>
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav" style={{ display: 'flex', gap: 0, flex: 1 }}>
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{ position: 'static' }}
                onMouseEnter={() => item.dropdown && handleEnter(item.label)}
                onMouseLeave={() => handleLeave()}
              >
                <Link
                  href={item.href}
                  className="nav-link"
                  style={{
                    display: 'flex', alignItems: 'center', padding: '0 1.2rem',
                    fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.03em',
                    color: pathname.startsWith(item.href) && item.href !== '#' ? 'var(--primary-color)' : 'var(--main-color)',
                    textDecoration: 'none', height: 60, transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            <button
              onClick={() => setFormOpen(true)}
              className="uk-button uk-button-primary header-cta"
            >
              Projekt bestellen
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="mobile-menu-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Dropdown overlay */}
        <div
          className={`uk-dropdown ${openDropdown ? 'show' : ''}`}
          onMouseEnter={() => openDropdown && handleEnter(openDropdown)}
          onMouseLeave={() => handleLeave()}
        >
          {NAV_ITEMS.filter((item) => item.dropdown && item.label === openDropdown).map((item) => (
            <div key={item.label} className="uk-container-xlarge" style={{ display: 'flex' }}>
              {/* Col 1: Primary links (large serif) */}
              <div style={{ width: '33.333%', borderRight: '1px solid var(--border-color)', padding: '1.5rem 2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.dropdown!.col1.map((link) => (
                    <li key={link.label} style={{ marginBottom: '0.3rem' }}>
                      <Link
                        href={link.href}
                        style={{
                          fontFamily: 'var(--sb-reg)', fontSize: '2rem', lineHeight: 1.4,
                          color: 'var(--main-color)', textDecoration: 'none', display: 'block',
                        }}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2: Secondary links (smaller) */}
              <div style={{ width: '33.333%', borderRight: '1px solid var(--border-color)', padding: '1.5rem 2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.dropdown!.col2.map((link) => (
                    <li key={link.label} style={{ marginBottom: '0.2rem' }}>
                      <Link
                        href={link.href}
                        style={{
                          fontSize: '1.1rem', lineHeight: 2,
                          color: 'var(--main-color)', textDecoration: 'none', display: 'block',
                        }}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Promo card with image */}
              <div style={{ width: '33.333%', padding: '1.5rem 2rem' }}>
                <div style={{
                  height: '23rem', borderRadius: '1rem', overflow: 'hidden',
                  position: 'relative', display: 'flex', flexDirection: 'column',
                  justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                  color: 'white', padding: '2rem',
                }}>
                  <img
                    src={DROPDOWN_IMGS[item.label]}
                    alt=""
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.15))',
                  }} />
                  <h3 style={{
                    fontFamily: 'var(--sb-reg)', fontSize: '1.5rem',
                    position: 'relative', zIndex: 1, marginBottom: '0.5rem',
                  }}>
                    {item.label === 'Katalog' ? 'Katalog-Aktionen' : item.label === 'Portfolio' ? 'Inspiration' : item.label === 'Services' ? 'Service' : 'Über uns'}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.875rem', position: 'relative', zIndex: 1, opacity: 0.9 }}>
                    {item.label === 'Katalog' ? 'Entdecken Sie unsere besten Angebote!' : item.label === 'Portfolio' ? 'Unsere schönsten Projekte' : item.label === 'Services' ? 'Wir kümmern uns um alles!' : 'Erfahren Sie mehr über milaro.ch!'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Mobile nav */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Lead form modal */}
      {formOpen && (
        <div className="uk-modal open" onClick={() => setFormOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '1.2rem',
              width: '90%',
              maxWidth: 780,
              position: 'relative',
              maxHeight: '92vh',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <button
              onClick={() => setFormOpen(false)}
              style={{
                position: 'absolute', top: '1.2rem', right: '1.2rem',
                background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer',
                width: 36, height: 36, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {/* Banner image */}
            <div style={{
              position: 'relative', height: 200, borderRadius: '1.2rem 1.2rem 0 0', overflow: 'hidden', flexShrink: 0,
            }}>
              <img
                src="https://www.marya.ru/promo/home3/img/models/mix22.jpg"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)',
              }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem 2.5rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  Kostenlos & unverbindlich
                </p>
                <h2 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: 'white', fontWeight: 600, lineHeight: 1.2, margin: 0 }}>
                  Erhalten Sie Ihren<br />kostenlosen Design-Entwurf
                </h2>
              </div>
            </div>

            {/* Form area */}
            <div style={{ padding: '2.2rem 2.5rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted-color)', marginBottom: '1.8rem', lineHeight: 1.6 }}>
                Füllen Sie das Formular aus und erhalten Sie ein individuelles Möbelprojekt von Ihrem persönlichen Designer — kostenlos und unverbindlich.
              </p>
              <LeadForm onClose={() => setFormOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* Responsive CSS */}
      <style jsx global>{`
        @media (max-width: 1200px) {
          .header-nav { display: none !important; }
          .header-cta { display: none !important; }
          .city-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 1201px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  )
}
