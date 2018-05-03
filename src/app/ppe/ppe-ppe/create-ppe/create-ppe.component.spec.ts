import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePpeComponent } from './create-ppe.component';

describe('CreatePpeComponent', () => {
  let component: CreatePpeComponent;
  let fixture: ComponentFixture<CreatePpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
