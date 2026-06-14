import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const FOOTER_LINKS = [
  {
    title: 'Katalog',
    links: [
      { label: 'Alle Produkte',   href: '/katalog' },
      { label: 'Küchen',          href: '/katalog?cat=kuechen' },
      { label: 'Schränke',        href: '/katalog?cat=schraenke' },
      { label: 'Bäder',           href: '/katalog?cat=baeder' },
      { label: 'Sofas & Betten',  href: '/katalog?cat=sofas-betten' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Küchenplaner',    href: '/konfigurator' },
      { label: 'Portfolio',       href: '/portfolio' },
      { label: 'Dienstleistungen',href: '/dienstleistungen' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'Über uns',        href: '/unternehmen' },
      { label: 'Kontakt',         href: '/kontakt' },
      { label: 'Zusammenarbeit',  href: '/zusammenarbeit' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="uk-container-xlarge">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: '2.5rem' }}>
          <style>{`@media(max-width:960px){.footer-grid{grid-template-columns:1fr 1fr!important}}`}</style>

          {/* Brand column */}
          <div>
            <svg width="120" height="32" viewBox="0 0 717.59 189.5" fill="#E31E24" style={{ marginBottom: '1rem' }}>
              <path d="M143.59,0c-13.02,37.91-27.06,77.6-39.45,115.65C92.03,77.04,79.59,38.54,66.82,0.15L0,0.02l0.06,186.65l43.55,0.05L43.46,60.43l23.79,70.51c6.04,18.65,12.3,37.23,18.76,55.73l36.21-0.03c9.44-29.52,19.21-58.94,29.3-88.24c3.49-10.33,8.17-27.38,12.01-36.8l-0.08,36.56l-0.14,88.45l45.24-0.03L208.51,0.02L143.59,0z"/>
              <path d="M433.47,40.87l-0.03,15.8c-12.73-13.18-22.3-19.01-41.72-19.29c-3-0.05-6,0.04-8.99,0.3c-82.14,9.08-82.67,140.51-2.84,151.04c18.03,2.38,37.6-0.33,50.51-14.29l3.14-3.79l-0.02,15.72l42.92,0.06c0.16-47.95,0.67-97.68-0.01-145.51L433.47,40.87z M404.44,151.35c-45.35,5.58-53.31-68.33-8.3-75.21c8.1-0.42,16.44,0.63,22.92,5.71C443.69,101.12,438.09,146.16,404.44,151.35z"/>
              <path d="M716.66,100.38c-5.35-42.06-38.65-63.9-79.37-62.49c-2.44,0.09-5.2-0.01-7.61,0.31c-47.43,4.67-69.1,40.45-64.72,86.05c4.47,46.54,43.01,69.83,87.49,64.37c0.36-0.04,0.72-0.09,1.09-0.14C701.02,182.62,722.49,146.24,716.66,100.38z M660.62,144.33c-4.47,4.47-10.26,6.07-16.32,7.14c-8.55,0.4-15.85-0.25-23-5.79c-18.53-14.33-18.15-51.42,0.94-65.14c4.53-3.26,9.26-4.33,14.66-4.87C673.65,72.43,682.16,122.79,660.62,144.33z"/>
              <path d="M316.05,0.23c-14.51-0.15-29.02-0.17-43.53-0.08c-0.84,61.63-0.12,124.62-0.07,186.36c14.43,0.01,29.21-0.15,43.61,0.06C315.63,124.45,315.62,62.34,316.05,0.23z"/>
              <path d="M569.2,77.88c0.04-13.47-0.01-26.95-0.14-40.42l-5.2,0.23c-15.6,1.61-25.14,6.99-33.27,20.7l-0.01-17.48c-14.03-0.13-28.06-0.13-42.1,0.01c-0.37,45.11-0.5,90.21-0.38,135.32l0.01,10.12c14.42,0.09,28.85,0.1,43.27,0.02l0.1-51.04C531.53,103.32,528.78,81.49,569.2,77.88z"/>
              <polygon points="218.54,42.85 218.58,186.45 243.32,186.52 262.16,186.52 262.21,42.79 238.59,42.74"/>
              <path d="M218.15,0.19c-0.04,10.02-1.42,24.33,6.38,31.78c8.85,8.46,24.11,7.94,32.98-0.1c8.25-9.2,6.45-19.61,6.3-31.65C248.88,0.1,233.05-0.14,218.15,0.19z"/>
            </svg>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-color)', margin: '0.5rem 0 1.25rem', lineHeight: 1.6 }}>
              Massgefertigte Möbel und Küchen<br />für Ihr Schweizer Zuhause.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} style={{ fontSize: '0.875rem', color: 'var(--muted-color)', textDecoration: 'none' }}>
                {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} style={{ fontSize: '0.875rem', color: 'var(--muted-color)', textDecoration: 'none' }}>
                {SITE_CONFIG.email}
              </a>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted-color)' }}>{SITE_CONFIG.hours}</span>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h5 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', marginBottom: '1rem' }}>{col.title}</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ display: 'block', padding: '0.3rem 0', fontSize: '0.875rem', color: 'var(--muted-color)', textDecoration: 'none' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', fontSize: '0.75rem', color: 'var(--muted-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <span>© 2024–2026 milaro.ch — Massgefertigte Möbel, Küchendesign</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/kontakt" style={{ color: 'var(--muted-color)', textDecoration: 'none' }}>Kontakt</Link>
              <Link href="/zusammenarbeit" style={{ color: 'var(--muted-color)', textDecoration: 'none' }}>B2B</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
