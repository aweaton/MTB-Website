# Reusable Codex task prompts

This folder contains **versioned prompt templates**, not automatically executing commands. Codex reads `AGENTS.md` automatically in a supported project environment; these prompt files are read **only when explicitly referenced**. The `execute-issue` workflow also has a discoverable skill at `.agents/skills/execute-issue/SKILL.md`.

## Copy-and-run entry points

| Workflow | Short message to send in Codex | Template |
|---|---|---|
| Implement an approved task | `$execute-issue Issue #12` | [execute-issue.md](execute-issue.md) |
| Plan an exploratory issue | `Read prompts/plan-issue.md and plan Issue #12. Do not code.` | [plan-issue.md](plan-issue.md) |
| Review a proposed change | `Read prompts/review-pr.md and review PR #23.` | [review-pr.md](review-pr.md) |
| Investigate a defect | `Read prompts/investigate-bug.md and investigate Issue #12.` | [investigate-bug.md](investigate-bug.md) |
| Audit an existing codebase | `Read prompts/audit-project.md and audit this repository.` | [audit-project.md](audit-project.md) |
| Resume paused work | `Read prompts/continue-work.md and continue work on Issue #12 / PR #23.` | [continue-work.md](continue-work.md) |

Replace examples with actual issue/PR numbers or URLs. `$execute-issue` works only when the skill is installed and discovered in **the current project checkout**. If the client lacks skill invocation, say `Read .agents/skills/execute-issue/SKILL.md and execute Issue #12`.

## Rules
1. Use the **target application's repository**, not this library repository, for application Issues.
2. Follow the local `AGENTS.md` and applicable skills. Do not paste all role definitions into each prompt.
3. Issue/PR URLs are references, not guaranteed access. If tools cannot read the full Issue or PR, stop and request its text/diff.
4. An instruction to **plan, investigate, audit or review** authorizes no code edits or PR creation by default.
5. An instruction to **execute** authorizes a scoped change on a feature branch but **never** a merge, deployment, secrets change, permission change, or irreversible operation.
6. These files do not configure GitHub webhooks or start agents when an Issue is created.
