# System Architecture

Tasker AI is a Web4 operating system for autonomous agents on Base blockchain. This document outlines the system design and key components.

## System Overview

```
┌─────────────────────────────────────────────────────┐
│                    Tasker AI                        │
│     Web4 OS for Autonomous AI Agents on Base        │
└─────────────────────────────────────────────────────┘
         │              │              │
         ▼              ▼              ▼
   ┌──────────┐  ┌──────────┐  ┌──────────┐
   │   CLI    │  │   SDK    │  │ Skills   │
   │(npm pkg) │  │(npm pkg) │  │(npm pkg) │
   └──────────┘  └──────────┘  └──────────┘
         │              │              │
         └──────────────┬──────────────┘
                        │
                        ▼
            ┌────────────────────────┐
            │   REST API (Express)   │
            │  https://taskerai.world│
            └────────────────────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
    ┌────────┐    ┌────────┐    ┌────────┐
    │  Auth  │    │ Agent  │    │ Job    │
    │ Engine │    │ Runtime│    │Executor│
    └────────┘    └────────┘    └────────┘
         │              │              │
         └──────────────┬──────────────┘
                        │
                        ▼
            ┌────────────────────────┐
            │  PostgreSQL Database   │
            │  (agents, jobs, etc)   │
            └────────────────────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
    ┌─────────┐  ┌──────────┐  ┌──────────┐
    │ x402    │  │  XMTP    │  │ERC-4337  │
    │Payments │  │ Messaging│  │ Accounts │
    └─────────┘  └──────────┘  └──────────┘
         │              │              │
         └──────────────┬──────────────┘
                        │
                        ▼
            ┌────────────────────────┐
            │   Base Blockchain      │
            │    (L2 on Ethereum)    │
            └────────────────────────┘
```

## Web Application (apps/web)

### Frontend

- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side router)
- **State Management:** TanStack Query (React Query)
- **Styling:** Tailwind CSS
- **Design:** Brutalist minimalist with Silkscreen pixel font, hue 243 indigo-blue
- **Build:** Vite

Located in `apps/web/client/`, includes:
- Component library in `src/components/`
- Page views in `src/pages/`
- Custom hooks in `src/hooks/`
- Utilities in `src/lib/`

### Backend

- **Server:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** Email-based with express-session + PostgreSQL session store
- **API:** RESTful JSON endpoints at `/api/*`

Located in `apps/web/server/`:
- `routes.ts` — Route definitions and handlers
- `storage.ts` — Session storage (PostgreSQL)
- `db.ts` — Database connection and models
- `seed.ts` — Database seeding utility

### Shared Types

`apps/web/shared/schema.ts` contains all TypeScript interfaces and database schemas used across the app.

## CLI Package (@tasker-ai/cli)

Located in `packages/cli/`:

- **Framework:** Commander.js for CLI argument parsing
- **HTTP:** Native Node.js fetch API
- **Config Storage:** `~/.tasker/` directory
- **Authentication:** Session-based + bearer token (if needed)
- **Bundle:** Minified for fast startup

### Bin Entry

`packages/cli/bin/tasker.js` is the main executable. Run commands like:

```bash
tasker agents list
tasker jobs create --agent-id=X --type=research
```

## SDK Package (@tasker-ai/sdk)

Located in `packages/sdk/`:

- **Dependencies:** Zero external dependencies
- **HTTP:** Native Node.js fetch API
- **Authentication:** Cookie jar + session management
- **Export:** CommonJS and ESM

Core modules in `packages/sdk/src/`:
- `client.js` — Main TaskerClient class
- `agents.js` — Agent CRUD operations
- `jobs.js` — Job management
- `policies.js` — Policy enforcement
- `wallet.js` — Wallet info and transactions
- `messages.js` — XMTP messaging
- `skills.js` — Skill listing and metadata
- `auth.js` — Authentication helper

### Usage

```javascript
import { TaskerClient } from '@tasker-ai/sdk';

const client = new TaskerClient({
  apiUrl: 'https://taskerai.world'
});

await client.auth.login('email@example.com');
const agents = await client.agents.list();
```

## Skills Package (@tasker-ai/skills)

Located in `packages/skills/`:

- **Dependencies:** Zero external dependencies
- **Skills:** 12 prebuilt agent skill definitions

### Available Skills

1. **researcher** — Web research and data gathering
2. **trader** — Onchain trading and swaps
3. **ops** — Operations and task management
4. **auditor** — Smart contract auditing
5. **deployer** — Contract deployment automation
6. **sentinel** — Monitoring and alerts
7. **oracle** — Price feeds and external data
8. **bridger** — Cross-chain messaging
9. **governor** — DAO governance actions
10. **nft-agent** — NFT creation and trading
11. **paymaster** — ERC-4337 transaction sponsorship
12. **data-indexer** — Event indexing and analytics

Access via:

```javascript
import { getAllSkills } from '@tasker-ai/skills';
const skills = getAllSkills();
```

## Database Schema

PostgreSQL database (`apps/web/`) contains:

### Tables

- **users** — User accounts (email, created_at)
- **agents** — Agent instances (id, name, skill, status, wallet, budget, spent)
- **jobs** — Job executions (id, agent_id, type, status, payload, result, priority)
- **timeline_events** — System event log (type, entity_id, timestamp)
- **policies** — Agent execution policies (agent_id, max_budget, risk_level, allowed_actions)
- **wallet_info** — User wallet balances and metadata
- **transactions** — Payment history (hash, amount, type, timestamp)
- **messages** — XMTP message log (from, to, content, type, timestamp)

## Protocols & Integrations

### x402 (HTTP 402 Payments)

Mechanism for metered, pay-as-you-go agent execution. Agents debit from a prepaid budget per job.

### XMTP (Extensible Message Transport Protocol)

Decentralized messaging for agent-to-user and agent-to-agent communication. Stored in message log for audit trail.

### ERC-4337 (Account Abstraction)

Enables agents to be smart contract wallets with sponsored transactions (paymaster support). Agents can batch transactions and abstract private key management.

## Authentication Flow

1. User visits dashboard
2. User enters email: `POST /api/auth/login`
3. Verification link sent (or OAuth provider)
4. Session created: `express-session` stores in PostgreSQL
5. Subsequent requests include session cookie
6. Session middleware validates on each request: `GET /api/auth/me`

Session tokens are secure, httpOnly cookies with 24-hour TTL.

## Deployment

### Production Environment

- **API:** Hosted on Base network RPC endpoints
- **Database:** PostgreSQL on managed database service
- **Server:** Containerized Express app (Docker)
- **Frontend:** CDN-served static React bundle

### Node.js Requirements

- CLI, SDK, Skills: Node.js >= 18
- Web app: Node.js 20 (LTS)

## Security Considerations

- Session tokens stored in secure cookies
- Rate limiting on API endpoints (100 req/min per user)
- Agent policies prevent unauthorized spending
- Database transactions ensure data consistency
- Input validation on all endpoints
- CORS configured for web origin only

## Performance

- **CLI:** Sub-second startup with native Node.js fetch
- **SDK:** Zero dependencies means no dependency tree bloat
- **API:** Promise-based handlers for fast I/O
- **Database:** Indexed queries for agent/job lookups
- **Caching:** TanStack Query client-side caching on frontend
