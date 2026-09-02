import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Kei.Roumanie — Études de santé en Roumanie',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
