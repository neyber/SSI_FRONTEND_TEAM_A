import { TestBed, inject } from '@angular/core/testing';

import { SafetyRuleService } from './safety-rule.service';

describe('SafetyRuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafetyRuleService]
    });
  });

  it('should be created', inject([SafetyRuleService], (service: SafetyRuleService) => {
    expect(service).toBeTruthy();
  }));
});
