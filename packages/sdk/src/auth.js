// Authentication API

export class AuthApi {
  constructor(client) {
    this.client = client;
  }

  async login(email) {
    if (!email) throw new Error('Email is required');
    return this.client.post('/api/auth/login', { email });
  }

  async me() {
    return this.client.get('/api/auth/me');
  }

  async logout() {
    return this.client.post('/api/auth/logout', {});
  }
}
