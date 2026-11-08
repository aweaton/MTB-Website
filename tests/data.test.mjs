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
