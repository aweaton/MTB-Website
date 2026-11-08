#!/usr/bin/env python3
"""Check a project-scoped agent-framework installation (Python 3.11+, stdlib only).

Static validation cannot prove Codex runtime discovery, skill invocation, or delegation.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import re
import sys
import tomllib
from urllib.parse import unquote, urlsplit

LINK = re.compile(r"(?<!!)\[[^\]]*\]\(([^)]+)\)")
SKILL_NAME = re.compile(r"^name:\s*['\"]?([^'\"\n]+)", re.M)
INLINE_REFERENCES = re.compile(r"(?<![\w/])(?:templates|prompts)/[\w.-]+\.md\b")
GROUPS = {"roles", "skills", "prompts", "templates", "documentation"}


def validate(root: Path, manifest_path: Path | None = None) -> list[str]:
    root = root.resolve()
    manifest_path = manifest_path or root / "docs" / "agent-installation.json"
    if not manifest_path.is_file():
        return [f"Missing installation manifest: {manifest_path}"]
    try:
        data = json.loads(manifest_path.read_text(encoding="utf-8"))
    except (ValueError, OSError) as exc:
        return [f"Invalid installation manifest: {exc}"]
    if not isinstance(data, dict) or data.get("schema_version") != 1:
        return ["Manifest must be an object with schema_version: 1"]

    errors: list[str] = []
    files = {"AGENTS.md", ".codex/config.toml"}
    groups: dict[str, list[str]] = {}
    for group in sorted(GROUPS):
        entries = data.get(group, [])
        if not isinstance(entries, list) or any(not isinstance(x, str) or not x for x in entries):
            errors.append(f"Manifest {group} must contain non-empty strings")
            continue
        if len(entries) != len(set(entries)):
            errors.append(f"Duplicate manifest entries in {group}")
        groups[group] = entries
        for name in entries:
            if group == "roles":
                files.update((f"agents/{name}.md", f".codex/agents/{name}.toml"))
            elif group == "skills":
                files.add(f".agents/skills/{name}/SKILL.md")
            elif group == "prompts":
                files.add(f"prompts/{name}.md")
            elif group == "templates":
                files.add(f"templates/{name}.md")
            else:
                files.add(f"docs/{name}")
    if groups.get("prompts"):
        files.add("prompts/README.md")
    for name in sorted(files):
        if not (root / name).is_file():
            errors.append(f"Missing declared file: {name}")

    for name in groups.get("roles", []):
        path = root / ".codex" / "agents" / f"{name}.toml"
        if path.is_file():
            try:
                obj = tomllib.loads(path.read_text(encoding="utf-8"))
                if obj.get("name") != name:
                    errors.append(f"Agent adapter name mismatch: {name}")
                for key in ("description", "developer_instructions"):
                    if not isinstance(obj.get(key), str) or not obj[key].strip():
                        errors.append(f"Agent adapter {name} missing {key}")
            except (ValueError, OSError) as exc:
                errors.append(f"Invalid agent TOML {name}: {exc}")

    config = root / ".codex/config.toml"
    if config.is_file():
        try:
            tomllib.loads(config.read_text(encoding="utf-8"))
        except (ValueError, OSError) as exc:
            errors.append(f"Invalid Codex config TOML: {exc}")

    for name in groups.get("skills", []):
        path = root / ".agents" / "skills" / name / "SKILL.md"
        if path.is_file():
            body = path.read_text(encoding="utf-8")
            header = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", body, re.S)
            matched = SKILL_NAME.search(header.group(1)) if header else None
            if not matched or matched.group(1).strip() != name:
                errors.append(f"Invalid SKILL.md frontmatter name: {name}")

    actual = {
        "roles": {p.stem for p in (root / "agents").glob("*.md")},
        "adapters": {p.stem for p in (root / ".codex/agents").glob("*.toml")},
        "skills": {p.parent.name for p in (root / ".agents/skills").glob("*/SKILL.md")},
        "prompts": {p.stem for p in (root / "prompts").glob("*.md") if p.name != "README.md"},
    }
    for group, found in actual.items():
        declared = set(groups.get("roles" if group == "adapters" else group, []))
        if found != declared:
            errors.append(f"{group} inventory mismatch: missing={sorted(declared-found)} undeclared={sorted(found-declared)}")

    for file in sorted(root.rglob("*.md")):
        if ".git" in file.parts or "node_modules" in file.parts:
            continue
        relative = file.relative_to(root)
        body = file.read_text(encoding="utf-8")
        for raw in LINK.findall(body):
            target = raw.split(' "')[0].strip().strip("<>")
            parsed = urlsplit(target)
            if parsed.scheme or parsed.netloc or not parsed.path or parsed.path.startswith("/"):
                continue
            resolved = (file.parent / unquote(parsed.path)).resolve()
            if resolved.is_relative_to(root) and not resolved.exists():
                errors.append(f"Broken Markdown link in {relative}: {target}")
        for target in INLINE_REFERENCES.findall(body):
            if not (root / target).is_file():
                errors.append(f"Broken referenced file in {relative}: {target}")
    return sorted(set(errors))


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("project", type=Path, help="Target project checkout")
    parser.add_argument("--manifest", type=Path)
    args = parser.parse_args(argv)
    errors = validate(args.project, args.manifest)
    if errors:
        print(f"Installation validation FAILED ({len(errors)} findings):")
        for error in errors:
            print(f"- {error}")
        return 1
    print("Installation validation PASS: manifest, files, TOML, skills and links")
    print("Codex runtime discovery and delegation are NOT VERIFIED.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
