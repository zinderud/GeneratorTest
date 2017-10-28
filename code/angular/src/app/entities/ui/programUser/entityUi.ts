import {Component, Input, Output, EventEmitter } from '@angular/core';

import {
  AddressModel,
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
        
        <td *ngIf="address">{{address.Addresss || "No Address"}}</td>
        <td *ngIf="!address"></td>
        
        <td programUser-edit-ui 
                [programUser]="programUser" 
 
                [addresses]="addresses"
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
    @Input() address: AddressModel;
    @Input() addresses: Array<AddressModel>;

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditProgramUsers(data:any) {
        this.onEditHandler.next(data);
    }

    onDeleteProgramUsers() {
        this.onDeleteHandler.next(this.programUser.Id);
    }
}
