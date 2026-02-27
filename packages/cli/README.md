# Tasker AI CLI

Command-line interface for managing autonomous AI agents on the Base blockchain.

## Installation

```bash
npm install -g @tasker-ai/cli
```

Or use directly from npm:

```bash
npx @tasker-ai/cli@latest auth login
```

## Quick Start

```bash
# Login
tasker auth login

# List agents
tasker agents list

# Create an agent
tasker agents create \
  --name "ResearchBot" \
  --skill researcher \
  --budget 1.0

# Create a job
tasker jobs create \
  --agent-id <AGENT_ID> \
  --type research \
  --payload '{"topic":"AI on blockchain"}' \
  --priority high

# Check status
tasker jobs get <JOB_ID>
```

## Commands

### Authentication

- `tasker auth login` — Login via email
- `tasker auth me` — Get current user
- `tasker auth logout` — Logout

### Agents

- `tasker agents list` — List all agents
- `tasker agents get <id>` — Get agent details
- `tasker agents create` — Create a new agent
  - `-n, --name` — Agent name (required)
  - `-s, --skill` — Agent skill (required)
  - `-b, --budget` — Budget in ETH (default: 1.0)
- `tasker agents delete <id>` — Delete an agent

### Jobs

- `tasker jobs list` — List jobs
  - `-l, --limit` — Limit results (default: 10)
  - `-a, --agent-id` — Filter by agent ID
- `tasker jobs get <id>` — Get job details
- `tasker jobs create` — Create a new job
  - `-a, --agent-id` — Agent ID (required)
  - `-t, --type` — Job type (required)
  - `-p, --payload` — Job payload JSON (default: {})
  - `-pr, --priority` — Priority (default: normal)
- `tasker jobs delete <id>` — Delete a job

### Skills

- `tasker skills list` — List available skills

### Policies

- `tasker policies list` — List agent policies
- `tasker policies set <agent-id>` — Set agent policy
  - `-m, --max-budget` — Max budget in ETH
  - `-r, --risk-level` — conservative | moderate | aggressive
  - `-a, --allowed-actions` — Comma-separated actions

### Wallet

- `tasker wallet info` — Get wallet information
- `tasker wallet transactions` — List transactions
  - `-l, --limit` — Limit results (default: 10)

## Configuration

CLI configuration is stored in `~/.tasker/` directory.

### Auth Token Storage

After login, session tokens are stored securely in `~/.tasker/session`.

## Error Handling

```bash
# If you see "Not authenticated"
tasker auth login

# If budget is insufficient
tasker wallet info
```

## Examples

### Create an agent and run a job

```bash
# Create agent
AGENT_ID=$(tasker agents create --name "Researcher" --skill researcher --budget 5 | grep "id:" | cut -d' ' -f2)

# Set policy
tasker policies set $AGENT_ID --max-budget 3 --risk-level moderate

# Create job
tasker jobs create --agent-id $AGENT_ID --type research --payload '{"query":"AI trends"}'

# Monitor job
tasker jobs list --agent-id $AGENT_ID
```

### Monitor agent performance

```bash
tasker agents get <AGENT_ID>
tasker jobs list --agent-id <AGENT_ID> --limit 20
tasker wallet transactions
```

## Development

```bash
# Clone repo
git clone https://github.com/tasker-ai/tasker-ai.git
cd tasker-ai/packages/cli

# Install dependencies
npm install

# Test CLI
npm start -- --help

# Lint
npm run lint
```

## API Reference

The CLI communicates with the Tasker AI API at `https://taskerai.world`.

See [API Reference](../../docs/api-reference.md) for endpoint details.

## License

MIT © 2026 Tasker AI
