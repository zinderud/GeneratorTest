import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../core/api.service';
 
import { DoctorModel} from '../models'
import { DoctorListConfig } from '../models/doctor-list-config.model'

import 'rxjs/Rx';

@Injectable()
export class DoctorsService {

    path: string = '/doctors';

    constructor ( private apiService: ApiService ) {}

    query(config: DoctorListConfig): Observable<{doctors: DoctorModel[], doctorsCount: number}> {
        // Convert any filters over to Angular's URLSearchParams
        const params: URLSearchParams = new URLSearchParams();
    
        Object.keys(config.filters)
        .forEach((key) => {
          params.set(key, config.filters[key]);
        });
    
        return this.apiService
        .get(
          '/doctors' + ((config.type === 'feed') ? '/feed' : ''),
          params
        ).map(data => data);
      }
    getDoctors()   {
        return this.apiService.get(this.path);
              
    }

    getDoctor(id:any)  {
          return this.apiService.get(this.path+'/' + id);
                
    }

    createDoctor(doctor: DoctorModel) {
        return this.apiService.post(this.path, doctor);
    }

    editDoctor(id: any, doctor: DoctorModel) {
        return this.apiService.put((this.path+ '/' + id), doctor);
    }

    deleteDoctor(id: any) {
        return this.apiService.delete((this.path+'/' + id))
          
    }
}
