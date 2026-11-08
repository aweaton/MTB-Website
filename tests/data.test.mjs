import { test } from "node:test";
import assert from "node:assert/strict";
import {
  records,
  segments,
  validate,
  coordinatesFor,
  assertReleaseSafe,
} from "../src/lib/trails.mjs";
test("fixture geometry, provenance and references are valid", () =>
  assert.equal(validate(), true));
test("featured ride closes using the reversed reusable segment", () => {
  const lines = coordinatesFor(records.rides[0].segments);
  assert.deepEqual(lines[0][0], lines.at(-1).at(-1));
  assert.deepEqual(
    lines.at(-1)[0],
    segments.features[2].geometry.coordinates.at(-1),
  );
});
test("unknown references and invalid direction are rejected", () => {
  assert.throws(
    () => coordinatesFor([{ id: "missing", direction: "forward" }]),
    /Unknown/,
  );
  assert.throws(
    () => coordinatesFor([{ id: "a", direction: "backward" }]),
    /direction/,
  );
});
test("disconnected order and malformed coordinates are rejected", () => {
  const data = structuredClone(records);
  data.rides[0].segments[2].direction = "forward";
  assert.throws(() => validate(data), /Disconnected/);
  const geo = structuredClone(segments);
  geo.features[0].geometry.coordinates[0] = [181, 49];
  assert.throws(() => validate(records, geo), /coordinates/);
});
test("release gate rejects synthetic and unverified records", () => {
  assert.throws(() => assertReleaseSafe(records, segments), /Release blocked/);
  assert.throws(
    () => assertReleaseSafe({ ...records, synthetic: false }, segments),
    /Release blocked/,
  );
});

test("build authorization cannot bypass the real-trail release guard", async () => {
  const { spawnSync } = await import("node:child_process");
  const cli = new URL("../node_modules/astro/bin/astro.mjs", import.meta.url);
  for (const args of [[], ["--mode", "public-demo"], ["--mode=release"]]) {
    const result = spawnSync(
      process.execPath,
      [cli.pathname, "build", ...args],
      {
        encoding: "utf8",
        env: {
          ...process.env,
          ASTRO_TELEMETRY_DISABLED: "1",
          // Both opt-ins must still fail for release; public-demo needs its own flag.
          DEMO_BUILD: args.includes("--mode=release") ? "true" : "",
          PUBLIC_DEMO_BUILD: args.includes("--mode=release") ? "true" : "",
        },
      },
    );
    assert.notEqual(result.status, 0);
    assert.match(
      result.stdout + result.stderr,
      /Release blocked: synthetic or unverified data/,
    );
  }
});
