

import type { Project, FilterOption, StatItem } from "../projects/types";

export const PROJECTS: Project[] = [


  {
    id: 1,
    title: "Dementia Detection",
    subtitle: "Final Year Academic Project",

    desc: "Machine learning system for early detection of dementia using clinical, neuroimaging, and genetic datasets. Trained predictive models using state-of-the-art ML algorithms to identify early signs — helping enable timely intervention.",
    type: "academic",
    team: "team",
    tags: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn", "Pandas"],
    year: "2024",
    isFinal: true,
    img: "/assets/images/dementia.jpg",
    highlights: ["ML Prediction Model", "Neuroimaging Data", "Early Diagnosis", "Clinical Dataset"],
    color: "#F05A1A",
  },


  {
    id: 2,
    title: "College Fest",
    subtitle: "Internship — Konig Tronics Pvt. Ltd.",
    desc: "Built during a frontend internship at Konig Tronics, Bangalore. A web application to manage and coordinate multiple college events — schedules, registrations, and announcements — using modern frontend tools.",
    type: "internship",
    team: "individual",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    year: "2023",
    isFinal: false,
    img: "/assets/images/collegefest.jpg",
    highlights: ["Event Management", "Multi-event Support", "Responsive UI", "Registration Flow"],
    color: "#FF8040",
  },
  {
    id: 3,
    title: "Netflix Clone",
    subtitle: "Internship — IIDT × Blackbuck Engineers",
    desc: "Developed as part of the Full Stack Developer internship organised by IIDT in association with APSCHE. Replicated Netflix's homepage with accurate layout, responsive design, and interactive UI components.",
    type: "internship",
    team: "individual",
    tags: ["React", "CSS", "JavaScript", "REST API", "Responsive"],
    year: "2024",
    isFinal: false,
    img: "/assets/images/netflix.jpg",
    highlights: ["Netflix UI Clone", "Responsive Layout", "React Components", "API Integration"],
    color: "#E84D0E",
  },


  {
    id: 4,
    title: "STEM E-Commerce",
    subtitle: "Full-Stack E-Commerce Platform",
    desc: "Dual-panel architecture — a seamless customer storefront plus a powerful admin dashboard. Covers product management, order tracking, Stripe payments, and real-time inventory sync.",
    type: "professional",
    team: "individual",
    tags: ["Next", "TypeScript", "Tailwind css"],
    year: "2026",
    isFinal: false,
    img: "/assets/images/electronics.jpg",
    highlights: ["Customer Panel", "Admin Dashboard", "Stripe Payments", "Live Inventory"],
    color: "#F05A1A",
  },
  {
    id: 5,
    title: "LMS",
    subtitle: "School Management System",
    desc: "Built collaboratively to streamline student records, attendance, grade management, and parent-teacher communication in one unified digital ecosystem.",
    type: "professional",
    team: "team",
    tags: ["React", "TypeScript", "Shad CN", "REST API"],
    year: "2025",
    isFinal: true,
    img: "/assets/images/lms.jpg",
    highlights: ["Student Records", "Attendance", "Grade Reports", "Parent Portal"],
    color: "#FF8040",
  },
  {
    id: 6,
    title: "MGR Platform",
    subtitle: "Bug Fixes & Performance Optimization",
    desc: "Worked with a team to resolve critical production bugs, refactor legacy code, and optimize performance across a large-scale platform — improving stability and UX significantly.",
    type: "professional",
    team: "team",
    tags: ["Debugging", "Code Review", "Performance", "Testing"],
    year: "2025",
    isFinal: false,
    img: "/assets/images/mgr.jpg",
    highlights: ["Bug Fixes", "Code Refactor", "Performance Boost", "QA Testing"],
    color: "#E84D0E",
  },
  {
    id: 7,
    title: "ACU University",
    subtitle: "Static Website with Animations",
    desc: "Designed and developed an animation-rich university website solo — clean academic aesthetics combined with GSAP-powered micro-interactions for a polished digital presence.",
    type: "professional",
    team: "individual",
    tags: ["HTML", "CSS", "GSAP", "JavaScript", "Responsive"],
    year: "2026",
    isFinal: false,
    img: "/assets/images/acu.jpg",
    highlights: ["Scroll Animations", "Fully Responsive", "GSAP Powered", "Cross-browser"],
    color: "#F07030",
  },
  {
    id: 8,
    title: "XL SuperSports",
    subtitle: "Customer-Side UI Design",
    desc: "Crafted high-fidelity UI designs for a sports retail platform — focusing on immersive product discovery, visual-first layouts, and a frictionless shopping journey.",
    type: "professional",
    team: "individual",
    tags: ["Figma", "UI/UX", "Prototyping", "Design System"],
    year: "2025",
    isFinal: false,
    img: "/assets/images/sports.jpg",
    highlights: ["Hi-Fi Mockups", "Design System", "User Flows", "Prototype"],
    color: "#FF9050",
  },

];

export const FILTER_OPTIONS: FilterOption[] = [
  { label: "All", value: "all", count: 8 },
  { label: "Professional", value: "professional", count: 4 },
  { label: "Internship", value: "internship", count: 2 },
  { label: "Academic", value: "academic", count: 1 },
  { label: "Individual", value: "individual", count: 5 },
  { label: "Team", value: "team", count: 3 },
];

export const STATS: StatItem[] = [
  { value: "8", label: "Total Projects" },
  { value: "4", label: "Professional" },
  { value: "2", label: "Internships" },
  { value: "15+", label: "Technologies" },
];
