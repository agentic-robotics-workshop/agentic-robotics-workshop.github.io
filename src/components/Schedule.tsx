import { SCHEDULE } from "@/lib/content";

export function Schedule() {
  return (
    <section
      id="schedule"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
    >
      <div id="speakers" className="flex scroll-mt-32 flex-wrap items-baseline gap-4">
        <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
          Schedule &amp; Speakers
        </h2>
        <span className="rounded-full border border-black/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
          Tentative
        </span>
      </div>
      <p className="mt-6 max-w-[56rem] text-2xl font-light italic leading-snug text-text-primary">
        Six invited talks on agentic robotics, followed by live demonstrations,
        posters, and audience-driven discussion.
      </p>

      <div className="mt-12 border-t border-black/[0.10]">
        {SCHEDULE.map((slot) => (
          <div
            key={slot.time}
            className="grid grid-cols-1 items-center gap-4 border-b border-black/[0.10] py-6 sm:grid-cols-[14rem_1fr] sm:gap-8"
          >
            <p className="font-display text-xl font-semibold tabular-nums text-text-muted md:text-2xl">
              {slot.time}
            </p>
            {slot.speaker ? (
              <div className="flex items-center gap-5 md:gap-7">
                {slot.speaker.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={slot.speaker.image}
                    alt={slot.speaker.name}
                    loading="lazy"
                    width={112}
                    height={112}
                    className="h-20 w-20 shrink-0 object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
                  />
                )}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
                    {slot.title} · 20 minutes
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-medium leading-tight tracking-tight text-text-primary md:text-4xl">
                    {slot.speaker.name}
                  </h3>
                  <p className="mt-1 text-lg font-light leading-snug text-text-secondary md:text-xl">
                    {slot.speaker.affiliation}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-xl font-light leading-[1.5] text-text-primary md:text-2xl">
                {slot.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
