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
  public curUser: CurrentUser;

  ngOnInit(): void {
    this.curUser = localStorage.getItem('CURRENT_USER')
      ? JSON.parse(localStorage.getItem('CURRENT_USER'))
      : '';
    !this.curUser ? this._router.navigateByUrl('/user/login') : '';
  }

  deleteAccount(): void {
    this._user.delete(this.curUser.id).subscribe(
      (data) => {
        localStorage.clear();
        this._router.navigate(['/user/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    //envoyer donnée vide au usersubject
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
    localStorage.removeItem('EMAIL');
    localStorage.removeItem('CURRENT_USER');
    // console.log('MA', localStorage);
    this._router.navigateByUrl('/');
  }
}
