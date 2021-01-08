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

  // ApiURL
  url = {
    product: 'https://127.0.0.1:8001/api/post',
    user: 'URL_HERE',
    category: 'URL_HERE',
    order: 'URL_HERE',
  };
}
