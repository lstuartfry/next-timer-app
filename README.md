This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo

https://github.com/lstuartfry/next-timer-app/assets/14063740/3b734cce-2f10-4072-be5b-ece7cfb59278

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

This application uses Playwright for E2E testing (user interaction, timer display, keyboard accessibility) and Jest for unit testing (the 'radial' component and the desired styles based on the state of the timer).

Here are instructions on how to run both test suites.

### Jest

The `Radial` unit tests make use of a dynamic `data-testid` property on the parent element. While this property is meant to be static, I opted to use this to test the expected background-image style property which is set based on the remaining duration of the timer.

I encountered some challenges writing tests for dynamically generated styles. First, Tailwind is not (yet) capable of generating dynamic arbitrary classnames that use variables. This meant I could not make assertions against the element's classNames directly. Next, I discovered that react-testing-library's 'toHaveStyle()' matcher [has some problems of its own](https://github.com/testing-library/jest-dom/issues/320) and does not consistently work as expected when making assertions against dynamic styles.

Short of being able to test applied styles directly, I opted to utilize the `data-testid` property for the purposes of making assertions against the expected background-image conic-gradient percentages.

```bash
  # Run the unit tests.
  npm run test
  # or
  yarn test
  # or
  pnpm test
  # or
  bun test
```

### Playwright

To run the Playwright tests, you will need to install Playwright in your local directory. You can do this by running the following command:

```bash
  npx playwright install
```

Playwright tests can be executed in a variety of ways. Here are a few examples:

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

## 2.0 Features

Here is a list of features I'd love to implement in the future:

- Draggable timer - the ability to drag the timer around the screen. This would be a useful feature for users who want to reset an active timer back to its initial duration, or shorten the current duration. It could also be used to set a timer's initial value.
- Save timers & display list of saved timers.
- Light/Dark modes - the static styles favor a "dark" mode, but it would be useful to be able to toggle between light and dark modes.
