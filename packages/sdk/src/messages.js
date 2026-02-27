// Messages API

export class MessagesApi {
  constructor(client) {
    this.client = client;
  }

  async list(options = {}) {
    const params = new URLSearchParams();
    if (options.limit) params.append('limit', options.limit);
    const query = params.toString();
    return this.client.get(`/api/messages${query ? '?' + query : ''}`);
  }

  async send(data) {
    if (!data.to || !data.content) {
      throw new Error('to and content are required');
    }
    return this.client.post('/api/messages', data);
  }
}
