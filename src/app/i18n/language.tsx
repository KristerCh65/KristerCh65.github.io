import { createContext, useContext, useEffect, useState } from "react";
import { strings } from "@/app/i18n/strings";

export type Lang = "en" | "es";

// Text that differs per language. Plain strings are the same in both.
export type Localized = { en: string; es: string };
export type Text = string | Localized;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof strings)[Lang];
  l: (text: Text) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Always render English first so server and client markup match; the saved choice is applied after mount
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") {
        setLangState(saved);
        return;
      }
    } catch {}
    // First visit: follow the browser's language
    if (navigator.language?.toLowerCase().startsWith("es")) setLangState("es");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const l = (text: Text) => (typeof text === "string" ? text : text[lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: strings[lang], l }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
