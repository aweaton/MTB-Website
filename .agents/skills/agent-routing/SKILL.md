---
name: agent-routing
description: "Assign tasks to suitable role agents based on work type and risk, without assuming concurrent runtime support."
---
# Agent routing

## When to use
Assign tasks to suitable role agents based on work type and risk, without assuming concurrent runtime support.

## Procedure
1. Classify as research, architecture, implementation, test, review, docs or DevOps.
2. Choose one primary owner, independent verifier and minimal required access.
3. Check whether runtime supports spawning; otherwise sequence work in one session.
4. Use explicit handoff template with revision and acceptance criteria.

## Required output
Role mapping and handoff plan.

## Stop and escalate when
Insufficient isolation or permissions for proposed delegation.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
