---
name: feature-implementation
description: "Implement a scoped feature with compatible interfaces, acceptance criteria and verification proportionate to impact."
---
# feature implementation

## When to use
Use when requirements are sufficiently clear and implementation is requested; for ideas use task-planning, for defects bug-fixing.

## Procedure
1. Identify externally observable behavior, scope and important acceptance criteria; resolve only material ambiguities, assuming safe details when appropriate.
2. Inspect relevant callers and tests; choose the smallest coherent integration point without unrelated refactoring.
3. Implement happy/error/invalid-input paths and check compatibility where public interfaces or persisted data change.
4. Write tests that verify meaningful behavior or regressions; for a reversible text-only edit a diff/format check may be sufficient.
5. Run applicable existing checks and return a PR-ready scoped change with honest PASS/FAIL/NOT RUN evidence.

## Required output
Implemented behavior, changed files, test evidence, compatibility or migration notes.

## Stop and escalate when
Requested change expands auth/security scope, alters production data or makes a breaking contract decision without approval.

Follow the active project's `AGENTS.md`; describe only checks and delegation actually performed. Merges and production actions require human approval.
