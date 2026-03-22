'use client'
import { useEffect, useRef } from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import {    FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope
} from "react-icons/fa";
// const LINKS = {
//   Portfolio: ['About Me', 'Projects', 'Experience', 'Skills', 'Contributions', 'Tools I Use'],
//   Work: ['React Projects', 'UI Components', 'Dashboards', 'Mobile Apps', 'Open Source', 'Case Studies'],
//   Contact: ['Email Me', 'LinkedIn', 'GitHub', 'Resume / CV', 'Schedule a Call'],
// }
const LINKS = {
  // Portfolio: [
  //   { label: 'About Me', href: '/about', icon: <FaUser /> },
  //   { label: 'Projects', href: '/projects', icon: <FaProjectDiagram /> },
  //   { label: 'Experience', href: '/experience', icon: <FaBriefcase /> },
  //   { label: 'Skills', href: '/skills', icon: <FaTools /> },
  // ],
 
  Portfolio: [
    { label: 'Home', href: '/', icon: <FaHome /> },
    { label: 'About', href: '/about', icon: <FaUser /> },
    { label: 'Skills', href: '/skills', icon: <FaTools /> },
    { label: 'Experience', href: '/experience', icon: <FaBriefcase /> },
    { label: 'Projects', href: '/projects', icon: <FaProjectDiagram /> },
    { label: 'Resume', href: '/resume', icon: <FaFileAlt /> },
    { label: 'Contact', href: '/contact', icon: <FaEnvelope /> },
  ],
  Work: [
    { label: 'React Projects', href: '/projects', icon: <FaProjectDiagram /> },
    { label: 'UI Components', href: '/projects', icon: <FaTools /> },
    { label: 'Dashboards', href: '/projects', icon: <FaProjectDiagram /> },
  ],
  Contact: [
    { label: 'Email Me', href: 'mailto:doddipallideepthi111@gmail.com', icon: <FaEnvelope /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/doddipalli-deepthi-16b031256', icon: <FaLinkedin /> },
    { label: 'GitHub', href: 'https://github.com/Deepthireddy-bit-arch', icon: <FaGithub /> },
  ],
}

const SOCIALS = [
  { icon: 'Gh', label: 'GitHub', href: 'https://github.com/Deepthireddy-bit-arch' },
  { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/doddipalli-deepthi-16b031256' },
    { icon: '@', label: 'Email', href: 'mailto:doddipallideepthi111@gmail.com' },

]

const BOTTOM_LINKS = ['Privacy Policy', 'Terms of Use', 'Cookie Policy']

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
      ; (async () => {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo('.footer-cta', { opacity: 0, x: -30 }, {
            opacity: 1, x: 0, duration: 0.65, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
          })
          gsap.fromTo('.footer-col', { opacity: 0, y: 20 }, {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 0.15,
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
          })
          gsap.fromTo('.social-btn', { opacity: 0, scale: 0.7 }, {
            opacity: 1, scale: 1, duration: 0.4, stagger: 0.07,
            ease: 'back.out(1.6)', delay: 0.3,
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
          })
          document.querySelectorAll<HTMLElement>('.social-btn').forEach(el => {
            el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.15, y: -2, duration: 0.2, ease: 'power2.out' }))
            el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, y: 0, duration: 0.25, ease: 'power2.inOut' }))
          })
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

      {/* Orange top accent bar */}
      <div className={styles.accent} />

      {/* Main content */}
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.inner}>

            {/* LEFT — brand + CTA + socials */}
            <div className={`footer-cta ${styles.cta}`}>
              <div className={styles.brandRow}>
                <div className={styles.brandDot}>D</div>
                <div className={styles.brandName}>doddipallideepthi111@gmail.com</div>
              </div>

              <h2 className={styles.ctaTitle}>
                Let's build something<br />
                <span>great together.</span>
              </h2>
              <p className={styles.ctaSub}>
                Open to full-time roles and freelance projects.<br />
                Have a question? Chat with me anytime.
              </p>

              <div className={styles.ctaBtns}>
                <Link href="/contact">
                <button className={`cta-btn-primary ${styles.btnPrimary}`}>Hire Me</button>
                </Link>
               <Link href="/projects">
  <button className={styles.btnOutline}>
    View Work
  </button>
</Link>
              </div>

              <div className={styles.socials}>
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                          target="_blank"

                    className={`social-btn ${styles.social}`}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — 3 link columns */}
            <div className={styles.cols}>
              {Object.entries(LINKS).map(([heading, links]) => (
                <div key={heading} className={`footer-col ${styles.col}`}>
                  <div className={styles.colHeading}>{heading}</div>
                  <ul className={styles.linkList}>
                   {links.map(link => (
  <li key={link.label}>
    <a href={link.href} className={styles.link}>
      <span style={{ marginRight: "8px", display: "inline-flex" }}>
        {link.icon}
      </span>
      {link.label}
    </a>
  </li>
))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <div className={styles.bottomLeft}>
              <div className={styles.copyright}>
                © 2026 <span>Deepthi</span>. Built with  Next.js
              </div>
              {/* <div className={styles.bottomLinks}>
                {BOTTOM_LINKS.map(l => (
                  <a key={l} href="#" className={styles.bottomLink}>{l}</a>
                ))}
              </div> */}
            </div>
            <div className={styles.lang}>
              Language:{' '}
              <select className={styles.langSelect}>
                  <option>English</option>
                <option>Telugu</option>
              
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