// Agent command handlers

export const list = async (options = {}) => {
  console.log('Fetching agents...');
  // API call would go here
};

export const get = async (id) => {
  if (!id) throw new Error('Agent ID is required');
  console.log(`Fetching agent: ${id}`);
  // API call would go here
};

export const create = async (options = {}) => {
  const { name, skill, budget } = options;
  if (!name || !skill) {
    throw new Error('Name and skill are required');
  }
  console.log(`Creating agent: ${name} (${skill})`);
  // API call would go here
};

export const deleteAgent = async (id) => {
  if (!id) throw new Error('Agent ID is required');
  console.log(`Deleting agent: ${id}`);
  // API call would go here
};

export default {
  list,
  get,
  create,
  deleteAgent
};
