'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './GallerySection.module.css'

type FilterKey = 'all' | 'web' | 'mobile' | 'dashboard' | 'fintech'

interface MosaicCell {
  image: string
  label: string
  category: FilterKey
  isVideo?: boolean
  textOverlay?: string
  spanClass?: string
  row: 1 | 2
}

const CELLS: MosaicCell[] = [
  { row: 1, image: '/images/learnexa.png',    label: 'Watch Demo',    category: 'web',       isVideo: true },
  { row: 1, image: '/images/app-screens.png', label: 'Task App',      category: 'mobile'    },
  { row: 1, image: '/images/learnexa.png',    label: 'Dashboard',     category: 'dashboard', textOverlay: 'stories\nthat sell' },
  { row: 1, image: '/images/app-screens.png', label: 'Loan Portal',   category: 'fintech'   },
  { row: 1, image: '/images/learnexa.png',    label: 'Quiz Platform', category: 'web'       },
  { row: 2, image: '/images/app-screens.png', label: 'IoT UI',        category: 'web',       spanClass: 'spanSm' },
  { row: 2, image: '/images/learnexa.png',    label: 'Mobile App',    category: 'mobile',    spanClass: 'spanMd' },
  { row: 2, image: '/images/app-screens.png', label: 'Happiness App', category: 'mobile',    spanClass: 'spanLg' },
  { row: 2, image: '/images/learnexa.png',    label: 'Announcement',  category: 'web',       spanClass: 'spanXs',
    textOverlay: "WE'RE\nHAVING A\nBABY" },
]

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all',       label: 'All'       },
  { key: 'web',       label: 'Web App'   },
  { key: 'mobile',    label: 'Mobile'    },
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'fintech',   label: 'Fintech'   },
]

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState<FilterKey>('all')

  // ── GSAP animations (desktop) ──────────────────────────────────────────────
  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(
          ['.g-pill', '.g-title', '.g-sub'],
          { opacity: 0, y: -18 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true } }
        )
        gsap.fromTo('.g-filter', { opacity: 0, scale: 0.85 }, {
          opacity: 1, scale: 1, duration: 0.4, stagger: 0.07,
          ease: 'back.out(1.4)', delay: 0.2,
          scrollTrigger: { trigger: ref.current, start: 'top 83%', once: true },
        })
        gsap.fromTo('.mosaic-cell', { opacity: 0, scale: 0.93 }, {
          opacity: 1, scale: 1, duration: 0.55,
          stagger: { amount: 0.7, from: 'start' },
          ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        })
        document.querySelectorAll<HTMLElement>('.mosaic-cell').forEach(el => {
          const img = el.querySelector<HTMLImageElement>('img')
          if (!img) return
          el.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.07, duration: 0.45, ease: 'power2.out' }))
          el.addEventListener('mouseleave', () => gsap.to(img, { scale: 1, duration: 0.5, ease: 'power2.inOut' }))
        })
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  // ── Mobile: IntersectionObserver adds .isVisible to each cell ─────────────
  // CSS handles the staggered fade-up via transition-delay on nth-child.
  // GSAP is not used on mobile — no heavy animation library needed.
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 720px)').matches
    if (!isMobile) return

    const cells = ref.current?.querySelectorAll<HTMLElement>('.mosaic-cell')
    if (!cells?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    cells.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [filter]) // re-observe when filter changes

  const row1 = CELLS.filter(c => c.row === 1)
  const row2 = CELLS.filter(c => c.row === 2)
  const isVisible = (cell: MosaicCell) => filter === 'all' || cell.category === filter

  return (
    <section ref={ref} className={styles.section} id="gallery">
      <div className={styles.container}>

        <div className={styles.heading}>
          <span className={`g-pill ${styles.pill}`}>Showcase</span>
          <h2 className={`g-title ${styles.title}`}>Project <span>Gallery</span></h2>
          <p className={`g-sub ${styles.sub}`}>Screenshots from shipped products and experiments</p>
        </div>

        <div className={styles.filters}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`g-filter ${styles.filterBtn} ${filter === f.key ? styles.filterActive : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.mosaic}>

          {/* ROW 1: 5 equal */}
          <div className={styles.row1}>
            {row1.map((cell, i) => (
              <div
                key={i}
                className={`mosaic-cell ${styles.cell} ${styles.cellR1} ${!isVisible(cell) ? styles.dimmed : ''}`}
              >
                <img src={cell.image} alt={cell.label} className={styles.img} />
                {cell.isVideo && <div className={styles.playBtn} />}
                {cell.textOverlay && (
                  <div className={styles.screenText}>
                    {cell.textOverlay.split('\n').map((l, j) => <span key={j}>{l}</span>)}
                  </div>
                )}
                <div className={styles.hover}>
                  <span className={styles.hoverLabel}>{cell.label}</span>
                </div>
                <span className={styles.badge}>{cell.category}</span>
                <div className={styles.bottomBar} />
              </div>
            ))}
          </div>

          {/* ROW 2: 4 cells uneven */}
          <div className={styles.row2}>
            {row2.map((cell, i) => (
              <div
                key={i}
                className={`mosaic-cell ${styles.cell} ${styles.cellR2} ${cell.spanClass ? styles[cell.spanClass as keyof typeof styles] : ''} ${!isVisible(cell) ? styles.dimmed : ''}`}
              >
                <img src={cell.image} alt={cell.label} className={styles.img} />
                {cell.textOverlay && (
                  <div className={styles.boxOverlay}>
                    <div className={styles.boxCard}>
                      {cell.textOverlay.split('\n').map((l, j) => <span key={j}>{l}</span>)}
                    </div>
                  </div>
                )}
                <div className={styles.hover}>
                  <span className={styles.hoverLabel}>{cell.label}</span>
                </div>
                <span className={styles.badge}>{cell.category}</span>
                <div className={styles.bottomBar} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}