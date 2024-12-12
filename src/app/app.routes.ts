import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start.routes').then((m) => m.routes),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/tabs/tabs.routes').then((m) => m.routes),
  },
];
