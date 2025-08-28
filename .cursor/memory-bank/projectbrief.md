# Project Brief

Purpose

- Build a Next.js application with a unified, responsive layout (Header, Sidebar, Content, Footer) and an authenticated experience. The app provides informational sections (activities, members, offices, legislation, gallery, news, contacts, etc.) and a protected area accessible after sign-in.

Core Requirements

- Use Next.js App Router (v15) with TypeScript and React 19.
- Provide global layout with shared chrome and responsive sidebar/mobile menu.
- Light/dark themes via next-themes; UI styled with Tailwind CSS v4 and shadcn/ui primitives.
- Client-side data fetching with TanStack Query 5, streamed hydration.
- Cookie-based authentication (encrypted) with middleware protection; public routes: `/sign-in`, `/sign-up`.
- Automatic token refresh via server actions and retry utilities.
- Pages scaffolded for: `activities`, `contacts`, `gallery`, `legislation`, `members`, `membership`, `news`, `offices`, `rights`, `status`, `structure`, `tasks`, and the root `/`.

Non-Goals (for now)

- No real backend integration yet (Mock API used). OpenAPI generator is configured for future integration.
- No role-based UI gating beyond basic access-token presence.

Success Criteria

- Navigation and protected routing work end-to-end with mock auth.
- Consistent UX across desktop/mobile; lints are clean; build is green.
