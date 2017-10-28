import {Component, Input, Output, EventEmitter } from '@angular/core';

import {
  ProgramUserModel,
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
        
        <td *ngIf="programUser">{{programUser.Name || "No ProgramUser"}}</td>
        <td *ngIf="programUser">{{programUser.Name || "No ProgramUser"}}</td>
        <td *ngIf="!programUser"></td>
        
        <td patient-edit-ui 
                [patient]="patient" 
 
                [programUsers]="programUsers"
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
    @Input() programUser: ProgramUserModel;
    @Input() programUsers: Array<ProgramUserModel>;

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditPatients(data:any) {
        this.onEditHandler.next(data);
    }

    onDeletePatients() {
        this.onDeleteHandler.next(this.patient.Id);
    }
}
