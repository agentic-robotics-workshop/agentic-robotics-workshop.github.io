# CallForContributions Specification

## Overview
- **Target file:** `src/components/CallForContributions.tsx` (uses `Countdown`)
- **Anchor:** `id="submissions"`, `scroll-mt-32`
- **Interaction model:** time-driven (live countdown)

## Structure & exact styles
- **h2** "Call for Contributions" — EB Garamond, 72px, weight 600. (`text-6xl md:text-7xl`)
- **Intro** (`<p>`, uppercase, 20px, weight 700, letter-spacing 2px, white) on a faint highlight
  bg `rgba(255,255,255,0.02)`. Text: "We invite contributions that advance the scientific study
  of agent behavior across a wide range of topics and methodologies." `<br><br>` "All submissions
  should be made via [OpenReview](openReview)." — OpenReview underlined link.
- **Deadline box:** `bg rgba(255,255,255,0.03)`, `border 1px rgba(255,255,255,0.12)`, square, padding 40px.
  - label "Submission Deadline" (uppercase tracked, muted)
  - "June 23, 2026 (AoE)" — EB Garamond 48px / 600
  - label "Submissions Close In"
  - `<Countdown deadlineIso={SUBMISSION_DEADLINE_ISO} />`
- **Papers | Benchmarks:** 2-col grid (`md:grid-cols-2`), gap 48px. Each box:
  `bg rgba(255,255,255,0.02)`, `border 1px rgba(255,255,255,0.04)`, square, padding 48px.
  - h3 EB Garamond 48px/600; body 20px font-light.
  - **Papers:** "We solicit **non-archival papers** (4–9 pages long) formatted in the standard
    [COLM template](colmTemplate)." // "Submissions undergo *double-blind peer review*.
    **Preprints** and **concurrent submissions** are explicitly encouraged."
  - **Benchmarks:** "We seek **proposals for new benchmarks** to evaluate frontier AI agent
    behavior. Submissions should use [this LaTeX template](benchmarkTemplate), and be 1-2 pages
    long. **The template also contains more information about the expected format and content.**"
    // "**NOTE:** this track is for benchmark **proposals only** (no implementation or results
    needed at this stage)." // "If selected, we will provide credits for running benchmarks, a
    harness for building the benchmarks, and support the creators in implementing an open-source
    version." // "**We invite creators of accepted benchmarks to collaborate towards a large-scale
    agent behavior evaluation suite and paper.**"
- **Award pill:** inline-block, `rounded-full`, `border 1px rgba(255,255,255,0.15)`,
  `bg rgba(255,255,255,0.04)`, padding 20px 32px, 20px. "🏆 We plan to give one **Best Paper
  Award** along with several oral presentation slots."

## Responsive
- Mobile: intro full-width; deadline box full-width; Papers/Benchmarks stack 1-col.
