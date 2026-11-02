"use client";
import { Shapes, Code2, SlidersHorizontal } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const icons = { uiux: Shapes, dev: Code2, tools: SlidersHorizontal };

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{t.skills.title}</h2>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {t.skills.groups.map((g) => {
            const Icon = icons[g.icon];
            return (
              <div key={g.title}>
                <h3 className="flex items-center gap-3 border-b border-line pb-4 text-lg font-medium">
                  <Icon size={18} className="text-accent" aria-hidden />
                  {g.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
