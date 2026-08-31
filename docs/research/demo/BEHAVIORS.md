# `/demo` Behaviors

- Native smooth scrolling; no third-party scrolling library.
- Header stays sticky at the top and keeps a translucent white backdrop at all scroll positions.
- Major sections use the existing 800 ms mount fade/blur/translate animation and disable it for reduced motion.
- Each platform card owns a click-driven three-state tab interface: `Specs`, `API & sim`, and `Links`. Only one panel is rendered as active at a time; the active tab uses a dark bottom border and text, inactive tabs use soft text and a transparent border.
- The platform tab state is independent between cards.
- The mobile header exposes the existing hamburger menu interaction.
- Hover states are color-only for editorial links and navigation, a subtle scale for the primary CTA, and a soft gray fill for the secondary CTA.

Responsive sweep:

- Desktop (1440 px): full seven-item navigation; intro, checklists, and platform specifications use two columns.
- Tablet (768 px): desktop navigation remains visible and `md` layouts engage.
- Mobile (390 px): condensed title in the header, hamburger navigation, one-column content, 48 px display headings, and 24 px page gutters.
