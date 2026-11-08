---
name: readme-maintenance
description: "Update project README and setup instructions after behavior, dependencies or usage changes."
---
# Readme maintenance

## When to use
Update project README and setup instructions after behavior, dependencies or usage changes.

## Procedure
1. Identify the audience and changed public usage or installation steps.
2. Verify commands from manifests/scripts; mark commands not actually run.
3. Edit concise examples, requirements, environment configuration and troubleshooting.
4. Check links and consistency with current behavior; remove stale instructions.

## Required output
README diff and validation notes.

## Stop and escalate when
Required example would expose secrets or depend on unapproved operations.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
