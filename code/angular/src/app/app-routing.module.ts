import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './core/index';
import { LoginComponent } from './pages/login/login.component';
import { extract } from './core/i18n.service';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: '', component: LoginComponent , data: { title: extract('login') } },
  { path: 'login', component: LoginComponent , data: { title: extract('login') } },
  { path: 'register', component: LoginComponent , data: { title: extract('register') } },
 { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
