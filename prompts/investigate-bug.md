# Investigate a Bug

**Invocation:** `Read prompts/investigate-bug.md and investigate Issue #12.`

## Prompt template
> In the current project repository, investigate bug `{{ISSUE_NUMBER_OR_DESCRIPTION}}`. Read `AGENTS.md`, relevant code and tests, and the complete issue if available. If a linked issue cannot be retrieved, state that clearly.
>
> Use the Developer or Researcher role for **diagnosis only**, with `repo-navigation` and `bug-fixing` as relevant. Identify expected versus actual behavior, reproduce in a safe local/test environment if possible, find likely root cause, affected surface and regressions, and propose the smallest patch and verification approach.
>
> Report exact reproduction commands and PASS/FAIL/NOT RUN outcomes. **Do not edit code, create a PR, or deploy** unless the user separately authorizes implementation. Escalate permission, safety, destructive, or production-only steps.
