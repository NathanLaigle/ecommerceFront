import { TestBed } from '@angular/core/testing';

import { ApiSettingService } from './api-setting.service';

describe('ApiSettingService', () => {
  let service: ApiSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
