# PolyShopping Frontend

React frontend for the PolyShopping demo.

## Requirements

- Node.js 20+
- npm 10+

## Install

```sh
npm install
```

## Run

Start the backend first from `../poly-backend`:

```sh
npm run dev
```

Then start the frontend:

```sh
npm run dev
```

The app listens on `http://localhost:4200` by default and calls the backend at `http://localhost:3000`.

Override the API URL if needed:

```sh
VITE_API_URL=http://localhost:3001 npm run dev
```

## Validate

```sh
npm run validate
npm run e2e
```

The e2e suite expects the backend to be running.
