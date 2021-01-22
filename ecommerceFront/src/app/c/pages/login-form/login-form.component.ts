import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUser, User } from '../../../i/user';
import { AuthService } from '../../../s/auth.service';
import { UsersService } from '../../../s/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    public login: UsersService
  ) {}

  public _authForm: FormGroup;
  public _isSubmitted = false;

  ngOnInit() {
    this._authForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.login.userObservable.subscribe((data: CurrentUser) => {
      console.log(data);
    });
  }

  // login(form) {
  //   this._isSubmitted = true;
  //   if (this._authForm.invalid) {
  //     console.log('invalid');
  //     return;
  //   }
  //   this._authService.logIn(form.value).subscribe((res) => {
  //     console.log('Logged in!');
  //     this._router.navigateByUrl('/');
  //   });
  // }

  get formControls() {
    return this._authForm.controls;
  }

  // signIn() {
  //   this.isSubmitted = true;
  //   if (this.authForm.invalid) {
  //     return;
  //   }
  //   this.authService.logIn(this.authForm.value);
  //   this.router.navigateByUrl('/user/account');
  // }
}
