import { Component, OnInit } from '@angular/core';
import { Email, UsersService } from 'src/app/s/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentUser, User } from '../../../i/user';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  constructor(private _user: UsersService, private _router: Router) {}
  public curUser: CurrentUser = {
    id: 0,
    lastname: '',
    firstname: '',
    address: '',
    cp: '',
    town: '',
    token: '',
    expires_in: '',
    email: '',
  };

  ngOnInit(): void {
    const ls = { email: localStorage.getItem('EMAIL') };
    this._user.account(ls).subscribe(
      (data: CurrentUser) => {
        if (data) {
          this.curUser = data;
          data.token = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
          data.expires_in = localStorage.getItem('EXPIRES_IN');
          console.log(data);
        }
      },
      (error) => console.log(error)
    );
  }
  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
    localStorage.removeItem('EMAIL');
    console.log('MA', localStorage);
    this._router.navigateByUrl('/user/login');
  }
}
