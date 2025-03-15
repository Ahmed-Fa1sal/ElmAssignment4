import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { OrderService } from '../../services/order.service';
import * as OrderActions from './order.actions';

@Injectable()
export class OrderEffects {
  // Load Orders
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      mergeMap(() =>
        this.orderService.getOrders().pipe(
          map((orders) => OrderActions.loadOrdersSuccess({ orders })),
          catchError((error) => of(OrderActions.loadOrdersFailure({ error: error.message })))
      )
    )
  ))

  // Place Order
  placeOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.placeOrder),
      mergeMap(({ order }) =>
        this.orderService.createOrder(order).pipe(
          map((createdOrder) => OrderActions.placeOrderSuccess({ order: createdOrder })),
          catchError((error) => of(OrderActions.placeOrderFailure({ error: error.message })))
      )
    )
  ))

  constructor(private actions$: Actions, private orderService: OrderService) {}
}