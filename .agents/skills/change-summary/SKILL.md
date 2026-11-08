---
name: change-summary
description: "Create accurate release notes, PR summaries and user-facing change explanations."
---
# Change summary

## When to use
Create accurate release notes, PR summaries and user-facing change explanations.

## Procedure
1. Compare changed behavior to task acceptance criteria and baseline.
2. Separate new, fixed, unchanged, breaking, and unverified behavior.
3. Include migration/rollback notes when needed and link evidence.
4. Use plain language with no exaggerated test claims.

## Required output
Concise summary and exact test status.

## Stop and escalate when
Unsupported claim or undocumented breaking change.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
