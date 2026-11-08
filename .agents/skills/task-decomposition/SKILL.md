---
name: task-decomposition
description: "Split a large project request into small dependent tasks with explicit measurable outputs."
---
# Task decomposition

## When to use
Split a large project request into small dependent tasks with explicit measurable outputs.

## Procedure
1. Start with acceptance criteria and interface boundaries.
2. Build a DAG of independent, blocked and sequential work; avoid ambiguous ownership.
3. Limit each task to bounded code paths and observable verification.
4. Mark parallel tasks only if writers cannot collide; include reviewer/tester ownership.

## Required output
Task list with IDs, dependencies, owners and checks.

## Stop and escalate when
Tasks cannot be bounded without major architecture decision.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
