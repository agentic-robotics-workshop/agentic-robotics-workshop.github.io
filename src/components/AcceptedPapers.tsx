import Link from "next/link";
import { ACCEPTED_PAPERS } from "@/lib/accepted-papers";

export function AcceptedPapers() {
  return (
    <section id="papers" className="mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10">
      <div className="border-y border-surface-border py-10 md:flex md:items-center md:justify-between md:gap-10 md:py-14">
        <div>
          <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
            Accepted Papers
          </h2>
          <p className="mt-5 max-w-[48ch] text-2xl font-light italic leading-snug text-text-primary">
            Explore {ACCEPTED_PAPERS.length} accepted papers from our community on the foundations and practice of agentic robotics.
          </p>
        </div>
        <Link href="/papers" className="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-[#141414] px-8 py-4 text-base font-bold text-white transition-colors hover:bg-black/80 md:mt-0">
          View accepted papers →
        </Link>
      </div>
    </section>
  );
}
