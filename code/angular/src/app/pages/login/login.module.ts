import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { extract } from '../../core/i18n.service';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent, SignInComponent, SignOutComponent, ChangePasswordComponent } from './index';
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    HttpModule,
    SharedModule,
    NgbModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent , data: { title: extract('login')}},
 
        { path: 'register', component: RegisterComponent , data: { title: extract('Register') } },
        { path: 'sign_in', component: SignInComponent , data: { title: extract('SignIn') } },
        { path: 'sign_out', component: SignOutComponent , data: { title: extract('signOut') } },
        { path: 'profile', component: ProfileComponent , data: { title: extract('profile') } },
        { path: 'password', component: ChangePasswordComponent , data: { title: extract('ChangePassword') } }
     
    ])
  ],
  declarations: [
    RegisterComponent, SignInComponent, SignOutComponent, ChangePasswordComponent, ProfileComponent, LoginComponent
  ]
})
export class LoginModule { }
