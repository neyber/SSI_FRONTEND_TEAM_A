import { TestBed, inject } from '@angular/core/testing';

import { SaClassificationService } from './sa-classification.service';

describe('SaClassificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaClassificationService]
    });
  });

  it('should be created', inject([SaClassificationService], (service: SaClassificationService) => {
    expect(service).toBeTruthy();
  }));
});
