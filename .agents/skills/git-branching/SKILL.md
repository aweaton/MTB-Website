---
name: git-branching
description: "Use isolated branches, small commits and clean diffs for development tasks."
---
# Git branching

## When to use
Use isolated branches, small commits and clean diffs for development tasks.

## Procedure
1. Confirm repository and base revision; create a scoped feature branch or worktree.
2. Inspect git status before editing and avoid overwriting unrelated changes.
3. Stage only intended files, write meaningful commits, inspect final diff.
4. Never force-push, rewrite protected history or merge without approval.

## Required output
Branch name, base/head commits, changed files and clean status.

## Stop and escalate when
Unexpected changes or a branch already modified by another agent.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
