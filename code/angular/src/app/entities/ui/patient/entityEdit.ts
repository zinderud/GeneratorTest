import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core'

import {
    PatientModel
} from '../../models';

@Component({
    selector: '[patient-edit-ui]',
    template: `
        <button class="btn btn-default" data-toggle="modal" [attr.data-target]="'#modelEdit-' + patient.Id">Edit</button>
        
        <!-- Modal -->
        <div class="modal fade" [id]="'modelEdit-' + patient.Id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Edit Patient</h4>
                    </div>
                    <div class="modal-body">
                        <form>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Id</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
 
                                    disabled [ngModel]="patient.Id" name="Id"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editPatient.Name" name="Name"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Address</label>
                                <div class="col-sm-10">
                                    <input type="text"
 class="form-control" 
                                    [(ngModel)]="editPatient.Address" name="Address"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Age</label>
                                <div class="col-sm-10">
                                    <input type="number"
 class="form-control" 
                                    [(ngModel)]="editPatient.Age" name="Age"/>
                                </div>
                            </div>
 
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">History</label>
                                <div class="col-sm-10">
                                    <textarea name="History" [(ngModel)]="editPatient.History"  ></textarea>
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
export class PatientsEdit  implements OnInit {
    @Input() patient: PatientModel;

    @Output() onEditHandler = new EventEmitter();

    editPatient: PatientModel;

    ngOnInit() {
      // clone the user object
      this.editPatient = {
        Id: ''                        , Name: this.patient.Name
            , Address: this.patient.Address
            , Age: this.patient.Age
            , History: this.patient.History
            , DoctorId: this.patient.DoctorId
            , ProgramUserId: this.patient.ProgramUserId
      };
    }

    onSave() {
        this.onEditHandler.next({id: this.patient.Id, patient : this.editPatient});
    }
}
