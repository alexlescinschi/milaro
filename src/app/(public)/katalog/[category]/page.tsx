import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

const products = [
  { name: 'Mix 22', slug: 'mix-22', img: 'https://upload-bxp-mfm.marya.ru/iblock/a20/a20b71f90ddcb42f9b71142d62ec6d07/1c736d98b62f694f8227ff4348dc5618.jpg' },
  { name: 'Trento Email', slug: 'trento-email', img: 'https://www.marya.ru/promo/home3/img/models/trento1.jpg' },
  { name: 'Avenue', slug: 'avenue', img: 'https://upload-bxp-mfm.marya.ru/iblock/0b5/0b55dcea3b6750bfaba48f63270e065f/fd4a30d8d1bc583736163fd34f7a1259.jpg' },
  { name: 'Nicolle Thermoplast', slug: 'nicolle-thermoplast', img: 'https://www.marya.ru/promo/home3/img/models/nicolle.jpg' },
  { name: 'Jazz', slug: 'jazz', img: 'https://upload-bxp-mfm.marya.ru/iblock/76b/76b64859abed9efa69230166959d42ab/7d40cbf53b48c8b595bb6b79f0dd469c.jpg' },
  { name: 'Jazz Intuit', slug: 'jazz-intuit', img: 'https://www.marya.ru/promo/home3/img/models/jazz3.jpg' },
  { name: 'Jazz Kabinet', slug: 'jazz-kabinet', img: 'https://www.marya.ru/promo/home3/img/models/mix2.jpg' },
  { name: 'Teramo', slug: 'teramo', img: 'https://upload-bxp-mfm.marya.ru/iblock/6e3/6e398131b6d091587e395f41c57b1504/06d7c84ca9a89249be00eb3113bfa7bd.jpg' },
  { name: 'Vector', slug: 'vector', img: 'https://upload-bxp-mfm.marya.ru/iblock/e01/e019af3c0e6926865411bad0a14d707a/4d6c6784b17e3bafbadd7530f1704127.jpg' },
  { name: 'Vienna', slug: 'vienna', img: 'https://upload-bxp-mfm.marya.ru/iblock/34e/34ef497c6d3aa9fe291e5bbec85ed0c9/cec6735ae5726b0d0e9aeb796617d53c.jpg' },
  { name: 'Antro Rustic', slug: 'antro-rustic', img: 'https://upload-bxp-mfm.marya.ru/iblock/3af/3af58af088fd827c01615d781a222d26/b1bd2d46c748f2992f8a8b5b1e321146.jpg' },
  { name: 'Spark', slug: 'spark', img: 'https://upload-bxp-mfm.marya.ru/iblock/ccf/ccf3ba6581821b90bd5ecfedb8a4d2e8/464acb62d72e9c0e1b54ae0479e7efdf.jpg' },
  { name: 'Antro Stone', slug: 'antro-stone', img: 'https://upload-bxp-mfm.marya.ru/iblock/e4e/e4ed7e0f0ff8e7999db15651a39915cc/79098b697b42e6831af626abb665935b.jpg' },
  { name: 'Antro Wood', slug: 'antro-wood', img: 'https://upload-bxp-mfm.marya.ru/iblock/103/103bc360fb218775699dbc630ef40374/e105639a0efa351c4fed8bee07850822.jpg' },
  { name: 'Milaro Garden', slug: 'milaro-garden', img: 'https://upload-bxp-mfm.marya.ru/iblock/956/95660f4a8e96381acef3d8eb6db6882f/dcd8e438154a09bf051818beab3324c7.jpg' },
  { name: 'Vector Touch', slug: 'vector-touch', img: 'https://upload-bxp-mfm.marya.ru/iblock/860/860f7c2a80a31cfe603635b6869d7b24/ad7cb35eb0c5e2758ea72a5fbdc90622.jpg' },
  { name: 'Integrato', slug: 'integrato', img: 'https://upload-bxp-mfm.marya.ru/iblock/28f/28f9cf5594dccee5d2cc680cf931bd6b/12ae09b1a6859eb54b400695a28e6a86.jpg' },
  { name: 'Wood Décor Email', slug: 'wood-dekor-email', img: 'https://upload-bxp-mfm.marya.ru/iblock/3df/3df6b34dfad17e5af15bd403d8e51fc7/9160b6cce5996b30c21c0ee66d9b6ed1.jpg' },
  { name: 'Tokyo Glanz', slug: 'tokyo-glanz', img: 'https://upload-bxp-mfm.marya.ru/iblock/f80/f807968a848ff69c3b1586fc5a08ae39/82128da6551c91c84cbb51e5d417a8dd.jpg' },
  { name: 'Jazz Allure', slug: 'jazz-allure', img: 'https://upload-bxp-mfm.marya.ru/iblock/ba2/ba268b7026920fa148416336fa32f631/ff9a710b148730a1d74acffdc6d6c965.jpg' },
]

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const catName = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Katalog', href: '/katalog' }, { label: catName }]} />
      <section className="uk-section uk-section-large">
        <div className="uk-container">
          <h1 className="section-heading">{catName}</h1>
          <p style={{ textAlign: 'center', color: 'var(--muted-color)', marginBottom: '1rem' }}>
            {products.length} Modelle — maßgefertigt für die Schweiz
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['Alle', 'Modern', 'Klassisch', 'Neoklassik', 'Outdoor'].map((f) => (
              <button key={f} style={{
                padding: '0.5rem 1.5rem', borderRadius: '2rem', border: '1px solid var(--border-color)',
                fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.03em',
                cursor: 'pointer', background: f === 'Alle' ? 'var(--light-color)' : 'transparent',
                color: 'var(--main-color)',
              }}>
                {f}
              </button>
            ))}
          </div>

          <style>{`.cat-img:hover{transform:scale(1.04)}`}</style>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {products.map((p) => (
              <div key={p.slug} style={{ width: 'calc(33.333% - 1rem)', minWidth: 250 }}>
                <Link href={`/katalog/${category}/${p.slug}`} className="product-card">
                  <div style={{ height: '23rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative' }}>
                    <img src={p.img} alt={p.name} className="cat-img" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', display: 'block' }} />
                  </div>
                  <div className="product-card-title">{p.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
