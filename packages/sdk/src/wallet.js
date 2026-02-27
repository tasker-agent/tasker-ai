// Wallet API

export class WalletApi {
  constructor(client) {
    this.client = client;
  }

  async info() {
    return this.client.get('/api/wallet');
  }

  async transactions(options = {}) {
    const params = new URLSearchParams();
    if (options.limit) params.append('limit', options.limit);
    const query = params.toString();
    return this.client.get(`/api/transactions${query ? '?' + query : ''}`);
  }
}
