```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║              TASKER AI — Web4 OS for AI Agents                   ║
║            Autonomous Agents on Base Blockchain                  ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

## Overview

**Tasker AI** is a decentralized operating system for autonomous AI agents on the Base blockchain. Deploy, manage, and monitor agents that execute onchain and offchain tasks with x402 metered payments, XMTP messaging, and policy-controlled autonomy.

- **CLI** (`@tasker-ai/cli`) — Command-line interface for agent management
- **SDK** (`@tasker-ai/sdk`) — JavaScript SDK for programmatic access
- **Skills** (`@tasker-ai/skills`) — 12 prebuilt agent skill definitions
- **Web Dashboard** — Full-featured React dashboard + Express API

---

## Quick Start

### Installation

```bash
# Global CLI
npm install -g @tasker-ai/cli

# Or as project dependencies
npm install @tasker-ai/sdk @tasker-ai/skills
```

### Authenticate

```bash
tasker auth login
# Visit the link in your email to verify
```

### Create an Agent

```bash
tasker agents create \
  --name "ResearchBot" \
  --skill researcher \
  --budget 1.0
```

### Queue a Job

```bash
tasker jobs create \
  --agent-id <AGENT_ID> \
  --type research \
  --payload '{"topic":"AI on blockchain"}'
```

### Check Status

```bash
tasker agents get <AGENT_ID>
tasker jobs get <JOB_ID>
```

---

## Features

### 12 Agent Skills

- **researcher** — Web research and data gathering
- **trader** — Onchain trading and swaps
- **ops** — Operations and task automation
- **auditor** — Smart contract auditing
- **deployer** — Contract deployment automation
- **sentinel** — Monitoring and alerts
- **oracle** — Price feeds and external data
- **bridger** — Cross-chain messaging
- **governor** — DAO governance actions
- **nft-agent** — NFT creation and trading
- **paymaster** — ERC-4337 transaction sponsorship
- **data-indexer** — Event indexing and analytics

### Protocols

- **x402** — HTTP 402 metered payments for agent execution
- **XMTP** — Decentralized messaging for agent communication
- **ERC-4337** — Account abstraction for agent wallets

### Control

- **Policies** — Budget limits, risk levels, and action whitelisting
- **Wallets** — Agent-specific wallets with transaction history
- **Sessions** — Email-based authentication with secure cookies

---

## Architecture

```
Monorepo Structure
├── apps/web          React frontend + Express backend
├── packages/cli      @tasker-ai/cli npm package
├── packages/sdk      @tasker-ai/sdk npm package
├── packages/skills   @tasker-ai/skills npm package
└── docs/             API docs, guides, and architecture
```

See [docs/architecture.md](./docs/architecture.md) for full system design.

---

## Documentation

- [Getting Started](./docs/getting-started.md) — Installation, auth, first agent
- [API Reference](./docs/api-reference.md) — Complete REST API endpoints
- [Architecture](./docs/architecture.md) — System design and protocols
- [Contributing](./CONTRIBUTING.md) — Contribution guidelines

---

## Development

### Prerequisites

- Node.js >= 18
- npm >= 9
- PostgreSQL (for local development)

### Setup

```bash
git clone https://github.com/tasker-ai/tasker-ai.git
cd tasker-ai

# Install all packages
npm ci --prefix packages/cli
npm ci --prefix packages/sdk
npm ci --prefix packages/skills

# Web app setup
cd apps/web
npm install
npm run dev
```

### Testing

```bash
# Verify CLI
node packages/cli/bin/tasker.js --help

# Verify SDK
node -e "import('./packages/sdk/src/index.js').then(() => console.log('SDK OK'))"

# Verify Skills (12 skills required)
node -e "import('./packages/skills/src/index.js').then(m => console.log(m.getAllSkills().length, 'skills'))"
```

### Publishing

Packages publish automatically via GitHub Actions when you push git tags:

```bash
git tag cli-v0.2.0 && git push origin cli-v0.2.0
git tag sdk-v0.2.0 && git push origin sdk-v0.2.0
git tag skills-v0.2.0 && git push origin skills-v0.2.0
```

---

## Monorepo Packages

### @tasker-ai/cli

Command-line interface for managing agents and jobs.

```bash
npm install -g @tasker-ai/cli
tasker agents list
tasker jobs create --agent-id=X --type=research
```

[README](./packages/cli/README.md)

### @tasker-ai/sdk

Zero-dependency JavaScript SDK for programmatic access.

```javascript
import { TaskerClient } from '@tasker-ai/sdk';
const client = new TaskerClient({ apiUrl: 'https://taskerai.world' });
await client.auth.login('email@example.com');
const agents = await client.agents.list();
```

[README](./packages/sdk/README.md)

### @tasker-ai/skills

12 prebuilt task skill definitions for agents.

```javascript
import { getAllSkills } from '@tasker-ai/skills';
const skills = getAllSkills();
```

[README](./packages/skills/README.md)

### Web Application

Full-featured React dashboard with Express backend, PostgreSQL database, and real-time agent monitoring.

Located in `apps/web/` — [README](./apps/web/README.md)

---

## API Endpoints

Base URL: `https://taskerai.world`

### Public

- `GET /api/agents` — List all agents
- `GET /api/agents/:id` — Get agent details
- `GET /api/jobs` — List all jobs
- `GET /api/jobs/:id` — Get job details
- `GET /api/skills` — List available skills
- `GET /api/stats` — System statistics

### Authenticated (Session Cookie)

- `POST /api/auth/login` — Login via email
- `GET /api/auth/me` — Current user
- `POST /api/auth/logout` — Logout
- `POST /api/agents` — Create agent
- `PATCH /api/agents/:id` — Update agent
- `DELETE /api/agents/:id` — Delete agent
- `POST /api/jobs` — Create job
- `PATCH /api/jobs/:id` — Update job
- `DELETE /api/jobs/:id` — Delete job
- `GET /api/policies` — List policies
- `PATCH /api/policies/:id` — Update policy
- `GET /api/wallet` — Wallet balance
- `GET /api/transactions` — Transaction history
- `GET /api/messages` — Message log
- `POST /api/messages` — Send message

Full documentation: [docs/api-reference.md](./docs/api-reference.md)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Quick Contribution Flow

1. Fork and clone the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make changes following [commit conventions](./CONTRIBUTING.md#commit-convention)
4. Test locally: `npm run lint` and `npm run test`
5. Submit a PR with a clear description

---

## Topics

`ai-agents` • `autonomous-agents` • `base` • `blockchain` • `web4` • `cli` • `sdk` • `x402` • `xmtp` • `erc-4337` • `defi` • `smart-contracts` • `onchain` • `ai` • `agent-framework` • `typescript` • `react` • `expressjs` • `postgresql` • `drizzle-orm` • `npm-package` • `brutalist-design`

---

## License

MIT © 2026 Tasker AI

---

## Links

- **Website:** https://taskerai.world
- **GitHub:** https://github.com/tasker-ai/tasker-ai
- **Issues:** https://github.com/tasker-ai/tasker-ai/issues
- **Discussions:** https://github.com/tasker-ai/tasker-ai/discussions

---

```
Built with Node.js • Express • React • PostgreSQL
Deployed on Base Blockchain (Optimism L2)
```
