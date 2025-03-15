import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadOrders } from '../../store/order/order.actions';
import { selectAllOrders, selectOrderError, selectOrderLoading } from '../../store/order/order.selectors';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  orders$ = this.store.select(selectAllOrders);
  loading$ = this.store.select(selectOrderLoading); // Fixed selector
  error$ = this.store.select(selectOrderError);     // Fixed selector

  constructor(private store: Store) {
    this.store.dispatch(loadOrders()); // Dispatch action to load orders
  }
}