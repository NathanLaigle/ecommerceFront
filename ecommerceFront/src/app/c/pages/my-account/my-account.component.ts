import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/s/auth.service';
import { UsersService } from 'src/app/s/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentUser, User } from '../../../i/user';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  constructor(
    private _user: UsersService,
    private _route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    public register: UsersService
  ) {}

  public users: User;
  public user: CurrentUser;
  public id: Number;
  userId: Number;

  ngOnInit(): void {
    this.register.userObservable.subscribe((user: CurrentUser) => {
      console.log(user);
      this.user = user;
    });
    const users = this._user.user;
    this._user.postUser(users).subscribe((data: User) => {
      this.users = data;
    });
  }

  // logout() {
  //   this.authService.logOut();
  //   this.router.navigateByUrl('/login');
  // }
}
