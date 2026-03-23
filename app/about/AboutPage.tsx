
'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import type { Theme } from '../about/types';
import type { AboutPageData } from '../about/types';
import { ABOUT_DATA } from '../about/aboutData';
import { useAboutAnimations } from '../about/animations';
import TechMarquee from './component/Techmarquee';

const TICKER_WORDS = [
  'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
  'Open Source', 'GSAP', 'Figma', 'JAVA', 'HTML', 'CSS', 'Javascript', 'SQL',
  'REST APIs', 'Git', 'Github',
];
const ENJOY_ITEMS = [
  {
    tag: '01',
    title: 'Building UI Components',
    body: 'I enjoy creating reusable UI components and making sure they are clean, responsive, and easy to maintain. Turning designs into real interfaces is something I genuinely like doing.',
    emoji: '🎨',
  },
  {
    tag: '02',
    title: 'Responsive Design',
    body: 'Making websites look good on all screen sizes is something I focus on. I like testing layouts on mobile, tablet, and desktop to ensure a smooth user experience.',
    emoji: '📱',
  },
  {
    tag: '03',
    title: 'Learning New Tools',
    body: 'I enjoy exploring modern frontend tools like React, Next.js, and Tailwind CSS. I often try new things by building small projects to understand them better.',
    emoji: '🚀',
  },
  {
    tag: '04',
    title: 'Improving UI & UX',
    body: 'Even after completing a feature, I like going back and improving spacing, alignment, and overall user experience. Small changes can make a big difference.',
    emoji: '✨',
  },
];
const HOW_I_WORK = [
  { label: 'Read the error message.', detail: 'Then Google it. Then read it again properly.' },
  { label: 'Break UI into small components.', detail: 'If it feels hard, it probably needs to be split.' },
  { label: 'Console.log first, then fix.', detail: 'Simple, fast, and still the most reliable debugger.' },
  { label: 'Pixel-perfect matters.', detail: 'Spacing, alignment, and consistency are not "small things".' },
  { label: 'Reuse before rewriting.', detail: 'If I wrote it once, I try not to write it again.' },
  { label: 'Keep it simple.', detail: 'Clean code > clever code, especially in UI.' },
];
const MOMENT_SVGS: Record<string, React.ReactNode> = {
  desk: (
    <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#1a1710" />
      <rect x="40" y="50" width="120" height="80" rx="4" fill="#0d0c0a" stroke="#ff6b1a" strokeWidth="1.5" />
      <rect x="48" y="58" width="104" height="64" rx="2" fill="#0a1628" />
      <rect x="54" y="66" width="40" height="3" rx="1" fill="#ff6b1a" opacity="0.9" />
      <rect x="54" y="74" width="70" height="3" rx="1" fill="#60a5fa" opacity="0.7" />
      <rect x="60" y="82" width="55" height="3" rx="1" fill="#34d399" opacity="0.7" />
      <rect x="60" y="90" width="45" height="3" rx="1" fill="#60a5fa" opacity="0.5" />
      <rect x="54" y="98" width="65" height="3" rx="1" fill="#ff6b1a" opacity="0.6" />
      <rect x="60" y="106" width="30" height="3" rx="1" fill="#34d399" opacity="0.5" />
      <rect x="95" y="130" width="10" height="14" rx="1" fill="#2a2518" />
      <rect x="80" y="143" width="40" height="4" rx="2" fill="#2a2518" />
      <rect x="35" y="160" width="130" height="36" rx="3" fill="#1e1b14" stroke="#2a2518" strokeWidth="1" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
        <rect key={i} x={40 + i * 10} y="166" width="8" height="8" rx="1" fill="#2a2518" stroke="#3a3528" strokeWidth="0.5" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
        <rect key={i} x={44 + i * 10} y="178" width="8" height="8" rx="1" fill="#2a2518" stroke="#3a3528" strokeWidth="0.5" />
      ))}
      <rect x="127" y="99" width="2" height="8" rx="0.5" fill="#f0e8da" opacity="0.9" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#0d0c0a" />
      <rect x="20" y="40" width="160" height="180" rx="6" fill="#161410" stroke="#2a2518" strokeWidth="1" />
      <rect x="20" y="40" width="160" height="22" rx="6" fill="#1e1b14" />
      <rect x="20" y="51" width="160" height="11" fill="#1e1b14" />
      <circle cx="34" cy="51" r="4" fill="#ff5f57" />
      <circle cx="46" cy="51" r="4" fill="#ffbd2e" />
      <circle cx="58" cy="51" r="4" fill="#28c840" />
      <text x="30" y="83" fontFamily="monospace" fontSize="9" fill="#ff6b1a">❯ npm run dev</text>
      <text x="30" y="98" fontFamily="monospace" fontSize="8" fill="#34d399">  ✓ Ready on http://localhost:3000</text>
      <text x="30" y="113" fontFamily="monospace" fontSize="8" fill="#60a5fa">  ✓ Compiled in 847ms</text>
      <text x="30" y="130" fontFamily="monospace" fontSize="9" fill="#ff6b1a">❯ git status</text>
      <text x="30" y="145" fontFamily="monospace" fontSize="8" fill="#34d399">  M  src/components/Nav.tsx</text>
      <text x="30" y="158" fontFamily="monospace" fontSize="8" fill="#ff9f5a">  ?? src/utils/format.ts</text>
      <text x="30" y="174" fontFamily="monospace" fontSize="9" fill="#ff6b1a">❯ git commit -m "fix:"</text>
      <text x="30" y="189" fontFamily="monospace" fontSize="8" fill="#a8987e">  (still thinking about message)</text>
      <rect x="30" y="200" width="7" height="11" rx="1" fill="#ff6b1a" opacity="0.9" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#160f08" />
      <path d="M88 60 Q84 50 88 40 Q92 30 88 20" stroke="#ff6b1a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M100 55 Q96 45 100 35 Q104 25 100 15" stroke="#ff6b1a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M112 60 Q108 50 112 40 Q116 30 112 20" stroke="#ff6b1a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M70 80 L76 160 Q100 170 124 160 L130 80 Z" fill="#2a1a0a" stroke="#3d2510" strokeWidth="1.5" />
      <ellipse cx="100" cy="80" rx="30" ry="8" fill="#4a2c10" />
      <ellipse cx="100" cy="80" rx="22" ry="5" fill="#6b3d15" />
      <path d="M95 78 Q100 74 105 78 Q110 82 105 84 Q100 86 95 84 Q90 82 95 78" stroke="#c8a060" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M130 100 Q148 100 148 120 Q148 140 130 140" stroke="#3d2510" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="100" cy="165" rx="42" ry="8" fill="#2a1a0a" stroke="#3d2510" strokeWidth="1" />
      <rect x="0" y="170" width="200" height="90" fill="#1a1208" />
      <rect x="140" y="120" width="40" height="52" rx="2" fill="#222" stroke="#333" strokeWidth="1" transform="rotate(5 160 146)" />
      <line x1="144" y1="135" x2="175" y2="130" stroke="#444" strokeWidth="0.8" />
      <line x1="144" y1="143" x2="175" y2="138" stroke="#444" strokeWidth="0.8" />
      <line x1="144" y1="151" x2="175" y2="146" stroke="#ff6b1a" strokeWidth="0.8" opacity="0.6" />
    </svg>
  ),
  notebook: (
    <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="200" height="260" fill="#0d0c0a" />
      <rect x="30" y="30" width="140" height="200" rx="4" fill="#1a1710" stroke="#2a2518" strokeWidth="1.5" />
      <rect x="30" y="30" width="12" height="200" rx="2" fill="#222018" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
        <line key={i} x1="50" y1={56 + i * 12} x2="162" y2={56 + i * 12} stroke="#2a2518" strokeWidth="0.7" />
      ))}
      <text x="52" y="52" fontFamily="monospace" fontSize="7" fill="#ff6b1a" opacity="0.9">Architecture — Todo App v3</text>
      <text x="52" y="70" fontFamily="monospace" fontSize="6.5" fill="#a8987e">Client → Next.js (App Router)</text>
      <text x="52" y="82" fontFamily="monospace" fontSize="6.5" fill="#a8987e">API   → tRPC + Zod validation</text>
      <text x="52" y="94" fontFamily="monospace" fontSize="6.5" fill="#a8987e">DB    → PostgreSQL + Prisma</text>
      <text x="52" y="106" fontFamily="monospace" fontSize="6.5" fill="#a8987e">Cache → Redis (sessions only)</text>
      <rect x="52" y="116" width="50" height="30" rx="2" stroke="#3a3528" strokeWidth="0.8" fill="none" />
      <text x="68" y="134" fontFamily="monospace" fontSize="6" fill="#60a5fa">Next.js</text>
      <rect x="112" y="116" width="44" height="30" rx="2" stroke="#3a3528" strokeWidth="0.8" fill="none" />
      <text x="120" y="134" fontFamily="monospace" fontSize="6" fill="#34d399">Postgres</text>
      <line x1="102" y1="131" x2="112" y2="131" stroke="#ff6b1a" strokeWidth="0.8" />
      <text x="52" y="162" fontFamily="monospace" fontSize="6.5" fill="#a8987e">TODO: write the damn tests</text>
      <text x="52" y="174" fontFamily="monospace" fontSize="6.5" fill="#ff9f5a">NOTE: don't over-engineer auth</text>
      <text x="52" y="186" fontFamily="monospace" fontSize="6.5" fill="#a8987e">Q: do I need a queue? (no)</text>
      <text x="52" y="198" fontFamily="monospace" fontSize="6.5" fill="#a8987e">Q: do I want a queue? (yes)</text>
      <text x="52" y="212" fontFamily="monospace" fontSize="6" fill="#544737">11:48 PM — probably ship by 2 AM</text>
      <line x1="158" y1="200" x2="168" y2="240" stroke="#c8a060" strokeWidth="3" strokeLinecap="round" />
      <polygon points="168,240 164,242 165,238" fill="#ff6b1a" />
    </svg>
  ),
};

