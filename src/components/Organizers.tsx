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
        {ORGANIZERS.map((person) => (
          <div key={person.name} className="flex flex-col gap-5 sm:flex-row">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center border border-surface-border bg-black/[0.02]">
              <span className="font-display text-4xl font-medium tracking-tight text-text-muted">
                {person.name === "TBD" ? "?" : initials(person.name)}
              </span>
            </div>
            <div>
              <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.5px] text-text-primary">
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
          </div>
        ))}
      </div>
    </section>
  );
}
