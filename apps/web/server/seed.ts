// Database seeding
// Populate initial data

export const seedDatabase = async () => {
  console.log('Seeding database...');

  const skills = [
    { id: 'researcher', name: 'Researcher' },
    { id: 'trader', name: 'Trader' },
    { id: 'ops', name: 'Operations' },
    { id: 'auditor', name: 'Auditor' },
    { id: 'deployer', name: 'Deployer' },
    { id: 'sentinel', name: 'Sentinel' },
    { id: 'oracle', name: 'Oracle' },
    { id: 'bridger', name: 'Bridger' },
    { id: 'governor', name: 'Governor' },
    { id: 'nft-agent', name: 'NFT Agent' },
    { id: 'paymaster', name: 'Paymaster' },
    { id: 'data-indexer', name: 'Data Indexer' }
  ];

  // Insert skills into database
  // for (const skill of skills) {
  //   await db.insert(skills).values(skill);
  // }

  console.log('Database seeding complete');
};
