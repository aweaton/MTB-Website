---
name: retry-policy
description: "Manage failed attempts, diagnose root cause, and prevent expensive infinite agent loops."
---
# Retry policy

## When to use
Manage failed attempts, diagnose root cause, and prevent expensive infinite agent loops.

## Procedure
1. Record failure symptoms, command output and current hypothesis.
2. Classify whether failure is code, environment, auth, ambiguity or safety.
3. Allow up to two distinct, evidence-driven repair attempts for the same blocker.
4. Escalate with attempts and recommended decisions; do not repeat unchanged action.

## Required output
Failure ledger and next action or escalation.

## Stop and escalate when
Same blocker persists after two attempts; risky permission required.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
