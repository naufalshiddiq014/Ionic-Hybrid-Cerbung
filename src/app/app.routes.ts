import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/login-page/login-page.page').then( m => m.LoginPagePage)
  },
  {
    path:'',
    loadChildren:()=> import('./tabs/tabs.routes').then(m=>m.routes)
  },
  // {
  //   path: 'home',
  //   loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  // },
  // {
  //   path: 'cerbung-details',
  //   loadComponent: () => import('./pages/cerbung-details/cerbung-details.page').then( m => m.CerbungDetailsPage)
  // },
  // {
  //   path: 'create-cerbung',
  //   loadComponent: () => import('./pages/create-cerbung/create-cerbung.page').then( m => m.CreateCerbungPage)
  // },
  // {
  //   path: 'users',
  //   loadComponent: () => import('./pages/users/users.page').then( m => m.UsersPage)
  // },
  // {
  //   path: 'notifications',
  //   loadComponent: () => import('./pages/notifications/notifications.page').then( m => m.NotificationsPage)
  // },
  // {
  //   path: 'following',
  //   loadComponent: () => import('./pages/following/following.page').then( m => m.FollowingPage)
  // },
  // {
  //   path: 'preferences',
  //   loadComponent: () => import('./pages/preferences/preferences.page').then( m => m.PreferencesPage)
  // },
  {
    path: 'signup-page',
    loadComponent: () => import('./pages/signup-page/signup-page.page').then( m => m.SignupPagePage)
  },
];
