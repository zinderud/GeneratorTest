import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { I18nService } from '../../core/i18n.service';
import { Angular2TokenService } from '../../core/angular2-token.service';
import { UserData } from '../../core/angular2-token.model';
import { retry } from 'rxjs/operator/retry';
import { AuthService } from '../../core/auth.service';
 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  credentials: string;

  menuHidden = true;

  constructor(private router: Router,
    public authService: AuthService,
     private i18nService: I18nService) { }

  ngOnInit() {  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authService.logOutUser().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

   get username(): string {
 
    return localStorage.getItem('uid');
      
 

  } 

}
