import type { Person } from "@/types";
import { ORGANIZERS } from "@/lib/content";

function initials(name: string): string {
  return name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function OrganizerCard({ person }: { person: Person }) {
  return (
    <>
      <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden border border-surface-border bg-black/[0.02]">
        {person.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-display text-4xl font-medium tracking-tight text-text-muted">
            {person.name === "TBD" ? "?" : initials(person.name)}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.5px] text-text-primary transition-colors duration-150 group-hover:text-text-soft">
          {person.name}
        </h3>
        {person.affiliation && (
          <p className="mt-1 text-lg font-light text-text-secondary">
            {person.affiliation}
          </p>
        )}
        {person.bio && (
          <p className="mt-3 text-base font-light leading-[1.65] text-text-secondary">
            {person.bio}
          </p>
        )}
      </div>
    </>
  );
}

export function Organizers() {
  return (
    <section
      id="organizers"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
    >
      <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
        Organizers
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        {ORGANIZERS.map((person) =>
          person.website ? (
            <a
              key={person.name}
              href={person.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-5 sm:flex-row"
            >
              <OrganizerCard person={person} />
            </a>
          ) : (
            <div key={person.name} className="group flex flex-col gap-5 sm:flex-row">
              <OrganizerCard person={person} />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
