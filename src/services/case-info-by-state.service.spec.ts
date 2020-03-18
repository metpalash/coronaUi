import { TestBed } from '@angular/core/testing';

import { CaseInfoByStateService } from './case-info-by-state.service';

describe('CaseInfoByStateService', () => {
  let service: CaseInfoByStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseInfoByStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
