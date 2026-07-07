"use client";

import { Button } from "@/components/ui/button";
import { REGISTRATION_URL } from "@/lib/event";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Inschrijvingsprijzen
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="text-sm font-semibold text-accent">Student team</div>
            <div className="mt-4 text-3xl font-extrabold text-foreground">€75</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Voor teams waarbij alle 6 lopers een geldig studentennummer kunnen
              tonen bij check-in.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="text-sm font-semibold text-foreground">Regulier team</div>
            <div className="mt-4 text-3xl font-extrabold text-foreground">€90</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Voor niet-studententeams of gemengde teams zonder studentenkorting.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            Optioneel: donatie voor onderzoek tegen kanker (€1) tijdens het
            afrekenen. Voor wijzigingen na inschrijving gebruik de link op de
            registratiepagina.
          </p>

          <div className="mt-6">
            <Button asChild className="bg-accent text-accent-foreground px-6 py-3">
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                Schrijf je nu in
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
