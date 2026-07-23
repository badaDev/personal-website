import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home').then((component) => component.Home),
    title: 'Home | Nurudeen Bada',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((component) => component.About),
    title: 'About | Nurudeen Bada',
  },
  {
    path: 'experience',
    loadComponent: () => import('./features/experience/experience').then((component) => component.Experience),
    title: 'Experience | Nurudeen Bada',
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects').then((component) => component.Projects),
    title: 'Projects | Nurudeen Bada',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((component) => component.Contact),
    title: 'Contact | Nurudeen Bada',
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((component) => component.NotFound),
    title: 'Page not found | Nurudeen Bada',
  },
];
