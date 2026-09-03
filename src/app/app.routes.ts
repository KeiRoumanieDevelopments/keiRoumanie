import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Pricing } from './pages/pricing/pricing';
import { Romania } from './pages/romania/romania';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Kei.Roumanie — Études de santé en Roumanie',
  },
  {
    path: 'apropos',
    component: About,
    title: 'À propos — Kei.Roumanie',
  },
  {
    path: 'roumanie',
    component: Romania,
    title: 'Étudier en Roumanie — Kei.Roumanie',
  },
  {
    path: 'tarifs',
    component: Pricing,
    title: 'Tarifs — Kei.Roumanie',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact — Kei.Roumanie',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
