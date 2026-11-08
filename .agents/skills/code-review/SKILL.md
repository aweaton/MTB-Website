---
name: code-review
description: "Independently review a substantive code diff for correctness, security boundaries, regressions and missing meaningful tests."
---
# code review

## When to use
Use for reviewable PRs and changes where a separate perspective improves confidence. Small mechanical edits can use a diff inspection instead.

## Procedure
1. Read relevant requirements, changed files, callers and actual test evidence; distinguish tests reportedly run from those verified.
2. Prioritize concrete correctness, auth/access, data-loss, concurrency, compatibility and regression risks, not formatting nits automated tools handle.
3. For each finding supply severity, file/line, failure scenario and practical remediation. Mark uncertainty where runtime evidence is missing.
4. Separate blocking defects from optional improvements; if none found, say 'no blocking findings identified' without promising comprehensive correctness.

## Required output
Prioritized findings and residual risks, with actual review scope stated.

## Stop and escalate when
Insufficient diff/context for confident findings, or suspected high-impact production security issue.

Follow the active project's `AGENTS.md`; describe only checks and delegation actually performed. Merges and production actions require human approval.
