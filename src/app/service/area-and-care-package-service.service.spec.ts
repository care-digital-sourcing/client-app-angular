import { TestBed } from '@angular/core/testing';

import { AreaAndCarePackageServiceService } from './area-and-care-package-service.service';

describe('AreaAndCarePackageServiceService', () => {
  let service: AreaAndCarePackageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaAndCarePackageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
