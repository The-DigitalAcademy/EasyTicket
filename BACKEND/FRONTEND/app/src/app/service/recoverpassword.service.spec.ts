import { TestBed } from '@angular/core/testing';

import { RecoverpasswordService } from './recoverpassword.service';

describe('RecoverpasswordService', () => {
  let service: RecoverpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
