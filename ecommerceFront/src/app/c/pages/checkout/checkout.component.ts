import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/i/product';
declare const paypal: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  product: Product = {
    category: {
      name: '',
      id: 1,
    },
    description: '',
    name: '',
    price: 20,
    id: 100,
    picture: 'lalal',
  };

  paidFor: boolean = false;

  constructor() {}

  ngOnInit(): void {
    paypal
      .Buttons({
        createOrder: (data, action) => {
          return action.order.create({
            purchase_units: [
              {
                description: this.product.description,
                amount: {
                  currency_code: 'USD',
                  value: this.product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          this.paidFor = true;
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(this.paypalElement.nativeElement);
  }
}
