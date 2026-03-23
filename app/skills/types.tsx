

export type SkillTab = 'technical' | 'interpersonal';

export type TechLevel = 'expert' | 'advanced' | 'intermediate' | 'learning';

export type ThemeVariant = 'white' | 'orange';


export interface TechnicalSkill {
  id: string;
  name: string;
  category: string;
  level: TechLevel;
  percentage: number;
  yearsExp: number;
  tags?: string[];
}


export interface InterpersonalSkill {
  id: string;
  name: string;
  description: string;
  icon: string;
  pillars: string[];
  strength: number;
}


export interface NavTab {
  id: SkillTab;
  label: string;
  sublabel: string;
}

export interface SkillsSectionProps {
  theme?: ThemeVariant;
  defaultTab?: SkillTab;
}

export interface SkillsNavProps {
  activeTab: SkillTab;
  onTabChange: (tab: SkillTab) => void;
  theme: ThemeVariant;
}

export interface TechGridProps {
  skills: TechnicalSkill[];
  isVisible: boolean;
  theme: ThemeVariant;
}

export interface SoftGridProps {
  skills: InterpersonalSkill[];
  isVisible: boolean;
  theme: ThemeVariant;
}
