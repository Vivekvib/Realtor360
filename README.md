# Realtor360 — Home dashboard + Contacts

**Live demo:** https://realtor360-nine.vercel.app/#/

React 18 + TypeScript + Vite. Charts are hand-written SVG (no chart library).

    npm install
    npm run dev       # http://localhost:5173
    npm run build

Routes (hash-based): `#/` Home, `#/contacts` Contacts.

Layout was matched against the design at a 1804px-wide viewport
(34px page gutters, 360px right rail, 4-column card grid).
Avatars and property thumbnails are generated SVG placeholders — swap in real images.

## Photos

Lead/contact avatars and property thumbnails load from image URLs in `src/data/photos.ts`.
To use your own, drop files in `public/images/` and point the entries at them
(e.g. `"/images/people/john.jpg"`). If an image fails to load, the UI automatically
falls back to a generated illustration, so there are never broken-image icons.

## Responsive behavior

- ≥1700px: design layout (content grid + 360px right rail)
- 1240–1699px: right rail moves below the grid
- <1240px (e.g. half-screen): KPIs 2×2, charts/tables stacked full width
- <560px: single column; wide tables scroll inside their card
