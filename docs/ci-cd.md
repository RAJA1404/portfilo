# CI/CD Setup

This portfolio uses GitHub Actions to validate every push and pull request before production deployment.

## Workflows

### CI

File: `.github/workflows/ci.yml`

Runs on:

- `push`
- `pull_request`

Validation steps:

- Checkout repository
- Setup Node.js 20
- Install dependencies with `npm ci`
- Run ESLint with `npm run lint`
- Run TypeScript checks with `npx tsc --noEmit`
- Build the Next.js 16 app with `npm run build`

If any step fails, the workflow fails and deployment will not run.

### Vercel Deployment

File: `.github/workflows/deploy.yml`

Runs after the CI workflow completes successfully on the `main` branch.

Deployment steps:

- Checkout the validated commit
- Setup Node.js 20
- Install dependencies with `npm ci`
- Pull Vercel production environment settings
- Build with Vercel
- Deploy the prebuilt output to production

## Required GitHub Secrets

Add these repository secrets in GitHub:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## How To Configure Secrets

1. Open the GitHub repository.
2. Go to `Settings`.
3. Open `Secrets and variables`.
4. Select `Actions`.
5. Click `New repository secret`.
6. Add each required Vercel secret.

## Getting Vercel Values

### VERCEL_TOKEN

Create a token from the Vercel dashboard:

1. Open Vercel account settings.
2. Go to `Tokens`.
3. Create a new token.
4. Save it as `VERCEL_TOKEN` in GitHub Actions secrets.

### VERCEL_ORG_ID and VERCEL_PROJECT_ID

After linking the project locally or in Vercel, these values are available in:

```text
.vercel/project.json
```

Use:

- `orgId` as `VERCEL_ORG_ID`
- `projectId` as `VERCEL_PROJECT_ID`

Do not commit `.vercel/project.json` if it contains environment-specific project metadata.

## Deployment Behavior

Production deployment only happens when:

- Code is pushed to `main`
- CI completes successfully
- Vercel secrets are configured correctly

This ensures every deployment is backed by linting, type checking, and a production build.
