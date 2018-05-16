import { TestBed, inject } from '@angular/core/testing';

import { SaTypeService } from './sa-type.service';

describe('SaTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaTypeService]
    });
  });

  it('should be created', inject([SaTypeService], (service: SaTypeService) => {
    expect(service).toBeTruthy();
  }));
});
