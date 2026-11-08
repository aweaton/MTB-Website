---
name: unit-testing
description: "Write focused deterministic tests for observable logic and concrete regressions."
---
# unit testing

## When to use
Use for meaningful behavioral logic changes, boundary conditions or identified test gaps; not every formatting-only edit.

## Procedure
1. Identify the relevant contract and smallest representative success/negative/boundary cases.
2. Use the existing project runner and fixtures, avoiding network and production data unless explicitly authorized.
3. Assert behavior rather than mirroring implementation details or overmocking the code being tested.
4. Run the focused tests and report PASS/FAIL/NOT RUN, noting previously failing tests separately.

## Required output
Targeted tests, protected behaviors, commands and remaining coverage gaps.

## Stop and escalate when
Required external services, permissions or test setup would be unsafe or disproportionate.

Follow the active project's `AGENTS.md`; describe only checks and delegation actually performed. Merges and production actions require human approval.
