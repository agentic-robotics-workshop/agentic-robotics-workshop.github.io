interface Winner {
  title: string;
  team: string;
  url: string;
}

interface Award {
  name: string;
  sponsor: string;
  sponsorLogo: string;
  sponsorWebsite: string;
  winners: Winner[];
}

const AWARDS: Award[] = [
  {
    name: "Best Paper Award",
    sponsor: "Waddle Labs",
    sponsorLogo: "/logos/waddle.svg",
    sponsorWebsite: "https://waddlelabs.ai/",
    winners: [
      {
        title: "Agentic World Action Models",
        team: "UC Berkeley, NVIDIA & University of Pennsylvania",
        url: "https://agentic-wam.github.io/",
      },
      {
        title: "EmbodiedSWE: Coding Agents for Long-Horizon Dexterous Robotics",
        team: "Yale, Princeton, Stanford, CMU, ByteDance Seed & collaborators",
        url: "https://embodiedswe.github.io/",
      },
    ],
  },
  {
    name: "Best Demo Award",
    sponsor: "Dexmate",
    sponsorLogo: "/logos/dexmate.png",
    sponsorWebsite: "https://www.dexmate.com/",
    winners: [
      {
        title: "Astra Beyond Tabletop: Into the Home",
        team: "Georgia Tech RAIL Lab",
        url: "https://www.gt-rail.com/blog/astra-beyond-tabletop/",
      },
      {
        title: "ATLAS: Agentic Harness for Whole-Body Intelligence from Human Video",
        team: "UC Berkeley, NVIDIA, HKU & Stanford",
        url: "https://atlas-humanoid.github.io/",
      },
    ],
  },
];

export function Awards() {
  return (
    <section
      id="awards"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
    >
      <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
        Award Winners
      </h2>
      <p className="mt-5 max-w-[48ch] text-2xl font-light italic leading-snug text-text-primary">
        Congratulations to the winning teams of CoRL 2026&apos;s Workshop on
        Agentic Robotics.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {AWARDS.map((award) => (
          <div
            key={award.name}
            className="border border-black/[0.08] bg-black/[0.02] p-8 md:p-10"
          >
            <h3 className="font-display text-4xl font-semibold text-text-primary">
              {award.name}
            </h3>
            <a
              href={award.sponsorWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-text-muted transition-opacity hover:opacity-70"
            >
              Sponsored by
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={award.sponsorLogo}
                alt={award.sponsor}
                className="h-6 w-auto object-contain"
              />
            </a>

            <ul className="mt-8 space-y-6">
              {award.winners.map((winner) => (
                <li
                  key={winner.url}
                  className="border-t border-black/[0.08] pt-6"
                >
                  <a
                    href={winner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold leading-snug text-text-primary underline-offset-4 hover:underline"
                  >
                    {winner.title}
                  </a>
                  <p className="mt-2 text-lg font-light text-text-primary">
                    {winner.team}
                  </p>
                  <a
                    href={winner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-bold uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-text-primary"
                  >
                    Project page →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
