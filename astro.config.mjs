import { defineConfig } from "astro/config";
import {
  records,
  segments,
  validate,
  assertReleaseSafe,
} from "./src/lib/trails.mjs";
export default defineConfig({
  integrations: [
    {
      name: "validate-trail-data",
      hooks: {
        "astro:config:setup": ({ command }) => {
          validate();
          // Only an explicit local demo build may contain fictional records.
          if (
            command === "build" &&
            (process.env.DEMO_BUILD !== "true" ||
              process.argv.some(
                (arg) => arg === "release" || arg === "--mode=release",
              ))
          )
            assertReleaseSafe(records, segments);
        },
      },
    },
  ],
});
