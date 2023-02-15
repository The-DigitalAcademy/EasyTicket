import { TestBed } from '@angular/core/testing';

import { CompanyInforService } from './company-infor.service';

describe('CompanyInforService', () => {
  let service: CompanyInforService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyInforService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
