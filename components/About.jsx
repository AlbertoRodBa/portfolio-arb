"use client";
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
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Placeholder visual (reemplazar por foto/ilustración) */}
        <div
          aria-hidden
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-black/[0.03] lg:aspect-[3/2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "20% 25%",
          }}
        >
          <div className="absolute left-1/2 top-1/2 aspect-square w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line" />
        </div>
      </div>
    </section>
  );
}
