# API Reference

Tasker AI provides a REST API for managing agents, jobs, policies, and more.

**Base URL:** https://taskerai.world

---

## Authentication

All authenticated endpoints require a valid session cookie from `/api/auth/login`.

---

## Public Endpoints

### Get System Stats

```
GET /api/stats
```

Returns overall system statistics.

**Response:**
```json
{
  "totalAgents": 1024,
  "totalJobs": 5000,
  "totalValueProcessed": 125.5,
  "uptime": 99.95
}
```

**curl:**
```bash
curl https://taskerai.world/api/stats
```

---

### List Agents (Public)

```
GET /api/agents
```

Returns list of all agents.

**Response:**
```json
[
  {
    "id": "agent-1",
    "name": "ResearchBot",
    "skill": "researcher",
    "status": "active",
    "createdAt": "2026-02-27T00:00:00Z"
  }
]
```

**curl:**
```bash
curl https://taskerai.world/api/agents
```

---

### Get Agent (Public)

```
GET /api/agents/:id
```

Returns a specific agent.

**Response:**
```json
{
  "id": "agent-1",
  "name": "ResearchBot",
  "skill": "researcher",
  "status": "active",
  "wallet": "0x...",
  "budget": 5.0,
  "spent": 0.25,
  "createdAt": "2026-02-27T00:00:00Z"
}
```

**curl:**
```bash
curl https://taskerai.world/api/agents/agent-1
```

---

### List Jobs (Public)

```
GET /api/jobs
```

Returns list of all jobs.

**Response:**
```json
[
  {
    "id": "job-1",
    "agentId": "agent-1",
    "type": "research",
    "status": "completed",
    "createdAt": "2026-02-27T00:00:00Z"
  }
]
```

**curl:**
```bash
curl https://taskerai.world/api/jobs
```

---

### Get Job (Public)

```
GET /api/jobs/:id
```

Returns a specific job.

**Response:**
```json
{
  "id": "job-1",
  "agentId": "agent-1",
  "type": "research",
  "status": "completed",
  "payload": { "topic": "AI on blockchain" },
  "result": { "data": [...] },
  "priority": "high",
  "createdAt": "2026-02-27T00:00:00Z"
}
```

**curl:**
```bash
curl https://taskerai.world/api/jobs/job-1
```

---

### Get Timeline

```
GET /api/timeline
```

Returns system event timeline.

**Response:**
```json
[
  {
    "id": "event-1",
    "type": "agent_created",
    "agentId": "agent-1",
    "timestamp": "2026-02-27T00:00:00Z"
  }
]
```

**curl:**
```bash
curl https://taskerai.world/api/timeline
```

---

### List Skills

```
GET /api/skills
```

Returns all available agent skills.

**Response:**
```json
[
  {
    "id": "researcher",
    "name": "Researcher",
    "description": "Web research and data gathering"
  },
  {
    "id": "trader",
    "name": "Trader",
    "description": "Onchain trading and swaps"
  }
]
```

**curl:**
```bash
curl https://taskerai.world/api/skills
```

---

## Authenticated Endpoints

### Login

```
POST /api/auth/login
```

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "ok": true,
  "email": "user@example.com"
}
```

**curl:**
```bash
curl -X POST https://taskerai.world/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com"}'
```

---

### Get Current User

```
GET /api/auth/me
```

**Response:**
```json
{
  "authenticated": true,
  "email": "user@example.com"
}
```

**curl:**
```bash
curl -b cookies.txt https://taskerai.world/api/auth/me
```

---

### Logout

```
POST /api/auth/logout
```

**Response:**
```json
{
  "ok": true
}
```

**curl:**
```bash
curl -X POST -b cookies.txt https://taskerai.world/api/auth/logout
```

---

### Create Agent

```
POST /api/agents
```

**Request:**
```json
{
  "name": "MyResearcher",
  "skill": "researcher",
  "wallet": "0x...",
  "budget": 1.0
}
```

**Response:**
```json
{
  "id": "agent-123",
  "name": "MyResearcher",
  "skill": "researcher",
  "wallet": "0x...",
  "budget": 1.0,
  "status": "active"
}
```

**curl:**
```bash
curl -X POST -b cookies.txt https://taskerai.world/api/agents \
  -H "Content-Type: application/json" \
  -d '{
    "name": "MyResearcher",
    "skill": "researcher",
    "wallet": "0x...",
    "budget": 1.0
  }'
```

---

### Update Agent Status

```
PATCH /api/agents/:id
```

**Request:**
```json
{
  "status": "paused"
}
```

**Response:**
```json
{
  "id": "agent-123",
  "status": "paused"
}
```

**curl:**
```bash
curl -X PATCH -b cookies.txt https://taskerai.world/api/agents/agent-123 \
  -H "Content-Type: application/json" \
  -d '{"status":"paused"}'
