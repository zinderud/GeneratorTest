import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../core/api.service';
 
import { PatientModel} from '../models'
import { PatientListConfig } from '../models/patient-list-config.model'

import 'rxjs/Rx';

@Injectable()
export class PatientsService {

    path: string = '/patients';

    constructor ( private apiService: ApiService ) {}

    query(config: PatientListConfig): Observable<{patients: PatientModel[], patientsCount: number}> {
        // Convert any filters over to Angular's URLSearchParams
        const params: URLSearchParams = new URLSearchParams();
    
        Object.keys(config.filters)
        .forEach((key) => {
          params.set(key, config.filters[key]);
        });
    
        return this.apiService
        .get(
          '/patients' + ((config.type === 'feed') ? '/feed' : ''),
          params
        ).map(data => data);
      }
    getPatients()   {
        return this.apiService.get(this.path);
              
    }

    getPatient(id:any)  {
          return this.apiService.get(this.path+'/' + id);
                
    }

    createPatient(patient: PatientModel) {
        return this.apiService.post(this.path, patient);
    }

    editPatient(id: any, patient: PatientModel) {
        return this.apiService.put((this.path+ '/' + id), patient);
    }

    deletePatient(id: any) {
        return this.apiService.delete((this.path+'/' + id))
          
    }
};
