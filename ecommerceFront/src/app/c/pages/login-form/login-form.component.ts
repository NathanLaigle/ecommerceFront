import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUser, User } from '../../../i/user';
import { UsersService } from '../../../s/users.service';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    public login: UsersService
  ) {}

  public _authForm: FormGroup;
  public _isSubmitted = false;
  authSubject = new BehaviorSubject(false);

  ngOnInit() {
    this._authForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.login.userObservable.subscribe((data: CurrentUser) => {
      const token = JSON.stringify(data.token);
      if (token) {
        const decoded: any = jwt_decode(token);
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        localStorage.setItem('ACCESS_TOKEN', token);
        localStorage.setItem('EXPIRES_IN', date.toString());
        localStorage.setItem('EMAIL', decoded.email);
        console.log('LF', localStorage);
        this._router.navigateByUrl('/user/account');
      }
    });
  }

  getErrorMessage(item: string) {
    const error = this._authForm.controls;
    const emailErr = error.email;
    const passwordErr = error.password;
    switch (item) {
      case 'email':
        if (emailErr.hasError('required')) {
          return 'Vous devez votre adresse email';
        }
        return emailErr.hasError('email') ? 'Adresse email non valide' : '';
      case 'password':
        if (passwordErr.hasError('required')) {
          return 'Veuillez entrer votre mot de passe';
        }
    }
  }
}
