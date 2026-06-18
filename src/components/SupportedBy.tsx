const SPONSORS = [
  { name: "AgileX", logo: "/logos/agilex.webp" },
  { name: "Unitree", logo: "/logos/unitree.svg" },
];

export function SupportedBy() {
  return (
    <section className="fade-in mx-auto my-4 flex w-full max-w-[85rem] flex-col items-center px-6 md:px-10">
      <p className="mb-8 text-sm font-bold uppercase tracking-[0.1em] text-text-secondary">
        Supported By
      </p>
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {SPONSORS.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex min-h-44 items-center justify-center border-y border-surface-border bg-black/[0.015] px-8 py-12"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              className="h-16 w-auto max-w-[300px] object-contain md:h-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
