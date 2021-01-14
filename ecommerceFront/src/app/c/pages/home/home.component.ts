import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/i/category';
import { Product } from 'src/app/i/product';
import { CategoryService } from 'src/app/s/category.service';
import { ProductsService } from 'src/app/s/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _products: ProductsService,
    private _category: CategoryService
  ) {}

  categories: Category[];
  products: Product[];

  ngOnInit(): void {
    let subProducts = this._products.http.subscribe((data: Product[]) => {
      this.products = data;
      subProducts.unsubscribe();
    });
    let subCategories = this._category.categories.subscribe(
      (data: Category[]) => {
        this.categories = data;
        subCategories.unsubscribe();
      }
    );
  }
}
