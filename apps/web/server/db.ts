// Database connection and models
// PostgreSQL with Drizzle ORM

export const DB_SCHEMA = {
  users: {
    id: 'uuid primary key default gen_random_uuid()',
    email: 'text unique not null',
    createdAt: 'timestamp default now()'
  },

  agents: {
    id: 'uuid primary key default gen_random_uuid()',
    userId: 'uuid references users(id)',
    name: 'text not null',
    skill: 'text not null',
    status: 'text default "active"',
    wallet: 'text unique',
    budget: 'decimal',
    spent: 'decimal default 0',
    createdAt: 'timestamp default now()',
    updatedAt: 'timestamp default now()'
  },

  jobs: {
    id: 'uuid primary key default gen_random_uuid()',
    agentId: 'uuid references agents(id)',
    type: 'text not null',
    status: 'text default "pending"',
    payload: 'jsonb',
    result: 'jsonb',
    priority: 'text default "normal"',
    createdAt: 'timestamp default now()',
    updatedAt: 'timestamp default now()'
  },

  timelineEvents: {
    id: 'uuid primary key default gen_random_uuid()',
    type: 'text not null',
    agentId: 'uuid references agents(id)',
    jobId: 'uuid references jobs(id)',
    metadata: 'jsonb',
    timestamp: 'timestamp default now()'
  },

  policies: {
    id: 'uuid primary key default gen_random_uuid()',
    agentId: 'uuid references agents(id) unique',
    maxBudget: 'decimal',
    riskLevel: 'text default "moderate"',
    allowedActions: 'text[]',
    createdAt: 'timestamp default now()',
    updatedAt: 'timestamp default now()'
  },

  walletInfo: {
    id: 'uuid primary key default gen_random_uuid()',
    userId: 'uuid references users(id) unique',
    address: 'text unique',
    balance: 'decimal default 0',
    spent: 'decimal default 0',
    lastTransaction: 'timestamp',
    createdAt: 'timestamp default now()',
    updatedAt: 'timestamp default now()'
  },

  transactions: {
    id: 'uuid primary key default gen_random_uuid()',
    walletId: 'uuid references walletInfo(id)',
    hash: 'text',
    amount: 'decimal not null',
    type: 'text not null',
    status: 'text default "pending"',
    timestamp: 'timestamp default now()'
  },

  messages: {
    id: 'uuid primary key default gen_random_uuid()',
    from: 'text',
    to: 'text',
    content: 'text not null',
    type: 'text',
    read: 'boolean default false',
    timestamp: 'timestamp default now()'
  }
};

export const initializeDatabase = async () => {
  // Database initialization logic
};

export const getDatabase = () => {
  // Return database connection
};
