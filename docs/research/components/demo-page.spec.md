# Demo Page Specification

## Overview

- **Target file:** `src/app/demo/page.tsx`
- **Screenshot:** `docs/design-references/demo-artifact-desktop.png`, `docs/design-references/demo-artifact-mobile.png`
- **Interaction model:** static flow plus nested click-driven platform cards

## Foundation

- Background `#fff`; primary text `#141414`.
- Body/UI font: Lora. Display font: EB Garamond.
- Shared content width: 85rem.
- Page gutter: 24 px mobile / 40 px at 768 px.

## Sections

- Preview bar: black, centered white 14 px copy, 10 px vertical and 24 px horizontal padding.
- Intro: 80 px top padding mobile / 96 px desktop; 48 px title mobile, 72 px desktop. The participation summary gains two columns at 768 px.
- Platform section: 56 px outer vertical padding; 80 px gap between major sections and 48 px between cards.
- Section headings: EB Garamond, 48 px mobile / 60 px desktop, 600.
- Checklist: two columns from 768 px; custom 16 px horizontal rule bullets.
- Logistics: 256 px label column from 768 px.
- FAQ: 80-character max width; 24 px vertical row padding; 24 px question headings.
- CTAs: pill shape, 40 px horizontal / 16 px vertical padding, 18 px bold copy.

## Text Content

Use the Claude artifact copy verbatim, including all TBD values, dates, links, captions, and tab content.

## Responsive Behavior

- Desktop (1440 px): full header navigation and two-column grid sections.
- Tablet (768 px): `md` spacing and grid rules apply.
- Mobile (390 px): single-column content with hamburger navigation and 24 px gutters.
