import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { placeOrder } from '../../store/order/order.actions'; // Ensure this import is correct
import { Order } from '../../models/order.model'; // Update this import based on your models

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  customerName = '';
  sampleItems = [
    { productId: 1, quantity: 1, price: 100 } // Default item
  ];

  constructor(private store: Store) {}

  // Add a new product row
  addItem() {
    this.sampleItems.push({ productId: 0, quantity: 1, price: 100 }); // Default values
  }

  // Remove a product row
  removeItem(index: number) {
    this.sampleItems.splice(index, 1);
  }

  // Calculate the total price dynamically
  calculateTotalPrice(): number {
    return this.sampleItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // On checkout, dispatch the order to the store
  onCheckout() {
    const order: Order = {
      customerName: this.customerName,
      items: this.sampleItems,
      totalPrice: this.calculateTotalPrice()
    };

    this.store.dispatch(placeOrder({ order }));
  }
}
