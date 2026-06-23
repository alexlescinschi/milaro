'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import HoverSlider from '@/components/ui/HoverSlider'
import { PRODUCTS, CAT_URL } from '@/lib/products-list'

export const dynamic = 'force-dynamic'

const CAT_TABS = [
  { id: 'all',           label: 'Alle' },
  { id: 'kuechen',       label: 'Küchen' },
  { id: 'schraenke',     label: 'Schränke' },
  { id: 'baeder',        label: 'Bäder' },
  { id: 'sofas-betten',  label: 'Sofas & Betten' },
]

const TYPE_TABS: Record<string, { id: string; label: string }[]> = {
  kuechen: [
    { id: 'all',        label: 'Alle' },
    { id: 'modern',     label: 'Modern' },
    { id: 'klassisch',  label: 'Klassisch' },
    { id: 'neoklassik', label: 'Neoklassik' },
  ],
  schraenke: [
    { id: 'all',              label: 'Alle' },
    { id: 'drehtueren',       label: 'Drehtüren' },
    { id: 'schiebetuer',      label: 'Schiebetüren' },
    { id: 'ankleidezimmer',   label: 'Ankleidezimmer' },
  ],
  baeder: [
    { id: 'all',           label: 'Alle' },
    { id: 'modern',        label: 'Modern' },
    { id: 'klassisch',     label: 'Klassisch' },
  ],
}

function CatalogContent() {
  const [activeCat, setActiveCat] = useState('all')
  const [activeType, setActiveType] = useState('all')
  const searchParams = useSearchParams()

  useEffect(() => {
    const cat = searchParams.get('cat')
    const type = searchParams.get('type')
    if (cat && ['kuechen', 'schraenke', 'baeder', 'sofas-betten'].includes(cat)) {
      setActiveCat(cat)
    }
    if (type && type !== 'all') {
      setActiveType(type)
    }
  }, [searchParams])

  const handleCatChange = (id: string) => {
    setActiveCat(id)
    setActiveType('all')
  }

  const typeTabs = activeCat !== 'all' ? (TYPE_TABS[activeCat] ?? null) : null

  const filtered = PRODUCTS.filter(p => {
    if (activeCat !== 'all' && p.cat !== activeCat) return false
    if (activeType !== 'all' && p.type !== activeType) return false
    return true
  })

  return (
    <section style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="uk-container">
        <div className="page-header-row" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div className="page-header-col" style={{ flex: '0 0 25%' }}>
            <h1 className="section-heading" style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Möbelwerk-Katalog</h1>
            <p style={{ color: 'var(--muted-color)', fontSize: '1rem', margin: 0 }}>Stil, Qualität, Komfort</p>
          </div>
          <div className="page-header-col" style={{ flex: '0 0 75%' }}>
            <p style={{ color: 'var(--muted-color)', fontSize: '1rem', margin: 0 }}>
              Wir sind bekannt und geschätzt in über 130 Städten in der Schweiz und ganz Europa. Gemeinsam haben wir bereits mehr als 5&apos;000 Familien glücklich gemacht – mit individuellen Projekten für Küchen, Schränke und Badezimmermöbel.
            </p>
          </div>
        </div>

        <div className="cat-tabs">
          {CAT_TABS.map(tab => (
            <button
              key={tab.id}
              className={`cat-tab${activeCat === tab.id ? ' active' : ''}`}
              onClick={() => handleCatChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {typeTabs && (
          <div className="cat-tabs cat-tabs--sub">
            {typeTabs.map(tab => (
              <button
                key={tab.id}
                className={`cat-tab cat-tab--sub${activeType === tab.id ? ' active' : ''}`}
                onClick={() => setActiveType(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <p style={{ color: 'var(--muted-color)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          {filtered.length} {filtered.length === 1 ? 'Modell' : 'Modelle'}
        </p>

        <style>{`.cat-card-img:hover{transform:scale(1.04)}`}</style>
        <div className="cat-grid">
          {filtered.map(p => (
            <Link
              key={p.cat + p.slug}
              href={`/katalog/${CAT_URL[p.cat]}/${p.slug}`}
              className="cat-card"
            >
              <div className="cat-card-wrap" style={{ position: 'relative', overflow: 'hidden', height: '260px', background: '#e8e8e8', borderRadius: '0.85rem 0.85rem 0 0' }}>
                {p.images && p.images.length > 1 ? (
                  <HoverSlider images={p.images} videos={p.videos} name={p.name} />
                ) : (
                  <img src={p.img} alt={p.name} className="cat-card-img" />
                )}
                <span className="cat-card-badge">{p.label}</span>
                <div className="cat-card-overlay" />
              </div>
              <div className="cat-card-title">{p.name}</div>
              <div className="cat-card-sub">{p.type.charAt(0).toUpperCase() + p.type.slice(1)}</div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--muted-color)', padding: '4rem 0' }}>
            Demnächst verfügbar
          </p>
        )}
      </div>
    </section>
  )
}

export default function CatalogPage() {
  return (
    <Suspense fallback={null}>
      <CatalogContent />
    </Suspense>
  )
}
