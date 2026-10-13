# Realtor360 — Home dashboard + Contacts

React 18 + TypeScript + Vite. Charts are hand-written SVG (no chart library).

    npm install
    npm run dev       # http://localhost:5173
    npm run build

Routes (hash-based): `#/` Home, `#/contacts` Contacts.

Layout was matched against the design at a 1804px-wide viewport
(34px page gutters, 360px right rail, 4-column card grid).
Avatars and property thumbnails are generated SVG placeholders — swap in real images.
