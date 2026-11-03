"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { site } from "@/data/content";

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <footer id="contact" className="bg-section">
      <div className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-md text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            {t.contact.title}
          </h2>

          <div className="flex flex-col gap-2 md:items-end">
            <button
              type="button"
              onClick={copy}
              aria-label={t.contact.copy}
              className="flex w-full items-center justify-between gap-6 rounded-lg border border-line bg-card px-5 py-3.5 text-left transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-accent md:w-auto"
            >
              <span>{site.email}</span>
              {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} className="text-accent" />}
              <span className="sr-only" aria-live="polite">{copied ? t.contact.copied : ""}</span>
            </button>
            <p className="text-xs text-muted">{t.contact.note}</p>
          </div>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-line py-8 text-xs">
          {site.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                {s.label} <ArrowUpRight size={12} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
