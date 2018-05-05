import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePpeComponent } from './update-ppe.component';

describe('UpdatePpeComponent', () => {
  let component: UpdatePpeComponent;
  let fixture: ComponentFixture<UpdatePpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
