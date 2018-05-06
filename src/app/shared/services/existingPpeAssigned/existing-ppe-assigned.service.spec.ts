import { TestBed, inject } from '@angular/core/testing';

import { ExistingPpeAssignedService } from './existing-ppe-assigned.service';

describe('ExistingPpeAssignedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistingPpeAssignedService]
    });
  });

  it('should be created', inject([ExistingPpeAssignedService], (service: ExistingPpeAssignedService) => {
    expect(service).toBeTruthy();
  }));
});
