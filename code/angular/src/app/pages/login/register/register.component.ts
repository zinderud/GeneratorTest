import { Component, OnInit } from '@angular/core';
import { RegisterData } from '../../../core/angular2-token.model';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent {
  registerData: RegisterData = <RegisterData>{};
 

  constructor(public authService: AuthService, private router: Router) {}

  // Submit Data to Backend
  onSubmit() {
    this.authService.registerUser(this.registerData).subscribe(
      res => {
        if (res.status === 200) {
          this.registerData = <RegisterData>{};
          this.router.navigate(['/']);
        }
      },
      error => {
        console.log('err: ', error);
      }
    );
  }
}
