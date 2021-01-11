import { Component, DoCheck, HostListener, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/i/category';
import { Product } from 'src/app/i/product';
import { NFrameService } from 'src/app/s/animation/n-frame.service';
import { CategoryService } from 'src/app/s/category.service';
import { ProductsService } from 'src/app/s/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {
  constructor(
    private _products: ProductsService,
    private _category: CategoryService,
    private _nframe: NFrameService
  ) {}

  categories: Category[] = this._category.category;
  products: Product[] = this._products.products;

  //test
  numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  ngOnInit(): void {
    this._nframe.doAll();
    this._products.loadProducts();
    this.products = this._products.products;
  }

  ngDoCheck() {
    this.products = this._products.products;
  }
}
