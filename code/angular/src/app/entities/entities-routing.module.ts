import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { DashboardContainer } from './containers/dashboard.container';
import {
    PatientsContainer,
    AddressesContainer,
    ProgramUsersContainer,
    DoctorsContainer,
    
   
} from './containers/index';
 

const routes: Routes = [
    { path: 'dash', component: DashboardContainer, data: { title: extract('dash') } },
    { path: 'patients', component: PatientsContainer , data: { title: extract('patients') } },
    { path: 'addresses', component: AddressesContainer , data: { title: extract('addresses') } },
    { path: 'programUsers', component: ProgramUsersContainer , data: { title: extract('programUsers') } },
    { path: 'doctors', component: DoctorsContainer , data: { title: extract('doctors') } },
    
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class entitiesRoutingModule { }
