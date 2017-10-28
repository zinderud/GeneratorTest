import { NgModule , ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';

import { extract } from '../../core/i18n.service';
import { HeaderComponent } from '../../core/shell/header/header.component';
const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {  path: 'home', component: HomeComponent, data: { title: extract('Home') } }
]);
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbModule,
    SharedModule,
    homeRouting
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
