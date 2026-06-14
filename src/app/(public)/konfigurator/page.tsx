'use client'

import Breadcrumbs from '@/components/layout/Breadcrumbs'
import KonfiguratorForm from '@/components/home/KonfiguratorForm'

export default function KonfiguratorPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Küchenplaner' }]} />

      <section className="uk-section" style={{ paddingTop: '2rem' }}>
        <div className="uk-container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary-color)', marginBottom: '0.6rem' }}>
              Online-Konfigurator
            </p>
            <h1 style={{ fontFamily: 'var(--sb-reg)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', margin: '0 0 1rem' }}>
              Küchenplanung online
            </h1>
            <p style={{ color: 'var(--muted-color)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
              Konfigurieren Sie Ihre Traumküche in wenigen Schritten und erhalten Sie ein unverbindliches Angebot von unserem Designerteam.
            </p>
          </div>
          <KonfiguratorForm compact />
        </div>
      </section>
    </>
  )
}