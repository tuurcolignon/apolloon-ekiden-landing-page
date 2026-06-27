"use client";

import { Users, Repeat, Trophy } from "lucide-react";

const concepts = [
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Een team van 6 lopers legt samen de marathonafstand van 42,195 km af. Sterker samen dan alleen.",
  },
  {
    icon: Repeat,
    title: "Estafette",
    description:
      "Elke loper neemt één deel van het parcours voor zijn rekening en geeft daarna symbolisch het stokje door aan een ploeggenoot.",
  },
  {
    icon: Trophy,
    title: "Competitie",
    description:
      "Strijd tegen andere teams en kringen. Ideaal voor persoonlijke records op de 5 en 10 km!",
  },
];

const legs = [
  { runner: "Loper 1", distance: "5 km" },
  { runner: "Loper 2", distance: "10 km" },
  { runner: "Loper 3", distance: "5 km" },
  { runner: "Loper 4", distance: "10 km" },
  { runner: "Loper 5", distance: "5 km" },
  { runner: "Loper 6", distance: "7,195 km" },
];

export function ConceptSection() {
  return (
    <section id="concept" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Het Concept
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Wat is een Ekiden?
          </h2>
          <p className="mx-auto mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Een Ekiden is een estafetteloop waarbij een team van 6 lopers samen
            de marathonafstand van 42,195 km aflegt. Elke loper neemt één deel
            van het parcours voor zijn rekening en geeft daarna symbolisch het
            stokje door aan een ploeggenoot.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept.title}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <concept.icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {concept.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {concept.description}
              </p>
            </div>
          ))}
        </div>

        {/* Distance breakdown */}
        <div className="mt-14 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h3 className="mb-6 text-center text-lg font-semibold text-foreground">
            De verdeling van de etappes
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {legs.map((leg, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-xl bg-secondary px-4 py-4 text-center"
              >
                <span className="mb-1 text-xs font-medium text-muted-foreground">
                  {leg.runner}
                </span>
                <span className="text-lg font-bold text-accent sm:text-xl">
                  {leg.distance}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            Totaal: <span className="font-semibold text-foreground">42,195 km</span> — de
            volledige marathonafstand. Ideaal voor persoonlijke records op de 5
            en 10 km!
          </p>
        </div>
      </div>
    </section>
  );
}
