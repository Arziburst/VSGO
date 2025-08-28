# Tech Context

Runtime & Frameworks

- Next.js 15.3 (App Router), React 19, TypeScript 5.
- Tailwind CSS v4 with `tailwindcss-animate` plugin; next-themes for theming.
- TanStack Query 5 with `@tanstack/react-query-next-experimental` for streamed hydration.

Key Packages

- `jose` for cookie encryption, `axios` reserved for future OpenAPI client.
- `@vercel/analytics` and `@vercel/speed-insights` integrated.
- `react-hook-form`, `zod`/`yup` available for forms/validation.

Project Conventions

- UI text in code is English. ESLint 9 config enforced via `eslint.config.js`.
- Scripts: `dev` uses Turbopack; `gen-api` prepared for OpenAPI generation to `src/openapi-client`.

Config

- `next.config.ts` enables large server action body size.
- `middleware.ts` protects routes except `/sign-in` and `/sign-up`.
- `constants.ts` defines routes, cookie name, cache times, and helpers for `API_ROOT`/`SECRET_KEY`.
