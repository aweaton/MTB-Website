import { defineConfig } from "astro/config";
import {
  records,
  segments,
  validate,
  assertReleaseSafe,
} from "./src/lib/trails.mjs";
const modeIndex = process.argv.indexOf("--mode");
const mode =
  process.argv.find((arg) => arg.startsWith("--mode="))?.split("=")[1] ??
  (modeIndex >= 0 ? process.argv[modeIndex + 1] : "production");

export default defineConfig({
  site: "https://aweaton.github.io",
  base: "/MTB-Website/",
  trailingSlash: "always",
  integrations: [
    {
      name: "validate-trail-data",
      hooks: {
        "astro:config:setup": ({ command }) => {
          validate();
          // Public fictional output needs a separate opt-in; release never bypasses verification.
          const localDemo =
            mode === "production" && process.env.DEMO_BUILD === "true";
          const publicDemo =
            mode === "public-demo" && process.env.PUBLIC_DEMO_BUILD === "true";
          if (command === "build" && !localDemo && !publicDemo)
            assertReleaseSafe(records, segments);
        },
      },
    },
  ],
});
