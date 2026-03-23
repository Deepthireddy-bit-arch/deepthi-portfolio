'use client';

import React from 'react';

const ICONS: Record<string, React.ReactNode> = {
  React: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="3.5" fill="#61DAFB"/>
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none"/>
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.8" fill="none" transform="rotate(120 20 20)"/>
    </svg>
  ),
  GitHub: (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/>
  </svg>
),
Bootstrap: (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="8" fill="#7952B3"/>
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">B</text>
  </svg>
),
Redux: (
  <svg viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" fill="#764ABC"/>
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Redux</text>
  </svg>
),
'REST APIs': (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="8" fill="#0EA5E9"/>
    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">API</text>
  </svg>
),
  'Next.js': (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#000"/>
      <path d="M11 28V12l18 20h-4L11 16v12H11z" fill="white"/>
      <path d="M23 12h4v11l-4-4.5V12z" fill="white"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" fill="#3178C6"/>
      <path d="M22 21.5h4v2h-1.5V29H23v-5.5H22v-2zM17.5 21.5h5v1.5h-1.7V29h-1.6v-6H17.5v-1.5z" fill="white"/>
      <path d="M8 11h24v4H8z" fill="white" opacity="0.15"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="4" fill="#F7DF1E"/>
      <path d="M23.5 27.5c.6 1 1.4 1.7 2.8 1.7 1.2 0 1.9-.6 1.9-1.4 0-1-.8-1.3-2-1.9l-.7-.3c-2-.85-3.3-1.9-3.3-4.1 0-2 1.55-3.5 3.95-3.5 1.7 0 3 .6 3.85 2.15l-2.1 1.35c-.45-.8-.95-1.1-1.75-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.65 1.6l.7.3c2.35 1 3.65 2.05 3.65 4.35 0 2.5-1.95 3.7-4.6 3.7-2.55 0-4.2-1.2-5-2.85l2.2-1.28zM13 27.7c.45.8.85 1.47 1.8 1.47.9 0 1.5-.35 1.5-1.75V18h2.5v9.5c0 2.9-1.7 4.2-4.15 4.2-2.2 0-3.5-1.15-4.15-2.55L13 27.7z" fill="#333"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 9c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.11 2.86 2.025C22.1 16.32 23.65 18 27 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.11-2.86-2.025C24.9 10.68 23.35 9 20 9zM13 18c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.11 2.86 2.025C15.1 25.32 16.65 27 20 27c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.11-2.86-2.025C17.9 19.68 16.35 18 13 18z" fill="#38BDF8"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4L5 12.5v15L20 36l15-8.5v-15L20 4z" fill="#539E43"/>
      <path d="M20 4L5 12.5v15L20 36V4z" fill="#3E7B37"/>
      <path d="M20 10v20M12 14.5l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4l2.8 31.5L20 38.5l11.2-3L34 4H6z" fill="#E44D26"/>
      <path d="M20 4v34.5l9.2-2.5 2.4-28H20z" fill="#F16529"/>
      <path d="M20 15.5H13.5l.5 4.5H20v4.5h-6.5l.4 4.5L20 30.5v4.5L11 32l-1.3-14.5H20v-2z" fill="white"/>
      <path d="M20 15.5v4.5h5.8l-.5 5.5L20 27v4.5l7.5-2.1 1.5-13.9H20z" fill="#EBEBEB"/>
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4l2.8 31.5L20 38.5l11.2-3L34 4H6z" fill="#1572B6"/>
      <path d="M20 4v34.5l9.2-2.5 2.4-28H20z" fill="#33A9DC"/>
      <path d="M20 21.5H14l.3 4L20 27v4.5L11.5 29l-.8-9H20v-3h-9.5L10 13h10v8.5z" fill="white"/>
      <path d="M20 21.5v3h5.4l-.5 5-4.9 1.5V35l8.5-2.5L24 13H20v8.5z" fill="#EBEBEB"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="12" rx="12" ry="5" fill="#336791"/>
      <path d="M8 12v16c0 2.76 5.37 5 12 5s12-2.24 12-5V12" stroke="#336791" strokeWidth="2" fill="none"/>
      <ellipse cx="20" cy="12" rx="12" ry="5" fill="#336791" opacity="0.6"/>
      <path d="M8 20c0 2.76 5.37 5 12 5s12-2.24 12-5" stroke="#336791" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <text x="20" y="24" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold" >PG</text>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4C20 4 11 14 11 22c0 4.97 4.03 9 9 9s9-4.03 9-9c0-8-9-18-9-18z" fill="#47A248"/>
      <path d="M20 4c0 0 9 10 9 18 0 4.97-4.03 9-9 9V4z" fill="#3A8A3A"/>
      <rect x="19" y="29" width="2" height="7" rx="1" fill="#47A248"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.5 18.3L21.7 3.5a2.4 2.4 0 00-3.4 0l-3.4 3.4 4.3 4.3a2.85 2.85 0 013.6 3.6l4.1 4.1a2.85 2.85 0 11-1.7 1.7l-3.8-3.8v10a2.85 2.85 0 11-2.3 0V16.5a2.85 2.85 0 01-1.5-3.8L13.3 8.5l-9.8 9.8a2.4 2.4 0 000 3.4l14.8 14.8a2.4 2.4 0 003.4 0L36.5 21.7a2.4 2.4 0 000-3.4z" fill="#F05032"/>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="4" width="12" height="12" rx="6" fill="#F24E1E"/>
      <rect x="20" y="4" width="12" height="12" rx="6" fill="#FF7262"/>
      <rect x="8" y="16" width="12" height="12" rx="6" fill="#A259FF"/>
      <circle cx="26" cy="22" r="6" fill="#1ABCFE"/>
      <rect x="8" y="28" width="12" height="12" rx="6" fill="#0ACF83"/>
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.8 17.5H18v3.5h3.8V17.5zM17 17.5h-3.8V21H17V17.5zM17 13H13.2v3.5H17V13zM21.8 13H18v3.5h3.8V13zM26.5 17.5h-3.8V21h3.8V17.5zM37 19c-.5-2-2.5-2.8-3.8-2.8h-.5c-.3-1.8-1.5-3.3-4-4.2l-.8-.3-.5.7c-.5.8-.8 1.8-.8 2.7 0 .7.1 1.4.4 2H5.5C4.7 17 4 17.7 4 18.5c0 2.3.5 4.5 1.7 6.3C7 26.7 8.8 28 11 28.5c1.3.3 2.6.5 4 .5 2 0 4-.5 5.7-1.5.7-.4 1.4-1 2-1.5h.5c.5.5 1 1 1.7 1.3 1.2.6 2.5.7 3.8.7h3c.3 0 .5-.3.5-.5l.5-2.3c.1-.4.1-.8.1-1.2 0 0 2.5-.5 3.5-3l.2-.5c.3-.7.5-1.5.5-2v-.5z" fill="#2496ED"/>
      <rect x="12" y="13" width="3.5" height="3.5" rx=".5" fill="white" opacity="0.8"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.8 4C13 4 13.4 6.9 13.4 6.9l.01 3.1h6.5v1H8.8S4 10.4 4 17.3c0 6.9 3.8 6.6 3.8 6.6h2.3v-3.2s-.1-3.8 3.8-3.8h6.4s3.6.06 3.6-3.5V7.5S24.5 4 19.8 4zM16.3 6.3c.65 0 1.17.52 1.17 1.17 0 .65-.52 1.17-1.17 1.17-.64 0-1.17-.52-1.17-1.17 0-.65.53-1.17 1.17-1.17z" fill="#366A96"/>
      <path d="M20.2 36c6.8 0 6.4-2.9 6.4-2.9l-.01-3.1h-6.5v-1h11.1S36 29.6 36 22.7c0-6.9-3.8-6.6-3.8-6.6H29.9v3.2s.1 3.8-3.8 3.8H19.7s-3.6-.06-3.6 3.5v6.1S15.5 36 20.2 36zM23.7 33.7c-.65 0-1.17-.52-1.17-1.17 0-.65.52-1.17 1.17-1.17.64 0 1.17.52 1.17 1.17 0 .65-.53 1.17-1.17 1.17z" fill="#FFC331"/>
    </svg>
  ),
  Prisma: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 30.5L18 4l16 32-28-5.5z" fill="#0C344B"/>
      <path d="M18 4L34 36l-10-1.6L18 4z" fill="#16A394"/>
      <path d="M6 30.5l12-26.5v30.4L6 30.5z" fill="#0C344B" opacity="0.7"/>
    </svg>
  ),
  Vercel: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#000"/>
      <path d="M20 10L34 32H6L20 10z" fill="white"/>
    </svg>
  ),
  GSAP: (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#0AE448"/>
      <path d="M8 20c0-6.6 5.4-12 12-12 3.8 0 7.2 1.8 9.4 4.6L26 15c-1.5-2-3.8-3.2-6.4-3.2-4.6 0-8.4 3.7-8.4 8.2s3.8 8.2 8.4 8.2c3.8 0 7-2.5 8-6h-8v-3.8h12.2c.2.9.2 1.6.2 2.2 0 6.7-4.9 11.4-12.2 11.4-6.6 0-12-5.4-12-12z" fill="#000"/>
    </svg>
  ),
  'Framer Motion': (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#0055FF"/>
      <path d="M10 8h20v12H20L10 8zM10 20h10l10 12H20L10 32V20z" fill="white"/>
      <path d="M10 20l10-8v8H10z" fill="white" opacity="0.5"/>
    </svg>
  ),
};

