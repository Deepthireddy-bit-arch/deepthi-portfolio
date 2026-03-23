
'use client'
import { useEffect, useRef } from 'react'
import styles from './Projects.module.css'

interface ProjectCard {
  image: string
  authorAvatar: string
  authorName: string
  publishDate: string
  title: string
  accentColor?: string
  excerpt: string
  hoverLabel: string
}

const PROJECTS: ProjectCard[] = [
  {
    image: '/assets/images/dementia.jpg',
    authorAvatar: 'DD',
    authorName: 'Final Year Academic Project',
    publishDate: '2024',
    title: 'Dementia Detection',
    accentColor: '#F05A1A',
    excerpt: 'ML system for early dementia detection using clinical, neuroimaging & genetic datasets — enabling timely intervention.',
    hoverLabel: 'View Project',
  },
  {
    image: '/assets/images/collegefest.jpg',
    authorAvatar: 'CF',
    authorName: 'Internship — Konig Tronics Pvt. Ltd.',
    publishDate: '2023',
    title: 'College Fest',
    accentColor: '#FF8040',
    excerpt: 'Web app to manage multiple college events — schedules, registrations, and announcements — built with modern frontend tools.',
    hoverLabel: 'View Project',
  },
  {
    image: '/assets/images/netflix.jpg',
    authorAvatar: 'NC',
    authorName: 'Internship — IIDT × Blackbuck Engineers',
    publishDate: '2024',
    title: 'Netflix Clone',
    accentColor: '#E84D0E',
    excerpt: 'Replicated Netflix\'s homepage with accurate layout, responsive design, and interactive React components with API integration.',
    hoverLabel: 'View Project',
  },
  {
    image: '/assets/images/electronics.jpg',
    authorAvatar: 'SE',
    authorName: 'Full-Stack E-Commerce Platform',
    publishDate: '2026',
    title: 'STEM E-Commerce',
    accentColor: '#F05A1A',
    excerpt: 'Dual-panel architecture — customer storefront plus admin dashboard with Stripe payments and real-time inventory sync.',
    hoverLabel: 'View Project',
  },
  {
    image: '/assets/images/lms.jpg',
    authorAvatar: 'LM',
    authorName: 'School Management System',
    publishDate: '2025',
    title: 'LMS',
    accentColor: '#FF8040',
    excerpt: 'Streamlines student records, attendance, grade management, and parent-teacher communication in one unified digital ecosystem.',
    hoverLabel: 'View Project',
  },
  {
    image: '/assets/images/mgr.jpg',
    authorAvatar: 'MG',
    authorName: 'Bug Fixes & Performance Optimization',
    publishDate: '2025',
    title: 'MGR Platform',
    accentColor: '#E84D0E',
    excerpt: 'Resolved critical production bugs, refactored legacy code, and boosted performance across a large-scale platform significantly.',
    hoverLabel: 'View Project',
  },
]

const AVATAR_COLORS: [string, string][] = [
  ['#FED7AA', '#C2410C'],
  ['#DBEAFE', '#1D4ED8'],
  ['#D1FAE5', '#065F46'],
  ['#FEE2E2', '#991B1B'],
  ['#EDE9FE', '#5B21B6'],
  ['#FEF3C7', '#92400E'],
]

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
      ; (async () => {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          gsap.fromTo(['.pj-title', '.pj-sub'], { opacity: 0, y: -20 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true }
          })
          gsap.fromTo('.pj-card', { opacity: 0, y: 36, scale: 0.96 }, {
            opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true }
          })
          document.querySelectorAll<HTMLElement>('.pj-card').forEach(el => {
            el.addEventListener('mouseenter', () =>
              gsap.to(el, { y: -6, duration: 0.25, ease: 'power2.out' }))
            el.addEventListener('mouseleave', () =>
              gsap.to(el, { y: 0, duration: 0.35, ease: 'power2.inOut' }))
          })
        }, ref)
      })()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={ref} className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={`pj-title ${styles.title}`}>Featured <span>Projects</span></h2>
          <p className={`pj-sub ${styles.sub}`}>Selected work across products and companies</p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div key={i} className={`pj-card ${styles.card}`}>
              <div className={styles.imgWrap}>
                <img src={p.image} alt={p.title} className={styles.img} />
                <div className={styles.imgOverlay}>
                  <span className={styles.overlayLabel}>{p.hoverLabel}</span>
                </div>
              </div>
              <div className={styles.body}>

                <h3
                  className={styles.cardTitle}
                  style={p.accentColor ? { color: p.accentColor } : {}}
                >
                  {p.title}
                </h3>
                <p className={styles.excerpt}>{p.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}