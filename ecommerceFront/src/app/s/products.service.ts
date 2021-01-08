import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../i/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  products: Product;
  urlProductGet: string = 'test';
  option = {
    headers: { apiKey: 'lalala' },
  };

  loadProducts() {
    this._http.get(this.urlProductGet, this.option).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
