import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPpeAssignedComponent } from './existing-ppe-assigned.component';

describe('ExistingPpeAssignedComponent', () => {
  let component: ExistingPpeAssignedComponent;
  let fixture: ComponentFixture<ExistingPpeAssignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingPpeAssignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPpeAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
