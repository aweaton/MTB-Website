---
name: pull-request-prep
description: "Prepare a complete draft PR for human review, with scope and check evidence."
---
# Pull request prep

## When to use
Prepare a complete draft PR for human review, with scope and check evidence.

## Procedure
1. Link task, acceptance criteria and affected components.
2. Summarize implementation and explicitly list tests PASS/FAIL/NOT RUN.
3. Include independent findings, outstanding risks and change/rollback notes.
4. Create a draft PR if authorized; do not merge or mark approved on behalf of human.

## Required output
Draft PR body using templates/pull-request.md, approval question.

## Stop and escalate when
Blocking review finding unresolved.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
