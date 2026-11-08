---
name: pull-request-prep
description: "Prepare concise, decision-first draft PRs with evidence and clear human approval gates."
---
# Pull request prep

## When to use
Prepare a complete draft PR for human review without burying the decision in implementation details.

## Procedure
1. Link the issue, scope and acceptance criteria; identify which choices require a human decision now. Do not turn routine implementation details into approval questions.
2. Use `templates/pull-request.md`: lead with the decision, recommendation and at most three short choices. Give decision IDs, a one-line comment reply syntax and links to detailed rationale.
3. Summarize changed outcome, test evidence (PASS/FAIL/NOT RUN) and only material blockers above the supporting details. Put technical evidence, alternatives and findings in the expandable detail section or linked documents.
4. Include reviewer findings and rollback when relevant. Prepare a draft PR when authorized; never equate comments or checked boxes with PR approval, merge authorization or deployment approval.

## Required output
A skim-friendly draft PR with a clear requested action and accessible supporting evidence. For changes needing no design decision, omit the decision menu.

## Stop and escalate when
Blocking reviewer findings remain or a risky, ambiguous decision needs clarification.

Follow repository `AGENTS.md`; do not invent check evidence or merge/deploy without approval.
