import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPpeComponent } from './existing-ppe.component';

describe('ExistingPpeComponent', () => {
  let component: ExistingPpeComponent;
  let fixture: ComponentFixture<ExistingPpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingPpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingPpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
