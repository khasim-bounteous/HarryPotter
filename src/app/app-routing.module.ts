import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { AuthGuard } from './guards/auth-guard.guard';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate} from '@angular/fire/auth-guard';
 
const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/menu/home']);

const routes: Routes = [

  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    ...canActivate(redirectUnauthorizedToLogIn)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'add_data',
    loadChildren: () => import('./pages/tem/tem.module').then( m => m.TemPageModule)
  },
  {
    path: 'sorting-hat',
    loadChildren: () => import('./pages/sorting-hat/sorting-hat.module').then( m => m.SortingHatPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'wand',
    loadChildren: () => import('./pages/wand/wand.module').then( m => m.WandPageModule),
    canActivate: [AuthGuard]
  },  
  {
    path: '**',
    component: NotFoundPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
