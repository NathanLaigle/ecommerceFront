import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../i/user';
import { ApiSettingsService } from './api-settings.service';

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
    private _http: HttpClient,
    private _apiSettings: ApiSettingsService
  ) {}

  private option = this._apiSettings.option;
  private url = this._apiSettings.url.user;

  public users: User;
  public http: Observable<object> = this._http.post(this.url, this.option);

  postUser(data: login): Observable<object> {
    let http = this._http.post(this.url, data, this.option);
    return http;
  }

  // Connexion
  userConnect(login: login): void {
    this._http
      .post(this.url, { requestType: 'connexion', data: login }, this.option)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

  // loadUsers() {
  //   this._http
  //     .get(this.url, this.option)
  //     .subscribe(
  //       (data: User) => setTimeout(() => (this.users = data)),
  //       (error) => console.log(error)
  //     );
  // }

  // Account creation
  userCreate(user: User): void {
    this._http
      .post(this.url, { requestType: 'creation', data: user }, this.option)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }
}
