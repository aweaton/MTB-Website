# Orchestration specification

The lead role is the **policy** for an orchestrator. A Codex main agent can follow it now; a future OpenClaw or custom runner can automate it without changing role contracts.

## Planning algorithm
1. Normalize a request into [task brief](../templates/task-brief.md) with observable acceptance criteria.
2. For nontrivial work, discover affected modules with `repo-navigation`; label each task `read`, `write`, `test`, or `review`.
3. Build a dependency map for multi-part work; avoid more than one active writer for the same files. Skip a formal DAG for a simple fix.
4. Label complexity `routine`, `cross-cutting`, or `high-risk`; request approval for high-risk operations.
5. Choose an owner and proportionate verification for each writable task; hydrate a small set of applicable skills, add references only if necessary.
6. Start execution in a feature branch/worktree. Require handoffs with explicit artifact paths and acceptance evidence.
7. Run relevant integration checks and independent review after combining substantial dependent changes; don't require an integration suite for text-only edits.
8. Stop at the PR/human approval gate; never automatically merge or deploy.

## Routing defaults
| Task | Primary | Verifier | Typical skills |
|---|---|---|---|
| Bug | developer | tester, reviewer | bug-fixing, regression-testing |
| Feature | architect when cross-cutting; otherwise developer | tester, reviewer | feature-implementation, unit-testing |
| Refactor | developer | tester, reviewer | refactoring, regression-testing |
| Code inquiry | researcher | lead | repo-navigation, reporting |
| README/doc | documentation | reviewer | readme-maintenance, change-summary |
| CI or deployment plan | devops | reviewer + human for privileged actions | test-validation, security-review when relevant |
| Security concern | reviewer | human + relevant specialist | security-review, escalation |

## Handoff format
Send: task ID, source revision, instructions/skills hydrated, permitted files/actions, acceptance criteria, produced files/diff, tests (PASS/FAIL/NOT RUN), remaining risks, next owner. See [template](../templates/handoff.md). No hidden context assumed.

## Budget and retries
- For simple tasks, use a single agent; parallelize only when independent work warrants added coordination cost.
- Retry a failing implementation at most twice with a changed hypothesis; don't burn tokens on identical attempts.
- Classify errors and escalate tool outages / unsafe ambiguity rather than trying to brute-force them.
- If a model provider fails or is unavailable, stop or route through an **explicitly authorized** fallback. No unapproved new charges.
- For future cost measurements, record tokens, tool executions, retries, and human correction time where possible.

## Completion synthesis
The lead checks actual verification evidence (or an explicit NOT RUN limitation), composes the draft PR and preserves disagreements or unresolved risks. Do not claim independence if the same agent performed sequential stages.
