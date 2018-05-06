import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExistingPpeAssignedComponent } from './update-existing-ppe-assigned.component';

describe('UpdateExistingPpeAssignedComponent', () => {
  let component: UpdateExistingPpeAssignedComponent;
  let fixture: ComponentFixture<UpdateExistingPpeAssignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExistingPpeAssignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExistingPpeAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
