import { Injectable } from '@angular/core';
 
import { Subject, Observable } from 'rxjs';
import { Response } from '@angular/http';
import { Angular2TokenService } from './angular2-token.service';
import { UpdatePasswordData, SignInData } from './angular2-token.model';


@Injectable()
export class AuthService {

  userSignedIn$: Subject<boolean> = new Subject();

  constructor(
    public authService: Angular2TokenService
  ) {
    this.authService.validateToken().subscribe(
      res => res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    );
  }

  logOutUser(): Observable<Response> {
    return this.authService.signOut().map(
      res => {
        this.userSignedIn$.next(false);
        return res;
      }
    );
  }

  registerUser(signUpData: {email: string, password: string, passwordConfirmation: string}): Observable<Response> {
    return this.authService.registerAccount(signUpData).map(
      res => {
        this.userSignedIn$.next(true);
        return res;
      }
    );
  }

  logInUser(signInData: SignInData): Observable<Response> {
    return this.authService.signIn(signInData).map(
      res => {
        this.userSignedIn$.next(true);
        return res;
      }
    );
  }
  updatePassword(updatePassword: UpdatePasswordData) {
    return this.authService.updatePassword(updatePassword).map(
      res => {
        this.userSignedIn$.next(true);
        return res;
      });
  }

}
