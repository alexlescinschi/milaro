'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'
import Logo from '@/components/layout/Logo'

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-nav-overlay ${open ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div className={`mobile-nav ${open ? 'open' : ''}`}>

        {/* Header */}
        <div className="mn-header">
          <Link href="/" onClick={onClose} className="mn-logo">
            <Logo width={110} />
          </Link>
          <button className="mn-close" onClick={onClose} aria-label="Schliessen">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="mn-nav">
          {NAV_ITEMS.filter(item => item.label !== 'Aktionen').map((item) => (
            <div key={item.label} className="mn-item">
              <Link href={item.href} className="mn-link" onClick={onClose}>
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="mn-bottom">
          <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="mn-phone">
            <Phone size={15} />
            {SITE_CONFIG.phone}
          </a>
          <Link
            href="/konfigurator"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              width: '100%', textAlign: 'center', marginTop: '0.75rem',
              padding: '0.7rem 1rem', borderRadius: '0.5rem',
              border: '1.5px solid var(--primary-color)',
              color: 'var(--primary-color)', fontSize: '0.88rem', fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
            onClick={onClose}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-color)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary-color)' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2H2v10l9.29 9.29a1 1 0 001.42 0l6.58-6.58a1 1 0 000-1.42L12 2z"/>
              <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            Küchenplaner
          </Link>
          <Link
            href="/katalog"
            className="uk-button uk-button-primary"
            style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }}
            onClick={onClose}
          >
            Projekt bestellen
          </Link>
          <Link
            href="/zusammenarbeit"
            style={{
              display: 'block', width: '100%', textAlign: 'center', marginTop: '0.5rem',
              padding: '0.6rem 1rem', borderRadius: '0.5rem',
              border: '1.5px solid var(--border-color)',
              color: 'var(--muted-color)', fontSize: '0.85rem',
              textDecoration: 'none', transition: 'border-color 0.2s',
            }}
            onClick={onClose}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--main-color)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)' }}
          >
            Zusammenarbeit für Unternehmen
          </Link>
          <p className="mn-hours">{SITE_CONFIG.hours}</p>
        </div>
      </div>
    </>
  )
}
