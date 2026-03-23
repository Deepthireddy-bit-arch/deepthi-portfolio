'use client'
import { useEffect, useRef } from 'react'
import { TOOLS } from '../data/data'
import styles from './ToolsSection.module.css'

export default function ToolsSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo('.tools-heading', { opacity: 0, y: -24 }, {
          opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        })
        gsap.fromTo('.tools-grid-wrap', { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        })
        gsap.fromTo('.tool-cell', { opacity: 0, scale: 0.6, y: 20 }, {
          opacity: 1, scale: 1, y: 0, duration: 0.4,
          stagger: { amount: 0.9, from: 'start' },
          ease: 'back.out(1.7)', delay: 0.2,
          scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
        })
        gsap.to('.tools-wm', {
          y: -14, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1,
        })
        document.querySelectorAll<HTMLElement>('.tool-cell').forEach(el => {
          el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.12, duration: 0.22, ease: 'power2.out' }))
          el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1,    duration: 0.28, ease: 'power2.inOut' }))
        })
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 600px)').matches
    if (!isMobile || !ref.current) return

    const wrap  = ref.current.querySelector<HTMLElement>(`.${styles.gridWrap}`)
    const cells = ref.current.querySelectorAll<HTMLElement>('.tool-cell')

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

    if (wrap)  observer.observe(wrap)
    cells.forEach((c) => observer.observe(c))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className={styles.section} id="tools">
      <div className={styles.container}>

        <div className={`tools-heading ${styles.heading}`}>
          <h2 className={styles.title}>Tools & <span>Technologies</span></h2>
          <p className={styles.sub}>The code weapons I bring to every battle</p>
        </div>

        <div className={`tools-grid-wrap ${styles.gridWrap}`}>
          <div className={`tools-wm ${styles.watermark}`}>{'{ }'}</div>
          <div className={styles.grid}>
            {TOOLS.map(tool => (
              <div
                key={tool.name}
                className={`tool-cell ${styles.cell} ${tool.primary ? styles.primary : ''}`}
              >
                <div className={styles.icon} style={{ background: tool.bg, color: tool.color }}>
                  {tool.label}
                </div>
                <span className={styles.label}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}