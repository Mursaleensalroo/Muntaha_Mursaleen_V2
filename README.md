# Our Keepsake — v2

A private, beautifully-designed wedding keepsake site with a hero, live countdown, chaptered love story, and a photo gallery that **auto-discovers any photos you drop into `public/photos`** — no renaming, no editing config.

Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## How to use it

### 1. Adding photos
Just drop them in `public/photos/` with any filenames. The site reads the folder at build time and shows every photo it finds. Done.

- Photos display in alphabetical order — prefix with `01-`, `02-`, etc. to control order
- Each photo becomes part of the masonry gallery
- The story page picks photos automatically, evenly spaced, one per chapter
- Click any photo to open the full-screen lightbox (arrow keys to navigate)

### 2. Personalizing text
Edit `lib/config.ts`. Everything is there:
- Your names, date, location, tagline
- Opening quote
- All story chapters (add, remove, rewrite freely)

That's the only file you need to touch for words. Photos handle themselves.

---

## Project structure

```
wedding-app/
├── app/
│   ├── page.tsx           ← Home (hero + countdown + previews)
│   ├── story/page.tsx     ← Our Story (chapters with auto-picked photos)
│   ├── gallery/page.tsx   ← Full gallery (all photos in masonry)
│   ├── layout.tsx         ← Root layout (fonts, nav, footer)
│   └── globals.css        ← Styling (paper texture, animations)
├── components/
│   ├── Nav.tsx            ← Top navigation
│   ├── Countdown.tsx      ← Live countdown timer
│   ├── Photo.tsx          ← Image with placeholder fallback
│   ├── GalleryGrid.tsx    ← Masonry layout
│   └── Lightbox.tsx       ← Full-screen photo viewer
├── lib/
│   ├── config.ts          ← ⭐ EDIT THIS for names/story
│   └── photos.ts          ← Auto-discovers photos (don't edit)
└── public/
    └── photos/            ← ⭐ DROP PHOTOS HERE (any names)
```

---

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploying to Vercel

Already on GitHub? Just go to [vercel.com/new](https://vercel.com/new), import the repo, click Deploy.

Every push to GitHub triggers an automatic redeploy.

---

Built for **August 16, 2026**.
