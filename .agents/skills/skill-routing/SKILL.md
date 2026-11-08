---
name: skill-routing
description: "Select just-in-time skills from discovery metadata before full instruction hydration."
---
# Skill routing

## When to use
Select just-in-time skills from discovery metadata before full instruction hydration.

## Procedure
1. Compare task intent and phase to skill descriptions in docs/hydration.md.
2. Choose a focused set (normally 1–3), avoiding duplicates and unrelated packs.
3. Read selected SKILL.md fully, and only necessary reference materials.
4. Log selected skill names in handoff so later agents need not guess.

## Required output
Selected skill IDs, trigger rationale and instruction sources.

## Stop and escalate when
No applicable skill; use core policy and report gap instead of inventing one.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
