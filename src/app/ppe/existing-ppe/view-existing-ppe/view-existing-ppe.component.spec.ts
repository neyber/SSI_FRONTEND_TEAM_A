import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExistingPpeComponent } from './view-existing-ppe.component';

describe('ViewExistingPpeComponent', () => {
  let component: ViewExistingPpeComponent;
  let fixture: ComponentFixture<ViewExistingPpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExistingPpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExistingPpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
