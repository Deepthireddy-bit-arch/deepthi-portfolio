export type Theme = 'white' | 'orange';

export interface AboutPageData {
  name: string;
  handleLine: string;
  heroImage: string | null;
  avatarImage: string | null;

  randomFacts: string[];
  nutshell: string;

  identityLine: string;

  backstoryTitle: string;
  backstory: string[];

  lifeMoments: {
    id: string;
    image: string | null;
    label: string;
  }[];

  passionsTitle: string;
  passionsLine: string;

  techStack: {
    name: string;
    years: number;
    tag: string;
  }[];

  currentlyBuilding: string;
  contact: {
    email: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}