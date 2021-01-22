import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUser, User } from '../../../i/user';
import { AuthService } from '../../../s/auth.service';
import { UsersService } from 'src/app/s/users.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    public register: UsersService
  ) {}

  public authForm: FormGroup;
  public isSubmitted = false;

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$'
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
      cp: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      town: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.register.userObservable.subscribe((data: CurrentUser) => {
      console.log(data.id);
      if (data.id) {
        const url = `/user/account?id=${data.id}`;
        this.router.navigateByUrl(url);
      }
    });
  }

  passwordMatchValidator(group: FormGroup) {
    return group.get('password').value === group.get('passwordConfirm').value
      ? null
      : { mismatch: true };
  }

  // register(form) {
  //   if (this.authForm.dirty && this.authForm.valid) {
  //     this.authService.register(form.value).subscribe((res) => {
  //       console.log(res);
  //       const url = `/user/account?id=`;
  //       this.router.navigateByUrl(url);
  //     });
  //   }
  // }

  get formControls() {
    return this.authForm.controls;
  }

  getErrorMessage() {
    if (this.authForm.controls.email.hasError('required')) {
      return 'Vous devez entrer votre adresse email';
    }

    return this.authForm.controls.email.hasError('email')
      ? 'Adresse email non valide'
      : '';
  }
}
