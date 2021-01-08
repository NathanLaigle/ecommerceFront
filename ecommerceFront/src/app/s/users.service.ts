import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(
    private _http: HttpClient,
    private _apiSettings: ApiSettingsService
  ) {}

  private option = this._apiSettings.option;
  private url = this._apiSettings.url.user;

  public userCurrent: User;

  // Connexion
  userConnect(login: login): void {
    this._http
      .post(this.url, { requestType: 'connexion', data: login }, this.option)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

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
