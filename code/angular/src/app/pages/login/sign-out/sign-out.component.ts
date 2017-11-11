import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from '../../../core/angular2-token.service';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-out',
  templateUrl: 'sign-out.component.html'
})
export class SignOutComponent {
  output: any;

  constructor(public authService: AuthService, private router: Router) {}

  // Submit Data to Backend
  onSubmit() {
    this.authService.logOutUser().subscribe(() => {
      this.router.navigate(['/']);
    });
}
}
