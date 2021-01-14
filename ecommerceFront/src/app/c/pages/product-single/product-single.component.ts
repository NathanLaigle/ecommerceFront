import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/i/product';
import { ProductsService } from 'src/app/s/products.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss'],
})
export class ProductSingleComponent implements OnInit {
  constructor(
    private _products: ProductsService,
    private _route: ActivatedRoute
  ) {}

  public products: Product[];
  // This fake data is here to ovoid errors in console.
  // Without it, product is not defined until async operations are done
  // But is used in template.
  public product: Product = {
    category: { id: -1, name: 'no' },
    description: 'no',
    id: -1,
    name: 'no',
    picture: 'no',
    price: 0,
  };
  public productId: number;

  ngOnInit(): void {
    // get route params
    this._route.params.subscribe((data: any) => {
      this.productId = data.id;
      //get products
      let subProducts = this._products.http.subscribe((data: Product[]) => {
        this.products = data;
        //find current product
        this.products.forEach((product: Product) => {
          if (product.id == this.productId) {
            this.product = product;
          }
        });
        subProducts.unsubscribe();
      });
    });
  }
}
