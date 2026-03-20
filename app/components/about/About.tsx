"use client";

import { useEffect, useRef } from "react";
import styles from "./About.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ── */
const SKILLS = [
  { name: "HTML & CSS",               level: 92 },
  { name: "JavaScript",               level: 82 },
  { name: "React.js",                 level: 80 },
  { name: "Tailwind CSS / Bootstrap", level: 85 },
  { name: "Java",                     level: 75 },
  { name: "Git & GitHub",             level: 70 },
];

const TECH_CHIPS = [
  "React.js", "JavaScript", "HTML5", "CSS3",
  "Tailwind CSS", "Bootstrap", "Java", "Git",
];

/* ─── Main ── */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef     = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const bioRef     = useRef<HTMLDivElement>(null);
  const chipsRef   = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const fillsRef   = useRef<HTMLDivElement[]>([]);

 useEffect(() => {
  const ctx = gsap.context(() => {
    // First, set initial hidden states for ALL animated elements
    gsap.set(tagRef.current, { opacity: 0, y: -24 });
    gsap.set(headingRef.current, { opacity: 0, y: 52 });
    
    if (bioRef.current) {
      gsap.set(bioRef.current.querySelectorAll("p, blockquote"), { 
        opacity: 0, 
        y: 34 
      });
    }
    
    if (chipsRef.current) {
      gsap.set(chipsRef.current.querySelectorAll("span"), { 
        opacity: 0, 
        y: 20, 
        scale: 0.95 
      });
    }
    
    gsap.set(cardRef.current, { opacity: 0, x: 64 });
    
    if (cardRef.current) {
      gsap.set(cardRef.current.querySelectorAll(`.${styles.skillRow}`), { 
        opacity: 0, 
        x: 28 
      });
    }

    // Then animate them in with scroll trigger
    gsap.to(tagRef.current, {
      opacity: 1, y: 0, duration: 0.65, ease: "back.out(1.8)",
      scrollTrigger: { trigger: tagRef.current, start: "top 85%", once: true },
    });

    gsap.to(headingRef.current, {
      opacity: 1, y: 0, duration: 0.95, ease: "power4.out",
      scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
      delay: 0.12,
    });

    if (dividerRef.current) {
      gsap.set(dividerRef.current, { scaleX: 0 });
      gsap.to(dividerRef.current, {
        scaleX: 1, transformOrigin: "left center",
        duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: dividerRef.current, start: "top 85%", once: true },
        delay: 0.28,
      });
    }

    if (bioRef.current) {
      gsap.to(bioRef.current.querySelectorAll("p, blockquote"), {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.16, ease: "power3.out",
        scrollTrigger: { trigger: bioRef.current, start: "top 80%", once: true },
      });
    }

    if (chipsRef.current) {
      gsap.to(chipsRef.current.querySelectorAll("span"), {
        opacity: 1, y: 0, scale: 1,
        duration: 0.42, stagger: 0.065, ease: "back.out(1.6)",
        scrollTrigger: { trigger: chipsRef.current, start: "top 85%", once: true },
      });
    }

    gsap.to(cardRef.current, {
      opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
    });

    if (cardRef.current) {
      gsap.to(cardRef.current.querySelectorAll(`.${styles.skillRow}`), {
        opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: "power2.out",
        delay: 0.22,
        scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
      });
    }

    fillsRef.current.forEach((fill, i) => {
      if (fill) {
        gsap.set(fill, { width: "0%" });
        gsap.to(fill, {
          width: `${SKILLS[i]?.level ?? 0}%`,
          duration: 1.5, ease: "power2.out",
          delay: 0.3 + i * 0.1,
          scrollTrigger: { trigger: fill, start: "top 85%", once: true },
        });
      }
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>

        {/* ── Header ── */}
        <div ref={tagRef} className={styles.tag}>
          <span className={styles.tagDot} />
          About Me
        </div>

   <h2 ref={headingRef} className={styles.heading}>
  Building Interfaces With{" "}
  <span className={styles.headingEm}>Purpose & Precision</span>
</h2>

        {/* <div ref={dividerRef} className={styles.divider} /> */}

        {/* ── Main Grid ── */}
        <div className={styles.grid}>

          {/* LEFT — Bio */}
          {/* <div ref={bioRef}>
            <p className={styles.body}>
              Hi, I&apos;m{" "}
              <strong className={styles.nameEm}>Deepthi</strong> — a passionate
              Frontend Developer and B.Tech CSE graduate from Vemu Institute of
              Technology, with a strong foundation in building responsive and
              intuitive web interfaces.
            </p>

            <p className={styles.body}>
              I&apos;ve gained hands-on experience through two internships, working on
              real-world projects using{" "}
              <span className={styles.accent}>React.js</span>,{" "}
              <span className={styles.accent}>JavaScript</span>,{" "}
              <span className={styles.accent}>HTML/CSS</span>, and{" "}
              <span className={styles.accent}>Tailwind CSS</span>.
              I enjoy turning ideas into clean, functional digital experiences.
            </p>

            <blockquote className={styles.quote}>
              &ldquo;I believe every line of code is a chance to create something
              meaningful — I approach frontend development with curiosity, attention
              to detail, and a drive to keep learning.&rdquo;
            </blockquote>

            <div ref={chipsRef} className={styles.chips}>
              {TECH_CHIPS.map((t) => (
                <span key={t} className={styles.chip}>{t}</span>
              ))}
            </div>
          </div> */}
          {/* LEFT — Bio */}
<div ref={bioRef} className={styles.bioContainer}> {/* Add className here */}
  <p className={styles.body}>
    Hi, I&apos;m{" "}
    <strong className={styles.nameEm}>Deepthi</strong> — a passionate
    Frontend Developer and B.Tech CSE graduate from Vemu Institute of
    Technology, with a strong foundation in building responsive and
    intuitive web interfaces.
  </p>

  <p className={styles.body}>
    I&apos;ve gained hands-on experience through two internships, working on
    real-world projects using{" "}
    <span className={styles.accent}>React.js</span>,{" "}
    <span className={styles.accent}>JavaScript</span>,{" "}
    <span className={styles.accent}>HTML/CSS</span>, and{" "}
    <span className={styles.accent}>Tailwind CSS</span>.
    I enjoy turning ideas into clean, functional digital experiences.
  </p>

  <blockquote className={styles.quote}>
    &ldquo;I believe every line of code is a chance to create something
    meaningful — I approach frontend development with curiosity, attention
    to detail, and a drive to keep learning.&rdquo;
  </blockquote>

  <div ref={chipsRef} className={styles.chips}>
    {TECH_CHIPS.map((t) => (
      <span key={t} className={styles.chip}>{t}</span>
    ))}
  </div>
</div>

          {/* RIGHT — Skills card */}
          <div ref={cardRef} className={styles.card}>
            <h3 className={styles.cardTitle}>Core Skills</h3>
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className={styles.skillRow}>
                <div className={styles.skillMeta}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPct}>{skill.level}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    ref={(el) => { if (el) fillsRef.current[i] = el; }}
                    className={styles.barFill}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}