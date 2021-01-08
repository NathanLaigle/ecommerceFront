import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './i/product';
import { ProductsService } from './s/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  constructor(private _products: ProductsService) {}

  public products: Product[];

  ngOnInit(): void {
    this._products.loadProducts();
  }

  ngDoCheck(): void {
    this.products = this._products.products;
  }
}
