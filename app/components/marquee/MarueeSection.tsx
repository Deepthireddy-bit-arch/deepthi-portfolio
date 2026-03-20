"use client"
import { useRef } from "react";
import styles from '../marquee/Marquee.module.css'
const MARQUEE_ITEMS = [
  "Available for work",
  "Full-Stack Engineer",
  "React · Next.js · TypeScript",
  "Open to remote roles",
  "Let's build together",
];



/* ─── Component ─── */
export default function MarueeSection() {
  const footerRef   = useRef<HTMLElement>(null);
  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.slash} aria-hidden />

      {/* ── Scrolling marquee ── */}
      <div className={styles.marqueeWrap} aria-hidden>
        <div className={styles.marqueeTrack}>
          {/* doubled for seamless loop */}
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item}
              <span className={styles.marqueeSep}>✦</span>
            </span>
          ))}
        </div>
      </div>

     
    </footer>
  );
}