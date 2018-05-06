import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExistingPpeComponent } from './create-existing-ppe.component';

describe('CreateExistingPpeComponent', () => {
  let component: CreateExistingPpeComponent;
  let fixture: ComponentFixture<CreateExistingPpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExistingPpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExistingPpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
