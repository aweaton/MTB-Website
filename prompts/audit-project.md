# Audit a Repository

**Invocation:** `Read prompts/audit-project.md and audit this repository.`

## Prompt template
> Inspect the **currently selected project repository** using `AGENTS.md`, README, manifests, CI configuration, tests and representative source paths. Act as Researcher plus Reviewer, using `repo-navigation`, `code-review`, or `security-review` when relevant. Keep the audit read-only.
>
> Produce a prioritized, evidence-based audit of correctness, security boundaries, test gaps, architecture/maintainability, documentation and build/release risks. Cite exact repository paths and distinguish verified findings, hypotheses and uninspected areas. Do not claim a full penetration test or full-project coverage.
>
> Recommend a small prioritized backlog with acceptance criteria and suggested agent skills. **Do not automatically create Issues, modify files, or start coding**. Request approval before posting any findings externally.
