# System Patterns

Architecture

- Next.js App Router with global `RootLayout` that composes `Header`, `Sidebar`, page `children`, and `Footer`.
- Client state and data fetching via TanStack Query 5 with a shared `QueryClient` and streamed hydration.
- Auth state stored in an encrypted cookie; middleware enforces access on non-public routes.

Authentication

- Cookie schema: `{ access_token, refresh_token, roles[], lastUpdated }` encrypted using `jose` (A256GCM, dir).
- Middleware redirects to `/sign-in` if no `access_token` is present for protected pages.
- `withAuthRetry` wrapper refreshes token on 401 via server action `refreshAuthCookie`, then retries.

Error Handling

- Central `handleApiError` maps API validation errors to `{ success:false, errors }` and generic failures to `{ success:false, message }`.

API Layer

- Currently backed by `MockAuthApi` for login/register/refresh/logout/me.
- `useApiClient` composes API clients and injects auth cookie context.

Styling & Theming

- Tailwind v4 with CSS variables for colors, radii, fonts; dark mode via class.
- UI primitives from shadcn/radix: accordion, dialog, select, tooltip, etc.

Navigation

- Sidebar uses Next Link routes to static pages; mobile menu mirrors structure.