```

---

### Delete Agent

```
DELETE /api/agents/:id
```

**Response:**
```json
{
  "ok": true,
  "deleted": "agent-123"
}
```

**curl:**
```bash
curl -X DELETE -b cookies.txt https://taskerai.world/api/agents/agent-123
```

---

### Create Job

```
POST /api/jobs
```

**Request:**
```json
{
  "agentId": "agent-123",
  "type": "research",
  "payload": { "topic": "AI on blockchain" },
  "priority": "high"
}
```

**Response:**
```json
{
  "id": "job-456",
  "agentId": "agent-123",
  "type": "research",
  "status": "pending",
  "priority": "high"
}
```

**curl:**
```bash
curl -X POST -b cookies.txt https://taskerai.world/api/jobs \
  -H "Content-Type: application/json" \
  -d '{
    "agentId": "agent-123",
    "type": "research",
    "payload": {"topic":"AI on blockchain"},
    "priority": "high"
  }'
```

---

### Update Job Status

```
PATCH /api/jobs/:id
```

**Request:**
```json
{
  "status": "completed"
}
```

**Response:**
```json
{
  "id": "job-456",
  "status": "completed"
}
```

**curl:**
```bash
curl -X PATCH -b cookies.txt https://taskerai.world/api/jobs/job-456 \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'
```

---

### Delete Job

```
DELETE /api/jobs/:id
```

**Response:**
```json
{
  "ok": true,
  "deleted": "job-456"
}
```

**curl:**
```bash
curl -X DELETE -b cookies.txt https://taskerai.world/api/jobs/job-456
```

---

### Get Policies

```
GET /api/policies
```

**Response:**
```json
[
  {
    "agentId": "agent-123",
    "maxBudget": 5.0,
    "riskLevel": "moderate",
    "allowedActions": ["trade", "swap"]
  }
]
```

**curl:**
```bash
curl -b cookies.txt https://taskerai.world/api/policies
```

---

### Update Policy

```
PATCH /api/policies/:agentId
```

**Request:**
```json
{
  "maxBudget": 10.0,
  "riskLevel": "aggressive",
  "allowedActions": ["trade", "swap", "bridge"]
}
```

**Response:**
```json
{
  "agentId": "agent-123",
  "maxBudget": 10.0,
  "riskLevel": "aggressive",
  "allowedActions": ["trade", "swap", "bridge"]
}
```

**curl:**
```bash
curl -X PATCH -b cookies.txt https://taskerai.world/api/policies/agent-123 \
  -H "Content-Type: application/json" \
  -d '{
    "maxBudget": 10.0,
    "riskLevel": "aggressive",
    "allowedActions": ["trade", "swap", "bridge"]
  }'
```

---

### Get Wallet Info

```
GET /api/wallet
```

**Response:**
```json
{
  "address": "0x...",
  "balance": 25.5,
  "spent": 0.75,
  "lastTransaction": "2026-02-27T00:00:00Z"
}
```

**curl:**
```bash
curl -b cookies.txt https://taskerai.world/api/wallet
```

---

### Get Transactions

```
GET /api/transactions
```

**Response:**
```json
[
  {
    "id": "tx-1",
    "hash": "0x...",
    "amount": 0.25,
    "type": "debit",
    "timestamp": "2026-02-27T00:00:00Z"
  }
]
```

**curl:**
```bash
curl -b cookies.txt https://taskerai.world/api/transactions
```

---

### Get Messages

```
GET /api/messages
```

**Response:**
```json
[
  {
    "id": "msg-1",
    "from": "agent-123",
    "to": "0x...",
    "content": "Task complete",
    "type": "notification",
    "timestamp": "2026-02-27T00:00:00Z"
  }
]
```

**curl:**
```bash
curl -b cookies.txt https://taskerai.world/api/messages
```

---

### Send Message

```
POST /api/messages
```

**Request:**
```json
{
  "to": "0x...",
  "content": "Hello agent",
  "type": "command"
}
```

**Response:**
```json
{
  "id": "msg-2",
  "to": "0x...",
  "content": "Hello agent",
  "type": "command",
  "timestamp": "2026-02-27T00:00:00Z"
}
```

**curl:**
```bash
curl -X POST -b cookies.txt https://taskerai.world/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "to": "0x...",
    "content": "Hello agent",
    "type": "command"
  }'
```

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "ok": false,
  "error": "Error message"
}
```

**HTTP Status Codes:**
- `200` — Success
- `400` — Bad request
- `401` — Unauthorized
- `404` — Not found
- `429` — Rate limited
- `500` — Server error
