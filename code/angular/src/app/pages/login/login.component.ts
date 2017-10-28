import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { Logger } from '../../core/logger.service';
import { I18nService } from '../../core/i18n.service';
import { Errors , UserService } from '../../core';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = new Errors();
  isSubmitting = false;
  authForm: FormGroup;
  version: string = environment.version;
  error: string = null;
  isLoading = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private i18nService: I18nService,
              private translateService: TranslateService,
              private userService: UserService) {
                this.authForm = this.formBuilder.group({
                  email: ['', Validators.required],
                  password: ['', Validators.required],
                  username: ['']
                });
              }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      if ( this.authType === 'login') {
        this.title = 'Login';
        this.translateService.get('Login').subscribe((res: string) => { this.title = res; });
      }else {
         this.title = 'Logout';
         this.translateService.get('Logout').subscribe((res: string) => { this.title = res; });
        }

  this.translateService.get('Login').subscribe((res: string) => { this.title = res; });
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      }
    });
   }

  login() {
    this.isSubmitting = true;
    this.errors = new Errors();

    const credentials = this.authForm.value;
   
      this.isLoading = true;
   
      this.isSubmitting = true;
      this.errors = new Errors();
  
  
      this.userService
      .attemptAuth(this.authType, credentials)
      .subscribe(
        data => this.router.navigateByUrl('/'),
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
    
    }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }



}
