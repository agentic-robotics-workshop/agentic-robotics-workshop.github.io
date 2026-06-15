import { SPEAKERS } from "@/lib/content";
import { PersonCard } from "@/components/PersonCard";

export function Speakers() {
  return (
    <section
      id="speakers"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
    >
      <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
        Invited Speakers
      </h2>
      <p className="mt-6 max-w-[56rem] text-2xl font-light italic leading-snug text-text-primary">
        Short framing talks bring together researchers spanning{" "}
        <strong className="font-bold italic">foundation models and VLA</strong>,
        planning, control and policy learning, and software agents — the
        communities whose work converges on agentic robotics.
      </p>

      <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-14 lg:grid-cols-4">
        {SPEAKERS.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>
    </section>
  );
}
