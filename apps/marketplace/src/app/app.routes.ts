import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'feed'
    },
    {
        path: 'feed',
        loadChildren: () => import('@office/feed').then(m => m.FeedModule)
    },
    {
        path: 'cart',
        loadChildren: () => import('@office/cart').then(m => m.CartModule)
    }
];
