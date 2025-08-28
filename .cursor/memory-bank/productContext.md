# Product Context

Why it exists

- Provide an informational and member-oriented portal with authenticated access. Users can sign up/in, browse public information pages, and (later) interact with protected features.

Target Users

- Prospective and current members; admins (future). For now, a generic `user` role is assumed.

Experience Goals

- Clear, consistent navigation via sidebar with section groups and subitems.
- Fast initial load with streamed hydration; smooth transitions.
- Accessible UI with keyboard navigation and tooltips.

Content Architecture

- Top-level sections mirror sidebar: Activities, Members, Offices, Legislation, Gallery, News, Contacts, Membership, Rights, Status, Structure, Tasks.
- Root landing loads `MainContent` that showcases primary sections and links.

Localization

- UI copy is in English in code; external comms can be localized later.
