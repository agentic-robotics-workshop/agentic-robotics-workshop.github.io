import { SCHEDULE } from "@/lib/content";

export function Schedule() {
  return (
    <section
      id="schedule"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
    >
      <div className="flex items-baseline gap-4">
        <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
          Schedule
        </h2>
        <span className="rounded-full border border-black/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
          Tentative
        </span>
      </div>
      <p className="mt-6 max-w-[56rem] text-2xl font-light italic leading-snug text-text-primary">
        A half-day afternoon program centered on live demonstrations and
        audience-driven discussion.
      </p>

      <div className="mt-12 border-t border-black/[0.10]">
        {SCHEDULE.map((slot) => (
          <div
            key={slot.time}
            className="grid grid-cols-1 gap-2 border-b border-black/[0.10] py-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
          >
            <p className="font-display text-xl font-semibold tabular-nums text-text-muted md:text-2xl">
              {slot.time}
            </p>
            <p className="text-xl font-light leading-[1.5] text-text-primary md:text-2xl">
              {slot.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
