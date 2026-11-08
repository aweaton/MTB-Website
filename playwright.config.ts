import process from "node:process";
import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  use: { baseURL: "http://127.0.0.1:4322" },
  webServer: {
    command: "npm run build && npm run preview -- --ignore-lock --port 4322",
    url: "http://127.0.0.1:4322",
    reuseExistingServer: false,
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        launchOptions: {
          executablePath: process.env.CHROMIUM_PATH,
          args: ["--enable-unsafe-swiftshader"],
        },
      },
    },
  ],
});
