import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'following',
        loadComponent: () =>
          import('../pages/following/following.page').then((m) => m.FollowingPage),
      },
      {
        path: 'create-cerbung',
        loadComponent: () =>
          import('../pages/create-cerbung/create-cerbung.page').then((m) => m.CreateCerbungPage),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('../pages/users/users.page').then((m) => m.UsersPage),
      },
      {
        path: 'prefs',
        loadComponent: () =>
          import('../pages/preferences/preferences.page').then((m) => m.PreferencesPage),
      },
      {
        path: 'create-cerbung2',
        loadComponent: () => import('../pages/create-cerbung2/create-cerbung2.page').then( m => m.CreateCerbung2Page)
      },
      {
        path: 'create-cerbung3',
        loadComponent: () => import('../pages/create-cerbung3/create-cerbung3.page').then( m => m.CreateCerbung3Page)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
