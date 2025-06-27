import type { TFunction } from "i18next";
import type { FAQ } from "@/types";

export const getFAQs: (t: TFunction) => FAQ[] = (t) => [
  {
    id: "1",
    question: t("faqs.1.question"),
    answer: t("faqs.1.answer"),
  },
  {
    id: "2",
    question: t("faqs.2.question"),
    answer: t("faqs.2.answer"),
  },
  {
    id: "3",
    question: t("faqs.3.question"),
    answer: t("faqs.3.answer"),
  },
  {
    id: "4",
    question: t("faqs.4.question"),
    answer: t("faqs.4.answer"),
  },
];
