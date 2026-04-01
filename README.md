# LendSmart Mortgages - Next.js Project

## Tech Stack
- **Next.js** `16.1.7` (App Router)
- **React** `^19.2.4`
- **TypeScript** `^5`
- **Tailwind CSS** `^4`
- **Lucide React** (icons)

## Project Structure

```
lendsmart/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind v4 + CSS custom properties
│   │   ├── layout.tsx         # Root layout with Poppins + Inter fonts
│   │   └── page.tsx           # Main page assembling all sections
│   └── components/
│       ├── TopBar.tsx         # Top contact info bar (green)
│       ├── Navbar.tsx         # Sticky navbar with mobile menu
│       ├── Hero.tsx           # Hero section with CTA
│       ├── About.tsx          # About LendSmart section
│       ├── LoanServices.tsx   # Interactive loan services accordion
│       ├── WhyChoose.tsx      # Why Choose LendSmart section
│       ├── LoanProcess.tsx    # 5-step loan process
│       ├── LoanSupport.tsx    # Loan support for different needs
│       ├── Stats.tsx          # Stats counter bar
│       ├── Testimonials.tsx   # Client testimonials carousel
│       ├── CTABanner.tsx      # Green CTA banner
│       └── Footer.tsx         # Full footer with newsletter
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

## Design Reference
- **Primary Color:** `#2d6a1f` (Dark Green)
- **Accent Color:** `#5dbf38` (Light Green)
- **Background:** `#f0f7ec` (Mint Green)
- **Dark Section BG:** `#1a1a1a`
- **Fonts:** Poppins (headings) + Inter (body)

## Sections (Top → Bottom)
1. TopBar - Email, hours, phone, social icons
2. Navbar - Logo, nav links, WhatsApp CTA (sticky)
3. Hero - Headline, CTA buttons, house images
4. About - Stats (78%, 45+), team photo
5. Loan Services - Dark bg, interactive accordion
6. Why Choose - Benefits checklist, advisor photo
7. How Process Works - 5-step visual process
8. Loan Support - Different needs grid
9. Stats - 1k+, 80k+, 20+, 10M+ counters
10. Testimonials - Carousel on dark background
11. CTA Banner - Green banner with contact info
12. Footer - Newsletter + links + copyright

## Responsive Design
- Mobile: `< 640px` - Stacked layout, hamburger menu
- Tablet: `640px - 1024px` - 2-column grids
- Desktop: `> 1024px` - Full layout matching Figma design

## Notes
- Unsplash images used as placeholders — replace with actual LendSmart images
- WhatsApp number: `61413208624` (Australian format)
- Images configured via `next.config.ts` for `images.unsplash.com`
