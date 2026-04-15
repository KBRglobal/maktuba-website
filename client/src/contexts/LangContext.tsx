import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { type Lang, translations } from "@/lib/i18n";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations["he"];
}

const SUPPORTED_LANGS: Lang[] = ["he", "en", "ar"];

function detectLang(): Lang {
  // Check localStorage first (user's previous choice)
  const saved = localStorage.getItem("maktuba-lang");
  if (saved && SUPPORTED_LANGS.includes(saved as Lang)) {
    return saved as Lang;
  }

  // Detect from browser language
  const browserLangs = navigator.languages || [navigator.language];
  for (const bl of browserLangs) {
    const code = bl.toLowerCase().split("-")[0];
    if (code === "he" || code === "iw") return "he";
    if (code === "ar") return "ar";
    if (code === "en") return "en";
  }

  // Default to Hebrew
  return "he";
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("maktuba-lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = translations[newLang].dir;
  }, []);

  // Apply on mount
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
  }, [lang]);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
