# PolyShopping Frontend

React frontend for the PolyShopping demo.

## Requirements

- Node.js 20+
- pnpm 10+

## Install

```sh
pnpm install
```

## Run

Start the backend first from `../poly-backend`:

```sh
pnpm dev
```

Then start the frontend:

```sh
pnpm exec nx run @polydemo/shop:dev
```

The app listens on `http://localhost:4200` by default and calls the backend at `http://localhost:3000`.

Override the API URL if needed:

```sh
VITE_API_URL=http://localhost:3001 pnpm exec nx run @polydemo/shop:dev
```

## Validate

```sh
pnpm exec nx run-many -t lint,test,typecheck,build --all
pnpm exec nx run @polydemo/shop-e2e:e2e
```

The e2e suite expects the backend to be running.
