const SPONSORS = [
  { name: "Wuji", logo: "/logos/wuji.svg", website: "https://wuji.tech/" },
  { name: "Dexmate", logo: "/logos/dexmate.png", website: "https://www.dexmate.com/" },
  { name: "Unitree", logo: "/logos/unitree.svg", website: "https://www.unitree.com/" },
  { name: "AgileX", logo: "/logos/agilex.png", website: "https://global.agilex.ai/" },
];

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
    >
      <h2 className="text-center text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
        Sponsors
      </h2>
      <ul className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-8 border-b border-black/[0.10] pb-12 md:grid-cols-4 md:gap-x-16 md:pb-16">
        {SPONSORS.map((sponsor) => (
          <li key={sponsor.name}>
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-24 items-center justify-center rounded-sm px-2 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-primary"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 w-full max-w-56 object-contain md:max-h-20"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
