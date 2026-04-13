import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { SubscriptionService } from '../../core/services/subscription.service';
import { Subscription, SubscriptionStats, CATEGORIES } from '../../core/models/subscription.model';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.scss'
})
export class SubscriptionsComponent implements OnInit {
  private subscriptionService = inject(SubscriptionService);
  private router = inject(Router);

  subscriptions = signal<Subscription[]>([]);
  stats = signal<SubscriptionStats>({ totalMonthly: 0, count: 0, annualProjection: 0 });
  isLoading = signal(true);
  searchQuery = signal('');
  activeFilter = signal<string>('all');

  categories = CATEGORIES;

  nextRenewal = computed(() => {
    const sorted = [...this.subscriptions()]
      .filter(s => s.status === 'active')
      .sort((a, b) => new Date(a.nextPaymentDate).getTime() - new Date(b.nextPaymentDate).getTime());
    return sorted.length > 0 ? sorted[0] : null;
  });

  filteredSubscriptions = computed(() => {
    return this.subscriptions();
  });

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading.set(true);
    this.subscriptionService.getAll().subscribe({
      next: (data) => this.subscriptions.set(data),
      error: (err) => console.error('Error cargando suscripciones:', err),
    });
    this.subscriptionService.getStats().subscribe({
      next: (data) => this.stats.set(data),
      complete: () => this.isLoading.set(false),
    });
  }

  setFilter(category: string): void {
    this.activeFilter.set(category);
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }

  navigateToAdd(): void {
    this.router.navigate(['/subscriptions/new']);
  }
}
