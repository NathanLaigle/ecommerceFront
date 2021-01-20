import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/i/user';
import { UsersService } from 'src/app/s/users.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  constructor(private _user: UsersService, private _route: ActivatedRoute) {}

  public users: User = this._user.users;
  public id: Number;
  userId: Number;

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   this.id = params['id'];
    //   console.log(this);
    // });

    // const id = this._route.snapshot.paramMap.get('id');
    // this._user.id = id;
    console.log(this._route);

    this._route.params.subscribe((params) => {
      console.log(params);
      // this.userId = data.id;
      // console.log(data.id);

      const users = this._user.users;
      this._user.postUser(users).subscribe((data: User) => {
        this.users = data;
      });
      // this.user = this._route.queryParams.subscribe((params) => {
      //   this.idUser = params['id'];
      //   console.log('params', params, this.idUser); // Print the parameter to the console.
      // });
    });
  }
}
