import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from '../../core/api.service';
 
import { ProgramUserModel} from '../models'
import { ProgramUserListConfig } from '../models/programUser-list-config.model'

import 'rxjs/Rx';

@Injectable()
export class ProgramUsersService {

    path: string = '/programUsers';

    constructor ( private apiService: ApiService ) {}

    query(config: ProgramUserListConfig): Observable<{programUsers: ProgramUserModel[], programUsersCount: number}> {
        // Convert any filters over to Angular's URLSearchParams
        const params: URLSearchParams = new URLSearchParams();
    
        Object.keys(config.filters)
        .forEach((key) => {
          params.set(key, config.filters[key]);
        });
    
        return this.apiService
        .get(
          '/programUsers' + ((config.type === 'feed') ? '/feed' : ''),
          params
        ).map(data => data);
      }
    getProgramUsers()   {
        return this.apiService.get(this.path);
              
    }

    getProgramUser(id:any)  {
          return this.apiService.get(this.path+'/' + id);
                
    }

    createProgramUser(programUser: ProgramUserModel) {
        return this.apiService.post(this.path, programUser);
    }

    editProgramUser(id: any, programUser: ProgramUserModel) {
        return this.apiService.put((this.path+ '/' + id), programUser);
    }

    deleteProgramUser(id: any) {
        return this.apiService.delete((this.path+'/' + id))
          
    }
};
