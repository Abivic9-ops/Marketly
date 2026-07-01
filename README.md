# Marketly — Online Shopping in Kenya

A **mobile-first, static e-commerce home screen** for Marketly, a Kenyan online marketplace. Built entirely with semantic HTML5 and hand-written CSS3 — no frameworks, no build tools, and minimal vanilla JavaScript (just a countdown timer).

**Live demo:** `https://YOUR-USERNAME.github.io/marketly-store/`

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features & Sections](#features--sections)
- [Design System](#design-system)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Accessibility](#accessibility)
- [SEO & Social Sharing](#seo--social-sharing)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Local Setup](#local-setup)
- [Customization Guide](#customization-guide)
- [Git Workflow](#git-workflow)
- [Commit History](#commit-history)
- [Credits](#credits)

---

## Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`), schema.org structured data (`Product`), Open Graph, Twitter Card |
| **CSS3** | Custom properties (design tokens), Flexbox, Grid, scroll-snap, responsive breakpoints, `prefers-reduced-motion` |
| **JavaScript (vanilla)** | Flash-deal countdown timer — 40 lines, IIFE pattern |
| **Google Fonts** | Inter (geometric/grotesque sans) |
| **Icons** | Inline Lucide SVGs (no external icon dependency) |
| **Images** | Inline SVG illustrations (no external image dependency) |
| **Deployment** | GitHub Pages (static hosting) |

No build step, no package manager, no frameworks — open `index.html` directly in any browser.

---

## Project Structure

```
marketly-store/
├── index.html              # Main landing page (440 lines, 13 sections)
├── css/
│   └── styles.css          # All styles — tokens, layout, components, responsive
├── js/
│   └── countdown.js        # Vanilla JS flash-deal countdown timer
├── assets/
│   └── img/                # All images (SVG product illustrations)
│       ├── product-*.svg           # 14 product images
│       ├── cat-*.svg / cat-*-lg.svg  # 10 category images
│       ├── avatar-emily.svg        # Testimonial avatar
│       ├── model-summer.svg        # Summer collection promo
│       ├── sofa-interior.svg       # Home essentials promo
│       └── og-image.svg            # Open Graph share image
├── robots.txt              # SEO crawl instructions
├── sitemap.xml             # XML sitemap for search engines
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

---

## Features & Sections

The page is composed of **13 distinct sections**, arranged vertically in mobile-optimized layout:

| # | Section | Description |
|---|---|---|
| 1 | **Announcement Bar** | Full-bleed blue strip — "Mega Summer Sale is Live!" |
| 2 | **App Header** | Hamburger menu, brand lockup (icon + "Marketly" + tagline), account/wishlist/cart icons with count badges |
| 3 | **Search Bar** | Pill-shaped input with magnifier icon + blue search button |
| 4 | **Category Chips** | Horizontally scrolling chips (Fashion, Electronics, Beauty, Home, Grocery, Sports) |
| 5 | **Hero Banner** | Gradient card with headline, description, CTA buttons, product image cluster, "UP TO 60% OFF" badge, trust strip (Free Shipping, Easy Returns, Secure Payment) |
| 6 | **Flash Deal** | Blue card with product thumbnail, pricing, amber CTA button, countdown timer (days/hrs/mins/secs) |
| 7 | **Popular Categories** | 2×2 grid (→ 4-column on tablet) of Fashion, Electronics, Beauty, Home Decor |
| 8 | **Featured Products** | Horizontally scrollable product cards with discount badges, star ratings, KES prices |
| 9 | **Brand Promos** | Two promo cards — Summer Collection (amber), Home Essentials (light blue) |
| 10 | **Best Sellers** | Scrollable rail of top-selling products (iPhone, MacBook, Air Fryer, Sofa) |
| 11 | **Testimonial** | Social proof card with avatar, name, verified badge, quote, dot indicators |
| 12 | **Newsletter** | Email signup with icon, heading, subline, Subscribe button |
| 13 | **Bottom Tab Bar** | Fixed bottom navigation — Home (active), Categories, Deals, Wishlist, Account |

### Reusable Component System

The CSS defines a set of reusable, composable components:

- `.product-card` — Product card with image, title, rating, price, add-to-cart
- `.scroll-rail` — Horizontal scroll container with snap scrolling
- `.section-header` — Title + "View All" link pattern
- `.price-pair` — Current price + original price
- `.discount-badge` — Red discount badge (absolutely positioned)
- `.star-rating` — 5-star SVG rating with review count
- `.icon-btn` — Circular icon button for header actions
- `.badge` — Notification badge for cart/wishlist counts
- `.btn-primary` / `.btn-secondary` — Primary and outline buttons
- `.promo-card` — Brand promo card with image overlay
- `.timer-box` — Countdown timer digit boxes

---

## Design System

All visual tokens are defined as CSS custom properties in `:root` within `styles.css`.

### Brand Colors

| Token | Value | Usage |
|---|---|---|
| `--brand-blue` | `#2563EB` | Primary actions, header accents |
| `--brand-blue-hover` | `#1D4ED8` | Button hover states |
| `--brand-blue-light` | `#DBEAFE` | Newsletter, promo backgrounds |
| `--accent-amber` | `#F5A623` | Star ratings, flash deal CTA, badge |
| `--accent-amber-soft` | `#FBBF24` | Amber gradient end |
| `--alert-red` | `#EF4444` | Discount badges |

### Typography

- **Font:** Inter (Google Fonts) — geometric/grotesque sans-serif
- **Scale:** 12px → 40px via `--text-xs` through `--text-3xl`
- **Weights:** 400, 500, 600, 700, 800

### Spacing

4/8 system: 4px → 48px (`--space-1` through `--space-12`)

### Border Radius

| Token | Value |
|---|---|
| `--radius-sm` | 8px |
| `--radius-md` | 12px |
| `--radius-lg` | 20px |
| `--radius-pill` | 9999px |

### Shadows

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.1)` |

---

## Responsive Breakpoints

| Breakpoint | Width | Gutter | Max-width | Changes |
|---|---|---|---|---|
| **Mobile** (default) | < 576px | 16px | 480px | Single-column, compact layout |
| **Tablet** | ≥ 576px | 24px | 720px | Hero side-by-side, 4-column categories, horizontal promos |
| **Desktop** | ≥ 992px | 32px | 960px | Wider product cards (220px), larger hero heading |

Layout strategy: **mobile-first** — base styles target mobile, media queries add complexity at larger viewports.

---

## Accessibility

- **Semantic HTML:** `<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`, `<blockquote>` used for meaningful structure
- **ARIA labels:** All icon buttons, navigation items, and interactive elements have descriptive `aria-label`
- **Skip link:** Keyboard-accessible skip-to-content link at top of page
- **Focus styles:** Custom `:focus-visible` outline (2px blue) for keyboard navigation
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all animations and transitions
- **Color contrast:** Text colors meet WCAG AA standards against their backgrounds
- **Screen reader support:** Badges include `aria-label` with count descriptions, star ratings include text description

---

## SEO & Social Sharing

### Meta Tags
- Title, description, canonical URL
- Open Graph (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`)
- Twitter Card (`summary_large_image`)

### Structured Data
JSON-LD Product markup on product cards (`itemscope`, `itemtype="https://schema.org/Product"`) with:
- `itemprop="name"` — Product name
- `itemprop="image"` — Product image
- `itemprop="price"` — Current price (KES)
- `itemprop="reviewCount"` — Review count

### Files
- `robots.txt` — Search engine crawl instructions
- `sitemap.xml` — XML sitemap for indexing

---

## Performance

- **Zero external dependencies** — No frameworks, no CSS libraries, no JS libraries
- **SVG images** — Vector graphics scale perfectly on all screens, no raster image downloads
- **Lazy loading** — All images use `loading="lazy"` for deferred loading
- **Minimal JavaScript** — Only 40 lines for the countdown timer
- **Google Fonts** — Only one font family loaded (Inter with `preconnect` hints)

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome (latest) | Full |
| Firefox (latest) | Full |
| Safari (latest) | Full |
| Edge (latest) | Full |
| Samsung Internet | Full |
| iOS Safari | Full (with safe-area-inset-bottom for bottom nav) |

CSS features used: Flexbox, Grid, scroll-snap, custom properties, `env(safe-area-inset-bottom)`. All have >95% global browser support.

---

## Local Setup

### Prerequisites

None — just a modern web browser.

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/marketly-store.git

# Navigate into the project
cd marketly-store

# Open in browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

No build step required — open `index.html` directly in any modern browser.

---

## Customization Guide

### 1. Replace Images

All images are SVG files in `assets/img/`. To use real product photos:

1. Replace the SVG files with your images (JPG, PNG, or WebP)
2. Update file extensions in `index.html` `src` attributes

### 2. Update Brand Colors

Edit the CSS custom properties in `css/styles.css` `:root`:

```css
--brand-blue: #2563EB;    /* Primary brand color */
--accent-amber: #F5A623;  /* Secondary brand color */
```

### 3. Update Pricing & Products

Edit product data in `index.html`:
- Update `.current-price` and `.original-price` text
- Change `itemprop="price" content="..."` values
- Modify product names in `.product-title`
- Adjust discount percentages in `.discount-badge`

### 4. Update Deployment URL

- `index.html`: Update `href` in canonical link and `og:url`
- `robots.txt`: Update `Sitemap` URL
- `sitemap.xml`: Update all `<loc>` URLs

### 5. Newsletter Integration

The newsletter form (`index.html:405-408`) currently has no `action` attribute. Add a form handler:

```html
<form class="newsletter-form" action="https://your-api.com/subscribe" method="POST">
```

---

## Git Workflow

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Usage |
|---|---|
| `feat:` | New feature or section |
| `fix:` | Bug fix or correction |
| `docs:` | Documentation changes |
| `style:` | Code style / formatting |
| `chore:` | Configuration, gitignore, tooling |

### Commit Guidelines

1. **One commit per logical change** — Features, fixes, docs are separate
2. **Descriptive but concise** — Subject line explains what, body explains why
3. **Scope notation** — Use scopes when helpful: `feat(hero):`, `fix(product-card):`
4. **Present tense** — "Add feature" not "Added feature"

### Branch Strategy

- `main` — Production-ready code
- Feature branches for significant additions

---

## Commit History

```
465cfaf feat: add proper SVG illustrations for categories, avatar, and promo images
7bcecd4 fix: improve product card layout and clean up CSS issues
1dbc658 fix: rename placeholder images from .jpg to .svg and update references
4e5aac6 chore: ignore ANTIGRAVITY prompt file
ba3b1b3 docs: add README with project description, screenshots, and setup instructions
d91989f feat: add Open Graph image for social sharing
a3a8b5b feat: add robots.txt and sitemap.xml for SEO
483d8de fix: correct trust strip to KES and polish spacing
5cce16f feat: add vanilla JS flash-deal countdown timer
5b20bb5 feat: build testimonial, newsletter sign-up, and fixed bottom tab navigation
a65d098 feat: add dual brand promo banners and best sellers scroll rail
f02796f feat: build popular categories and reusable product card
8864627 feat: add flash deal strip with countdown layout
5dbd4f2 feat: build hero banner with product cluster and trust strip
756b00b feat: add search bar and scrollable category chips
7333b87 feat: build announcement bar and app header with cart/wishlist badges
a3df76e feat: scaffold project structure and base HTML with brand tokens
b1a92b6 chore: add .gitignore for static site project
```

---

## Credits

- **Design reference:** Marketly mobile shopping screen
- **Icon set:** Lucide (inline SVGs)
- **Font:** Inter via Google Fonts
- **Built by:** Victor Mwendwa & Antigravity
- **Tools:** Pure HTML/CSS/JS — no frameworks or build tools
