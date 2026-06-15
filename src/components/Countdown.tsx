"use client";

import { useEffect, useState } from "react";

interface Parts {
  days: string;
  hrs: string;
  mins: string;
  secs: string;
}

function diff(target: number): Parts {
  const now = Date.now();
  let delta = Math.max(0, Math.floor((target - now) / 1000));
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hrs = Math.floor(delta / 3600);
  delta -= hrs * 3600;
  const mins = Math.floor(delta / 60);
  const secs = delta - mins * 60;
  const p = (n: number) => n.toString().padStart(2, "0");
  return { days: p(days), hrs: p(hrs), mins: p(mins), secs: p(secs) };
}

const UNITS: { key: keyof Parts; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hrs", label: "Hrs" },
  { key: "mins", label: "Mins" },
  { key: "secs", label: "Secs" },
];

export function Countdown({
  deadlineIso,
  placeholder = false,
}: {
  deadlineIso?: string;
  placeholder?: boolean;
}) {
  const target = deadlineIso ? new Date(deadlineIso).getTime() : 0;
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    if (placeholder || !deadlineIso) return;
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target, placeholder, deadlineIso]);

  const value = (key: keyof Parts) =>
    placeholder ? "XX" : parts ? parts[key] : "--";

  return (
    <div className="flex items-end gap-3 sm:gap-4" aria-live="off">
      {UNITS.map((u, i) => (
        <div key={u.key} className="flex items-end gap-3 sm:gap-4">
          <div className="flex flex-col items-start">
            <span className="font-display text-4xl font-bold leading-none tabular-nums text-text-primary">
              {value(u.key)}
            </span>
            <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-text-muted">
              {u.label}
            </span>
          </div>
          {i < UNITS.length - 1 && (
            <span className="font-display text-3xl font-light leading-none text-text-muted">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
