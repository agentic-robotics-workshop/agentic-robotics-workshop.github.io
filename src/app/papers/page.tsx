import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { PaperList } from "@/components/PaperList";
import { ACCEPTED_PAPERS } from "@/lib/accepted-papers";

export const metadata: Metadata = {
  title: "Accepted Papers | Workshop on Agentic Robotics",
  description: "Browse the 39 accepted papers at the CoRL 2026 Workshop on Agentic Robotics. Search by title or author and view each paper on OpenReview.",
};

export default function PapersPage() {
  return (
    <>
      <Header anchorPrefix="/" homeHref="/" />
      <main className="mx-auto w-full max-w-[85rem] px-6 py-14 text-text-primary md:px-10 md:py-20">
        <Link href="/#papers" className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted underline-offset-4 hover:underline">
          ← Back to the workshop
        </Link>
        <h1 className="mt-8 font-display text-5xl font-semibold leading-tight tracking-[-0.02em] sm:text-6xl md:text-7xl">
          Accepted Papers
        </h1>
        <p className="mt-6 max-w-[50ch] text-2xl font-light italic leading-snug">
          {ACCEPTED_PAPERS.length} papers exploring reasoning, learning, and action in the physical world.
        </p>
        <p className="mt-5 max-w-[75ch] text-base font-light leading-relaxed text-text-secondary md:text-lg">
          CoRL 2026 Workshop on Agentic Robotics · November 12, 2026 · Austin, Texas.
          This list covers accepted papers; separately accepted demos are not included.
        </p>
        <PaperList papers={ACCEPTED_PAPERS} />
      </main>
    </>
  );
}
