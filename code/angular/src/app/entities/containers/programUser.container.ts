import { Component, OnInit } from '@angular/core';
import {
  
  ProgramUserModel
} from './../models';

import {
  ProgramUsersService
} from '../services';

 import 'rxjs/Rx';

@Component({
  selector: 'programUsers-container',
  template: `
    <div>
        <h1>ProgramUsers</h1>                    
            <programUser-create-ui 
              
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
                Address Addresss        
              </th>            
              <th>
                Doctor Name        
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

  constructor(
    
    private programUserService: ProgramUsersService) {}


ngOnInit() {
   
       
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

}
