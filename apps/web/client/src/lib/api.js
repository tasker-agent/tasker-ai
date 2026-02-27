// API utilities
// Helper functions for API calls

const API_URL = import.meta.env.VITE_API_URL || '';

export async function api(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export const APIClient = {
  getAgents: () => api('/api/agents'),
  createAgent: (data) => api('/api/agents', { method: 'POST', body: JSON.stringify(data) }),
  getJobs: () => api('/api/jobs'),
  createJob: (data) => api('/api/jobs', { method: 'POST', body: JSON.stringify(data) }),
  getSkills: () => api('/api/skills'),
  login: (email) => api('/api/auth/login', { method: 'POST', body: JSON.stringify({ email }) }),
  getMe: () => api('/api/auth/me'),
  logout: () => api('/api/auth/logout', { method: 'POST' })
};
