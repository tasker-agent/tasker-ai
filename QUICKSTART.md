# Quick Start

Fast track to getting Tasker AI running locally.

## 5-Minute Setup

```bash
# 1. Clone
git clone https://github.com/tasker-ai/tasker-ai.git
cd tasker-ai

# 2. Install
npm install

# 3. Configure
cp .env.example .env.local

# 4. Run
npm run dev --workspaces

# 5. Open
# - CLI: npm start --workspace=packages/cli -- --help
# - SDK: node (then import)
# - Web: http://localhost:3000
```

## Using the CLI

```bash
# Show help
tasker --help

# Login
tasker auth login

# List agents
tasker agents list

# Create agent
tasker agents create --name "Bot" --skill researcher --budget 1

# Create job
tasker jobs create --agent-id <ID> --type research --payload '{"topic":"AI"}'

# Check status
tasker jobs get <JOB_ID>
```

## Using the SDK

```javascript
import { TaskerClient } from '@tasker-ai/sdk';

const client = new TaskerClient();

// Login
await client.auth.login('email@example.com');

// Create agent
const agent = await client.agents.create({
  name: 'Researcher',
  skill: 'researcher',
  budget: 5
});

// Create job
const job = await client.jobs.create({
  agentId: agent.id,
  type: 'research',
  payload: { topic: 'AI' }
});

// Check job
const result = await client.jobs.get(job.id);
console.log(result.status);
```

## Using the Web Dashboard

1. Visit `http://localhost:3000`
2. Login with email
3. Create agents
4. Monitor jobs
5. Manage policies

## Next Steps

- Read [DEVELOPMENT.md](DEVELOPMENT.md) for detailed setup
- Read [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Check [docs/getting-started.md](docs/getting-started.md) for user guide
- Review [docs/architecture.md](docs/architecture.md) for system design

## File Structure

```
tasker-ai/
├── packages/cli       @tasker-ai/cli npm package
├── packages/sdk       @tasker-ai/sdk npm package
├── packages/skills    @tasker-ai/skills npm package
├── apps/web           Web dashboard
├── docs/              Documentation
└── scripts/           Build scripts
```

## Key Files

| File | Purpose |
|------|---------|
| `.github/workflows/` | CI/CD pipelines |
| `package.json` | Monorepo configuration |
| `.env.example` | Environment template |
| `CONTRIBUTING.md` | How to contribute |
| `LICENSE` | MIT License |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm install` fails | Delete `node_modules` and `package-lock.json`, try again |
| Port 3000 in use | Change `PORT=3001 npm run dev` |
| Database error | Check `.env.local` `DATABASE_URL` |
| CLI not found | Run `npm install -g @tasker-ai/cli` |

## Support

- Open an issue: https://github.com/tasker-ai/tasker-ai/issues
- Join discussions: https://github.com/tasker-ai/tasker-ai/discussions
- Read docs: https://docs.taskerai.world
