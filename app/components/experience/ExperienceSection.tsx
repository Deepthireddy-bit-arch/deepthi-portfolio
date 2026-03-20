"use client";

import ExperienceCard from "./components/ExperienceCard";
import { experienceData } from "./components/ExperienceData";

import { ExperienceSectionProps } from "./components/types";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection({ className }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className={`${styles.section} ${className ?? ""}`}
      aria-labelledby="experience-title"
    >
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>Work History</p>
          <h2 id="experience-title" className={styles.title}>
            Professional <span>Experience</span>
          </h2>
        </header>

        {/* Experience rows — each splits into timeline + gallery */}
        {experienceData.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
