"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Countdown } from "@/components/countdown";
import {
  REGISTRATION_URL,
  EVENT_DATE_LABEL,
  EVENT_LOCATION,
} from "@/lib/event";

export function HeroSection() {
  const scrollToConcept = () => {
    document.querySelector("#concept")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Dark energetic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />

      {/* Animated glow blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan/30 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-cyan-bright/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Running track lines */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(115deg, transparent, transparent 70px, rgba(255,255,255,0.6) 70px, rgba(255,255,255,0.6) 72px)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
        {/* Badges */}
        <div className="mb-7 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Calendar size={16} className="text-cyan-bright" />
            {EVENT_DATE_LABEL}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <MapPin size={16} className="text-cyan-bright" />
            {EVENT_LOCATION}
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-balance text-5xl font-extrabold uppercase italic tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">Apolloon Ekiden Leuven</span>
          <span className="mt-1 block bg-gradient-to-r from-cyan-bright via-white to-cyan-bright bg-clip-text text-transparent">
            2026
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl md:text-2xl">
          De ultieme aflossingsmarathon in Leuven. Verzamel je team van 6 lopers
          en leg samen de 42,195&nbsp;km af.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="animate-pulse-glow h-auto w-full rounded-full bg-cyan-bright px-10 py-6 text-lg font-bold text-navy-dark transition-transform hover:scale-105 hover:bg-cyan-bright/90 sm:w-auto"
          >
            <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
              Schrijf je in
            </a>
          </Button>
          <Button
            onClick={scrollToConcept}
            size="lg"
            variant="outline"
            className="h-auto w-full rounded-full border-white/25 bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
          >
            Ontdek het concept
            <ArrowRight size={18} />
          </Button>
        </div>

        {/* Countdown */}
        <div className="mt-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Het startschot valt over
          </p>
          <Countdown />
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: "42,195", label: "Kilometer" },
            { value: "6", label: "Lopers" },
            { value: "1", label: "Team" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-cyan-bright sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
