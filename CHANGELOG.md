# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-02-27

### Added

#### Core Features
- ✨ Initial monorepo setup with 3 npm packages and web app
- ✨ CLI package (@tasker-ai/cli) with full command interface
- ✨ SDK package (@tasker-ai/sdk) with zero dependencies
- ✨ Skills package (@tasker-ai/skills) with 12 prebuilt skills
- ✨ Web dashboard with React frontend and Express backend

#### CLI (@tasker-ai/cli)
- ✨ Authentication commands: login, me, logout
- ✨ Agent management: list, get, create, delete
- ✨ Job management: list, get, create, delete
- ✨ Skill listing with 12 prebuilt options
- ✨ Policy management: list, set
- ✨ Wallet operations: info, transactions
- ✨ Commander.js integration for CLI parsing

#### SDK (@tasker-ai/sdk)
- ✨ TaskerClient main class with unified API access
- ✨ Authentication API (login, me, logout)
- ✨ Agents API (list, get, create, update, delete)
- ✨ Jobs API (list, get, create, update, delete)
- ✨ Skills API (list, get)
- ✨ Policies API (list, get, set)
- ✨ Wallet API (info, transactions)
- ✨ Messages API (list, send)
- ✨ Zero external dependencies
- ✨ Native fetch API integration
- ✨ Error handling and validation

#### Skills (@tasker-ai/skills)
- ✨ 12 prebuilt agent skills:
  - Researcher: Web research and data gathering
  - Trader: Onchain trading and swaps
  - Operations: Operations and task management
  - Auditor: Smart contract auditing
  - Deployer: Contract deployment automation
  - Sentinel: Monitoring and alert system
  - Oracle: Price feeds and external data
  - Bridger: Cross-chain messaging
  - Governor: DAO governance and voting
  - NFT Agent: NFT creation and trading
  - Paymaster: ERC-4337 transaction sponsorship
  - Data Indexer: Event indexing and analytics
- ✨ Skill metadata with capabilities and configuration
- ✨ Filtering by tag and ID

#### Web Application
- ✨ React 18 frontend with TypeScript
- ✨ Express.js backend with session authentication
- ✨ PostgreSQL database integration
- ✨ Page routes: Home, Agents, Jobs, Settings
- ✨ React Query for server state management
- ✨ Wouter for client-side routing
- ✨ Tailwind CSS for styling
- ✨ RESTful API endpoints for agents, jobs, policies, wallet, messages
- ✨ Email-based authentication with session cookies
- ✨ Shared TypeScript types across client and server

#### DevOps & CI/CD
- ✨ GitHub Actions CI workflow
  - Lint checks on all packages
  - Import verification for CLI, SDK, Skills
  - Matrix strategy for testing all packages
- ✨ Automated publishing workflows
  - CLI publishing on cli-v* tags
  - SDK publishing on sdk-v* tags
  - Skills publishing on skills-v* tags
  - Automatic GitHub release creation
- ✨ Dependabot configuration for dependency updates
- ✨ GitHub issue templates (bug reports, feature requests)
- ✨ GitHub PR template with checklist
- ✨ CODEOWNERS for team code review assignments

#### Documentation
- ✨ Getting Started Guide
  - Installation instructions for CLI, SDK, Skills
  - Authentication walkthrough
  - First agent creation and job execution
  - Policy and budget management
- ✨ API Reference
  - 30+ endpoint documentation
  - Request/response examples
  - curl examples for all endpoints
  - Error handling reference
- ✨ Architecture Guide
  - System overview diagram
  - Component descriptions
  - Protocol explanations (x402, XMTP, ERC-4337)
  - Database schema
- ✨ Development Guide
  - Project setup instructions
  - Development workflow for each package
  - Testing and linting guides
  - Git workflow and branching strategy
  - Publishing procedures
- ✨ Quick Start Guide
  - 5-minute setup
  - Common commands
  - Troubleshooting
- ✨ Contributing Guide
  - Code conventions
  - Testing requirements
  - Commit message format
  - Release procedures

#### Configuration & Tools
- ✨ ESLint configuration for code quality
- ✨ Prettier configuration for code formatting
- ✨ VS Code settings and recommended extensions
- ✨ Environment configuration templates
- ✨ Git attributes and ignore patterns
- ✨ npm publish script
- ✨ Monorepo package.json with workspaces

### Fixed
- 🐛 Fixed CLI executable permissions
- 🐛 Fixed SDK import paths
- 🐛 Fixed web app Vite configuration
- 🐛 Fixed environment variable loading
- 🐛 Fixed package.json script configurations

### Security
- 🔒 Session-based authentication with httpOnly cookies
- 🔒 CSRF protection ready (can be implemented)
- 🔒 Input validation on all endpoints
- 🔒 Rate limiting configuration ready
- 🔒 .env secrets management

### Infrastructure
- 🏗️ Monorepo structure with npm workspaces
- 🏗️ Docker-ready configuration
- 🏗️ PostgreSQL database schema
- 🏗️ Session storage implementation
- 🏗️ Error handling middleware

## [Unreleased]

### Planned
- 🔮 Database migrations with Drizzle ORM
- 🔮 Real-time job status updates with WebSockets
- 🔮 Advanced agent policy templates
- 🔮 Job history and analytics dashboard
- 🔮 Multi-chain agent support
- 🔮 Agent marketplace
- 🔮 Advanced monitoring and alerting
- 🔮 Mobile app support
- 🔮 CLI auto-update feature
- 🔮 Interactive CLI mode

---

## Versioning

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking API changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

## Release Process

1. Update version in `package.json` files
2. Update this CHANGELOG.md
3. Commit with message "chore: bump version to X.Y.Z"
4. Create git tag: `git tag vX.Y.Z`
5. Push tag: `git push origin vX.Y.Z`
6. GitHub Actions automatically publishes to npm

For individual package releases:
- CLI: `git tag cli-vX.Y.Z`
- SDK: `git tag sdk-vX.Y.Z`
- Skills: `git tag skills-vX.Y.Z`

## FAQ

**Q: How do I report a bug?**
A: Use GitHub Issues with the bug report template.

**Q: How do I suggest a feature?**
A: Use GitHub Issues with the feature request template.

**Q: How do I contribute code?**
A: Read CONTRIBUTING.md and submit a PR following the guidelines.

**Q: How do I publish a package?**
A: Tag the commit and push - CI handles the rest!
