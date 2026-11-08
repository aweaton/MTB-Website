import { test, expect } from "@playwright/test";
test("destination, map selection, loop and mobile layout", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "A little further",
  );
  await page
    .getByRole("link", { name: "Explore the fictional network" })
    .click();
  await expect(page.locator("#map-status")).toContainText("Map ready");
  await page.getByRole("button", { name: "Show Paper Ridge" }).click();
  await expect(page.locator("#detail")).toContainText("Paper Ridge");
  await expect(page.locator("#detail")).toContainText(
    "DEMO — fictional routes, not for navigation.",
  );
  await expect(page.locator(".ride li")).toHaveText([
    "Segment A · forward",
    "Segment B · forward",
    "Segment C · reverse",
  ]);
  // Project a known synthetic vertex into the initial Mercator bounds.
  const canvas = page.locator("#map canvas");
  await expect(canvas).toBeVisible();
  const box = (await canvas.boundingBox())!;
  const mercatorY = (lat: number) =>
    (Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * 180) / Math.PI;
  const scale = Math.min(
    (box.width - 70) / 0.055,
    (box.height - 70) / (mercatorY(49.041) - mercatorY(49.009)),
  );
  await canvas.click({
    position: {
      x: box.width / 2 + (-57.607 + 57.5915) * scale,
      y:
        box.height / 2 -
        (mercatorY(49.03) - (mercatorY(49.041) + mercatorY(49.009)) / 2) *
          scale,
    },
  });
  await expect(page.locator("#selection")).toContainText("Fern Sketch");
  await page.setViewportSize({ width: 390, height: 844 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
});
test("fallback remains complete without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/map/");
  await expect(page.locator("article")).toHaveCount(3);
  await expect(
    page.getByRole("heading", { name: "The Fictional Three" }),
  ).toBeVisible();
  await context.close();
});
test("WebGL failure leaves list selection usable", async ({ page }) => {
  await page.addInitScript(() => {
    HTMLCanvasElement.prototype.getContext = (() =>
      null) as typeof HTMLCanvasElement.prototype.getContext;
  });
  await page.goto("/map/");
  await expect(page.locator("#map-status")).toContainText("unavailable");
  await page.getByRole("button", { name: "Show Fern Sketch" }).click();
  await expect(page.locator("#detail")).toContainText("Fern Sketch");
});

test("tile failure keeps map details and fallback available", async ({
  page,
}) => {
  await page.route("https://tile.openstreetmap.org/**", (route) =>
    route.abort(),
  );
  await page.goto("/map/");
  await expect(page.locator("#map-status")).toContainText("Map ready");
  await page.locator("#basemap").check();
  await expect(page.locator("#map-status")).toContainText("unavailable");
  await page.getByRole("button", { name: "Show Imaginary Brook" }).click();
  await expect(page.locator("#detail")).toContainText("Imaginary Brook");
});
