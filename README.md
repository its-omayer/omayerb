# Omayer B — Digital Developer Portfolio

A dark-themed, animation-heavy developer portfolio built with React, Vite, and Tailwind CSS. Features a custom physics-based cursor, live GitHub project integration, and fully modular sections.

## Features

### Core Theming
- Dark "cosmic slate" palette with charcoal backdrops and a fluorescent accent color (`#EAF76A`)
- Subtle SVG noise-grain overlay across the canvas for texture
- Space Grotesk for headings, JetBrains Mono for technical/status text

### Custom Cursor
- Dual-element cursor (inner dot + trailing outer ring)
- Spring physics via Framer Motion (`motion/react`) for smooth, lag-free movement
- Automatic hover-state detection on links, buttons, and interactive elements
- Disabled automatically on touch devices

### Sections
- **Hero** — large typographic watermark, animated title grid, social links (Instagram, YouTube, Facebook), hero image
- **About** — skills grid (C, C++, JS, Python, Neovim, Fedora Linux, tiling WMs)
- **Process** — staggered hover cards showing the dev workflow
- **Works** — live client-side fetch from the GitHub API (repo `its-omayer`) with stars, languages, forks, and update timestamps; falls back to local mock data on fetch failure
- **Contact** — interactive proposal/inquiry form with animated confirmation state
- **Footer** — large animated watermark with scroll-triggered entrance + looping breathing animation, scroll-to-top button

### Assets
- Images imported as standard ESM modules (Vite-native, so production builds resolve cleanly)
- Unused template images have been removed to keep the bundle lean

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (`motion/react`)
- lucide-react (icons)

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Install
```bash
pnpm install
```

### Development
```bash
pnpm dev
```
Runs at `http://localhost:3000`

### Build
```bash
pnpm build
```

### Preview production build
```bash
pnpm preview
```

## Customization

### Social media links
Update in **`Hero.tsx`** — look for the social icons block (Instagram, YouTube, Facebook) and change each `href` to your own profile URL.

```bash
grep -n "instagram\|youtube\|facebook\|href" Hero.tsx
```

### Contact email
Update in **`Footer.tsx`** — find the `Mail` icon and the adjacent `mailto:` link or email string, and replace it with your own address.

```bash
grep -n "mailto\|Mail\|email" Footer.tsx
```
