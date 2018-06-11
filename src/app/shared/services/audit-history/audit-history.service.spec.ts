import { TestBed, inject } from '@angular/core/testing';

import { AuditHistoryService } from './audit-history.service';

describe('AuditHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditHistoryService]
    });
  });

  it('should be created', inject([AuditHistoryService], (service: AuditHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
