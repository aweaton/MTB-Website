# Plan a GitHub Issue

**Invocation:** `Read prompts/plan-issue.md and plan Issue #12. Do not code.`

## Prompt template
> In the current project repository, inspect GitHub Issue `{{ISSUE_NUMBER_OR_URL}}`, relevant comments, `AGENTS.md` and existing architecture documents. Verify the issue reference; if unavailable, report that fact.
>
> Act as Lead. Use `issue-triage` and `task-planning` where relevant, and consult Architect or Researcher when supported and useful. Determine goal, scope, acceptance criteria, dependencies, risks and verification approach. For large work, suggest child issues without creating them.
>
> **Use decision-first output:** begin with a short recommendation and at most three decisions requiring a human choice, each showing a default, one meaningful alternative and an ID (D1, D2, ...). Provide a one-line reply format such as `D1 A, D2 B`. Follow with a brief impact/check summary. Put detailed evidence, assumptions, tradeoffs and sources in a clearly titled appendix or linked design document, not in the opening summary. Skip decision questions when none are needed.
>
> Do not edit code or project files, open coding PRs, or begin implementation. Do not interpret a comment or checkbox as authorization to merge or deploy.
