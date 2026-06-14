'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'

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
            <svg width="100" height="27" viewBox="0 0 717.59 189.5" fill="#E31E24">
              <path d="M143.59,0c-13.02,37.91-27.06,77.6-39.45,115.65C92.03,77.04,79.59,38.54,66.82,0.15L0,0.02l0.06,186.65l43.55,0.05L43.46,60.43l23.79,70.51c6.04,18.65,12.3,37.23,18.76,55.73l36.21-0.03c9.44-29.52,19.21-58.94,29.3-88.24c3.49-10.33,8.17-27.38,12.01-36.8l-0.08,36.56l-0.14,88.45l45.24-0.03L208.51,0.02L143.59,0z"/>
              <path d="M433.47,40.87l-0.03,15.8c-12.73-13.18-22.3-19.01-41.72-19.29c-3-0.05-6,0.04-8.99,0.3c-82.14,9.08-82.67,140.51-2.84,151.04c18.03,2.38,37.6-0.33,50.51-14.29l3.14-3.79l-0.02,15.72l42.92,0.06c0.16-47.95,0.67-97.68-0.01-145.51L433.47,40.87z M404.44,151.35c-45.35,5.58-53.31-68.33-8.3-75.21c8.1-0.42,16.44,0.63,22.92,5.71C443.69,101.12,438.09,146.16,404.44,151.35z"/>
              <path d="M716.66,100.38c-5.35-42.06-38.65-63.9-79.37-62.49c-2.44,0.09-5.2-0.01-7.61,0.31c-47.43,4.67-69.1,40.45-64.72,86.05c4.47,46.54,43.01,69.83,87.49,64.37c0.36-0.04,0.72-0.09,1.09-0.14C701.02,182.62,722.49,146.24,716.66,100.38z M660.62,144.33c-4.47,4.47-10.26,6.07-16.32,7.14c-8.55,0.4-15.85-0.25-23-5.79c-18.53-14.33-18.15-51.42,0.94-65.14c4.53-3.26,9.26-4.33,14.66-4.87C673.65,72.43,682.16,122.79,660.62,144.33z"/>
              <path d="M316.05,0.23c-14.51-0.15-29.02-0.17-43.53-0.08c-0.84,61.63-0.12,124.62-0.07,186.36c14.43,0.01,29.21-0.15,43.61,0.06C315.63,124.45,315.62,62.34,316.05,0.23z"/>
              <path d="M569.2,77.88c0.04-13.47-0.01-26.95-0.14-40.42l-5.2,0.23c-15.6,1.61-25.14,6.99-33.27,20.7l-0.01-17.48c-14.03-0.13-28.06-0.13-42.1,0.01c-0.37,45.11-0.5,90.21-0.38,135.32l0.01,10.12c14.42,0.09,28.85,0.1,43.27,0.02l0.1-51.04C531.53,103.32,528.78,81.49,569.2,77.88z"/>
              <polygon points="218.54,42.85 218.58,186.45 243.32,186.52 262.16,186.52 262.21,42.79 238.59,42.74"/>
              <path d="M218.15,0.19c-0.04,10.02-1.42,24.33,6.38,31.78c8.85,8.46,24.11,7.94,32.98-0.1c8.25-9.2,6.45-19.61,6.3-31.65C248.88,0.1,233.05-0.14,218.15,0.19z"/>
            </svg>
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
