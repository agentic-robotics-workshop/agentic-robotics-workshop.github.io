# DemoPlatformCard Specification

## Overview

- **Target file:** `src/components/DemoPlatformCard.tsx`
- **Screenshot:** `docs/design-references/demo-artifact-desktop.png`
- **Interaction model:** click-driven tabs

## DOM Structure

`article` contains eyebrow, `h3`, description, 1280×700 image with caption, tablist, and one active tabpanel. The component accepts serializable card data from the Server Component page.

## Computed Styles

- Card: 1 px `rgba(0,0,0,.08)` border, `rgba(0,0,0,.02)` background, 32 px padding mobile / 40 px desktop.
- Eyebrow: 12 px, 700, uppercase, `.18em` tracking, `#6b6b6b`.
- Heading: EB Garamond, 36 px mobile / 48 px desktop, 600, 1.05 line-height.
- Body: Lora, 18 px, 300-equivalent visual weight, 1.65 line-height.
- Image: full width, 1280:700 aspect ratio, white background, 1 px soft border.
- Tabs: flex-wrap, 28 px horizontal gap, bottom rule. Buttons are 12 px bold uppercase with `.14em` tracking and 12 px bottom padding.
- Specs: two columns from 640 px; each row has a soft bottom border, label/value alignment, and 12 px bottom padding.

## States & Behaviors

- Trigger: click a tab button.
- Active tab: `border-color: #141414`, `color: #141414`, `aria-selected=true`.
- Inactive tab: transparent border, `#9a9a9a` text; hover changes to `#4a4a4a`.
- Each card initializes to `Specs` and maintains state independently.

## Assets

- `/images/demo/agilex-nero.jpg`
- `/images/demo/unitree-g1.jpg`

## Responsive Behavior

- Desktop: 40 px card padding; 48 px heading; two-column spec rows.
- Mobile: 32 px card padding; 36 px heading; one-column spec rows.
