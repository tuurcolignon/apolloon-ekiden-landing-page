"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { REGISTRATION_URL } from "@/lib/event";

const navLinks = [
  { href: "#concept", label: "Concept" },
  { href: "#voor-wie", label: "Voor Wie" },
  { href: "#schema", label: "Programma" },
  { href: "#parcours", label: "Parcours" },
  { href: "#faq", label: "FAQ" },
  { href: "#sponsors", label: "Partners" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Over the dark hero (not scrolled) we use light text + the white logo.
  // Once scrolled, the bar turns white so we switch to navy text + colour logo.
  const solid = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-card/95 backdrop-blur-md shadow-lg shadow-navy/5 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            aria-label="Naar boven"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy md:h-10 md:w-10">
              <Image
                src="/images/apolloon-circle-white.png"
                alt="Apolloon Sportkot Leuven logo"
                width={40}
                height={40}
                className="h-7 w-7 object-contain md:h-8 md:w-8"
              />
            </span>
            <span
              className={`text-lg font-extrabold uppercase italic tracking-tight md:text-xl ${
                solid ? "text-foreground" : "text-white"
              }`}
            >
              Ekiden <span className="text-cyan-bright">Leuven</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  solid ? "text-muted-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                Schrijf je in
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${solid ? "text-foreground" : "text-white"}`}
            aria-label="Menu openen of sluiten"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-2 rounded-lg text-foreground hover:bg-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              asChild
              className="w-full mt-3 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
                Schrijf je in
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
