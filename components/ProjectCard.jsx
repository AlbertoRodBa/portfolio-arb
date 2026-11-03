"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function ProjectCard({ project }) {
  const { lang, t } = useLang();
  const title = project.title[lang];
  const isExternal = /^https?:\/\//.test(project.href);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors duration-200 hover:border-muted hover:shadow-md">
      <div className="relative aspect-[16/10] w-full" style={{ backgroundColor: project.tint }}>
        {project.image && (
          <Image src={project.image} alt={title} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs text-muted">{project.tags[lang].join(" • ")}</p>
        <h3 className="mt-3 text-xl font-medium tracking-tight">{title}</h3>
        <p className="mt-6 flex-1 text-sm leading-relaxed text-muted">{project.description[lang]}</p>

        <Link
          href={project.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="mt-6 flex items-center justify-start gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {t.projects.cta}
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
