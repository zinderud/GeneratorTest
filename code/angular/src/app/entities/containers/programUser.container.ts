import { Component, OnInit } from '@angular/core';
import {
  AddressModel,
  ProgramUserModel
} from './../models';

import {
  AddressesService,
  ProgramUsersService
} from '../services';

 import 'rxjs/Rx';

@Component({
  selector: 'programUsers-container',
  template: `
    <div>
        <h1>ProgramUsers</h1>                    
            <programUser-create-ui 
                [addresses]="addresses"
              
                (onSaveHandler)="onCreateProgramUsers($event)" >
            </programUser-create-ui>
    </div>
    <table class="table">
        <thead>
            <tr>
              <th>
                Id        
              </th>            
              <th>
                tc        
              </th>            
              <th>
                Name        
              </th>            
              <th>
                last_name        
              </th>            
              <th>
                gander        
              </th>            
              <th>
                birth_at        
              </th>            
              <th>
                bio        
              </th>            
              <th>
                Addresses Addresss        
              </th>            
              <th>
                Edit
              </th>
              <th>
                Delete
              </th>
            </tr>
        </thead>
       
        <tbody>
            <tr programUser-ui 
                *ngFor="let programUser of programUsers" 
                [programUser]="programUser" 
                [addresses]="addresses"                
                [address]="getAddress(programUser.AddressID)"
                
                (onEditHandler)="onEditProgramUsers($event)"
                (onDeleteHandler)="onDeleteProgramUsers($event)"
            >
            </tr>
        </tbody>
        </table> 
        
    `
})
export class ProgramUsersContainer implements OnInit{
  programUsers: ProgramUserModel[] = [];
  addresses: AddressModel[] = [];

  constructor(
    
    private addressService: AddressesService,
    private programUserService: ProgramUsersService) {}


ngOnInit() {
   
        this.addressService.getAddresses().subscribe(data => {
        this. addresses = data.data;});
       
  this.programUserService.getProgramUsers().subscribe(data => {
    this. programUsers = data.data;});
  }

  onCreateProgramUsers(programUser: ProgramUserModel) {
    this.programUserService.createProgramUser(programUser).subscribe();
  }

  onEditProgramUsers(payload:any) {
    this.programUserService.editProgramUser(payload.id, payload.programUser).subscribe();
  }

  onDeleteProgramUsers(id: string) {
    this.programUserService.deleteProgramUser(id).subscribe();
  }

  getAddress(id: string): AddressModel {
    return this.addresses.find(f => f.Id === id );
  }
}
