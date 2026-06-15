import { FORMAT_MODES } from "@/lib/content";

export function Format() {
  return (
    <section
      id="format"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 pt-10 md:px-10"
    >
      <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
        An Interactive Live Demo Session
      </h2>

      <p className="rich mt-8 max-w-[70rem] text-xl font-light leading-[1.7] text-text-primary">
        The half-day workshop is built around <b>live demonstrations</b> and
        audience-driven discussion rather than a sequence of talks. Each
        demonstrator gives a short pitch, then runs the system live on a physical
        robot or in simulation while the audience suggests tasks, probes failure
        modes, and — where feasible — <i>operates it directly</i>. Short framing
        talks anchor the demos in concrete open problems, a fishbowl discussion
        rotates demonstrators, speakers, and attendees through one conversation,
        and a closing synthesis seeds a <i>community position paper</i> developed
        after the conference as the workshop artifact.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {FORMAT_MODES.map((mode) => (
          <div key={mode.number} className="relative overflow-hidden">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[160px] font-normal leading-none text-black opacity-[0.04]"
            >
              {mode.number}
            </span>
            <h3 className="relative font-display text-4xl font-semibold leading-[1.1] text-text-primary">
              {mode.title}
            </h3>
            <p
              className="rich relative mt-5 text-xl font-light leading-[1.7] text-text-primary"
              dangerouslySetInnerHTML={{ __html: mode.descHtml }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
