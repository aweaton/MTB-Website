---
name: bug-fixing
description: "Reproduce and repair a reported software defect with a minimal regression test."
---
# Bug fixing

## When to use
Reproduce and repair a reported software defect with a minimal regression test.

## Procedure
1. Identify expected versus actual result and affected version; reproduce locally if possible.
2. Trace root cause via code and tests, avoiding blind trial-and-error.
3. Add a failing regression test where feasible, then implement the smallest fix.
4. Run targeted then relevant neighboring checks; record exact results and residual risk.

## Required output
Root-cause explanation, fix diff, regression evidence.

## Stop and escalate when
Two failed hypotheses or destructive fix requires approval.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
