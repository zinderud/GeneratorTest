import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core'

import {
                                                                                                                      AddressModel
} from '../../models';

@Component({
    selector: '[address-edit-ui]',
    template: `
        <button class="btn btn-default" data-toggle="modal" [attr.data-target]="'#modelEdit-' + address.Id">Edit</button>
        
        <!-- Modal -->
        <div class="modal fade" [id]="'modelEdit-' + address.Id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Edit Address</h4>
                    </div>
                    <div class="modal-body">
                        <form>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Id</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
 
                                    disabled [ngModel]="address.Id" name="Id"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">phone</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editAddress.phone" name="phone"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">email</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editAddress.email" name="email"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">web</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editAddress.web" name="web"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">gander</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editAddress.gander" name="gander"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">birth_at</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editAddress.birth_at" name="birth_at"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Addresss</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editAddress.Addresss" name="Addresss"/>
                                </div>
                            </div>

                        </form> 
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" (click)="onSave()" data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>       
    `
})
export class AddressesEdit  implements OnInit {
    @Input() address: AddressModel;
    
    @Output() onEditHandler = new EventEmitter();

    editAddress: AddressModel;

    ngOnInit() {
      // clone the user object
      this.editAddress = {
        Id: ''                        , phone: this.address.phone
            , email: this.address.email
            , web: this.address.web
            , gander: this.address.gander
            , birth_at: this.address.birth_at
            , Addresss: this.address.Addresss
      };
    }

    onSave() {
        this.onEditHandler.next({id: this.address.Id, address : this.editAddress});
    }
}
