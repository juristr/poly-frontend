# PolyShopping Frontend

React + Vite SPA for the **PolyShopping** demo. Browses a product catalog served by [`poly-backend`](../poly-backend).

This repo is one of the demo repos used to showcase [Polygraph](https://polygraph.dev) — coordinating changes across multiple repos.

## Stack

- React 19 + react-router-dom
- Vite 7 (dev/build)
- Vitest + jsdom + @testing-library/react (unit tests)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- TypeScript (`tsc -b` runs as part of `build`)

## Requirements

- Node.js 20+
- npm 10+

## Run

Start `poly-backend` first (defaults to `http://localhost:3000`):

```sh
cd ../poly-backend && npm run dev
```

Then the frontend:

```sh
npm install
npm run dev          # http://localhost:5173
```

Override the API URL:

```sh
VITE_API_URL=http://localhost:3001 npm run dev
```

## Scripts

| Script            | What it does                      |
| ----------------- | --------------------------------- |
| `npm run dev`     | Vite dev server                   |
| `npm run build`   | `tsc -b` typecheck + `vite build` |
| `npm run preview` | Serve the production build        |
| `npm run test`    | `vitest run` (one-shot)           |

## Project layout

```
src/
  app.tsx                       router + layout
  main.tsx                      entry
  styles.css                    tailwind entry
  components/
    Navbar.tsx                  header + inline promo banner
    Navbar.spec.tsx             vitest test for the promo banner
    Footer.tsx
    ProductCard.tsx
    ProductGrid.tsx
    ProductDetail.tsx
  pages/
    HomePage.tsx
    ProductDetailPage.tsx       /product/:id
  lib/
    data-access-products.ts     fetch wrappers around poly-backend
```

## Backend contract

`src/lib/data-access-products.ts` hits:

- `GET /api/products` → `Product[]`
- `GET /api/products/:id` → `Product` (or `404`)

The `Product` shape lives in the same file. Keep it in sync with `poly-backend`.
