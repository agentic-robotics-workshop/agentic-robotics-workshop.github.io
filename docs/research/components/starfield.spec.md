# Starfield Specification

## Overview
- **Target file:** `src/components/Starfield.tsx` (client component)
- **Interaction model:** time-driven (canvas + requestAnimationFrame)

## What it is
A full-bleed `<canvas>` behind the hero content drawing an animated "swarm" of glowing
particles. On the live site `<canvas absolute inset-0 z-0 bg-[#000000]>` sized to the hero.

## Particle look (from zoom inspection)
- Small **4-point star sparkles**, white with soft radial glow, varied sizes (~1–4px core).
- A minority of larger particles also have a **thin circular halo ring** around them.
- Twinkle: opacity oscillates over time (swarm-drift keyframe: opacity 0.1→0.6→0.2→0.7→0.1).
- Slow drift: each particle wanders a small random offset and returns (closed loop).
- **Density highest near horizontal center**, sparser toward edges (cluster bias).

## Masking (done by Hero, not canvas — but canvas should already favor center)
Hero overlays: radial `transparent→#000`, left/right `w-1/4` fades, bottom `h-40` fade.

## Implementation
- Size canvas to parent via ResizeObserver; scale for devicePixelRatio.
- ~110–160 particles; bias x toward center using a gaussian-ish sample.
- Each particle: base x/y, size, phase, drift radius, twinkle speed; draw star sprite + glow;
  larger ones (~20%) draw a faint stroked circle ring.
- `prefers-reduced-motion`: draw once, no rAF loop.
