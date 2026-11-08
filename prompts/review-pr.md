# Review a Pull Request

**Invocation:** `Read prompts/review-pr.md and review PR #23.`

## Prompt template
> In the current project repository, review Pull Request `{{PR_NUMBER_OR_URL}}` against its linked issue, acceptance criteria and `AGENTS.md`. Read the actual diff, relevant tests and any existing review notes. If you cannot retrieve the diff or linked requirements, report the limitation rather than guessing.
>
> Use the Reviewer role and `code-review` skill; hydrate `security-review` or `architecture-review` only when warranted. Prioritize correctness, regressions, data loss, auth/secrets risk, scope and missing tests. Report issues with severity, file/line, expected impact and suggested remediation, and distinguish actual test evidence from unexecuted checks.
>
> Summarize blocking findings, optional improvements and residual uncertainty. This is **read-only**: do not modify code, approve on behalf of the user, or merge.
