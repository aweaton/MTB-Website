---
name: minimal-change
description: "Keep implementation focused on the approved task; use before editing or reviewing scope creep."
---
# Minimal change

## When to use
Keep implementation focused on the approved task; use before editing or reviewing scope creep.

## Procedure
1. List files expected to change and behavior that must remain stable.
2. Use existing patterns and APIs before introducing abstractions or dependencies.
3. After editing, inspect the diff for unrelated changes, generated noise and accidental formatting churn.
4. Revert out-of-scope modifications; document unavoidable collateral changes and seek approval.

## Required output
Scoped diff and short justification for each changed file.

## Stop and escalate when
Changes requiring a migration or materially expanded scope.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
