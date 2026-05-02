# Design Brief: The Gyms

## Visual Direction
Elite Athletic Minimalism with Cinematic Energy — brutalist dark aesthetic paired with bold red for power, warm gold for luxury. Pure functionality, zero kitsch. Aspirational Indian market positioning.

## Tone
Confident, athletic, premium. No playfulness — conviction and discipline throughout. Cultured luxury (red + gold resonates with Indian wealth aesthetic).

## Color Palette

| Name | Light | Dark | Usage |
|------|-------|------|-------|
| Primary (Red) | `0.55 0.22 27` | `0.55 0.22 27` | CTAs, energy, power. Primary interactive elements |
| Secondary (Gold) | `0.78 0.18 70` | `0.78 0.18 70` | Luxury accent, membership highlights, premium signals |
| Background | `0.96 0 0` | `0.08 0 0` | Page canvas. Black for dark mode (#0a0a0a feel) |
| Card/Surface | `0.95 0 0` | `0.14 0 0` | Component surfaces. Charcoal depth (#1a1a1a) |
| Foreground | `0.08 0 0` | `0.96 0 0` | Text. Inverted in dark mode (white on black) |
| Muted | `0.3 0 0` | `0.28 0 0` | Secondary text, inactive states |
| Border | `0.22 0 0` | `0.22 0 0` | Subtle dividers between elements |

## Typography

| Layer | Font | Weight | Scale | Usage |
|-------|------|--------|-------|-------|
| Display | General Sans | 700 | 3.5rem / 2.25rem | Page headings, hero copy |
| Body | DM Sans | 400–500 | 1rem / 0.875rem | Paragraph, UI labels |
| Mono | Geist Mono | 400 | 0.875rem | Pricing, stats, code |

## Elevation & Depth
- Hero sections: full-bleed black with sharp corners, red accent border or element
- Cards: charcoal (0.14) with `shadow-card` (subtle), hover lifts with `shadow-elevated`
- Buttons: Red primary, gold secondary, white text. Minimal padding, sharp 4px corner

## Structural Zones

| Zone | Treatment |
|------|-----------|
| Header/Nav | Black bar, white text, gold bottom-border accent |
| Hero | Full-bleed black, red accent element (line, border, or gradient overlay) |
| Content sections | Alternate black/charcoal for rhythm (checkerboard pattern) |
| Cards | Charcoal cards with red hover state or gold accent label |
| CTA | Red button with white text, gold secondary buttons |
| Footer | Black with gold accent text for key links |

## Spacing & Rhythm
- Base unit: 4px grid
- Card padding: 24px (comfortable, premium feel)
- Section gap: 60px vertical (breathing room)
- Button: 12px horizontal, 10px vertical (compact, athletic)

## Component Patterns
- Buttons: Primary (red bg, white text) + Secondary (dark outline, white text) + Tertiary (transparent, red text)
- Cards: No decoration, strong borders only when necessary
- Inputs: Charcoal background, subtle border-focus red
- Links: Gold underline on hover

## Motion & Transitions
- Page transitions: `page-in` (0.4s, fade + slide-up) when navigating between multipage sections
- Button hover: `transition-smooth` (0.3s) for color shifts
- Link underline: gold accent fade-in on hover
- No bounce or playful animations — all eases are `cubic-bezier(0.4, 0, 0.2, 1)` (smooth professional)

## Constraints
- No gradients except subtle hero overlay
- No shadows > 30px blur (keeps premium feel, not magical)
- No rounded corners except 4px on buttons
- Red + Gold are ONLY used for emphasis — never mixed casually
- Images must be PNG, high quality, athletic/aspirational

## Signature Detail
Red accent border (2–3px) on hero section or membership pricing card. Signals premium, breaks flatness, feels intentional.

## Dark Mode
Primary mode. All tokens optimized for dark (black #0a0a0a background, charcoal #1a1a1a surfaces, white foreground).

