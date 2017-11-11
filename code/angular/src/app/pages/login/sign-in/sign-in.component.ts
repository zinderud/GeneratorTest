import { Component, OnInit } from '@angular/core';
import { SignInData } from '../../../core/angular2-token.model';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html'
})
export class SignInComponent {

    signInData: SignInData = <SignInData>{};


    constructor(public authService: AuthService, private router: Router) {}

    // Submit Data to Backend
    onSubmit() {

    

        this.authService.logInUser(this.signInData).subscribe(
            res => {
                if (res.status === 200){
                this.signInData     = <SignInData>{};
                this.router.navigate(['/']);
                }
            }, error => {
                console.log('err: ', error);


            }
        );
    }
}
