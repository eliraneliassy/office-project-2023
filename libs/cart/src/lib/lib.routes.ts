import { CartComponent } from './cart/cart.component';
import { Route } from '@angular/router';

export const cartRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: CartComponent}
];
