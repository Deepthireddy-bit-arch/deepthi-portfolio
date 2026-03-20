'use client'
import { useEffect, useRef } from 'react'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      ctx = gsap.context(() => {
        // Staggered entrance
        gsap.fromTo(
          ['.hero-pill', '.hero-title', '.hero-sub', '.hero-btns', '.hero-stats'],
          { opacity: 0, y: -22 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: 'power3.out' }
        )
        // Orange line expands
        gsap.fromTo('.hero-line', { scaleX: 0, transformOrigin: 'left' }, {
          scaleX: 1, duration: 1, ease: 'power3.out', delay: 0.5
        })
        // Stat cards pop
        gsap.fromTo('.hero-stat', { opacity: 0, scale: 0.8 }, {
          opacity: 1, scale: 1, duration: 0.45, stagger: 0.09,
          ease: 'back.out(1.5)', delay: 0.6
        })
        // Subtle scroll indicator bounce
        gsap.to('.scroll-ind', {
          y: 6, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: -1
        })
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Pill */}
          <span className={`hero-pill ${styles.pill}`}>Frontend Engineer</span>

          {/* Title */}
          <h1 className={`hero-title ${styles.title}`}>
            Professional <br />
            <span>Experience</span>
          </h1>

          {/* Orange accent line */}
          <div className={`hero-line ${styles.line}`} />

          {/* Sub */}
          <p className={`hero-sub ${styles.sub}`}>
            Next.js · TypeScript · React · GSAP · 5+ Years building products people love
          </p>

          {/* Buttons */}
          <div className={`hero-btns ${styles.btns}`}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
              View Projects →
            </button>
            <button className={styles.btnOutline} onClick={() => scrollTo('tools')}>
              Tech Stack
            </button>
          </div>

          {/* Quick stats row */}
          <div className={`hero-stats ${styles.statsRow}`}>
            {[
              { val: '5+',  label: 'Years'     },
              { val: '20+', label: 'Projects'  },
              { val: '98',  label: 'Lighthouse'},
              { val: '3',   label: 'Companies' },
            ].map((s, i) => (
              <div key={i} className={`hero-stat ${styles.stat}`}>
                <div className={styles.statVal}>{s.val}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: decorative code block */}
        <div className={styles.codeBlock}>
          <div className={styles.codeBar}>
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
            <div className={styles.codeFilename}>experience.tsx</div>
          </div>
          <pre className={styles.code}>{`const developer = {
  name: "Yash Tupkar",
  role: "Frontend Engineer",
  stack: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind",
    "GSAP",
  ],
  lighthouse: 98,
  passion: "Building fast,
  accessible UIs",
}`}</pre>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`scroll-ind ${styles.scrollInd}`} onClick={() => scrollTo('tools')}>
        <span>↓</span>
      </div>
    </section>
  )
}
