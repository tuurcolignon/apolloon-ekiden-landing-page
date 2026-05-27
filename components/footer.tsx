"use client";

import { Instagram, Facebook, Mail } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/apolloon_leuven", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/ApolloonLeuven", label: "Facebook" },
  { icon: Mail, href: "mailto:sport@apolloon.org", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-border/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo and title */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/apolloon-logo.png"
              alt="Apolloon Logo"
              width={48}
              height={48}
              className="rounded"
            />
            <span className="text-xl font-bold text-foreground">
              Apolloon Ekiden
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Contact email */}
          <a
            href="mailto:sport@apolloon.org"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            sport@apolloon.org
          </a>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border/50" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Apolloon Leuven. Alle rechten voorbehouden.</p>
            <p className="mt-1">
              Een studentenorganisatie van de KU Leuven
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
