import { TestBed, inject } from '@angular/core/testing';

import { WorkItemClassService } from './work-item-class.service';

describe('WorkItemClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkItemClassService]
    });
  });

  it('should be created', inject([WorkItemClassService], (service: WorkItemClassService) => {
    expect(service).toBeTruthy();
  }));
});
