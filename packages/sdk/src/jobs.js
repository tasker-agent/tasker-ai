// Jobs API

export class JobsApi {
  constructor(client) {
    this.client = client;
  }

  async list(options = {}) {
    const params = new URLSearchParams();
    if (options.limit) params.append('limit', options.limit);
    if (options.agentId) params.append('agentId', options.agentId);
    if (options.status) params.append('status', options.status);
    const query = params.toString();
    return this.client.get(`/api/jobs${query ? '?' + query : ''}`);
  }

  async get(id) {
    if (!id) throw new Error('Job ID is required');
    return this.client.get(`/api/jobs/${id}`);
  }

  async create(data) {
    if (!data.agentId || !data.type) {
      throw new Error('agentId and type are required');
    }
    return this.client.post('/api/jobs', data);
  }

  async update(id, data) {
    if (!id) throw new Error('Job ID is required');
    return this.client.patch(`/api/jobs/${id}`, data);
  }

  async delete(id) {
    if (!id) throw new Error('Job ID is required');
    return this.client.delete(`/api/jobs/${id}`);
  }
}
