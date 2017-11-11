import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
 /*    AboutRoutingModule, */
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ])
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
