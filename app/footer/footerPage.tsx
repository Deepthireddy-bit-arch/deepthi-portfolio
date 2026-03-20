'use client'
import { useEffect, useRef } from 'react'
import styles from './footer.module.css'

const LINKS = {
  'Use Cases': ['Writing Portfolio', 'Journalists', 'Copywriters', 'Photographers', 'Artists', 'Designers', 'Creative Writers', 'Videographers'],
  'Explore':   ['Features', 'Pricing', 'Blog', 'Press Resources', 'Example Portfolios', 'Directory', 'Themes', 'Referral Partners'],
  'Support':   ['FAQ', 'Help Docs', 'Email Us', 'Chat with us', 'Feature Request', 'Change Log', 'Leave a Review', 'Status Page'],
}

const SOCIALS = [
  { icon: 'f', label: 'Facebook',  href: '#' },
  { icon: 't', label: 'Twitter',   href: '#' },
  { icon: 'in',label: 'LinkedIn',  href: '#' },
  { icon: '📷',label: 'Instagram', href: '#', emoji: true },
  { icon: '▶', label: 'YouTube',   href: '#', emoji: true },
]

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo('.footer-cta', { opacity: 0, x: -30 }, {
          opacity: 1, x: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true }
        })
        gsap.fromTo('.footer-col', { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true }
        })
        gsap.fromTo('.social-btn', { opacity: 0, scale: 0.7 }, {
          opacity: 1, scale: 1, duration: 0.4, stagger: 0.07, ease: 'back.out(1.6)', delay: 0.3,
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true }
        })
        // Hover on social buttons
        document.querySelectorAll<HTMLElement>('.social-btn').forEach(el => {
          el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.15, duration: 0.2, ease: 'power2.out' }))
          el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, duration: 0.25, ease: 'power2.inOut' }))
        })
        // Hover on CTA button
        const btn = document.querySelector('.cta-btn-primary')
        if (btn) {
          btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.04, duration: 0.2 }))
          btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.25 }))
        }
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  return (
    <footer ref={ref} className={styles.footer}>
      {/* Main footer content */}
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.inner}>

            {/* LEFT — CTA + social — exactly Image 4 */}
            <div className={`footer-cta ${styles.cta}`}>
              <h2 className={styles.ctaTitle}>
                Create your portfolio.
              </h2>
              <p className={styles.ctaSub}>Have a question? Chat with us anytime.</p>

              <div className={styles.ctaBtns}>
                <button className={`cta-btn-primary ${styles.btnPrimary}`}>Get Started</button>
                <button className={styles.btnOutline}>Chat to us</button>
              </div>

              {/* Social icons — circular, orange like Image 4 */}
              <div className={styles.socials}>
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className={`social-btn ${styles.social}`}
                    aria-label={s.label}
                  >
                    {s.emoji ? s.icon : <span>{s.icon}</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — 3 link columns — exactly Image 4 */}
            <div className={styles.cols}>
              {Object.entries(LINKS).map(([heading, links]) => (
                <div key={heading} className={`footer-col ${styles.col}`}>
                  <div className={styles.colHeading}>{heading}</div>
                  <ul className={styles.linkList}>
                    {links.map(link => (
                      <li key={link}>
                        <a href="#" className={styles.link}>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar — exactly Image 4 */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <div className={styles.bottomLinks}>
              {['Terms of Service', 'Privacy Policy', 'Acceptable Use Policy', 'Cookie Policy', 'Cancellation Policy'].map(l => (
                <a key={l} href="#" className={styles.bottomLink}>{l}</a>
              ))}
            </div>
            <div className={styles.lang}>
              Language:{' '}
              <select className={styles.langSelect}>
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
