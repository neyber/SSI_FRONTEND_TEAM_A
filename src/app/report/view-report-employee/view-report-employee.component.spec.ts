import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportEmployeeComponent } from './view-report-employee.component';

describe('ViewReportEmployeeComponent', () => {
  let component: ViewReportEmployeeComponent;
  let fixture: ComponentFixture<ViewReportEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReportEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
