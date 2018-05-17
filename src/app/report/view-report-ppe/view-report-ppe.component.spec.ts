import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportPpeComponent } from './view-report-ppe.component';

describe('ViewReportPpeComponent', () => {
  let component: ViewReportPpeComponent;
  let fixture: ComponentFixture<ViewReportPpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReportPpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportPpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
