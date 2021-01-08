import { Product } from './product';

export interface CartItem {
  userId: number;
  products: {
    quantity: number;
    product: Product;
  }[];
}
