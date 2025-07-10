import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./the-momahidoun/the-momahidoun.component').then(
        (m) => m.TheMomahidounComponent
      );
    },
  },
];
