---
name: react-development
description: "Implement React components or hooks with accessible behavior, predictable state and focused UI tests."
---
# react development

## When to use
Use for React UI, hooks, routing and server/client rendering changes; do not use for generic HTML or non-React projects.

## Procedure
1. Determine React/framework version, rendering mode, routing, state management and design system; reuse established patterns.
2. Define visible idle/loading/empty/success/error states and keyboard, focus and responsive behavior before modifying interactions.
3. Keep state minimal; use effects for synchronization rather than unnecessary derived state, handle cleanup and stale async responses.
4. Use semantic elements, accessible names, validation messages and visible focus. Guard browser-only APIs in SSR/server components and avoid hydration mismatch.
5. Run relevant component tests and, for material interactions, browser/end-to-end checks when available. Screenshots alone do not prove keyboard or accessibility behavior.

## Required output
UI diff, state/accessibility behavior and actual component/browser test evidence.

## Stop and escalate when
Unknown routing/auth/SSR contract, accessibility regression, or client-visible secrets.

Follow the current project's `AGENTS.md`; report only work actually performed. Merges and production actions require human approval.
