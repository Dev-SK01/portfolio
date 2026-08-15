export interface PersonalInfo {
  name: string;
  headline: string;
  subHeadline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumePdfUrl: string;
  avatarUrl: string;
}

export interface MetricItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  trend: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  techStack: string[];
  description: string;
  keyContributions: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'Full-Stack' | 'Systems & Backend' | 'Frontend Architecture';
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade: string;
  highlights?: string[];
}

export interface CommunityActivity {
  organization: string;
  role: string;
  description: string;
}

export interface ArchitectureHighlight {
  id: string;
  title: string;
  subtitle: string;
  badgeText: string;
  description: string;
  impactMetrics: string[];
  techUsed: string[];
}
