import {Component, Input, Output, EventEmitter } from '@angular/core';

import {
  
  AddressModel
} from '../../models';

@Component({
    selector: '[address-ui]',
    template: `
        <td>{{address.Id}}</td>
        <td>{{address.phone}}</td>
        <td>{{address.email}}</td>
        <td>{{address.web}}</td>
        <td>{{address.gander}}</td>
        <td>{{address.birth_at}}</td>
        <td>{{address.Addresss}}</td>
        
        
        <td address-edit-ui 
                [address]="address" 
                (onEditHandler)="onEditAddresses($event)">
        </td>
        <td address-delete-ui 
            [address]="address"
            (onDeleteHandler)="onDeleteAddresses($event)">
        </td>
    `
})
export class AddressesUi {
    @Input() address: AddressModel;

    @Output() onEditHandler = new EventEmitter();
    @Output() onDeleteHandler = new EventEmitter();

    onEditAddresses(data:any) {
        this.onEditHandler.next(data);
    }

    onDeleteAddresses() {
        this.onDeleteHandler.next(this.address.Id);
    }
}
