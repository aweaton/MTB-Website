# Plan a GitHub Issue

**Invocation:** `Read prompts/plan-issue.md and plan Issue #12. Do not code.`

## Prompt template
> In the current project repository, inspect GitHub Issue `{{ISSUE_NUMBER_OR_URL}}`, its relevant comments, `AGENTS.md`, and existing architecture docs. Verify you have the correct issue; if access fails, ask for its text.
>
> Act as Lead. Use the `issue-triage` and `task-planning` skills when relevant; consult Architect or Researcher if supported. Classify the issue as idea, feature, bug or maintenance. Draft a testable goal, scope/non-goals, acceptance criteria, constraints, dependencies, risks, agent responsibilities and verification plan. For larger requests, suggest child issues but **do not create them without authorization**.
>
> Return a concise proposed plan and specific questions or approval gates. Do **not** edit project files, open coding PRs, or begin implementation.
