import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/i/category';
import { Product } from 'src/app/i/product';
import { CategoryService } from 'src/app/s/category.service';
import { ProductsService } from 'src/app/s/products.service';

@Component({
  selector: 'app-product-archive',
  templateUrl: './product-archive.component.html',
  styleUrls: ['./product-archive.component.scss'],
})
export class ProductArchiveComponent implements OnInit, DoCheck {
  constructor(
    private _products: ProductsService,
    private _route: ActivatedRoute,
    private _category: CategoryService
  ) {}

  products: Product[];
  idCategory: number;
  category: Category;
  sub: Subscription;

  ngOnInit(): void {
    // get current category id
    this.sub = this._route.params.subscribe((params) => {
      this.idCategory = +params['id'];

      // search category with id
      this._category.category.forEach((category) => {
        if (category.id == this.idCategory) {
          this.category = category;
        }
      });
    });
  }

  ngDoCheck() {
    this.products = this._products.products;
  }
}
