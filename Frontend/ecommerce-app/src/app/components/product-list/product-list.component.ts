import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { deleteProduct, loadProducts } from '../../store/product.actions';
import { selectAllProducts, selectError, selectLoading } from '../../store/product.selectors';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products$ = this.store.select(selectAllProducts);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }

  deleteProduct(id: number) {
    this.store.dispatch(deleteProduct({ id }));
  }
  prepareCheckout(product: Product){
    
  }
}