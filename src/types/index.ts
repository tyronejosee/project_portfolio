import { contactSchema } from "@/lib/validations";
import { z } from "zod";

// SVG types
export type SVGProps = React.SVGProps<SVGSVGElement>;

// Data types
export type Profile = {
  name: string;
  roles: string[];
  sloganShort: string;
  sloganLong: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  website: string;
  avatar: string;
  github: string;
  linkedin: string;
  x: string;
  devto: string;
  youtube: string;
  blog: string;
  status: string;
  experienceYears: number;
  availableForHire: boolean;
  freelanceAvailable: boolean;
  availableForRemote: boolean;
  portfolioURL: string;
  resumeURL: string;
  skillsFeatured: string[];
  stackPrimary: string[];
  stackSecondary: string[];
  coreValues: {
    id: string;
    title: string;
    description: string;
  }[];
  education: {
    id: string;
    title: string;
    company: string;
    description: string;
    year: string;
  }[];
  interestedIn: string[];
  quote: string;
  funFact: string;
};

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  targetAudience: string;
  isFeatured: boolean;
}

export type Skill = {
  name: string;
  icon: React.FC<SVGProps>;
  category:
    | "languages"
    | "frameworks"
    | "databases"
    | "tools"
    | "mobile"
    | "design"
    | "devops"
    | "ia";
  isFlat: boolean;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string;
  technologies: string[];
  logo?: string;
  companyUrl?: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

// UI types
export type NavItem = {
  name: string;
  path: string;
};

// Form data types
export type ContactFormValues = z.infer<typeof contactSchema>;
