---
name: escalation
description: "Escalate ambiguous, unsafe, blocked or repeated-failure tasks instead of guessing or looping."
---
# Escalation

## When to use
Escalate ambiguous, unsafe, blocked or repeated-failure tasks instead of guessing or looping.

## Procedure
1. Classify blocker: ambiguity, architecture, permission, security, destructive change, environment or failed implementation.
2. Gather minimal reproduction, previous attempts and options; redact sensitive details.
3. Stop immediately for privileged/destructive decisions or conflicting requirements.
4. After two meaningful failed repair approaches, return a clear decision request rather than another retry.

## Required output
Blocker summary, evidence, recommended choices and explicit approval request.

## Stop and escalate when
No safe authorized path forward.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
