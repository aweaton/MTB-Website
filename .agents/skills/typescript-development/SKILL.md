---
name: typescript-development
description: "Change TypeScript or JavaScript behavior while preserving runtime input validation, module compatibility and build checks."
---
# typescript development

## When to use
Use for TS/JS logic, typing, public contracts or build changes; skip for CSS-only or documentation changes.

## Procedure
1. Inspect `package.json`, lockfile, `tsconfig` and runtime/framework versions before editing. Do not introduce a new bundler, package manager or module format casually.
2. Trace public types, nullable values, serialized data, ESM/CJS and server/browser boundaries. TypeScript's static types do not validate untrusted runtime input.
3. Implement the smallest change with meaningful type narrowing, preserving existing validation conventions rather than adding duplicate schemas or blanket casts.
4. Check error/loading/abort behavior for asynchronous work and ensure secrets do not reach browser bundles or logs.
5. Run existing focused tests, typecheck, lint and build scripts as relevant; report real outcomes and backward-compatibility concerns.

## Required output
Changed contracts/modules, validation and build/test evidence, outstanding browser/server risks.

## Stop and escalate when
Unapproved dependency/bundler migration, exposed credentials, or ambiguous client/server boundary.

Follow the current project's `AGENTS.md`; report only work actually performed. Merges and production actions require human approval.
