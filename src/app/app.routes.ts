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

  {
    path: 'join-momahidoun',
    loadComponent: () => {
      return import('./join-momahidoun/join-momahidoun.component').then(
        (m) => m.JoinMomahidounComponent
      );
    },
  },
];
