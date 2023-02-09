## Context
This is a playground project to play with NextJS V13 `app_dir`, TypeScript, React-testing-library, and tiwlindCSS. Not meant for production.

A todo app with user registration, and persisted data. The project uses [Next.js](https://nextjs.org/) and was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

> App deployed on https://2-done.vercel.app/

First, run the development server:

```bash
npm run dev
# or
npm run test #for testing
```

```bash
npm run test #for testing
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend

A hackish backend is used to store data on the server, and mimick user Authentication, it's not a real backend, not safe, just a quick way to mimick a Restul API.

Backed is using [API routes](https://nextjs.org/docs/api-routes/introduction) and `store2` npm package to persist data on the server (no db used).

## File Structure

- `app`: Experimental feature in Next13, mainly pages are here.
- `entities`: All the logic related to todos or users entities (components, endpoints, types etc.)
- `pages/api`: endpoints and backend functions.

## Testing

Jest and React testing library are used to test components.

`Mock Service Worker` is used to mock api requests, although some issues preventing the mock from working properly.. (TBD)

## Testing

Tailwind CSS is used to style components, with some third party plugins.

## Deployed on Vercel

App is deployed on Vercel https://2-done.vercel.app/
