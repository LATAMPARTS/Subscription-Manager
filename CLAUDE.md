# CLAUDE.md

## Project Overview

Subscription Manager — prueba tecnica para Frontend Developer Junior-Mid. Proyecto parcialmente implementado con Angular 19 + Express/SQLite. El candidato completa features sobre un dashboard funcional.

## Commands

```bash
# Backend
cd backend && npm run dev          # Puerto 3000

# Frontend
cd frontend && npx ng serve        # Puerto 4200
cd frontend && npx ng build        # Build de produccion
```

No hay tests ni linting configurados.

## Architecture

### Backend (packages: backend/)
- Express + better-sqlite3
- CRUD endpoints en /api/subscriptions
- Snake_case en DB, camelCase en JSON (via SQL AS aliases)

### Frontend (packages: frontend/)
- Angular 19 — standalone components, signals, new control flow (@if, @for)
- SCSS con design system "Financial Curator" (tokens en src/styles/)
- Layout responsive: sidebar (desktop >768px), bottom nav (mobile)
- Dashboard implementado como referencia
- Stubs con TODOs para candidato: subscription-form, subscription-detail, confirm-dialog

### Key Files
- `frontend/src/app/features/dashboard/` — Referencia de calidad
- `frontend/src/app/core/services/subscription.service.ts` — Servicio parcial
- `frontend/src/styles/_variables.scss` — Design tokens
- `INSTRUCTIONS.md` — Enunciado de la prueba
