'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone } from 'lucide-react'
import MobileNav from './MobileNav'
import ProjektModal from '@/components/ui/ProjektModal'
import { PRODUCTS, CAT_URL } from '@/lib/products-list'
import Logo from '@/components/layout/Logo'

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
      ],
    },
  },
  { label: 'Portfolio',    href: '/portfolio' },
  { label: 'Services',     href: '/dienstleistungen' },
  { label: 'Unternehmen',  href: '/unternehmen' },
  { label: 'Über uns',    href: '/ueber-uns' },
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
            <a href="tel:+41772754400" style={{ color: 'rgba(255,255,255,0.8)' }}>+41 77 275 44 00</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="uk-container-xlarge" style={{ display: 'flex', alignItems: 'center', height: 60, padding: '0 15px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginRight: '2rem', padding: '5px 0' }}>
            <Logo width={130} />
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
