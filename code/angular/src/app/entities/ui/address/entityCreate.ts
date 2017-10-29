import {  Component, Output, Input, EventEmitter} from '@angular/core';

import {
                                                              
  AddressModel
} from '../../models';

@Component({
    selector: 'address-create-ui',
    template: `
        <div>
            <div *ngIf="!addNew"><button class="btn btn-primary" (click)="onAddNew()">Add New Address</button></div>
            <form *ngIf="addNew">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">phone</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="address.phone" name="phone"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">email</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="address.email" name="email"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">web</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="address.web" name="web"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">gander</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="address.gander" name="gander"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">birth_at</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="address.birth_at" name="birth_at"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Addresss</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="address.Addresss" name="Addresss"/>
                  </div>
                </div>
                
            
                           
                <button class="btn btn-success" (click)="onSave()">Save</button>
                <button class="btn btn-default" (click)="onCancel()">Cancel</button>                
            </form>
       </div>
       <hr />       
    `
})
export class AddressesCreate {
    @Output() onSaveHandler = new EventEmitter();

    address: AddressModel = {
      Id: '',
      phone: ''
,
      Addresss: ''
    };

    addNew: boolean = false;

    onAddNew() {
      this.addNew = true;
    }

    onCancel() {
      this.addNew = false;
      this.reset();
    }

    onSave() {
      this.addNew = false;
      this.onSaveHandler.next(this.address);
      this.reset();
    }

    reset() {
      this.address = {
        Id: '',
        phone: ''
,
        Addresss: ''
      };
    }
}
