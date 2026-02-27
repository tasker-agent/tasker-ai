// Tasker AI SDK - Main entry point
// Zero-dependency JavaScript SDK for managing autonomous AI agents

export { TaskerClient } from './client.js';
export { AgentsApi } from './agents.js';
export { JobsApi } from './jobs.js';
export { SkillsApi } from './skills.js';
export { PoliciesApi } from './policies.js';
export { WalletApi } from './wallet.js';
export { MessagesApi } from './messages.js';
export { AuthApi } from './auth.js';

export default {
  TaskerClient: () => import('./client.js').then(m => m.TaskerClient)
};
