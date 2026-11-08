---
name: refactoring
description: "Improve code structure while preserving observable behavior and existing interfaces."
---
# Refactoring

## When to use
Improve code structure while preserving observable behavior and existing interfaces.

## Procedure
1. Record invariants and obtain baseline tests before editing.
2. Change one coherent abstraction or module at a time; avoid mixing feature behavior.
3. Compare before/after test results and publicly visible behavior.
4. Identify intentional API changes separately and seek approval.

## Required output
Refactor diff, preserved invariants and before/after evidence.

## Stop and escalate when
No reliable way to assert behavioral equivalence.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
