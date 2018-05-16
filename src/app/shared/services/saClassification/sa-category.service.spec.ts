import { TestBed, inject } from '@angular/core/testing';

import { SaCategoryService } from './sa-category.service';

describe('SaCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaCategoryService]
    });
  });

  it('should be created', inject([SaCategoryService], (service: SaCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
