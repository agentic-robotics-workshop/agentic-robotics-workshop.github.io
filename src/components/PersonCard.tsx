import type { Person } from "@/types";

function initials(name: string): string {
  return name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function Avatar({ person }: { person: Person }) {
  if (person.image) {
    return (
      <div className="relative aspect-square w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-[filter] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:grayscale-0"
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-square w-full items-center justify-center border border-surface-border bg-black/[0.02] transition-colors duration-300 group-hover:bg-black/[0.04]">
      <span className="font-display text-5xl font-medium tracking-tight text-text-muted md:text-6xl">
        {initials(person.name)}
      </span>
    </div>
  );
}

function CardBody({ person }: { person: Person }) {
  return (
    <>
      <Avatar person={person} />
      <h3 className="mt-5 font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.9px] text-text-primary md:text-4xl">
        {person.name}
      </h3>
      <p className="mt-2 text-lg font-light leading-7 text-text-secondary md:text-xl">
        {person.affiliation}
      </p>
      {person.website && (
        <span className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-text-muted transition-colors duration-150 group-hover:text-text-primary">
          Website
        </span>
      )}
    </>
  );
}

export function PersonCard({ person }: { person: Person }) {
  if (person.website) {
    return (
      <a
        href={person.website}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col"
      >
        <CardBody person={person} />
      </a>
    );
  }
  return (
    <div className="group flex flex-col">
      <CardBody person={person} />
    </div>
  );
}
