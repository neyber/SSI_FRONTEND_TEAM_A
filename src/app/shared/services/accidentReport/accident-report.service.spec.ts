import { TestBed, inject } from '@angular/core/testing';

import { AccidentReportService } from './accident-report.service';

describe('AccidentReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentReportService]
    });
  });

  it('should be created', inject([AccidentReportService], (service: AccidentReportService) => {
    expect(service).toBeTruthy();
  }));
});
