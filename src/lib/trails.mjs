import records from "../data/synthetic/records.json" with { type: "json" };
import segments from "../data/synthetic/segments.geojson.json" with { type: "json" };
export { segments };
export { records };
export const warning = "DEMO — fictional routes, not for navigation.";
export function coordinatesFor(refs, collection = segments) {
  return refs.map((ref) => {
    const segment = collection.features.find(
      (feature) => feature.id === ref.id,
    );
    if (!segment) throw new Error(`Unknown segment: ${ref.id}`);
    if (!["forward", "reverse"].includes(ref.direction))
      throw new Error("Invalid direction");
    const coordinates = segment.geometry.coordinates;
    return ref.direction === "reverse"
      ? [...coordinates].reverse()
      : coordinates;
  });
}
export function validate(data = records, collection = segments) {
  if (data.synthetic !== true)
    throw new Error("Demo records must be synthetic");
  for (const field of [
    "source",
    "permission",
    "access",
    "verification",
    "importDate",
  ]) {
    if (!(field in data.provenance))
      throw new Error(`Missing provenance: ${field}`);
  }
  const ids = new Set();
  for (const feature of collection.features) {
    if (ids.has(feature.id)) throw new Error("Duplicate segment");
    ids.add(feature.id);
    if (
      feature.properties.synthetic !== true ||
      feature.geometry.type !== "LineString"
    )
      throw new Error("Invalid segment");
    const points = feature.geometry.coordinates;
    if (
      points.length < 2 ||
      points.some(
        (p) =>
          p.length !== 2 ||
          !p.every(Number.isFinite) ||
          Math.abs(p[0]) > 180 ||
          Math.abs(p[1]) > 90,
      )
    )
      throw new Error("Invalid coordinates");
    if (points.every((p) => p[0] === points[0][0] && p[1] === points[0][1]))
      throw new Error("Zero-length segment");
  }
  const recordIds = new Set();
  for (const item of [...data.trails, ...data.rides]) {
    if (recordIds.has(item.id)) throw new Error("Duplicate record");
    recordIds.add(item.id);
    if (!item.segments.length) throw new Error("Empty route");
    const lines = coordinatesFor(item.segments, collection);
    lines.slice(1).forEach((line, i) => {
      if (JSON.stringify(lines[i].at(-1)) !== JSON.stringify(line[0]))
        throw new Error(`Disconnected route: ${item.id}`);
    });
  }
  return true;
}
export function assertReleaseSafe(data, collection) {
  if (
    data.synthetic ||
    data.provenance.verification !== "verified" ||
    collection.features.some((f) => f.properties.synthetic)
  )
    throw new Error("Release blocked: synthetic or unverified data");
}
