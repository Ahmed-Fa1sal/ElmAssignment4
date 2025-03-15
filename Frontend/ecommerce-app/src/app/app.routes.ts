import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'product-form', component: ProductFormComponent },
    { path: 'product-form/:id', component: ProductFormComponent },
    { path: 'orders', component: OrderListComponent }, // New
    { path: 'checkout', component: CheckoutComponent }, // New
    { path: '', redirectTo: '/products', pathMatch: 'full' },
  ];