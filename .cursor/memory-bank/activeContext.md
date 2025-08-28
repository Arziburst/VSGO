# Active Context

Current focus

- Establish stable Memory Bank reflecting the present architecture, routes, and auth patterns.

Recent changes

- Implemented global shell with `Header`, `Sidebar`, `Footer`; `MainContent` for `/`.
- Created static pages for: activities, contacts, gallery, legislation, members, membership, news, offices, rights, status, structure, tasks.
- Integrated TanStack Query provider with streamed hydration and devtools in development.
- Added encrypted auth cookie, middleware protection, and `withAuthRetry` for automatic refresh.

Immediate next steps

- Wire real API via OpenAPI client when backend URL/spec is finalized.
- Fill pages with actual content and role-based conditions as needed.
