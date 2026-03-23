'use client'
import { useEffect, useRef } from 'react'
import styles from './Contributions.module.css'

const PHONES = [
  { src: '/assets/images/mgrpixel.jpg',    label: 'MGR' },
  { src: '/assets/images/image4.png', label: 'Office Building' },
  { src: '/assets/images/stem.jpg',     label: 'Stem Electronics' },
]

const CONTRIBUTIONS = [
  {
    tag: 'Frontend',
    tagColor: '#c2470c',
    tagBg: '#fff7ed',
    tagBorder: '#fdba74',
    title: 'Built and shipped 3 production features end-to-end',
    desc: 'Took full ownership of UI features from design handoff to deployment — handling component logic, API integration, and cross-browser testing independently.',
  },
  {
    tag: 'Performance',
    tagColor: '#1d4ed8',
    tagBg: '#eff6ff',
    tagBorder: '#bfdbfe',
    title: 'Reduced page load time by 35% on the dashboard',
    desc: 'Identified and fixed redundant re-renders and unoptimised asset loading — improving LCP from 4.1s to 2.6s measured in production.',
  },
  {
    tag: 'Components',
    tagColor: '#15803d',
    tagBg: '#f0fdf4',
    tagBorder: '#bbf7d0',
    title: 'Contributed 8 reusable components to the design system',
    desc: 'Built accessible, well-documented UI components now used across two internal products — reduced duplicate code by roughly 20% in the shared codebase.',
  },
  {
    tag: 'Bug Fixes',
    tagColor: '#7e22ce',
    tagBg: '#fdf4ff',
    tagBorder: '#e9d5ff',
    title: 'Resolved 40+ reported bugs in the first 6 months',
    desc: 'Consistently picked up and closed high-priority bug tickets — including a tricky race condition in the auth flow that had been open for 3 sprints.',
  },
]

export default function ContributionsSection() {
  const ref = useRef<HTMLElement>(null)

  // ── GSAP animations (desktop) ──────────────────────────────────────────────
  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(['.ct-pill', '.ct-title', '.ct-sub'], { opacity: 0, y: -20 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        })
        gsap.fromTo('.ct-phone', { opacity: 0, y: 50, scale: 0.92 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        })
        gsap.to('.ct-phone:nth-child(odd)',  { y: -12, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1 })
        gsap.to('.ct-phone:nth-child(even)', { y:  12, duration: 3.1, ease: 'sine.inOut', yoyo: true, repeat: -1 })
        gsap.fromTo('.ct-card', { opacity: 0, x: 40 }, {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
        })
        document.querySelectorAll<HTMLElement>('.ct-card').forEach(el => {
          el.addEventListener('mouseenter', () => gsap.to(el, { x: 5, duration: 0.22, ease: 'power2.out' }))
          el.addEventListener('mouseleave', () => gsap.to(el, { x: 0,  duration: 0.28, ease: 'power2.inOut' }))
        })
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 820px)').matches
    if (!isMobile) return

    const targets = ref.current?.querySelectorAll<HTMLElement>(
      `.${styles.phone}, .${styles.card}`
    )
    if (!targets?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible)
            observer.unobserve(entry.target) 
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className={styles.section} id="contributions">
      <div className={styles.container}>

        <div className={styles.heading}>
          <h2 className={`ct-title ${styles.title}`}>Key <span>Contributions</span></h2>
          <p className={`ct-sub ${styles.sub}`}>What I shipped and the difference it made</p>
        </div>

        <div className={styles.layout}>

         
          <div className={styles.phones}>
            {PHONES.map((p, i) => (
              <div key={i} className={`ct-phone ${styles.phone}`}>
                <div className={styles.phoneTopBar} />
                <div className={styles.phoneImgWrap}>
                  <img src={p.src} alt={p.label} />
                </div>
                <div className={styles.phoneOverlay}>
                  <span>{p.label}</span>
                </div>
              </div>
            ))}
          </div>

         
          <div className={styles.cards}>
            {CONTRIBUTIONS.map((c, i) => (
              <div key={i} className={`ct-card ${styles.card}`}>
                <span
                  className={styles.tag}
                  style={{
                    background: c.tagBg,
                    color: c.tagColor,
                    borderColor: c.tagBorder,
                  }}
                >
                  {c.tag}
                </span>
                <div className={styles.cardText}>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <div className={styles.cardDesc}>{c.desc}</div>
                </div>
                <div className={styles.cardAccent} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}