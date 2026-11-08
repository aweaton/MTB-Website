# Python tooling and quality (optional reference)

Read only when the task involves packaging, dependency management, async/network I/O or tricky validation. **This is not a mandatory checklist** for every Python edit.

## Toolchain discovery
- Determine supported interpreter versions from `pyproject.toml`, CI and runtime constraints; inspect whether the project uses uv, Poetry, pip, Hatch or another tool.
- Preserve existing lockfile, build backend, package layout and developer workflow. Do not mix managers, upgrade dependencies, or install globally without a specific need.
- Use an existing test environment or disposable virtual environment/container. Do not copy credentials into dependencies, fixtures or logs.
- For distributable packages, verify `[build-system]`, `[project]`, console entry points, optional dependencies and public import paths. Development-only requirements may belong in dependency groups or existing dev tooling, depending on the project.

## Conditional commands (examples, not universal requirements)
- `python -m pytest -q tests/test_changed.py` — only if pytest and that path are installed.
- `python -m unittest discover -s tests` — if project uses standard-library unittest.
- `python -m ruff check .` — if Ruff is configured.
- `python -m mypy src` or `python -m pyright` — if type checker is configured.
- `python -m build` — for packaging changes with an installed build frontend.
- Prefer actual scripts in CI and manifests; always record the command and result. A missing tool is NOT RUN, not PASS.

## Public interfaces and input safety
- Preserve caller-visible types, exceptions and return shapes unless a breaking change is approved. Type hints are not runtime validation; validate API/file/JSON/CSV payloads explicitly.
- Treat missing, empty, null and malformed values as distinct where contract requires. Bound file sizes, timeouts, recursion and memory use for external data.
- Prefer `pathlib` and context managers for owned resources; define text encodings for portable file formats. Avoid untrusted `pickle`, `eval`, dynamic imports and shell interpolation.
- Avoid swallowing broad exceptions. Catch expected errors at meaningful boundaries; preserve exception cause where useful, log without secrets.
- Network calls should have timeouts. Retry only when safe/idempotent or when idempotency is deliberately enforced. Clean up partial writes.

## Async and concurrency
- For `asyncio`, trace ownership of spawned tasks and lifetime of sockets, files and DB sessions; avoid blocking I/O in async handlers.
- Keep `CancelledError` propagation intact after required `finally` cleanup. Consider timeout and cancellation behavior in tests, not only successful await.
- Review race conditions and concurrent writes before adding retries, shared mutable state or background tasks.

## Risk-based verification
| Change | Focused evidence |
|---|---|
| Pure function or bug | Behavior and regression test, invalid input if relevant |
| Parser/file I/O | Empty, malformed and encoding cases; bound resource usage |
| Async/network | Timeout, cancellation, retries, transient errors in an isolated client |
| Packaging | Clean-environment import, entry point and wheel/sdist check |
| Data access | Transaction failure/rollback and auth boundary as applicable |
| Formatting-only | Diff/lint review; avoid low-value tests |

Don't overmock the logic under test. Never call production services solely to improve coverage.

## Primary references
- https://packaging.python.org/en/latest/guides/writing-pyproject-toml/
- https://packaging.python.org/en/latest/specifications/dependency-groups/
- https://docs.python.org/3/library/asyncio-task.html
