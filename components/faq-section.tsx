"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Wat zijn de regels voor het wisselen van de sjerp?",
    answer: "De wissel gebeurt binnen een aangeduide wisselzone van 50 meter. De inkomende loper moet de sjerp (tasuki) overdragen aan de volgende loper. De volgende loper mag pas starten wanneer de sjerp is overgedragen. Te vroeg starten resulteert in een tijdstraf van 30 seconden.",
  },
  {
    question: "Waar kan ik mijn bagage achterlaten?",
    answer: "Er is een beveiligde bagageruimte beschikbaar bij de start/finish locatie. Elk team krijgt één afgesloten bak toegewezen waarin persoonlijke spullen veilig bewaard kunnen worden gedurende het evenement. Waardevolle voorwerpen zoals portefeuilles en telefoons zijn op eigen risico.",
  },
  {
    question: "Is er eten en drinken voorzien?",
    answer: "Langs het parcours zijn er meerdere waterstations voor de lopers. Bij de finish is er een foodtruck corner met diverse opties (pasta, wraps, snacks) en een uitgebreide bar. Elk teamlid ontvangt ook een gratis drankje bij de afterparty. Speciale dieetwensen kunnen vooraf worden doorgegeven.",
  },
  {
    question: "Kan ik me ook individueel inschrijven?",
    answer: "De Ekiden is een teamsport, dus je hebt 6 lopers nodig. Heb je nog geen volledig team? Geen probleem! Via onze Facebook groep kun je in contact komen met andere lopers die nog teamgenoten zoeken. Wij helpen je graag om een team samen te stellen.",
  },
  {
    question: "Wat gebeurt er bij slecht weer?",
    answer: "Het evenement gaat door bij lichte regen. Alleen bij extreme weersomstandigheden (storm, onweer, extreme hitte) kan het evenement worden uitgesteld of aangepast. In dat geval worden alle deelnemers minstens 24 uur van tevoren geïnformeerd via e-mail en sociale media.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-navy">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-primary font-semibold tracking-wider uppercase text-sm">
            Vragen
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl text-balance">
            Praktisch & Reglement
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Alles wat je moet weten voor een vlotte deelname
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl bg-secondary/30 border border-border/50 px-6 overflow-hidden data-[state=open]:bg-secondary/50"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-base sm:text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact prompt */}
        <div className="mt-12 text-center rounded-xl bg-secondary/20 p-6">
          <p className="text-muted-foreground">
            Nog vragen? Neem contact op via{" "}
            <a
              href="mailto:sport@apolloon.org"
              className="text-primary hover:underline font-medium"
            >
              sport@apolloon.org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
