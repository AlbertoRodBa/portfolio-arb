"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { content } from "@/data/content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [isEs, setIsEs] = useState(false); // false = EN, true = ES
  const toggle = () => setIsEs((v) => !v);
  const lang = isEs ? "es" : "en";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ isEs, lang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
