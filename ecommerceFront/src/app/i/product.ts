import { Category } from './category';

export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  productImg: string;
  productDescription: string;
  productCategory: Category;
}
