// ── Tools ──────────────────────────────
export interface Tool {
  name: string
  bg: string
  color: string
  label: string
  primary?: boolean
}

// export const TOOLS: Tool[] = [
//   { name: 'React',       bg: '#20232a', color: '#61DAFB', label: '⚛',  primary: true },
//   { name: 'Node.js',     bg: '#339933', color: '#fff',    label: '⬡',  primary: true },
//   { name: 'MongoDB',     bg: '#00684a', color: '#fff',    label: '🍃',  primary: true },
//   { name: 'Express',     bg: '#1a1a2e', color: '#bbb',    label: 'ex'  },
//   { name: 'JavaScript',  bg: '#f7df1e', color: '#000',    label: 'JS'  },
//   { name: 'Next.js',     bg: '#fff',    color: '#000',    label: 'N',  primary: true },
//   { name: 'C++',         bg: '#00599c', color: '#fff',    label: 'C++' },
//   { name: 'Tailwind',    bg: '#06b6d4', color: '#fff',    label: '〰', primary: true },
//   { name: 'Redux',       bg: '#764abc', color: '#fff',    label: '⊛'  },
//   { name: 'AWS',         bg: '#232f3e', color: '#ff9900', label: 'AWS' },
//   { name: 'GCP',         bg: '#4285f4', color: '#fff',    label: '☁'  },
//   { name: 'Docker',      bg: '#2496ed', color: '#fff',    label: '🐳'  },
//   { name: 'GitHub',      bg: '#24292e', color: '#fff',    label: '⑂'  },
//   { name: 'PostgreSQL',  bg: '#336791', color: '#fff',    label: 'PG'  },
//   { name: 'Figma',       bg: '#f24e1e', color: '#fff',    label: '✦'  },
//   { name: 'TypeScript',  bg: '#3178c6', color: '#fff',    label: 'TS', primary: true },
// ]
export const TOOLS: Tool[] = [
  { name: 'React',       bg: '#20232a', color: '#61DAFB', label: '⚛', primary: true },
  { name: 'Next.js',     bg: '#000',    color: '#fff',    label: 'N',  primary: true },
  { name: 'TypeScript',  bg: '#3178c6', color: '#fff',    label: 'TS', primary: true },
  { name: 'JavaScript',  bg: '#f7df1e', color: '#000',    label: 'JS', primary: true },

  { name: 'HTML5',       bg: '#e34f26', color: '#fff',    label: 'H'  },
  { name: 'CSS3',        bg: '#1572b6', color: '#fff',    label: 'C'  },
  { name: 'Tailwind',    bg: '#06b6d4', color: '#fff',    label: '〰', primary: true },
  { name: 'Bootstrap',   bg: '#7952b3', color: '#fff',    label: 'B'  },

  { name: 'Redux',       bg: '#764abc', color: '#fff',    label: '⊛'  },
  
  { name: 'Java',        bg: '#f89820', color: '#fff',    label: 'J'  },

  { name: 'GitHub',      bg: '#24292e', color: '#fff',    label: 'GH' },
  { name: 'Figma',       bg: '#f24e1e', color: '#fff',    label: '✦'  },
  { name: 'Framer Motion', bg: '#000', color: '#fff', label: 'FM' },
{ name: 'React Query', bg: '#ff4154', color: '#fff', label: 'RQ' },
{ name: 'Axios', bg: '#5a29e4', color: '#fff', label: 'AX' }, 
{ name: 'Git', bg: '#f05032', color: '#fff', label: 'G' },
];
// ── Projects (Image 2 exact layout) ────
export interface Project {
  companyLogo: string
  companyLogoColor: string
  companyLogoInitial: string
  companyName: string
  title: string
  tags: { label: string; icon: string }[]
  desc: string
  resultIcon: string
  resultValue: string
  resultLabel: string
  resultColor: string
}

