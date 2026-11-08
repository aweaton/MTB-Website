---
name: integration-testing
description: "Verify observable contracts between HTTP services, databases, modules or browser/client boundaries in isolated environments."
---
# integration testing

## When to use
Use when the change crosses a meaningful component boundary; not for a pure local function.

## Procedure
1. Identify contract, components, versions and expected failure modes in the affected boundary.
2. Use ephemeral data, test DBs and stubbed external services rather than live credentials or production targets.
3. Exercise relevant success, invalid-input, auth, timeout, retry or transaction rollback paths, selecting cases based on actual risk.
4. Record exact commands, environment and PASS/FAIL/NOT RUN; explain cleanup and missing coverage.

## Required output
Integration test matrix, reproduction setup and remaining compatibility risks.

## Stop and escalate when
Test needs uncontrolled live effects, unknown privileges or unsafe cleanup.

Follow the active project's `AGENTS.md`; describe only checks and delegation actually performed. Merges and production actions require human approval.
