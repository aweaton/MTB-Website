---
name: systems-development
description: "Work on C, C++ or Rust code with explicit memory, ownership, build and hardware constraints."
---
# Systems development

## When to use
Work on C, C++ or Rust code with explicit memory, ownership, build and hardware constraints.

## Procedure
1. Identify compiler/toolchain version, target architecture and build system.
2. Inspect ownership/lifetimes or resource management, integer overflow and FFI boundaries.
3. Use project sanitizers/static tools when available and add targeted unit tests.
4. For hardware or safety-critical behavior, require simulation and human approval before deployment.

## Required output
Build/test results, unsafe/FFI analysis and target assumptions.

## Stop and escalate when
Unverified hardware effect or safety-critical production action.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
