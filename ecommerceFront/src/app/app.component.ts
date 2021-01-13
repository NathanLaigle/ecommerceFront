import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from './i/product';
import { User } from './i/user';
import { ProductsService } from './s/products.service';
import { UsersService } from './s/users.service';
import { NFrameService } from './s/animation/n-frame.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _nframe: NFrameService,
    private _products: ProductsService,
    private _users: UsersService
  ) {}

  public products: Product[];
  public user: User;

  public loader: boolean = true;

  innerWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this._nframe.doAll();
    this._users
      .postUser({ mail: 'test', pswd: 'pswd' })
      .subscribe((data: User) => (this.user = data));
  }
}
