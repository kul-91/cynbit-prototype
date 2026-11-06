# Cynbit Solution Blueprint

A Next.js / TypeScript prototype for a guided project-intake experience inspired by Cynbit's contact page. Visitors describe an opportunity and receive a tailored discussion brief before reaching out.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. The API endpoint is `POST /api/blueprint`. It validates input and builds a deterministic, service-specific brief. The prototype has no database or external AI dependency; contact details are not persisted.

## Technical report

See [TECHNICAL_REPORT.md](./TECHNICAL_REPORT.md) for the opportunity, architecture, stack, and performance considerations.

## Deployment

This project is ready for a Next.js hosting platform such as Vercel. Connect the repository and deploy with the default Next.js build settings. A public URL and GitHub repository require access to the relevant hosting and GitHub accounts.
