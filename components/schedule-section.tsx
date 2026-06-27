"use client";

import { Clock, Users, Zap, MoreHorizontal } from "lucide-react";

const scheduleItems = [
  {
    time: "11:00",
    title: "Aankomst & onthaal",
    description:
      "Check-in bij het Sportkot, ophalen van je startnummer en collectieve opwarming.",
    icon: Users,
    confirmed: true,
  },
  {
    time: "13:00",
    title: "Startschot",
    description:
      "De eerste lopers van elk team vertrekken. De aflossingsmarathon is begonnen!",
    icon: Zap,
    confirmed: true,
  },
  {
    time: "Later",
    title: "Finish, prijsuitreiking & afterparty",
    description:
      "De volledige tijdslijn met finish, huldiging en afterparty wordt binnenkort bevestigd.",
    icon: MoreHorizontal,
    confirmed: false,
  },
];

export function ScheduleSection() {
  return (
    <section id="schema" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Timing
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Programma
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Een voorlopige planning — de definitieve tijdslijn volgt.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent sm:block" />

          <div className="space-y-6">
            {scheduleItems.map((item, index) => (
              <div key={index} className="group relative flex gap-5 sm:gap-8">
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-2 bg-card transition-colors duration-300 ${
                      item.confirmed
                        ? "border-accent/40 text-accent group-hover:border-accent"
                        : "border-dashed border-border text-muted-foreground"
                    }`}
                  >
                    <item.icon size={24} />
                  </div>
                </div>

                <div className="flex-1 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors duration-300 group-hover:border-accent/30 sm:p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-lg font-bold text-accent">
                      <Clock size={16} />
                      {item.time}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="inline-block rounded-full bg-secondary px-4 py-2 text-sm text-muted-foreground">
            * We zijn volop bezig met de voorbereiding. Tijden zijn voorlopig en
            kunnen nog wijzigen.
          </p>
        </div>
      </div>
    </section>
  );
}
