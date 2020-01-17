import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Russian from "./translations/ru.json";
import English from "./translations/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { common: Russian },
      en: { common: English }
    },
    whitelist: ["en", "ru"],
    fallbackLng: "ru",
    debug: true,
    interpolation: {
      escapeValue: false
    },
    ns: ["common"],
    defaultNS: "common",
    react: {
      wait: true
    },
    useSuspense: false
  });

export default i18n;
