import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  StripeCheckoutHandler,
  StripeCheckoutLoader,
} from 'ng-stripe-checkout';
import { CartItem } from 'src/app/i/cartItem';
import { CartService } from 'src/app/s/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewInit {
  constructor(
    private _cart: CartService,
    private _stripeCheckoutLoader: StripeCheckoutLoader
  ) {}

  total: number;
  cart: CartItem[];
  private stripeCheckoutHandler: StripeCheckoutHandler;

  ngOnInit(): void {
    this._cart.cartObservable.subscribe((data: CartItem[]) => {
      this.cart = data;
      this.total = this._cart.getCartTotal();
    });
  }

  ngAfterViewInit() {
    this._stripeCheckoutLoader
      .createHandler({
        key: environment.stripe_key,
        token: (token) => {
          // Do something with the token...
          console.log('Payment successful!', token);
        },
      })
      .then((handler: StripeCheckoutHandler) => {
        this.stripeCheckoutHandler = handler;
      });
  }

  public onClickBuy() {
    this.stripeCheckoutHandler.open({
      amount: 1500,
      currency: 'EUR',
    });
  }
}
