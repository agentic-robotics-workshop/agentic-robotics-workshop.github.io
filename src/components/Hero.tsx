import Link from "next/link";
import { ArrowUpRight, Video } from "lucide-react";
import { VENUE } from "@/lib/content";

export function Hero() {
  return (
    <section className="fade-in relative flex min-h-[78vh] flex-col justify-center overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[85rem] px-6 pb-16 pt-24 text-center md:px-10">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xl font-bold uppercase tracking-[0.18em] text-text-primary md:text-2xl">
          <span>CoRL 2026</span>
          <span className="text-text-soft">/</span>
          <span>November 12, 2026</span>
          <span className="text-text-soft">/</span>
          <span>Austin, Texas</span>
        </p>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-lg font-semibold text-text-primary md:text-xl">
          <span>{VENUE.hotel}</span>
          <span aria-hidden="true" className="text-text-soft">·</span>
          <span>{VENUE.room} ({VENUE.floor})</span>
        </p>

        <h1 className="mx-auto mt-8 max-w-[14ch] font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-text-primary sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[1] lg:tracking-[-2px]">
          Workshop on Agentic Robotics
        </h1>

        <p className="mx-auto mt-7 max-w-[36ch] text-2xl font-light italic leading-snug text-text-primary md:text-3xl md:leading-[1.4]">
          What changes when an agent must <strong className="font-bold italic">reason</strong>,{" "}
          <strong className="font-bold italic">act</strong>, and{" "}
          <strong className="font-bold italic">recover</strong> on a real robot.
        </p>

        <div className="mx-auto mt-9 max-w-[696px] rounded-2xl border border-blue-200 bg-blue-50 p-5 text-left shadow-sm sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                Attend online
              </p>
              <h2 className="mt-1 text-2xl font-bold text-blue-950">
                Join the workshop on Zoom
              </h2>
            </div>
            <a
              href="https://mcgill.zoom.us/j/5870027202?pwd=XmygzB9GeEzM1DSzzHEQBks7btaLTV.1&omn=83654819472"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-4 text-lg font-bold text-white shadow-md transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              <Video aria-hidden="true" className="size-5" />
              Join on Zoom
              <ArrowUpRight aria-hidden="true" className="size-5" />
            </a>
          </div>
          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-blue-200 pt-4 text-base text-blue-950">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <dt>Meeting ID</dt>
              <dd className="font-bold tabular-nums">587 002 7202</dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt>Passcode</dt>
              <dd className="font-bold tabular-nums">123456</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/papers"
            className="inline-flex w-full max-w-[340px] items-center justify-center whitespace-nowrap rounded-full bg-[#141414] px-6 py-5 text-xl font-bold tracking-[0.5px] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:w-[340px] sm:px-12"
          >
            Accepted Papers
          </Link>
          <Link
            id="demo-platform-hero-cta"
            href="/demo?from=hero"
            className="inline-flex w-full max-w-[340px] items-center justify-center whitespace-nowrap rounded-full border border-black/[0.16] bg-white px-6 py-5 text-xl font-bold tracking-[0.5px] text-text-primary shadow-[0_8px_30px_rgba(0,0,0,0.10)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:border-black/[0.28] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] sm:w-[340px] sm:px-12"
          >
            Demo Platform
          </Link>
        </div>

      </div>
    </section>
  );
}
