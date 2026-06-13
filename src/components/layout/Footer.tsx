import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const FOOTER_LINKS = [
  { title: 'Kataloge', links: [{ label: 'Küchen', href: '/katalog/kuechen' }, { label: 'Schränke', href: '/katalog/schraenke' }, { label: 'Bäder', href: '/katalog/baeder' }, { label: 'Sofas & Betten', href: '/katalog/sofas-betten' }] },
  { title: 'Portfolio', links: [{ label: 'Projekte', href: '/portfolio' }, { label: 'Bewertungen', href: '#' }, { label: 'Einrichtungstipps', href: '#' }] },
  { title: 'Services', links: [{ label: 'Kostenlose Planung', href: '#' }, { label: 'Ausmessung', href: '#' }, { label: 'Lieferung & Montage', href: '#' }, { label: 'Garantie', href: '#' }] },
  { title: 'Unternehmen', links: [{ label: 'Über uns', href: '/unternehmen' }, { label: 'Kontakt', href: '/kontakt' }, { label: 'Zusammenarbeit', href: '/zusammenarbeit' }] },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="uk-container-xlarge">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1fr', gap: '2.5rem' }}>
          <style>{`@media(max-width:960px){.footer-grid{grid-template-columns:1fr 1fr!important}}`}</style>
          <div>
            <svg width="140" height="30" viewBox="0 0 140 30" fill="#E31E24" style={{ marginBottom: '1rem' }}>
              <text x="0" y="24" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="22" fontWeight="600">milaro.ch</text>
            </svg>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-color)', margin: '0.5rem 0 1rem' }}>
              Maßgefertigte Möbel und Küchen für Ihr Zuhause.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem' }}>
              <a href="#" style={{ color: 'var(--muted-color)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 6.04 4.39 11.04 10.13 11.94V15.2H7.09V12h3.04V9.56c0-3.02 1.79-4.69 4.54-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88V12h3.33l-.53 3.2h-2.8v8.74C19.61 23.04 24 18.04 24 12 24 5.37 18.63 0 12 0z"/></svg>
              </a>
              <a href="#" style={{ color: 'var(--muted-color)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.1 0 12 0 12s0 3.9.5 5.81a3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.9 24 12 24 12s0-3.9-.5-5.81zM9.55 15.57V8.43L15.84 12l-6.29 3.57z"/></svg>
              </a>
              <a href="#" style={{ color: 'var(--muted-color)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.1 16.3c-.3.9-1.6 1.8-2.5 1.8-.7 0-1.4-.3-2.1-.5-.6-.2-1.2-.5-1.9-.5-.7 0-1.4.4-1.9.8-.4.3-1 .5-1.5.5-.8 0-1.8-1-2.2-1.9-.4-.9-.8-2.3-.8-3.6 0-1.8 1-3.6 3.1-3.6.8 0 1.6.2 2.1.6.4.3.8.6 1.3.6.4 0 1-.4 1.6-.7.6-.3 1.2-.5 1.8-.5.7 0 1.4.4 1.8 1 .4.6.5 1.4.5 2.2 0 .3-.1.6-.1.9h.1c-.2.1-.3.3-.3.4z"/></svg>
              </a>
              <a href="#" style={{ color: 'var(--muted-color)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-3.3 17.5l-4.2-5.1 1.5-1.2 2.7 3.3 5.2-6.3 1.5 1.2-6.7 8.1z"/></svg>
              </a>
            </div>
          </div>
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h5 style={{ fontFamily: 'var(--sb-reg)', fontSize: '1rem', marginBottom: '1rem' }}>{col.title}</h5>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ display: 'block', padding: '0.3rem 0', fontSize: '0.875rem', color: 'var(--muted-color)', textDecoration: 'none' }}>
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
            <span>© 2024–2026 milaro.ch — Maßgefertigte Möbel, Küchendesign</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#">AGB</Link>
              <Link href="#">Datenschutz</Link>
              <Link href="#">Impressum</Link>
            </div>
          </div>
          <p style={{ marginTop: '1rem', lineHeight: 1.8 }}>
            <strong>Kontakt:</strong> {SITE_CONFIG.phone} | {SITE_CONFIG.email} | {SITE_CONFIG.hours}
          </p>
        </div>
      </div>
    </footer>
  )
}
