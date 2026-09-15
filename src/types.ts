export interface Project {
  id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  tags: string[];
  filterCategories: string[];
  accentColor: string;
  brief: string;
  myRole: string;
  approach: {
    research: string;
    analysis: string;
    insight: string;
  };
  deliverables: string[];
  keyTakeaway: string;
  slideTheme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  featured?: boolean;
  badge?: string;
  highlights: string[];
  skills: { name: string; icon: string }[];
  projects?: {
    brand: string;
    task: string;
    projectId?: string;
  }[];
}

export interface SkillItem {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  color: string;
}

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  roleDescription: string;
  accent: string;
  badge: string;
  projectId?: string;
}
