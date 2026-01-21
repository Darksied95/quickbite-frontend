# Quick Bite

Quick Bite is a modern frontend for a restaurant management system.  
It serves as a technical deep-dive into the Next.js App Router and the paradigm shift introduced by React Server Components (RSC).

---

## Project Intent

The primary goal of Quick Bite is to master the boundary between server and client rendering in modern React.

The project interfaces with an external NestJS backend, acting as a laboratory for:

- Optimizing initial page loads by shifting data fetching to the server

---

## Tech Stack

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- pnpm

**Backend**
- NestJS (External API)

---

## Architecture & Evolution

### Current Architecture

Quick Bite currently operates as a decoupled frontend, communicating with a separate NestJS service.

### Current Strategy

- **Server-Side Fetching**
  - Next.js Server Components fetch data directly from the NestJS API
  - Eliminates CORS issues

---

## 🚧 Future Roadmap

- **Monorepo Migration**
  - Merge frontend and backend into a single workspace
  - Enable shared types and improved developer experience

- **Containerization**
  - Use Docker and docker-compose to orchestrate:
    - Next.js frontend
    - NestJS backend
    - Database
  - Run the entire system as a single unit

---

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- pnpm  
  ```bash
  npm install -g pnpm
  ```

### Backend Requirement

- Quick Bite NestJS backend running locally or remotely

## 📦 Installation

```bash
pnpm install
```

## Development
```bash
pnpm dev
```

## Production
```bash
pnpm build
pnpm start
```
---

## 🧠 Learning Objectives

### RSC Optimization
- Eliminate client-side `useEffect` and `TanStack Query` data fetching
- Prefer async **Server Components**

### Payload Reduction
- Minimize client-side JavaScript bundles
- Offload logic to the server whenever possible

### Selective Interactivity
- Use `'use client'` only for interactive UI leaves
- Examples:
  - Cart toggles
  - Form inputs
  - Client-only UI state
---

## 📌 Philosophy

> Default to the server. Escape to the client only when necessary.

