---
name: decision-log
description: "Write an architecture decision record when meaningful tradeoffs, standards or tool choices are approved."
---
# Decision log

## When to use
Write an architecture decision record when meaningful tradeoffs, standards or tool choices are approved.

## Procedure
1. State the decision context, constraints and alternatives evaluated.
2. Record chosen approach, why, risks, owner and date.
3. Link affected files, migration steps and reconsideration triggers.
4. Mark status proposed until approved; do not present proposals as settled facts.

## Required output
ADR-style decision record with explicit status.

## Stop and escalate when
Decision requires human approval not yet obtained.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