interface Props {
  theme?: Theme;
  data?: Partial<AboutPageData>;
}

export default function AboutPage({ theme = 'white', data: override }: Props) {
  const data: AboutPageData = useMemo(
    () => ({ ...ABOUT_DATA, ...override }),
    [override]
  );

  const [s, setS] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    import('../about/about.module.css').then((m) => {
      setS(m.default);
      setReady(true);
    });
  }, [theme]);

  useAboutAnimations(ready);
  const tickerInnerRef = useRef<HTMLDivElement>(null);
  const tickerPausedRef = useRef(false);

  useEffect(() => {
    const el = tickerInnerRef.current;
    if (!el) return;

    const onTouchStart = () => {
      tickerPausedRef.current = !tickerPausedRef.current;
      el.style.animationPlayState = tickerPausedRef.current ? 'paused' : 'running';
    };

    const onTouchCancel = () => {
      tickerPausedRef.current = false;
      el.style.animationPlayState = 'running';
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchcancel', onTouchCancel, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchcancel', onTouchCancel);
    };
  }, [ready]);

  if (!ready) return null;

  const tickerItems = [...TICKER_WORDS, ...TICKER_WORDS];

  return (
    <main className={`${s.page} ${s.root}`}>
      <section className={s.hero}>

        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1400&q=85"
            alt="Developer workspace"
            data-hero-img
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>


        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
        }} />
        <div className={s.heroContent}>
          <p className={s.heroHandle} data-hero-text>Frontend Developer · 1 Year In</p>
          <h1 className={s.heroHeading} data-hero-text>
            Dig&nbsp;<span className={s.heroHeadingItalic}>Deeper.</span>
          </h1>
        </div>
      </section>
      <div className={s.ticker}>
        <div ref={tickerInnerRef} className={s.tickerInner} data-ticker-inner>
          {tickerItems.map((w, i) => (
            <span key={i} className={s.tickerItem}>
              {w}<span className={s.tickerDot}>◆</span>
            </span>
          ))}
        </div>
      </div>
      <section className={s.factsSection}>
        <div className={s.container}>
          <div className={s.sectionLabel}>
            <span className={s.sectionLabelText} data-reveal-heading>
              Random Facts.
            </span>
            <span className={s.sectionLabelLine} />
          </div>

          <ul className={s.factsList}>
            {data.randomFacts.map((fact, i) => (
              <li key={i} className={s.factItem} data-fact-item>
                <span className={s.factArrow}>›</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={s.identitySection}>
        <div className={s.container}>
          <p className={s.identityText} data-reveal-heading>
            {data.identityLine}
          </p>
        </div>
      </section>
      <section className={s.backstorySection}>
        <div className={s.container}>
          <div className={s.splitLayout}>

            <div className={s.contentLeft}>
              <h2 className={s.backstoryHeading} data-reveal-heading>
                {data.backstoryTitle}
              </h2>
              {data.backstory.map((para, i) => (
                <p key={i} className={s.backstoryPara} data-story-para>{para}</p>
              ))}
            </div>


            <div className={s.illustrationsRight}>
              <div className={s.momentsGrid}>
                {data.lifeMoments.map((moment) => (
                  <div key={moment.id} className={s.momentCard} data-moment-card>
                    {moment.image ? (
                      <img src={moment.image} alt={moment.label} className={s.momentImg} />
                    ) : (
                      <div className={s.momentPlaceholder}>
                        {MOMENT_SVGS[moment.id] ?? <span style={{ fontSize: 40 }}>📸</span>}
                      </div>
                    )}
                    <span className={s.momentLabel}>{moment.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.enjoySection}>
        <div className={s.container}>
          <div className={s.sectionLabel} style={{ marginBottom: '40px' }}>
            <span className={s.sectionLabelText} data-reveal-heading>
              What I Enjoy Building.
            </span>
            <span className={s.sectionLabelLine} />
          </div>

          <div className={s.enjoyGrid}>
            {ENJOY_ITEMS.map((item) => (
              <div key={item.tag} className={s.enjoyCard} data-work-card>
                <div className={s.enjoyCardTop}>
                  <span className={s.enjoyTag}>{item.tag}</span>
                  <span className={s.enjoyEmoji}>{item.emoji}</span>
                </div>
                <h3 className={s.enjoyTitle}>{item.title}</h3>
                <p className={s.enjoyBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={s.howSection}>
        <div className={s.container}>
          <div className={s.sectionLabel} style={{ marginBottom: '32px' }}>
            <span className={s.sectionLabelText} data-reveal-heading>
              How I Work.
            </span>
            <span className={s.sectionLabelLine} />
          </div>

          <div className={s.howList}>
            {HOW_I_WORK.map((item, i) => (
              <div key={i} className={s.howItem} data-fact-item>
                <span className={s.howNum}>{String(i + 1).padStart(2, '0')}</span>
                <div className={s.howContent}>
                  <span className={s.howLabel}>{item.label}</span>
                  <span className={s.howDetail}>{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TechMarquee />
      <section className={s.passionsSection}>
        <div className={s.container}>
          <h2 className={s.passionsHeading} data-reveal-heading>
            {data.passionsTitle}
          </h2>
          <p className={s.passionsText} data-passions-text>
            {data.passionsLine}
          </p>
        </div>
      </section>
      <section className={s.contactSection}>
        <div className={s.container}>
          <p className={s.contactLabel}>// let's work together</p>
          <a href={`mailto:${data.contact.email}`} className={s.contactEmail}>
            {data.contact.email}
          </a>
          <div className={s.socialRow}>
            {data.contact.github && <a href={data.contact.github} className={s.socialLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {data.contact.twitter && <a href={data.contact.twitter} className={s.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>}
            {data.contact.linkedin && <a href={data.contact.linkedin} className={s.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          </div>
        </div>
      </section>

    </main>
  );
}