import Link from "next/link";

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

        <h1 className="mx-auto mt-8 max-w-[14ch] font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-text-primary sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[1] lg:tracking-[-2px]">
          Workshop on Agentic Robotics
        </h1>

        <p className="mx-auto mt-7 max-w-[36ch] text-2xl font-light italic leading-snug text-text-primary md:text-3xl md:leading-[1.4]">
          What changes when an agent must <strong className="font-bold italic">reason</strong>,{" "}
          <strong className="font-bold italic">act</strong>, and{" "}
          <strong className="font-bold italic">recover</strong> on a real robot.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#submissions"
            className="inline-flex w-full max-w-[340px] items-center justify-center whitespace-nowrap rounded-full bg-[#141414] px-6 py-5 text-xl font-bold tracking-[0.5px] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:w-[340px] sm:px-12"
          >
            Call for Contributions
          </a>
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
