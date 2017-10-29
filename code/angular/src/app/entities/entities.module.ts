import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { entitiesRoutingModule } from './entities-routing.module';
import { DashboardContainer } from './containers/dashboard.container';
import { PatientsContainer, AddressesContainer, ProgramUsersContainer, DoctorsContainer, } from './containers/index';

import {  PatientsService,AddressesService,ProgramUsersService,DoctorsService,} from "./services/index";
 
// tslint:disable-next-line:max-line-length
import {  PatientsCreate,AddressesCreate,ProgramUsersCreate,DoctorsCreate, PatientsUi, AddressesUi, ProgramUsersUi, DoctorsUi,  PatientsDelete, AddressesDelete, ProgramUsersDelete, DoctorsDelete,   PatientsEdit, AddressesEdit, ProgramUsersEdit, DoctorsEdit, } from './ui/index';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    entitiesRoutingModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [DashboardContainer,PatientsContainer,AddressesContainer,ProgramUsersContainer,DoctorsContainer,  PatientsCreate, AddressesCreate, ProgramUsersCreate, DoctorsCreate,  PatientsUi, AddressesUi, ProgramUsersUi, DoctorsUi,  PatientsDelete,AddressesDelete,ProgramUsersDelete,DoctorsDelete,  PatientsEdit, AddressesEdit, ProgramUsersEdit, DoctorsEdit, ],
  providers: [PatientsService,AddressesService,ProgramUsersService,DoctorsService, ]
})
export class EntitiesModule { }
