This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing - Jest (unit) & Playwright (e2e)

TODO - add blurb about playwright testing. Opting for E2E tests for the application. Jest is used for

```bash
  # Run the end-to-end tests.
  npx playwright test

  # Start the interactive UI mode.
  npx playwright test --ui

  # Run the tests only on Desktop Chrome.
  npx playwright test --project=chromium

  # Runs the tests in a specific file.
  npx playwright test example

  # Runs the tests in debug mode.
  npx playwright test --debug

  # Auto generate tests with Codegen.
  npx playwright codegen
```
