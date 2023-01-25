import { TestBed } from '@angular/core/testing';

import { EasyticketService } from './easyticket.service';

describe('EasyticketService', () => {
  let service: EasyticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
