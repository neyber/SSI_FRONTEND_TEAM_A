import { TestBed, inject } from '@angular/core/testing';

import { SicknessService } from './sickness.service';

describe('SicknessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SicknessService]
    });
  });

  it('should be created', inject([SicknessService], (service: SicknessService) => {
    expect(service).toBeTruthy();
  }));
});
