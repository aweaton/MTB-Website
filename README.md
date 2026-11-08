# Western Newfoundland MTB — local demo

Astro + MapLibre prototype for Issue #11. **DEMO — fictional routes, not for navigation.** No real trail, access or safety information is supplied.

## Run locally

Node 22.23.4+ (tested with Node 24), npm:

```sh
npm ci
npm run dev
```

Open http://localhost:4321. `/` is the destination view; `/map/` contains the interactive map, trail details, accessible list and featured loop. The list remains readable without JavaScript or WebGL.

```sh
npm test                 # geometry, references, connectivity, direction, release gate
npm run check            # Astro / TypeScript
npm run build            # explicit LOCAL DEMO output in dist; do not publish
npm run build:release    # deliberately fails while synthetic/unverified data exists
npm run test:browser     # Playwright against built site; npx playwright install chromium
```

## Data boundary

`src/data/synthetic/records.json` holds trails and rides referencing stable segment IDs with explicit forward/reverse directions. `segments.geojson.json` contains hand-authored WGS84 longitude/latitude LineStrings around Pasadena, Newfoundland and Labrador. They were not traced from real paths. Shared fixture provenance supplies source, permission, access, verification and import-date fields for every record. Individual segments are marked `synthetic: true`; none are publishable. No GPX/download endpoint exists.

`src/lib/trails.mjs` validates the fixture at startup/build and assembles ordered segment coordinates without changing the original geometry. Future authorized GPX/OSM imports can produce the same GeoJSON plus records; real data needs per-source provenance and the rights/access/freshness work in #4, #7 and #9. This is a deliberately small schema, not a GIS import pipeline or routing engine.

Only `npm run build` explicitly opts into local synthetic output. Direct Astro builds and `build:release` reject the current fixture. The release guard rejects synthetic or unverified datasets/features; it does not certify future imports or authorize deployment. Do not override it to publish this demo. There is no deploy workflow.

## Map and licenses

The default MapLibre style is a local schematic background requiring no remote tiles, fonts or keys. Opting into the online basemap requests standard raster tiles from `tile.openstreetmap.org`; attribution appears on the map and below it. Follow [OSM tile usage policy](https://operations.osmfoundation.org/policies/tiles/) and [attribution requirements](https://www.openstreetmap.org/copyright). No bulk download, prefetch or offline tile caching is implemented. Select a suitable provider and review #6 before any public launch. Tile failures leave the synthetic overlay and list usable; WebGL failures leave the list usable.

Agent instructions and workflow templates remain in `AGENTS.md`, `.agents/`, `docs/` and `prompts/`.

In restricted environments, disable Astro telemetry with `ASTRO_TELEMETRY_DISABLED=1`; use an existing browser with `CHROMIUM_PATH=/usr/bin/chromium` for browser tests.
