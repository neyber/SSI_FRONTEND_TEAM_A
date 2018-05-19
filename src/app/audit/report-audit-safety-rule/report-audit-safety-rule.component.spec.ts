import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAuditSafetyRuleComponent } from './report-audit-safety-rule.component';

describe('ReportAuditSafetyRuleComponent', () => {
  let component: ReportAuditSafetyRuleComponent;
  let fixture: ComponentFixture<ReportAuditSafetyRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAuditSafetyRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAuditSafetyRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
