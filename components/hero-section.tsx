"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export function HeroSection() {
  const scrollToTickets = () => {
    const element = document.querySelector("#concept");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient and texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Running track lines pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 80px,
            rgba(255,255,255,0.1) 80px,
            rgba(255,255,255,0.1) 82px
          )`
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badges */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm">
            <Calendar size={16} className="text-primary" />
            September 2026
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm">
            <MapPin size={16} className="text-primary" />
            Leuven
          </span>
        </div>

        {/* Main headline */}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl text-balance">
          <span className="block">Apolloon</span>
          <span className="block bg-gradient-to-r from-primary via-cyan to-primary bg-clip-text text-transparent">
            Ekiden 2026
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed text-pretty">
          De ultieme aflossingsmarathon voor studenten in Leuven. Verzamel je team van 6 en breek het record.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={scrollToTickets}
            size="lg"
            className="animate-pulse-glow bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold px-10 py-6 h-auto rounded-full transition-transform hover:scale-105"
          >
            Koop Tickets
          </Button>
          <p className="text-sm text-muted-foreground">
            Beperkte plaatsen beschikbaar
          </p>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl">42.195</div>
            <div className="text-sm text-muted-foreground">Kilometer</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl">6</div>
            <div className="text-sm text-muted-foreground">Lopers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl">1</div>
            <div className="text-sm text-muted-foreground">Team</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