export const PROJECTS: Project[] = [
  {
    companyLogo: 'K',
    companyLogoColor: '#F97316',
    companyLogoInitial: 'K',
    companyName: 'Konig Tronics',
    title: 'Built a Multi-Event Management Platform',
    tags: [
      { label: 'React',      icon: '⚛' },
      { label: 'JavaScript', icon: '🟨' },
    ],
    desc: 'Created UI for managing college fests with multi-event support',
    resultIcon: '🚀',
    resultValue: '38% Faster',
    resultLabel: 'Page Load',
    resultColor: '#F97316',
  },
  {
    companyLogo: 'I',
    companyLogoColor: '#3b82f6',
    companyLogoInitial: 'I',
    companyName: 'IIDT · Blackbuck Engineers',
    title: 'Developed a Netflix Homepage Clone',
    tags: [
      { label: 'React',      icon: '⚛' },
      { label: 'JavaScript', icon: '🟨' },
    ],
    desc: 'Created interactive components matching Netflix\'s design system',
    resultIcon: '🔭',
    resultValue: '98',
    resultLabel: 'Lighthouse Score',
    resultColor: '#F97316',
  },
  {
    companyLogo: 'D',
    companyLogoColor: '#F97316',
    companyLogoInitial: 'D',
    companyName: 'Deepthi Portfolio',
    title: 'Created My Dev Portfolio Website',
    tags: [
      { label: 'Next.js',  icon: '▲' },
      { label: 'Tailwind', icon: '〰' },
      { label: 'GSAP',     icon: '⚡' },
    ],
    desc: 'Created Portfolio built with Next.js + TS + GSAP animations system',
    resultIcon: '✅',
    resultValue: '100 / 1.1s',
    resultLabel: 'Accessibility score',
    resultColor: '#16a34a',
  },
  {
    companyLogo: 'K',
    companyLogoColor: '#F97316',
    companyLogoInitial: 'K',
    companyName: 'Konig Tronics',
    title: 'Built Responsive Pages for IoT Gadgets',
    tags: [
      { label: 'Java',        icon: '☕' },
      { label: 'Spring Boot', icon: '🌱' },
    ],
    desc: 'Developing interfaces for a smart home IoT dashboard optimized responsiveness',
    resultIcon: '📈',
    resultValue: '23% User',
    resultLabel: 'Activity Increase',
    resultColor: '#F97316',
  },
]

// ── Stats (Image 3 exact) ───────────────
export interface Stat {
  icon: string
  value: string
  unit: string
  subLabel: string
  mainLabel: string
  targetNum: number
  isDecimal?: boolean
}

export const STATS: Stat[] = [
  { icon: '🔭', value: '98',  unit: '',   subLabel: 'Lighthouse Score',   mainLabel: 'Lighthouse Score',   targetNum: 98  },
  { icon: '🚀', value: '38',  unit: '%',  subLabel: 'Faster',             mainLabel: 'Page Speed Improved',targetNum: 38  },
  { icon: '✅', value: '100', unit: '',   subLabel: 'Accessibility',       mainLabel: 'Accessibility',      targetNum: 100 },
  { icon: '⏱', value: '1.2', unit: 's',  subLabel: 'Load Time',          mainLabel: 'Load Time',          targetNum: 1.2, isDecimal: true },
]

// ── Contributions ───────────────────────
export interface Contribution {
  tag: string
  tagColor: string
  title: string
  desc: string
}

export const CONTRIBUTIONS: Contribution[] = [
  { tag: 'feat', tagColor: '#16a34a', title: 'Rebuilt analytics dashboard with Next.js 14 RSC', desc: 'Serving 40,000+ enterprise users. Streaming SSR reduced TTFB by 42%, LCP 4.2s → 1.1s.' },
  { tag: 'arch', tagColor: '#7c3aed', title: 'Architected 35+ component design system in Storybook', desc: 'WCAG 2.1 AA accessibility, dark mode, adopted across 4 product teams company-wide.' },
  { tag: 'perf', tagColor: '#0284c7', title: 'WebSocket real-time streams across 6 dashboard views', desc: 'Optimistic UI, graceful reconnection and live state sync without page refresh.' },
  { tag: 'test', tagColor: '#d97706', title: 'Playwright E2E suite — 87% critical path coverage', desc: 'CI/CD on GitHub Actions with Vercel branch preview deployments on every PR.' },
  { tag: 'lead', tagColor: '#F97316', title: 'Mentored 3 junior engineers weekly', desc: 'Code reviews, pair programming and Storybook documentation workshops every sprint.' },
]

// ── Gallery ─────────────────────────────
export interface GalleryItem {
  image: string
  title: string
  category: string
}

export const GALLERY: GalleryItem[] = [
  { image: '/images/learnexa.png',   title: 'Learnexa — AI Quiz Platform',     category: 'Web App'     },
  { image: '/images/app-screens.png',title: 'Increasing Happiness App',         category: 'Mobile'      },
  { image: '/images/learnexa.png',   title: 'Analytics Dashboard',              category: 'Dashboard'   },
  { image: '/images/app-screens.png',title: 'E-Commerce Storefront',            category: 'Web App'     },
  { image: '/images/learnexa.png',   title: 'NBFC Loan Portal',                 category: 'Fintech'     },
  { image: '/images/app-screens.png',title: 'IoT Smart Home UI',                category: 'IoT'         },
]
