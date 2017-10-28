import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../core/api.service';
 
import { AddressModel} from '../models'
import { AddressListConfig } from '../models/address-list-config.model'

import 'rxjs/Rx';

@Injectable()
export class AddressesService {

    path: string = '/addresses';

    constructor ( private apiService: ApiService ) {}

    query(config: AddressListConfig): Observable<{addresses: AddressModel[], addressesCount: number}> {
        // Convert any filters over to Angular's URLSearchParams
        const params: URLSearchParams = new URLSearchParams();
    
        Object.keys(config.filters)
        .forEach((key) => {
          params.set(key, config.filters[key]);
        });
    
        return this.apiService
        .get(
          '/addresses' + ((config.type === 'feed') ? '/feed' : ''),
          params
        ).map(data => data);
      }
    getAddresses()   {
        return this.apiService.get(this.path);
              
    }

    getAddress(id:any)  {
          return this.apiService.get(this.path+'/' + id);
                
    }

    createAddress(address: AddressModel) {
        return this.apiService.post(this.path, address);
    }

    editAddress(id: any, address: AddressModel) {
        return this.apiService.put((this.path+ '/' + id), address);
    }

    deleteAddress(id: any) {
        return this.apiService.delete((this.path+'/' + id))
          
    }
};
