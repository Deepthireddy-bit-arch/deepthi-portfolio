'use client'
import { useEffect, useRef } from 'react'
import { CONTRIBUTIONS } from '../data/data'
import styles from './Contributions.module.css'

const PHONES = [
  { src: '/images/app-screens.png', label: 'Task App',      offset: 0  },
  { src: '/images/learnexa.png',    label: 'Quiz Platform', offset: 32 },
  { src: '/images/app-screens.png', label: 'Happiness App', offset: 0  },
]

export default function ContributionsSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(['.ct-pill', '.ct-title', '.ct-sub'], { opacity: 0, y: -20 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true }
        })
        // Phone panels float in
        gsap.fromTo('.ct-phone', { opacity: 0, y: 50, scale: 0.92 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true }
        })
        // Continuous float — alternating up/down
        gsap.to('.ct-phone:nth-child(odd)', { y: -12, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1 })
        gsap.to('.ct-phone:nth-child(even)', { y: 12,  duration: 3.1, ease: 'sine.inOut', yoyo: true, repeat: -1 })

        // Right-side cards slide in
        gsap.fromTo('.ct-card', { opacity: 0, x: 40 }, {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true }
        })
        // Hover translate on cards
        document.querySelectorAll<HTMLElement>('.ct-card').forEach(el => {
          el.addEventListener('mouseenter', () => gsap.to(el, { x: 5, duration: 0.22, ease: 'power2.out' }))
          el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, duration: 0.28, ease: 'power2.inOut' }))
        })

        // Banner
        gsap.fromTo('.ct-banner', { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: '.ct-banner', start: 'top 90%', once: true }
        })
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={ref} className={styles.section} id="contributions">
      <div className={styles.container}>

        <div className={styles.heading}>
          <span className={`ct-pill ${styles.pill}`}>Impact</span>
          <h2 className={`ct-title ${styles.title}`}>Key <span>Contributions</span></h2>
          <p className={`ct-sub ${styles.sub}`}>What I shipped and the difference it made</p>
        </div>

        <div className={styles.layout}>

          {/* ── LEFT: Wider phone panels — NO bullet points ── */}
          <div className={styles.phones}>
            {PHONES.map((p, i) => (
              <div
                key={i}
                className={`ct-phone ${styles.phone}`}
                style={{ marginTop: p.offset }}
              >
                <div className={styles.phoneTopBar} />
                <img src={p.src} alt={p.label} />
                <div className={styles.phoneOverlay}>
                  <span>{p.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Contribution cards — NO bullet points, clean card blocks ── */}
          <div className={styles.cards}>
            {CONTRIBUTIONS.map((c, i) => (
              <div key={i} className={`ct-card ${styles.card}`}>
                {/* Tag chip */}
                <span
                  className={styles.tag}
                  style={{
                    background: c.tagColor + '18',
                    color: c.tagColor,
                    borderColor: c.tagColor + '40',
                  }}
                >
                  {c.tag}
                </span>
                {/* Text block — NO list, just heading + paragraph */}
                <div className={styles.cardText}>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <div className={styles.cardDesc}>{c.desc}</div>
                </div>
                {/* Orange right accent line */}
                <div className={styles.cardAccent} />
              </div>
            ))}
          </div>

        </div>

        {/* Award banner */}
        <div className={`ct-banner ${styles.banner}`}>
          <span className={styles.bannerIcon}>🏆</span>
          <div className={styles.bannerText}>
            <strong>Internal Excellence Award Q3 2023.</strong>
            {' '}Dashboard engagement +28%, bounce rate –19%, Lighthouse 61→94.
            Featured in company all-hands as flagship delivery of the year.
          </div>
        </div>

      </div>
    </section>
  )
}
