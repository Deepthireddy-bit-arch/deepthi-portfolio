'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './CompanyDetails.module.css'

interface Company {
  id: string
  logo: string
  logoColor: string
  accentColor: string
  name: string
  nameHighlight: string
  role: string
  period: string
  location: string
  type: string
  about: string
  website: string
  images: { src: string; label: string }[]
  stack: string[]
  timeline: {
    date: string
    title: string
    desc: string
    stats?: string[]
    open?: boolean
  }[]
}

const COMPANIES: Company[] = [
  {
    id: 'aimwindow',
    logo: 'AIM',
    logoColor: '#F97316',
    accentColor: '#F97316',
    name: 'AIM WINDOW INFO TECH',
    nameHighlight: 'Pvt. Ltd.',
    role: 'React Developer',
    period: 'FEB 2025 – Present',
    location: 'Bengaluru, India',
    type: 'Product Startup',
    about:
      'Aim Window is a growing product startup building web applications for business clients. I joined as a frontend developer working closely with the backend team — consuming REST APIs, translating Figma designs into pixel-perfect React interfaces, and owning the UI end-to-end.',
    website: 'veritas.com',
    images: [
      { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80', label: 'Dashboard' },
      { src: 'https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=400&q=80', label: 'Components' },
      { src: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&q=80', label: 'Responsive' },
      { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80', label: 'Team' },
      { src: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&q=80', label: 'Codebase' },
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Redux', 'CSS', 'REST APIs'],
    timeline: [
      {
        date: 'Jan 2024 · Joined',
        title: 'Onboarded as the frontend developer',
        desc: 'Picked up an existing Next.js + TypeScript codebase. Spent the first few weeks understanding the project structure and API contracts.',
      },
      {
        date: 'Feb – Apr 2024 · UI Build',
        title: 'Built reusable React components with Tailwind & Bootstrap',
        desc: 'Forms, tables, modals, dropdowns — all typed with TypeScript and styled consistently across the app.',
        stats: ['~25 components', 'TypeScript + Tailwind'],
      },
      {
        date: 'May 2024 · API Integration',
        title: 'Integrated REST APIs across the dashboard & admin panel',
        desc: 'Connected frontend views to backend endpoints — handled loading states, error boundaries, and data normalisation on the client side.',
        stats: ['REST APIs', 'Redux state management'],
      },
      {
        date: 'Jul 2024 · Responsive',
        title: 'Made the full app mobile-responsive',
        desc: 'The product was desktop-only. Rebuilt layouts using Tailwind breakpoints and Bootstrap grid to support all screen sizes.',
      },
      {
        date: 'Present · Ongoing',
        title: 'Improving code quality & working on performance',
        desc: 'Cleaning up legacy JavaScript to TypeScript, reducing re-renders, and writing cleaner component patterns.',
        open: true,
      },
    ],
  },
]

export default function CompanyDetailsSection() {
  const ref     = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const company = COMPANIES[active]

  // ── GSAP animations (desktop) ──────────────────────────────────────────────
  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(
          ['.cd-pill', '.cd-main-title', '.cd-main-sub'],
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true } }
        )
        gsap.fromTo(
          '.co-tab',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.09, ease: 'back.out(1.4)',
            scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true } }
        )
        animateIn()
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  // ── Mobile: IntersectionObserver fade-up for the panel ────────────────────
  // CSS handles the actual transition (.panel → .panel.isVisible).
  // This just adds/removes the class when the panel enters the viewport.
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 760px)').matches
    if (!isMobile || !panelRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          panelRef.current?.classList.add(styles.isVisible)
          observer.disconnect() // once only
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(panelRef.current)
    return () => observer.disconnect()
  }, [active]) // re-run when active company changes

  const animateIn = async () => {
    const { gsap } = await import('gsap')
    gsap.fromTo('.cd-panel', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
    gsap.fromTo('.cd-img-item', { opacity: 0, scale: 0.93 }, { opacity: 1, scale: 1, duration: 0.45, stagger: 0.08, ease: 'back.out(1.4)' })
    gsap.fromTo('.cd-tl-event', { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: 0.35, stagger: 0.07, ease: 'power2.out', delay: 0.1 })
  }

  const handleSwitch = async (i: number) => {
    const { gsap } = await import('gsap')
    // reset isVisible so the observer can re-trigger for the new panel
    panelRef.current?.classList.remove(styles.isVisible)
    gsap.to('.cd-panel', {
      opacity: 0, y: 8, duration: 0.18, ease: 'power2.in',
      onComplete: () => { setActive(i); setTimeout(animateIn, 10) },
    })
  }

  return (
    <section ref={ref} className={styles.section} id="company">
      <div className={styles.container}>

        {/* Panel */}
        <div ref={panelRef} className={`cd-panel ${styles.panel}`}>

          {/* Background monogram */}
          <div className={styles.bgMono} style={{ color: company.accentColor }}>{company.logo}</div>

          {/* Top row: name + logo */}
          <div className={styles.topRow}>
            <div className={styles.coIdentity}>
              <div className={styles.eyebrow} style={{ color: company.accentColor }}>
                <span className={styles.eyebrowLine} style={{ background: company.accentColor }} />
                Frontend Development
              </div>
              <div className={styles.coName}>
                {company.name}{' '}
                <em className={styles.coNameHighlight} style={{ color: company.accentColor }}>
                  {company.nameHighlight}
                </em>
              </div>
              <div className={styles.coRole}>{company.role} &nbsp;·&nbsp; {company.period}</div>
            </div>
            <div className={styles.logoSide}>
              <div
                className={styles.logoBox}
                style={{ background: company.logoColor, boxShadow: `0 8px 24px ${company.logoColor}44` }}
              >
                <div className={styles.logoRing} style={{ borderColor: company.accentColor + '44' }} />
                {company.logo}
              </div>
              {company.id === 'veritas' && <span className={styles.liveChip}>● Current</span>}
            </div>
          </div>

          {/* Gradient HR */}
          <div
            className={styles.hr}
            style={{ background: `linear-gradient(90deg,${company.accentColor} 0%,${company.accentColor}55 30%,#ede9e4 80%,transparent 100%)` }}
          />

          {/* About */}
          <div className={styles.aboutWrap}>
            <div className={styles.sectionLabel}>About</div>
            <p className={styles.aboutText} style={{ borderLeftColor: company.accentColor + '66' }}>
              {company.about}
            </p>
          </div>

          {/* Image strip */}
          <div className={styles.sectionLabel}>Work snapshots</div>
          <div className={styles.imgStrip}>
            <div className={`cd-img-item ${styles.imgMain}`}>
              <img src={company.images[0].src} alt={company.images[0].label} />
              <div className={styles.imgOverlay} />
              <span className={styles.imgTag}>{company.images[0].label}</span>
            </div>
            <div className={styles.imgSmallCol}>
              {company.images.slice(1, 3).map((img, i) => (
                <div key={i} className={`cd-img-item ${styles.imgSm}`}>
                  <img src={img.src} alt={img.label} />
                  <div className={styles.imgOverlay} />
                  <span className={styles.imgTag}>{img.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.imgSmallCol}>
              {company.images.slice(3, 5).map((img, i) => (
                <div key={i} className={`cd-img-item ${styles.imgSm}`}>
                  <img src={img.src} alt={img.label} />
                  <div className={styles.imgOverlay} />
                  <span className={styles.imgTag}>{img.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className={styles.stackWrap}>
            <div className={styles.sectionLabel}>Technologies</div>
            <div className={styles.stackGrid}>
              {company.stack.map((s) => (
                <span
                  key={s}
                  className={styles.sPill}
                  style={{ borderColor: company.accentColor + '55', color: company.accentColor, background: company.accentColor + '12' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <a href={`https://${company.website}`} className={styles.ftLink} style={{ color: company.accentColor }} target="_blank" rel="noopener noreferrer">
              ↗ {company.website}
            </a>
            <div className={styles.ftChips}>
              <span className={styles.ftChip}>{company.type}</span>
              <span className={styles.ftChip}>{company.location}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}