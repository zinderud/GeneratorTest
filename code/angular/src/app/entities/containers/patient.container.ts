import { Component, OnInit } from '@angular/core';
import {
  ProgramUserModel,
  PatientModel
} from './../models';

import {
  ProgramUsersService,
  PatientsService
} from '../services';

 import 'rxjs/Rx';

@Component({
  selector: 'patients-container',
  template: `
    <div>
        <h1>Patients</h1>                    
            <patient-create-ui 
                [programUsers]="programUsers"
              
                (onSaveHandler)="onCreatePatients($event)" >
            </patient-create-ui>
    </div>
    <table class="table">
        <thead>
            <tr>
              <th>
                Id        
              </th>            
              <th>
                Name        
              </th>            
              <th>
                Address        
              </th>            
              <th>
                Age        
              </th>            
              <th>
                History        
              </th>            
              <th>
                Doctors Name        
              </th>            
              <th>
                ProgramUsers Name        
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
            <tr patient-ui 
                *ngFor="let patient of patients" 
                [patient]="patient" 
                [programUsers]="programUsers"                
                [programUser]="getProgramUser(patient.ProgramUserId)"
                
                (onEditHandler)="onEditPatients($event)"
                (onDeleteHandler)="onDeletePatients($event)"
            >
            </tr>
        </tbody>
        </table> 
        
    `
})
export class PatientsContainer implements OnInit{
  patients: PatientModel[] = [];
  programUsers: ProgramUserModel[] = [];

  constructor(
    
    private programUserService: ProgramUsersService,
    private patientService: PatientsService) {}


ngOnInit() {
   
        this.programUserService.getProgramUsers().subscribe(data => {
        this. programUsers = data.data;});
       
  this.patientService.getPatients().subscribe(data => {
    this. patients = data.data;});
  }

  onCreatePatients(patient: PatientModel) {
    this.patientService.createPatient(patient).subscribe();
  }

  onEditPatients(payload:any) {
    this.patientService.editPatient(payload.id, payload.patient).subscribe();
  }

  onDeletePatients(id: string) {
    this.patientService.deletePatient(id).subscribe();
  }

  getProgramUser(id: string): ProgramUserModel {
    return this.programUsers.find(f => f.Id === id );
  }
}
