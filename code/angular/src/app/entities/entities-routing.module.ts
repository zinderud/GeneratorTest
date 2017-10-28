import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { DashboardContainer } from './containers/dashboard.container';
import {
    AddressesContainer,
    ProgramUsersContainer,
    DoctorsContainer,
    PatientsContainer,
    
   
} from './containers/index';
 

const routes: Routes = [
    { path: 'dash', component: DashboardContainer, data: { title: extract('dash') } },
    { path: 'addresses', component: AddressesContainer , data: { title: extract('addresses') } },
    { path: 'programUsers', component: ProgramUsersContainer , data: { title: extract('programUsers') } },
    { path: 'doctors', component: DoctorsContainer , data: { title: extract('doctors') } },
    { path: 'patients', component: PatientsContainer , data: { title: extract('patients') } },
    
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class entitiesRoutingModule { }
