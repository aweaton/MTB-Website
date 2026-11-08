---
name: framework-integration
description: "Connect frontend, API and persistence boundaries without breaking HTTP, authorization or data contracts."
---
# framework integration

## When to use
Use when behavior spans components such as frontend ↔ API or service ↔ database; not for a single-function or purely visual edit.

## Procedure
1. Map existing request/data flow and framework versions. Identify where each interface and trust boundary begins and ends.
2. Define request/response, error, auth/authorization, idempotency, pagination, timeout and compatibility contracts as applicable.
3. Keep server policy server-enforced. Check cookie/CSRF/CORS/session behavior when crossing browser origins; prevent backend secrets reaching clients.
4. Handle browser loading/empty/error/retry states, stale responses and client/server version compatibility.
5. Run focused boundary-level integration checks and realistic browser/API verification when available; document untested conditions.

## Required output
Contract map and changed interfaces, verification evidence, compatibility and security risks.

## Stop and escalate when
Unapproved breaking change, data migration, auth/access policy decision or deployment risk.

## Optional reference
For browser/API/auth cross-boundary changes, read [web integration contract notes](references/web-integration-checklist.md).

Follow the current project's `AGENTS.md`; report only work actually performed. Merges and production actions require human approval.
