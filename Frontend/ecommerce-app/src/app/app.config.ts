import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productReducer } from './store/product.reducer';
import { ProductEffects } from './store/product.effects';
import { routes } from './app.routes';

import { orderReducer } from './store/order/order.reducer';
import { OrderEffects } from './store/order/order.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([])), 
    provideRouter(routes),
    provideStore({ 
      products: productReducer, 
      orders: orderReducer
    }),
    provideEffects(ProductEffects, OrderEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: true }) 
  ]
};