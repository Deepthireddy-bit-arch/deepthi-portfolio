
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Project.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  number: string;
  tag: string;
  title: string;
  desc: string;
  tech: string[];
  type: "internship" | "academic" | "personal";
  highlights: string[];
  visual: { image: string; pattern: string; accent: string; };
}
const PROJECTS: Project[] = [
  {
    number: "01",
    tag: "Internship · May–Jul 2023",
    title: "College Fest",
    desc: "A multi-event management website built at Konig Tronics, Bangalore. Helps colleges organise multiple events through a clean, responsive frontend interface.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    type: "internship",
    highlights: ["Multi-event management system", "Fully responsive layout", "Clean UI/UX"],
    visual: { image: "/assets/images/collegefest.jpg", pattern: "grid", accent: "#F97316" },
  },
  {
    number: "02",
    tag: "Internship · Jan–May 2024",
    title: "Netflix Clone",
    desc: "A pixel-faithful clone of the Netflix homepage built during Full Stack internship at IIDT × Blackbuck Engineers. Replicates the design system, hover effects, and core UI.",
    tech: ["React.js", "CSS3", "JavaScript"],
    type: "internship",
    highlights: ["Netflix UI design system", "Responsive homepage", "Component-based architecture"],
    visual: { image: "/assets/images/netflix.jpg", pattern: "diagonal", accent: "#F97316" },
  },
  {
    number: "03",
    tag: "Academic Research",
    title: "Smart Dementia Detection",
    desc: "An ML-based system for early dementia identification using clinical, neuroimaging, and genetic data. Employs state-of-the-art algorithms for a predictive diagnosis model.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    type: "academic",
    highlights: ["Early dementia prediction", "Multi-source dataset", "ML algorithms"],
    visual: { image: "/assets/images/dementia.jpg", pattern: "dots", accent: "#6366F1" },
  },
  {
    number: "04",
    tag: "Personal · 2024",
    title: "Dev Portfolio",
    desc: "This portfolio — built from scratch with Next.js, TypeScript, and a custom white & orange design system. Features GSAP animations, scroll interactions, and full responsiveness.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
    type: "personal",
    highlights: ["Custom design system", "GSAP animations", "Fully responsive"],
    visual: { image: "/assets/images/search.jpg", pattern: "cross", accent: "#10B981" },
  },
];

const TYPE_LABEL: Record<string, string> = {
  internship: "Internship",
  academic: "Academic",
  personal: "Personal",
};
function VisualPanel({ project }: { project: Project }) {
  const { image, pattern, accent } = project.visual;

  return (
    <div className={styles.visual} style={{ "--accent": accent } as React.CSSProperties}>
      <svg className={styles.patternSvg} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        {pattern === "grid" && (
          <defs>
            <pattern id={`grid-${project.number}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={accent} strokeWidth="0.5" strokeOpacity="0.25" />
            </pattern>
          </defs>
        )}
        {pattern === "diagonal" && (
          <defs>
            <pattern id={`diag-${project.number}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="20" x2="20" y2="0" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2" />
            </pattern>
          </defs>
        )}
        {pattern === "dots" && (
          <defs>
            <pattern id={`dots-${project.number}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.2" fill={accent} fillOpacity="0.3" />
            </pattern>
          </defs>
        )}
        {pattern === "cross" && (
          <defs>
            <pattern id={`cross-${project.number}`} width="32" height="32" patternUnits="userSpaceOnUse">
              <line x1="16" y1="6" x2="16" y2="26" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2" />
              <line x1="6" y1="16" x2="26" y2="16" stroke={accent} strokeWidth="0.6" strokeOpacity="0.2" />
            </pattern>
          </defs>
        )}
        <rect width="100%" height="100%"
          fill={`url(#${pattern === "grid" ? `grid-${project.number}` :
              pattern === "diagonal" ? `diag-${project.number}` :
                pattern === "dots" ? `dots-${project.number}` :
                  `cross-${project.number}`
            })`}
        />
        <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle"
          fontSize="160" fontWeight="900"
          fill={accent} fillOpacity="0.06"
          
          letterSpacing="-8"
        >
          {project.number}
        </text>
      </svg>
      <div className={styles.visualImage}>
        <Image
          src={image || "/assets/images/placeholder.jpg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          priority={project.number === "01"}
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className={styles.visualBadge}
        style={{ background: `${accent}18`, borderColor: `${accent}35`, color: accent }}>
        {TYPE_LABEL[project.type]}
      </div>
      <div className={styles.visualFade}
        style={{ background: `linear-gradient(to top, ${accent}12, transparent)` }} />
    </div>
  );
}
export default function Projects() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(headerRef.current, {
        opacity: 0, y: 40, duration: 0.85, ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current, start: "top 88%", once: true,
          onEnter: () => setVisible(true)
        },
      });
      gsap.from(showcaseRef.current, {
        opacity: 0, y: 56, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: showcaseRef.current, start: "top 84%", once: true },
        delay: 0.15,
      });
      gsap.from(footerRef.current, {
        opacity: 0, y: 20, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 90%", once: true },
        delay: 0.3,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animateSwap = useCallback((dir: "left" | "right") => {
    const xIn = dir === "right" ? 40 : -40;
    const xOut = dir === "right" ? -40 : 40;

    if (visualRef.current) {
      gsap.fromTo(visualRef.current,
        { opacity: 0, x: xIn, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: "power3.out" }
      );
    }
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: -xIn },
        { opacity: 1, x: 0, duration: 0.55, ease: "power3.out", delay: 0.07 }
      );
    }
  }, []);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActive(prev => {
        animateSwap("right");
        return (prev + 1) % PROJECTS.length;
      });
    }, 4000);
  }, [animateSwap]);

  useEffect(() => {
    if (visible) startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [visible, startAuto]);

  const goTo = (i: number, dir: "left" | "right" = "right") => {
    if (i === active) return;
    animateSwap(dir);
    setActive(i);
    startAuto();
  };

  const prev = () => goTo((active - 1 + PROJECTS.length) % PROJECTS.length, "left");
  const next = () => goTo((active + 1) % PROJECTS.length, "right");

  const project = PROJECTS[active];

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>


        <div ref={headerRef} className={styles.header}>
          <div className={styles.tag}>
            <span className={styles.tagDot} />
            Projects
          </div>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>
              Things I&apos;ve <em className={styles.em}>Built</em>
            </h2>
            <div className={styles.arrows}>
              <button className={styles.arrow} onClick={prev} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </button>
              <button className={styles.arrow} onClick={next} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>


        <div ref={showcaseRef} className={styles.showcase}>

          <div ref={visualRef} className={styles.visualWrap}>
            <VisualPanel project={project} />
          </div>

          <div ref={contentRef} className={styles.content}>
            <div className={styles.contentMeta}>
              <span className={styles.projectNum}>{project.number}</span>
              <span className={styles.contentTag}>{project.tag}</span>
            </div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDesc}>{project.desc}</p>
            <ul className={styles.highlights}>
              {project.highlights.map((h) => (
                <li key={h} className={styles.highlightItem}>
                  <span className={styles.hDot} />
                  {h}
                </li>
              ))}
            </ul>
            <div className={styles.techRow}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techChip}>{t}</span>
              ))}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
