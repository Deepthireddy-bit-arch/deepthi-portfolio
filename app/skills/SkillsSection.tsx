// 'use client';

// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import type { SkillTab, ThemeVariant } from '../skills/types';
// import {
//   TECHNICAL_SKILLS,
//   INTERPERSONAL_SKILLS,
//   NAV_TABS,
//   LEVEL_CONFIG,
// } from '../skills/data';
// import { useSkillsAnimation } from '../skills/animations';

// // ── Dynamic style import based on theme ─────────────────────────────────────
// // In your app: pass theme="white" or theme="orange" as a prop.
// // The styles object is forwarded down so all sub-components share one import.

// interface Props {
//   theme?: ThemeVariant;
// }

// export default function SkillsSection({ theme = 'white' }: Props) {
//   // ── Lazy load the correct CSS module ──────────────────────────────────────
//   const [styles, setStyles] = useState<Record<string, string>>({});

//   useEffect(() => {
//     if (theme === 'orange') {
//       import('../skills/Skills.module.css').then((m) =>
//         setStyles(m.default)
//       );
//     } else {
//       import('../skills/Skills.module.css').then((m) =>
//         setStyles(m.default)
//       );
//     }
//   }, [theme]);

//   // ── State ──────────────────────────────────────────────────────────────────
//   // Default active = "technical"
//   const [activeTab, setActiveTab] = useState<SkillTab>('technical');
//   const [renderTab, setRenderTab] = useState<SkillTab>('technical'); // what's rendered

//   // ── Refs ───────────────────────────────────────────────────────────────────
//   const sectionRef   = useRef<HTMLElement>(null);
//   const headingRef   = useRef<HTMLDivElement>(null);
//   const navRef       = useRef<HTMLDivElement>(null);
//   const pillRef      = useRef<HTMLDivElement>(null);
//   const contentRef   = useRef<HTMLDivElement>(null);
//   const techBtnRef   = useRef<HTMLButtonElement>(null);
//   const softBtnRef   = useRef<HTMLButtonElement>(null);

//   const { animateNavSwitch, animateCardsOut, animateCardsIn, animateHeading } =
//     useSkillsAnimation();

//   // ── Animate heading on mount ───────────────────────────────────────────────
//   useEffect(() => {
//     if (headingRef.current && Object.keys(styles).length) {
//       setTimeout(() => animateHeading(headingRef.current), 100);
//     }
//   }, [styles, animateHeading]);

//   // ── Position pill on mount ─────────────────────────────────────────────────
//   useEffect(() => {
//     const activeBtn =
//       activeTab === 'technical' ? techBtnRef.current : softBtnRef.current;
//     if (!activeBtn || !pillRef.current) return;

//     const btnRect    = activeBtn.getBoundingClientRect();
//     const parentRect = activeBtn.parentElement!.getBoundingClientRect();
//     pillRef.current.style.width = `${btnRect.width}px`;
//     pillRef.current.style.left  = `${btnRect.left - parentRect.left + 5}px`;
//   }, [styles]); // run after styles load

//   // ── Tab switch ─────────────────────────────────────────────────────────────
//   const handleTabChange = useCallback(
//     (tab: SkillTab) => {
//       if (tab === activeTab) return;

//       const fromBtn = activeTab === 'technical' ? techBtnRef.current : softBtnRef.current;
//       const toBtn   = tab      === 'technical' ? techBtnRef.current : softBtnRef.current;

//       // 1. Slide pill
//       animateNavSwitch(fromBtn, toBtn, pillRef.current);

//       // 2. Animate old cards out → swap content → animate new cards in
//       animateCardsOut(contentRef.current, () => {
//         setRenderTab(tab);
//         setActiveTab(tab);
//         requestAnimationFrame(() => animateCardsIn(contentRef.current));
//       });
//     },
//     [activeTab, animateNavSwitch, animateCardsOut, animateCardsIn]
//   );

//   // ── Animate cards in whenever renderTab changes ────────────────────────────
//   useEffect(() => {
//     if (contentRef.current) {
//       setTimeout(() => animateCardsIn(contentRef.current), 50);
//     }
//   }, [renderTab]); // eslint-disable-line react-hooks/exhaustive-deps

//   if (!Object.keys(styles).length) return null; // wait for CSS

//   return (
//     <section ref={sectionRef} className={`${styles.section} ${styles.root}`}>
//       <div className={styles.inner}>

//         {/* ── Heading ────────────────────────────────────────────────────── */}
//         {/* <div ref={headingRef} className={styles.heading}>
//           <span className={styles.headingOverflow}>
//             <span className={styles.headingMain} data-word>
//               My&nbsp;
//               <span className={styles.headingAccent}>Skills</span>
//             </span>
//           </span>
//           <span className={styles.headingOverflow}>
//             <span className={styles.headingSub} data-word>
//               Technical expertise · Interpersonal strengths
//             </span>
//           </span>
//         </div> */}

