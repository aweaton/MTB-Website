---
name: merge-synthesis
description: "Combine work and test/review findings into a coherent candidate for a human-reviewed PR."
---
# Merge synthesis

## When to use
Combine work and test/review findings into a coherent candidate for a human-reviewed PR.

## Procedure
1. Ensure dependent branches/changes are integrated in dependency order with no conflicting edits.
2. Re-run relevant tests on the **combined** candidate, not only isolated pieces.
3. Gather independent review findings and resolve or explicitly document blockers.
4. Prepare PR summary and request human approval; never merge autonomously.

## Required output
Integrated diff, combined test ledger, review disposition, PR.

## Stop and escalate when
Conflicts, failing checks or unresolved high-severity findings.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
