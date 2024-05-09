import { test, expect } from "@playwright/test";

test("timer displays correctly, can be started/reset/add one minute, accessed via keyboard", async ({
  page,
}) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The page should contain an h1 with "Timer"
  await expect(page.locator("h1")).toContainText("Timer");

  const timer = page.locator("input");
  // the timer has a default value of 1 minute.
  await expect(timer).toHaveValue("01:00");

  // add a minute to the timer
  await page.getByRole("button", { name: "+1:00" }).click();
  // the timer value has updated to 02:00
  await expect(timer).toHaveValue("02:00");

  // start the timer and assert it begins to count down
  await page.getByTestId("timerActionButton").click();
  await expect(timer).toHaveValue("01:59");

  // click the Reset button and assert the timer has stopped
  await page.getByRole("button", { name: "Reset" }).click();
  await expect(timer).toHaveValue("00:00");

  // navigate via keyboard to the timer input and enter a new val
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await expect(timer).toBeFocused();

  // press the 'left' key to de-select the entire input
  await page.keyboard.press("ArrowLeft");
  await timer.fill("1010");
  await expect(timer).toHaveValue("10:10");
});
