# Skill hydration and discovery

**Hydration** means selecting a skill by its name/description and loading its `SKILL.md` only for the task where its steps are needed. It does not imply retraining or changing the model.

## Progressive disclosure
1. Read brief skill metadata to find a precise match.
2. Select only the skills justified by the task and phase, often **one** for a small task; several may be useful during a multi-stage change.
3. Read full `SKILL.md` for selected skills only.
4. Read its optional references/scripts only if the step requires them.
5. When handing off, explicitly list selected skill IDs to avoid assumptions.

Avoid indiscriminately loading dozens of skills. The main `AGENTS.md` is always-on policy; role files are responsibility contracts, not giant prompt bundles.

## Core 30 capability map
| Group | Skills |
|---|---|
| Core (5) | task-planning (intake), repo-navigation, minimal-change, reporting, escalation |
| Development (5) | bug-fixing, feature-implementation, refactoring, language-implementation, framework-integration |
| Verification (5) | unit-testing, integration-testing, regression-testing, edge-case-analysis, test-validation |
| Review (4) | code-review, security-review, performance-review, architecture-review |
| Documentation (3) | readme-maintenance, change-summary, decision-log |
| Git/GitHub (3) | git-branching, pull-request-prep, issue-triage |
| Orchestration (5) | task-decomposition, agent-routing, skill-routing, retry-policy, merge-synthesis |

**Total: 30** foundational skills. One additional workflow skill: **execute-issue** (invoked when the user requests coding work on a specific issue). Additional optional language/framework packs: python-development, typescript-development, sql-development, shell-development, systems-development, react-development, fastapi-development.

## Scope-aware guidance
- Python work: load `python-development` for substantive Python changes; its `references/tooling-and-quality.md` is optional and should be read only for packaging, async/I/O, dependency or tooling decisions.
- Full-stack web work: use `framework-integration` when connecting client/server APIs, authentication or data contracts; read its optional `references/web-integration-checklist.md` only for cross-boundary risks. Add `react-development`, `fastapi-development` or `typescript-development` only when the code actually uses them.
- Do **not** load `language-implementation` plus multiple language packs by default; project tooling and the task determine relevance.
- Skill description is the trigger. Skill body and references are loaded only after selection. Do not copy the entire catalog into a task prompt.

## Example hydration
| Task | Load | Optional specialist |
|---|---|---|
| Fix Python parsing error | bug-fixing, regression-testing | python-development |
| Build a React component | feature-implementation, unit-testing | react-development |
| Investigate unfamiliar repo | repo-navigation, reporting | language-implementation |
| Security-sensitive review | code-review, security-review | architecture-review |
| Prepare draft PR | pull-request-prep, merge-synthesis | change-summary |
| Execute a GitHub Issue | execute-issue | bug-fixing or feature-implementation as needed |

Selection is context-dependent. Names in this table are **directory names** under `.agents/skills/`, not automatic functions.
