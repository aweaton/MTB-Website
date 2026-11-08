---
name: python-development
description: "Implement Python code with project-compatible packaging, types, error handling and meaningful validation."
---
# python development

## When to use
Use for substantive Python code changes, not Markdown-only edits or an isolated syntax question.

## Design principles
- Prefer clear, idiomatic Python and the smallest maintainable solution consistent with the task's size and risk. Keep a small script simple; do not impose application-scale architecture on it.
- Use focused functions for stateless operations. Use classes when they clarify shared state, lifecycle, or cohesive behavior; avoid single-method wrapper classes, needless inheritance, and design patterns without a demonstrated need.
- Keep modules and functions cohesive without splitting code into tiny files or layers just for structure. Remove meaningful duplication, but avoid abstractions built only around superficial similarity.
- Don't build speculative features, configuration, extension points, or dependencies. Prefer standard-library functionality when practical; keep added complexity proportional to an actual requirement.
- Make explicit tradeoffs for readability and correctness. Shorter code is not automatically better code.

## Procedure
1. Inspect `pyproject.toml`, interpreter requirements, package layout, lockfile and existing test/lint/type commands. Follow the actual project's tooling; don't switch package managers on preference.
2. Use an isolated Python environment where possible; preserve dependency/lock consistency, avoid global installs and avoid adding new packages unless justified.
3. Preserve public API, input/output and exception behavior. Use type annotations at useful maintained boundaries; remember type hints do not validate external data.
4. Handle resources, paths, text encodings and failures deliberately. Avoid broad exception swallowing, unsafe deserialization and shell commands built from untrusted inputs.
5. For async work, verify blocking I/O, cancellation, task lifetime, cleanup, timeouts and retries (only for retry-safe operations).
6. Run focused behavior/regression tests, then existing lint/type/build checks where they are relevant.
7. Review the final diff for unnecessary classes/wrappers, layers, dependencies, configuration, dead code and duplication. Simplify where safe, while preserving clarity, compatibility, error handling and testability; do not refactor unrelated code. Report actual PASS/FAIL/NOT RUN evidence.

## Required output
Scoped Python change, interpreter/toolchain assumptions, compatibility and dependency impact, executed checks and any gaps.

## Stop and escalate when
Missing supported runtime, unapproved dependency or compatibility changes, unsafe I/O or production migration.

## Optional reference
For packaging, async or complex tooling questions only, read [Python tooling and quality](references/tooling-and-quality.md).

Follow the current project's `AGENTS.md`; report only work actually performed. Merges and production actions require human approval.
