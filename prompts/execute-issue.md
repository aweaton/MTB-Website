# Execute a GitHub Issue

**Invocation:** `$execute-issue Issue #12` (preferred if installed), or `Read prompts/execute-issue.md and execute Issue #12`.

## Prompt template
> Work in the **currently selected project repository** on GitHub Issue `{{ISSUE_NUMBER_OR_URL}}`.
>
> Read the full issue, relevant comments, applicable `AGENTS.md`, and `.agents/skills/execute-issue/SKILL.md`. Confirm repository, issue number, current base revision, and whether you can read the issue; if you cannot, ask for the issue contents instead of guessing.
>
> Use the Lead role for nontrivial coordination and the Developer, Tester or Reviewer roles when their distinct contribution helps; do not require a multi-agent team for a small reversible change. Delegate only where supported and distinguish actual subagents from sequential checks. Select only task-relevant skills. Determine acceptance criteria, implement the smallest approved-scope change on an isolated branch, run checks, review the diff, and prepare a **draft PR** referencing the issue.
>
> If the issue is exploratory or contradictory, or requires a material security/data/architecture decision, propose options and request authorization for that decision while continuing any safe, already-approved work. Never merge, deploy, change permissions or secrets, or take destructive actions without explicit permission. Report actual tests, unresolved findings, and the PR link if created.

**Scope:** execution only where the issue is sufficiently defined and the user has requested implementation. **No automatic triggers**.
