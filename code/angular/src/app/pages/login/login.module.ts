import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { extract } from '../../core/i18n.service';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
  
    SharedModule,
    NgbModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent , data: { title: extract('login') } },
      { path: 'register', component: LoginComponent , data: { title: extract('register') } }
    ])
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
