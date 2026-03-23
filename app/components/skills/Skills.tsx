
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Skills.module.css";

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { title: "Languages", icon: "{ }", skills: ["Java", "JavaScript", "TypeScript"] },
  { title: "Frontend", icon: "◻", skills: ["React.js", "Next.js", "HTML5", "CSS3"] },
  { title: "Styling", icon: "◈", skills: ["Tailwind CSS", "Bootstrap", "Responsive Design"] },
  { title: "Tools & Others", icon: "⌘", skills: ["Git", "GitHub", "REST APIs"] },
];

const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "+", label: "Projects Shipped" },
  { value: 2, suffix: "", label: "Internships" },
  { value: 80, suffix: "%", label: "B.Tech Score" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {


      const tagLine = tagRef.current?.querySelector(`.${styles.tagLine}`);
      gsap.fromTo(tagLine,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: tagRef.current, start: "top 88%", once: true },
        }
      );
      gsap.fromTo(tagRef.current,
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: tagRef.current, start: "top 88%", once: true },
        }
      );


      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll(`.${styles.wordInner}`);
        gsap.fromTo(words,
          { y: "110%", opacity: 0 },
          {
            y: "0%", opacity: 1,
            duration: 0.75, stagger: 0.1, ease: "power4.out",
            scrollTrigger: { trigger: headingRef.current, start: "top 86%", once: true },
          }
        );
      }


      gsap.fromTo(subtextRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.3,
          scrollTrigger: { trigger: subtextRef.current, start: "top 88%", once: true },
        }
      );


      if (statsRef.current) {
        const cells = Array.from(statsRef.current.children) as HTMLElement[];

        gsap.set(cells, { opacity: 0, y: 40 });
        gsap.to(cells, {
          opacity: 1, y: 0,
          duration: 0.65, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 82%", once: true },
          onStart() {

            statsRef.current?.classList.add(styles.swept);
          },
        });


        cells.forEach((cell, i) => {
          const numEl = cell.querySelector(`.${styles.statValue}`) as HTMLElement;
          if (!numEl) return;
          const target = stats[i].value;
          const suffix = stats[i].suffix;
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: "power2.out",
            delay: 0.15 + i * 0.1,
            scrollTrigger: { trigger: statsRef.current, start: "top 82%", once: true },
            onUpdate() {
              numEl.textContent = Math.round(obj.val) + suffix;
            },
          });
        });
      }


      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];
        gsap.set(cards, { opacity: 0, y: 55, rotateX: 8 });
        gsap.to(cards, {
          opacity: 1, y: 0, rotateX: 0,
          duration: 0.75, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true },
        });


        cards.forEach((card, ci) => {
          const items = card.querySelectorAll(`.${styles.skillItem}`);
          gsap.fromTo(items,
            { opacity: 0, x: -12 },
            {
              opacity: 1, x: 0,
              duration: 0.4, stagger: 0.07, ease: "power2.out",
              delay: 0.3 + ci * 0.12,
              scrollTrigger: { trigger: card, start: "top 82%", once: true },
            }
          );
        });
      }


      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: bottomRef.current, start: "top 92%", once: true },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className={styles.section}>
      <div className={styles.bgPattern} />
      <div className={styles.bgCornerTR} />
      <div className={styles.bgCornerBL} />
      <div className={styles.bgOrb} />

      <div className={styles.inner}>


        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Skills
        </div>


        <div className={styles.headingBlock}>
          <div className={styles.headingRow}>
            <h2 ref={headingRef} className={styles.heading}>

              <span className={styles.word}>
                <span className={styles.wordInner}>What</span>
              </span>
              <span className={styles.word}>
                <span className={styles.wordInner}>I</span>
              </span>

              <span className={styles.word}>
                <span className={`${styles.wordInner} ${styles.shimmer}`}>Work</span>
              </span>
              <span className={styles.word}>
                <span className={`${styles.wordInner} ${styles.shimmer}`}>With</span>
              </span>
            </h2>

            <p ref={subtextRef} className={styles.subtext}>
              A focused set of tools and technologies I use to build fast,
              accessible, and beautifully crafted web experiences.
            </p>
          </div>
        </div>




        <div ref={cardsRef} className={styles.cardsGrid}>
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>



      </div>
    </section>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -8,
      boxShadow: "0 20px 48px rgba(255, 107, 43, 0.13)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.card}
    >
      <div className={styles.cardIconRow}>
        <span className={styles.cardIcon}>{category.icon}</span>
        <div className={styles.cardIconLine} />
      </div>

      <h3 className={styles.cardTitle}>{category.title}</h3>

      <ul className={styles.skillsList}>
        {category.skills.map((skill) => (
          <li key={skill} className={styles.skillItem}>
            <span className={styles.skillDot} />
            <span className={styles.skillName}>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}