"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { site } from "@/data/content";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const link = "nav-menu-link text-sm transition-colors";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="font-semibold tracking-tight">{site.name}</a>

        {/* Escritorio */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {t.nav.map((n) => (
            <a key={n.href} href={n.href} className={link}>
              <span className="nav-link-underline">{n.label}</span>
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        {/* Móvil */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.menu}
            className="rounded p-1 text-ink focus-visible:outline-2 focus-visible:outline-accent"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-base md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {t.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className={`${link} block py-3 text-base`}>
                  <span className="nav-link-underline">{n.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
