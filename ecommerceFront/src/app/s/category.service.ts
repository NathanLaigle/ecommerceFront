import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../i/category';
import { ApiSettingsService } from './api-settings.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(
    private _http: HttpClient,
    private _apiSettings: ApiSettingsService
  ) {}

  private url = this._apiSettings.url.getCategory;
  private option = this._apiSettings.option;

  public category: Category;

  loadCategroy(): void {
    this._http.get(this.url, this.option).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }
}
