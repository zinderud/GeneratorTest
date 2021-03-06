import {Component, Input, Output, EventEmitter } from '@angular/core';

import {
  DoctorModel,
  ProgramUserModel
} from '../../models';

@Component({
    selector: '[programUser-ui]',
    template: `
            <td>{{programUser.Id}}</td>
        <td>{{programUser.tc}}</td>
        <td>{{programUser.Name}}</td>
        <td>{{programUser.last_name}}</td>
        <td>{{programUser.gander}}</td>
        <td>{{programUser.birth_at}}</td>
        <td>{{programUser.bio}}</td>
        
 
    <td *ngIf="Doctor">{{Doctor.Name || "No Doctor"}}</td> 
        
        <td programUser-edit-ui 
                [programUser]="programUser" 
 
                [Doctors]="Doctors"
                (onEditHandler)="onEditProgramUsers($event)">
        </td>
        <td programUser-delete-ui 
            [programUser]="programUser"
            (onDeleteHandler)="onDeleteProgramUsers($event)">
        </td>
`
})
export class ProgramUsersUi {
    @Input() programUser: ProgramUserModel;
    @Input() Doctor: DoctorModel;
    @Input() Doctors: Array<DoctorModel>;

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditProgramUsers(data:any) {
        this.onEditHandler.next(data);
    }

    onDeleteProgramUsers() {
        this.onDeleteHandler.next(this.programUser.Id);
    }
}
