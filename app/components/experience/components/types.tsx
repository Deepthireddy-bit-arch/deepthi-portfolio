export interface Technology {
  name: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: Technology[];
  gallery: GalleryImage[];
}

export interface ExperienceSectionProps {
  className?: string;
}
