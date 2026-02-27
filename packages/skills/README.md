# Tasker AI Skills

12 prebuilt agent skill definitions for autonomous task execution.

## Installation

```bash
npm install @tasker-ai/skills
```

## Quick Start

```javascript
import { getAllSkills, getSkill } from '@tasker-ai/skills';

// Get all skills
const skills = getAllSkills();
console.log(`Available skills: ${skills.length}`);

// Get specific skill
const researcherSkill = getSkill('researcher');
console.log(researcherSkill);
// => {
//   id: 'researcher',
//   name: 'Researcher',
//   description: 'Web research and data gathering',
//   capabilities: ['web-scraping', 'data-analysis', 'report-generation'],
//   ...
// }

// Filter by tag
import { getSkillsByTag } from '@tasker-ai/skills';
const tradingSkills = getSkillsByTag('trading');
```

## Available Skills

### 1. Researcher
- **Description:** Web research and data gathering
- **Capabilities:** Web-scraping, data-analysis, report-generation
- **Tags:** web3, data, research

### 2. Trader
- **Description:** Onchain trading and swaps
- **Capabilities:** Token-swaps, liquidity-management, position-trading
- **Tags:** trading, swaps, dex

### 3. Operations
- **Description:** Operations and task management
- **Capabilities:** Task-scheduling, workflow-automation, batch-operations
- **Tags:** ops, automation, tasks

### 4. Auditor
- **Description:** Smart contract auditing and security analysis
- **Capabilities:** Code-analysis, vulnerability-detection, compliance-check
- **Tags:** security, audit, smart-contracts

### 5. Deployer
- **Description:** Contract deployment and lifecycle management
- **Capabilities:** Contract-deployment, upgrade-management, verification
- **Tags:** deployment, contracts

### 6. Sentinel
- **Description:** Monitoring and alert system
- **Capabilities:** Event-monitoring, alerting, metrics-tracking
- **Tags:** monitoring, alerts

### 7. Oracle
- **Description:** Price feeds and external data aggregation
- **Capabilities:** Price-aggregation, data-freshness, multi-source-verification
- **Tags:** oracle, pricing, data-feeds

### 8. Bridger
- **Description:** Cross-chain messaging and asset bridging
- **Capabilities:** Message-passing, asset-bridging, chain-verification
- **Tags:** bridges, cross-chain

### 9. Governor
- **Description:** DAO governance and voting participation
- **Capabilities:** Proposal-voting, delegation, governance-tracking
- **Tags:** governance, voting, dao

### 10. NFT Agent
- **Description:** NFT creation, trading, and management
- **Capabilities:** Minting, trading, collection-management
- **Tags:** nft, trading

### 11. Paymaster
- **Description:** ERC-4337 transaction sponsorship and relaying
- **Capabilities:** Transaction-sponsorship, gasless-operations, fee-abstraction
- **Tags:** 4337, relaying, transactions

### 12. Data Indexer
- **Description:** Event indexing and graph querying
- **Capabilities:** Event-indexing, graph-queries, analytics
- **Tags:** indexing, analytics, events

## Skill Structure

Each skill has:

```javascript
{
  id: 'skill-id',              // Unique identifier
  name: 'Skill Name',          // Display name
  description: '...',          // What it does
  category: 'category',        // Category for grouping
  tags: ['tag1', 'tag2'],      // Tags for filtering
  capabilities: [...],         // List of capabilities
  requiredConfig: {            // Configuration schema
    key: 'type'
  }
}
```

## API Reference

### `getAllSkills()`

Returns an array of all 12 skill definitions.

```javascript
const skills = getAllSkills();
console.log(skills.length); // 12
```

### `getSkill(skillId)`

Returns a specific skill definition by ID.

```javascript
const skill = getSkill('researcher');
```

### `getSkillById(id)`

Alias for `getSkill()`.

```javascript
const skill = getSkillById('trader');
```

### `getSkillsByTag(tag)`

Returns skills that have a specific tag.

```javascript
const tradingSkills = getSkillsByTag('trading');
const securitySkills = getSkillsByTag('security');
```

## Using Skills with Agents

When creating an agent, specify which skill it should use:

```javascript
import { TaskerClient } from '@tasker-ai/sdk';

const client = new TaskerClient();

// Create an agent with a specific skill
const agent = await client.agents.create({
  name: 'ResearchBot',
  skill: 'researcher',  // Must be a valid skill ID
  budget: 5.0
});
```

## Development

```bash
# Clone repo
git clone https://github.com/tasker-ai/tasker-ai.git
cd tasker-ai/packages/skills

# Install (no dependencies!)
npm install

# Test
npm run test

# Lint
npm run lint
```

## License

MIT © 2026 Tasker AI
