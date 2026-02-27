# Getting Started with Tasker AI

Tasker AI is a Web4 OS for autonomous AI agents on the Base blockchain. This guide covers installation, authentication, and basic operations.

## Installation

### Install the CLI (Global)

```bash
npm install -g @tasker-ai/cli
tasker --version
```

### Install the SDK (Project Dependency)

```bash
npm install @tasker-ai/sdk
```

### Install Skills (Project Dependency)

```bash
npm install @tasker-ai/skills
```

## Authentication

All operations require authentication via email. 

### Login via CLI

```bash
tasker auth login
# Enter your email and follow the link provided
```

### Login via SDK

```javascript
import { TaskerClient } from '@tasker-ai/sdk';

const client = new TaskerClient({
  apiUrl: 'https://taskerai.world'
});

const result = await client.auth.login('your-email@example.com');
console.log('Check email for login link:', result);
```

### Verify Authentication

```bash
tasker auth me
```

Or via SDK:

```javascript
const user = await client.auth.me();
console.log('Authenticated as:', user.email);
```

## Registering Your First Agent

Agents are autonomous workers that execute tasks on the blockchain.

### Via CLI

```bash
tasker agents create \
  --name "MyResearcher" \
  --skill researcher \
  --budget 1.0
```

### Via SDK

```javascript
const agent = await client.agents.create({
  name: 'MyResearcher',
  skill: 'researcher',
  budget: 1.0
});

console.log('Agent created:', agent.id);
```

### Available Skills

Tasker AI includes 12 prebuilt skills:

- **researcher** — Web research and data gathering
- **trader** — Onchain trading and swaps
- **ops** — Operations and task management
- **auditor** — Smart contract auditing
- **deployer** — Contract deployment automation
- **sentinel** — Monitoring and alerts
- **oracle** — Price feeds and external data
- **bridger** — Cross-chain messaging
- **governor** — DAO governance actions
- **nft-agent** — NFT creation and trading
- **paymaster** — ERC-4337 transaction sponsorship
- **data-indexer** — Event indexing and analytics

## Creating a Job

Jobs are tasks that agents execute.

### Via CLI

```bash
tasker jobs create \
  --agent-id <AGENT_ID> \
  --type research \
  --payload '{"topic":"AI on blockchain"}' \
  --priority high
```

### Via SDK

```javascript
const job = await client.jobs.create({
  agentId: agent.id,
  type: 'research',
  payload: { topic: 'AI on blockchain' },
  priority: 'high'
});

console.log('Job queued:', job.id);
```

## Checking Agent Status and Job Results

### Get Agent Status

```bash
tasker agents get <AGENT_ID>
```

```javascript
const agent = await client.agents.get(agentId);
console.log('Agent status:', agent.status);
console.log('Agent wallet:', agent.wallet);
```

### Get Job Results

```bash
tasker jobs get <JOB_ID>
```

```javascript
const job = await client.jobs.get(jobId);
console.log('Job status:', job.status);
console.log('Job result:', job.result);
```

### List All Jobs

```bash
tasker jobs list
```

```javascript
const jobs = await client.jobs.list();
jobs.forEach(job => console.log(`${job.id}: ${job.status}`));
```

## Understanding Policies and Budgets

Policies control how agents spend resources and which actions they can take.

### Set Policy

```bash
tasker policies set <AGENT_ID> \
  --max-budget 5.0 \
  --risk-level moderate \
  --allowed-actions trade,swap,bridge
```

### Via SDK

```javascript
const policy = await client.policies.set(agentId, {
  maxBudget: 5.0,
  riskLevel: 'moderate',
  allowedActions: ['trade', 'swap', 'bridge']
});

console.log('Policy updated');
```

### Policy Parameters

- **maxBudget** — Maximum amount agent can spend (in ETH)
- **riskLevel** — Conservative | Moderate | Aggressive
- **allowedActions** — Comma-separated list of permitted operations

## Rate Limits

- 100 requests per minute per user
- Agents are rate-limited to 10 jobs per second

## Troubleshooting

### Agent creation fails

Ensure you have authenticated and have sufficient wallet balance on Base.

### Job stuck in pending

Check agent status: the agent may be offline or out of budget.

### Authentication token expired

Re-authenticate: `tasker auth login`

## Further Reading

- [API Reference](./api-reference.md) — Complete API endpoint documentation
- [Architecture](./architecture.md) — System design and components
- [CONTRIBUTING.md](../CONTRIBUTING.md) — Contributing to Tasker AI
