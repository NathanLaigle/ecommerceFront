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

  private url = this._apiSettings.url.category;
  private option = this._apiSettings.option;

  public category: Category[] = [
    {
      id: 0,
      name: 'Homme',
    },
    {
      id: 1,
      name: 'Femme',
    },
    {
      id: 2,
      name: 'Accessoire',
    },
  ];

  loadCategroy(): void {
    this._http.get(this.url, this.option).subscribe(
      (data: Category[]) => (this.category = data),
      (error) => console.log(error)
    );
  }
}
