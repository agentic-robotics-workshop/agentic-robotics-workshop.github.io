import { Countdown } from "@/components/Countdown";
import { KEY_DATES, LINKS } from "@/lib/content";

const LABEL = "text-xs font-bold uppercase tracking-[0.18em] text-text-muted";
const BODY = "text-xl font-light leading-[1.7] text-text-primary";

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 transition-colors hover:text-text-muted"
    >
      {children}
    </a>
  );
}

export function CallForContributions() {
  return (
    <section
      id="submissions"
      className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
    >
      <h2 className="font-display text-6xl font-semibold tracking-[-0.01em] text-text-primary md:text-7xl">
        Call for Contributions
      </h2>

      {/* Intro */}
      <div className="mt-8 bg-black/[0.025] py-1">
        <p className="text-lg font-bold uppercase leading-[1.7] tracking-[0.1em] text-text-primary md:text-xl">
          We invite contributions across two tracks — a Demo Track and a Poster
          Track — addressing the workshop&apos;s open problems.
        </p>
        <p className="mt-6 text-lg font-bold uppercase leading-[1.7] tracking-[0.1em] text-text-primary md:text-xl">
          All submissions are reviewed single-blind via{" "}
          <ExtLink href={LINKS.openReview}>OpenReview</ExtLink>.
        </p>
      </div>

      {/* Deadline + tentative timeline */}
      <div className="mt-10 border border-black/[0.10] bg-black/[0.02] p-8 md:p-10">
        <div className="flex items-baseline gap-3">
          <p className={LABEL}>Submission Deadline</p>
          <span className="rounded-full border border-black/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-text-muted">
            Tentative
          </span>
        </div>
        <p className="mt-3 font-display text-4xl font-semibold leading-none text-text-primary md:text-5xl">
          Mid-September 2026
        </p>
        <p className={`${LABEL} mt-7`}>Submissions Close In</p>
        <div className="mt-4">
          <Countdown placeholder />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-3 border-t border-black/[0.08] pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_DATES.map((d) => (
            <div key={d.label}>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-muted">
                {d.label}
              </p>
              <p className="mt-1 text-lg font-light text-text-primary">{d.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Track | Poster Track */}
      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="border border-black/[0.08] bg-black/[0.02] p-10 md:p-12">
          <h3 className="font-display text-4xl font-semibold text-text-primary md:text-5xl">
            Demo Track
          </h3>
          <p className={`${BODY} mt-6`}>
            Submit a short demonstration video (up to{" "}
            <strong className="font-bold">3 minutes</strong>) plus a description of
            hardware and software requirements.
          </p>
          <p className={`${BODY} mt-6`}>
            We especially encourage demos that can be{" "}
            <strong className="font-bold">operated by audience members</strong>,
            span multiple open problems, or explicitly surface failure modes.
            Platforms can be supplied by the organizers and partners.
          </p>
        </div>

        <div className="border border-black/[0.08] bg-black/[0.02] p-10 md:p-12">
          <h3 className="font-display text-4xl font-semibold text-text-primary md:text-5xl">
            Poster Track
          </h3>
          <p className={`${BODY} mt-6`}>
            Submit <strong className="font-bold">short papers</strong> (up to 4
            pages excluding references, in CoRL format) reporting research,
            position arguments, or work in progress on the workshop themes.
          </p>
          <p className={`${BODY} mt-6`}>
            Each submission receives at least two reviews from a program committee
            of <strong className="font-bold">15–20 researchers</strong> across the
            relevant communities.
          </p>
        </div>
      </div>

      {/* Eligibility note */}
      <div className="mt-10">
        <p className="inline-block rounded-full border border-black/15 bg-black/[0.03] px-8 py-5 text-lg text-text-primary md:text-xl">
          📄 Following CoRL workshop policy, papers already accepted at the main{" "}
          <strong className="font-bold">CoRL 2026</strong> conference are not
          eligible.
        </p>
      </div>
    </section>
  );
}
