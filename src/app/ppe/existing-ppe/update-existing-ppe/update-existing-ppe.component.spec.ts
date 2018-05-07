import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExistingPpeComponent } from './update-existing-ppe.component';

describe('UpdateExistingPpeComponent', () => {
  let component: UpdateExistingPpeComponent;
  let fixture: ComponentFixture<UpdateExistingPpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExistingPpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExistingPpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
