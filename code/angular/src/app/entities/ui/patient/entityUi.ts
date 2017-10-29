import {Component, Input, Output, EventEmitter } from '@angular/core';

import {
  
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
        
        
        <td patient-edit-ui 
                [patient]="patient" 
 
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

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditPatients(data:any) {
        this.onEditHandler.next(data);
    }

    onDeletePatients() {
        this.onDeleteHandler.next(this.patient.Id);
    }
}
