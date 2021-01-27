import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CurrentUser, User } from '../i/user';
import { ApiSettingsService } from './api-settings.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';

export interface login {
  mail: string;
  pswd: string;
}

export interface Email {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  pipe(arg0: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private _route: ActivatedRoute,
    private _http: HttpClient,
    private _apiSettings: ApiSettingsService
  ) {}

  private _option = this._apiSettings.option;
  private _url = this._apiSettings.url.user;
  public http: Observable<object> = this._http.post(this._url, this._option);

  user = {};
  userSubject: Subject<object> = new BehaviorSubject(this.user);
  userObservable: Observable<object> = this.userSubject.asObservable();

  postUser(data): Observable<object> {
    let http = this._http.post(this._url, data, this._option);
    return http;
  }

  // Création de compte
  register(form: FormGroup) {
    let http = this._http
      .post(this._url.concat('/register'), form.value, this._option)
      .subscribe((data: CurrentUser) => {
        this.userSubject.next(data);
      });
  }

  // Connexion
  login(form: FormGroup): void {
    this._http
      .post(this._url.concat('/login'), form.value, this._option)
      .subscribe(
        (data: CurrentUser) => this.userSubject.next(data),
        (error) => console.log(error)
      );
  }
  delete(id: number): Observable<any> {
    return this._http.delete(this._url.concat(`/deleteuser/${id}`));
  }

  update(user: User): void {
    this._http
      .post(this._url.concat('/updateUser'), user.id, this._option)
      .subscribe((data: any) => {
        this.userSubject.next(data);
      });
  }

  // get user info with email from JWT token
  getUserFromToken(ls: Email): Observable<object> {
    let http = this._http.post(this._url.concat('/account'), ls, this._option);

    return http;
  }
}
