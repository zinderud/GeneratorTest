import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from './user.model';


@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  // tslint:disable-next-line:member-ordering
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  // tslint:disable-next-line:member-ordering
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService
  ) {}
  
  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
/*   registerUser(user: User) {
    console.log(user)
   return this.apiService.post('/api/users/sign_up', user )
    .map(
      data => {
        this.setAuth(data.user);
        return data; });
  } */

  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.post('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next(new User());
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type: any, credentials: any): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    console.log(route)
    return this.apiService.post('/users' + route, {user: credentials})
    .map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user: any): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    });
  }

}