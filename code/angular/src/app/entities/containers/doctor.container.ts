import { Component, OnInit } from '@angular/core';
import {
  
  DoctorModel
} from './../models';

import {
  DoctorsService
} from '../services';

 import 'rxjs/Rx';

@Component({
  selector: 'doctors-container',
  template: `
    <div>
        <h1>Doctors</h1>                    
            <doctor-create-ui 
              
                (onSaveHandler)="onCreateDoctors($event)" >
            </doctor-create-ui>
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
                Available        
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
            <tr doctor-ui 
                *ngFor="let doctor of doctors" 
                [doctor]="doctor" 
                
                (onEditHandler)="onEditDoctors($event)"
                (onDeleteHandler)="onDeleteDoctors($event)"
            >
            </tr>
        </tbody>
        </table> 
        
    `
})
export class DoctorsContainer implements OnInit{
  doctors: DoctorModel[] = [];

  constructor(
    
    private doctorService: DoctorsService) {}


ngOnInit() {
   
   
  this.doctorService.getDoctors().subscribe(data => {
    this. doctors = data.data;});
  }

  onCreateDoctors(doctor: DoctorModel) {
    this.doctorService.createDoctor(doctor).subscribe();
  }

  onEditDoctors(payload:any) {
    this.doctorService.editDoctor(payload.id, payload.doctor).subscribe();
  }

  onDeleteDoctors(id: string) {
    this.doctorService.deleteDoctor(id).subscribe();
  }

}
