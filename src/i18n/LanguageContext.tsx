import React, { createContext, useContext, useEffect, useState } from "react";
import en from "./en";
import type { Dictionary } from "./en";
import fr from "./fr";

export type Lang = "en" | "fr";
const STORAGE_KEY = "lang";
const dictionaries: Record<Lang, Dictionary> = { en, fr };

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
  } catch {}

  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t: dictionaries[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
