import { createReducer, on } from '@ngrx/store';
import * as OrderActions from './order.actions';
import { Order } from '../../models/order.model';

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

export const orderReducer = createReducer(
  initialState,
  // Load Orders
  on(OrderActions.loadOrders, (state) => ({ ...state, loading: true })),
  on(OrderActions.loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    loading: false,
  })),
  on(OrderActions.loadOrdersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  // Place Order
  on(OrderActions.placeOrder, (state) => ({ ...state, loading: true })),
  on(OrderActions.placeOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
    loading: false,
  })),
  on(OrderActions.placeOrderFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);