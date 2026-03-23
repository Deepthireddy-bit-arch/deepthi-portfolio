"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../contact/contact.module.css";
import { EASE, DURATION, scrollTriggerDefaults } from "../contact/animations";


gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    id: "email",
    label: "Email me",
    title: "doddipallideepthi111@gmail.com",
    sub: "Best for detailed conversations",
    href: "mailto:doddipallideepthi111@gmail.com",
    primary: true,
    arrow: "→",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "Connect",
    title: "LinkedIn Profile",
    sub: "View experience & skills",
    href: "https://www.linkedin.com/in/doddipalli-deepthi-16b031256",
    primary: false,
    arrow: "→",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "resume",
    label: "Download",
    title: "Resume / CV",
    sub: "PDF · Updated Jan 2025",
    href: "/assets/resume.pdf",
    primary: false,
    arrow: "↓",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <polyline points="9 15 12 18 15 15" />
      </svg>
    ),
  },
] as const;

const ROLES = [
  "Full-Stack Engineer",
  "Frontend Developer",
  "React / Next.js",
  "UI Engineer",
  "Open to remote",
  "Open to relocation",
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const hlRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const rolesRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const elementsToHide = [
      tagRef.current,
      headlineRef.current,
      subRef.current,
      rolesRef.current,
      footerRef.current,
      ...cardRefs.current.filter(Boolean),
    ];
    gsap.set(elementsToHide, { opacity: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });


      tl.fromTo(tagRef.current, { y: -12, opacity: 0 }, { y: 0, opacity: 1, duration: DURATION.normal, ease: EASE.expo }, 0);


      const lines = headlineRef.current?.querySelectorAll(`.${styles.line}`);
      if (lines && lines.length) {
        tl.fromTo(
          Array.from(lines),
          { opacity: 0, y: 40, skewX: 2 },
          { opacity: 1, y: 0, skewX: 0, duration: DURATION.xslow, ease: EASE.expo, stagger: 0.07 },
          0.05
        );
      }


      tl.add(() => hlRef.current?.classList.add(styles.drawn), 0.6);


      tl.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: DURATION.normal, ease: EASE.expo },
        0.35
      );


      const validCards = cardRefs.current.filter(Boolean);
      tl.fromTo(
        validCards,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: DURATION.normal, ease: EASE.expo, stagger: 0.1 },
        0.5
      );


      tl.fromTo(rolesRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: DURATION.normal, ease: EASE.expo },
        0.75
      );


      tl.fromTo(footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: DURATION.normal },
        0.85
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="contact">
      <div className={styles.blob1} aria-hidden />
      <div className={styles.blob2} aria-hidden />
      <div className={styles.dots} aria-hidden />

      <div className={styles.container}>


        <div ref={tagRef} className={styles.tag}>
          <span className={styles.tagDot} aria-hidden />
          Open to new opportunities
        </div>


        <h2 className={styles.heading}>Let's build Something Great</h2>


        <p ref={subRef} className={styles.sub}>
          I'm actively looking for exciting full-time roles. If you think
          there's a fit, I'd love to connect — it only takes one message.
        </p>

        <div className={styles.cards}>
          {CARDS.map((card, i) => (
            <a
              key={card.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              href={card.href}
              className={`${styles.card} ${card.primary ? styles.cardPrimary : ""}`}
              target={card.id === "linkedin" ? "_blank" : undefined}
              rel={card.id === "linkedin" ? "noopener noreferrer" : undefined}
              download={card.id === "resume" ? true : undefined}
              aria-label={card.title}
            >
              <div className={styles.icon}>{card.icon}</div>
              <div>
                <p className={styles.cardLabel}>{card.label}</p>
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardSub}>{card.sub}</p>
              </div>
              <span className={styles.arrow} aria-hidden>{card.arrow}</span>
            </a>
          ))}
        </div>




      </div>
    </section>
  );
}