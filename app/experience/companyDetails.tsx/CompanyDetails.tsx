'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './CompanyDetails.module.css'

interface Company {
  id: string
  logo: string
  logoColor: string
  name: string
  role: string
  period: string
  location: string
  type: string
  size: string
  about: string
  website: string
  images: string[]
  highlights: string[]
  accentColor: string
}

const COMPANIES: Company[] = [
  {
    id: 'veritas',
    logo: 'VT',
    logoColor: '#F97316',
    accentColor: '#F97316',
    name: 'Veritas Technologies Pvt. Ltd.',
    role: 'Senior Frontend Engineer',
    period: 'Jan 2023 – Present',
    location: 'Bengaluru, India',
    type: 'SaaS Product',
    size: '500–1000 employees',
    about: 'Veritas Technologies builds enterprise-grade SaaS analytics platforms used by Fortune 500 companies. The product suite helps data teams visualise, monitor, and act on real-time business intelligence at scale across multiple industries.',
    website: 'veritas.com',
    images: [
      '/images/learnexa.png',
      '/images/app-screens.png',
      '/images/learnexa.png',
    ],
    highlights: [
      'Led frontend for a platform serving 40,000+ enterprise users',
      'Lighthouse score improved from 61 → 94 post-launch',
      'Promoted from mid-level to senior in 8 months',
    ],
  },
  {
    id: 'nexlayer',
    logo: 'NX',
    logoColor: '#7c3aed',
    accentColor: '#7c3aed',
    name: 'Nexlayer Solutions',
    role: 'Frontend Developer',
    period: 'Jul 2021 – Dec 2022',
    location: 'Remote · Hyderabad',
    type: 'Fintech Startup',
    size: '50–200 employees',
    about: 'Nexlayer Solutions builds digital lending infrastructure for NBFCs and cooperative banks across India. Their platform powers the full loan origination lifecycle — from KYC verification to disbursement — with a focus on accessibility and compliance.',
    website: 'nexlayer.io',
    images: [
      '/images/app-screens.png',
      '/images/learnexa.png',
      '/images/app-screens.png',
    ],
    highlights: [
      'Form abandonment reduced by 34%',
      'Mobile traffic grew from 18% → 47%',
      'Helped close Series A with a polished product demo',
    ],
  },
  {
    id: 'inkwell',
    logo: 'IW',
    logoColor: '#0284c7',
    accentColor: '#0284c7',
    name: 'Inkwell Digital Agency',
    role: 'Junior Web Developer',
    period: 'Aug 2020 – Jun 2021',
    location: 'Chennai, India',
    type: 'Agency · Web & Brand',
    size: '20–50 employees',
    about: 'Inkwell is a creative digital agency delivering bespoke web experiences for brands across e-commerce, hospitality, and creative industries. Fast-paced, design-driven, and focused on shipping polished products that convert.',
    website: 'inkwelldigital.in',
    images: [
      '/images/learnexa.png',
      '/images/app-screens.png',
      '/images/learnexa.png',
    ],
    highlights: [
      'Shipped 10+ client sites all scoring 90+ Core Web Vitals',
      "Client's bounce rate fell from 58% → 31%",
      'Promoted to mid-level role 6 months early',
    ],
  },
]

export default function CompanyDetailsSection() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  const company = COMPANIES[active]

  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(['.cd-pill', '.cd-main-title', '.cd-main-sub'], { opacity: 0, y: -20 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true }
        })
        gsap.fromTo('.co-tab', { opacity: 0, y: 16 }, {
          opacity: 1, y: 0, duration: 0.4, stagger: 0.09, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true }
        })
        animateIn()
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  const animateIn = async () => {
    const { gsap } = await import('gsap')
    gsap.fromTo('.cd-panel', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
    gsap.fromTo('.cd-img-item', { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.45, stagger: 0.1, ease: 'back.out(1.4)' })
    gsap.fromTo('.cd-hl', { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' })
  }

  const handleSwitch = async (i: number) => {
    const { gsap } = await import('gsap')
    gsap.to('.cd-panel', { opacity: 0, y: 8, duration: 0.18, ease: 'power2.in', onComplete: () => {
      setActive(i)
      setTimeout(animateIn, 10)
    }})
  }

  return (
    <section ref={ref} className={styles.section} id="company">
      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.heading}>
          <span className={`cd-pill ${styles.pill}`}>Experience</span>
          <h2 className={`cd-main-title ${styles.title}`}>Company <span>Details</span></h2>
          <p className={`cd-main-sub ${styles.sub}`}>Where I've worked and what I've built</p>
        </div>

        {/* Company selector tabs */}
        <div className={styles.tabs}>
          {COMPANIES.map((c, i) => (
            <button
              key={c.id}
              className={`co-tab ${styles.tab} ${active === i ? styles.tabActive : ''}`}
              style={active === i ? { borderColor: c.accentColor, color: c.accentColor } : {}}
              onClick={() => handleSwitch(i)}
            >
              <span
                className={styles.tabLogo}
                style={{ background: c.logoColor }}
              >
                {c.logo}
              </span>
              <div className={styles.tabInfo}>
                <div className={styles.tabName}>{c.name.split(' ')[0]} {c.name.split(' ')[1]}</div>
                <div className={styles.tabPeriod}>{c.period}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active company panel */}
        <div className={`cd-panel ${styles.panel}`}>
          <div className={styles.panelLeft}>

            {/* Logo + name + role */}
            <div className={styles.coHeader}>
              <div className={styles.coLogo} style={{ background: company.logoColor }}>{company.logo}</div>
              <div>
                <div className={styles.coName}>{company.name}</div>
                <div className={styles.coRole} style={{ color: company.accentColor }}>
                  <span className={styles.roleDot} style={{ background: company.accentColor }} />
                  {company.role}
                </div>
              </div>
            </div>

            {/* Meta chips */}
            <div className={styles.chips}>
              {[`📍 ${company.location}`, company.type, company.size, `🗓 ${company.period}`].map((chip, i) => (
                <span key={i} className={styles.chip}>{chip}</span>
              ))}
            </div>

            {/* About — clean paragraph, NO bullets */}
            <p className={styles.about}>{company.about}</p>

            {/* Highlights — minimal check items, not bullet list */}
            <div className={styles.highlights}>
              {company.highlights.map((h, i) => (
                <div key={i} className={`cd-hl ${styles.highlight}`}>
                  <span className={styles.hlCheck} style={{ color: company.accentColor }}>✓</span>
                  <span className={styles.hlText}>{h}</span>
                </div>
              ))}
            </div>

            {/* Website link */}
            <a href={`https://${company.website}`} className={styles.link} style={{ color: company.accentColor }}>
              {company.website} →
            </a>
          </div>

          {/* Right: image grid */}
          <div className={styles.panelRight}>
            <div className={styles.imgGrid}>
              <div className={`cd-img-item ${styles.imgBig}`}>
                <img src={company.images[0]} alt="Project 1" />
                <div className={styles.imgOverlay} />
              </div>
              <div className={styles.imgSmallCol}>
                <div className={`cd-img-item ${styles.imgSmall}`}>
                  <img src={company.images[1]} alt="Project 2" />
                  <div className={styles.imgOverlay} />
                </div>
                <div className={`cd-img-item ${styles.imgSmall}`}>
                  <img src={company.images[2]} alt="Project 3" />
                  <div className={styles.imgOverlay} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
