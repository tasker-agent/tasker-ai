# Tasker AI SDK

Zero-dependency JavaScript SDK for managing autonomous AI agents on the Base blockchain.

## Installation

```bash
npm install @tasker-ai/sdk
```

## Quick Start

```javascript
import { TaskerClient } from '@tasker-ai/sdk';

// Initialize client
const client = new TaskerClient({
  apiUrl: 'https://taskerai.world'
});

// Login
await client.auth.login('user@example.com');

// Get current user
const user = await client.auth.me();
console.log('Logged in as:', user.email);

// List agents
const agents = await client.agents.list();
console.log('Agents:', agents);

// Create an agent
const agent = await client.agents.create({
  name: 'ResearchBot',
  skill: 'researcher',
  budget: 1.0
});

// Create a job
const job = await client.jobs.create({
  agentId: agent.id,
  type: 'research',
  payload: { topic: 'AI on blockchain' },
  priority: 'high'
});

// Check job status
const checkJob = await client.jobs.get(job.id);
console.log('Job status:', checkJob.status);

// Get wallet info
const wallet = await client.wallet.info();
console.log('Wallet balance:', wallet.balance);
```

## API Reference

### Client Initialization

```javascript
const client = new TaskerClient({
  apiUrl: 'https://taskerai.world',  // Optional, default shown
  timeout: 30000                       // Optional, request timeout in ms
});
```

### Authentication

```javascript
// Login
await client.auth.login('email@example.com');

// Get current user
const user = await client.auth.me();

// Logout
await client.auth.logout();
```

### Agents

```javascript
// List agents
const agents = await client.agents.list({ limit: 10 });

// Get agent details
const agent = await client.agents.get(agentId);

// Create agent
const newAgent = await client.agents.create({
  name: 'MyAgent',
  skill: 'researcher',
  wallet: '0x...',
  budget: 5.0
});

// Update agent
await client.agents.update(agentId, { status: 'paused' });

// Delete agent
await client.agents.delete(agentId);
```

### Jobs

```javascript
// List jobs
const jobs = await client.jobs.list({
  limit: 20,
  agentId: 'agent-123',
  status: 'completed'
});

// Get job details
const job = await client.jobs.get(jobId);

// Create job
const newJob = await client.jobs.create({
  agentId: 'agent-123',
  type: 'research',
  payload: { query: 'AI trends' },
  priority: 'high'
});

// Update job
await client.jobs.update(jobId, { status: 'cancelled' });

// Delete job
await client.jobs.delete(jobId);
```

### Skills

```javascript
// List available skills
const skills = await client.skills.list();

// Get skill details
const skill = await client.skills.get('researcher');
```

### Policies

```javascript
// List policies
const policies = await client.policies.list();

// Get policy for agent
const policy = await client.policies.get(agentId);

// Set agent policy
await client.policies.set(agentId, {
  maxBudget: 10.0,
  riskLevel: 'moderate',
  allowedActions: ['trade', 'swap', 'bridge']
});
```

### Wallet

```javascript
// Get wallet info
const wallet = await client.wallet.info();
// => { address: '0x...', balance: 25.5, spent: 0.75, ... }

// Get transactions
const transactions = await client.wallet.transactions({ limit: 10 });
```

### Messages

```javascript
// List messages
const messages = await client.messages.list({ limit: 20 });

// Send message
await client.messages.send({
  to: '0x...',
  content: 'Hello agent',
  type: 'command'
});
```

## Error Handling

All methods throw errors on failure. Handle them appropriately:

```javascript
try {
  const agent = await client.agents.get('invalid-id');
} catch (error) {
  console.error('Error:', error.message);
}
```

## Browser Usage

The SDK is designed for Node.js but can also work in modern browsers with fetch support:

```html
<script type="module">
  import { TaskerClient } from 'https://cdn.jsdelivr.net/npm/@tasker-ai/sdk@latest';
  
  const client = new TaskerClient();
  const agents = await client.agents.list();
</script>
```

## Development

```bash
# Clone repo
git clone https://github.com/tasker-ai/tasker-ai.git
cd tasker-ai/packages/sdk

# Install dependencies (none for SDK!)
npm install

# Test
npm run test

# Lint
npm run lint
```

## License

MIT © 2026 Tasker AI
