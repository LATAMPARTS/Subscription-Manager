# Prueba Tecnica — Subscription Manager

## Bienvenida

Te has unido a un equipo que esta construyendo **Subscription Manager**, una aplicacion web para gestionar suscripciones digitales. Tu companero de equipo ya implemento el backend completo y el dashboard del frontend. Tu mision es completar las funcionalidades restantes.

**Tiempo estimado:** 2-3 horas
**Stack:** Angular 19 + Node.js/Express + SQLite

---

## Configuracion del Proyecto

### Requisitos previos
- Node.js 18 o superior
- npm

### Instalacion y ejecucion

**Terminal 1 — Backend:**
```bash
cd backend
npm install
npm run dev
```
El servidor estara disponible en `http://localhost:3000`

**Terminal 2 — Frontend:**
```bash
cd frontend
npm install
npx ng serve
```
La aplicacion estara disponible en `http://localhost:4200`

---

## Lo que ya esta implementado

Antes de comenzar, explora el codigo existente para familiarizarte con los patrones y el design system:

### Backend (no necesitas modificarlo)
- API REST completa con CRUD de suscripciones
- Base de datos SQLite con datos de ejemplo
- Endpoints disponibles:

| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| `GET` | `/api/subscriptions` | Lista todas las suscripciones |
| `GET` | `/api/subscriptions/:id` | Obtiene una suscripcion por ID |
| `POST` | `/api/subscriptions` | Crea una nueva suscripcion |
| `PUT` | `/api/subscriptions/:id` | Actualiza una suscripcion |
| `DELETE` | `/api/subscriptions/:id` | Elimina una suscripcion |
| `GET` | `/api/subscriptions/stats/summary` | Estadisticas resumidas |

### Frontend
- **Dashboard completo** con suscripciones, resumen mensual y renovaciones proximas
- **Layout responsive** con sidebar (desktop) y bottom nav (mobile)
- **Design system** basado en tokens SCSS (revisa `src/styles/`)
- **Servicio parcial** con metodos `getAll()`, `getStats()`, `getById()` implementados
- **Modelo TypeScript** con interfaces tipadas

### Archivos clave que debes revisar
- `src/app/features/dashboard/dashboard.component.ts` — Ejemplo de uso de signals, servicios e inyeccion
- `src/app/core/services/subscription.service.ts` — Servicio con metodos TODO
- `src/app/core/models/subscription.model.ts` — Interfaces y categorias
- `src/styles/_variables.scss` — Tokens de colores, spacing y radii
- `src/styles/_mixins.scss` — Mixins para cards, botones, inputs y responsive
- `src/app/app.routes.ts` — Configuracion de rutas (con TODOs)

---

## Tareas

### Tarea 1: Completar el Servicio HTTP (estimado: 30 min)

**Archivo:** `src/app/core/services/subscription.service.ts`

Implementa los tres metodos marcados con TODO:
- `create()` — POST a la API
- `update()` — PUT a la API
- `delete()` — DELETE a la API

**Criterios de aceptacion:**
- [ ] Los metodos usan HttpClient con el tipado correcto
- [ ] Siguen el mismo patron que `getAll()` y `getStats()`
- [ ] Las URLs se construyen correctamente

---

### Tarea 2: Formulario "Agregar Suscripcion" (estimado: 45-60 min)

**Archivo:** `src/app/features/subscription-form/subscription-form.component.ts`

Crea un formulario reactivo para agregar nuevas suscripciones:

**Campos requeridos:**
- Nombre del servicio (texto, requerido, minimo 2 caracteres)
- Precio (numero, requerido, mayor que 0)
- Ciclo de facturacion (toggle: mensual/anual)
- Categoria (selector con las opciones de `CATEGORIES`)
- Fecha de proximo pago (date picker, requerido)
- Color de marca (color picker, opcional, default: #0056D2)

**Criterios de aceptacion:**
- [ ] Usa `ReactiveFormsModule` con `FormGroup` y `Validators`
- [ ] Muestra mensajes de error cuando los campos son invalidos
- [ ] Al enviar, llama a `subscriptionService.create()`
- [ ] Navega al dashboard tras crear exitosamente
- [ ] Es responsive (centrado en desktop, fullscreen en mobile)
- [ ] Sigue el design system (consulta screenshots y `_mixins.scss`)

**No olvides:**
- Agregar la ruta en `app.routes.ts`
- Importar `ReactiveFormsModule` en el componente

---

### Tarea 3: Editar Suscripcion (estimado: 30 min)

Reutiliza el componente del formulario para la edicion:

**Criterios de aceptacion:**
- [ ] Ruta: `/subscriptions/:id/edit`
- [ ] Carga los datos existentes usando `subscriptionService.getById()`
- [ ] Pre-llena el formulario con `patchValue()`
- [ ] Al enviar, llama a `subscriptionService.update()`
- [ ] Detecta automaticamente si es modo creacion o edicion

---

### Tarea 4: Eliminar Suscripcion (estimado: 20 min)

**Archivo:** `src/app/shared/components/confirm-dialog/confirm-dialog.component.ts`

Implementa la funcionalidad de eliminacion:

**Criterios de aceptacion:**
- [ ] El menu de 3 puntos en cada card ya emite eventos `onEdit` y `onDelete`
- [ ] Al presionar "Eliminar", muestra un dialogo de confirmacion
- [ ] Al confirmar, llama a `subscriptionService.delete()`
- [ ] La lista se actualiza automaticamente tras eliminar

---

### Tarea 5 — Bonus (tiempo restante)

Estas tareas son opcionales y sirven para diferenciarte:
- Busqueda y filtro de suscripciones en el dashboard
- Animaciones CSS o Angular animations en las cards
- Vista de detalle en `/subscriptions/:id`
- Estados vacios cuando no hay suscripciones (componente reutilizable)
- Pausar/reactivar suscripcion (toggle de status)

---

## Criterios de Evaluacion

| Criterio | Peso | Que evaluamos |
|----------|------|---------------|
| **Calidad de codigo y TypeScript** | 30% | Tipado estricto, naming consistente, estructura limpia |
| **Angular idiomatico** | 30% | Signals, standalone components, reactive forms, nueva sintaxis de control flow |
| **UI/UX** | 25% | Fidelidad al design system, responsividad, estados de carga/error |
| **Bonus y mejoras propias** | 15% | Iniciativa, creatividad, atencion al detalle |

---

## Consejos

1. **Prioriza calidad sobre cantidad.** Es mejor entregar 3 tareas bien hechas que 5 a medias.
2. **Usa el dashboard como referencia.** Estudia `dashboard.component.ts` para entender los patrones de Angular 19 que esperamos.
3. **Revisa el design system.** Los archivos `_variables.scss` y `_mixins.scss` tienen todo lo que necesitas para mantener consistencia visual.
4. **Consulta los screenshots.** En la carpeta `/screenshots/` encontraras capturas de referencia del diseño esperado.
5. **No modifiques el backend.** La API ya esta completa y funcional.

---

## Referencia Visual

Las capturas en `/screenshots/` muestran el diseño de referencia:
- `dashboard-desktop.png` — Dashboard en escritorio
- `dashboard-mobile.png` — Dashboard en movil
- `form-desktop.png` — Formulario en escritorio
- `form-mobile.png` — Formulario en movil
