// Policies command handlers

export const list = async () => {
  console.log('Fetching agent policies...');
  // API call would go here
};

export const set = async (agentId, options = {}) => {
  if (!agentId) throw new Error('Agent ID is required');
  console.log(`Setting policy for agent: ${agentId}`);
  // API call would go here
};

export default {
  list,
  set
};
