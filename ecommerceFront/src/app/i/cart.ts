import { Product } from './product';

export interface Cart {
  userId: number;
  products: {
    quantity: number;
    product: Product;
  }[];
}
