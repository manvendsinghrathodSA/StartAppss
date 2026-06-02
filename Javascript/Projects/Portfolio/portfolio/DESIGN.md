---
name: Developer Portfolio System
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2ec'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2e3038'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#b7c8e1'
  on-secondary: '#213145'
  secondary-container: '#3a4a5f'
  on-secondary-container: '#a9bad3'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353c'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system is engineered for a high-performance developer portfolio that balances technical rigor with a modern, innovative aesthetic. The brand personality is "The Architect-Innovator"—someone who builds with precision but thinks with creativity.

The visual style is **Modern Tech** with heavy influences from **Glassmorphism** and **Minimalism**. It utilizes deep space-like backgrounds to provide a canvas for vibrant, glowing accents that draw the eye to key achievements and technical skills. The interface should feel like a high-end IDE: efficient, clean, and data-rich without being overwhelming. Whitespace is used aggressively to signal premium quality and clarity of thought.

## Colors
This design system defaults to a sophisticated **Dark Mode**. The palette is anchored by a deep navy-black background that provides the necessary depth for layered glass effects.

- **Primary (Electric Blue):** Used for interactive elements, highlights, and primary calls to action. It represents the "energy" of the code.
- **Secondary (Slate):** Used for metadata, borders, and secondary text to maintain a clear hierarchy.
- **Surface:** A slightly lighter navy used for cards and containers to create a sense of depth against the background.
- **Glow:** Semi-transparent variations of the primary blue are used for ambient lighting and focus states, mimicking a backlit terminal or high-end electronics.

## Typography
The typography strategy pairs geometric strength with functional readability. 

**Sora** is the display face, chosen for its modern, tech-forward apertures and wide stance. It should be used for all major headings to establish a confident, structural tone. 

**Inter** serves as the workhorse for body copy and UI labels. Its high x-height and neutral character ensure that long-form project descriptions and technical resumes remain highly legible on digital screens. 

For technical snippets and data-heavy labels, a monospaced font (JetBrains Mono) is introduced to reinforce the developer-centric identity.

## Layout & Spacing
The system employs a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

The layout philosophy emphasizes "Generous Breathing Room." Section gaps are intentionally large (120px+) to allow individual projects and experience blocks to stand alone as significant achievements. 

- **Project Gallery:** Uses a CSS Grid with `repeat(auto-fit, minmax(380px, 1fr))` to ensure responsiveness without media query bloat.
- **Experience Timeline:** A vertical, left-aligned track where the spacing between nodes represents the duration of the role.
- **Safe Zones:** Content is centered within a 1280px max-width container to maintain readability on ultra-wide monitors.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Glassmorphism** rather than traditional drop shadows.

- **Level 1 (Background):** #0F172A.
- **Level 2 (Cards):** #1E293B at 60% opacity with a `backdrop-filter: blur(12px)`.
- **Level 3 (Interactive/Hover):** A subtle 1px border stroke using a linear gradient (Primary to Transparent) to create a "glowing edge" effect.

Shadows, when used, are "Ambient Glows"—large, very low-opacity blue blurs (`rgba(59, 130, 246, 0.15)`) placed behind primary cards to simulate a light source emanating from the UI elements themselves.

## Shapes
The shape language is **Modern and Consistent**. A medium roundedness (0.5rem) is applied to all standard UI components to soften the "industrial" feel of the dark theme and make the interface feel approachable.

- **Cards/Buttons:** 0.5rem (8px) radius.
- **Large Sections/Containers:** 1rem (16px) radius.
- **Code Blocks:** 0.5rem (8px) to match the card language, ensuring the "terminal" feels integrated rather than like an afterthought.

## Components

### Buttons
Primary buttons are solid Electric Blue with white text, using a subtle `box-shadow` glow on hover. Secondary buttons are "ghost" style with a Slate border that transitions to the Primary Blue on interaction.

### Glass Cards
The signature component. Use a semi-transparent fill with a backdrop blur and a thin, 1px top-weighted border to catch the "light." These are used for project tiles and experience blocks.

### Terminal/Code Blocks
A custom-styled container with a "window control" header (red, yellow, green dots). The background is a deeper black (#020617) to differentiate from the UI. Syntax highlighting must use a curated palette that complements the Electric Blue primary color.

### Chips/Tags
Small, low-contrast capsules used for tech stacks (e.g., "React", "TypeScript"). These use a subtle background fill of the Primary color at 10% opacity with Primary-colored text.

### Vertical Timeline
A 2px Slate line with "nodes" that glow Electric Blue when the user scrolls past them. This provides a clear, visual path of professional growth.

### Inputs
Minimalist fields with a bottom-border only or a very subtle glass background. The focus state should trigger the "glowing border" effect.