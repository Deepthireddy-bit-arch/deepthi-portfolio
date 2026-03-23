'use client'
import { useEffect, useRef } from 'react'
import { STATS } from '../data/data'
import styles from './stats.module.css'

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
      ; (async () => {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(['.st-pill', '.st-title', '.st-sub'], { opacity: 0, y: -20 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
          })
          gsap.fromTo('.stat-item', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
          })
          document.querySelectorAll<HTMLElement>('.stat-bar-fill').forEach(el => {
            const w = el.dataset.width || '0'
            gsap.fromTo(el, { width: '0%' }, {
              width: w + '%', duration: 1.4, ease: 'power3.out', delay: 0.3,
              scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
            })
          })
          document.querySelectorAll<HTMLElement>('.stat-counter').forEach(el => {
            const target = parseFloat(el.dataset.target || '0')
            const dec = el.dataset.dec === '1'
            gsap.fromTo({ v: 0 }, { v: target }, {
              duration: 1.6, ease: 'power2.out', delay: 0.3,
              onUpdate: function () {
                const v = this.targets()[0].v
                el.textContent = dec ? v.toFixed(1) : Math.round(v).toString()
              },
              scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
            })
          })
          document.querySelectorAll<HTMLElement>('.stat-item').forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(el, { y: -4, duration: 0.25, ease: 'power2.out' }))
            el.addEventListener('mouseleave', () => gsap.to(el, { y: 0, duration: 0.3, ease: 'power2.inOut' }))
          })
        }, ref)
      })()
    return () => ctx?.revert()
  }, [])

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 620px)').matches
    if (!isMobile || !ref.current) return

    const cards = ref.current.querySelectorAll<HTMLElement>('.stat-item')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement
            card.classList.add(styles.isVisible)


            const bar = card.querySelector<HTMLElement>('.stat-bar-fill')
            if (bar) {
              const w = bar.dataset.width || '0'
              bar.style.setProperty('--bar-w', `${w}%`)
              bar.classList.add(styles.isVisible)
            }

            observer.unobserve(card)
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  const barWidths = [98, 38, 100, 82]

  return (
    <section ref={ref} className={styles.section} id="stats">
      <div className={styles.container}>

        <div className={styles.headingRow}>
          <div>
            <span className={`st-pill ${styles.pill}`}>Results</span>
            <h2 className={`st-title ${styles.title}`}>Performance <span>Metrics</span></h2>
            <p className={`st-sub ${styles.sub}`}>Real numbers from production deliveries</p>
          </div>
          <div className={styles.bigNum}>{'{ }'}</div>
        </div>

        <div className={styles.grid}>
          {STATS.map((s, i) => (
            <div key={i} className={`stat-item ${styles.card}`}>
              <div className={styles.cardLeft}>
                <div className={styles.iconWrap}>{s.icon}</div>
                <div className={styles.numWrap}>
                  <span
                    className={`stat-counter ${styles.num}`}
                    data-target={s.targetNum}
                    data-dec={s.isDecimal ? '1' : '0'}
                  >
                    {s.value}
                  </span>
                  {s.unit && <span className={styles.unit}>{s.unit}</span>}
                </div>
              </div>

              <div className={styles.cardRight}>
                <div className={styles.mainLabel}>{s.mainLabel}</div>
                <div className={styles.subLabel}>{s.subLabel}</div>
                <div className={styles.barTrack}>
                  <div
                    className={`stat-bar-fill ${styles.barFill}`}
                    data-width={barWidths[i]}
                    style={{ width: barWidths[i] + '%' }}
                  />
                </div>
                <div className={styles.barLabel}>{barWidths[i]}%</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}