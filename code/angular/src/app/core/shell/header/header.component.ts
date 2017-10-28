import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { I18nService } from '../../i18n.service';
import { AuthGuard, UserService } from '../../index';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  credentials: string;

  menuHidden = true;

  constructor(private router: Router,
    private userService: UserService,
              private authenticationService: AuthGuard,
              private i18nService: I18nService) { }

  ngOnInit() { }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string {
 
    this.userService.currentUser.subscribe(
      (userData) => {
        this.credentials = userData.username;
      }
    )
 
    console.log(this.credentials);
    return this.credentials ? this.credentials : null;

  }

}
