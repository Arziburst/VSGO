# Active Context

- Introduced brand color variables in globals.css: --brand-primary (#7a97e3), --brand-secondary (purple-600) plus translucent mixes.
- Replaced hardcoded hex and purple classes across Header, Sidebar, MobileMenu, MainContent, Footer, and all page headings with CSS variables.
- NavLink/MobileMenu use gradient from brand vars for active state.

Next:
- If brand palette changes, edit only globals.css to propagate.
