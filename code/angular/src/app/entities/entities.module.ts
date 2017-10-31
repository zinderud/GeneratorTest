import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { entitiesRoutingModule } from './entities-routing.module';
import { DashboardContainer } from './containers/dashboard.container';
import { DoctorsContainer, ProgramUsersContainer, PatientsContainer, AddressesContainer, } from './containers/index';

import {  DoctorsService,ProgramUsersService,PatientsService,AddressesService,} from "./services/index";
 
// tslint:disable-next-line:max-line-length
import {  DoctorsCreate,ProgramUsersCreate,PatientsCreate,AddressesCreate, DoctorsUi, ProgramUsersUi, PatientsUi, AddressesUi,  DoctorsDelete, ProgramUsersDelete, PatientsDelete, AddressesDelete,   DoctorsEdit, ProgramUsersEdit, PatientsEdit, AddressesEdit, } from './ui/index';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    entitiesRoutingModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [DashboardContainer,DoctorsContainer,ProgramUsersContainer,PatientsContainer,AddressesContainer,  DoctorsCreate, ProgramUsersCreate, PatientsCreate, AddressesCreate,  DoctorsUi, ProgramUsersUi, PatientsUi, AddressesUi,  DoctorsDelete,ProgramUsersDelete,PatientsDelete,AddressesDelete,  DoctorsEdit, ProgramUsersEdit, PatientsEdit, AddressesEdit, ],
  providers: [DoctorsService,ProgramUsersService,PatientsService,AddressesService, ]
})
export class EntitiesModule { }
