import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core'

import {
                                                                                                                                      DoctorModel,
                 ProgramUserModel
} from '../../models';

@Component({
    selector: '[programUser-edit-ui]',
    template: `
        <button class="btn btn-default" data-toggle="modal" [attr.data-target]="'#modelEdit-' + programUser.Id">Edit</button>
        
        <!-- Modal -->
        <div class="modal fade" [id]="'modelEdit-' + programUser.Id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Edit ProgramUser</h4>
                    </div>
                    <div class="modal-body">
                        <form>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Id</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
 
                                    disabled [ngModel]="programUser.Id" name="Id"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">tc</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editProgramUser.tc" name="tc"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editProgramUser.Name" name="Name"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">last_name</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editProgramUser.last_name" name="last_name"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">gander</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editProgramUser.gander" name="gander"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">birth_at</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editProgramUser.birth_at" name="birth_at"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">bio</label>
                                <div class="col-sm-10">
                                    <textarea name="bio" [(ngModel)]="editProgramUser.bio" rows="10" cols="55"></textarea>
                                </div>
                            </div>
 
                        <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Doctor</label>
                        <div class="col-sm-10">
                                                                <select [(ngModel)]="programUser.DoctorId" name="DoctorId">
                                <option *ngFor="let e of Doctors" [ngValue]="e.Id">{{e.Name}}</option>
                            </select>  
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
export class ProgramUsersEdit  implements OnInit {
    @Input() programUser: ProgramUserModel;
                        @Input() Doctor: DoctorModel;
            @Input() Doctors: Array<DoctorModel>;
                
    @Output() onEditHandler = new EventEmitter();

    editProgramUser: ProgramUserModel;

    ngOnInit() {
      // clone the user object
      this.editProgramUser = {
        Id: ''                        , tc: this.programUser.tc
            , Name: this.programUser.Name
            , last_name: this.programUser.last_name
            , gander: this.programUser.gander
            , birth_at: this.programUser.birth_at
            , bio: this.programUser.bio
            , DoctorId: this.programUser.DoctorId
      };
    }

    onSave() {
        this.onEditHandler.next({id: this.programUser.Id, programUser : this.editProgramUser});
    }
}
