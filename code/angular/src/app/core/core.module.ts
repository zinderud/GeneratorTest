import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, ConnectionBackend, RequestOptions } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { I18nService } from './i18n.service';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { HeaderComponent } from './shell/header/header.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TranslateModule,
    RouterModule
  ],
  declarations: [
/*     HeaderComponent,
    ShellComponent */
  ],
  providers: [
    ApiService,
    AuthGuard,
   
    I18nService,

    JwtService,
    UserService
    
  ]
})
export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
