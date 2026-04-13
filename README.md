# Subscription Manager — Prueba Tecnica Frontend

Aplicacion web para gestionar suscripciones digitales (Netflix, NordVPN, Claude AI, Disney+).

## Stack Tecnologico

- **Frontend:** Angular 19 (standalone components, signals, reactive forms)
- **Backend:** Node.js + Express + SQLite (better-sqlite3)
- **Estilos:** SCSS con design system "Financial Curator"

## Inicio Rapido

### Requisitos
- Node.js 18+
- npm

### Backend
```bash
cd backend
npm install
npm run dev    # http://localhost:3000
```

### Frontend
```bash
cd frontend
npm install
npx ng serve   # http://localhost:4200
```

## Estructura del Proyecto

```
subscription-manager/
├── backend/              # API REST (Express + SQLite)
│   └── src/
│       ├── server.js     # Entry point
│       ├── database.js   # SQLite + seed data
│       └── routes/       # Endpoints CRUD
├── frontend/             # Angular 19
│   └── src/
│       ├── app/
│       │   ├── core/     # Modelos y servicios
│       │   ├── layout/   # Shell responsive
│       │   ├── features/ # Paginas
│       │   └── shared/   # Componentes reutilizables
│       └── styles/       # Design system SCSS
├── screenshots/          # Referencia visual
└── INSTRUCTIONS.md       # Enunciado de la prueba
```

## API Endpoints

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | /api/subscriptions | Listar suscripciones |
| GET | /api/subscriptions/:id | Obtener por ID |
| POST | /api/subscriptions | Crear |
| PUT | /api/subscriptions/:id | Actualizar |
| DELETE | /api/subscriptions/:id | Eliminar |
| GET | /api/subscriptions/stats/summary | Estadisticas |
