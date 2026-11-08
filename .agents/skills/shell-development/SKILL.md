---
name: shell-development
description: "Write safe, portable shell scripts and build commands for repository automation."
---
# Shell development

## When to use
Write safe, portable shell scripts and build commands for repository automation.

## Procedure
1. Confirm shell target (bash/sh/zsh), OS and available tooling.
2. Use quoting, strict failure handling and predictable working directories.
3. Avoid destructive wildcards and command injection; handle filenames and exit codes.
4. Run shellcheck when present and test scripts in temporary workspaces.

## Required output
Script diff, tested commands and cleanup safety notes.

## Stop and escalate when
Unknown paths, elevated privilege or destructive operation.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
