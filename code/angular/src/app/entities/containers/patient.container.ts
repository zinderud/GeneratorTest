import { Component, OnInit } from '@angular/core';
import {
  DoctorModel,ProgramUserModel,
  PatientModel
} from './../models';

import {
  DoctorsService,
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
                [Doctors]="Doctors"
                [ProgramUsers]="ProgramUsers"
              
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
                Doctor Name        
              </th>            
              <th>
                ProgramUser Name        
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
                [Doctors]="Doctors"                
                [Doctor]="getDoctor(patient.DoctorId)"
                [ProgramUsers]="ProgramUsers"                
                [ProgramUser]="getProgramUser(patient.ProgramUserId)"
                
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
  Doctors: DoctorModel[] = [];
  ProgramUsers: ProgramUserModel[] = [];

  constructor(
    
    private DoctorService: DoctorsService,
    private ProgramUserService: ProgramUsersService,
    private patientService: PatientsService) {}


ngOnInit() {
   
        this.DoctorService.getDoctors().subscribe(data => {
        this. Doctors = data.data;});
        this.ProgramUserService.getProgramUsers().subscribe(data => {
        this. ProgramUsers = data.data;});
       
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

  getDoctor(id: string): DoctorModel {
    return this.Doctors.find(f => f.Id === id );
  }
  getProgramUser(id: string): ProgramUserModel {
    return this.ProgramUsers.find(f => f.Id === id );
  }
}
