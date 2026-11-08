---
name: architecture-review
description: "Review system-level fit, boundaries, data flows and compatibility for cross-cutting changes."
---
# Architecture review

## When to use
Review system-level fit, boundaries, data flows and compatibility for cross-cutting changes.

## Procedure
1. Sketch affected components and public contracts; inspect ADRs and repo guidance.
2. Assess backward compatibility, failure modes, observability and rollbacks.
3. Evaluate at least one simpler alternative to added complexity.
4. Record tradeoffs, dependencies, migration plan and decision owners.

## Required output
Architecture findings and recommended decision.

## Stop and escalate when
Irreversible migration or unresolved security boundary.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
