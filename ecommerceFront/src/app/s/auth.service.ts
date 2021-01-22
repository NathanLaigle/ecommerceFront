import { Injectable } from '@angular/core';
import { User } from '../i/user';
import { JwtResponse } from '../i/jwt-response';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  AUTH_SERVER = 'https://127.0.0.1:8000/api/users';
  authSubject = new BehaviorSubject(false);

  // public signIn(user: User) {
  //   localStorage.setItem('ACCESS_TOKEN', 'access_token');
  // }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}`, user).pipe(
      tap((res: JwtResponse) => {
        if (res.user) {
          localStorage.set('ACCESS_TOKEN', res.user.access_token);
          localStorage.set('EXPIRES_IN', res.user.expires_in);
          this.authSubject.next(true);
        }
      })
    );
  }

  logIn(user: User): Observable<JwtResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER}/login`, user).pipe(
      tap(async (res: JwtResponse) => {
        if (res.user) {
          localStorage.setItem('ACCESS_TOKEN', res.user.access_token);
          localStorage.setItem('EXPIRES_IN', res.user.expires_in.toString());
          this.authSubject.next(true);
        }
      })
    );
  }
  logOut() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
    this.authSubject.next(false);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  isAuthenticated() {
    return this.authSubject.asObservable();
  }
  // public logout() {
  //   localStorage.removeItem('ACCESS_TOKEN');
  // }
}
