import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExistingPpeAssignedComponent } from './view-existing-ppe-assigned.component';

describe('ViewExistingPpeAssignedComponent', () => {
  let component: ViewExistingPpeAssignedComponent;
  let fixture: ComponentFixture<ViewExistingPpeAssignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExistingPpeAssignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExistingPpeAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
