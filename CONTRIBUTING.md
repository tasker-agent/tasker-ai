# Contributing to Tasker AI

Thank you for your interest in contributing to Tasker AI! This document provides guidelines and instructions for contributing.

## Project Structure

Tasker AI is a monorepo containing:

- **packages/cli** — @tasker-ai/cli: Command-line interface for managing agents
- **packages/sdk** — @tasker-ai/sdk: JavaScript SDK for programmatic access
- **packages/skills** — @tasker-ai/skills: Prebuilt agent skill definitions
- **apps/web** — Web dashboard and API server

All packages use ES modules (type: module) and require Node.js >= 18.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/tasker-ai/tasker-ai.git
   cd tasker-ai
   ```

2. Create the necessary directories:
   ```bash
   mkdir -p .github/workflows .github/ISSUE_TEMPLATE
   mkdir -p apps/web packages/cli packages/sdk packages/skills
   mkdir -p docs/assets scripts
   ```

3. Install dependencies for each package:
   ```bash
   npm ci --prefix packages/cli
   npm ci --prefix packages/sdk
   npm ci --prefix packages/skills
   ```

4. For the web app:
   ```bash
   npm ci --prefix apps/web
   ```

## Development

### Working on the CLI

```bash
cd packages/cli
npm install
# Make your changes
npm run lint
node bin/tasker.js --help
```

### Working on the SDK

```bash
cd packages/sdk
npm install
# Make your changes
npm run lint
node -e "import('./src/index.js').then(() => console.log('Loaded'))"
```

### Working on Skills

```bash
cd packages/skills
npm install
# Make your changes
npm run lint
node -e "import('./src/index.js').then(m => console.log(m.getAllSkills().length, 'skills'))"
```

### Working on the Web App

```bash
cd apps/web
npm install
npm run dev
```

## Testing

Each package should be verified before committing:

```bash
# CLI verification
node packages/cli/bin/tasker.js --help

# SDK verification
node -e "import('./packages/sdk/src/index.js').then(() => console.log('SDK OK'))"

# Skills verification (must have exactly 12 skills)
node -e "import('./packages/skills/src/index.js').then(m => { if(m.getAllSkills().length === 12) console.log('Skills OK'); else process.exit(1) })"
```

The CI workflow runs these checks automatically on push and pull requests.

## Commit Convention

We use conventional commits to maintain a clear git history:

```
feat: Add new feature
fix: Fix a bug
docs: Update documentation
chore: Update dependencies or tooling
```

Examples:

```
git commit -m "feat: add new trader skill"
git commit -m "fix: resolve sdk authentication issue"
git commit -m "docs: update api-reference.md"
git commit -m "chore: update commander version"
```

## Pull Request Process

1. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Make your changes and test locally

3. Commit with conventional commit messages

4. Push to your fork and create a PR against `main`

5. Fill out the PR template completely

6. Ensure CI checks pass

7. Address review comments

## Releasing Packages

Releases are automated via git tags. To release a package:

1. Update the version in `packages/<pkg>/package.json`

2. Commit: `git commit -m "chore: bump version"`

3. Tag the commit:
   ```bash
   # CLI
   git tag cli-v0.2.0
   git push origin cli-v0.2.0

   # SDK
   git tag sdk-v0.2.0
   git push origin sdk-v0.2.0

   # Skills
   git tag skills-v0.2.0
   git push origin skills-v0.2.0
   ```

The GitHub Actions workflow will automatically publish to npm and create a release.

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming community for developers of all backgrounds and experience levels.

## Questions?

Open an issue or discussion if you have questions about contributing or the project in general.
