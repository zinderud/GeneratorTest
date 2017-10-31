import { Component, OnInit } from '@angular/core';
import {
  DoctorModel,
  ProgramUserModel
} from './../models';

import {
  DoctorsService,
  ProgramUsersService
} from '../services';

 import 'rxjs/Rx';

@Component({
  selector: 'programUsers-container',
  template: `
    <div>
        <h1>ProgramUsers</h1>                    
            <programUser-create-ui 
                [Doctors]="Doctors"
              
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
                [Doctors]="Doctors"                
                [Doctor]="getDoctor(programUser.DoctorId)"
                
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
  Doctors: DoctorModel[] = [];

  constructor(
    
    private DoctorService: DoctorsService,
    private programUserService: ProgramUsersService) {}


ngOnInit() {
   
        this.DoctorService.getDoctors().subscribe(data => {
        this. Doctors = data.data;});
       
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

  getDoctor(id: string): DoctorModel {
    return this.Doctors.find(f => f.Id === id );
  }
}
