import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExistingPpeAssignedComponent } from './create-existing-ppe-assigned.component';

describe('CreateExistingPpeAssignedComponent', () => {
  let component: CreateExistingPpeAssignedComponent;
  let fixture: ComponentFixture<CreateExistingPpeAssignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExistingPpeAssignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExistingPpeAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
