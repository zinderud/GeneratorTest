import {Component, Input, Output, EventEmitter } from '@angular/core';

import {
  
  DoctorModel
} from '../../models';

@Component({
    selector: '[doctor-ui]',
    template: `
        <td>{{doctor.Id}}</td>
        <td>{{doctor.Name}}</td>
        <td>{{doctor.Address}}</td>
        <td>{{doctor.Available}}</td>
        
        
        <td doctor-edit-ui 
                [doctor]="doctor" 
                (onEditHandler)="onEditDoctors($event)">
        </td>
        <td doctor-delete-ui 
            [doctor]="doctor"
            (onDeleteHandler)="onDeleteDoctors($event)">
        </td>
    `
})
export class DoctorsUi {
    @Input() doctor: DoctorModel;

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditDoctors(data:any) {
        this.onEditHandler.next(data);
    }

    onDeleteDoctors() {
        this.onDeleteHandler.next(this.doctor.Id);
    }
}
