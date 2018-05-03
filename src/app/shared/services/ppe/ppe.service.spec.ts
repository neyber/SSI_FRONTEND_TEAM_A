import { TestBed, inject } from '@angular/core/testing';

import { PpeService } from './ppe.service';

describe('PpeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PpeService]
    });
  });

  it('should be created', inject([PpeService], (service: PpeService) => {
    expect(service).toBeTruthy();
  }));
});
