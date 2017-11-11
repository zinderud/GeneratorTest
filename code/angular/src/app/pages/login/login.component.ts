import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { Logger } from '../../core/logger.service';
import { I18nService } from '../../core/i18n.service';
import { Errors  } from '../../core';
import { Angular2TokenService } from '../../core/angular2-token.service';
import { SignInData } from '../../core/angular2-token.model';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor( ) {    }

  ngOnInit() { }
}
