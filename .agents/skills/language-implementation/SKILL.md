---
name: language-implementation
description: "Identify real language toolchains and select relevant specialty skills for mixed-language or unfamiliar projects."
---
# language implementation

## When to use
Use when multiple languages are involved or the toolchain is uncertain; skip when a specific language pack already clearly applies.

## Procedure
1. Inspect manifests and build/test scripts to identify languages, compiler/runtime versions, frameworks and package managers.
2. Select only specialty packs matching affected files. More than one pack may be appropriate for a real full-stack change.
3. Confirm commands/tools exist before executing; preserve existing dependency and build conventions.
4. Report language choices, cross-boundary contracts and any unsupported toolchains.

## Required output
Selected specialist skills and actual version/tooling evidence.

## Stop and escalate when
Unknown runtime/toolchain or incompatible versions prevent safe implementation.

Follow the active project's `AGENTS.md`; describe only checks and delegation actually performed. Merges and production actions require human approval.
