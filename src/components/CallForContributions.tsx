import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { LINKS, SUBMISSION_DEADLINE } from "@/lib/content";

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
      <div className="mt-8 space-y-6 text-xl font-light leading-[1.7] text-text-primary md:text-2xl">
        <p>
          We invite contributions across two tracks — a{" "}
          <strong className="font-bold">Demo Track</strong> and a{" "}
          <strong className="font-bold">Poster Track</strong> —{" "}
          addressing the workshop&apos;s open problems.
        </p>
        <p>
          All submissions are reviewed single-blind via{" "}
          <ExtLink href={LINKS.openReview}>OpenReview</ExtLink>.
        </p>
      </div>

      {/* Deadline */}
      <div className="mt-10 border border-black/[0.10] bg-black/[0.02] p-8 md:p-10">
        <p className={LABEL}>Deadline</p>
        <p className="mt-3 font-display text-4xl font-semibold leading-none text-text-primary md:text-5xl">
          {SUBMISSION_DEADLINE.display}
        </p>
        <p className="mt-3 text-lg font-light text-text-primary">
          {SUBMISSION_DEADLINE.time}
        </p>
        <p className={`${LABEL} mt-7`}>Submissions Close In</p>
        <div className="mt-4">
          <Countdown deadlineIso={SUBMISSION_DEADLINE.iso} />
        </div>
      </div>

      {/* Demo Track | Poster Track */}
      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="border border-black/[0.08] bg-black/[0.02] p-10 md:p-12">
          <h3 className="font-display text-4xl font-semibold text-text-primary md:text-5xl">
            Demo Track
          </h3>
          <p className={`${BODY} mt-6`}>
            We bring the robot, you bring the{" "}
            <strong className="font-bold">agent demo</strong> — robot, compute, and
            an API for perception and control are ready on-site.
          </p>
          <p className={`${BODY} mt-6`}>
            Submit a <strong className="font-bold">video proof</strong> of your
            system running to be considered, plus a description of hardware and
            software requirements.
          </p>
          <p className={`${BODY} mt-6`}>
            We especially encourage demos that can be{" "}
            <strong className="font-bold">operated by audience members</strong>,
            span multiple open problems, or explicitly surface failure modes.
          </p>
          <p className={`${BODY} mt-6`}>
            A <strong className="font-bold">Best Demo Award</strong> carries a{" "}
            <strong className="font-bold">$1,000</strong> prize.
          </p>
          <Link
            id="demo-platform-track-cta"
            href="/demo?from=demo-track"
            className="mt-8 inline-flex rounded-full bg-[#141414] px-8 py-4 text-base font-bold tracking-[0.4px] text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.24)]"
          >
            View Demo Platforms
          </Link>
        </div>

        <div className="border border-black/[0.08] bg-black/[0.02] p-10 md:p-12">
          <h3 className="font-display text-4xl font-semibold text-text-primary md:text-5xl">
            Poster Track
          </h3>
          <p className={`${BODY} mt-6`}>
            Submit papers of up to{" "}
            <strong className="font-bold">8 pages</strong> plus an unlimited
            appendix, in the CoRL template, reporting research, position
            arguments, or work in progress on the workshop themes.
          </p>
          <p className={`${BODY} mt-6`}>
            Each submission receives at least two reviews from a program committee
            of <strong className="font-bold">15–20 researchers</strong> across the
            relevant communities.
          </p>
        </div>
      </div>
    </section>
  );
}
