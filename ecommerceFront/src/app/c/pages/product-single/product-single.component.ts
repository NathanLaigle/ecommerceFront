import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/i/product';
import { ApiSettingsService } from 'src/app/s/api-settings.service';
import { ProductsService } from 'src/app/s/products.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss'],
})
export class ProductSingleComponent implements OnInit {
  constructor(
    private _products: ProductsService,
    private _route: ActivatedRoute,
    private _api: ApiSettingsService
  ) {}

  public uplaods: string = this._api.uplaods;
  public products: Product[];
  // This fake data is here to ovoid errors in console.
  // Without it, product is not defined until async operations are done
  // But is used in template.
  public product: Product = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    category: { id: 0, name: '' },
    description: '',
    id: 0,
    name: '',
    picture: 'e65cf6b20d2d2f19f90db2a97079eb11a8dd9e51.jpeg',
=======
=======
>>>>>>> parent of 704c58c... Componant : single product
=======
>>>>>>> parent of 704c58c... Componant : single product
=======
>>>>>>> parent of 704c58c... Componant : single product
    category: { id: -1, name: 'no' },
    description: 'no',
    id: -1,
    name: 'no',
    picture: 'no',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 704c58c... Componant : single product
=======
>>>>>>> parent of 704c58c... Componant : single product
=======
>>>>>>> parent of 704c58c... Componant : single product
=======
>>>>>>> parent of 704c58c... Componant : single product
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
