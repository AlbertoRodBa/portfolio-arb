"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{t.projects.title}</h2>

          <div role="group" aria-label="Filter" className="flex flex-wrap gap-2">
            {t.projects.filters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f.key)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                    active ? "border-accent-soft bg-accent-soft text-accent" : "border-line bg-card text-muted hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
