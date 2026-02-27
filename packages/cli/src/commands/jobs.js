// Job command handlers

export const list = async (options = {}) => {
  console.log('Fetching jobs...');
  // API call would go here
};

export const get = async (id) => {
  if (!id) throw new Error('Job ID is required');
  console.log(`Fetching job: ${id}`);
  // API call would go here
};

export const create = async (options = {}) => {
  const { agentId, type, payload, priority } = options;
  if (!agentId || !type) {
    throw new Error('agentId and type are required');
  }
  console.log(`Creating job: ${type} for agent ${agentId}`);
  // API call would go here
};

export const deleteJob = async (id) => {
  if (!id) throw new Error('Job ID is required');
  console.log(`Deleting job: ${id}`);
  // API call would go here
};

export default {
  list,
  get,
  create,
  deleteJob
};
