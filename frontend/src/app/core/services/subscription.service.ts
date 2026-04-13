import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription, SubscriptionStats } from '../models/subscription.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/api/subscriptions`;

  getAll(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.apiUrl);
  }

  getStats(): Observable<SubscriptionStats> {
    return this.http.get<SubscriptionStats>(`${this.apiUrl}/stats/summary`);
  }

  getById(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.apiUrl}/${id}`);
  }

  create(subscription: Omit<Subscription, 'id' | 'createdAt'>): Observable<Subscription> {
    throw new Error('Metodo create() no implementado');
  }

  update(id: number, subscription: Partial<Subscription>): Observable<Subscription> {
    throw new Error('Metodo update() no implementado');
  }

  delete(id: number): Observable<void> {
    throw new Error('Metodo delete() no implementado');
  }
}
