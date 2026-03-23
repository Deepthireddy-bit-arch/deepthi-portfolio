"use client";

import { ExperienceItem, GalleryImage } from "./types";
import styles from '../ExperienceSection.module.css'

interface Props {
  item: ExperienceItem;
}

const CheckIcon = () => (
  <svg className={styles.achievementIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.28" />
    <path
      d="M5 8.5L7 10.5L11 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function aspectClass(aspect: GalleryImage["aspect"]) {
  if (aspect === "portrait") return styles.galleryItemPortrait;
  if (aspect === "landscape") return styles.galleryItemLandscape;
  return styles.galleryItemSquare;
}

function Gallery({ images }: { images: GalleryImage[] }) {

  const col1 = images.filter((_, i) => i % 2 === 0);
  const col2 = images.filter((_, i) => i % 2 !== 0);

  const loop1 = [...col1, ...col1, ...col1];
  const loop2 = [...col2, ...col2, ...col2];

  return (
    <div className={styles.galleryWrap}>
      <p className={styles.galleryLabel}>Project Snapshots</p>

      <div className={styles.galleryScroller}>
        <div className={`${styles.galleryTrack} ${styles.galleryTrackUp}`}>
          {loop1.map((img, idx) => (
            <div
              key={`c1-${img.id}-${idx}`}
              className={`${styles.galleryItem} ${aspectClass(img.aspect)}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={styles.galleryImg}
                loading="lazy"
              />
              <span className={styles.galleryCaption}>{img.caption}</span>
            </div>
          ))}
        </div>
        <div className={`${styles.galleryTrack} ${styles.galleryTrackDown}`}>
          {loop2.map((img, idx) => (
            <div
              key={`c2-${img.id}-${idx}`}
              className={`${styles.galleryItem} ${aspectClass(img.aspect)}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={styles.galleryImg}
                loading="lazy"
              />
              <span className={styles.galleryCaption}>{img.caption}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function ExperienceCard({ item }: Props) {
  return (
    <div className={styles.experienceRow}>

      <div className={styles.galleryCol}>
        <Gallery images={item.gallery} />
      </div>
      <div className={styles.timelineCol}>
        <div className={styles.timeline}>
          <article className={styles.card}>
            <div className={styles.dot}>
              <div
                className={`${styles.dotOuter} ${item.current ? styles.dotCurrent : ""}`}
                aria-hidden="true"
              >
                <div
                  className={`${styles.dotInner} ${item.current ? styles.dotCurrentInner : ""}`}
                />
              </div>
            </div>
            <div className={styles.body}>

              <div className={styles.meta}>
                <h3 className={styles.role}>{item.role}</h3>
                <span className={`${styles.dateBadge} ${item.current ? styles.dateBadgeCurrent : ""}`}>
                  {item.current && <span className={styles.dateDot} aria-hidden="true" />}
                  {item.startDate} — {item.current ? "Present" : item.endDate}
                </span>
              </div>


              <div className={styles.companyRow}>
                <span className={styles.company}>{item.company}</span>
                <span className={styles.separator} aria-hidden="true">·</span>
                <span className={styles.location}>{item.location}</span>
              </div>


              <p className={styles.description}>{item.description}</p>


              <p className={styles.achievementsTitle}>Key Achievements</p>
              <ul className={styles.achievementsList}>
                {item.achievements.map((a, i) => (
                  <li key={i} className={styles.achievementItem}>
                    <CheckIcon />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>


              <div className={styles.techRow} aria-label="Technologies used">
                {item.technologies.map((t) => (
                  <span key={t.name} className={styles.techBadge}>{t.name}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>



    </div>
  );
}
