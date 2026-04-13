import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SubscriptionsComponent } from './features/subscriptions/subscriptions.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'subscriptions', component: SubscriptionsComponent },

      // ============================================================
      // TODO: Agrega las rutas para los componentes que implementes
      // ============================================================
      //
      // Ruta para crear nueva suscripcion:
      // { path: 'subscriptions/new', component: SubscriptionFormComponent },
      //
      // Ruta para editar suscripcion existente:
      // { path: 'subscriptions/:id/edit', component: SubscriptionFormComponent },
      //
      // Ruta para ver detalle de suscripcion (bonus):
      // { path: 'subscriptions/:id', component: SubscriptionDetailComponent },
      //
      // PISTA: El componente SubscriptionFormComponent puede manejar
      // tanto creacion como edicion usando ActivatedRoute.params
      // para detectar si hay un :id presente.
      //
      // IMPORTANTE: 'subscriptions/new' debe ir ANTES de 'subscriptions/:id'
      // para que Angular no interprete "new" como un id.
    ]
  }
];
