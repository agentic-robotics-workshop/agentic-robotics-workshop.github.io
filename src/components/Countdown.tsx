"use client";

import { useMemo, useSyncExternalStore } from "react";

interface Parts {
  days: string;
  hrs: string;
  mins: string;
  secs: string;
}

const UNITS: { key: keyof Parts; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hrs", label: "Hrs" },
  { key: "mins", label: "Mins" },
  { key: "secs", label: "Secs" },
];

function secondsUntil(target: number) {
  return Math.max(0, Math.floor((target - Date.now()) / 1000));
}

function split(total: number): Parts {
  const p = (n: number) => n.toString().padStart(2, "0");
  return {
    days: p(Math.floor(total / 86400)),
    hrs: p(Math.floor((total % 86400) / 3600)),
    mins: p(Math.floor((total % 3600) / 60)),
    secs: p(total % 60),
  };
}

/**
 * The ticking clock lives outside React so the server renders a neutral
 * placeholder and the client takes over after hydration without a mismatch.
 */
function createClock(target: number) {
  let snapshot = secondsUntil(target);
  return {
    subscribe(onChange: () => void) {
      const id = setInterval(() => {
        const next = secondsUntil(target);
        if (next === snapshot) return;
        snapshot = next;
        onChange();
      }, 250);
      return () => clearInterval(id);
    },
    getSnapshot: (): number | null => snapshot,
    getServerSnapshot: (): number | null => null,
  };
}

export function Countdown({ deadlineIso }: { deadlineIso: string }) {
  const clock = useMemo(
    () => createClock(new Date(deadlineIso).getTime()),
    [deadlineIso],
  );
  const remaining = useSyncExternalStore(
    clock.subscribe,
    clock.getSnapshot,
    clock.getServerSnapshot,
  );

  const parts = remaining === null ? null : split(remaining);
  const value = (key: keyof Parts) => (parts ? parts[key] : "--");

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
