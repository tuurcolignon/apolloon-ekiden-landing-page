"use client";

import { useEffect, useState } from "react";
import { EVENT_START_ISO } from "@/lib/event";

const TARGET = new Date(EVENT_START_ISO).getTime();

function getTimeLeft() {
  const diff = Math.max(TARGET - Date.now(), 0);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Dagen", value: time.days },
    { label: "Uren", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div
      className="flex items-stretch justify-center gap-2 sm:gap-3"
      role="timer"
      aria-label="Aftellen tot de start van Ekiden Leuven 2026"
    >
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex min-w-[64px] flex-col items-center rounded-xl border border-white/15 bg-white/5 px-3 py-3 backdrop-blur-sm sm:min-w-[80px] sm:px-4 sm:py-4"
        >
          <span className="font-mono text-2xl font-bold tabular-nums text-white sm:text-4xl">
            {mounted ? String(unit.value).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-cyan-bright sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
