import { TestBed, inject } from '@angular/core/testing';

import { ExistingPpeService } from './existing-ppe.service';

describe('ExistingPpeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistingPpeService]
    });
  });

  it('should be created', inject([ExistingPpeService], (service: ExistingPpeService) => {
    expect(service).toBeTruthy();
  }));
});
