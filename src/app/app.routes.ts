import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'cerbung-details',
    loadComponent: () => import('./cerbung-details/cerbung-details.page').then( m => m.CerbungDetailsPage)
  },
  {
    path: 'create-cerbung',
    loadComponent: () => import('./create-cerbung/create-cerbung.page').then( m => m.CreateCerbungPage)
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users.page').then( m => m.UsersPage)
  },
  {
    path: 'notifications',
    loadComponent: () => import('./notifications/notifications.page').then( m => m.NotificationsPage)
  },
  {
    path: 'following',
    loadComponent: () => import('./following/following.page').then( m => m.FollowingPage)
  },
  {
    path: 'preferences',
    loadComponent: () => import('./preferences/preferences.page').then( m => m.PreferencesPage)
  },
];
