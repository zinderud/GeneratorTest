import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

 
import { LoginComponent } from './pages/login/login.component';
import { extract } from './core/i18n.service';
import { HomeComponent } from './pages/home/home.component';
 const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'entities', loadChildren: './entities/entities.module#EntitiesModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  /* { path: '', component: LoginComponent , data: { title: extract('login') } },
  { path: 'login', component: LoginComponent , data: { title: extract('login') } },
  { path: 'register', component: LoginComponent , data: { title: extract('register') } }, */
 { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule { }
