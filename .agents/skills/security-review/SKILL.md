---
name: security-review
description: "Review security-sensitive changes affecting input, authorization, secrets, dependencies or executable operations."
---
# security review

## When to use
Use for trust-boundary changes, dependencies with material risk or suspected vulnerabilities. Not a full audit of every text-only edit.

## Procedure
1. Identify relevant assets, attacker-controlled input and trust boundaries in the affected code.
2. Review server-side authorization for each action/resource, validation, injection, safe file/URL handling, CSRF/CORS/session policy, secrets and new dependency exposure **as applicable**.
3. Trace an actual code path or plausible failure scenario; label unverified concerns as hypotheses.
4. Report severity, location, preconditions, impact and a concrete fix; don't publish live secrets or sensitive exploitation details in public issues.
5. Recommend focused regression coverage and escalate high-impact findings. A scoped review is not a penetration test.

## Required output
Prioritized security findings with supporting code evidence, unknowns and mitigation tests.

## Stop and escalate when
Live secret disclosure, credible production impact or requests to exploit/alter production systems.

Follow the active project's `AGENTS.md`; describe only checks and delegation actually performed. Merges and production actions require human approval.
