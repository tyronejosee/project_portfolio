import type { TFunction } from "i18next";

export const getNavItems = (t: TFunction) => [
  { name: t("nav.home"), path: "/" },
  { name: t("nav.experience"), path: "/experience" },
  { name: t("nav.projects"), path: "/projects" },
  { name: t("nav.skills"), path: "/skills" },
  { name: t("nav.contact"), path: "/contact" },
];
