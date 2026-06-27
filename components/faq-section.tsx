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
    question: "Wat is een Ekiden?",
    answer:
      "Een Ekiden is een marathon in estafettevorm waarbij 6 lopers samen 42,195 km afleggen.",
  },
  {
    question: "Moet ik een ervaren loper zijn?",
    answer: "Nee. Zowel beginnende als ervaren lopers kunnen deelnemen.",
  },
  {
    question: "Hoeveel personen zitten er in een team?",
    answer: "Elk team bestaat uit 6 lopers.",
  },
  {
    question: "Mag ik meerdere afstanden lopen?",
    answer: "Nee, iedere loper loopt één voorziene afstand.",
  },
  {
    question: "Kunnen we deelnemen met een gemengd team?",
    answer: "Ja, dit kan zeker!",
  },
  {
    question: "Is er catering voorzien?",
    answer:
      "Op het evenement zullen foodtrucks zijn waar je kan genieten van een welverdiende en lekkere maaltijd.",
  },
  {
    question: "Kunnen supporters komen kijken?",
    answer: "Ja, supporters zijn van harte welkom.",
  },
  {
    question: "Wat gebeurt er bij slecht weer?",
    answer:
      "De wedstrijd gaat normaal door. Eventuele wijzigingen worden tijdig gecommuniceerd.",
  },
  {
    question: "Zijn er prijzen te winnen?",
    answer: "Ja, er zijn prijzen voorzien voor verschillende categorieën.",
  },
  {
    question: "Waar kan ik parkeren?",
    answer: "Meer informatie volgt.",
  },
  {
    question: "Wanneer openen de inschrijvingen?",
    answer: "Meer informatie volgt.",
  },
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
            We zijn volop bezig met de voorbereiding — verdere info volgt
            binnenkort.
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
