---
name: edge-case-analysis
description: "Derive negative and boundary test cases for input validation, concurrency, files, networks or numeric behavior."
---
# Edge case analysis

## When to use
Derive negative and boundary test cases for input validation, concurrency, files, networks or numeric behavior.

## Procedure
1. Identify type boundaries, empty/missing inputs, malformed values and size extremes.
2. Consider ordering, retries, timeouts, permissions and concurrent access as applicable.
3. Rank cases by likelihood and consequence; select targeted tests.
4. Document expected outcomes explicitly and compare to observed behavior.

## Required output
Prioritized edge-case table and tests.

## Stop and escalate when
Safety-sensitive failure mode lacking clear requirements.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
