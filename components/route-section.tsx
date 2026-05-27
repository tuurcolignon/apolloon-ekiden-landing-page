"use client";

import { MapPin, Lock } from "lucide-react";

export function RouteSection() {
  return (
    <section id="parcours" className="relative py-24 md:py-32 overflow-hidden">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Parcours / Route
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ontdek het traject door de mooiste plekjes van Leuven
          </p>
        </div>
      </div>

      {/* Map Container */}
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden border border-accent/30 shadow-2xl shadow-accent/10">
          {/* Blurred Map Background */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/leuven-map-blurred.jpg')",
              }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

            {/* Gradient Overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />

            {/* Subtle animated glow effects */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Centered Content Box */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="relative">
                {/* Glow effect behind box */}
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />

                {/* Main Content Box */}
                <div className="relative bg-background/90 backdrop-blur-md border border-accent/40 rounded-2xl p-8 md:p-12 lg:p-16 max-w-2xl text-center shadow-2xl">
                  {/* Combined Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-accent/20 rounded-full blur-lg" />
                      <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-background border-2 border-accent/50 rounded-full">
                        <div className="relative">
                          <MapPin className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                          <Lock className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 text-foreground bg-background rounded-full p-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Heading */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-wide">
                    ROUTE WORDT
                  </h3>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-6 tracking-wide">
                    BINNENKORT ONTHULD
                  </h3>

                  {/* Decorative line */}
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />

                  {/* Subtext */}
                  <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mx-auto">
                    De specifieke 5km en 10km loops zijn nog in ontwikkeling en
                    worden gepubliceerd dichter bij het evenement in september
                    2026.
                  </p>

                  {/* Bottom accent dots */}
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <span className="w-2 h-2 rounded-full bg-accent/50" />
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="w-2 h-2 rounded-full bg-accent/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-accent/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-accent/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-accent/30 rounded-br-lg" />
          </div>

          {/* Bottom info bar */}
          <div className="bg-card/80 backdrop-blur-sm border-t border-accent/20 px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent/50" />
                  5km loops
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent" />
                  10km loops
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  7.195km finish
                </span>
              </div>
              <p className="text-xs text-muted-foreground/70">
                Totale afstand: 42.195km door Leuven
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
