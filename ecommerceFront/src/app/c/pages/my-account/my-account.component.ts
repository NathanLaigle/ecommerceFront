import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/i/user';
import { UsersService } from 'src/app/s/users.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  constructor(private _users: UsersService) {}

  public users: User = this._users.users;

  ngOnInit(): void {}
}
