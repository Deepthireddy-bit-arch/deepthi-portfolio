import { ExperienceItem } from "./types";


export const experienceData: ExperienceItem[] = [
  {
    id: "01",
    role: "Frontend Developer",
    company: "Aim Window Info Tech",
    location: "Bengaluru, Karnataka",
    startDate: "Feb 2025",
    endDate: "Present",
    current: true,
    description:
      "Building scalable web applications for SaaS clients. Collaborating cross-functionally with designers and backend engineers to deliver pixel-perfect, performant interfaces.",

    achievements: [
      "Reduced page load time by 38% via lazy loading & code splitting",

      "Built a reusable component library used across 3 internal products",
      "Implemented CI/CD pipeline with automated Lighthouse checks",

      "Optimized images using Next.js Image component, reducing bandwidth usage by 30%",
      "Improved SEO performance through metadata optimization and structured data",
      "Developed responsive UI components supporting mobile, tablet, and desktop devices",
      "Collaborated with backend team to integrate REST APIs and improve data flow",

      "Implemented state management using Redux/Zustand for scalable application structure",

      "Enhanced user engagement by improving UI animations and interaction feedback"
    ],
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "React Query" },
      { name: "Framer Motion" },
      { name: "Figma" },
    ],
    gallery: [
      {
        id: "g1",
        src: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=500&q=80",
        alt: "Dashboard UI",
        caption: "SaaS Dashboard",
        aspect: "landscape",
      },
      {
        id: "g2",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
        alt: "Code on screen",
        caption: "Component Library",
        aspect: "portrait",
      },
      {
        id: "g3",
        src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&q=80",
        alt: "Wireframe sketches",
        caption: "UI Wireframes",
        aspect: "square",
      },
      {
        id: "g4",
        src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&q=80",
        alt: "Team collaboration",
        caption: "Design Sprints",
        aspect: "landscape",
      },
      {
        id: "g5",
        src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80",
        alt: "Design system",
        caption: "Design System",
        aspect: "portrait",
      },
      {
        id: "g6",
        src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80",
        alt: "Mobile UI",
        caption: "Mobile Interface",
        aspect: "square",
      },
    ],
  },

];
