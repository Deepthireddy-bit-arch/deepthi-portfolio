'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './pageLoader.module.css'

export default function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef   = useRef<HTMLDivElement>(null)
  const lineRef     = useRef<HTMLDivElement>(null)
  const firstRef    = useRef<HTMLSpanElement>(null)
  const lastRef     = useRef<HTMLSpanElement>(null)
  const tagRef      = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const fillRef     = useRef<HTMLDivElement>(null)
  const countRef    = useRef<HTMLSpanElement>(null)
  const curtainRef  = useRef<HTMLDivElement>(null)

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')

      ctx = gsap.context(() => {
        const tl = gsap.timeline()

        // 1. Line draws in from center
        tl.fromTo(lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.55, ease: 'power3.inOut' },
          0
        )

        // 2. First name slides up
        tl.fromTo(firstRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: 'power4.out' },
          0.3
        )

        // 3. Last name slides up with slight delay — orange shimmer already in CSS
        tl.fromTo(lastRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: 'power4.out' },
          0.45
        )

        // 4. Tag line fades in
        tl.fromTo(tagRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
          0.85
        )

        // 5. Progress bar fills + counter counts to 100
        tl.fromTo(fillRef.current,
          { width: '0%' },
          { width: '100%', duration: 1.3, ease: 'power1.inOut' },
          0.9
        )

        // counter
        const counter = { v: 0 }
        tl.to(counter,
          {
            v: 100,
            duration: 1.3,
            ease: 'power1.inOut',
            onUpdate: () => {
              if (countRef.current)
                countRef.current.textContent = Math.round(counter.v) + '%'
            },
          },
          0.9
        )

        // 6. Brief hold at 100%
        tl.to({}, { duration: 0.3 })

        // 7. Curtain wipes up — reveals the site
        tl.to(loaderRef.current,
          {
            yPercent: -100,
            duration: 0.85,
            ease: 'power3.inOut',
            onComplete: () => {
              setVisible(false)
              onComplete?.()
            },
          }
        )

      }, loaderRef)
    })()

    return () => ctx?.revert()
  }, [onComplete])

  if (!visible) return null

  return (
    <div ref={loaderRef} className={styles.loader}>
      {/* Dot-grid texture */}
      <div className={styles.dots} />

      {/* Glow orb */}
      <div className={styles.orb} />

      {/* Centre content */}
      <div className={styles.content}>

        {/* Top line */}
        <div ref={lineRef} className={styles.line} />

        {/* Name */}
        <div className={styles.nameWrap}>
          <span ref={firstRef} className={styles.nameFirst}>Doddipalli</span>
          <span ref={lastRef}  className={styles.nameLast}>Deepthi</span>
        </div>

        {/* Tag line */}
        <span ref={tagRef} className={styles.tag}>
          Frontend Developer &nbsp;·&nbsp; React &amp; Next.js
        </span>

        {/* Progress */}
        <div className={styles.progressWrap} ref={progressRef}>
          <div className={styles.progressTrack}>
            <div ref={fillRef} className={styles.progressFill} />
          </div>
          <span ref={countRef} className={styles.count}>0%</span>
        </div>

      </div>

      {/* Corner marks */}
      <span className={`${styles.corner} ${styles.cornerTL}`} />
      <span className={`${styles.corner} ${styles.cornerTR}`} />
      <span className={`${styles.corner} ${styles.cornerBL}`} />
      <span className={`${styles.corner} ${styles.cornerBR}`} />
    </div>
  )
}