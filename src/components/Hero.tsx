export function Hero() {
  return (
    <section className="fade-in relative flex min-h-[78vh] flex-col justify-center overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[85rem] px-6 pb-16 pt-24 text-center md:px-10">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xl font-bold uppercase tracking-[0.18em] text-text-primary md:text-2xl">
          <span>CoRL 2026</span>
          <span className="text-text-soft">/</span>
          <span>Half-Day Workshop</span>
          <span className="text-text-soft">/</span>
          <span>In-Person</span>
        </p>

        <h1 className="mx-auto mt-8 max-w-[14ch] font-display text-6xl font-semibold leading-[0.95] tracking-[-0.02em] text-text-primary sm:text-7xl md:text-8xl lg:text-[120px] lg:leading-[1] lg:tracking-[-3px]">
          Workshop on Agentic Robotics
        </h1>

        <p className="mx-auto mt-7 max-w-[36ch] text-2xl font-light italic leading-snug text-text-primary md:text-3xl md:leading-[1.4]">
          What changes when an agent must <strong className="font-bold italic">reason</strong>,{" "}
          <strong className="font-bold italic">act</strong>, and{" "}
          <strong className="font-bold italic">recover</strong> on a real robot.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#submissions"
            className="rounded-full bg-[#141414] px-12 py-5 text-xl font-bold tracking-[0.5px] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
          >
            Call for Contributions
          </a>
        </div>
      </div>
    </section>
  );
}
