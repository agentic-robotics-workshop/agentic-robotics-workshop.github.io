# Behaviors — aiagentbehavior.com

## Global
- **Background:** pure black `#000`. Built with Next.js. Two serif fonts: **Lora** (body/UI) and **EB Garamond** (display).
- **Design tokens (CSS vars):**
  - `--bg-primary: #000`, `--bg-surface: #050505`, `--surface: #000`
  - `--surface-border: hsla(0,0%,100%,.08)`, `--surface-border-soft: hsla(0,0%,100%,.04)`
  - `--text-primary: #fff`, `--text-secondary: #a3a3a3`, `--text-muted: #737373`, `--text-soft: #525252`
  - `--text-highlight: #ef7c7c`, `--focus-ring: hsla(0,0%,100%,.2)`
- **Keyframes:** `fadein`, `swarm-drift`, `claude-pulse`.
- **No smooth-scroll library** (no Lenis). Native scroll. Anchor links use `scroll-margin-top` (`scroll-mt-32`) for the sticky header offset, and `html { scroll-behavior: smooth }`.

## Scroll-in animation (`.fade-in`)
- Every major section has class `fade-in`.
- `animation: 0.8s cubic-bezier(0.2,0.8,0.2,1) fadein;`
- `@keyframes fadein { 0% { opacity:0; filter:blur(4px); transform:translateY(12px) } 100% { opacity:1; filter:blur(0); transform:translateY(0) } }`
- NOTE: on the live site this animation plays once on mount (not IntersectionObserver-gated per-scroll). Reproduce as a CSS mount animation. Respect `prefers-reduced-motion` (disable).

## Header (sticky)
- `position: sticky; top:0; z-index:50`. Height 85px. Full width.
- `.nav-shell { border-bottom:1px solid var(--surface-border-soft); background:rgba(0,0,0,0.7); backdrop-filter:blur(24px); box-shadow: inset 0 -1px 0 rgba(255,255,255,0.03); }`
- Does NOT change on scroll (constant translucent blurred bar).
- Desktop: logo "Workshop on Agent Behavior" (EB Garamond) left; nav links SPEAKERS / SUBMISSIONS / ORGANIZERS right.
- Nav link hover: color `#737373` → `#fff`, transition `color 0.15s cubic-bezier(0.4,0,0.2,1)`.
- Mobile (<~768px): logo collapses to "WAB"; nav collapses to a hamburger button that toggles a menu panel with the 3 links.

## Hero starfield (canvas)
- A `<canvas>` (full hero size, e.g. 1440×590) drawing an animated "swarm" of glowing particles.
- Particles are small 4-point star sparkles (white, soft glow); some larger particles have a thin circular halo ring. Density is highest near center, sparser toward edges, drifting slowly and twinkling (opacity oscillates).
- Overlaid by radial + edge gradient masks that fade particles into black at center & edges:
  - radial: `radial-gradient(circle at center, transparent 0%, #000 100%)` opacity 0.85
  - left/right edge: `w-1/4` linear gradient from `#000` to transparent
  - bottom: `h-40` gradient from `#000` to transparent
- Implement as a custom React `<canvas>` component with `requestAnimationFrame`. Respect `prefers-reduced-motion` (render static).

## CTA button ("Call for Contributions")
- White pill: bg `#fff`, text `#000`, `border-radius: 9999px`, padding `20px 48px`, Lora 20px/700, letter-spacing 0.5px.
- Has a soft white glow box-shadow. Transition `0.3s cubic-bezier(0.4,0,0.2,1)`.
- Hover: glow intensifies / slight scale (subtle). Links to `#submissions`.

## Speaker / Organizer photos
- Square (`aspect-square`), `object-fit: cover`, `filter: grayscale(1)` by default.
- **Hover → full color** (`grayscale(0)`), transition `0.7s cubic-bezier(0.4,0,0.2,1)`.
- Name/affiliation/WEBSITE below the photo. WEBSITE link is a small uppercase tracked label.

## Countdown timer (Call for Contributions)
- Live countdown to **June 23, 2026 (AoE)** showing DAYS : HRS : MINS : SECS.
- Updates every second (client component, `setInterval`). Numbers EB Garamond 36px/700; labels Lora ~10px uppercase tracked muted.

## Responsive
- **Desktop (1440):** Topics 3-col grid; Speakers 3-col; Organizers 5-col; Papers/Benchmarks 2-col with center vertical divider; SupportedBy 3-col logos.
- **Tablet (~768):** grids reduce columns (Organizers→ ~3, Topics/Speakers→2). Papers/Benchmarks may stay 2-col.
- **Mobile (390):** logo→"WAB", nav→hamburger. Everything stacks to 1 column. SupportedBy logos stack 1-per-row. Body text full-width. Hero H1 scales down (~56–64px), eyebrow wraps.
- Breakpoints follow Tailwind defaults (sm 640, md 768, lg 1024).
