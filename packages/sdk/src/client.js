// Main TaskerClient class
// Provides unified access to all Tasker AI APIs

import { AuthApi } from './auth.js';
import { AgentsApi } from './agents.js';
import { JobsApi } from './jobs.js';
import { SkillsApi } from './skills.js';
import { PoliciesApi } from './policies.js';
import { WalletApi } from './wallet.js';
import { MessagesApi } from './messages.js';

export class TaskerClient {
  constructor(options = {}) {
    this.apiUrl = options.apiUrl || 'https://taskerai.world';
    this.timeout = options.timeout || 30000;
    
    // Initialize API modules
    this.auth = new AuthApi(this);
    this.agents = new AgentsApi(this);
    this.jobs = new JobsApi(this);
    this.skills = new SkillsApi(this);
    this.policies = new PoliciesApi(this);
    this.wallet = new WalletApi(this);
    this.messages = new MessagesApi(this);
  }

  async request(method, endpoint, data = null, options = {}) {
    const url = `${this.apiUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    };

    const config = {
      method,
      headers,
      timeout: this.timeout,
      ...options
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(error.error || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  async get(endpoint, options = {}) {
    return this.request('GET', endpoint, null, options);
  }

  async post(endpoint, data, options = {}) {
    return this.request('POST', endpoint, data, options);
  }

  async patch(endpoint, data, options = {}) {
    return this.request('PATCH', endpoint, data, options);
  }

  async delete(endpoint, options = {}) {
    return this.request('DELETE', endpoint, null, options);
  }
}
