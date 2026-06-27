"use client";

import { Building2, GraduationCap, Smile, Flame, Check } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Voor bedrijven",
    points: ["Ideale teambuilding", "Gezonde uitdaging", "Samen een doel bereiken"],
  },
  {
    icon: GraduationCap,
    title: "Voor studenten",
    points: ["Samen met vrienden lopen", "Leuke goodies en prijzen", "Sportieve dag op de campus"],
  },
  {
    icon: Smile,
    title: "Voor recreatieve lopers",
    points: ["Geen marathonervaring nodig", "Iedereen draagt zijn steentje bij", "Gezellige sfeer"],
  },
  {
    icon: Flame,
    title: "Voor competitieve lopers",
    points: ["Snelle parcoursen", "Sterke tegenstand", "Mooie prijzen"],
  },
];

export function VoorWieSection() {
  return (
    <section id="voor-wie" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Voor Wie
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Iedereen loopt mee
          </h2>
          <p className="mx-auto mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Of je nu voor het podium gaat of gewoon voor de sfeer: de Ekiden is
            er voor elk type loper.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <audience.icon size={24} />
              </div>
              <h3 className="mb-4 text-lg font-bold text-foreground">
                {audience.title}
              </h3>
              <ul className="space-y-3">
                {audience.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Check
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
