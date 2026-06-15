"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { MenuIcon, CloseIcon } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell sticky top-0 z-50">
      <div className="mx-auto flex h-[85px] max-w-[85rem] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-display text-2xl font-medium tracking-[-0.75px] text-text-primary sm:text-[30px]"
        >
          <span className="hidden sm:inline">Workshop on Agentic Robotics</span>
          <span className="sm:hidden">Agentic Robotics</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.1em] text-text-muted transition-colors duration-150 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-text-primary md:hidden"
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-surface-border-soft bg-white/80 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-bold uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
