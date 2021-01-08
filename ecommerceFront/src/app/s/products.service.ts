import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../i/product';
import { ApiSettingService } from './api-setting.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _http: HttpClient,
    private _apiSetting: ApiSettingService
  ) {}

  products: Product[];

  loadProducts() {
    this._http
      .get(this._apiSetting.url.getProduct, this._apiSetting.option)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }
}
