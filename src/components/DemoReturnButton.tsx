"use client";

import type { MouseEvent } from "react";

const HERO_RETURN_HREF = "/#demo-platform-hero-cta";
const TRACK_RETURN_HREF = "/#demo-platform-track-cta";

export function DemoReturnButton() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const source = new URLSearchParams(window.location.search).get("from");
    window.location.assign(
      source === "demo-track" ? TRACK_RETURN_HREF : HERO_RETURN_HREF,
    );
  };

  return (
    <a
      href={HERO_RETURN_HREF}
      onClick={handleClick}
      className="fixed left-6 top-[105px] z-40 inline-flex items-center justify-center rounded-full bg-[#141414] px-8 py-5 text-lg font-bold tracking-[0.5px] text-white shadow-[0_12px_36px_rgba(0,0,0,0.28)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_16px_44px_rgba(0,0,0,0.36)] sm:left-8 sm:px-10 sm:text-xl"
    >
      Back to Main Page
    </a>
  );
}
