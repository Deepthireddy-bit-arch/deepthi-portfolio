import type { AboutPageData } from '../about/types';

export const ABOUT_DATA: AboutPageData = {
  name: 'Doddipalli Deepthi',
  handleLine: 'Full-Stack Engineer  ·  Open Source Contributor  ·  Terminal Maximalist',
  heroImage: null,
  avatarImage: null,

  // randomFacts: [
  //   'I have committed code at 3 AM on a Friday and called it a "quick fix."',
  //   'My .zshrc has 400 lines of aliases nobody else will ever understand.',
  //   'I once spent 6 hours debugging — the bug was a missing semicolon in a config file.',
  //   'I name all my side projects after Star Wars planets. Most die on Hoth.',
  //   'I have strong opinions about tab width. Two spaces. Always. No exceptions.',
  //   'I use Neovim. I will mention it unprompted. I am not sorry.',
  //   'I have three "final" versions of my portfolio and none of them are live.',
  //   'My git history reads like a five stages of grief progress tracker.',
  //   'I read MDN docs for fun. I also read changelogs. I have accepted this about myself.',
  //   'I have broken production on a Friday afternoon exactly once. I will not discuss it.',
  // ],
  randomFacts: [
  "I genuinely enjoy turning Figma designs into clean, responsive UI.",
  "I care a lot about small details like spacing, alignment, and consistency.",
  "I learned frontend by building projects, breaking them, and fixing them again.",
  "I always test my UI on mobile — not just desktop.",
  "I like making interfaces simple and easy to use.",
  "I enjoy improving UI even after it works perfectly.",
  "I write code that I can understand later — not just today.",
  "I believe good UI is not just design, but also performance.",
  "I often explore new frontend tools and try them in small projects.",
  "I enjoy solving layout issues more than writing complex logic."
],

  nutshell: '// me in a nut-shell',

  identityLine:
    "I'm a developer who writes clean code, obsesses over performance, ruins perfectly good weekends refactoring things that already work, and genuinely believes a well-named variable is an act of kindness.",

  backstoryTitle: 'How I Got Here.',

  // backstory: [
  //   "The first program I ever wrote printed 'Hello World' and I thought — that's it, that's the whole job. Eleven years later I understand that it was, in fact, the whole job. Everything else is just scale.",

  //   "I started the way most people my age did: View Source on websites I liked, copy-pasting jQuery snippets from StackOverflow, breaking things more than I fixed them. But I was relentless about it. I built terrible websites for local shops for free just to have something to debug. My first 'client' was a tuition centre that wanted their timetable to 'do something' when you hovered over it. I spent two weekends on CSS transitions. They asked me to just make it a PDF.",

  //   "Engineering college taught me data structures, algorithms, and how to function on three hours of sleep. The real education happened outside class — overnight hackathons where you ship something absurd by morning, open-source contributions nobody asked for, and a final-year project that I convinced my team to build in React when everyone else was doing PHP. We were the only group that ran out of time because we over-engineered the state management.",

  //   "My first job was at a startup where the entire engineering team was four people and the codebase had no tests and three different CSS frameworks loaded simultaneously. That'll teach you things no course ever will. I learned that pragmatism is a skill, that perfect is the enemy of shipped, and that you should always, always write the migration script before running it in production.",

  //   "Since then I've worked across the stack — React frontends, Node APIs, PostgreSQL schemas, Docker containers, the occasional AWS panic at midnight. I've led small teams, mentored interns, reviewed code, and had my own code reviewed in ways that humbled me. What I care about now is building things that are fast, maintainable, and don't make the next developer (or future me) want to cry.",
  // ],
  backstory: [
  "My journey into frontend development started with a simple curiosity — how websites actually work. I began by inspecting pages, tweaking styles in DevTools, and breaking layouts just to understand how things were built.",

  "I started learning HTML, CSS, and JavaScript through tutorials and by recreating small UI components. What began as copying designs slowly turned into understanding layouts, responsiveness, and writing cleaner code.",

  "During my learning phase, I built multiple mini projects — landing pages, portfolio layouts, and small interactive components. Most of them weren’t perfect, but each one taught me something new about structure, debugging, and consistency.",

  "Getting into React and Next.js changed how I approached development. I started thinking in components, reusable logic, and better state management instead of just static pages.",

  "In my first year, I focused on building responsive, user-friendly interfaces and improving performance wherever possible. I also learned how important clean code and proper folder structure are in real-world projects.",

  "Today, I continue to grow by building projects, exploring modern frontend tools, and improving my problem-solving skills — aiming to create interfaces that are not just visually appealing, but also fast, accessible, and scalable.",
],

  lifeMoments: [
    { id: 'desk',     image: null, label: 'The battlestation.' },
    { id: 'terminal', image: null, label: 'Home screen.'       },
    { id: 'coffee',   image: null, label: 'Fuel source.'       },
    { id: 'notebook', image: null, label: 'System design, 11 PM.' },
  ],

  passionsTitle: 'Outside the Terminal.',

  // passionsLine:
  //   "When I'm not staring at a code editor, I'm usually reading about distributed systems I'll probably never build, contributing to open-source repos with 12 stars (three of which are mine), playing chess badly at 1 AM, making pour-over coffee with the same precision I wish I applied to writing tests, or taking long walks to think through architecture problems I'm not supposed to be thinking about on a Sunday.",
passionsLine:
  "Outside the terminal, I enjoy making coffee, going for long walks, and taking time away from screens to reset and think clearly.",
  // techStack: [
  //   { name: 'TypeScript', years: 4, tag: 'daily driver'   },
  //   { name: 'React',      years: 5, tag: 'go-to'          },
  //   { name: 'Next.js',    years: 4, tag: 'go-to'          },
  
  //   { name: 'Tailwind',   years: 3, tag: 'daily driver'   },
  //   { name: 'GSAP',       years: 2, tag: 'for the craft'  },
  //   { name: 'PostgreSQL', years: 4, tag: 'trusted friend' },
  //   { name: 'Prisma',     years: 3, tag: 'go-to'          },
  //   { name: 'Figma',      years: 3, tag: 'daily driver'   },
  //   { name: 'Docker',     years: 3, tag: 'enough to ship' },
  //   { name: 'Redis',      years: 2, tag: 'when I need it' },
  //   { name: 'Neovim',     years: 3, tag: 'non-negotiable' },
  //   { name: 'Rust',       years: 1, tag: 'still learning' },
  //   { name: 'Go',         years: 1, tag: 'still learning' },
  // ],
   techStack: [
  { name: 'HTML',        years: 1, tag: 'strong base' },
  { name: 'CSS',         years: 1, tag: 'layouts & styling' },
  { name: 'JavaScript',  years: 1, tag: 'core language' },

  { name: 'React',       years: 1, tag: 'go-to' },
  { name: 'Next.js',     years: 1, tag: 'learning & building' },
  { name: 'TypeScript',  years: 1, tag: 'getting comfortable' },

  { name: 'Tailwind CSS', years: 1, tag: 'daily use' },
  { name: 'Bootstrap',    years: 1, tag: 'quick layouts' },

  { name: 'Redux',       years: 1, tag: 'state basics' },
  { name: 'REST APIs',   years: 1, tag: 'integration' },

  { name: 'Git & GitHub', years: 1, tag: 'version control' },
  { name: 'Java',         years: 1, tag: 'foundation' },
],

  currentlyBuilding:
    'A local-first note-taking CLI that syncs via Git. Markdown files, no cloud, no subscription, no "AI features." Just a fast tool that respects my file system and gets out of the way.',

  contact: {
    email: 'doddipallideepthi111@gmail.com',
    github:   'https://github.com/Deepthireddy-bit-arch',
    linkedin: 'https://www.linkedin.com/in/doddipalli-deepthi-16b031256',
  },
};