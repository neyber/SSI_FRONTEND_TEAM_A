import { TestBed, inject } from '@angular/core/testing';
import { PpeClassificationService } from './ppe-classification.service';

describe('PpeClassificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PpeClassificationService]
    });
  });

  it('should be created', inject([PpeClassificationService], (service: PpeClassificationService) => {
    expect(service).toBeTruthy();
  }));
});
