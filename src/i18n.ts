import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "bn"],
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        ns: ["common", "home", "shared", "group", "about", "agent_list", "banca", "banca_city", "board_directors"],
        defaultNS: "common",
        detection: {
            order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
            caches: ["localStorage", "cookie"],
        },
    });

export default i18n;
