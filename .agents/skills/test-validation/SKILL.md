---
name: test-validation
description: "Execute and interpret project checks after meaningful code or configuration changes, with risk-based scope and truthful evidence."
---
# test validation

## When to use
Use before claiming a code change is tested. Documentation-only changes may need only link/format or diff verification.

## Procedure
1. Discover supported commands from project scripts, manifests and CI; start with the smallest useful check rather than always running the whole suite.
2. Capture each command, environment, exit status and concise result; classify PASS/FAIL/NOT RUN precisely.
3. Separate changed-code regressions from existing failures, missing dependencies, flaky tests and environment faults; retry only with a new hypothesis.
4. Broaden to typecheck, lint, integration or build when affected interfaces or risk justify it; once required checks pass, avoid redundant reruns.
5. Report remaining unverified acceptance criteria or missing test infrastructure.

## Required output
Focused check ledger, interpretation of failures and risk-based final verdict.

## Stop and escalate when
Required checks need production credentials, destructive setup or untrusted side effects.

Follow the active project's `AGENTS.md`; describe only checks and delegation actually performed. Merges and production actions require human approval.
