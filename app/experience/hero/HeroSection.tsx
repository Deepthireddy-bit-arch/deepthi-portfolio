'use client'
import { useEffect, useRef } from 'react'
import styles from './HeroSection.module.css'

const STATS = [
  { val: '1+', label: 'Years of Experience' },
  { val: '20+', label: 'Reusable Components' },
  { val: '1', label: 'End-to-End Dashboard' },
  { val: '3+', label: 'Production Releases' },
]

const STACK = ['React', 'Next.js', 'Tailwind', 'REST APIs']

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // ── GSAP (desktop) ────────────────────────────────────────────────────────
  useEffect(() => {
    let ctx: any
      ; (async () => {
        const { gsap } = await import('gsap')
        ctx = gsap.context(() => {
          gsap.fromTo('.hero-card', { opacity: 0, y: -22 }, {
            opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          })
          gsap.fromTo('.hero-stat', { opacity: 0, scale: 0.85 }, {
            opacity: 1, scale: 1, duration: 0.4, stagger: 0.09,
            ease: 'back.out(1.5)', delay: 0.35,
          })
          gsap.to('.scroll-ind', {
            y: 6, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: -1,
          })
        }, ref)
      })()
    return () => ctx?.revert()
  }, [])

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 760px)').matches
    if (!isMobile || !ref.current) return

    const card = ref.current.querySelector<HTMLElement>(`.${styles.card}`)
    const tiles = ref.current.querySelectorAll<HTMLElement>(`.${styles.statTile}`)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    if (card) observer.observe(card)
    tiles.forEach((t) => observer.observe(t))

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.container}>

        <div ref={cardRef} className={`hero-card ${styles.card}`}>

          <div className={styles.cardBanner}>
            <div className={styles.avatar}>D</div>
            <div className={styles.bannerText}>
              <div className={styles.bannerName}>Deepthi</div>
              <div className={styles.bannerRole}>React Developer</div>
            </div>
            <div className={styles.statusPill}>
              <span className={styles.statusDot} />
              Open to work
            </div>
          </div>

          <div className={styles.cardBody}>

            <div className={styles.companyRow}>
              <div className={styles.companyIcon}>🏢</div>
              <div>
                <div className={styles.companyName}>Aim Window Info Tech</div>
                <div className={styles.companyPeriod}>Feb 2025 – Present</div>
              </div>
              <span className={styles.companyBadge}>Current</span>
            </div>

            <p className={styles.quote}>
              1 year of hands-on frontend experience crafting modern web interfaces,
              reusable components, and seamless user experiences across projects.
            </p>

            <div className={styles.statGrid}>
              {STATS.map((s, i) => (
                <div key={i} className={`hero-stat ${styles.statTile}`}>
                  <div className={styles.statVal}>{s.val}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.cardFooter}>
              <a href="https://aimwindow.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                ↗ aimwindow.com
              </a>
              <div className={styles.footerStack}>
                {STACK.map((s, i) => (
                  <span key={i} className={styles.stackChip}>{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.codeBar}>
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
            <div className={styles.codeFilename}>about.tsx</div>
          </div>
          <pre className={styles.code}>{`const developer = {
  name: "Deepthi",
  role: "React Developer",
  experience: "1 year",
  stack: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Next js",
    "REST APIs",
  ],
  currentlyAt: "Aim Window Info Tech",
  focus: "Clean UIs &
  responsive dashboards",
  status: "Open to work",
}`}</pre>
        </div>

      </div>


      <div className={`scroll-ind ${styles.scrollInd}`} onClick={() => scrollTo('tools')}>
        <span>↓</span>
      </div>
    </section>
  )
}