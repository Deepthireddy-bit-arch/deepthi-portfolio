"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../hero/hero.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "REST APIs", "JavaScript", "Redux", "JAVA"];
const ROLES = [
  "Frontend Developer",
  "React & Next.js Developer",
  "UI / UX Enthusiast",
  "Clean Code Advocate",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const badgeDotRef = useRef<HTMLSpanElement>(null);
  const nameFirstRef = useRef<HTMLSpanElement>(null);
  const nameLastRef = useRef<HTMLSpanElement>(null);
  const nameLineRef = useRef<HTMLSpanElement>(null);
  const roleWrapRef = useRef<HTMLDivElement>(null);
  const roleTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const cardTLRef = useRef<HTMLDivElement>(null);
  const cardBRRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const scrollWheelRef = useRef<HTMLDivElement>(null);
  const glowARef = useRef<HTMLDivElement>(null);
  const glowBRef = useRef<HTMLDivElement>(null);
  const glowCRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    let ri = 0, ci = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const word = ROLES[ri];
      if (!deleting) {
        if (roleTextRef.current) roleTextRef.current.textContent = word.slice(0, ++ci);
        if (ci === word.length) { deleting = true; timer = setTimeout(step, 3000); return; }
      } else {
        if (roleTextRef.current) roleTextRef.current.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % ROLES.length; }
      }
      timer = setTimeout(step, deleting ? 100 : 140);
    };

    const kickoff = setTimeout(step, 2000);
    return () => { clearTimeout(kickoff); clearTimeout(timer); };
  }, []);


  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(
        [badgeRef.current, roleWrapRef.current, descRef.current,
        ctaRef.current, socRef.current, scrollHintRef.current],
        { opacity: 0, y: 20 }
      );
      gsap.set(nameFirstRef.current, { opacity: 0, x: -30 });
      gsap.set(nameLastRef.current, { opacity: 0, x: -20 });
      gsap.set(nameLineRef.current, { scaleX: 0, transformOrigin: "left" });
      gsap.set(photoRef.current, { opacity: 0, x: 40 });
      gsap.set(cardTLRef.current, { opacity: 0, scale: 0.8, y: -10 });
      gsap.set(cardBRRef.current, { opacity: 0, scale: 0.8, y: 10 });

      const chips = chipsRef.current?.querySelectorAll("span");
      if (chips) gsap.set(chips, { opacity: 0, y: 8 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
        .to(nameFirstRef.current, { opacity: 1, x: 0, duration: 0.7, ease: "power4.out" }, 0.4)
        .to(nameLastRef.current, { opacity: 1, x: 0, duration: 0.7, ease: "power4.out" }, 0.55)
        .to(nameLineRef.current, { scaleX: 1, duration: 0.7, ease: "power2.inOut" }, "-=0.3")
        .to(roleWrapRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.2")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1")
        .to(chips ? Array.from(chips) : [], {
          opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: "back.out(1.3)",
        }, "-=0.2")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1")
        .to(socRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.1")
        .to(photoRef.current, { opacity: 1, x: 0, duration: 0.85, ease: "power3.out" }, 0.4)
        .to(cardTLRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(2)" }, "-=0.4")
        .to(cardBRRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(2)" }, "-=0.45")
        .to(scrollHintRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");

      gsap.to(photoRef.current, { y: -12, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5 });
      gsap.to(cardTLRef.current, { y: -7, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.8 });
      gsap.to(cardBRRef.current, { y: 7, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2.2 });


      gsap.to(badgeDotRef.current, {
        scale: 1.8, opacity: 0.3, duration: 1.1,
        ease: "power1.inOut", yoyo: true, repeat: -1,
      });


      gsap.to(cursorRef.current, {
        opacity: 0, duration: 0.5, ease: "steps(1)", yoyo: true, repeat: -1,
      });


      gsap.to(glowARef.current, { scale: 1.1, opacity: 0.85, duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1 });
      gsap.to(glowBRef.current, { scale: 1.15, opacity: 0.75, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
      gsap.to(glowCRef.current, { scale: 1.2, opacity: 0.65, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });


      gsap.to(scrollWheelRef.current, {
        y: 8, opacity: 0, duration: 1.1, ease: "power2.in",
        repeat: -1, repeatDelay: 0.5, delay: 2,
      });

      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      if (!isMobile) {
        gsap.to(photoRef.current, {
          yPercent: -10, ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero}>


      <div className={styles.heroBg} />


      <div ref={glowARef} className={`${styles.glow} ${styles.glowA}`} />
      <div ref={glowBRef} className={`${styles.glow} ${styles.glowB}`} />
      <div ref={glowCRef} className={`${styles.glow} ${styles.glowC}`} />

      <div className={styles.heroInner}>


        <div>

          <div ref={badgeRef} className={styles.badge}>
            <span ref={badgeDotRef} className={styles.badgeDot} />
            Available for work
          </div>

          <div className={styles.nameRow}>
            <span ref={nameFirstRef} className={styles.nameFirst}>Doddipalli</span>
            <span ref={nameLastRef} className={styles.nameLast}>Deepthi</span>
          </div>

          <span ref={nameLineRef} className={styles.nameLine} />

          <div ref={roleWrapRef} className={styles.roleWrap}>
            <span className={styles.rolePrefix}>Role</span>
            <span ref={roleTextRef} className={styles.roleText} />
            <span ref={cursorRef} className={styles.cursor} />
          </div>

          <p ref={descRef} className={styles.desc}>
            I build <span className={styles.descEm}>fast, accessible &amp; pixel-perfect</span>{" "}
            web experiences — crafting interfaces that feel intuitive, look refined,
            and perform exceptionally. With a strong focus on performance, scalability,
            and clean UI architecture, I transform complex ideas into elegant and
            engaging digital products using React, Next.js, and modern frontend tools.
          </p>

          <div ref={chipsRef} className={styles.chips}>
            {SKILLS.map((s) => (
              <span key={s} className={styles.chip}>{s}</span>
            ))}
          </div>

          <div ref={ctaRef} className={styles.ctaRow}>
            <a href="/projects" className={styles.btnPrimary}>View Projects →</a>
            <a href="/assets/resume.pdf" target="_blank" rel="noopener" className={styles.btnSecondary}>
              Download CV ↓
            </a>
          </div>

          <div ref={socRef} className={styles.socRow}>
            <span className={styles.socLabel}>Find me</span>
            <div className={styles.socDivider} />

            <a href="https://github.com/Deepthireddy-bit-arch" target="_blank" rel="noopener"
              className={styles.socIcon} aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/doddipalli-deepthi-16b031256" target="_blank" rel="noopener"
              className={styles.socIcon} aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A5 5 0 0 1 22 14v7zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a href="mailto:doddipallideepthi111@gmail.com"
              className={styles.socIcon} aria-label="Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>


        <div ref={photoRef} className={styles.photoWrap}>

          <div ref={cardTLRef} className={`${styles.floatCard} ${styles.cardTL}`}>
            <div className={styles.cardNum}>1+</div>
            <div className={styles.cardSub}>Years exp</div>
          </div>

          <div className={styles.photoBox}>
            <Image
              src="/assets/images/picture.jpeg"
              alt="Doddipalli Deepthi — Frontend Developer"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          <div ref={cardBRRef} className={`${styles.floatCard} ${styles.cardBR}`}>
            <div className={styles.cardStatus}>
              <span className={styles.cardDot} />
              Open to roles
            </div>
          </div>

        </div>
      </div>

      <div
        ref={scrollHintRef}
        className={styles.scrollHint}
        style={{ opacity: scrolled ? 0 : undefined, pointerEvents: scrolled ? 'none' : undefined, transition: 'opacity 0.3s ease' }}
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollMouse}>
          <div ref={scrollWheelRef} className={styles.scrollWheel} />
        </div>
      </div>

    </section>
  );
}