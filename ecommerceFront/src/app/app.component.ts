import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './i/product';
import { User } from './i/user';
import { ProductsService } from './s/products.service';
import { UsersService } from './s/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  constructor(
    private _products: ProductsService,
    private _users: UsersService
  ) {}

  public products: Product[];
  public user: User;

  public loader: boolean = true;

  ngOnInit(): void {
    this._products.loadProducts();
    this._users
      .postUser({ mail: 'test', pswd: 'pswd' })
      .subscribe(
        (data: User) => (
          (this.user = data), console.log('this user', this.user)
        )
      );
  }

  ngDoCheck(): void {
    this.products = this._products.products;
    setTimeout(() => (this.loader = false), 1500);
  }
}
