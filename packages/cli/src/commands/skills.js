// Skills command handlers

export const list = async () => {
  console.log('Available agent skills:');
  const skills = [
    { id: 'researcher', name: 'Researcher', description: 'Web research and data gathering' },
    { id: 'trader', name: 'Trader', description: 'Onchain trading and swaps' },
    { id: 'ops', name: 'Operations', description: 'Operations and task management' },
    { id: 'auditor', name: 'Auditor', description: 'Smart contract auditing' },
    { id: 'deployer', name: 'Deployer', description: 'Contract deployment automation' },
    { id: 'sentinel', name: 'Sentinel', description: 'Monitoring and alerts' },
    { id: 'oracle', name: 'Oracle', description: 'Price feeds and external data' },
    { id: 'bridger', name: 'Bridger', description: 'Cross-chain messaging' },
    { id: 'governor', name: 'Governor', description: 'DAO governance actions' },
    { id: 'nft-agent', name: 'NFT Agent', description: 'NFT creation and trading' },
    { id: 'paymaster', name: 'Paymaster', description: 'ERC-4337 transaction sponsorship' },
    { id: 'data-indexer', name: 'Data Indexer', description: 'Event indexing and analytics' }
  ];
  
  skills.forEach((skill, i) => {
    console.log(`\n${i + 1}. ${skill.name} (${skill.id})`);
    console.log(`   ${skill.description}`);
  });
};

export default {
  list
};
