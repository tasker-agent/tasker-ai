// Policies API

export class PoliciesApi {
  constructor(client) {
    this.client = client;
  }

  async list() {
    return this.client.get('/api/policies');
  }

  async get(agentId) {
    if (!agentId) throw new Error('Agent ID is required');
    return this.client.get(`/api/policies/${agentId}`);
  }

  async set(agentId, data) {
    if (!agentId) throw new Error('Agent ID is required');
    return this.client.patch(`/api/policies/${agentId}`, data);
  }
}
