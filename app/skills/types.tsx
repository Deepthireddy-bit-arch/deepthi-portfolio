// ─── Skill Types ─────────────────────────────────────────────────────────────

export type SkillTab = 'technical' | 'interpersonal';

export type TechLevel = 'expert' | 'advanced' | 'intermediate' | 'learning';

export type ThemeVariant = 'white' | 'orange';

// ─── Technical skill ─────────────────────────────────────────────────────────
export interface TechnicalSkill {
  id: string;
  name: string;
  category: string;        // e.g. "Frontend", "Backend", "Tooling"
  level: TechLevel;
  percentage: number;      // 0-100
  yearsExp: number;
  tags?: string[];
}

// ─── Interpersonal / soft skill ──────────────────────────────────────────────
export interface InterpersonalSkill {
  id: string;
  name: string;            // e.g. "Team Leadership"
  description: string;     // short blurb shown on card
  icon: string;            // emoji or short text icon
  pillars: string[];       // e.g. ["Communication", "Trust-building"]
  strength: number;        // 0-100 — used for the radial ring
}

// ─── Nav tab descriptor ───────────────────────────────────────────────────────
export interface NavTab {
  id: SkillTab;
  label: string;
  sublabel: string;
}

// ─── Component props ──────────────────────────────────────────────────────────
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
