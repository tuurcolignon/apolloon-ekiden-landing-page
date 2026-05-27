"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "#concept", label: "Concept" },
  { href: "#schema", label: "Schema" },
  { href: "#faq", label: "FAQ" },
  { href: "#sponsors", label: "Sponsors" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/apolloon-logo.png"
              alt="Apolloon Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              Apolloon Ekiden
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#hero")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Koop Tickets
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#hero")}
              className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              Koop Tickets
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
