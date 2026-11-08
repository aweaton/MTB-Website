# Continue an Existing Task

**Invocation:** `Read prompts/continue-work.md and continue work on Issue #12 / PR #23.`

## Prompt template
> Resume work in the current project repository for `{{ISSUE_OR_PR_REFERENCE}}`. Read `AGENTS.md`, the referenced issue/PR, current branch, recent commits, diff, tests and any existing handoff in the repository or conversation. Do not assume prior conversation state is reliable without checking repository evidence.
>
> Act as Lead. Reconstruct: objective and acceptance criteria, what is verified complete, outstanding blockers, worktree status, previous attempts and the next smallest safe step. Read `templates/handoff.md` if present and select only necessary skills.
>
> Continue only **within previously approved scope**. If there is no clear prior authorization, provide a plan and request it before editing. Do not repeat failed approaches beyond the retry budget, overwrite others' edits, merge, or deploy.
>
> Report the new verified status and next decision; link any existing PR rather than creating duplicates.
