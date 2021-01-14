import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiSettingsService {
  constructor() {}

  // Headers option
  option = {
    headers: { apiKey: 'API_KEY_HERE' },
  };

  // uploads path
  uplaods: string = 'https://127.0.0.1:8002/uploads/';

  // ApiURL
  url = {
    product: 'https://127.0.0.1:8002/api/products',
    user: 'URL_HERE',
    category: 'URL_HERE',
    order: 'URL_HERE',
  };
}
