---
name: Precision Tech Visual Language
colors:
  surface: '#f7f9ff'
  surface-dim: '#cddced'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e2efff'
  surface-container-high: '#dbeafb'
  surface-container-highest: '#d6e4f5'
  on-surface: '#0f1d29'
  on-surface-variant: '#42474e'
  inverse-surface: '#24323f'
  inverse-on-surface: '#e8f2ff'
  outline: '#72777e'
  outline-variant: '#c2c7ce'
  surface-tint: '#396285'
  primary: '#00263f'
  on-primary: '#ffffff'
  primary-container: '#0b3c5d'
  on-primary-container: '#7fa7cd'
  inverse-primary: '#a3cbf2'
  secondary: '#006492'
  on-secondary: '#ffffff'
  secondary-container: '#75c6ff'
  on-secondary-container: '#005278'
  tertiary: '#371d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#553001'
  on-tertiary-container: '#ce9760'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee5ff'
  primary-fixed-dim: '#a3cbf2'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#1f4a6c'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#8bceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004b6f'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f6bb80'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#663e0e'
  background: '#f7f9ff'
  on-background: '#0f1d29'
  surface-variant: '#d6e4f5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for PT. Hitech Aksara Digital to project an image of institutional stability merged with cutting-edge digital innovation. The brand personality is authoritative yet accessible, characterized by a "Corporate Modern" aesthetic that prioritizes clarity, systematic precision, and a trustworthy digital-first presence.

The visual direction utilizes a structured grid, ample whitespace to reduce cognitive load, and high-quality typography to ensure information is conveyed with professional urgency. It balances traditional corporate reliability with a tech-forward edge through the use of subtle gradients and interactive depth.

## Colors

The palette is anchored in a professional hierarchy of blues. 

- **Primary (#0B3C5D):** Used for structural elements like headers, primary call-to-action buttons, and hero typography. It represents depth and stability.
- **Secondary (#328CC1):** Reserved for interactive feedback, icons, and accentuation. It provides the "high-tech" energy against the darker primary.
- **Background (#F9F9FB):** An "Ice Blue" off-white that prevents screen glare and maintains a clean, modern canvas.
- **Text Primary (#1D2731):** A high-contrast charcoal for maximum legibility in body copy and data tables.
- **Neutrals:** Systematic grays are used for borders, inactive states, and secondary metadata.

## Typography

This design system utilizes **Inter** for its entire type scale. Inter is chosen for its systematic, utilitarian nature and exceptional legibility on high-resolution screens. 

- **Headlines:** Use Bold weights (700) with slight negative letter-spacing to create a "locked-in," authoritative look for titles.
- **Body:** Standardized at 16px for optimal readability across enterprise dashboards and documentation.
- **Labels:** Use Medium (500) or Semi-Bold (600) weights to differentiate metadata from body text. Small labels (12px) should be set in uppercase when used for categorization to enhance the technical aesthetic.

## Layout & Spacing

The layout follows an **8px linear scale** to ensure mathematical precision in component alignment. 

- **Grid System:** A 12-column fluid grid for desktop (max-width 1440px) with 24px gutters. For mobile, the system collapses to a 4-column grid with 16px margins.
- **Padding:** Use "Generous Whitespace" (Level LG/XL) between major sections to emphasize a premium, high-tech feel. 
- **Alignment:** Elements should be strictly aligned to the grid to maintain the "Precise" brand value. Centered layouts are reserved for marketing heroes; all functional UIs are left-aligned.

## Elevation & Depth

To convey a modern digital feel without the heaviness of traditional skeuomorphism, the design system utilizes **Tonal Layers** and **Ambient Shadows**.

1.  **Level 0 (Floor):** The background color (#F9F9FB).
2.  **Level 1 (Cards/Surfaces):** Pure white (#FFFFFF) with a thin 1px border (#E2E8F0) and no shadow. Used for standard content containers.
3.  **Level 2 (Interactive/Floating):** Pure white with a soft, highly diffused shadow (Color: #0B3C5D at 8% opacity, Offset: 0px 4px, Blur: 12px). Used for hover states and dropdowns.
4.  **Level 3 (Overlays):** Used for modals, featuring a backdrop blur (12px) on the obscured content to simulate depth.

## Shapes

The design system uses **Soft (Level 1)** roundedness. 

- **Standard Elements (Buttons, Inputs):** 0.25rem (4px). This small radius maintains a professional, "engineered" look while removing the harshness of sharp corners.
- **Containers (Cards, Modals):** 0.5rem (8px). Larger containers use a slightly increased radius to soften the overall interface structure.
- **Icons:** Should be housed in square or circular frames to contrast with the rectangular UI elements.

## Components

- **Buttons:** Primary buttons use the Primary Color (#0B3C5D) with white text. Hover states transition to the Secondary Color (#328CC1). Use "Large" heights (48px) for primary actions to convey importance.
- **Input Fields:** Use a 1px solid border (#CBD5E0). On focus, the border color shifts to Secondary (#328CC1) with a soft 2px outer glow.
- **Chips/Badges:** Use a light tint of the Secondary color (10% opacity) with the Secondary hex for text. This creates a "tech" feel for status indicators.
- **Cards:** White backgrounds, 1px light gray borders, and 16px-24px internal padding. Card headers should use a subtle bottom border.
- **Lists:** Data-heavy lists should use alternating row colors (Zebra striping) using the Background color (#F9F9FB) at 50% opacity to maintain legibility.
- **Navigation:** Top-tier navigation should be anchored by the Primary Color, using Semi-Bold typography for the active state.