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
    product: 'URL_HERE',
    user: 'URL_HERE',
    category: 'URL_HERE',
    order: 'URL_HERE',
  };
}
