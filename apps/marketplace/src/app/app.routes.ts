import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'feed'
    },
    {
        path: 'feed',
        loadComponent: () => import('@office/feed').then(m => m.FeedComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('@office/cart').then(m => m.CartComponent)
    }
];
