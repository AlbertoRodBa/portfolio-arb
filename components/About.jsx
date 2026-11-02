"use client";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div>
          <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {a.title[0]}
            <br />
            {a.title[1]}
          </h2>
          <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-muted">
            <p>
              <strong className="font-semibold text-ink">{a.intro}</strong>{" "}
              {a.paragraphs[0]}
            </p>
            {a.paragraphs.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line lg:aspect-[3/2]">
          <Image
            src="/images/about/about-image.jpg"
            alt="Alberto"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
