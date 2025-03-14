import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'product-form', component: ProductFormComponent },
  { path: 'product-form/:id', component: ProductFormComponent }, 
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
