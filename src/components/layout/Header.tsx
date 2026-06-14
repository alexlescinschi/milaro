'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import MobileNav from './MobileNav'
import ProjektModal from '@/components/ui/ProjektModal'
import { PRODUCTS, CAT_URL } from '@/lib/products-list'

function pickTwo<T>(arr: T[]): T[] {
  const idx = Math.floor(Math.random() * arr.length)
  let idx2: number
  do { idx2 = Math.floor(Math.random() * arr.length) } while (idx2 === idx)
  return [arr[idx], arr[idx2]]
}

const NAV_ITEMS = [
  {
    label: 'Katalog',
    href: '/katalog',
    dropdown: {
      col1: [
        { label: 'Küchen', href: '/katalog?cat=kuechen' },
        { label: 'Schränke', href: '/katalog?cat=schraenke' },
        { label: 'Bäder', href: '/katalog?cat=baeder' },
        { label: 'Sofas & Betten', href: '/katalog?cat=sofas-betten' },
      ],
    },
  },
  { label: 'Portfolio',    href: '/portfolio' },
  { label: 'Services',     href: '/dienstleistungen' },
  { label: 'Unternehmen',  href: '/unternehmen' },
  { label: 'Kontakt',      href: '/kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [randomProducts, setRandomProducts] = useState<typeof PRODUCTS>([])
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

  useEffect(() => {
    setRandomProducts(pickTwo(PRODUCTS))
  }, [])

  const handleEnter = (label: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => {
      setOpenDropdown(label)
      if (label === 'Katalog') {
        setRandomProducts(pickTwo(PRODUCTS))
      }
    }, 150)
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
            <Link href="/zusammenarbeit">Zusammenarbeit für Unternehmen</Link>
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
            <svg width="120" height="32" viewBox="0 0 717.59 189.5" fill="#E31E24">
              <path d="M143.59,0c-13.02,37.91-27.06,77.6-39.45,115.65C92.03,77.04,79.59,38.54,66.82,0.15L0,0.02l0.06,186.65l43.55,0.05L43.46,60.43l23.79,70.51c6.04,18.65,12.3,37.23,18.76,55.73l36.21-0.03c9.44-29.52,19.21-58.94,29.3-88.24c3.49-10.33,8.17-27.38,12.01-36.8l-0.08,36.56l-0.14,88.45l45.24-0.03L208.51,0.02L143.59,0z"/>
              <path d="M433.47,40.87l-0.03,15.8c-12.73-13.18-22.3-19.01-41.72-19.29c-3-0.05-6,0.04-8.99,0.3c-82.14,9.08-82.67,140.51-2.84,151.04c18.03,2.38,37.6-0.33,50.51-14.29l3.14-3.79l-0.02,15.72l42.92,0.06c0.16-47.95,0.67-97.68-0.01-145.51L433.47,40.87z M404.44,151.35c-45.35,5.58-53.31-68.33-8.3-75.21c8.1-0.42,16.44,0.63,22.92,5.71C443.69,101.12,438.09,146.16,404.44,151.35z"/>
              <path d="M716.66,100.38c-5.35-42.06-38.65-63.9-79.37-62.49c-2.44,0.09-5.2-0.01-7.61,0.31c-47.43,4.67-69.1,40.45-64.72,86.05c4.47,46.54,43.01,69.83,87.49,64.37c0.36-0.04,0.72-0.09,1.09-0.14C701.02,182.62,722.49,146.24,716.66,100.38z M660.62,144.33c-4.47,4.47-10.26,6.07-16.32,7.14c-8.55,0.4-15.85-0.25-23-5.79c-18.53-14.33-18.15-51.42,0.94-65.14c4.53-3.26,9.26-4.33,14.66-4.87C673.65,72.43,682.16,122.79,660.62,144.33z"/>
              <path d="M316.05,0.23c-14.51-0.15-29.02-0.17-43.53-0.08c-0.84,61.63-0.12,124.62-0.07,186.36c14.43,0.01,29.21-0.15,43.61,0.06C315.63,124.45,315.62,62.34,316.05,0.23z"/>
              <path d="M569.2,77.88c0.04-13.47-0.01-26.95-0.14-40.42l-5.2,0.23c-15.6,1.61-25.14,6.99-33.27,20.7l-0.01-17.48c-14.03-0.13-28.06-0.13-42.1,0.01c-0.37,45.11-0.5,90.21-0.38,135.32l0.01,10.12c14.42,0.09,28.85,0.1,43.27,0.02l0.1-51.04C531.53,103.32,528.78,81.49,569.2,77.88z"/>
              <polygon points="218.54,42.85 218.58,186.45 243.32,186.52 262.16,186.52 262.21,42.79 238.59,42.74"/>
              <path d="M218.15,0.19c-0.04,10.02-1.42,24.33,6.38,31.78c8.85,8.46,24.11,7.94,32.98-0.1c8.25-9.2,6.45-19.61,6.3-31.65C248.88,0.1,233.05-0.14,218.15,0.19z"/>
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

          {/* Spacer for mobile (pushes hamburger to right) */}
          <div className="header-spacer" style={{ flex: 1 }} />

          {/* Right side */}
          <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Link
              href="/konfigurator"
              className="header-planner-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0 1.1rem', height: 38, borderRadius: 6,
                border: '1.5px solid var(--primary-color)', color: 'var(--primary-color)',
                fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none',
                letterSpacing: '0.03em', textTransform: 'uppercase',
                transition: 'background 0.18s, color 0.18s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--primary-color)'; (e.currentTarget as HTMLElement).style.color = 'white' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--primary-color)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2H2v10l9.29 9.29a1 1 0 001.42 0l6.58-6.58a1 1 0 000-1.42L12 2z"/>
                <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
              Küchenplaner
            </Link>
            <button
              onClick={() => setFormOpen(true)}
              className="uk-button uk-button-primary header-cta"
              style={{
                height: 38, padding: '0 1.1rem', fontSize: '0.8rem',
                fontWeight: 600, letterSpacing: '0.03em',
              }}
            >
              Projekt bestellen
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="mobile-menu-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-color)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"/>
              </svg>
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
              {/* Col 1: Category links */}
              <div style={{ width: '40%', borderRight: '1px solid var(--border-color)', padding: '1.5rem 2rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {(item.dropdown as { col1: { label: string; href: string }[] }).col1.map((link) => (
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
              {/* Col 2: Random product cards */}
              <div style={{ width: '60%', padding: '1.5rem 2rem', display: 'flex', gap: '1rem' }}>
                {randomProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/katalog/${CAT_URL[p.cat]}/${p.slug}`}
                    style={{
                      flex: 1, borderRadius: '1rem', overflow: 'hidden',
                      textDecoration: 'none', color: 'inherit', display: 'block',
                      position: 'relative', height: 280,
                    }}
                    onClick={() => setOpenDropdown(null)}
                  >
                    <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    }}>
                      <div style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.1rem', color: 'white' }}>{p.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>{p.label}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* Mobile nav */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Lead form modal */}
      <ProjektModal open={formOpen} onClose={() => setFormOpen(false)} />

      {/* Responsive CSS */}
      <style jsx global>{`
        @media (max-width: 1200px) {
          .header-nav { display: none !important; }
          .header-cta { display: none !important; }
          .header-planner-btn { display: none !important; }
          .city-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 1201px) {
          .mobile-menu-btn { display: none !important; }
          .header-spacer { display: none !important; }
        }
      `}</style>
    </>
  )
}
