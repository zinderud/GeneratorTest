import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, ConnectionBackend, RequestOptions } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { I18nService } from './i18n.service';
import { ApiService } from './api.service';
import { Angular2TokenService } from './angular2-token.service';
import { AuthGuard } from './AuthGuard';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';

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
    Angular2TokenService ,
    AuthService,
    AuthGuard,
    I18nService,
    JwtService
 
    
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
