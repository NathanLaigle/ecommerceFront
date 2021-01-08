import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../i/product';
import { ApiSettingsService } from './api-settings.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _http: HttpClient,
    private _apiSettings: ApiSettingsService
  ) {}

  products: Product[];

  loadProducts(): void {
    this._http
      .get(this._apiSettings.url.getProduct, this._apiSettings.option)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }
}
