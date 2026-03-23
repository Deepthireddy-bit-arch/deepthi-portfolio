

// export type ProjectType = "professional" | "personal";
// export type TeamType    = "individual" | "team";
// export type FilterType  = "all" | "professional" | "personal" | "individual" | "team";

// export interface Project {
//   id:         number;
//   title:      string;
//   subtitle:   string;
//   desc:       string;
//   type:       ProjectType;
//   team:       TeamType;
//   tags:       string[];
//   year:       string;
//   isFinal:    boolean;
//   img:        string;
//   highlights: string[];
//   color:      string;
// }

// export interface FilterOption {
//   label: string;
//   value: FilterType;
//   count: number;
// }

// export interface StatItem {
//   value: string;
//   label: string;
// }
export type ProjectType = "professional" | "academic" | "internship"; // added "academic" and "internship"
export type TeamType    = "individual" | "team";
// export type FilterType  = "all" | "professional" | "academic" | "internship" | "individual" | "team";
export type FilterType  = "all" | "professional" | "academic" | "internship" | "individual" | "team";
export interface Project {
  id:         number;
  title:      string;
  subtitle:   string;
  desc:       string;
  type:       ProjectType;
  team:       TeamType;
  tags:       string[];
  year:       string;
  isFinal:    boolean;
  img:        string;
  highlights: string[];
  color:      string;
}

export interface FilterOption {
  label: string;
  value: FilterType;
  count: number;
}

export interface StatItem {
  value: string;
  label: string;
}