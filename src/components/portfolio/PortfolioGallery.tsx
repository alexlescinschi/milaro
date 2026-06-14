'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

export default function PortfolioGallery({ images, title }: { images: string[]; title: string }) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)

  // ── Drag-to-scroll ──────────────────────────────────────────────────────────
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0
    let moved = false

    const onMouseDown = (e: MouseEvent) => {
      isDown = true; moved = false
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
      slider.style.cursor = 'grabbing'
    }
    const onMouseUp = () => { isDown = false; slider.style.cursor = 'grab' }
    const onMouseLeave = () => { isDown = false; slider.style.cursor = 'grab' }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 1.3
      if (Math.abs(walk) > 5) moved = true
      slider.scrollLeft = scrollLeft - walk
    }
    const onClickCapture = (e: MouseEvent) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false }
    }

    slider.addEventListener('mousedown', onMouseDown)
    slider.addEventListener('mouseup', onMouseUp)
    slider.addEventListener('mouseleave', onMouseLeave)
    slider.addEventListener('mousemove', onMouseMove)
    slider.addEventListener('click', onClickCapture, true)

    return () => {
      slider.removeEventListener('mousedown', onMouseDown)
      slider.removeEventListener('mouseup', onMouseUp)
      slider.removeEventListener('mouseleave', onMouseLeave)
      slider.removeEventListener('mousemove', onMouseMove)
      slider.removeEventListener('click', onClickCapture, true)
    }
  }, [])

  // ── Slider arrow scroll ─────────────────────────────────────────────────────
  const scrollSlider = (dir: 'prev' | 'next') => {
    const slider = sliderRef.current
    if (!slider) return
    const slide = slider.querySelector<HTMLDivElement>('.pg-slide')
    const slideW = slide ? slide.offsetWidth + 12 : 400
    slider.scrollBy({ left: dir === 'next' ? slideW : -slideW, behavior: 'smooth' })
  }

  // ── Lightbox keyboard navigation ────────────────────────────────────────────
  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevImg = useCallback(() => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null), [images.length])
  const nextImg = useCallback(() => setLightbox(i => i !== null ? (i + 1) % images.length : null), [images.length])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImg()
      if (e.key === 'ArrowRight') nextImg()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, closeLightbox, prevImg, nextImg])

  return (
    <>
      <style>{`
        .pg-wrap { position: relative; }
        .pg-slider {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          overflow-y: hidden;
          cursor: grab;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 0 max(1.5rem, calc((100vw - 1400px) / 2));
          padding-bottom: 4px;
        }
        .pg-slider::-webkit-scrollbar { display: none; }
        .pg-slide {
          flex-shrink: 0;
          width: calc((100vw - max(3rem, (100vw - 1400px))) / 2.5);
          height: clamp(280px, 48vh, 520px);
          border-radius: 0.9rem;
          overflow: hidden;
          cursor: zoom-in;
        }
        .pg-slide img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          pointer-events: none;
          transition: transform 0.4s ease;
        }
        .pg-slide:hover img { transform: scale(1.03); }

        .pg-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; padding: 0; z-index: 2;
          opacity: 0.85; transition: opacity 0.2s;
        }
        .pg-arrow:hover { opacity: 1; }
        .pg-arrow-prev { left: max(0.5rem, calc((100vw - 1400px) / 2 - 30px)); }
        .pg-arrow-next { right: 0.5rem; }

        /* Lightbox */
        .pg-lb {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(0,0,0,0.92);
          display: flex; align-items: center; justify-content: center;
          animation: pg-lb-in 0.2s ease;
        }
        @keyframes pg-lb-in { from { opacity: 0 } to { opacity: 1 } }
        .pg-lb-img {
          max-width: 90vw; max-height: 88vh;
          object-fit: contain; border-radius: 0.5rem;
          display: block;
          animation: pg-img-in 0.25s ease;
        }
        @keyframes pg-img-in { from { transform: scale(0.96); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .pg-lb-close {
          position: absolute; top: 1.25rem; right: 1.25rem;
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(255,255,255,0.12); border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 1.4rem; line-height: 1;
          transition: background 0.2s;
        }
        .pg-lb-close:hover { background: rgba(255,255,255,0.22); }
        .pg-lb-counter {
          position: absolute; bottom: 1.25rem; left: 50%; transform: translateX(-50%);
          color: rgba(255,255,255,0.6); font-size: 0.85rem; letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .pg-slide { width: 78vw; height: 56vw; }
          .pg-arrow-prev { left: 0.5rem; }
        }
      `}</style>

      {/* ── Slider ── */}
      <div className="pg-wrap">
        <button className="pg-arrow pg-arrow-prev" onClick={() => scrollSlider('prev')} aria-label="Vorherige">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
            <rect width="60" height="60" rx="30" fill="rgba(15,15,15,0.48)" opacity="0.4" />
            <path d="M7.707,2.01,8.132.735l2.55.85L10.256,2.86Zm2.55,16.126.425,1.275-2.55.85-.425-1.275Zm0-15.276C8.806,7.21,6.4,9.5,4.25,10.67a9.985,9.985,0,0,1-2.744,1.018,7.916,7.916,0,0,1-.871.132c-.108.01-.2.015-.261.018l-.081,0H.249s0,0,0-1.344,0-1.344,0-1.344H.257c.024,0,.069,0,.132-.009a5.237,5.237,0,0,0,.573-.088,7.3,7.3,0,0,0,2-.746c1.546-.843,3.506-2.588,4.744-6.3ZM.247,10.5c0-1.344,0-1.344,0-1.344H.293l.081,0c.065,0,.153.008.261.018a7.918,7.918,0,0,1,.87.132A9.984,9.984,0,0,1,4.25,10.326c2.149,1.172,4.556,3.459,6.007,7.81l-2.55.85c-1.237-3.712-3.2-5.457-4.744-6.3a7.3,7.3,0,0,0-2-.746,5.235,5.235,0,0,0-.573-.088c-.063-.006-.107-.008-.132-.009H.245S.247,11.841.247,10.5Z" transform="translate(24.542 19.502)" fill="#fff" />
          </svg>
        </button>

        <div ref={sliderRef} className="pg-slider">
          {images.map((src, i) => (
            <div key={i} className="pg-slide" onClick={() => setLightbox(i)}>
              <img src={src} alt={`${title} – ${i + 1}`} draggable={false} />
            </div>
          ))}
        </div>

        <button className="pg-arrow pg-arrow-next" onClick={() => scrollSlider('next')} aria-label="Nächste">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
            <g transform="translate(-317 -397)">
              <rect width="60" height="60" rx="30" transform="translate(317 397)" fill="rgba(15,15,15,0.48)" opacity="0.4" />
              <path d="M3.21,2.01,2.785.735l-2.55.85L.66,2.86ZM.66,18.135.235,19.41l2.55.85.425-1.275ZM.66,2.86C2.11,7.21,4.517,9.5,6.667,10.67A9.985,9.985,0,0,0,9.41,11.688a7.916,7.916,0,0,0,.871.132c.108.01.2.015.261.018l.081,0h.044s0,0,0-1.344,0-1.344,0-1.344H10.66c-.024,0-.069,0-.132-.009a5.237,5.237,0,0,1-.573-.088,7.3,7.3,0,0,1-2-.746C6.407,7.467,4.447,5.722,3.21,2.01ZM10.67,10.5c0-1.344,0-1.344,0-1.344h-.044l-.081,0c-.065,0-.153.008-.261.018a7.918,7.918,0,0,0-.87.132,9.984,9.984,0,0,0-2.744,1.018C4.517,11.5,2.11,13.785.66,18.135l2.55.85c1.237-3.712,3.2-5.457,4.744-6.3a7.3,7.3,0,0,1,2-.746,5.235,5.235,0,0,1,.573-.088c.063-.006.107-.008.132-.009h.011S10.67,11.841,10.67,10.5Z" transform="translate(341.542 416.502)" fill="#fff" />
            </g>
          </svg>
        </button>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="pg-lb" onClick={closeLightbox}>
          {/* Prev */}
          <button
            className="pg-arrow"
            style={{ position: 'fixed', left: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10000 }}
            onClick={e => { e.stopPropagation(); prevImg() }}
            aria-label="Vorherige"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
              <rect width="60" height="60" rx="30" fill="rgba(15,15,15,0.7)" />
              <path d="M7.707,2.01,8.132.735l2.55.85L10.256,2.86Zm2.55,16.126.425,1.275-2.55.85-.425-1.275Zm0-15.276C8.806,7.21,6.4,9.5,4.25,10.67a9.985,9.985,0,0,1-2.744,1.018,7.916,7.916,0,0,1-.871.132c-.108.01-.2.015-.261.018l-.081,0H.249s0,0,0-1.344,0-1.344,0-1.344H.257c.024,0,.069,0,.132-.009a5.237,5.237,0,0,0,.573-.088,7.3,7.3,0,0,0,2-.746c1.546-.843,3.506-2.588,4.744-6.3ZM.247,10.5c0-1.344,0-1.344,0-1.344H.293l.081,0c.065,0,.153.008.261.018a7.918,7.918,0,0,1,.87.132A9.984,9.984,0,0,1,4.25,10.326c2.149,1.172,4.556,3.459,6.007,7.81l-2.55.85c-1.237-3.712-3.2-5.457-4.744-6.3a7.3,7.3,0,0,0-2-.746,5.235,5.235,0,0,0-.573-.088c-.063-.006-.107-.008-.132-.009H.245S.247,11.841.247,10.5Z" transform="translate(24.542 19.502)" fill="#fff" />
            </svg>
          </button>

          {/* Image */}
          <img
            key={lightbox}
            src={images[lightbox]}
            alt={`${title} – ${lightbox + 1}`}
            className="pg-lb-img"
            onClick={e => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="pg-arrow"
            style={{ position: 'fixed', right: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10000 }}
            onClick={e => { e.stopPropagation(); nextImg() }}
            aria-label="Nächste"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
              <g transform="translate(-317 -397)">
                <rect width="60" height="60" rx="30" transform="translate(317 397)" fill="rgba(15,15,15,0.7)" />
                <path d="M3.21,2.01,2.785.735l-2.55.85L.66,2.86ZM.66,18.135.235,19.41l2.55.85.425-1.275ZM.66,2.86C2.11,7.21,4.517,9.5,6.667,10.67A9.985,9.985,0,0,0,9.41,11.688a7.916,7.916,0,0,0,.871.132c.108.01.2.015.261.018l.081,0h.044s0,0,0-1.344,0-1.344,0-1.344H10.66c-.024,0-.069,0-.132-.009a5.237,5.237,0,0,1-.573-.088,7.3,7.3,0,0,1-2-.746C6.407,7.467,4.447,5.722,3.21,2.01ZM10.67,10.5c0-1.344,0-1.344,0-1.344h-.044l-.081,0c-.065,0-.153.008-.261.018a7.918,7.918,0,0,0-.87.132,9.984,9.984,0,0,0-2.744,1.018C4.517,11.5,2.11,13.785.66,18.135l2.55.85c1.237-3.712,3.2-5.457,4.744-6.3a7.3,7.3,0,0,1,2-.746,5.235,5.235,0,0,1,.573-.088c.063-.006.107-.008.132-.009h.011S10.67,11.841,10.67,10.5Z" transform="translate(341.542 416.502)" fill="#fff" />
              </g>
            </svg>
          </button>

          {/* Close */}
          <button className="pg-lb-close" onClick={closeLightbox} aria-label="Schliessen">✕</button>

          {/* Counter */}
          <div className="pg-lb-counter">{lightbox + 1} / {images.length}</div>
        </div>
      )}
    </>
  )
}
