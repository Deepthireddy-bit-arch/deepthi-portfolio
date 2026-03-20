import type { TechnicalSkill, InterpersonalSkill, NavTab } from '../skills/types';

// ─── Nav tab definitions ──────────────────────────────────────────────────────
export const NAV_TABS: NavTab[] = [
  {
    id: 'technical',
    label: 'Technical Skills',
    sublabel: 'Code · Tools · Frameworks',
  },
  {
    id: 'interpersonal',
    label: 'Interpersonal Skills',
    sublabel: 'Team · Leadership · Collaboration',
  },
];

// ─── Technical skills ─────────────────────────────────────────────────────────
// export const TECHNICAL_SKILLS: TechnicalSkill[] = [
//   // Frontend
//   {
//     id: 'react',
//     name: 'React',
//     category: 'Frontend',
//     level: 'expert',
//     percentage: 95,
//     yearsExp: 5,
//     tags: ['JSX', 'Hooks', 'Context'],
//   },
//   {
//     id: 'nextjs',
//     name: 'Next.js',
//     category: 'Frontend',
//     level: 'expert',
//     percentage: 92,
//     yearsExp: 4,
//     tags: ['App Router', 'SSR', 'ISR'],
//   },
//   {
//     id: 'typescript',
//     name: 'TypeScript',
//     category: 'Frontend',
//     level: 'expert',
//     percentage: 90,
//     yearsExp: 4,
//     tags: ['Generics', 'Utility Types'],
//   },
//   {
//     id: 'tailwind',
//     name: 'Tailwind CSS',
//     category: 'Frontend',
//     level: 'expert',
//     percentage: 94,
//     yearsExp: 3,
//     tags: ['Variants', 'Custom Config'],
//   },
//   // Backend
//   {
//     id: 'java',
//     name: 'JAVA',
//     category: 'Backend',
//     level: 'advanced',
//     percentage: 84,
//     yearsExp: 5,
//     tags: ['Express', 'REST', 'Streams'],
//   },
//   {
//     id: 'postgres',
//     name: 'PostgreSQL',
//     category: 'Backend',
//     level: 'advanced',
//     percentage: 80,
//     yearsExp: 4,
//     tags: ['Indexing', 'Joins', 'CTEs'],
//   },
//   {
//     id: 'graphql',
//     name: 'GraphQL',
//     category: 'Backend',
//     level: 'intermediate',
//     percentage: 68,
//     yearsExp: 2,
//     tags: ['Resolvers', 'Schema'],
//   },
//   // Tooling
//   {
//     id: 'git',
//     name: 'Git',
//     category: 'Tooling',
//     level: 'expert',
//     percentage: 96,
//     yearsExp: 6,
//     tags: ['Branching', 'Rebase', 'CI'],
//   },
//   {
//     id: 'docker',
//     name: 'Docker',
//     category: 'Tooling',
//     level: 'advanced',
//     percentage: 76,
//     yearsExp: 3,
//     tags: ['Compose', 'Multi-stage'],
//   },
//   {
//     id: 'figma',
//     name: 'Figma',
//     category: 'Design',
//     level: 'advanced',
//     percentage: 83,
//     yearsExp: 3,
//     tags: ['Components', 'Auto Layout'],
//   },
//   {
//     id: 'gsap',
//     name: 'GSAP',
//     category: 'Animation',
//     level: 'advanced',
//     percentage: 80,
//     yearsExp: 2,
//     tags: ['ScrollTrigger', 'Timeline'],
//   },
//   {
//     id: 'prisma',
//     name: 'Prisma',
//     category: 'Backend',
//     level: 'advanced',
//     percentage: 82,
//     yearsExp: 3,
//     tags: ['ORM', 'Migrations'],
//   },
// ];
export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  // ── Frontend ─────────────────────────────
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend',
    level: 'advanced',
    percentage: 90,
    yearsExp: 1,
    tags: ['Semantic', 'Forms'],
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend',
    level: 'advanced',
    percentage: 88,
    yearsExp: 1,
    tags: ['Flexbox', 'Grid'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    level: 'advanced',
    percentage: 85,
    yearsExp: 1,
    tags: ['ES6+', 'DOM'],
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    level: 'advanced',
    percentage: 82,
    yearsExp: 1,
    tags: ['Hooks', 'Components'],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    level: 'intermediate',
    percentage: 75,
    yearsExp: 1,
    tags: ['Routing', 'SSR'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    level: 'intermediate',
    percentage: 70,
    yearsExp: 1,
    tags: ['Types', 'Interfaces'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'advanced',
    percentage: 85,
    yearsExp: 1,
    tags: ['Utility-first', 'Responsive'],
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Frontend',
    level: 'intermediate',
    percentage: 72,
    yearsExp: 1,
    tags: ['Grid', 'Components'],
  },
  {
    id: 'redux',
    name: 'Redux',
    category: 'Frontend',
    level: 'intermediate',
    percentage: 70,
    yearsExp: 1,
    tags: ['State', 'Store'],
  },

  // ── Backend / Basics ─────────────────────
  {
    id: 'java',
    name: 'Java',
    category: 'Backend',
    level: 'intermediate',
    percentage: 65,
    yearsExp: 1,
    tags: ['OOP', 'Basics'],
  },
  {
    id: 'rest',
    name: 'REST APIs',
    category: 'Backend',
    level: 'intermediate',
    percentage: 75,
    yearsExp: 1,
    tags: ['Fetch', 'Axios'],
  },

  // ── Tools ───────────────────────────────
  {
    id: 'git',
    name: 'Git',
    category: 'Tooling',
    level: 'advanced',
    percentage: 85,
    yearsExp: 1,
    tags: ['Commit', 'Branch'],
  },
 
];

// ─── Interpersonal / soft skills ──────────────────────────────────────────────
export const INTERPERSONAL_SKILLS: InterpersonalSkill[] = [
  {
    id: 'team-leadership',
    name: 'Team Leadership',
    description:
      'Guiding cross-functional teams toward shared goals with clear direction and psychological safety.',
    icon: '⚡',
    pillars: ['Vision Setting', 'Accountability', 'Empowerment'],
    strength: 90,
  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    description:
      'Working fluidly with designers, PMs, and engineers to ship cohesive products on schedule.',
    icon: '◈',
    pillars: ['Async Comms', 'Pair Programming', 'Feedback Loops'],
    strength: 94,
  },
  {
    id: 'communication',
    name: 'Communication',
    description:
      'Translating complex technical concepts into clear language for any audience — exec to intern.',
    icon: '◎',
    pillars: ['Documentation', 'Presentations', 'Active Listening'],
    strength: 88,
  },
  {
    id: 'mentoring',
    name: 'Mentoring',
    description:
      'Leveling up junior developers through code reviews, pair sessions, and structured growth plans.',
    icon: '▲',
    pillars: ['Code Reviews', '1-on-1s', 'Knowledge Sharing'],
    strength: 85,
  },
  {
    id: 'adaptability',
    name: 'Adaptability',
    description:
      'Thriving in fast-paced environments, context-switching gracefully when priorities shift.',
    icon: '◉',
    pillars: ['Prioritisation', 'Resilience', 'Continuous Learning'],
    strength: 91,
  },
  {
    id: 'conflict-resolution',
    name: 'Conflict Resolution',
    description:
      'Mediating technical disagreements and interpersonal friction with empathy and objectivity.',
    icon: '◇',
    pillars: ['De-escalation', 'Mediation', 'Compromise'],
    strength: 80,
  },
  {
  id: 'problem-solving',
  name: 'Problem Solving',
  description:
    'Breaking down complex problems into manageable parts and delivering efficient, scalable solutions under constraints.',
  icon: '✦',
  pillars: ['Analytical Thinking', 'Debugging', 'Optimization'],
  strength: 92,
},
{
  id: 'time-management',
  name: 'Time Management',
  description:
    'Prioritizing tasks effectively to meet deadlines while maintaining quality and consistency across deliverables.',
  icon: '⏱',
  pillars: ['Prioritization', 'Planning', 'Focus'],
  strength: 89,
}
];

// ─── Level display config ─────────────────────────────────────────────────────
export const LEVEL_CONFIG = {
  expert:       { label: 'Expert',       color: '#e86c2c' },
  advanced:     { label: 'Advanced',     color: '#f5a06a' },
  intermediate: { label: 'Intermediate', color: '#c9a882' },
  learning:     { label: 'Learning',     color: '#8c7a66' },
} as const;
