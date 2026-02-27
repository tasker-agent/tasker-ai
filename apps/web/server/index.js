// Web app entry point
// Express server for Tasker AI dashboard

import express from 'express';
import session from 'express-session';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), 'utf8')
);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'dev-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, version: pkg.version });
});

// System stats endpoint
app.get('/api/stats', (req, res) => {
  res.json({
    totalAgents: 0,
    totalJobs: 0,
    totalValueProcessed: 0,
    uptime: process.uptime()
  });
});

// Authentication endpoints
app.post('/api/auth/login', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ ok: false, error: 'Email required' });
  }
  req.session.email = email;
  res.json({ ok: true, email });
});

app.get('/api/auth/me', (req, res) => {
  if (!req.session.email) {
    return res.status(401).json({ authenticated: false });
  }
  res.json({ authenticated: true, email: req.session.email });
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ ok: false, error: 'Logout failed' });
    }
    res.json({ ok: true });
  });
});

// Agents endpoints (placeholder)
app.get('/api/agents', (req, res) => {
  res.json([]);
});

app.post('/api/agents', (req, res) => {
  if (!req.session.email) {
    return res.status(401).json({ ok: false, error: 'Not authenticated' });
  }
  res.status(201).json({
    id: 'agent-1',
    name: req.body.name,
    skill: req.body.skill,
    status: 'active'
  });
});

// Jobs endpoints (placeholder)
app.get('/api/jobs', (req, res) => {
  res.json([]);
});

app.post('/api/jobs', (req, res) => {
  if (!req.session.email) {
    return res.status(401).json({ ok: false, error: 'Not authenticated' });
  }
  res.status(201).json({
    id: 'job-1',
    agentId: req.body.agentId,
    type: req.body.type,
    status: 'pending'
  });
});

// Skills endpoints
app.get('/api/skills', (req, res) => {
  const skills = [
    { id: 'researcher', name: 'Researcher' },
    { id: 'trader', name: 'Trader' },
    { id: 'ops', name: 'Operations' },
    { id: 'auditor', name: 'Auditor' },
    { id: 'deployer', name: 'Deployer' },
    { id: 'sentinel', name: 'Sentinel' },
    { id: 'oracle', name: 'Oracle' },
    { id: 'bridger', name: 'Bridger' },
    { id: 'governor', name: 'Governor' },
    { id: 'nft-agent', name: 'NFT Agent' },
    { id: 'paymaster', name: 'Paymaster' },
    { id: 'data-indexer', name: 'Data Indexer' }
  ];
  res.json(skills);
});

// Timeline endpoints (placeholder)
app.get('/api/timeline', (req, res) => {
  res.json([]);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    ok: false,
    error: err.message || 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Tasker AI server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
