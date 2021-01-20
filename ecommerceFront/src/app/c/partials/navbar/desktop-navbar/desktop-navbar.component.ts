import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/i/cartItem';
import { Category } from 'src/app/i/category';
import { NFrameService } from 'src/app/s/animation/n-frame.service';
<<<<<<< HEAD
=======
import { CartService } from 'src/app/s/cart.service';
>>>>>>> Nathan
import { CategoryService } from 'src/app/s/category.service';

@Component({
  selector: 'app-desktop-navbar',
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.scss'],
})
export class DesktopNavbarComponent implements OnInit {
  constructor(
    private _categories: CategoryService,
<<<<<<< HEAD
    private _nframe: NFrameService
=======
    private _nframe: NFrameService,
    private _cart: CartService
>>>>>>> Nathan
  ) {}

  public cart: CartItem[];
  public categories: Category[];

  ngOnInit(): void {
    this._nframe.drop();
<<<<<<< HEAD
=======
    this._cart.cartObservable.subscribe((data: CartItem[]) => {
      this.cart = data;
    });
    let subCategories = this._categories.categories.subscribe(
      (data: Category[]) => {
        this.categories = data;
        subCategories.unsubscribe();
      }
    );
  }

  onItemQuantityCount(): number {
    let count: number = 0;
    this.cart.forEach((item: CartItem) => {
      count += item.quantity;
    });
    return count;
>>>>>>> Nathan
  }
}
