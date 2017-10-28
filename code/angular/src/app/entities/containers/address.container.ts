import { Component, OnInit } from '@angular/core';
import {
  
  AddressModel
} from './../models';

import {
  AddressesService
} from '../services';

 import 'rxjs/Rx';

@Component({
  selector: 'addresses-container',
  template: `
    <div>
        <h1>Addresses</h1>                    
            <address-create-ui 
              
                (onSaveHandler)="onCreateAddresses($event)" >
            </address-create-ui>
    </div>
    <table class="table">
        <thead>
            <tr>
              <th>
                Id        
              </th>            
              <th>
                phone        
              </th>            
              <th>
                email        
              </th>            
              <th>
                web        
              </th>            
              <th>
                gander        
              </th>            
              <th>
                birth_at        
              </th>            
              <th>
                Addresss        
              </th>            
              <th>
                Edit
              </th>
              <th>
                Delete
              </th>
            </tr>
        </thead>
       
        <tbody>
            <tr address-ui 
                *ngFor="let address of addresses" 
                [address]="address" 
                
                (onEditHandler)="onEditAddresses($event)"
                (onDeleteHandler)="onDeleteAddresses($event)"
            >
            </tr>
        </tbody>
        </table> 
        
    `
})
export class AddressesContainer implements OnInit{
  addresses: AddressModel[] = [];

  constructor(
    
    private addressService: AddressesService) {}


ngOnInit() {
   
   
  this.addressService.getAddresses().subscribe(data => {
    this. addresses = data.data;});
  }

  onCreateAddresses(address: AddressModel) {
    this.addressService.createAddress(address).subscribe();
  }

  onEditAddresses(payload:any) {
    this.addressService.editAddress(payload.id, payload.address).subscribe();
  }

  onDeleteAddresses(id: string) {
    this.addressService.deleteAddress(id).subscribe();
  }

}
