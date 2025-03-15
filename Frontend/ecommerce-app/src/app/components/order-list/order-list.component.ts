import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadOrders } from '../../store/order/order.actions';
import { selectAllOrders } from '../../store/order/order.selectors';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
})
export class OrderListComponent {
  orders$ = this.store.select(selectAllOrders);
  

  constructor(private store: Store) {
    this.store.dispatch(loadOrders());
  }
}