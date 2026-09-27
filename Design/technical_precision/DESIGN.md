---
name: Technical Precision
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#131b2e'
  on-tertiary-container: '#7c839b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the calculated restraint of high-performance developer tools paired with the editorial clarity of industrial product design. Built specifically for an AI/ML and Full-Stack engineer's personal platform, it communicates supreme technical competence through hyper-clean spatial composition, unyielding alignment, and meticulous micro-details rather than ornamentation.

### Aesthetic Foundation
- **Discipline & Restraint:** The visual language rejects SaaS tropes, generic neon purple AI glows, and noisy gradients in favor of pure monochrome architecture, hair-thin structure, and clinical whitespace.
- **Atmospheric Calm meets Technical Velocity:** The environment feels quiet, deliberate, and high-density where required, echoing the structural confidence of physical hardware manuals and precision engineering software.
- **Target Audience:** Engineering leaders, technical founders, and elite product teams seeking deep systems engineering rigor paired with world-class frontend execution.

## Colors

The palette is engineered for maximal contrast, visual quietness, and deliberate functional emphasis.

### Palette Architecture
- **Canvas Base (`#FBFBFB` / `#FAFAFA`):** An optical off-white that eliminates screen glare while preserving total luminance.
- **Surface Elevation (`#FFFFFF`):** Reserved for elevated cards, floating toolbars, and dynamic interactive overlays to create pristine planar separation.
- **Primary Ink (`#111111`):** A near-black with zero chromatic wash, providing sharp editorial contrast for major display copy and critical interactive states.
- **Charcoal (`#1E1E1E`):** Used for elevated dark-mode modules, code-block surfaces, and inverted badges.
- **Supporting Neutrals:**
  - `#737373`: Secondary body, metadata, and technical specifications.
  - `#A3A3A3`: Subtle utility labels, icons in resting states, and timestamp markers.
  - `#E5E5E5`: Structural 1px hairline rules, card dividers, and data-grid cells.
  - `#F4F4F5`: Subtle background fills for inline code, keyboard shortcuts, and disabled states.
- **Precision Technical Accent (`#2563EB` & `#0F172A`):** Used exclusively for system state indicators (e.g., active compute pipeline, commit dots, live deployment ping) and hyper-focused interactive triggers. Cyan (`#06B6D4`) is restricted to sub-pixel terminal micro-accents.

## Typography

The typographic hierarchy balances modern engineering utility with confident editorial impact.

- **Primary Interface Font:** `Geist` provides neutral geometric proportions, balanced counters, and precise negative tracking at large display sizes.
- **Technical & Metric Accent:** `JetBrains Mono` handles all meta-annotations, commit hashes, model parameter weights, timestamps, and terminal data feeds.
- **Rhythm & Tracking Rules:** Large headlines enforce tight letter spacing (`-0.03em` to `-0.04em`) to establish visual tension and high density. Monospaced indicators enforce uppercase tracking (`+0.04em`) for legibility at micro scales.

## Layout & Spacing

The structural layout relies on an uncompromising 12-column coordinate framework bounded by a maximum content width of 1180px for standard reading and 1360px for full-width architectural dashboards.

### Responsive Breakpoints & Adaptive Rules
- **Desktop (>= 1024px):** 12-column grid. Margins lock at `3rem`, column gutters at `1.5rem`. Code windows, project manifests, and split architecture diagrams operate side-by-side.
- **Tablet (768px - 1023px):** 8-column layout. Gutter adjusts to `1.25rem`, margins scale to `2rem`. Multi-column metrics stack into 2x2 grids.
- **Mobile (< 768px):** 4-column flow. Outer canvas margin shrinks to `1.25rem`, element gutters collapse to `1rem`. All horizontal split data flows reflow vertically into unified stack hierarchies.

### Layout Philosophy
Every element adheres strictly to 4px and 8px baseline increments. Margins delineate distinct cognitive chapters (e.g. Hero > Selected Systems > Model Research > Production Deployments), while component paddings isolate discrete interaction zones.

## Elevation & Depth

Visual depth is achieved through planar layering and hair-thin borders rather than diffuse drop shadows.

- **Planar Surface Separation:** The canvas sits at `#FBFBFB`. Elevated content containers sit at pure `#FFFFFF`. This creates a crisp, surgical separation without visual murkiness.
- **Hairline Outlines:** All cards, floating toolbars, and input surfaces use 1px solid borders (`#E5E5E5`). On hover, the border shifts to `#111111` or `#2563EB` with an instantaneous 150ms ease-out transition.
- **Directional Grounding:** Diffuse ambient shadows are used only on elevated popovers, dropdowns, and floating command palettes:
  - `0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)`
- **Interactive Focus & Blur:** Glassmorphic backdrops are limited strictly to global sticky headers and the system command bar (`backdrop-filter: blur(12px)` over `rgba(251, 251, 251, 0.8)`).

## Shapes

The shape hierarchy follows a crisp, architectural geometry:

- **Base Radius (0.25rem / 4px):** Applied to badges, inline code tags, input controls, and standard action buttons.
- **Structural Radius (0.5rem / 8px):** Applied to project preview cards, modal containers, and code execution windows.
- **Interactive Badges / Status Pills:** Applied sparingly with full pill radii (9999px) for real-time telemetry indicators and status markers (e.g., "Available for Q3", "Model v4.2 Active").
- **Inner Corner Rule:** Nested child elements maintain a border radius 2px to 4px smaller than their enclosing parent to prevent visual collisions.

## Components

### Buttons
- **Primary:** Solid `#111111` fill, `#FFFFFF` text, `4px` corner radius, `0 10px 18px` padding. Active state contracts by 0.5% scale (`transform: scale(0.995)`).
- **Secondary / Outline:** `#FFFFFF` fill, 1px solid `#E5E5E5` border, `#111111` text. On hover: border color transitions to `#111111`.
- **Ghost / Technical:** Pure text with `JetBrains Mono` label, transparent background, `#737373` text. On hover: `#111111` with an animated right arrow nudge (`translateX(2px)`).

### Cards & Project Showcase Containers
- Crisp `#FFFFFF` surface with 1px border (`#E5E5E5`).
- No permanent box-shadow. On hover, the border transitions to `#A3A3A3` with a micro shadow: `0 2px 8px rgba(0, 0, 0, 0.04)`.
- Internal sections are partitioned with 1px divider lines (`#E5E5E5`) separating the technical summary, live demo link, and repo metrics.

### Chips & Badges
- **Architecture Tags:** `JetBrains Mono` 11px uppercase, background `#F4F4F5`, text `#737373`, border 1px solid `#E5E5E5`.
- **System Status Indicator:** 9999px pill, background `#FFFFFF`, border 1px solid `#E5E5E5`, containing a 6px glowing dot (`#2563EB` with subtle 2s pulse).

### Inputs & Terminal Fields
- Background `#FFFFFF`, 1px solid `#E5E5E5`, placeholder `#A3A3A3`, font `Geist` 14px.
- Focus state: Border shifts to `#111111`, zero colored outline rings, 1px solid outline `#111111`.

### Code & Architecture Viewers
- Surface container `#1E1E1E` with `#FBFBFB` text for code previews, or inverse `#FFFFFF` with `#111111` text for schema definitions.
- Header toolbar containing file path, branch name in `JetBrains Mono`, copy action, and execution latency metric in milliseconds.

### List Items & Research Logs
- Borderless rows separated by 1px bottom divider (`#E5E5E5`).
- Left-aligned title and category; right-aligned monospaced publication date or stack tag.
- Row background transitions from `#FBFBFB` to `#F4F4F5` on hover with a smooth 100ms response.