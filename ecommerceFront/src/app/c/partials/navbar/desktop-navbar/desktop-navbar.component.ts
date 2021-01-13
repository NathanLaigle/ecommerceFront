import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/i/cartItem';
import { Category } from 'src/app/i/category';
import { NFrameService } from 'src/app/s/animation/n-frame.service';
import { CartService } from 'src/app/s/cart.service';
import { CategoryService } from 'src/app/s/category.service';

@Component({
  selector: 'app-desktop-navbar',
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.scss'],
})
export class DesktopNavbarComponent implements OnInit {
  constructor(
    private _categories: CategoryService,
    private _nframe: NFrameService,
    private _cart: CartService
  ) {}

  public cart: CartItem[];
  public categories: Category[] = this._categories.category;

  ngOnInit(): void {
    this._nframe.drop();
    this._cart.cartObservable.subscribe((data: CartItem[]) => {
      this.cart = data;
    });
  }

  onItemQuantityCount(): number {
    let count: number = 0;
    this.cart.forEach((item: CartItem) => {
      count += item.quantity;
    });
    return count;
  }
}
