"use client";

import { Clock, Users, Zap, Award, PartyPopper } from "lucide-react";

const scheduleItems = [
  {
    time: "11:00",
    title: "Aanmeldingen & Opwarming",
    description: "Check-in bij de startlocatie en collectieve opwarming met alle deelnemers.",
    icon: Users,
  },
  {
    time: "12:00",
    title: "Startschot",
    description: "De eerste lopers van elk team vertrekken! De spanning begint.",
    icon: Zap,
  },
  {
    time: "16:30",
    title: "Eerste teams finishen",
    description: "De snelste teams passeren de eindstreep na een epische race.",
    icon: Award,
  },
  {
    time: "18:00",
    title: "Prijsuitreiking & Afterparty",
    description: "Viering van alle prestaties met prijzen en een welverdiend feest!",
    icon: PartyPopper,
  },
];

export function ScheduleSection() {
  return (
    <section id="schema" className="py-20 sm:py-28 bg-navy-dark">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-primary font-semibold tracking-wider uppercase text-sm">
            Timing
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Programma
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Een complete dag vol sport, spanning en plezier
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-6 sm:gap-8 group"
              >
                {/* Time circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
                    <item.icon size={24} className="text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-xl bg-secondary/30 p-5 sm:p-6 group-hover:bg-secondary/50 transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-primary font-bold text-lg">
                      <Clock size={16} />
                      {item.time}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-secondary/20 inline-block px-4 py-2 rounded-full">
            * Tijden zijn onder voorbehoud en kunnen wijzigen
          </p>
        </div>
      </div>
    </section>
  );
}
