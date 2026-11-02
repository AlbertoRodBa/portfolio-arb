"use client";
import { useLang } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { isEs, toggle } = useLang();
  const base = "px-1 transition-colors";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isEs ? "Switch to English" : "Cambiar a español"}
      className="flex items-center text-xs font-medium rounded focus-visible:outline-2 focus-visible:outline-accent"
    >
      <span className={`${base} ${isEs ? "text-accent font-semibold" : "text-muted"}`}>ES</span>
      <span className="text-line" aria-hidden>|</span>
      <span className={`${base} ${!isEs ? "text-accent font-semibold" : "text-muted"}`}>EN</span>
    </button>
  );
}
