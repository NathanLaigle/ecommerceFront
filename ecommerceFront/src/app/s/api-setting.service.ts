import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiSettingService {
  constructor() {}

  // Headers option
  option = {
    headers: { apiKey: 'API_KEY_HERE' },
  };

  // ApiURL
  url = {
    getProduct: 'URL_HERE',
    postProduct: 'URL_HERE',
  };
}
