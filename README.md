# Visual Tech Studio Landing Page

A premium, responsive landing page for **Visual Tech Studio**, built as an internship Task 1 project using semantic HTML5, CSS3, and Vanilla JavaScript.

The page introduces the studio, presents its services and selected work, explains the studio's approach, and guides visitors toward starting a project.

## Project Overview

Visual Tech Studio is presented as a creative technology studio combining visual design with practical web development.

The landing page is designed around a clear visitor journey:

**Discover → Understand → Explore Work → Build Trust → Start a Project**

## Features

- Responsive desktop, tablet, and mobile layouts
- Sticky responsive navigation
- Mobile hamburger menu with accessible controls
- Active navigation state based on the visible section
- Hero section with animated Visual Tech Studio logo/orbital visual
- Primary and secondary call-to-action buttons
- Services showcase
- Selected Work portfolio cards
- Project links to the Visual Tech Studio portfolio
- Dedicated About section
- Studio approach and value sections
- Animated project CTA section
- Responsive footer with contact and social links
- Scroll-reveal animations
- Button, card, navigation, and portfolio micro-interactions
- Reduced-motion support
- Skip-to-content accessibility link
- Semantic HTML structure
- Responsive project images without intentional cropping
- Deferred JavaScript loading
- Optimized image decoding and lazy-loaded portfolio images

## Technologies

- **HTML5** — semantic page structure and accessible markup
- **CSS3** — responsive layouts, design system, animations, transitions, Flexbox, Grid, and media queries
- **Vanilla JavaScript** — navigation behavior, scroll state, active sections, reveal animations, menu controls, and button interactions
- **Google Fonts** — Inter and Cormorant Garamond

## Project Structure

```text
visual-tech-studio-landing-page/
├── index.html
├── css/
│   ├── style.css
│   ├── brand.css
│   └── hero.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── VTS-logo.jpeg
│   │   ├── Chronolux .jpg
│   │   ├── Nevous Realty.jpg
│   │   └── e-best shawarma.jpg
│   ├── icons/
│   └── fonts/
└── README.md
```

## Page Sections

1. **Header & Navigation** — primary navigation, mobile menu, and project CTA
2. **Hero** — studio introduction, headline, supporting copy, and primary actions
3. **The Studio** — concise positioning statement
4. **About Visual Tech Studio** — studio story and working approach
5. **Services** — four core service areas
6. **Selected Work** — ChronoLux, Nervous Realty, and E-Best Shawarma
7. **Statement** — supporting brand message
8. **Why Visual Tech Studio** — four studio principles
9. **Start a Project** — final conversion-focused CTA
10. **Footer** — navigation, services, contact email, social links, and copyright

## Responsive Design

The layout adapts across desktop, tablet, and mobile screen sizes.

Responsive behavior includes:

- Navigation changes to a mobile menu on smaller screens
- Service and value cards move from multi-column layouts to fewer columns
- Portfolio cards resize for smaller screens
- Typography and spacing scale through responsive CSS
- Hero, About, and CTA visuals resize to prevent clipping
- Horizontal overflow is protected against on small screens
- Buttons and interactive elements remain usable on touch devices

## Accessibility

Accessibility considerations include:

- Semantic HTML5 elements
- Descriptive page headings
- Accessible navigation labels
- `aria-expanded` and `aria-controls` for the mobile menu
- Keyboard-accessible interactive elements
- Visible focus states
- Skip-to-content link
- Decorative graphics marked with `aria-hidden`
- Descriptive alternative text for meaningful project and brand images
- Reduced-motion support through `prefers-reduced-motion`

## Animations & Interactions

The project includes lightweight UI motion designed to support the visual experience without requiring external animation libraries.

Examples include:

- Hero and CTA orbital logo animations
- Section reveal animations
- Floating hero and CTA labels
- Navigation transition on scroll
- Mobile menu open/close animation
- Service card hover/focus effects
- Portfolio image zoom and project overlay
- Button hover and pressed states

Users who prefer reduced motion receive a less animated experience through the CSS reduced-motion rules.

## Performance Considerations

- JavaScript is loaded with `defer`
- Portfolio images use lazy loading
- Images use asynchronous decoding where appropriate
- CSS rendering work is kept focused on interactive elements
- No external JavaScript framework is required
- The project uses progressive enhancement for interactive behavior

## How to Run

No build tool or package installation is required.

### Option 1 — Open directly

Download or clone the repository and open `index.html` in a modern browser.

### Option 2 — Run with a local server

From the project directory, use any simple local HTTP server. For example, with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Screenshots

Screenshots should be added here after final browser captures are taken at the required desktop and mobile breakpoints.

Recommended captures:

- Desktop homepage
- Mobile homepage with navigation open
- Services section
- Selected Work section
- About / Why Visual Tech Studio sections
- Final project CTA and footer

No screenshots are fabricated or included as placeholders pretending to be final captures.

## Development Highlights

- Planned the landing page around a clear conversion journey.
- Built the interface with semantic HTML5.
- Created a reusable visual system with CSS variables and separate style files.
- Added responsive layouts using CSS Grid, Flexbox, and media queries.
- Built the mobile navigation behavior with Vanilla JavaScript.
- Added accessible navigation and keyboard interaction support.
- Integrated real Visual Tech Studio project imagery.
- Added animated orbital logo visuals for the hero and CTA sections.
- Added portfolio image overlays and project links.
- Added performance-focused image loading and deferred JavaScript.
- Kept the implementation framework-free and dependency-light.

## Internship Requirements Covered

| Requirement | Implementation |
| --- | --- |
| Responsive Design | Responsive desktop, tablet, and mobile layouts |
| Navigation Menu | Desktop navigation and animated mobile hamburger menu |
| Call-to-Action Buttons | Start a Project and project-specific CTA links |
| Interactive UI | Navigation, cards, portfolio overlays, buttons, and scroll states |
| Basic Animations | Reveal, hover, orbital, floating, and navigation animations |
| Mobile Optimization | Mobile navigation, responsive typography, layouts, spacing, and overflow protection |
| HTML & CSS | Semantic HTML5 and responsive CSS3 |
| JavaScript Basics | DOM interaction, events, observers, and navigation state |
| UI Development | Complete branded landing-page interface |

## Development Notes

The project intentionally uses plain HTML, CSS, and JavaScript so the implementation clearly demonstrates the core skills required by the internship assignment.

The landing page is contained entirely in this repository:

**Repository:** `Ab-black/visual-tech-studio-landing-page`

The separate main Visual Tech Studio website is not part of this internship repository's implementation.

## What Was Learned

This project provided practical experience with:

- Planning a landing page before implementation
- Translating a visual direction into reusable UI styles
- Building responsive layouts from a single HTML structure
- Creating accessible navigation patterns
- Using JavaScript for progressive UI enhancement
- Designing micro-interactions without a framework
- Handling responsive imagery without unwanted cropping
- Organizing front-end files for maintainability
- Applying basic front-end performance techniques
- Reviewing a project for accessibility, responsiveness, and maintainability

## Status

**Project status:** Internship landing page implementation complete.

Final browser testing should still be performed manually in the target browsers and screen sizes before submission.
