# Development Guide

## Quick Setup

```bash
# Clone repository
git clone https://github.com/tasker-ai/tasker-ai.git
cd tasker-ai

# Install all dependencies
npm install

# Copy environment configuration
cp .env.example .env.local

# Set up database (if using PostgreSQL locally)
createdb tasker_ai_dev

# Run database migration/seeding (optional)
npm run seed --workspace=apps/web
```

## Development Workflow

### 1. CLI Development

```bash
# Navigate to CLI package
cd packages/cli

# Install dependencies
npm install

# Test CLI commands
npm start -- agents list
npm start -- skills list

# Run linter
npm run lint

# Test CLI
npm test
```

### 2. SDK Development

```bash
cd packages/sdk

# Install (no external deps)
npm install

# Test SDK
npm test

# Verify imports
node -e "import('./src/index.js').then(() => console.log('SDK OK'))"

# Run linter
npm run lint
```

### 3. Skills Development

```bash
cd packages/skills

# Install
npm install

# Test skills
npm test

# Verify 12 skills exist
node -e "import('./src/index.js').then(m => console.log(m.getAllSkills().length, 'skills found'))"

# Run linter
npm run lint
```

### 4. Web App Development

```bash
cd apps/web

# Install dependencies
npm install

# Start development server
npm run dev

# The app runs on http://localhost:3000
# Backend runs on http://localhost:3001

# Build for production
npm run build

# Run linter
npm run lint
```

## Testing

```bash
# Test all packages
npm test --workspaces

# Test specific package
npm test --workspace=packages/cli

# Watch mode (not all packages support this yet)
npm test -- --watch
```

## Linting

```bash
# Lint all packages
npm run lint --workspaces

# Fix linting issues
npm run lint -- --fix --workspaces
```

## Building

```bash
# Build all packages
npm run build --workspaces

# Build specific package
npm run build --workspace=apps/web
```

## Git Workflow

### Branch Naming

```
feat/description          # New features
fix/description           # Bug fixes
docs/description          # Documentation
chore/description         # Maintenance
```

### Commit Message Format

```
feat: add new agent skill
fix: resolve authentication issue
docs: update api reference
chore: update dependencies
```

Use conventional commits for clear git history.

### Creating a Pull Request

1. Create a feature branch: `git checkout -b feat/my-feature`
2. Make changes and commit: `git commit -m "feat: my feature"`
3. Push: `git push origin feat/my-feature`
4. Open PR on GitHub

## Publishing Packages

### Manual Release

```bash
# Update version in package.json
# examples: 0.1.0 -> 0.2.0, 0.1.1, etc

# Tag and push (CI automates the rest)
git tag cli-v0.2.0 && git push origin cli-v0.2.0
git tag sdk-v0.2.0 && git push origin sdk-v0.2.0
git tag skills-v0.2.0 && git push origin skills-v0.2.0

# Or use the publish script
bash scripts/publish.sh 0.2.0
```

GitHub Actions will automatically publish to npm and create releases.

## Debugging

### CLI Debugging

```bash
# Print debug info
DEBUG=* npm start -- agents list

# Use Node debugger
node --inspect bin/tasker.js agents list
```

### SDK Debugging

```bash
# Import in Node REPL
node
> import { TaskerClient } from './src/index.js'
> const client = new TaskerClient()
```

### Web App Debugging

Open browser DevTools:
- Console for logs
- Network tab for API calls
- React DevTools for component state

### Database Debugging

```bash
# Connect to PostgreSQL
psql tasker_ai_dev

# View tables
\dt

# Query data
SELECT * FROM agents;
```

## Common Issues

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database Connection Error

```bash
# Verify PostgreSQL is running
psql postgres

# Check DATABASE_URL in .env.local
# Format: postgresql://user:password@localhost:5432/db_name
```

## Useful Commands

```bash
# Start all dev servers
npm run dev --workspaces

# Check git status
git status

# View git log
git log --oneline --graph --all

# View file tree
tree -L 3 -I 'node_modules'

# Count lines of code
find . -type f \( -name '*.js' -o -name '*.ts' -o -name '*.jsx' -o -name '*.tsx' \) ! -path '*/node_modules/*' | xargs wc -l
```

## Performance Tips

- Use `.env` to skip unnecessary startup operations
- Clear browser cache when switching branches
- Use npm workspaces to share dependencies
- Run linting before committing to catch issues early

## Additional Resources

- [CONTRIBUTING.md](CONTRIBUTING.md) — Contribution guidelines
- [docs/architecture.md](docs/architecture.md) — System architecture
- [docs/api-reference.md](docs/api-reference.md) — API documentation
- [packages/cli/README.md](packages/cli/README.md) — CLI package docs
- [packages/sdk/README.md](packages/sdk/README.md) — SDK package docs
- [packages/skills/README.md](packages/skills/README.md) — Skills package docs
