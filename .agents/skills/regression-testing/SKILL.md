---
name: regression-testing
description: "Ensure old behavior still works after a bug fix, refactor or feature change."
---
# Regression testing

## When to use
Ensure old behavior still works after a bug fix, refactor or feature change.

## Procedure
1. Determine impacted public contracts and historical bug cases.
2. Run preexisting relevant tests; add one regression test for newly discovered bug if feasible.
3. Compare outputs against baseline or documented expectations.
4. Report untested dependencies and failing cases; do not assert complete regression coverage.

## Required output
Regression matrix and baseline comparison.

## Stop and escalate when
Failure points to widespread breakage requiring scope decision.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
