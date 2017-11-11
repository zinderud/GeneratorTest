import { Component, OnInit } from '@angular/core';
import { UpdatePasswordData } from '../../../core/angular2-token.model';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'change-password',
  templateUrl: 'change-password.component.html'
})
export class ChangePasswordComponent {
  updatePasswordData: UpdatePasswordData = <UpdatePasswordData>{};
  output: any;

  constructor(public authService: AuthService, private router: Router) {}

  // Submit Data to Backend
  onSubmit() {
    this.output = null;

    this.authService.updatePassword(this.updatePasswordData).subscribe(
      res => {
        this.updatePasswordData = <UpdatePasswordData>{};
        this.router.navigate(['/']);
      },
      error => {
        console.log('err: ', error);
            }
    );
  }
}
