export interface Strength {
  id: string;
  title: string;
  boldHighlight: string;
  description: string;
  tag: string;
  iconName: string;
  colorClass: string;
}

export interface WorkPiece {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  url: string;
  category: "pr" | "research" | "journalism" | "all";
  duration?: string;
  image?: string;
  skillsUsed: string[];
  fullContent?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  type: "work" | "advocacy" | "education";
}