//         {/* ── Nav ────────────────────────────────────────────────────────── */}
//         <nav ref={navRef} className={styles.nav} aria-label="Skills categories">
//           {/* Sliding pill — positioned/sized by JS */}
//           <div ref={pillRef} className={styles.navPill} aria-hidden="true" />

//           {NAV_TABS.map((tab) => {
//             const isActive = tab.id === activeTab;
//             const btnRef   = tab.id === 'technical' ? techBtnRef : softBtnRef;

//             return (
//               <button
//                 key={tab.id}
//                 ref={btnRef}
//                 onClick={() => handleTabChange(tab.id)}
//                 className={`${styles.navBtn} ${isActive ? styles.navBtnActive : ''}`}
//                 aria-pressed={isActive}
//                 aria-label={tab.label}
//               >
//                 <span className={styles.navBtnLabel} data-tab-label>
//                   {tab.label}
//                 </span>
//                 <span className={styles.navBtnSub}>{tab.sublabel}</span>
//               </button>
//             );
//           })}
//         </nav>

//         {/* ── Content ────────────────────────────────────────────────────── */}
//         <div ref={contentRef} className={styles.content}>
//           {renderTab === 'technical' ? (
//             <TechGrid skills={TECHNICAL_SKILLS} styles={styles} />
//           ) : (
//             <SoftGrid skills={INTERPERSONAL_SKILLS} styles={styles} />
//           )}
//         </div>

//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    TechGrid
//    ═══════════════════════════════════════════════════════════════════════════ */
// function TechGrid({
//   skills,
//   styles,
// }: {
//   skills: typeof TECHNICAL_SKILLS;
//   styles: Record<string, string>;
// }) {
//   return (
//     <div className={styles.techGrid}>
//       {skills.map((skill, i) => (
//         <TechCard key={skill.id} skill={skill} index={i} styles={styles} />
//       ))}
//     </div>
//   );
// }

// /* ── TechCard ───────────────────────────────────────────────────────────── */
// function TechCard({
//   skill,
//   index,
//   styles,
// }: {
//   skill: typeof TECHNICAL_SKILLS[number];
//   index: number;
//   styles: Record<string, string>;
// }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const barRef  = useRef<HTMLDivElement>(null);
//   const { animateBar, bindCardTilt } = useSkillsAnimation();

//   useEffect(() => {
//     const cleanup = bindCardTilt(cardRef.current);
//     return cleanup;
//   }, [bindCardTilt]);

//   useEffect(() => {
//     if (barRef.current) {
//       animateBar(barRef.current, skill.percentage, index * 0.05);
//     }
//   }, [skill.percentage, index, animateBar]);

//   const { label } = LEVEL_CONFIG[skill.level];

//   return (
//     <div ref={cardRef} className={styles.techCard} data-skill-card>
//       <div className={styles.techCardTop}>
//         <div className={styles.techCardLeft}>
//           <span className={styles.techName}>{skill.name}</span>
//           <span className={styles.techCategory}>{skill.category}</span>
//         </div>
//         <div className={styles.techMeta}>
//           <span className={styles.techPct}>{skill.percentage}%</span>
//           <span className={styles.techYears}>{skill.yearsExp}yr</span>
//         </div>
//       </div>

//       {/* Progress bar */}
//       <div className={styles.barTrack}>
//         <div ref={barRef} className={styles.barFill} style={{ width: 0 }} />
//       </div>

//       {/* Footer */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <span className={styles.levelBadge}>
//           <span className={styles.levelDot} />
//           {label}
//         </span>

//         {skill.tags && (
//           <div className={styles.tagRow}>
//             {skill.tags.slice(0, 2).map((t) => (
//               <span key={t} className={styles.tag}>{t}</span>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════════════════════════════
//    SoftGrid
//    ═══════════════════════════════════════════════════════════════════════════ */
// function SoftGrid({
//   skills,
//   styles,
// }: {
//   skills: typeof INTERPERSONAL_SKILLS;
//   styles: Record<string, string>;
// }) {
//   return (
//     <div className={styles.softGrid}>
//       {skills.map((skill, i) => (
//         <SoftCard key={skill.id} skill={skill} index={i} styles={styles} />
//       ))}
//     </div>
//   );
// }

// /* ── SoftCard ───────────────────────────────────────────────────────────── */
// function SoftCard({
//   skill,
//   index,
//   styles,
// }: {
//   skill: typeof INTERPERSONAL_SKILLS[number];
//   index: number;
//   styles: Record<string, string>;
// }) {
//   const ringRef = useRef<SVGCircleElement>(null);
//   const { animateRing } = useSkillsAnimation();

