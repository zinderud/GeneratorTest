import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { entitiesRoutingModule } from './entities-routing.module';
import { DashboardContainer } from './containers/dashboard.container';
import { AddressesContainer, ProgramUsersContainer, DoctorsContainer, PatientsContainer, } from './containers/index';

import {  AddressesService,ProgramUsersService,DoctorsService,PatientsService,} from "./services/index";
 
// tslint:disable-next-line:max-line-length
import {  AddressesCreate,ProgramUsersCreate,DoctorsCreate,PatientsCreate, AddressesUi, ProgramUsersUi, DoctorsUi, PatientsUi,  AddressesDelete, ProgramUsersDelete, DoctorsDelete, PatientsDelete,   AddressesEdit, ProgramUsersEdit, DoctorsEdit, PatientsEdit, } from './ui/index';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    entitiesRoutingModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [DashboardContainer,AddressesContainer,ProgramUsersContainer,DoctorsContainer,PatientsContainer,  AddressesCreate, ProgramUsersCreate, DoctorsCreate, PatientsCreate,  AddressesUi, ProgramUsersUi, DoctorsUi, PatientsUi,  AddressesDelete,ProgramUsersDelete,DoctorsDelete,PatientsDelete,  AddressesEdit, ProgramUsersEdit, DoctorsEdit, PatientsEdit, ],
  providers: [AddressesService,ProgramUsersService,DoctorsService,PatientsService, ]
})
export class EntitiesModule { }
