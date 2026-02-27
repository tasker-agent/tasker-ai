// Skill definitions for Tasker AI agents
// 12 prebuilt skills for autonomous task execution

export const SKILLS_DEFINITIONS = [
  {
    id: 'researcher',
    name: 'Researcher',
    description: 'Web research and data gathering',
    category: 'research',
    tags: ['web3', 'data', 'research'],
    capabilities: [
      'web-scraping',
      'data-analysis',
      'report-generation'
    ],
    requiredConfig: {
      searches: 'number',
      sources: 'array'
    }
  },
  {
    id: 'trader',
    name: 'Trader',
    description: 'Onchain trading and swaps',
    category: 'defi',
    tags: ['trading', 'swaps', 'dex'],
    capabilities: [
      'token-swaps',
      'liquidity-management',
      'position-trading'
    ],
    requiredConfig: {
      slippage: 'number',
      maxGasPrice: 'string'
    }
  },
  {
    id: 'ops',
    name: 'Operations',
    description: 'Operations and task management',
    category: 'automation',
    tags: ['ops', 'automation', 'tasks'],
    capabilities: [
      'task-scheduling',
      'workflow-automation',
      'batch-operations'
    ],
    requiredConfig: {
      concurrency: 'number',
      retries: 'number'
    }
  },
  {
    id: 'auditor',
    name: 'Auditor',
    description: 'Smart contract auditing and security analysis',
    category: 'security',
    tags: ['security', 'audit', 'smart-contracts'],
    capabilities: [
      'code-analysis',
      'vulnerability-detection',
      'compliance-check'
    ],
    requiredConfig: {
      severity: 'string',
      checkCoverage: 'boolean'
    }
  },
  {
    id: 'deployer',
    name: 'Deployer',
    description: 'Contract deployment and lifecycle management',
    category: 'deployment',
    tags: ['deployment', 'contracts'],
    capabilities: [
      'contract-deployment',
      'upgrade-management',
      'verification'
    ],
    requiredConfig: {
      network: 'string',
      optimization: 'number'
    }
  },
  {
    id: 'sentinel',
    name: 'Sentinel',
    description: 'Monitoring and alert system',
    category: 'monitoring',
    tags: ['monitoring', 'alerts'],
    capabilities: [
      'event-monitoring',
      'alerting',
      'metrics-tracking'
    ],
    requiredConfig: {
      pollInterval: 'number',
      alertThreshold: 'number'
    }
  },
  {
    id: 'oracle',
    name: 'Oracle',
    description: 'Price feeds and external data aggregation',
    category: 'data',
    tags: ['oracle', 'pricing', 'data-feeds'],
    capabilities: [
      'price-aggregation',
      'data-freshness',
      'multi-source-verification'
    ],
    requiredConfig: {
      sources: 'array',
      aggregationMethod: 'string'
    }
  },
  {
    id: 'bridger',
    name: 'Bridger',
    description: 'Cross-chain messaging and asset bridging',
    category: 'interoperability',
    tags: ['bridges', 'cross-chain'],
    capabilities: [
      'message-passing',
      'asset-bridging',
      'chain-verification'
    ],
    requiredConfig: {
      supportedChains: 'array',
      bridgeProtocols: 'array'
    }
  },
  {
    id: 'governor',
    name: 'Governor',
    description: 'DAO governance and voting participation',
    category: 'governance',
    tags: ['governance', 'voting', 'dao'],
    capabilities: [
      'proposal-voting',
      'delegation',
      'governance-tracking'
    ],
    requiredConfig: {
      votingPower: 'number',
      proposals: 'array'
    }
  },
  {
    id: 'nft-agent',
    name: 'NFT Agent',
    description: 'NFT creation, trading, and management',
    category: 'nft',
    tags: ['nft', 'trading'],
    capabilities: [
      'minting',
      'trading',
      'collection-management'
    ],
    requiredConfig: {
      collection: 'string',
      royalties: 'number'
    }
  },
  {
    id: 'paymaster',
    name: 'Paymaster',
    description: 'ERC-4337 transaction sponsorship and relaying',
    category: 'infrastructure',
    tags: ['4337', 'relaying', 'transactions'],
    capabilities: [
      'transaction-sponsorship',
      'gasless-operations',
      'fee-abstraction'
    ],
    requiredConfig: {
      entrypoint: 'string',
      sponsoringLimit: 'number'
    }
  },
  {
    id: 'data-indexer',
    name: 'Data Indexer',
    description: 'Event indexing and graph querying',
    category: 'indexing',
    tags: ['indexing', 'analytics', 'events'],
    capabilities: [
      'event-indexing',
      'graph-queries',
      'analytics'
    ],
    requiredConfig: {
      indexingService: 'string',
      entities: 'array'
    }
  }
];
