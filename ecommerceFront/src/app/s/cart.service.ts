import { Injectable } from '@angular/core';
import { CartItem } from '../i/cartItem';
import { Product } from '../i/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: CartItem[];

  onAddToCart(product: Product) {
    // Search if product allready exists on cart
    this.cart.forEach((item: CartItem) => {
      if (item.product.id == product.id) {
        item.quantity++;
        return;
      }
    });

    // If not add this product to cart (with quantity = 1)
    this.cart.push({ quantity: 1, product });
  }

  onRemoveFromCart(product: Product) {
    // Search product in cart
    this.cart.forEach((item, index, object) => {
      if (item.product.id == product.id) {
        // Update cart
        item.quantity--;
        // If item quantity == 0, delete it from the cart
        if (item.quantity == null) {
          object.splice(index, 1);
        }
      }
    });
  }
}
