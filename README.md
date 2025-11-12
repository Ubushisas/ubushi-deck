# Ubushi Wellness Dashboard - Marketing Sites

Two beautiful landing pages showcasing the Wellness Analytics Dashboard for spa businesses.

## 🎯 What's Included

### 1. Wellness Carousel (`wellness-carousel/`)
**Port:** http://localhost:5173/

Full-screen animated carousel landing page featuring:
- Hero carousel with GSAP smooth animations
- 5 rotating key messages about spa analytics
- Features section (6 cards with hover effects)
- Pricing section (Standard $5k vs Premium $20k)
- Strong CTA section
- Clean black & white design

**Tech Stack:** Vite, GSAP, Vanilla JS

### 2. Scroll Animation (`scroll-animation/`)
**Port:** http://localhost:3003/

Next.js scroll-triggered animation page with:
- Rotating clock hand animation (Lenis smooth scroll)
- Progressive message reveal
- Full content sections below
- Features, pricing, and CTA
- Clean modern design

**Tech Stack:** Next.js 16, GSAP, Lenis, React

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation & Running

#### Option 1: Run Both Projects

```bash
# Clone the repository
git clone https://github.com/Ubushisas/ubushi-deck.git
cd ubushi-deck

# Install and run wellness carousel (Terminal 1)
cd wellness-carousel
npm install
npm run dev
# Opens at http://localhost:5173/

# Install and run scroll animation (Terminal 2)
cd scroll-animation
npm install
npm run dev
# Opens at http://localhost:3003/
```

#### Option 2: Run Individual Projects

**Wellness Carousel Only:**
```bash
cd wellness-carousel
npm install
npm run dev
```

**Scroll Animation Only:**
```bash
cd scroll-animation
npm install
npm run dev
```

---

## 📁 Project Structure

```
ubushi-deck/
├── wellness-carousel/          # Vite + GSAP carousel site
│   ├── index.html
│   ├── script.js              # Carousel logic & content
│   ├── styles.css             # All styling
│   ├── package.json
│   └── public/
│       └── carousel/          # Put your spa images here
│
├── scroll-animation/           # Next.js scroll site
│   ├── src/
│   │   └── app/
│   │       ├── page.js        # Main page & content
│   │       ├── globals.css    # Global styles
│   │       └── layout.js      # Meta tags
│   ├── package.json
│   └── public/
│       └── portrait.jpg       # Replace with spa image
│
└── README.md
```

---

## 🎨 Customization Guide

### Changing Content

#### Wellness Carousel
Edit `/wellness-carousel/script.js`:
```javascript
const carouselSlides = [
  {
    title: "Your message here",
    image: "/carousel/slide-img-1.jpg",
  },
  // Add more slides...
];
```

#### Scroll Animation
Edit `/scroll-animation/src/app/page.js`:
```javascript
const introHeaders = [
  "<span>Your spa is</span> losing money",
  // Change these messages...
];
```

### Changing Images

**Wellness Carousel:**
- Place images in `/wellness-carousel/public/carousel/`
- Name them: `slide-img-1.jpg`, `slide-img-2.jpg`, etc.

**Scroll Animation:**
- Replace `/scroll-animation/public/portrait.jpg`

### Changing Colors

Both projects use clean black & white:
- Background: `#000` (black)
- Text: `#fff` (white)
- Cards: `#f9f9f9` (light gray)

Edit CSS/styling files to customize.

---

## 🔧 Tech Details

### Wellness Carousel
- **Build Tool:** Vite (super fast HMR)
- **Animations:** GSAP with CustomEase
- **Bundle Size:** ~120KB
- **Browser Support:** Modern browsers (ES6+)

### Scroll Animation
- **Framework:** Next.js 16 (React 19)
- **Animations:** GSAP + ScrollTrigger + Lenis
- **Bundle Size:** ~250KB
- **SSR:** Yes (Server-Side Rendering)

---

## 📝 Content Overview

### Key Messages (from DECK.md)

Both sites highlight:
1. **Money Left on Table** - See exactly how much revenue is lost to empty slots
2. **Dynamic Pricing** - Charge what your time is worth based on demand
3. **Service Mix Optimizer** - Know which services make you money
4. **No-Show Tracker** - Stop losing $1,200/month to no-shows
5. **24/7 Self-Booking** - Customers book while you sleep
6. **Real Numbers** - Dollars lost and dollars gained, not vanity metrics

### Pricing Tiers

- **Standard ($5,000):** Booking system, analytics, reminders, custom site
- **Premium ($20,000):** Everything + online payments, deposits, tips, gift cards

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# If port 5173 is busy
lsof -ti:5173 | xargs kill -9

# If port 3003 is busy
lsof -ti:3003 | xargs kill -9
```

### Dependencies Won't Install
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Page Won't Load
1. Check the terminal - server should say "ready" or "compiled"
2. Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Check console for errors: Right-click → Inspect → Console

---

## 📦 Building for Production

### Wellness Carousel
```bash
cd wellness-carousel
npm run build
# Output: dist/ folder
```

### Scroll Animation
```bash
cd scroll-animation
npm run build
npm start  # Preview production build
# Output: .next/ folder
```

---

## 🚀 Deployment

### Recommended Hosting

**Wellness Carousel (Static):**
- Vercel (free, automatic)
- Netlify (free, automatic)
- GitHub Pages

**Scroll Animation (Next.js):**
- Vercel (best for Next.js, free)
- Netlify
- Railway

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy wellness carousel
cd wellness-carousel
vercel

# Deploy scroll animation
cd scroll-animation
vercel
```

---

## 📧 Contact & Support

For questions about the wellness dashboard product:
- Check `/DECK.md` for full product details
- See `/strategic-docs/` for technical specs

---

## 🎯 Next Steps for Your Assistant

1. **Clone this repo**
2. **Install dependencies** for both projects
3. **Run both servers** to see them live
4. **Add real spa images** to replace placeholders
5. **Customize messaging** if needed
6. **Deploy to Vercel** when ready

---

Made with Claude Code for Ubushi Wellness Analytics 🌸
