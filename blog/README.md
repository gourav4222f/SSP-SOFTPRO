# Simple Blog (Next.js frontend + Express backend)

This workspace contains a minimal blog demo.

- frontend: Next.js app (port 3000)
- backend: Express API storing posts in a JSON file (port 4000)

Quick start:

1. Start backend
   - cd backend
   - npm install
   - npm run start

2. Start frontend
   - cd frontend
   - npm install
   - create `.env.local` with NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
   - npm run dev
