"use client";
import { Moon, Sun } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { t } = useLang();
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      aria-pressed={isDark}
      className="rounded p-1 text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
    >
      {isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
    </button>
  );
}
