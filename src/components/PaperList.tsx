"use client";

import { useState } from "react";
import type { AcceptedPaper } from "@/lib/accepted-papers";

function normalize(value: string) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

export function PaperList({ papers }: { papers: AcceptedPaper[] }) {
  const [query, setQuery] = useState("");
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const filtered = papers.filter((paper) => {
    const text = normalize(`${paper.title} ${paper.authors}`);
    return terms.every((term) => text.includes(term));
  });

  return (
    <>
      <div className="mt-12 max-w-2xl">
        <label htmlFor="paper-search" className="text-xs font-bold uppercase tracking-[0.15em] text-text-muted">
          Search by title or author
        </label>
        <div className="mt-3 flex gap-3">
          <input
            id="paper-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a paper or researcher…"
            className="min-w-0 flex-1 rounded-none border border-surface-border bg-white px-4 py-3 text-lg text-text-primary outline-offset-4 placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-text-primary"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} className="px-2 text-sm font-semibold underline underline-offset-4">
              Clear
            </button>
          )}
        </div>
      </div>
      <p role="status" className="mt-5 text-sm text-text-muted">
        {filtered.length} of {papers.length} papers
      </p>
      <ul className="mt-6 border-t border-surface-border">
        {filtered.map((paper) => (
          <li key={paper.url} className="border-b border-surface-border py-7 md:py-9">
            <article>
              <h2 className="max-w-[60ch] font-display text-2xl font-semibold leading-tight tracking-tight text-text-primary md:text-3xl">
                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline focus-visible:underline">
                  {paper.title}
                </a>
              </h2>
              <p className="mt-3 max-w-[100ch] text-base font-light leading-relaxed text-text-secondary md:text-lg">
                {paper.authors}
              </p>
              <a href={paper.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${paper.title} on OpenReview`} className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.12em] text-text-muted underline underline-offset-4 hover:text-text-primary">
                OpenReview ↗
              </a>
            </article>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p className="py-12 text-xl text-text-secondary">
          No papers match your search. Try another title or author, or clear the search to see all papers.
        </p>
      )}
    </>
  );
}
