'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'

const KITCHENS = [
  { name: 'Grafis',   slug: 'grafis',   img: 'https://kuhnimilana.ru/media-temp/img/goods/files/07pxOyAzMM8LAKQhj_P1p1s.jpg' },
  { name: 'Granby',   slug: 'granby',   img: 'https://kuhnimilana.ru/media-temp/img/goods/files/0cZ3AVTlSyxPUwLgW_fAZRl.jpg' },
  { name: 'Budbin',   slug: 'budbin',   img: 'https://kuhnimilana.ru/media-temp/img/goods/files/0jifM8SdyZJQgxzHv_flxWI.jpg' },
  { name: 'Kolaria',  slug: 'kolaria',  img: 'https://kuhnimilana.ru/media-temp/img/goods/files/0kesx1Y2Pt92wkDDx_04Vkl.jpg' },
  { name: 'Roshedu',  slug: 'roshedu',  img: 'https://kuhnimilana.ru/media-temp/img/goods/files/097K8FXmtcZoVqJVy_lu4a1.jpg' },
  { name: 'Brix',     slug: 'brix',     img: 'https://kuhnimilana.ru/media-temp/img/goods/files/0q9jxltANXHL3RmIm_2b9zJ.jpg' },
  { name: 'Sadbury',  slug: 'sadbury',  img: 'https://kuhnimilana.ru/media-temp/img/goods/files/05iefZ2FsYxLSnvb3_z5ytb.jpg' },
  { name: 'Tavira',   slug: 'tavira',   img: 'https://kuhnimilana.ru/media-temp/img/goods/files/04BaGWDW2glkI84IO_Yjrjl.jpg' },
  { name: 'Richmond', slug: 'richmond', img: 'https://kuhnimilana.ru/media-temp/img/goods/files/0LSLx8yb5i198HrrA_hY4iv.jpg' },
]

export default function KultSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLUListElement>(null)

  // Scroll-spy heading animation
  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('kult-heading-in')
        } else {
          el.classList.remove('kult-heading-in')
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Drag-to-scroll slider
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0
    let moved = false

    const onMouseDown = (e: MouseEvent) => {
      isDown = true
      moved = false
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
      slider.style.cursor = 'grabbing'
      slider.style.userSelect = 'none'
    }
    const onMouseLeave = () => {
      isDown = false
      slider.style.cursor = 'grab'
      slider.style.userSelect = ''
    }
    const onMouseUp = () => {
      isDown = false
      slider.style.cursor = 'grab'
      slider.style.userSelect = ''
    }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 1.2
      if (Math.abs(walk) > 4) moved = true
      slider.scrollLeft = scrollLeft - walk
    }

    // Prevent link clicks after drag
    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    slider.addEventListener('mousedown', onMouseDown)
    slider.addEventListener('mouseleave', onMouseLeave)
    slider.addEventListener('mouseup', onMouseUp)
    slider.addEventListener('mousemove', onMouseMove)
    slider.addEventListener('click', onClickCapture, true)

    return () => {
      slider.removeEventListener('mousedown', onMouseDown)
      slider.removeEventListener('mouseleave', onMouseLeave)
      slider.removeEventListener('mouseup', onMouseUp)
      slider.removeEventListener('mousemove', onMouseMove)
      slider.removeEventListener('click', onClickCapture, true)
    }
  }, [])

  return (
    <>
      <style>{`
        .kult-heading {
          opacity: 0;
          transform: translateY(-14px);
          transition: opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s;
        }
        .kult-heading.kult-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .kult-slider {
          display: flex;
          flex-direction: row;
          list-style: none;
          padding: 0;
          margin: 0;
          overflow-x: auto;
          overflow-y: hidden;
          gap: 16px;
          cursor: grab;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 8px;
        }
        .kult-slider::-webkit-scrollbar { display: none; }
        .kult-card {
          flex-shrink: 0;
          width: clamp(260px, 30vw, 480px);
          height: clamp(260px, 30vw, 480px);
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.12);
          position: relative;
        }
        .kult-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
          pointer-events: none;
        }
        .kult-card:hover .kult-card-img {
          transform: scale(1.04);
        }
        .kult-glass {
          position: absolute;
          bottom: 0.85rem;
          left: 0.85rem;
          max-width: 72%;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(14px) saturate(180%);
          -webkit-backdrop-filter: blur(14px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 0.85rem;
          padding: 0.85rem 1rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25);
        }
        .kult-glass-title {
          font-family: var(--sb-reg);
          font-size: clamp(0.95rem, 1.5vw, 1.2rem);
          font-weight: 700;
          color: white;
          margin: 0 0 0.5rem;
          text-shadow: 0 1px 4px rgba(0,0,0,0.4);
          line-height: 1.2;
        }
        .kult-glass-btn {
          display: inline-block;
          padding: 0.3rem 0.85rem;
          border-radius: 2rem;
          border: 1.5px solid rgba(255,255,255,0.6);
          color: white;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-shadow: 0 1px 3px rgba(0,0,0,0.3);
          background: rgba(255,255,255,0.08);
          transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .kult-card:hover .kult-glass-btn {
          background: rgba(255,255,255,0.22);
          border-color: rgba(255,255,255,0.9);
        }
        @media (max-width: 640px) {
          .kult-card {
            width: 78vw;
            height: 78vw;
          }
        }
      `}</style>

      <section style={{ paddingTop: '5rem', paddingBottom: '3rem', overflow: 'hidden' }}>
        {/* Heading */}
        <div style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1400px) / 2))', paddingBottom: '2rem' }}>
          <div ref={headingRef} className="kult-heading">
            <div style={{
              fontFamily: 'var(--sb-reg)',
              fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '0.6rem',
              marginBottom: '0.5rem',
              display: 'inline-block',
            }}>
              Unsere Küchen
            </div>
            <div style={{ color: 'var(--muted-color)', fontSize: '0.95rem' }}>
              Professionelle Raumgestaltung für Ihre Küche
            </div>
          </div>
        </div>

        {/* Draggable slider */}
        <div style={{ paddingLeft: 'max(1.5rem, calc((100vw - 1400px) / 2))' }}>
          <ul ref={sliderRef} className="kult-slider">
            {KITCHENS.map((k) => (
              <li key={k.slug} className="kult-card">
                <Link href={`/katalog/kuechen/${k.slug}`} draggable={false} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <img
                    src={k.img}
                    alt={k.name}
                    className="kult-card-img"
                    draggable={false}
                  />
                  <div className="kult-glass">
                    <h3 className="kult-glass-title">{k.name}</h3>
                    <span className="kult-glass-btn">Anfragen</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
