# Page Topology — aiagentbehavior.com

Single page. Layout: `<body bg #000>` → sticky `<header>` (z-50) + `<main>`. No footer.

`main` = `min-h-screen bg-[#000] text-[--text-primary]`, two children:
1. **Hero** `<section>` (relative, overflow-hidden, fade-in) — canvas starfield + centered content. ~590px tall, content-driven.
2. **Content wrapper** `<div class="flex flex-col gap-24 py-20 overflow-x-hidden">` containing all flow sections, each `max-w-[85rem] mx-auto w-full px-6 md:px-10`.

## Section order (top → bottom)
| # | Name | Component | Interaction | Notes |
|---|------|-----------|-------------|-------|
| - | Header / Nav | `Header.tsx` | static + mobile menu toggle | sticky translucent blur bar; logo + 3 anchor links |
| 1 | Hero | `Hero.tsx` + `Starfield.tsx` | time-driven canvas | eyebrow, H1, subtitle, CTA pill |
| 2 | Supported By | `SupportedBy.tsx` | static | label + 3 logo boxes (Anthropic/Google/OpenAI), divider rules above & below |
| 3 | Intro paragraph | `Intro.tsx` | static | 2 paragraphs, Lora 20px, with bold/italic emphasis spans |
| 4 | Topics | `Topics.tsx` | static | heading + 5 topic cards in grid, each with giant faint bg number; trailing "However…" paragraph |
| 5 | Speakers | `Speakers.tsx` (uses `PersonCard`) | hover (photo color) | `#speakers` anchor; heading + intro + 3-col grid of 6 people |
| 6 | Call for Contributions | `CallForContributions.tsx` (uses `Countdown`) | time-driven countdown | `#submissions` anchor; heading + uppercase intro + deadline/countdown box + Papers\|Benchmarks 2-col + Best Paper Award pill |
| 7 | Organizers | `Organizers.tsx` (uses `PersonCard`) | hover (photo color) | `#organizers` anchor; heading + 5-col grid of 10 people |

## Shared components
- `PersonCard.tsx` — square grayscale→color photo, name (EB Garamond), affiliation (Lora, white@0.8), WEBSITE link. Used by Speakers (3-col) and Organizers (5-col).
- `Starfield.tsx` — client canvas particle animation.
- `Countdown.tsx` — client live countdown.
- `icons.tsx` — Menu (hamburger), Close, ArrowUpRight (optional), Logo wordmark.

## Z-index / layering
- Header z-50 sticky over everything.
- Hero: canvas z-0, gradient masks z-0..1, content z-10.

## Anchors (header nav targets)
- `#speakers`, `#submissions`, `#organizers` — empty `<div>` spacer anchors with `scroll-mt-32` precede the respective sections (or the section itself carries the id + scroll-mt).
