import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { Product } from '../models/product.model';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => ({ ...state, loading: true })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state, products, loading: false, error: null
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state, loading: false, error
  })),

  on(ProductActions.addProductSuccess, (state, { product }) => ({
    ...state, products: [...state.products, product]
  })),
  on(ProductActions.deleteProductSuccess, (state, { id }) => ({
    ...state, products: state.products.filter(p => p.id !== id)
  })),
  on(ProductActions.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map(p => p.id === product.id ? product : p)
  }))
);
