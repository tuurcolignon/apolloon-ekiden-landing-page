"use client";

import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { CONTACT_EMAIL, EVENT_LOCATION, EVENT_ADDRESS } from "@/lib/event";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/apolloon_leuven", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/ApolloonLeuven", label: "Facebook" },
  { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: "E-mail" },
];

export function Footer() {
  return (
    <footer className="bg-navy-dark py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-7 text-center">
          {/* Logo + title */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/apolloon-circle-white.png"
              alt="Apolloon Sportkot Leuven logo"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
            />
            <span className="text-xl font-extrabold uppercase italic tracking-tight">
              Ekiden <span className="text-cyan-bright">Leuven</span>
            </span>
          </div>

          {/* Location */}
          <p className="flex items-center gap-2 text-sm text-white/70">
            <MapPin size={16} className="text-cyan-bright" />
            {EVENT_LOCATION} — {EVENT_ADDRESS}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-cyan-bright hover:text-navy-dark"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Contact email */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white/70 transition-colors hover:text-cyan-bright"
          >
            {CONTACT_EMAIL}
          </a>

          <div className="h-px w-full max-w-xs bg-white/15" />

          {/* Copyright */}
          <div className="text-sm text-white/50">
            <p>
              © {new Date().getFullYear()} Apolloon Leuven. Alle rechten
              voorbehouden.
            </p>
            <p className="mt-1">Een studentenorganisatie van de KU Leuven.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
