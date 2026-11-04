"use client";
import { ArrowDown, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
        <p className="flex items-center gap-2 text-xs text-muted sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {h.available}
        </p>

        <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tighter sm:text-6xl lg:text-7xl">
          {h.title}
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{h.subtitle}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-solid px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-solid-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              {h.primary} <ArrowDown size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-card px-5 py-3.5 text-sm font-medium transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              {h.secondary} <Mail size={16} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
