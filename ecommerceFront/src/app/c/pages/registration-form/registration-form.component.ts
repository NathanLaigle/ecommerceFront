import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  public user: CurrentUser;

  ngOnInit() {
    localStorage.clear();
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
      if (data.id) {
        const url = '/user/login';
        this.router.navigateByUrl(url);
      }
    });
  }

  getErrorMessage(item: string) {
    const error = this.authForm.controls;
    const emailErr = error.email;
    const lastnameErr = error.lastname;
    const firstnameErr = error.firstname;
    const passwordErr = error.password;
    const addressErr = error.address;
    const cpErr = error.cp;
    const townErr = error.town;

    switch (item) {
      case 'lastname':
        if (lastnameErr.hasError('required')) {
          return 'Vous devez entrer votre nom';
        }
        return lastnameErr.hasError('minlength')
          ? 'Votre nom doit faire plus de 3 caractères'
          : '';
      case 'firstname':
        if (firstnameErr.hasError('required')) {
          return 'Vous devez entrer votre prénom';
        }
        return firstnameErr.hasError('minlength')
          ? 'Votre prénom doit faire plus de 3 caractères'
          : '';
      case 'email':
        if (emailErr.hasError('required')) {
          return 'Vous devez entrer une adresse email';
        }
        return emailErr.hasError('email') ? 'Adresse email non valide' : '';
      case 'password':
        if (passwordErr.hasError('required')) {
          return 'Vous devez choisir un mot de passe';
        }
        return passwordErr.hasError('pattern')
          ? 'Le mot de passe dois contenir 8 caractères avec un chiffre et une lettre majuscule'
          : '';
      case 'address':
        if (addressErr.hasError('required')) {
          return 'Vous devez entrer votre adresse';
        }
        return addressErr.hasError('minlength')
          ? 'Votre ville doit faire plus de 3 caractères'
          : '';
      case 'cp':
        if (cpErr.hasError('required')) {
          return 'Vous devez entrer votre code postal';
        }
        return cpErr.hasError('pattern') ? 'Code postal invalide' : '';
      case 'town':
        if (townErr.hasError('required')) {
          return 'Vous devez entrer votre ville';
        }
        return townErr.hasError('minlength')
          ? 'Votre ville doit faire plus de 3 caractères'
          : '';
    }
  }
}
