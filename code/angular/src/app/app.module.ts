import { BrowserModule} from '@angular/platform-browser';
import { NgModule , ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
 
import { EntitiesModule } from './entities/entities.module';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent, FooterComponent } from './shared/layout/index';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
 
@NgModule({
  imports: [BrowserModule,   
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
  
    SharedModule ,
    AppRoutingModule
  ],
  declarations: [AppComponent,
   FooterComponent,  PageNotFoundComponent, 
    HeaderComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
