'use client'
import { useEffect, useRef } from 'react'
import styles from './Projects.module.css'

interface ProjectCard {
  image: string
  authorAvatar: string
  authorName: string
  publishDate: string
  title: string
  accentColor?: string   // if set, title uses this color (like pink in Image)
  excerpt: string
  hoverLabel: string
}

const PROJECTS: ProjectCard[] = [
  {
    image: '/images/app-screens.png',
    authorAvatar: 'SH',
    authorName: 'Sam Hindman',
    publishDate: 'Published on 7th Oct., 2024',
    title: 'How To Build a Multi-Event Management Platform That Stands Out (With Examples)',
    excerpt: 'Create an eye-catching multi-event platform with our comprehensive guide. Learn the best formats, what to include, and how to showcase your skills to impress potential clients.',
    hoverLabel: 'Read Article',
  },
  {
    image: '/images/learnexa.png',
    authorAvatar: 'SH',
    authorName: 'Sam Hindman',
    publishDate: 'Published on 2nd Oct., 2024',
    title: 'Creating Your Dev Portfolio Website: An 8-Step Guide (With Examples)',
    accentColor: '#F97316',
    excerpt: 'Create a standout developer portfolio with these 8 essential steps! Learn how to showcase your unique skills, choose the best platform, and attract clients by building a professional, personalised website.',
    hoverLabel: 'Read Article',
  },
  {
    image: '/images/app-screens.png',
    authorAvatar: 'JM',
    authorName: 'Jessica Michael',
    publishDate: 'Published on 1st Oct., 2024',
    title: 'All the Portfolio Privacy Features You Need to Know About',
    excerpt: 'Our guide to when and how to use privacy features for your digital portfolio.',
    hoverLabel: 'Read Article',
  },
]

// Avatar background colours
const AVATAR_COLORS: [string, string][] = [
  ['#FED7AA', '#C2410C'],
  ['#FED7AA', '#C2410C'],
  ['#E0F0FF', '#1D6FA4'],
]

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
    ;(async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        gsap.fromTo(['.pj-pill', '.pj-title', '.pj-sub'], { opacity: 0, y: -20 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true }
        })
        gsap.fromTo('.pj-card', { opacity: 0, y: 36, scale: 0.96 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.13, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true }
        })
        document.querySelectorAll<HTMLElement>('.pj-card').forEach(el => {
          el.addEventListener('mouseenter', () =>
            gsap.to(el, { y: -6, duration: 0.25, ease: 'power2.out' }))
          el.addEventListener('mouseleave', () =>
            gsap.to(el, { y: 0,  duration: 0.35, ease: 'power2.inOut' }))
        })
      }, ref)
    })()
    return () => ctx?.revert()
  }, [])

  return (
    <section ref={ref} className={styles.section} id="projects">
      <div className={styles.container}>

        <div className={styles.heading}>
          <span className={`pj-pill ${styles.pill}`}>Work</span>
          <h2 className={`pj-title ${styles.title}`}>Featured <span>Projects</span></h2>
          <p className={`pj-sub ${styles.sub}`}>Selected work across products and companies</p>
        </div>

        {/* 3-column card grid — exactly matching reference image */}
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div key={i} className={`pj-card ${styles.card}`}>

              {/* TOP: photo — full width, no padding, like reference */}
              <div className={styles.imgWrap}>
                <img src={p.image} alt={p.title} className={styles.img} />
                {/* Pink/orange hover overlay with "Read Article" — exactly Image */}
                <div className={styles.imgOverlay}>
                  <span className={styles.overlayLabel}>{p.hoverLabel}</span>
                </div>
              </div>

              {/* BODY */}
              <div className={styles.body}>
                {/* Author row — avatar circle + name + date — exactly Image */}
                <div className={styles.authorRow}>
                  <div
                    className={styles.avatar}
                    style={{
                      background: AVATAR_COLORS[i][0],
                      color: AVATAR_COLORS[i][1],
                    }}
                  >
                    {p.authorAvatar}
                  </div>
                  <div className={styles.authorMeta}>
                    <div className={styles.authorName}>{p.authorName}</div>
                    <div className={styles.authorDate}>{p.publishDate}</div>
                  </div>
                </div>

                {/* Title — accent color if set, like pink in Image */}
                <h3
                  className={styles.cardTitle}
                  style={p.accentColor ? { color: p.accentColor } : {}}
                >
                  {p.title}
                </h3>

                {/* Excerpt */}
                <p className={styles.excerpt}>{p.excerpt}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
