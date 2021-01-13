import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/i/cartItem';
import { NFrameService } from 'src/app/s/animation/n-frame.service';
import { CartService } from 'src/app/s/cart.service';
import { CategoryService } from 'src/app/s/category.service';
declare let $: any;

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements OnInit {
  constructor(
    private _nframe: NFrameService,
    private _categories: CategoryService,
    private _cart: CartService
  ) {}

  ngOnInit(): void {
    this._nframe.drop();
    this._cart.cartObservable.subscribe((data: CartItem[]) => {
      this.cart = data;
    });
  }

  navIncrement: boolean = true;

  onNavOpen() {
    this.navIncrement
      ? $('#nav').addClass('fa-times')
      : $('#nav').removeClass('fa-times');
    this.navIncrement = !this.navIncrement;
  }

  onItemQuantityCount(): number {
    let count: number = 0;
    this.cart.forEach((item: CartItem) => {
      count += item.quantity;
    });
    return count;
  }

  public cart: CartItem[];
  public menuOpen: boolean = false;
  public categories = this._categories.category;
}
