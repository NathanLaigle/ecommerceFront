import { Injectable } from '@angular/core';
import { CartItem } from '../i/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: CartItem[];
}
