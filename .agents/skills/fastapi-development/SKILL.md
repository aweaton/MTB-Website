---
name: fastapi-development
description: "Implement FastAPI HTTP routes and dependencies with safe request schemas, server authorization and endpoint testing."
---
# fastapi development

## When to use
Use for FastAPI routes, Pydantic schemas, dependencies, middleware or API contracts; not for unrelated Python utilities.

## Procedure
1. Inspect FastAPI/Pydantic versions, routing structure, dependency lifetimes, existing tests and sync/async conventions.
2. Define method/path, typed request/response, error status, validation, pagination and version compatibility where relevant.
3. Enforce authorization server-side per resource/action, not only authentication or client UI. Bound uploads and URL fetches; avoid SSRF and secret disclosure.
4. Preserve DB transaction/session lifetime; avoid blocking event loop in async routes; handle timeouts and cancellation deliberately.
5. Run endpoint tests with isolated clients/dependencies for success, malformed input, unauthenticated/forbidden paths and expected errors; never use production data.

## Required output
Endpoint/schema contract, changed files and actual API test evidence, migration/auth risks.

## Stop and escalate when
Unapproved auth policy change, data migration, real credentials or incompatible framework upgrade.

Follow the current project's `AGENTS.md`; report only work actually performed. Merges and production actions require human approval.
