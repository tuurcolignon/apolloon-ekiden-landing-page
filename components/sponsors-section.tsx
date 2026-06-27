"use client";

import Image from "next/image";
import { CONTACT_EMAIL, APOLLOON_URL } from "@/lib/event";

type Partner = {
  name: string;
  caption: string;
  logo: string;
  href?: string;
};

const partners: Partner[] = [
  {
    name: "Apolloon",
    caption: "Sportkot Leuven · apolloon.org",
    logo: "/images/apolloon-circle-white.png",
    href: APOLLOON_URL,
  },
  {
    name: "Ekiden Leuven",
    caption: "Sportkot Leuven",
    logo: "/images/ekiden-logo.png",
    href: "#hero",
  },
  {
    name: "WayPoint",
    caption: "Waypoint Leuven",
    logo: "/images/waypoint-logo.png",
    href: "https://www.waypointleuven.be",
  },
  {
    name: "bau NV",
    caption: "Contracting · Bouwprojecten · Design & Build",
    logo: "/images/bau-logo.png",
    href: "https://baunv.be",
  },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Partners
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Mede mogelijk gemaakt door
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Met dank aan onze partners die Ekiden Leuven 2026 mee mogelijk maken.
          </p>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => {
            const isExternal = partner.href?.startsWith("http");
            return (
              <a
                key={partner.name}
                href={partner.href ?? "#"}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={partner.name}
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="flex h-24 w-full items-center justify-center p-4">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={220}
                    height={120}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {partner.caption}
                </p>
              </a>
            );
          })}
        </div>

        {/* Become a partner */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h3 className="text-xl font-bold text-foreground sm:text-2xl">
            Word partner van Ekiden Leuven 2026
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Wil je jouw organisatie verbinden aan een sportief en inspirerend
            evenement in Leuven? We staan open voor samenwerkingen met bedrijven,
            organisaties en verenigingen die Ekiden Leuven 2026 mee willen
            ondersteunen — zowel financieel als via producten, diensten of andere
            initiatieven. Neem vrijblijvend contact met ons op voor meer
            informatie over de mogelijkheden.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Partner worden van Ekiden Leuven 2026`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Neem contact op
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
