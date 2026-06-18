import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'
import Logo from '@/components/layout/Logo'

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
            <Logo width={130} style={{ marginBottom: '1rem' }} />
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
