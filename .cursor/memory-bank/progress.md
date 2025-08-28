# Progress

What works

- Global layout with `Header`, `Sidebar`, `Footer`; mobile menu included.
- Static pages scaffolded for all sidebar sections; root page renders `MainContent`.
- Auth flow via mock API: sign-in, sign-up, logout, token refresh; cookies encrypted.
- Middleware guards protected routes; retry logic on 401 via `withAuthRetry`.
- Lints clean.

Next steps

- Replace MockAuthApi with real OpenAPI client (`gen-api`) when backend is ready.
- Add role-based UI gating and protected pages content.
- Expand tests and add e2e checks for auth + navigation.
