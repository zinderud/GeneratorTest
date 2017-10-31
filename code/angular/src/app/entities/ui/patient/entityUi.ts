import {Component, Input, Output, EventEmitter } from '@angular/core';

import {
  DoctorModel,ProgramUserModel,
  PatientModel
} from '../../models';

@Component({
    selector: '[patient-ui]',
    template: `
            <td>{{patient.Id}}</td>
        <td>{{patient.Name}}</td>
        <td>{{patient.Address}}</td>
        <td>{{patient.Age}}</td>
        <td>{{patient.History}}</td>
        
 
    <td *ngIf="Doctor">{{Doctor.Name || "No Doctor"}}</td> 
 
    <td *ngIf="ProgramUser">{{ProgramUser.Name || "No ProgramUser"}}</td> 
        
        <td patient-edit-ui 
                [patient]="patient" 
 
                [Doctors]="Doctors"
                [ProgramUsers]="ProgramUsers"
                (onEditHandler)="onEditPatients($event)">
        </td>
        <td patient-delete-ui 
            [patient]="patient"
            (onDeleteHandler)="onDeletePatients($event)">
        </td>
`
})
export class PatientsUi {
    @Input() patient: PatientModel;
    @Input() Doctor: DoctorModel;
    @Input() Doctors: Array<DoctorModel>;
    @Input() ProgramUser: ProgramUserModel;
    @Input() ProgramUsers: Array<ProgramUserModel>;

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditPatients(data:any) {
        this.onEditHandler.next(data);
    }

    onDeletePatients() {
        this.onDeleteHandler.next(this.patient.Id);
    }
}
