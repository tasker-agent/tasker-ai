// Shared types for Tasker AI
// Used across client and server

export interface User {
  id: string;
  email: string;
  createdAt: Date;
}

export interface Agent {
  id: string;
  userId: string;
  name: string;
  skill: string;
  status: 'active' | 'paused' | 'training' | 'offline';
  wallet: string;
  budget: number;
  spent: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Job {
  id: string;
  agentId: string;
  type: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
  payload: Record<string, any>;
  result?: Record<string, any>;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  createdAt: Date;
  updatedAt: Date;
}

export interface TimelineEvent {
  id: string;
  type: string;
  agentId?: string;
  jobId?: string;
  metadata: Record<string, any>;
  timestamp: Date;
}

export interface Policy {
  id: string;
  agentId: string;
  maxBudget?: number;
  riskLevel: 'conservative' | 'moderate' | 'aggressive';
  allowedActions?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WalletInfo {
  id: string;
  userId: string;
  address: string;
  balance: number;
  spent: number;
  lastTransaction?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  walletId: string;
  hash: string;
  amount: number;
  type: 'debit' | 'credit';
  status: 'pending' | 'confirmed' | 'failed';
  timestamp: Date;
}

export interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  type?: string;
  read: boolean;
  timestamp: Date;
}

export interface AgentSkill {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  tags: string[];
}

export interface SystemStats {
  totalAgents: number;
  totalJobs: number;
  totalValueProcessed: number;
  uptime: number;
}
