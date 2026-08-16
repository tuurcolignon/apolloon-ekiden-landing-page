"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT_EMAIL } from "@/lib/event";

const faqItems = [
  {
    question: "Zijn de kleedkamers beschikbaar?",
    answer:
      "De kleedkamers aan de buitenzijde van Gebouw De Nayer zijn niet beschikbaar tijdens het evenement. Met een geldige sportkaart kunt u wel gebruikmaken van de kleedkamers binnen in het gebouw.",
  },
  {
    question: "Is er een drinkwaterpunt aanwezig?",
    answer:
      "Ja, er is ter plaatse een drinkwaterpunt voorzien waar deelnemers hun drinkfles kunnen bijvullen.",
  },
  {
    question: "Zijn er toiletten aanwezig?",
    answer: "Ja, er zijn toiletten ter plaatse beschikbaar voor de deelnemers.",
  },
  {
    question: "Waar kan ik parkeren?",
    answer:
      "Parkeren kan op Parking Bodart. Let op: deze parking is niet gereserveerd voor het evenement. Het gebruik van een parkeerschijf is hier verplicht.",
  },
  {
    question: "Mag ik alcoholische drank meenemen of nuttigen?",
    answer:
      "Nee. Het nuttigen van alcoholische dranken is tijdens het evenement niet toegestaan.",
  },
  {
    question: "Mag ik eigen glaswerk of blikjes meenemen?",
    answer:
      "Nee. Het gebruik van eigen glaswerk of blikjes is niet toegestaan op het evenemententerrein.",
  },
  {
    question: "Is er bevoorrading voorzien?",
    answer:
      "Nee, er is geen bevoorrading voorzien. We vragen deelnemers bovendien om geen eigen sportgels, verpakkingen of ander afval langs het parcours achter te laten. Zo houden we het parcours netjes en beperken we de impact op het milieu.",
  },
  {
    question: "Mag ik een eigen tentje meenemen?",
    answer:
      "Ja, deelnemers mogen een eigen tentje meebrengen. Het tentje mag enkel met gewichtjes worden vastgezet. Het gebruik van haringen, tentharingen of andere bevestigingen die in de grond worden geplaatst, is niet toegestaan.",
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-secondary/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Vragen
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Praktisch &amp; Reglement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Alles wat je moet weten voor een vlotte en aangename
            evenementendag.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-xl border border-border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:text-accent hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact prompt */}
        <div className="mt-10 rounded-xl border border-border bg-card p-6 text-center shadow-sm">
          <p className="text-muted-foreground">
            Nog vragen? Neem contact op via{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
