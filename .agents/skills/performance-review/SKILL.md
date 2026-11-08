---
name: performance-review
description: "Review likely performance regressions or expensive resource paths in a diff."
---
# Performance review

## When to use
Review likely performance regressions or expensive resource paths in a diff.

## Procedure
1. Identify hot paths, data sizes, query complexity, cache boundaries and I/O calls.
2. Prefer measurements or profiling under representative workloads to speculation.
3. Flag algorithmic pitfalls, excessive network/API calls and memory amplification.
4. Recommend smallest intervention and new benchmark only when justified.

## Required output
Quantified observations where available; risks and measurement plan.

## Stop and escalate when
No representative workload or a tradeoff changing guarantees.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
