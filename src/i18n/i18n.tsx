"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./translations/en.json";
import es from "./translations/es.json";
import de from "./translations/de.json";
import pt from "./translations/pt.json";
import zh from "./translations/zh.json";
import ja from "./translations/ja.json";
import ko from "./translations/ko.json";
import ru from "./translations/ru.json";
import it from "./translations/it.json";
import hi from "./translations/hi.json";

export const resources = {
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
  pt: { translation: pt },
  zh: { translation: zh },
  ja: { translation: ja },
  ko: { translation: ko },
  ru: { translation: ru },
  it: { translation: it },
  hi: { translation: hi },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      es: { translation: es },
      de: { translation: de },
      pt: { translation: pt },
      zh: { translation: zh },
      ja: { translation: ja },
      ko: { translation: ko },
      ru: { translation: ru },
      it: { translation: it },
      hi: { translation: hi },
    },
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
