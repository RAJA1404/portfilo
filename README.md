# Raja K C Portfolio

[![CI](https://github.com/RAJA1404/portfilo/actions/workflows/ci.yml/badge.svg)](https://github.com/RAJA1404/portfilo/actions/workflows/ci.yml)
[![Deploy](https://github.com/RAJA1404/portfilo/actions/workflows/deploy.yml/badge.svg)](https://github.com/RAJA1404/portfilo/actions/workflows/deploy.yml)

Premium recruiter-focused developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis smooth scrolling.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quality Checks

Run the same validation used in CI:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## CI/CD

This repository includes an industry-standard GitHub Actions pipeline:

- CI runs on every push and pull request.
- CI installs dependencies, runs ESLint, checks TypeScript, and builds the Next.js app.
- Production deployment runs only after CI passes on the `main` branch.
- Vercel deployment uses GitHub Secrets for credentials.

Required deployment secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Full setup instructions are available in [docs/ci-cd.md](docs/ci-cd.md).
