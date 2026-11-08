# Western Newfoundland MTB — fictional demo

Astro + MapLibre prototype for Issue #11, prepared for optional public GitHub Pages hosting. **DEMO — fictional routes, not for navigation.** No real trail, access or safety information is supplied.

## Run locally

Node 22.23.4+ (tested with Node 24), npm:

```sh
npm ci
npm run dev
```

Open http://localhost:4321/MTB-Website/. `/MTB-Website/` is the destination view; `/MTB-Website/map/` contains the interactive map, trail details, accessible list and featured loop. The list remains readable without JavaScript or WebGL.

```sh
npm test                 # geometry, references, connectivity, direction, release gate
npm run check            # Astro / TypeScript
npm run build            # explicit LOCAL DEMO output in dist; do not publish
npm run build:public-demo # separately opted-in fictional output for Pages
npm run build:release    # deliberately fails while synthetic/unverified data exists
npm run test:browser     # Playwright against built site; npx playwright install chromium
```

## Data boundary

`src/data/synthetic/records.json` holds trails and rides referencing stable segment IDs with explicit forward/reverse directions. `segments.geojson.json` contains hand-authored WGS84 longitude/latitude LineStrings around Pasadena, Newfoundland and Labrador. They were not traced from real paths. Shared fixture provenance supplies source, permission, access, verification and import-date fields for every record. Individual segments are marked `synthetic: true`; none are publishable. No GPX/download endpoint exists.

`src/lib/trails.mjs` validates the fixture at startup/build and assembles ordered segment coordinates without changing the original geometry. Future authorized GPX/OSM imports can produce the same GeoJSON plus records; real data needs per-source provenance and the rights/access/freshness work in #4, #7 and #9. This is a deliberately small schema, not a GIS import pipeline or routing engine.

`npm run build` opts into local synthetic output. `npm run build:public-demo` separately sets `PUBLIC_DEMO_BUILD=true` and uses `--mode public-demo` for the authorized fictional public demo. The flag and mode are both required. Direct Astro builds and `build:release` reject the fixture, including when both demo flags are present. Neither build command deploys anything. The release guard does not certify future imports or authorize publication of real trail information.

## GitHub Pages preparation (not deployed)

The configured URL is `https://aweaton.github.io/MTB-Website/`. Astro uses `site: https://aweaton.github.io`, `base: /MTB-Website/` and trailing slashes. Navigation uses `import.meta.env.BASE_URL`; generated CSS, scripts and the MapLibre worker use the same prefix. Development and previews also use this project prefix. If the repository name or host changes, update `astro.config.mjs` and the browser test URL together.

`.github/workflows/pages-demo.yml` validates pull requests without Pages write permissions or deployments. It runs data/build-guard checks, typechecking, formatting and Chromium tests against the public demo build, including internal links/assets and fallback behavior. Pages artifact upload and deployment are gated to a **manual workflow dispatch on main** whose confirmation is exactly `PUBLISH FICTIONAL DEMO`. There is no push-triggered deployment. Do not run that dispatch until publication is separately authorized. GitHub Pages must be set to use GitHub Actions by a repository administrator; this change does not modify repository settings. Environment protection rules for `github-pages` can add a human approval gate.

The public output retains the prominent fictional/not-for-navigation banner on both pages and every trail/ride detail, unknown access/safety status, no GPX downloads, isolated synthetic provenance and `noindex,nofollow`. The indexing hint is not access control; anyone can view output once it is published. The ordinary verified-trail release path stays blocked. Keep the basemap opt-in and its attribution; public demo approval does not approve real GIS imports.

To test the exact Pages output without publishing:

```sh
npm run build:public-demo
npm run preview
# Open http://localhost:4321/MTB-Website/
npm run test:browser
```

Browser tests build the public demo themselves on an isolated port and verify navigation, assets and worker loading at `/MTB-Website/`. No deployment is part of these commands.

## Map and licenses

The default MapLibre style is a local schematic background requiring no remote tiles, fonts or keys. Opting into the online basemap requests standard raster tiles from `tile.openstreetmap.org`; attribution appears on the map and below it. Follow [OSM tile usage policy](https://operations.osmfoundation.org/policies/tiles/) and [attribution requirements](https://www.openstreetmap.org/copyright). No bulk download, prefetch or offline tile caching is implemented. Select a suitable provider and review #6 before any public launch. Tile failures leave the synthetic overlay and list usable; WebGL failures leave the list usable.

Agent instructions and workflow templates remain in `AGENTS.md`, `.agents/`, `docs/` and `prompts/`.

In restricted environments, disable Astro telemetry with `ASTRO_TELEMETRY_DISABLED=1`; use an existing browser with `CHROMIUM_PATH=/usr/bin/chromium` for browser tests.
