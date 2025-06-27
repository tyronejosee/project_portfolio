import type { TFunction } from "i18next";

export const profile = {
  name: "Tyrone José",
  roles: ["Full Stack Developer"],
  sloganShort: "profile.sloganShort",
  sloganLong: "profile.sloganLong",
  bio: "profile.bio",

  // Contact
  email: "tyrone@example.com",
  phone: "+56 9 1234 5678",
  location: "Santiago, Chile",
  timezone: "America/Santiago",

  // Branding
  website: "https://tyronejose.dev",
  avatar: "/images/avatar.jpg",
  github: "https://github.com/tyronejose",
  linkedin: "https://linkedin.com/in/tyronejose",
  x: "https://x.com/tyronejose",
  devto: "https://dev.to/tyronejose",
  youtube: "https://youtube.com/@tyronejose",
  blog: "https://tyronejose.dev/blog",

  // Proffesional
  status: "profile.status",
  experienceYears: 10,
  availableForHire: true,
  freelanceAvailable: true,
  availableForRemote: true,
  portfolioURL: "https://tyronejose.dev/portfolio",
  resumeURL: "/docs/cv-name-lastname.pdf",

  // About
  skillsFeatured: ["Python", "JavaScript", "TypeScript", "Django", "React"],
  stackPrimary: ["TypeScript", "React", "Node.js"],
  stackSecondary: ["Python", "Docker", "PostgreSQL"],
  coreValues: [
    {
      id: "1",
      title: "profile.core_values.1.title",
      description: "profile.core_values.1.description",
    },
    {
      id: "2",
      title: "profile.core_values.2.title",
      description: "profile.core_values.2.description",
    },
    {
      id: "3",
      title: "profile.core_values.3.title",
      description: "profile.core_values.3.description",
    },
    {
      id: "4",
      title: "profile.core_values.4.title",
      description: "profile.core_values.4.description",
    },
  ],
  education: [
    {
      id: "1",
      title: "profile.education.1.title",
      company: "profile.education.1.company",
      description: "profile.education.1.description",
      year: "2022",
    },
    {
      id: "2",
      title: "profile.education.2.title",
      company: "profile.education.2.company",
      description: "profile.education.2.description",
      year: "2023",
    },
    {
      id: "3",
      title: "profile.education.3.title",
      company: "profile.education.3.company",
      description: "profile.education.3.description",
      year: "2025",
    },
  ],
  interestedIn: [
    "profile.interested_in.1",
    "profile.interested_in.2",
    "profile.interested_in.3",
    "profile.interested_in.4",
    "profile.interested_in.5",
    "profile.interested_in.6",
    "profile.interested_in.7",
    "profile.interested_in.8",
  ],

  // Quotes
  quote: "profile.quote",
  funFact: "profile.funFact",
};

export const getProfile = (t: TFunction) => ({
  ...profile,
  sloganShort: t(profile.sloganShort),
  sloganLong: t(profile.sloganLong),
  status: t(profile.status),
  quote: t(profile.quote),
  funFact: t(profile.funFact),
  coreValues: profile.coreValues.map((item) => ({
    id: item.id,
    title: t(item.title),
    description: t(item.description),
  })),
  education: profile.education.map((item) => ({
    id: item.id,
    title: t(item.title),
    company: t(item.company),
    description: t(item.description),
    year: item.year,
  })),
  interestedIn: profile.interestedIn.map((key) => t(key)),
});
