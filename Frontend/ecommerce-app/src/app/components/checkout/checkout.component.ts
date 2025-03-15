import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { placeOrder } from '../../store/order/order.actions';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  constructor(private store: Store) {}

  onCheckout() {
    const sampleOrder = {
      customerName: 'John Doe',
      items: [{ productId: 1, quantity: 2, price: 100 }],
      totalPrice: 200,
    };
    this.store.dispatch(placeOrder({ order: sampleOrder }));
  }
}