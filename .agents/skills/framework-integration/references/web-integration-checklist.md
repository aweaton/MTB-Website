# Web integration contract reference (optional)

Load for material client/server, service/DB or authentication boundary changes. For a one-component UI styling change, keep this out of context.

## Interface worksheet
| Question | Decision to capture |
|---|---|
| User action | What starts the request, and can it fire twice? |
| HTTP request | Method, path, auth context, payload, validation and upload limits |
| Response | Success/error/empty status, schema, pagination and compatibility |
| Authority | Which rules must the server enforce, per actor and resource? |
| Failure handling | Timeout, offline, partial write, abort, retry, idempotency and cleanup |
| Versioning | Can old clients and new servers coexist? Are migrations required? |
| UX | Loading, error, empty, success, keyboard and focus behavior |
| Evidence | Which test verifies the boundary and where are logs/metrics? |

## Web security and reliability
- **Authorization:** validate access on the trusted server per resource/action, not by hiding a button or checking only that a user has logged in. Test cross-user and cross-tenant object access when relevant.
- **Input/output:** validate and bound incoming JSON, form values, file size/type and remote URLs; use parameterized queries and contextual output encoding. Guard against SSRF, unsafe file extraction and untrusted HTML.
- **Cookies/sessions:** consider `Secure`, `HttpOnly`, `SameSite` and applicable CSRF protections for state-changing cookie-authenticated requests.
- **CORS:** CORS is a browser access policy, not authorization or CSRF protection. Verify allowlisted origins, credential handling and preflight on affected routes; never use wildcard origins with credentials.
- **HTTP semantics:** use meaningful 2xx/4xx/5xx outcomes and stable error shapes. Ensure retries or duplicate submissions do not duplicate payments, records or destructive actions.
- **Secrets:** keep server-only tokens out of frontend bundles, URLs, stack traces, build artifacts and logs. Avoid exposing another user's data through cache or error responses.
- **Dependencies:** prefer existing libraries; review added parsers, network clients and authentication packages for version and supply-chain risk.

## Browser behavior
- Accessibility: semantic controls, accessible names, visible focus, keyboard operation and error messaging.
- Render idle/loading/empty/success/error states; handle races between overlapping responses and cancelled navigation.
- For SSR/server components, keep browser APIs on the client and avoid hydration divergence.
- Check responsive layout, validation feedback and what happens on slow connection or expired sessions.

## Select tests by risk
| Contract changed | Suggested test |
|---|---|
| Resource permissions | Anonymous, wrong user/tenant, expired session |
| Request payload | Missing, invalid, oversized, malformed body |
| Write side effects | Double-submit, timeout retry, transaction rollback |
| Cookie-based cross-origin | Allowed/blocked origin and preflight / CSRF as applicable |
| UI/API link | Loading/error/empty, network outage and recovery |
| API compatibility | Supported older client against updated server |

Choose a subset that tests the **actual changed boundary**. Report PASS/FAIL/NOT RUN and uncovered scenarios; do not mandate an end-to-end test suite for every UI edit.

## Primary references
- https://top10.owasp.org/2025/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- https://www.w3.org/WAI/WCAG22/quickref/
