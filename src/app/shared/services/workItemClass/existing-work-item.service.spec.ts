import { TestBed, inject } from '@angular/core/testing';

import { ExistingWorkItemService } from './existing-work-item.service';

describe('ExistingWorkItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistingWorkItemService]
    });
  });

  it('should be created', inject([ExistingWorkItemService], (service: ExistingWorkItemService) => {
    expect(service).toBeTruthy();
  }));
});
