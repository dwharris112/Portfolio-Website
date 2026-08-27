export type LinkItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Project = {
  name: string;
  label?: string;
  summary: string;
  built: string;
  technicalDetails: string[];
  technologies: string[];
  impact?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export type ExperienceItem = {
  organization: string;
  role: string;
  location?: string;
  dates: string;
  placeholder?: boolean;
  accomplishments: string[];
};

export type LeadershipItem = {
  organization: string;
  role: string;
  dates: string;
  placeholder?: boolean;
  accomplishments: string[];
};
