---
name: sql-development
description: "Write safe database changes or queries while respecting schema, transactions and migration discipline."
---
# Sql development

## When to use
Write safe database changes or queries while respecting schema, transactions and migration discipline.

## Procedure
1. Inspect schema, dialect, migrations and query abstraction used in repo.
2. Parameterize dynamic values; never interpolate untrusted inputs into SQL identifiers/values.
3. For writes, consider transaction isolation, indexes, rollback, locks and data volume.
4. Test in isolated DB with anonymized fixtures; require approval for production migration.

## Required output
Query/migration plan, compatibility and rollback notes, test evidence.

## Stop and escalate when
Destructive migration, privilege change or unknown production data impact.

Follow repository `AGENTS.md`; never claim unexecuted tests passed and never merge/deploy without approval.
