// Agents API

export class AgentsApi {
  constructor(client) {
    this.client = client;
  }

  async list(options = {}) {
    const params = new URLSearchParams();
    if (options.limit) params.append('limit', options.limit);
    const query = params.toString();
    return this.client.get(`/api/agents${query ? '?' + query : ''}`);
  }

  async get(id) {
    if (!id) throw new Error('Agent ID is required');
    return this.client.get(`/api/agents/${id}`);
  }

  async create(data) {
    if (!data.name || !data.skill) {
      throw new Error('name and skill are required');
    }
    return this.client.post('/api/agents', data);
  }

  async update(id, data) {
    if (!id) throw new Error('Agent ID is required');
    return this.client.patch(`/api/agents/${id}`, data);
  }

  async delete(id) {
    if (!id) throw new Error('Agent ID is required');
    return this.client.delete(`/api/agents/${id}`);
  }
}