//   const r            = 24;
//   const size         = 56;
//   const cx           = size / 2;
//   const cy           = size / 2;

//   useEffect(() => {
//     if (ringRef.current) {
//       animateRing(ringRef.current, skill.strength, index * 0.07);
//     }
//   }, [skill.strength, index, animateRing]);

//   return (
//     <div className={styles.softCard} data-skill-card>
//       <div className={styles.softCardHead}>
//         {/* Icon */}
//         <div className={styles.softIcon}>{skill.icon}</div>

//         {/* Radial ring */}
//         <div className={styles.ringWrap}>
//           <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
//             {/* Track ring */}
//             <circle
//               cx={cx}
//               cy={cy}
//               r={r}
//               fill="none"
//               strokeWidth="3"
//               className={styles.ringTrack}
//             />
//             {/* Fill ring — animated by GSAP */}
//             <circle
//               ref={ringRef}
//               cx={cx}
//               cy={cy}
//               r={r}
//               strokeWidth="3"
//               className={styles.ringFill}
//             />
//           </svg>
//           <span className={styles.ringLabel}>{skill.strength}</span>
//         </div>
//       </div>

//       <p className={styles.softName}>{skill.name}</p>
//       <p className={styles.softDesc}>{skill.description}</p>

//       <div className={styles.pillars}>
//         {skill.pillars.map((p) => (
//           <span key={p} className={styles.pillar}>{p}</span>
//         ))}
//       </div>
//     </div>
//   );
// }
'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { SkillTab, ThemeVariant } from '../skills/types';
import {
  TECHNICAL_SKILLS,
  INTERPERSONAL_SKILLS,
  NAV_TABS,
  LEVEL_CONFIG,
} from '../skills/data';
import { useSkillsAnimation } from '../skills/animations';

interface Props {
  theme?: ThemeVariant;
}

export default function SkillsSection({ theme = 'white' }: Props) {
  const [styles, setStyles] = useState<Record<string, string>>({});

  useEffect(() => {
    import('../skills/Skills.module.css').then((m) => setStyles(m.default));
  }, [theme]);

  const [activeTab, setActiveTab]   = useState<SkillTab>('technical');
  const [renderTab, setRenderTab]   = useState<SkillTab>('technical');

  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const navRef      = useRef<HTMLDivElement>(null);
  const pillRef     = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const techBtnRef  = useRef<HTMLButtonElement>(null);
  const softBtnRef  = useRef<HTMLButtonElement>(null);

  const { animateNavSwitch, animateCardsOut, animateCardsIn, animateHeading } =
    useSkillsAnimation();

  useEffect(() => {
    if (headingRef.current && Object.keys(styles).length) {
      setTimeout(() => animateHeading(headingRef.current), 100);
    }
  }, [styles, animateHeading]);

  // Position pill on mount
  useEffect(() => {
    const activeBtn =
      activeTab === 'technical' ? techBtnRef.current : softBtnRef.current;
    if (!activeBtn || !pillRef.current) return;
    const btnRect    = activeBtn.getBoundingClientRect();
    const parentRect = activeBtn.parentElement!.getBoundingClientRect();
    pillRef.current.style.width = `${btnRect.width}px`;
    pillRef.current.style.left  = `${btnRect.left - parentRect.left + 5}px`;
  }, [styles]);

  const handleTabChange = useCallback(
    (tab: SkillTab) => {
      if (tab === activeTab) return;

      const fromBtn = activeTab === 'technical' ? techBtnRef.current : softBtnRef.current;
      const toBtn   = tab      === 'technical' ? techBtnRef.current : softBtnRef.current;

      animateNavSwitch(fromBtn, toBtn, pillRef.current);

      animateCardsOut(contentRef.current, () => {
        setRenderTab(tab);
        setActiveTab(tab);
        requestAnimationFrame(() => animateCardsIn(contentRef.current));
      });
    },
    [activeTab, animateNavSwitch, animateCardsOut, animateCardsIn]
  );

  useEffect(() => {
    if (contentRef.current) {
      setTimeout(() => animateCardsIn(contentRef.current), 50);
    }
  }, [renderTab]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!Object.keys(styles).length) return null;

  return (
    <section ref={sectionRef} className={`${styles.section} ${styles.root}`}>
      <div className={styles.inner}>

        {/* ── Nav ── */}
        <nav ref={navRef} className={styles.nav} aria-label="Skills categories">
          <div ref={pillRef} className={styles.navPill} aria-hidden="true" />

          {NAV_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            const btnRef   = tab.id === 'technical' ? techBtnRef : softBtnRef;
            return (
              <button
                key={tab.id}
                ref={btnRef}
                onClick={() => handleTabChange(tab.id)}
                className={`${styles.navBtn} ${isActive ? styles.navBtnActive : ''}`}
                aria-pressed={isActive}
                aria-label={tab.label}
              >
                <span className={styles.navBtnLabel} data-tab-label>
                  {tab.label}
                </span>
                <span className={styles.navBtnSub}>{tab.sublabel}</span>
              </button>
            );
          })}
        </nav>

        {/* ── Content ── */}
        <div ref={contentRef} className={styles.content}>
          {renderTab === 'technical' ? (
            <TechGrid skills={TECHNICAL_SKILLS} styles={styles} />
          ) : (
            <SoftGrid skills={INTERPERSONAL_SKILLS} styles={styles} />
          )}
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   TechGrid
   ═══════════════════════════════════════════════════════════════════════════ */
