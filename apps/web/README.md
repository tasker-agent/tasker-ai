# Web Dashboard

React frontend and Express.js backend for Tasker AI.

## Project Structure

```
apps/web/
├── client/                 React frontend
│   ├── src/
│   │   ├── components/     React components
│   │   ├── pages/          Page components
│   │   ├── hooks/          Custom React hooks
│   │   ├── lib/            Utilities and helpers
│   │   └── App.jsx         Root component
│   └── vite.config.js      Vite configuration
├── server/                 Express backend
│   ├── index.js            Server entry point
│   ├── routes.ts           API route definitions
│   ├── db.ts               Database connection
│   ├── storage.ts          Session storage
│   └── seed.ts             Database seeding
├── shared/                 Shared types
│   └── schema.ts           TypeScript interfaces
└── package.json
```

## Setup

### Prerequisites

- Node.js >= 18
- PostgreSQL database
- npm >= 9

### Environment Variables

Create `.env.local` in `apps/web/`:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/tasker_ai
SESSION_SECRET=your-secret-key
API_URL=https://taskerai.world
DEVELOPMENT=true
```

### Install Dependencies

```bash
cd apps/web
npm install
```

### Initialize Database

```bash
npm run seed
```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Production

Build and start:

```bash
npm run build
npm start
```

## Features

### Frontend

- **React 18** with TypeScript
- **Wouter** for client-side routing
- **TanStack Query** for server state management
- **Tailwind CSS** for styling
- **Brutalist design** with Silkscreen pixel font

### Backend

- **Express.js** server with TypeScript
- **PostgreSQL** database with Drizzle ORM
- **Email-based authentication** with express-session
- **RESTful API** endpoints

### Database Tables

- **users** — User accounts
- **agents** — AI agent instances
- **jobs** — Job executions
- **timeline_events** — Event log
- **policies** — Agent execution policies
- **wallet_info** — Wallet balances
- **transactions** — Payment history
- **messages** — Message log

## Documentation

- [Getting Started](../../docs/getting-started.md)
- [API Reference](../../docs/api-reference.md)
- [Architecture](../../docs/architecture.md)

## License

MIT © 2026 Tasker AI