const ROW_ONE = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Bootstrap',
  'Redux',
  'GSAP',
];

const ROW_TWO = [
  'Git',
  'GitHub',
  'REST APIs',
  'Figma',
  'Framer Motion',
  'JavaScript',
  'React',
  'Next.js',
  'CSS3',
  'HTML5',
];

function TechCard({ name }: { name: string }) {
  const icon = ICONS[name];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        background: '#ffffff',
        borderRadius: '18px',
        padding: '18px 20px',
        minWidth: '110px',
        width: '110px',
        boxShadow: '0 2px 14px rgba(0,0,0,0.07)',
        border: '1.5px solid rgba(0,0,0,0.06)',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-5px)';
        el.style.boxShadow = '0 10px 28px rgba(255,107,0,0.18)';
        el.style.borderColor = 'rgba(255,107,0,0.25)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 2px 14px rgba(0,0,0,0.07)';
        el.style.borderColor = 'rgba(0,0,0,0.06)';
      }}
    >
      <div style={{ width: 40, height: 40 }}>{icon}</div>
      <span style={{
        fontSize: '0.7rem',
        fontWeight: 600,
        color: '#333',
        letterSpacing: '0.01em',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        
      }}>
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  speed = 32,
}: {
  items: string[];
  direction: 'left' | 'right';
  speed?: number;
}) {
  const tripled = [...items, ...items, ...items];
  const animName = direction === 'left' ? 'tm-scroll-left' : 'tm-scroll-right';

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          gap: '14px',
          width: 'max-content',
          animation: `${animName} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running';
        }}
      >
        {tripled.map((name, i) => (
          <TechCard key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section style={{
      padding: '64px 0 72px',
      background: '#fff7ed',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        @keyframes tm-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes tm-scroll-right {
          0%   { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        .tm-fade-edges::before,
        .tm-fade-edges::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 140px;
          z-index: 2;
          pointer-events: none;
        }
        .tm-fade-edges::before {
          left: 0;
          background: linear-gradient(to right, #f0f2f8 0%, transparent 100%);
        }
        .tm-fade-edges::after {
          right: 0;
          background: linear-gradient(to left, #f0f2f8 0%, transparent 100%);
        }
      `}</style>

      <div style={{
        maxWidth: '1380px',
        margin: '0 auto 40px',
        padding: '0 clamp(1rem, 5vw, 2rem)',
      }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#ff6b00',
          marginBottom: '8px',
         
        }}>
          // technologies i reach for
        </p>
        <h2 style={{
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 800,
          color: '#1a1a2e',
          margin: 0,
          lineHeight: 1.2,
         
        }}>
          My Tech Stack
        </h2>
      </div>

      <div className="tm-fade-edges" style={{ position: 'relative', marginBottom: '14px' }}>
        <MarqueeRow items={ROW_ONE} direction="left" speed={30} />
      </div>

    
      <div className="tm-fade-edges" style={{ position: 'relative' }}>
        <MarqueeRow items={ROW_TWO} direction="right" speed={26} />
      </div>
    </section>
  );
}