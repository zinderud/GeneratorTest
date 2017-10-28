import {  Component, Output, Input, EventEmitter} from '@angular/core';

import {
  AddressModel,
  ProgramUserModel
} from '../../models';

@Component({
    selector: 'programUser-create-ui',
    template: `
        <div>
            <div *ngIf="!addNew"><button class="btn btn-primary" (click)="onAddNew()">Add New ProgramUser</button></div>
            <form *ngIf="addNew">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">tc</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="programUser.tc" name="tc"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Name</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="programUser.Name" name="Name"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">last_name</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="programUser.last_name" name="last_name"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">gander</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="programUser.gander" name="gander"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">birth_at</label>
                  <div class="col-sm-10">
                      <input type="text"
              class="form-control" [(ngModel)]="programUser.birth_at" name="birth_at"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">bio</label>
                  <div class="col-sm-10">
                    <textarea name="bio" [(ngModel)]="programUser.bio" rows="10" cols="80"></textarea>
                  </div>
                </div>
                
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-10">
                        <select [(ngModel)]="programUser.AddressID" name="AddressID">
                            <option *ngFor="let e of addresses" [ngValue]="e.Id">{{e.Addresss}}</option>
                        </select>  
                    </div>
                </div> 
            
                           
                <button class="btn btn-success" (click)="onSave()">Save</button>
                <button class="btn btn-default" (click)="onCancel()">Cancel</button>                
            </form>
       </div>
       <hr />       
    `
})
export class ProgramUsersCreate {
    @Input() addresses: Array<AddressModel>;
    @Output() onSaveHandler = new EventEmitter();

    programUser: ProgramUserModel = {
      Id: '',
      tc: ''
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
      this.onSaveHandler.next(this.programUser);
      this.reset();
    }

    reset() {
      this.programUser = {
        Id: '',
        tc: ''
      };
    }
}
