'use client'

import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { SITE_CONFIG } from '@/lib/constants'
import PortfolioGalleryScroll from '@/components/portfolio/PortfolioGalleryScroll'

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Kontakt' }]} />
      <section className="uk-section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="uk-container">
          <div className="page-header-row" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div className="page-header-col" style={{ flex: '0 0 25%' }}>
              <h1 className="section-heading" style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Kontakt</h1>
              <p style={{ color: 'var(--muted-color)', fontSize: '1rem', margin: 0 }}>Wir sind für Sie da</p>
            </div>
            <div className="page-header-col" style={{ flex: '0 0 75%' }}>
              <p style={{ color: 'var(--muted-color)', fontSize: '1rem', margin: 0, lineHeight: 1.7 }}>
                Haben Sie Fragen oder möchten Sie ein persönliches Angebot? Unser Team steht Ihnen gerne zur Verfügung.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.2rem' }}>Telefon / WhatsApp</h3>
                <p><a href={`tel:${SITE_CONFIG.phone}`} style={{ color: 'var(--primary-color)' }}>{SITE_CONFIG.phone}</a></p>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.2rem' }}>E-Mail</h3>
                <p><a href={`mailto:${SITE_CONFIG.email}`} style={{ color: 'var(--primary-color)' }}>{SITE_CONFIG.email}</a></p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1.2rem' }}>Öffnungszeiten</h3>
                <p style={{ color: 'var(--muted-color)' }}>{SITE_CONFIG.hours}</p>
              </div>
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link
                  href="/konfigurator"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '1.2rem', borderRadius: '0.75rem',
                    border: '2px solid var(--primary-color)',
                    color: 'var(--primary-color)',
                    fontSize: '1rem', fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-color)'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary-color)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2H2v10l9.29 9.29a1 1 0 001.42 0l6.58-6.58a1 1 0 000-1.42L12 2z"/>
                    <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none"/>
                  </svg>
                  Küchenplaner
                </Link>
                <Link
                  href="/katalog"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1.2rem', borderRadius: '0.75rem',
                    background: 'var(--primary-color)',
                    color: 'white',
                    fontSize: '1rem', fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  Projekt bestellen
                </Link>
                <Link
                  href="/zusammenarbeit"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1.2rem', borderRadius: '0.75rem',
                    border: '1.5px solid var(--border-color)',
                    color: 'var(--main-color)',
                    fontSize: '1rem', fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--main-color)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)' }}
                >
                  Zusammenarbeit für Unternehmen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioGalleryScroll />
    </>
  )
}
