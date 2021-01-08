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

  private option = this._apiSettings.option;
  private url = this._apiSettings.url.getProduct;

  public products: Product[];

  loadProducts(): void {
    this._http.get(this.url, this.option).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