function TechGrid({
  skills,
  styles,
}: {
  skills: typeof TECHNICAL_SKILLS;
  styles: Record<string, string>;
}) {
  return (
    <div className={styles.techGrid}>
      {skills.map((skill, i) => (
        <TechCard key={skill.id} skill={skill} index={i} styles={styles} />
      ))}
    </div>
  );
}

function TechCard({
  skill,
  index,
  styles,
}: {
  skill: typeof TECHNICAL_SKILLS[number];
  index: number;
  styles: Record<string, string>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const barRef  = useRef<HTMLDivElement>(null);
  const { bindCardTilt } = useSkillsAnimation();

  // Card tilt effect
  useEffect(() => {
    const cleanup = bindCardTilt(cardRef.current);
    return cleanup;
  }, [bindCardTilt]);

  // ── BAR FIX: CSS transition driven by a class, not GSAP width animation.
  // The inline style sets --pct; adding the class triggers the transition.
  useEffect(() => {
    if (!barRef.current) return;
    // Small delay so the element is painted at width:0 first
    const id = setTimeout(() => {
      barRef.current?.classList.add(styles.barFillAnimated);
    }, index * 50 + 80);
    return () => clearTimeout(id);
  }, [index, styles.barFillAnimated]);

  const { label } = LEVEL_CONFIG[skill.level];

  return (
    <div ref={cardRef} className={styles.techCard} data-skill-card>
      <div className={styles.techCardTop}>
        <div className={styles.techCardLeft}>
          <span className={styles.techName}>{skill.name}</span>
          <span className={styles.techCategory}>{skill.category}</span>
        </div>
        <div className={styles.techMeta}>
          <span className={styles.techPct}>{skill.percentage}%</span>
          <span className={styles.techYears}>{skill.yearsExp}yr</span>
        </div>
      </div>

      {/* Progress bar — width controlled via CSS custom property + transition */}
      <div className={styles.barTrack}>
        <div
          ref={barRef}
          className={styles.barFill}
          style={{ '--bar-pct': `${skill.percentage}%` } as React.CSSProperties}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className={styles.levelBadge}>
          <span className={styles.levelDot} />
          {label}
        </span>
        {skill.tags && (
          <div className={styles.tagRow}>
            {skill.tags.slice(0, 2).map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SoftGrid
   ═══════════════════════════════════════════════════════════════════════════ */
function SoftGrid({
  skills,
  styles,
}: {
  skills: typeof INTERPERSONAL_SKILLS;
  styles: Record<string, string>;
}) {
  return (
    <div className={styles.softGrid}>
      {skills.map((skill, i) => (
        <SoftCard key={skill.id} skill={skill} index={i} styles={styles} />
      ))}
    </div>
  );
}

function SoftCard({
  skill,
  index,
  styles,
}: {
  skill: typeof INTERPERSONAL_SKILLS[number];
  index: number;
  styles: Record<string, string>;
}) {
  const ringRef = useRef<SVGCircleElement>(null);
  const { animateRing } = useSkillsAnimation();

  const r    = 24;
  const size = 56;
  const cx   = size / 2;
  const cy   = size / 2;

  useEffect(() => {
    if (ringRef.current) {
      animateRing(ringRef.current, skill.strength, index * 0.07);
    }
  }, [skill.strength, index, animateRing]);

  return (
    <div className={styles.softCard} data-skill-card>
      <div className={styles.softCardHead}>
        <div className={styles.softIcon}>{skill.icon}</div>
        <div className={styles.ringWrap}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle cx={cx} cy={cy} r={r} fill="none" strokeWidth="3" className={styles.ringTrack} />
            <circle ref={ringRef} cx={cx} cy={cy} r={r} strokeWidth="3" className={styles.ringFill} />
          </svg>
          <span className={styles.ringLabel}>{skill.strength}</span>
        </div>
      </div>

      <p className={styles.softName}>{skill.name}</p>
      <p className={styles.softDesc}>{skill.description}</p>

      <div className={styles.pillars}>
        {skill.pillars.map((p) => (
          <span key={p} className={styles.pillar}>{p}</span>
        ))}
      </div>
    </div>
  );
}