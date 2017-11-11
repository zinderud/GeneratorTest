import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 ;
import { extract } from '../core/i18n.service';
import { DashboardContainer } from './containers/dashboard.container';
import {
    DoctorsContainer,
    ProgramUsersContainer,
    PatientsContainer,
    AddressesContainer,
    
   
} from './containers/index';
 

const routes: Routes = [
    { path: '', component: DashboardContainer, data: { title: extract('dash') } },
    
           
    { path: 'doctors', component: DoctorsContainer , data: { title: extract('doctors') } },
    { path: 'programUsers', component: ProgramUsersContainer , data: { title: extract('programUsers') } },
    { path: 'patients', component: PatientsContainer , data: { title: extract('patients') } },
    { path: 'addresses', component: AddressesContainer , data: { title: extract('addresses') } },
    
          
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class entitiesRoutingModule { }
