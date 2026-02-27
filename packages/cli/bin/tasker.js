#!/usr/bin/env node

import { program } from 'commander';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), 'utf8')
);

program
  .name('tasker')
  .description('CLI for Tasker AI - Manage autonomous AI agents on Base blockchain')
  .version(pkg.version);

// Auth commands
program
  .command('auth login')
  .description('Login to Tasker AI')
  .action(() => {
    console.log('Opening login page...');
    console.log('Enter your email to receive a verification link.');
  });

program
  .command('auth me')
  .description('Get current authenticated user')
  .action(() => {
    console.log('Fetching current user...');
  });

program
  .command('auth logout')
  .description('Logout from Tasker AI')
  .action(() => {
    console.log('Logging out...');
  });

// Agent commands
program
  .command('agents list')
  .description('List all agents')
  .option('-l, --limit <number>', 'Limit results', '10')
  .action((options) => {
    console.log('Fetching agents...');
    console.log('Limit:', options.limit);
  });

program
  .command('agents get <id>')
  .description('Get agent details')
  .action((id) => {
    console.log(`Fetching agent: ${id}`);
  });

program
  .command('agents create')
  .description('Create a new agent')
  .requiredOption('-n, --name <string>', 'Agent name')
  .requiredOption('-s, --skill <string>', 'Agent skill')
  .option('-b, --budget <number>', 'Budget in ETH', '1.0')
  .action((options) => {
    console.log('Creating agent...');
    console.log('Name:', options.name);
    console.log('Skill:', options.skill);
    console.log('Budget:', options.budget);
  });

program
  .command('agents delete <id>')
  .description('Delete an agent')
  .action((id) => {
    console.log(`Deleting agent: ${id}`);
  });

// Job commands
program
  .command('jobs list')
  .description('List all jobs')
  .option('-l, --limit <number>', 'Limit results', '10')
  .option('-a, --agent-id <string>', 'Filter by agent ID')
  .action((options) => {
    console.log('Fetching jobs...');
    if (options.agentId) console.log('Agent:', options.agentId);
  });

program
  .command('jobs get <id>')
  .description('Get job details')
  .action((id) => {
    console.log(`Fetching job: ${id}`);
  });

program
  .command('jobs create')
  .description('Create a new job')
  .requiredOption('-a, --agent-id <string>', 'Agent ID')
  .requiredOption('-t, --type <string>', 'Job type')
  .option('-p, --payload <json>', 'Job payload', '{}')
  .option('-pr, --priority <string>', 'Priority', 'normal')
  .action((options) => {
    console.log('Creating job...');
    console.log('Agent:', options.agentId);
    console.log('Type:', options.type);
    console.log('Priority:', options.priority);
  });

program
  .command('jobs delete <id>')
  .description('Delete a job')
  .action((id) => {
    console.log(`Deleting job: ${id}`);
  });

// Policy commands
program
  .command('policies list')
  .description('List agent policies')
  .action(() => {
    console.log('Fetching policies...');
  });

program
  .command('policies set <agent-id>')
  .description('Set agent policy')
  .option('-m, --max-budget <number>', 'Max budget')
  .option('-r, --risk-level <string>', 'Risk level (conservative|moderate|aggressive)')
  .option('-a, --allowed-actions <string>', 'Comma-separated allowed actions')
  .action((agentId, options) => {
    console.log(`Setting policy for agent: ${agentId}`);
  });

// Skills commands
program
  .command('skills list')
  .description('List available skills')
  .action(() => {
    console.log('Available skills:');
    const skills = [
      'researcher', 'trader', 'ops', 'auditor', 'deployer',
      'sentinel', 'oracle', 'bridger', 'governor', 'nft-agent',
      'paymaster', 'data-indexer'
    ];
    skills.forEach((s, i) => console.log(`  ${i + 1}. ${s}`));
  });

// Wallet commands
program
  .command('wallet info')
  .description('Get wallet information')
  .action(() => {
    console.log('Fetching wallet info...');
  });

program
  .command('wallet transactions')
  .description('List wallet transactions')
  .option('-l, --limit <number>', 'Limit results', '10')
  .action((options) => {
    console.log('Fetching transactions...');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
