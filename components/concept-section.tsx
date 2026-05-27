"use client";

import { Users, Map, Trophy } from "lucide-react";

const concepts = [
  {
    icon: Users,
    title: "Teamwork",
    description: "6 lopers per team. Elk teamlid loopt een etappe en geeft de sjerp door aan de volgende loper.",
  },
  {
    icon: Map,
    title: "Afstanden",
    description: "5km, 10km, 5km, 10km, 5km, 7.195km. Samen vormen jullie de volledige marathon.",
  },
  {
    icon: Trophy,
    title: "Competitie",
    description: "Strijd tegen andere kringen en teams. Wie zet de snelste tijd neer en wint de trofee?",
  },
];

export function ConceptSection() {
  return (
    <section id="concept" className="py-20 sm:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-primary font-semibold tracking-wider uppercase text-sm">
            Het Concept
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Wat is de Ekiden?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Een Japanse aflossingsmarathon waarbij teams van 6 lopers samen de marathonafstand afleggen.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-secondary/50 p-8 transition-all duration-300 hover:bg-secondary/80 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <concept.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {concept.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {concept.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-br from-primary/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Distance breakdown */}
        <div className="mt-16 rounded-2xl bg-secondary/30 p-6 sm:p-8">
          <h3 className="text-center text-lg font-semibold text-foreground mb-6">
            Etappe Verdeling
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {["5km", "10km", "5km", "10km", "5km", "7.195km"].map((distance, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-lg bg-navy-dark/50 px-4 py-3 sm:px-6 sm:py-4"
              >
                <span className="text-xs text-muted-foreground mb-1">Etappe {i + 1}</span>
                <span className="text-lg sm:text-xl font-bold text-primary">{distance}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm">
            Totaal: 42.195 km = Volledige marathonafstand
          </p>
        </div>
      </div>
    </section>
  );
}
