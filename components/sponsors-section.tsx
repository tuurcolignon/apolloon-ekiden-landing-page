"use client";

const sponsors = [
  { name: "Sponsor 1" },
  { name: "Sponsor 2" },
  { name: "Sponsor 3" },
  { name: "Sponsor 4" },
  { name: "Sponsor 5" },
  { name: "Sponsor 6" },
];

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 sm:py-28 bg-navy-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-primary font-semibold tracking-wider uppercase text-sm">
            Partners
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Mede mogelijk gemaakt door
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Dank aan onze sponsors die dit evenement mogelijk maken
          </p>
        </div>

        {/* Sponsor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group relative aspect-[3/2] rounded-xl bg-secondary/30 border border-border/30 flex items-center justify-center transition-all duration-300 hover:bg-secondary/50 hover:border-primary/30 cursor-pointer overflow-hidden"
            >
              {/* Placeholder content - grayscale to color on hover */}
              <div className="flex flex-col items-center justify-center p-4 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-muted/30 flex items-center justify-center mb-2">
                  <span className="text-2xl sm:text-3xl font-bold text-muted-foreground/50 group-hover:text-primary transition-colors duration-300">
                    {index + 1}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground text-center">
                  {sponsor.name}
                </span>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Interesse om sponsor te worden?
          </p>
          <a
            href="mailto:sport@apolloon.org?subject=Sponsoring Apolloon Ekiden"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Neem contact op
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
