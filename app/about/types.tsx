export type Theme = 'white' | 'orange';

export interface AboutPageData {
  name: string;
  handleLine: string;           // e.g. "Developer + Designer + Human"
  heroImage: string | null;     // /public path or null
  avatarImage: string | null;

  randomFacts: string[];        // bullet list of fun facts
  nutshell: string;             // small code-block label

  identityLine: string;         // "I'm a husband, father…"

  backstoryTitle: string;
  backstory: string[];          // array of paragraphs

  lifeMoments: {
    id: string;
    image: string | null;
    label: string;
  }[];

  passionsTitle: string;
  passionsLine: string;         // "Outside of code, I love…"

  techStack: {
    name: string;
    years: number;
    tag: string;                // "daily driver" | "go-to" | "learning" etc.
  }[];

  currentlyBuilding: string;
  contact: {
    email: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}