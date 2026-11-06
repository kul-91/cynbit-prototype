# Cynbit Solution Blueprint — Technical Report

## Opportunity

Cynbit's live contact page invites prospective clients to explain their project and promises a tailored strategic overview. The visible contact path centers on email and phone, so a prospective client has to decide what to write and receives no immediate feedback on what the first conversation might cover. That creates avoidable friction at a high-intent point in the journey.

## Solution

The prototype adds a three-step guided intake experience to turn a visitor's initial idea into a useful discussion brief. It asks about the service area, the underlying challenge and desired outcome, timing, and contact details. The server returns a service-specific approach, three suggested first steps, and questions to explore together. The visitor can copy the brief or open a prefilled email to Cynbit.

The output is explicitly framed as an initial discussion aid, not a quote or commitment. No budget or delivery estimate is invented. The current prototype does not persist personal information or send it to Cynbit; the email action is initiated by the visitor.

## Architecture

- **Next.js App Router** provides the page and a Node.js-compatible server endpoint.
- **React and TypeScript** implement the multi-step client experience, validation feedback, and result state.
- **`POST /api/blueprint`** validates required fields, bounds free-text lengths, and maps the selected service to deterministic recommendations. It returns structured JSON and a 400 response for invalid input.
- **CSS** provides a responsive layout without a component or animation dependency.
- **No database, analytics, or AI provider** is used. This keeps the demo self-contained and avoids retaining sensitive project descriptions.

## Performance and production path

The page is statically renderable, with a small client interaction layer and one same-origin JSON request when the visitor submits. Recommendation logic is local to the API route, so generation has no third-party model latency. The CSS is dependency-light and mobile-responsive. Google Fonts are currently loaded from Google Fonts; self-hosting those fonts would remove that runtime dependency and improve predictability under restrictive networks.

Before production, add a consent-aware persistence and CRM handoff if lead storage is required, plus rate limiting, spam protection, privacy/retention language, server-side observability, and end-to-end accessibility checks. Performance impact should be measured against the current contact journey with real traffic; this prototype does not claim measured conversion or Core Web Vitals gains.

## Run and deploy

Use `npm install` and `npm run dev` for local development. Deploy as a standard Next.js application on a compatible host. No live deployment or remote repository has been created from this workspace because no hosting or GitHub account connection is available here.
