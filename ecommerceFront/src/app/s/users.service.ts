import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginInfo, CurrentUser, User } from '../i/user';
import { ApiSettingsService } from './api-settings.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';

export interface login {
  mail: string;
  pswd: string;
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
    this._route.params.subscribe((params) => {
      console.log('p', params);
    });
    let http = this._http.post(this._url, data, this._option);
    return http;
  }

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
        (data: LoginInfo) => console.log(data),
        (error) => console.log(error)
      );
  }
}
