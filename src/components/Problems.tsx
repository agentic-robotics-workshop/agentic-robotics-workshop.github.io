import { PROBLEMS } from "@/lib/content";

export function Problems() {
  return (
    <section
      id="problems"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 pt-10 md:px-10"
    >
      <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
        Open Problems
      </h2>
      <p className="mt-6 max-w-[56rem] text-2xl font-light italic leading-snug text-text-primary">
        The workshop organizes around six concrete open problems where the agent
        paradigm meets the physical world.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((item) => (
          <div key={item.number} className="relative overflow-hidden">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[160px] font-normal leading-none text-black opacity-[0.04]"
            >
              {item.number}
            </span>
            <h3 className="relative font-display text-4xl font-semibold leading-[1.1] text-text-primary">
              {item.title}
            </h3>
            <p
              className="rich relative mt-5 text-xl font-light leading-[1.7] text-text-primary"
              dangerouslySetInnerHTML={{ __html: item.descHtml }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
