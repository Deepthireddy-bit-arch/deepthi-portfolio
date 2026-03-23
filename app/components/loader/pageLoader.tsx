'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './pageLoader.module.css'

export default function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const firstRef = useRef<HTMLSpanElement>(null)
  const lastRef = useRef<HTMLSpanElement>(null)
  const tagRef = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let ctx: any
      ; (async () => {
        const { gsap } = await import('gsap')

        ctx = gsap.context(() => {
          const tl = gsap.timeline()

          tl.fromTo(lineRef.current,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.55, ease: 'power3.inOut' },
            0
          )


          tl.fromTo(firstRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65, ease: 'power4.out' },
            0.3
          )


          tl.fromTo(lastRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65, ease: 'power4.out' },
            0.45
          )

          tl.fromTo(tagRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
            0.85
          )


          tl.fromTo(fillRef.current,
            { width: '0%' },
            { width: '100%', duration: 1.3, ease: 'power1.inOut' },
            0.9
          )


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


          tl.to({}, { duration: 0.3 })

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

      <div className={styles.dots} />


      <div className={styles.orb} />


      <div className={styles.content}>


        <div ref={lineRef} className={styles.line} />


        <div className={styles.nameWrap}>
          <span ref={firstRef} className={styles.nameFirst}>Doddipalli</span>
          <span ref={lastRef} className={styles.nameLast}>Deepthi</span>
        </div>


        <span ref={tagRef} className={styles.tag}>
          Frontend Developer &nbsp;·&nbsp; React &amp; Next.js
        </span>

        <div className={styles.progressWrap} ref={progressRef}>
          <div className={styles.progressTrack}>
            <div ref={fillRef} className={styles.progressFill} />
          </div>
          <span ref={countRef} className={styles.count}>0%</span>
        </div>

      </div>


      <span className={`${styles.corner} ${styles.cornerTL}`} />
      <span className={`${styles.corner} ${styles.cornerTR}`} />
      <span className={`${styles.corner} ${styles.cornerBL}`} />
      <span className={`${styles.corner} ${styles.cornerBR}`} />
    </div>
  )
}